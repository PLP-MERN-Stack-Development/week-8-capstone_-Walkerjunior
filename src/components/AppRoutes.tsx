import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Crops from "./Crops"
import Weather from "./Weather"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/crops" element={<Crops />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  )
}
