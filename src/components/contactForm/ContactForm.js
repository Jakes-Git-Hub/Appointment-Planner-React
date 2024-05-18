import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
      </label>

      <label>
        Phone:
        <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} pattern='[0-9]{11}' title='Please enter an 11 digit phone number.' />
      </label>

      <label>
        Email:
        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>

      <button type='submit'>Add Contact</button>
    </form>
    </>
  );
};

