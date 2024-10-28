import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Outlet, NavLink } from "react-router-dom";
export const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
};
function Root() {
    return (_jsxs(_Fragment, { children: [_jsxs("nav", { children: [_jsx(NavLink, { to: ROUTES.CONTACTS, children: "Contacts" }), _jsx(NavLink, { to: ROUTES.APPOINTMENTS, children: "Appointments" })] }), _jsx(Outlet, {})] }));
}
export default Root;
