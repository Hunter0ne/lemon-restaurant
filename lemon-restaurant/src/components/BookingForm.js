import React, { useState } from "react";
import "./Booking.css";

const BookingForm = () => {
  // State variables to store form data
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // Default time
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // State variable for available booking times
  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform actions with the form data (e.g., submit to a server)
    console.log("Booking Details:", { date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
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

export default BookingForm;
