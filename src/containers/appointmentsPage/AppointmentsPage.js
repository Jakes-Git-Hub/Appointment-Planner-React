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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsPage = void 0;
var react_1 = __importStar(require("react"));
var AppointmentForm_1 = require("../../components/appointmentForm/AppointmentForm");
var TileList_1 = require("../../components/tileList/TileList");
var AppointmentsPage = function (_a) {
    var appointments = _a.appointments, contacts = _a.contacts, addAppointment = _a.addAppointment;
    var _b = (0, react_1.useState)(''), appointmentName = _b[0], setAppointmentName = _b[1];
    var _c = (0, react_1.useState)(''), visitor = _c[0], setVisitor = _c[1];
    var _d = (0, react_1.useState)(''), date = _d[0], setDate = _d[1];
    var _e = (0, react_1.useState)(''), time = _e[0], setTime = _e[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        var selectedVisitorId = parseInt(visitor);
        var newAppointment = {
            appointmentName: appointmentName,
            date: date,
            time: time,
            visitor: selectedVisitorId
        };
        addAppointment(newAppointment);
        setAppointmentName('');
        setVisitor('');
        setDate('');
        setTime('');
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Add Appointment"),
            react_1.default.createElement(AppointmentForm_1.AppointmentForm, { contacts: contacts, appointmentName: appointmentName, setAppointmentName: setAppointmentName, visitor: visitor, setVisitor: setVisitor, date: date, setDate: setDate, time: time, setTime: setTime, handleSubmit: handleSubmit })),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Appointments"),
            react_1.default.createElement(TileList_1.TileList, { data: appointments, isAppointmentPage: true, contacts: contacts }))));
};
exports.AppointmentsPage = AppointmentsPage;
