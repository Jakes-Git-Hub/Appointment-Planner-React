import React from "react";
import { ContactPicker } from '../contactPicker/ContactPicker';

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  appointmentName,
  setAppointmentName,
  contact,
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
          onChange={(e) => setVisitor(parseInt(e.target.value))}
          value={contact}
          name='contact'
        />

        <button type='submit'>Add Appointment</button>
      </form>
    </>
  );
};