import React from "react";
import { Formik, useField } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Reservation.css";

// Function to create a custom input field
const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

function Reservation() {
  return (
    <div className="booking">
      <div>
        <h1>Book Now</h1>
      </div>
      <Formik
        initialValues={{
          date: "",
          time: "17:00",
          guests: 1,
          occasion: "Birthday",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            toast.success("Form submitted successfully!");
          }, 1000);
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <MyInput label="Choose date" type="date" id="date" name="date" />
            <label htmlFor="time">Choose time</label>
            <select
              id="time"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.time}
              name="time"
            >
              <option value="17:00">17:00</option>
              <option value="18:00">18:00</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
            </select>
            <MyInput
              label="Number of guests"
              type="number"
              id="guests"
              name="guests"
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.occasion}
              name="occasion"
            >
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </select>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        )}
      </Formik>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Reservation;
