"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = void 0;
var react_1 = __importDefault(require("react"));
var Tile = function (_a) {
    var contact = _a.contact, isAppointmentPage = _a.isAppointmentPage, appointments = _a.appointments;
    var name = contact.name, phone = contact.phone, email = contact.email;
    return (react_1.default.createElement("div", { className: "tile-container" }, isAppointmentPage ? (appointments.map(function (appointment) { return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: "tile" },
            "Visitor: ",
            name),
        react_1.default.createElement("p", { className: "tile" },
            "To see: ",
            appointment.appointmentName),
        react_1.default.createElement("p", { className: "tile" },
            "Date: ",
            formatDate(appointment.date)),
        react_1.default.createElement("p", { className: "tile" },
            "Time: ",
            appointment.time))); })) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: "tile" },
            "Contact: ",
            name),
        react_1.default.createElement("p", { className: "tile" },
            "Phone: ",
            phone),
        react_1.default.createElement("p", { className: "tile" },
            "Email: ",
            email)))));
};
exports.Tile = Tile;
// Helper function to format the date in the desired format
var formatDate = function (dateString) {
    var date = new Date(dateString);
    var day = date.getDate().toString().padStart(2, '0');
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var year = date.getFullYear().toString();
    return "".concat(day, "-").concat(month, "-").concat(year);
};
