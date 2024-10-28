import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

// Define types for Contact and Appointment objects

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

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

 const addContact = (name: string, phone: string, email: string): void => {
  const newContact = {
    id: contacts.length + 1,
    name: name,
    phone: phone,
    email: email
  };
  setContacts([...contacts, newContact]);
 }
 
 const addAppointment = (appointment: Appointment): void => {
  setAppointments([...appointments, appointment]);
 }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} /> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={ contacts } addContact={ addContact } /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={ appointments } contacts={ contacts } addAppointment={ addAppointment } /> }/>
    </Route>
  ));
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
