function Reserv({ availableTimes, dispatch, bookingData, addBooking, submitForm }) { // Add submitForm prop

    const tableStyles = {
        width: '100%',
        maxWidth: '600px',
        margin: '20px auto',
        borderCollapse: 'collapse',
        textAlign: 'left',
        color: '#373030ff',
        backgroundColor: '#f9f9f9'
    };

    const thTdStyles = {
        border: '1px solid #000000ff',
        padding: '8px'
    };

    return (
          <>
            <h1>Reservations</h1>
          {bookingData.length === 0 ? (
                <p>No reservations yet.</p>
            ) : (
                <table style={tableStyles}>
                    <thead>
                        <tr>
                            <th style={thTdStyles}>ID</th>
                            <th style={thTdStyles}>Date</th>
                            <th style={thTdStyles}>Time</th>
                            <th style={thTdStyles}>Guests</th>
                            <th style={thTdStyles}>Occasion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map((booking) => (
                            <tr key={booking.id}>
                                <td style={thTdStyles}>{booking.id}</td>
                                <td style={thTdStyles}>{booking.date}</td>
                                <td style={thTdStyles}>{booking.time}</td>
                                <td style={thTdStyles}>{booking.guests}</td>
                                <td style={thTdStyles}>{booking.occasion || 'None'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
}
export default Reserv;