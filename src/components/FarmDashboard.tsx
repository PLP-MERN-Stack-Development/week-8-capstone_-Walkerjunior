import * as React from "react"

interface FarmDashboardProps {}

const FarmDashboard: React.FC<FarmDashboardProps> = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-green-800 mb-6">AgriConnect Dashboard</h1>
      {/* ... rest of your JSX ... */}
    </div>
  )
}

export default FarmDashboard
