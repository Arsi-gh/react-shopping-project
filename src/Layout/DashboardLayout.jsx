import Sidebar from '../Components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="mx-[1rem] flex gap-3 min-h-screen max-sm:flex-col">
      <Sidebar/>
      <div className="w-full bg-white rounded-xl overflow-hidden">
        <Outlet/>
      </div>
    </div>
  )
}