import { ArrowLongRightIcon, AtSymbolIcon, CalendarDaysIcon, CreditCardIcon, DevicePhoneMobileIcon, GlobeAsiaAustraliaIcon, IdentificationIcon, InformationCircleIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";
import { OrderItem } from "./User/OrdersPage";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import TransactionsChart from "./Admin/TransactionsChart";
import { TicketItem } from "./User/TicketsPage";
import { SeperatorX } from "../Global Ui/Seperator";

export default function MainDashboard() {

  const [role , setRole] = useState(false)  

  return (
    <div className="w-fullh-fit flex flex-wrap gap-2 p-2 content-start">
        {role ? <UserOptions/> : <AdminOptions/>}
    </div>
  )
}

const AdminOptions = () => {
    return (
        <>
        <TransactionsInfo/>
        <ChartCon/>
        <TicketsCon/>
        <UsersInfo/>
        </>
    )
}

const UserOptions = () => {
    return (
        <>
        <LatestOrders/>
        <AccountPart/>
        <LatestItems/>
        <SubscriptionStatus/>
        </>
    )
}

const TransactionsInfo = () => {
    return (
        <div className="rounded-lg bg-zinc-50 w-[20rem] flex flex-col gap-2 p-2 shadow-customeThree max-lg:w-full font-semibold">
            <h3 className="text-lg flex gap-2 items-center px-2"> <CreditCardIcon className="w-[1.5rem]"/> Transactions : </h3>
            <ul>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    Today : <span className="text-green-500">50$</span> 
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    This week : <span className="text-green-500">368$</span> 
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    This month : <span className="text-green-500">1600 $</span>
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    This year : <span className="text-green-500">20300$</span> 
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    Refunds this month : <span className="text-red-400">30</span>
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    Failed transactions this month : <span className="text-red-400">10</span> 
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    Agents sales this month : <span  className="text-green-500">120$</span>
                </li>
                <li className="p-1 px-4 border-t-[1px] border-zinc-300 flex justify-between">
                    Agents sales this year : <span  className="text-green-500">500$</span>
                </li>
            </ul>
        </div>
    )
}

const ChartCon = () => {
    return (
        <div className="rounded-lg bg-zinc-50 flex flex-col gap-2 p-2 py-[10px] shadow-customeThree max-lg:w-full">
            <TransactionsChart/>
        </div>
    )
}

const TicketsCon = () => {
    return (
        <ul className="rounded-lg bg-zinc-50 flex flex-col gap-2 p-2  shadow-customeThree max-lg:w-full">
           <Ticket/> 
           <Ticket/> 
           <Ticket/> 
           <NavLink className="flex items-center gap-2 p-2 rounded-lg bg-green-500 shadow-customeOne text-white font-semibold text-center w-fit px-4" to="http://localhost:5173/dashboard/tickets">Go to tickets <ArrowLongRightIcon className="w-[1.5rem]"/> </NavLink>
        </ul>
    )
}

const Ticket = () => {
    return (
        <li className="flex gap-2 items-center gap-x-4 bg-white p-2 rounded-lg shadow-customeTwo">
            <TicketIcon className='w-[2rem] p-1 bg-green-400 text-white rounded-md'/>
            <p><b>Category :  </b>Error</p>
            <SeperatorX/>
            <p><b>Subject : </b>Problem logging in</p>
            <SeperatorX/>
            <p>10 min ago</p>
            <SeperatorX/>
            <p className="w-[15rem] truncate">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui quod quidem similique, atque iusto quasi quaerat incidunt cum expedita eligendi quam minima dolorum, velit sapiente? Accusamus excepturi minus corrupti?</p>
        </li>
    )
}

const UsersInfo = () => {
    return (
        <div className="p-2 gap-2 flex-1 rounded-lg bg-zinc-50 flex flex-col shadow-customeThree max-sm:w-full font-semibold">
            <h3 className="flex gap-2 items-center text-lg px-2"> <UserIcon className="w-[1.5rem]"/> Users info</h3>
            <ul>
                <li className="flex justify-between p-1 px-4 border-t-[1px] border-zinc-300">Users online : <span>20</span></li>
                <li className="flex justify-between p-1 px-4 border-t-[1px] border-zinc-300">Users signed up toady <span>35</span></li>
                <li className="flex justify-between p-1 px-4 border-t-[1px] border-zinc-300">Users signed up this month : <span>120</span></li>
                <li className="flex justify-between p-1 px-4 border-t-[1px] border-zinc-300">Users signed up this year : <span>550</span></li>
                <li className="flex justify-between p-1 px-4 border-t-[1px] border-zinc-300">All users : <span>6523</span></li>
            </ul>
        </div>
    )
}


const LatestOrders = () => {
    return (
        <div className="rounded-lg bg-zinc-100 flex flex-col gap-2 p-2 py-[10px]  shadow-customeThree max-lg:w-full">
            <h3 className="font-semibold">Your recent orders :</h3>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <OrderItem/>
            <NavLink to="/dashboard/orders" className="p-2 text-center bg-green-500 rounded-lg text-white font-semibold">See more</NavLink>
        </div>
    )
}

const AccountPart = () => {
    return (
        <div className="rounded-lg flex-1 bg-zinc-100 flex flex-wrap content-start gap-2 p-2 h-fit shadow-customeThree max-lg:w-full max-sm:text-sm">
            <div className="flex justify-between iteems-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[49.3%] max-md:w-[100%]">
                <p><b>First name :</b> Arsalan</p>
                <InformationCircleIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Last name : </b> Ghoochani </p>
                <InformationCircleIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[100%]">
                <p><b>Email : </b> arsalanghoochani15@gmail.com</p>
                <AtSymbolIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[100%]">
                <p><b>Phone number : </b>+98 9135674562 </p>
                <DevicePhoneMobileIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[100%]">
                <p><b>National code : </b> 1282048829 </p>
                <IdentificationIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Birth date : </b> 18 - April - 2002 </p>
                <CalendarDaysIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[49.3%] max-md:w-[100%]">
                <p><b>Country : </b> Iran </p>
                <GlobeAsiaAustraliaIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <div className="flex justify-between items-center p-2 h-fit px-2 rounded-lg shadow-customeTwo bg-zinc-50 w-[49.3%] max-md:w-[100%]">
                <p><b>City : </b> Esfahan </p>
                <GlobeAsiaAustraliaIcon className="w-[2rem] bg-green-400 rounded-md p-1 text-white max-sm:w-[1.8rem]"/>
            </div>
            <NavLink to="/dashboard/edit-account" className="p-[14px] text-center h-fit px-2 rounded-lg  bg-green-500 w-[49.3%] font-semibold text-white  max-md:w-[100%]">Edit Account</NavLink>
        </div>
    )
}


const LatestItems = () => {
    return (
        <div className="p-2 rounded-lg bg-zinc-100  w-[50rem] overflow-x-auto shadow-customeThree">
            <h3 className="w-full font-semibold">Your recent viewed products :</h3>
            <div className="flex gap-3 mt-4">
                <img className="min-w-[9rem] h-[11rem] shadow-customeTwo rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] shadow-customeTwo rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] shadow-customeTwo rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] shadow-customeTwo rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
                <img className="min-w-[9rem] h-[11rem] shadow-customeTwo rounded-lg cursor-pointer" src="/images/welcome-section-images/2.png" alt="" />
            </div>
        </div>
    )
}

const SubscriptionStatus = () => {
    return (
        <div className="p-2 flex-1 rounded-lg bg-zinc-100 flex flex-col shadow-customeThree max-sm:w-full">
            <div className="h-[10rem] bg-zinc-200 rounded-lg max-sm:w-full"></div>
            <NavLink to="/subscription" className="p-2 bg-white text-center rounded-lg mt-2 font-semibold">Resub</NavLink>
        </div>
    )
}