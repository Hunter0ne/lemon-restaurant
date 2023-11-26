import React, { useState } from "react";
import "./BookingPage.css";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  // State variables for the Booking page component
  const [date, setDate] = useState("");
  const [time, setTime] = useState(""); // Default time
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with the form data (e.g., submit to a server)
    console.log("Booking Details:", { date, time, guests, occasion });
  };

  return (
    <div className="booking-container">
      <h1>Kindly fill the form below to reserve a table</h1>
      <BookingForm
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        handleSubmit={handleSubmit}
      />
      <h3>Thanks for dining with us</h3>
    </div>
  );
};

export default BookingPage;
