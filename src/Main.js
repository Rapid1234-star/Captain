import React, { useEffect, useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Homepage';
import Menu from './Menu';
import About from './About';
import Reservations from './Reservations';
import Booking from './Booking';

// Function to initialize available times


// Function to update available times based on selected date


function Main() {
  const initializeTimes =useEffect(() =>{
  fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data.date;
  });
}, []);
  

const updateTimes = (state, action) => {
  if (action.type === 'updateTimes') {
    // For now, always return the same times
    return initializeTimes;
  }
  return state;
};

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Booking" element={<Booking availableTimes={availableTimes} dispatch={dispatch} />} />
        </Routes>
      </main>
    </>
  );
}

export default Main;