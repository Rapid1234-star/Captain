import BookingForm from './BookingForm';

function Booking({ availableTimes, dispatch, bookingData, addBooking, submitForm }) { // Add submitForm prop
    const showTimes = availableTimes.map((time) => (
        <span key={time} style={{ padding: '10px', color: 'green' }}>{time} </span>
    ));
    return (
        <>
            <h1>Booking</h1>
            <p>Available times: {showTimes}</p>
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} addBooking={addBooking} submitForm={submitForm} /> {/* Pass submitForm */}
        </>
    );
}

export default Booking;