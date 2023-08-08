import { renderHook, act } from '@testing-library/react-hooks';
import { useMutation } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNetwork } from "../../contexts/NetworkContext";
import { storeMutation } from "../../utils/OfflineMutations";
import useEditUser from "../../hooks/useEditUser";
import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock("@apollo/client");
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);
jest.mock('@react-native-community/netinfo', () => 
  require('@react-native-community/netinfo/jest/netinfo-mock.js')
);

jest.mock("../../contexts/NetworkContext");
jest.mock("../../utils/OfflineMutations");
jest.mock("console");

describe("useEditUser", () => {
  beforeEach(() => {
    // Reset mocks before each test
    useMutation.mockReset();
    AsyncStorage.getItem.mockReset();
    useNetwork.mockReset();
    storeMutation.mockReset();
  });

  it("updates user when online", async () => {
    useMutation.mockReturnValue([jest.fn(), { data: null, loading: false, error: null }]);
    useNetwork.mockReturnValue({ isOnline: true });
    AsyncStorage.getItem.mockResolvedValue("some-timestamp");

    const { result } = renderHook(() => useEditUser());
    await act(async () => {
      await result.current.updateUser({ variables: { id: "1", name: "John" } });
    });
  });

  it("stores mutation when offline", async () => {
    useMutation.mockReturnValue([jest.fn(), { data: null, loading: false, error: null }]);
    useNetwork.mockReturnValue({ isOnline: false });
    AsyncStorage.getItem.mockResolvedValue("some-timestamp");

    const { result } = renderHook(() => useEditUser());
    await act(async () => {
      await result.current.updateUser({ variables: { id: "1", name: "John" } });
    });
  });

  it("throws error when lastKnownUpdatedAt does not exist", async () => {
    useMutation.mockReturnValue([jest.fn(), { data: null, loading: false, error: null }]);
    useNetwork.mockReturnValue({ isOnline: true });
    AsyncStorage.getItem.mockResolvedValue(null);

    const { result } = renderHook(() => useEditUser());
    await expect(result.current.updateUser({ variables: { id: "1", name: "John" } })).rejects.toThrow();
  });
});
