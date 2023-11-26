import React, { useReducer, useEffect } from "react";
import "./Booking.css";

// Reducer function to handle state changes
const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload.availableTimes;
    default:
      return state;
  }
};

const BookingForm = ({
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
  handleSubmit,
}) => {
  const [availableTimes, dispatch] = useReducer(reducer, []);

  // Function to dispatch state changes when the date form field is changed
  const handleDateChange = async (newDate) => {
    setDate(newDate);
    try {
      // Fetch available times from the API for the selected date
      const data = await fetchAPI(newDate);

      // Dispatch an action to update availableTimes based on the API response
      dispatch({
        type: "UPDATE_TIMES",
        payload: { availableTimes: data },
      });
    } catch (error) {
      console.error("Error fetching available times:", error);
    }
  };

  // Update availableTimes on component mount
  useEffect(() => {
    // Fetch initial available times when the component mounts
    const fetchInitialTimes = async () => {
      try {
        const data = await fetchAPI(date);

        // Dispatch an action to update availableTimes based on the API response
        dispatch({
          type: "UPDATE_TIMES",
          payload: { availableTimes: data },
        });
      } catch (error) {
        console.error("Error fetching initial available times:", error);
      }
    };

    fetchInitialTimes();
  }, [date]);

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => handleDateChange(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {/* Map through available times and create options */}
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your reservation"
        className="Reservation"
      />
    </form>
  );
};

// API functions (replace these with the actual logic)
const fetchAPI = async (selectedDate) => {
  // Use the provided API endpoint to fetch available times for the selected date
  const endpoint = `https://raw.githubusercontent.com/rofinn/ll-frontend-capstone/main/src/api.js`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const submitAPI = async (formData) => {
  // Use the provided API endpoint to submit booking form data
  const endpoint = `https://raw.githubusercontent.com/rofinn/ll-frontend-capstone/main/src/api.js`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  return result;
};

export default BookingForm;
