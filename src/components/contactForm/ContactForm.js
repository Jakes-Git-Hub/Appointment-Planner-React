"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactForm = void 0;
var react_1 = __importDefault(require("react"));
var ContactForm = function (_a) {
    var name = _a.name, setName = _a.setName, phone = _a.phone, setPhone = _a.setPhone, email = _a.email, setEmail = _a.setEmail, handleSubmit = _a.handleSubmit;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { onSubmit: handleSubmit },
            react_1.default.createElement("label", null,
                "Name:",
                react_1.default.createElement("input", { type: 'text', value: name, onChange: function (e) { return setName(e.target.value); } })),
            react_1.default.createElement("label", null,
                "Phone:",
                react_1.default.createElement("input", { type: 'number', value: phone, onChange: function (e) { return setPhone(e.target.value); }, pattern: '[0-9]{11}', title: 'Please enter an 11 digit phone number.' })),
            react_1.default.createElement("label", null,
                "Email:",
                react_1.default.createElement("input", { type: 'text', value: email, onChange: function (e) { return setEmail(e.target.value); } })),
            react_1.default.createElement("button", { type: 'submit' }, "Add Contact"))));
};
exports.ContactForm = ContactForm;
