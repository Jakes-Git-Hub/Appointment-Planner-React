import React from "react";
import { Tile } from "../tile/Tile";
import { Contact, Appointment } from "../../types";

interface TileListProps {
  isAppointmentPage: boolean;
  contacts: Contact[];
  data: Appointment[];
}

export const TileList: React.FC<TileListProps> = ({ isAppointmentPage, contacts, data }) => {
  return (
    <div>
      {contacts.map((contact) => {
        // Check if the data array is empty
        if (data && data.length > 0) {
          // Apply the filter only if the data array is not empty
          const filteredAppointments = data.filter(
            (appointment) => appointment.visitor === contact.id
          );
          return (
            <Tile
              key={contact.id}
              contact={contact}
              isAppointmentPage={isAppointmentPage}
              appointments={filteredAppointments}
            />
          );
        } else {
          // Render the Tile component without appointments if the data array is empty
          return (
            <Tile
              key={contact.id}
              contact={contact}
              isAppointmentPage={isAppointmentPage}
              appointments={[]}
            />
          );
        }
      })}
    </div>
  );
};

