"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Root_1 = __importStar(require("./components/root/Root"));
var AppointmentsPage_1 = require("./containers/appointmentsPage/AppointmentsPage");
var ContactsPage_1 = require("./containers/contactsPage/ContactsPage");
function App() {
    var _a = (0, react_1.useState)([]), contacts = _a[0], setContacts = _a[1];
    var _b = (0, react_1.useState)([]), appointments = _b[0], setAppointments = _b[1];
    var addContact = function (name, phone, email) {
        var newContact = {
            id: contacts.length + 1,
            name: name,
            phone: phone,
            email: email
        };
        setContacts(__spreadArray(__spreadArray([], contacts, true), [newContact], false));
    };
    var addAppointment = function (appointment) {
        setAppointments(__spreadArray(__spreadArray([], appointments, true), [appointment], false));
    };
    var router = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Root_1.default, null) },
        react_1.default.createElement(react_router_dom_1.Route, { index: true, element: react_1.default.createElement(react_router_dom_1.Navigate, { to: Root_1.ROUTES.CONTACTS }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: Root_1.ROUTES.CONTACTS, element: react_1.default.createElement(ContactsPage_1.ContactsPage, { contacts: contacts, addContact: addContact, appointments: appointments }) }),
        react_1.default.createElement(react_router_dom_1.Route, { path: Root_1.ROUTES.APPOINTMENTS, element: react_1.default.createElement(AppointmentsPage_1.AppointmentsPage, { appointments: appointments, contacts: contacts, addAppointment: addAppointment }) }))));
    return (react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router }));
}
exports.default = App;
