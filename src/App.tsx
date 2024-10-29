import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { Contact, Appointment } from "./types";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

 const addContact = (name: string, phone: string, email: string) => {
  const newContact = {
    id: contacts.length + 1,
    name: name,
    phone: phone,
    email: email
  };
  setContacts([...contacts, newContact]);
 }
 
 const addAppointment = (appointment: Appointment) => {
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