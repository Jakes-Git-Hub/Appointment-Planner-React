import React from "react";

export const ContactPicker = ({ contacts, onChange, value, name}) => {
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
