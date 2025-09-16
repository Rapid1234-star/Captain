import BookingForm from './BookingForm';

function Booking({ availableTimes, dispatch, bookingData, addBooking, submitForm }) {
    const showTimes = availableTimes.map((time) => (
        <span key={time} className="available-time">{time}</span>
    ));
    return (
        <div className="booking-page">
            <div className="booking-header">
                <h1>Reserve a Table</h1>
                <p className="booking-subtitle">Experience the perfect dining atmosphere at Little Lemon</p>
            </div>
            <div className="booking-container">
                <div className="times-container">
                    <h2>Available Times</h2>
                    <div className="available-times">{showTimes}</div>
                </div>
                <BookingForm availableTimes={availableTimes} dispatch={dispatch} addBooking={addBooking} submitForm={submitForm} />
            </div>
        </div>
    );
}

export default Booking;