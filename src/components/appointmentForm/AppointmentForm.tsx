import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';
import { Contact } from "../../types";

interface AppointmentFormProps {
  contacts: Contact[];
  appointmentName: string;
  setAppointmentName: (name: string) => void;
  visitor: number;
  setVisitor: (visitorId: number) => void;
  date: string;
  setDate: (date: string) => void;
  time: string;
  setTime: (time: string) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const getTodayString = (): string => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  contacts,
  appointmentName,
  setAppointmentName,
  visitor,
  setVisitor,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' value={appointmentName} onChange={(e) => setAppointmentName(e.target.value)}/>
        </label>

        <label>
          Date:
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)} min={getTodayString()}/>
        </label>

        <label>
          Time:
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)}/>
        </label>

        <ContactPicker 
          contacts={contacts} 
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setVisitor(parseInt(e.target.value))}
          value={visitor}
          name='contact'
        />

        <button type='submit'>Add Appointment</button>
      </form>
    </>
  );
};