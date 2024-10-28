import React, { useState, FC } from "react"; // Importing FC
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

// Define types for the props received by AppointmentsPage
interface Contact {
  id: number;
  name: string;
  phone: string;
  email: string;
}

interface Appointment {
  id: number;
  title: string;
  contactId: number;
  date: string;
  time: string;
}

interface AppointmentsPageProps {
  appointments: Appointment[];
  contacts: Contact[];
  addAppointment: (appointment: Appointment) => void;
}

export const AppointmentsPage: FC<AppointmentsPageProps> = ({
  appointments,
  contacts,
  addAppointment,
}) => {
  const [title, setTitle] = useState<string>('');
  const [contactId, setContactId] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const selectedContactId = parseInt(contactId, 10);

    const newAppointment: Appointment = {
      id: appointments.length + 1,
      title,
      contactId: selectedContactId,
      date,
      time,
    };

    addAppointment(newAppointment);
    // Reset form fields
    setTitle('');
    setContactId('');
    setDate('');
    setTime('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          contactId={contactId}
          setContactId={setContactId}
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
