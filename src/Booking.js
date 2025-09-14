import BookingForm from './BookingForm';
import { useEffect } from 'react';

function Booking({ availableTimes, dispatch }) {
    const showTimes = availableTimes.map((time) => (
        <span key={time} style={{padding: '10px',color: 'green'}}>{time} </span>))
    
        
  return (<>
    <h1>Booking</h1>
    <p>Avaliable time:{showTimes}</p>
    <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
}

export default Booking;