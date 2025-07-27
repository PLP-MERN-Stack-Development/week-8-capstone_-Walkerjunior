import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const login = async (credentials) => {
        // Implement login logic
        setUser({ id: "1", name: "Farmer" });
    };
    const logout = () => setUser(null);
    return (_jsx(AuthContext.Provider, { value: { user, login, logout }, children: children }));
}
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("useAuth must be used within AuthProvider");
    return context;
}
