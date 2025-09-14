import React, { use, useReducer, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Homepage';
import Menu from './Menu';
import About from './About';
import Reservations from './Reservations';
import Booking from './Booking';

// Function to initialize available times
const initializeTimes = () => {
  try {
    const today = new Date();
    if (typeof window.fetchAPI !== 'function') {
      console.error("fetchAPI is not defined");
      return ["17:00", "18:00", "19:00", "20:00", "21:00"]; // Fallback times
    }
    const times = window.fetchAPI(today);
    console.log("Initialized times:", times); // Debug log
    return times;
  } catch (error) {
    console.error("Error in initializeTimes:", error);
    return ["17:00", "18:00", "19:00", "20:00", "21:00"]; // Fallback times
  }
};

// Reducer function to update available times based on selected date
const updateTimes = (state, action) => {
  if (action.type === 'updateTimes') {
    try {
      const selectedDate = new Date(action.date);
      if (typeof window.fetchAPI !== 'function') {
        console.error("fetchAPI is not defined");
        return state; // Return current state as fallback
      }
      const times = window.fetchAPI(selectedDate);
      console.log("Updated times for date", action.date, ":", times); // Debug log
      return times;
    } catch (error) {
      console.error("Error in updateTimes:", error);
      return state; // Return current state to avoid breaking the app
    }
  }
  return state;
};

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const[bookingData, setBookingData] = useState([]);

  const addBooking=(data) => {
    setBookingData([...bookingData, data]);
  }

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/Booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} />} />
      </Routes>
    </main>
  );
}

export default Main;