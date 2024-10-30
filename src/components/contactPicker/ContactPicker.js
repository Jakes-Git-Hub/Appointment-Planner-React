"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPicker = void 0;
var react_1 = __importDefault(require("react"));
var ContactPicker = function (_a) {
    var contacts = _a.contacts, onChange = _a.onChange, value = _a.value, name = _a.name;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("select", { onChange: onChange, value: value, name: name },
            react_1.default.createElement("option", { value: "" }, "No Contact Selected"),
            contacts.map(function (contact) { return (react_1.default.createElement("option", { key: contact.id, value: contact.id }, contact.name)); }))));
};
exports.ContactPicker = ContactPicker;
