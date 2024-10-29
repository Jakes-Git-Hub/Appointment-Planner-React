import React, { useState } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

interface Appointment {
  appointmentName: string;
  date: string;
  time: string;
  visitor: number;
}

interface Contact {
  id: number;
  name: string;
}

interface AppointmentsPageProps {
  appointments: Appointment[];
  contacts: Contact[];
  addAppointment: (appointment: Appointment) => void;
}

export const AppointmentsPage: React.FC<AppointmentsPageProps> = ({ appointments, contacts, addAppointment }) => {
  const [appointmentName, setAppointmentName] = useState<string>('');
  const [visitor, setVisitor] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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