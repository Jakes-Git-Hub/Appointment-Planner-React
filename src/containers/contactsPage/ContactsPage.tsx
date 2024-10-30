import React, { useState } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
import { Contact, Appointment } from "../../types";

interface ContactsPageProps {
  appointments: Appointment[];
  contacts: Contact[];
  addContact: (name: string, phone: string, email: string) => void;
}

export const ContactsPage: React.FC<ContactsPageProps> = ({ appointments, contacts, addContact }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isDuplicate) {
      addContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm 
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          isDuplicate={isDuplicate}
          setIsDuplicate={setIsDuplicate}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
          data={appointments}
          isAppointmentPage={false}
          contacts={contacts}
        />
      </section>
    </div>
  );
};
