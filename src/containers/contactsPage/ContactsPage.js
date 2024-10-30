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
exports.ContactsPage = void 0;
var react_1 = __importStar(require("react"));
var ContactForm_1 = require("../../components/contactForm/ContactForm");
var TileList_1 = require("../../components/tileList/TileList");
var ContactsPage = function (_a) {
    var appointments = _a.appointments, contacts = _a.contacts, addContact = _a.addContact;
    var _b = (0, react_1.useState)(''), name = _b[0], setName = _b[1];
    var _c = (0, react_1.useState)(''), phone = _c[0], setPhone = _c[1];
    var _d = (0, react_1.useState)(''), email = _d[0], setEmail = _d[1];
    var _e = (0, react_1.useState)(false), isDuplicate = _e[0], setIsDuplicate = _e[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        if (!isDuplicate) {
            addContact(name, phone, email);
            setName('');
            setPhone('');
            setEmail('');
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Add Contact"),
            react_1.default.createElement(ContactForm_1.ContactForm, { name: name, setName: setName, phone: phone, setPhone: setPhone, email: email, setEmail: setEmail, isDuplicate: isDuplicate, setIsDuplicate: setIsDuplicate, handleSubmit: handleSubmit })),
        react_1.default.createElement("hr", null),
        react_1.default.createElement("section", null,
            react_1.default.createElement("h2", null, "Contacts"),
            react_1.default.createElement(TileList_1.TileList, { data: appointments, isAppointmentPage: false, contacts: contacts }))));
};
exports.ContactsPage = ContactsPage;
