import { AtSymbolIcon, CalendarDaysIcon, DevicePhoneMobileIcon, GlobeAsiaAustraliaIcon, IdentificationIcon, InformationCircleIcon } from "@heroicons/react/24/outline";
import { OrderItem } from "./OrdersPage";
import { NavLink } from "react-router-dom";

export default function MainDashboard() {
  return (
    <div className="w-fullh-fit flex flex-wrap gap-2 p-2 content-start">
        <LatestOrders/>
        <AccountPart/>
        <LatestItems/>
        <SubscriptionStatus/>
    </div>
  )
}

const LatestOrders = () => {
    return (
        <div className="rounded-lg bg-zinc-200 flex flex-col gap-2 p-2 py-[10px]  shadow-customeThree max-lg:w-full">
            <h3 className="font-bold">Your recent orders :</h3>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <NavLink to="/user-dashboard/orders" className="p-2 text-center bg-green-500 rounded-lg text-white font-bold">See more</NavLink>
        </div>
    )
}

const AccountPart = () => {
    return (
        <div className="rounded-lg flex-1 bg-zinc-200 flex flex-wrap content-start gap-2 p-2 h-fit shadow-customeThree max-lg:w-full max-sm:text-sm">
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[49.3%] max-md:w-[100%]">
                <p><b>First name :</b> Arsalan</p>
                <InformationCircleIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Last name : </b> Ghoochani </p>
                <InformationCircleIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[100%]">
                <p><b>Email : </b> arsalanghoochani15@gmail.com</p>
                <AtSymbolIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[100%]">
                <p><b>Phone number : </b>+98 9135674562 </p>
                <DevicePhoneMobileIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[100%]">
                <p><b>National code : </b> 1282048829 </p>
                <IdentificationIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Birth date : </b> 18 - April - 2002 </p>
                <CalendarDaysIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Country : </b> Iran </p>
                <GlobeAsiaAustraliaIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-slate-50 w-[49.3%] max-md:w-[100%]">
                <p><b>City : </b> Esfahan </p>
                <GlobeAsiaAustraliaIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <NavLink to="/user-dashboard/edit-account" className="p-[14px] text-center h-fit px-2 rounded-lg  bg-green-500 w-[49.3%] font-bold text-white  max-md:w-[100%]">Edit Account</NavLink>
        </div>
    )
}


const LatestItems = () => {
    return (
        <div className="p-2 rounded-lg bg-zinc-200  w-[50rem] overflow-x-auto shadow-customeThree">
            <h3 className="w-full font-bold">Your recent viewed products :</h3>
            <div className="flex gap-3 mt-4">
                <img className="min-w-[9rem] h-[11rem] rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
            </div>
        </div>
    )
}

const SubscriptionStatus = () => {
    return (
        <div className="p-2 rounded-lg bg-zinc-200 flex flex-col shadow-customeThree max-sm:w-full">
            <div className="w-[18.5rem] h-[10rem] bg-red-400 rounded-lg max-sm:w-full"></div>
            <NavLink to="/subscription" className="p-2 bg-white text-center rounded-lg mt-2">Resub</NavLink>
        </div>
    )
}