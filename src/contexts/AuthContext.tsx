import { createContext, useContext, useState } from "react"

interface AuthContextType {
  user: null | { id: string; name: string }
  login: (credentials: { email: string; password: string }) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<null | { id: string; name: string }>(null)

  const login = async (credentials: { email: string; password: string }) => {
    // Implement login logic
    setUser({ id: "1", name: "Farmer" })
  }

  const logout = () => setUser(null)

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
