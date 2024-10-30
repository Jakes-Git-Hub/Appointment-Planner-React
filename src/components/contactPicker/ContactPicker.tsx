import React from "react";
import { Contact } from "../../types";

interface ContactPickerProps {
  contacts: Contact[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
  name: string;
}

export const ContactPicker: React.FC<ContactPickerProps> = ({ contacts, onChange, value, name }) => {
  return (
    <>
      <select onChange={onChange} value={value} name={name}>
        <option value="">No Contact Selected</option>
        {contacts.map((contact) => (
          <option key={contact.id} value={contact.id}>{contact.name}</option>
        ))}
      </select>
    </>
  );
};
