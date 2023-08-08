import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import BirthdayPickerAtom from "../../../../src/components/atoms/BirthdayPickerAtom";

describe("BirthdayPickerAtom", () => {
  let mockOnDateChange;

  beforeEach(() => {
    mockOnDateChange = jest.fn();
  });

  it("renders correctly", async () => {
    const { getByTestId } = render(
      <BirthdayPickerAtom
        selectedDate={new Date()}
        onDateChange={mockOnDateChange}
      />
    );
    await waitFor(() => {
      expect(getByTestId("birthdayInput")).toBeTruthy();
    });
  });

  it("shows date picker when component is pressed", async () => {
    const { getByTestId, queryByTestId } = render(
      <BirthdayPickerAtom
        selectedDate={new Date()}
        onDateChange={mockOnDateChange}
      />
    );

    fireEvent.press(getByTestId("birthdayInput"));
    expect(queryByTestId("dateTimePicker")).toBeTruthy();
  });

  it("shows date picker when calendar icon is pressed", async () => {
    const { getByTestId, queryByTestId } = render(
      <BirthdayPickerAtom
        selectedDate={new Date()}
        onDateChange={mockOnDateChange}
      />
    );

    fireEvent.press(getByTestId("iconButton"));
    expect(queryByTestId("dateTimePicker")).toBeTruthy();
  });

  it("calls onDateChange with the correct date when a date is selected", async () => {
    const { getByTestId } = render(
      <BirthdayPickerAtom
        selectedDate={new Date()}
        onDateChange={mockOnDateChange}
      />
    );

    fireEvent.press(getByTestId("iconButton")); // To show the DateTimePicker
    fireEvent(getByTestId("dateTimePicker"), "onChange", {
      nativeEvent: { timestamp: new Date("2023-08-08").getTime() },
    });
    expect(mockOnDateChange).toHaveBeenCalledWith(new Date("2023-08-08"));
  });
});
