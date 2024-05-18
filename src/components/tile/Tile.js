export const Tile = ({ contact, isAppointmentPage, appointments }) => {
  const { name, phone, email } = contact;

  return (
    <div className="tile-container">
      {isAppointmentPage ? (
        appointments.map(appointment => (
          <>
            <p className="tile">Visitor: {name}</p>
            <p className="tile">To see: {appointment.appointmentName}</p>
            <p className="tile">Date: {formatDate(appointment.date)}</p>
            <p className="tile">Time: {appointment.time}</p>
          </>
        ))
      ) : (
        <>
          <p className="tile">Contact: {name}</p>
          <p className="tile">Phone: {phone}</p>
          <p className="tile">Email: {email}</p>
        </>
      )}
    </div>
  );
};

// Helper function to format the date in the desired format
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();

  return `${day}-${month}-${year}`;
};
