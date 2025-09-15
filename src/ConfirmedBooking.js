function ConfirmedBooking() {
    const Hstyles={
        transition:"all 0.5s ease",
        transform:"scale(1.2)",
        color:"#4CAF50",
        textAlign:"center",
        marginTop:"50px"
    }
  return (
    <>
      <h2 style={Hstyles}>Booking Confirmed!</h2>
      <p>Your booking has been successfully confirmed. Thank you for choosing our service!</p>
    </>
  );
}
export default ConfirmedBooking;