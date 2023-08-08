import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserList from "../../hooks/useUserList";

jest.mock("@apollo/client");
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

describe("useUserList", () => {
  beforeEach(() => {
    // Reset mocks before each test
    useQuery.mockReset();
    AsyncStorage.getItem.mockReset();
  });

  it("returns data when query is successful", () => {
    const mockData = { users: [{ id: "1", name: "John" }] };
    useQuery.mockReturnValue({ data: mockData, loading: false, error: null });

    const { result } = renderHook(() => useUserList());

    expect(result.current.data).toEqual(mockData);
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toBeNull();
  });

  it("returns loading state", () => {
    useQuery.mockReturnValue({ data: null, loading: true, error: null });

    const { result } = renderHook(() => useUserList());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBeTruthy();
    expect(result.current.error).toBeNull();
  });

  it("returns error state", () => {
    const mockError = new Error("An error occurred!");
    useQuery.mockReturnValue({ data: null, loading: false, error: mockError });

    const { result } = renderHook(() => useUserList());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBeFalsy();
    expect(result.current.error).toEqual(mockError);
  });
});
