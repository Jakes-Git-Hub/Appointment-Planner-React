import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
} as const;

const Root: React.FC = () => {
    return (
        <>
            <nav>
                <NavLink to={ROUTES.CONTACTS}>
                    Contacts
                </NavLink>
                <NavLink to={ROUTES.APPOINTMENTS}>
                    Appointments
                </NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default Root;