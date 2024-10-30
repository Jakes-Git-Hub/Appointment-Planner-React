"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentForm = void 0;
var react_1 = __importDefault(require("react"));
var ContactPicker_1 = require("../contactPicker/ContactPicker");
var getTodayString = function () {
    var _a = new Date()
        .toLocaleDateString("en-US")
        .split("/"), month = _a[0], day = _a[1], year = _a[2];
    return "".concat(year, "-").concat(month.padStart(2, "0"), "-").concat(day.padStart(2, "0"));
};
var AppointmentForm = function (_a) {
    var contacts = _a.contacts, appointmentName = _a.appointmentName, setAppointmentName = _a.setAppointmentName, visitor = _a.visitor, setVisitor = _a.setVisitor, date = _a.date, setDate = _a.setDate, time = _a.time, setTime = _a.setTime, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("label", null,
                "Name:",
                react_1.default.createElement("input", { type: 'text', value: appointmentName, onChange: function (e) { return setAppointmentName(e.target.value); } })),
            react_1.default.createElement("label", null,
                "Date:",
                react_1.default.createElement("input", { type: 'date', value: date, onChange: function (e) { return setDate(e.target.value); }, min: getTodayString() })),
            react_1.default.createElement("label", null,
                "Time:",
                react_1.default.createElement("input", { type: 'time', value: time, onChange: function (e) { return setTime(e.target.value); } })),
            react_1.default.createElement(ContactPicker_1.ContactPicker, { contacts: contacts, onChange: function (e) { return setVisitor(parseInt(e.target.value)); }, value: visitor, name: 'contact' }),
            react_1.default.createElement("button", { type: 'submit' }, "Add Appointment"))));
};
exports.AppointmentForm = AppointmentForm;
