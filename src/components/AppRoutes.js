import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Crops from "./Crops";
import Weather from "./Weather";
const AppRoutes = () => {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Dashboard, {}) }), _jsx(Route, { path: "/crops", element: _jsx(Crops, {}) }), _jsx(Route, { path: "/weather", element: _jsx(Weather, {}) })] }));
};
export default AppRoutes;
