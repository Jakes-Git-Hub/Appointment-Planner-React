export interface Contact {
    id: number;
    name: string;
    phone: string;
    email: string;
}
  
export interface Appointment {
    appointmentName: string;
    date: string;
    time: string;
    visitor: number; // Assuming visitor is a contact ID
}