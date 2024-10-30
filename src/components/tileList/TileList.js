"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileList = void 0;
var react_1 = __importDefault(require("react"));
var Tile_1 = require("../tile/Tile");
var TileList = function (_a) {
    var isAppointmentPage = _a.isAppointmentPage, contacts = _a.contacts, data = _a.data;
    return (react_1.default.createElement("div", null, contacts.map(function (contact) {
        // Check if the data array is empty
        if (data && data.length > 0) {
            // Apply the filter only if the data array is not empty
            var filteredAppointments = data.filter(function (appointment) { return appointment.visitor === contact.id; });
            return (react_1.default.createElement(Tile_1.Tile, { key: contact.id, contact: contact, isAppointmentPage: isAppointmentPage, appointments: filteredAppointments }));
        }
        else {
            // Render the Tile component without appointments if the data array is empty
            return (react_1.default.createElement(Tile_1.Tile, { key: contact.id, contact: contact, isAppointmentPage: isAppointmentPage, appointments: [] }));
        }
    })));
};
exports.TileList = TileList;
