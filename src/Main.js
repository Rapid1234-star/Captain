import React, { useReducer, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Add useNavigate
import Home from './Homepage';
import Menu from './Menu';
import About from './About';
import Reservations from './Reservations';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

const initializeTimes = () => {
    try {
        const today = new Date();
        if (typeof window.fetchAPI !== 'function') {
            console.error("fetchAPI is not defined");
            return ["17:00", "18:00", "19:00", "20:00", "21:00"];
        }
        const times = window.fetchAPI(today);
        console.log("Initialized times:", times);
        return times;
    } catch (error) {
        console.error("Error in initializeTimes:", error);
        return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    }
};

const updateTimes = (state, action) => {
    if (action.type === 'updateTimes') {
        try {
            const selectedDate = new Date(action.date);
            if (typeof window.fetchAPI !== 'function') {
                console.error("fetchAPI is not defined");
                return state;
            }
            const times = window.fetchAPI(selectedDate);
            console.log("Updated times for date", action.date, ":", times);
            return times;
        } catch (error) {
            console.error("Error in updateTimes:", error);
            return state;
        }
    }
    return state;
};

function Main() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const [bookingData, setBookingData] = useState([]);
    const navigate = useNavigate(); // Add useNavigate hook

    const addBooking = (formData) => {
        setBookingData((prev) => [...prev, { ...formData, id: Date.now() }]);
    };

    // New submitForm function
    const submitForm = (formData) => {
        try {
            if (typeof window.submitAPI !== 'function') {
                console.error("submitAPI is not defined");
                // Simulate successful submission for testing
                addBooking(formData);
                navigate('/ConfirmedBooking');
                return true;
            }
            const result = window.submitAPI(formData);
            if (result) {
                addBooking(formData); // Save booking if API call is successful
                navigate('/ConfirmedBooking'); // Navigate to confirmation page
            }
            return result;
        } catch (error) {
            console.error("Error in submitForm:", error);
            return false;
        }
    };

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Menu" element={<Menu />} />
                <Route path="/About" element={<About />} />
                <Route path="/Reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} bookingData={bookingData} addBooking={addBooking} submitForm={submitForm} />} />
                <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
                <Route path="/Booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} bookingData={bookingData} addBooking={addBooking} submitForm={submitForm} />} /> {/* Pass submitForm */}
            </Routes>
        </main>
    );
}
export { initializeTimes, updateTimes };
export default Main;