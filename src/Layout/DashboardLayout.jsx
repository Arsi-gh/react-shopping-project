import Sidebar from '../Components/Dashboard/Sidebar'
import { Outlet, useHref, useParams, useRoutes } from 'react-router-dom'

export default function DashboardLayout() {

  const href =  useHref()

  return (
    <div className="mx-[1rem] flex gap-3 max-sm:flex-col">
      <Sidebar/>
      <div className={`w-full min-h-[50rem] rounded-xl overflow-hidden ${href == '/dashboard/' ? '' : 'shadow-2xl bg-white'}`}>
        <Outlet/>
      </div>
    </div>
  )
}