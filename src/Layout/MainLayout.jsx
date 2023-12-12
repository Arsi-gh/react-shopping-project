import { useState } from "react"
import Navbar from "../Components/Global Ui/Navbar"
import { Outlet } from "react-router-dom"
import Sidebar from "../Components/Dashboard/Sidebar"
import Footer from "../Components/Global Ui/Footer"
import SideNav from "../Components/Global Ui/SideNav"

export default function MainLayout() {

  const [displaySidebar , setDisplaySidebar] = useState(false)
  
  return (
    <>
    <Navbar sideDisplayHandler={setDisplaySidebar}/>
    <div className="max-w-[1500px] m-auto">
        {displaySidebar && <SideNav toggleDisplay={setDisplaySidebar}/>}
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}