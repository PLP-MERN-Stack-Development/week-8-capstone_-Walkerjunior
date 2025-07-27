import * as React from "react"
import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Crops from "./Crops"
import Weather from "./Weather"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/crops" element={<Crops />} />
      <Route path="/weather" element={<Weather />} />
    </Routes>
  )
}

export default AppRoutes
