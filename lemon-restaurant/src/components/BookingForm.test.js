// BookingForm.test.js
import React from "react";
import { render } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders static text in BookingForm component", () => {
  const { getByText } = render(<BookingForm />);

  // Test for static text
  const staticTextElement = getByText("Choose date");

  expect(staticTextElement).toBeInTheDocument();
});

// Test for initializeTimes function
test("initializeTimes returns correct value", () => {
  const expectedValue = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const result = initializeTimes();

  expect(result).toEqual(expectedValue);
});

// Test for updateTimes function
test("updateTimes returns the same value provided in state", () => {
  const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const action = { type: "UPDATE_TIMES", payload: { availableTimes: state } };
  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});
