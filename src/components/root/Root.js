"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = void 0;
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
exports.ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
};
var Root = function () {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("nav", null,
            react_1.default.createElement(react_router_dom_1.NavLink, { to: exports.ROUTES.CONTACTS }, "Contacts"),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: exports.ROUTES.APPOINTMENTS }, "Appointments")),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
};
exports.default = Root;
