import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch, addBooking, submitForm }) { // Add submitForm prop
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        setDate(newDate);
        dispatch({ type: "updateTimes", date: newDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { date, time, guests: Number(guests), occasion };
        if (!date || !time || !guests) {
            alert("Please fill out all required fields.");
            return;
        }
        try {
            const result = submitForm(formData); // Call submitForm
            if (result) {
                // Clear form only on successful submission
                setDate("");
                setTime("");
                setGuests("");
                setOccasion("");
            } else {
                alert("An error occurred. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const optionTimes = availableTimes.map((time) => (
        <option key={time} className="Selected" value={time}>
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
        <form style={Styles} onSubmit={handleSubmit} className="booking-form" aria-label="Booking Form">
            <label htmlFor="date">Choose date</label>
            <input
                type="date"
                id="date"
                value={date}
                onChange={handleDateChange}
                required
            />

            <label htmlFor="time" aria-label="Choose time">Choose time:</label>
            <select
                id="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
            >
                <option value="">Select a Time</option>
                {optionTimes}
            </select>

            <label htmlFor="guests" aria-label="Number of Guests">Number of guests</label>
            <input
                type="number"
                id="guests"
                placeholder="1"
                min="1"
                max="10"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
            />

            <label htmlFor="occasion" aria-label="Pick An occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option className="Selected" value="">Select an Occasion</option>
                <option className="Selected" value="Birthday">Birthday</option>
                <option className="Selected"  value="Anniversary">Anniversary</option>
            </select>

            <input
                type="submit"
                value="Make Your Reservation"
                aria-label="Submit"
                style={ButtonStyle}
                disabled={!date || !time || !guests} // Disable if required fields are empty
            />
        </form>
    );
}

export default BookingForm;