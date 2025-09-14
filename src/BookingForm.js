import React, { useState, useEffect } from "react";

function BookingForm(props) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");

  // Update available times when date changes
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);
    props.dispatch({ type: "updateTimes", date: newDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with:
      Date: ${date}
      Time: ${time}
      Guests: ${guests}
      Occasion: ${occasion}`);
    setDate("");
    setTime("");
    setGuests("");
    setOccasion("");
  };

  const optionTimes = props.availableTimes.map((time) => (
    <option key={time} value={time}>
      {time}
    </option>
  ));

  const Styles = {
    display: "grid",
    maxWidth: "400px",
    gap: "20px",
    margin: "auto",
    padding: "20px",
    gridTemplateColumns: "1fr 1fr"
  };

  const ButtonStyle = {
    gridColumn: "1 / -1",
    justifySelf: "center",
    backgroundColor: "#f4ce14",
    borderRadius: "4px",
    cursor: "pointer",
    padding: "10px"
  };

  return (
    <form style={Styles} onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="time">Choose time:</label>
      <select
        id="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a Time</option>
        {optionTimes}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        placeholder="1"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="">Select an Occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input
        type="submit"
        value="Make Your Reservation"
        style={ButtonStyle}
      />
    </form>
  );
}

export default BookingForm;
