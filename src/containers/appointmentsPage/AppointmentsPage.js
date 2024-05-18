import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, contacts, addAppointment }) => {
  const [appointmentName, setAppointmentName] = useState('');
  const [visitor, setVisitor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isAppointmentPage, setIsAppointmentPage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedVisitorId = parseInt(visitor);

    const newAppointment = {
      appointmentName: appointmentName,
      date: date,
      time: time,
      visitor: selectedVisitorId
    };

    addAppointment(newAppointment);
    setAppointmentName('');
    setVisitor('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          appointmentName={appointmentName}
          setAppointmentName={setAppointmentName}
          visitor={visitor}
          setVisitor={setVisitor}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
          data={appointments}
          isAppointmentPage={true}
          contacts={contacts}
        />
      </section>
    </div>
  );
};
