import Sidebar from '../Components/Dashboard/Sidebar'
import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <div className="mx-[1rem] flex gap-3 max-sm:flex-col">
      <Sidebar/>
      <div className="w-full min-h-[50rem] bg-white rounded-xl overflow-hidden shadow-2xl">
        <Outlet/>
      </div>
    </div>
  )
}