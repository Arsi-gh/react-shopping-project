import { CalendarDaysIcon, EyeIcon, EyeSlashIcon, MagnifyingGlassIcon, TagIcon, TrashIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SearchFilter from "../../Filters/SearchFilter";

export default function AdminOffCodePage() {
  return (
    <div className="flex p-2 gap-4 h-full text-neutral-700">
        <div className="flex flex-col p-3 gap-2 rounded-lg bg-gradient-to-b from-zinc-200 to-white text-neutral-800 h-[80%] overflow-auto">
            <SearchFilter/>
            <span className="h-[1.5px] bg-zinc-300"></span>
            <OffCodeItem/>
            <OffCodeItem/>
            <OffCodeItem/>
            <OffCodeItem/>
        </div>
        <div className="flex flex-wrap content-start flex-1 gap-3 bg-gradient-to-b from-zinc-200 to-white rounded-md p-4 h-fit">
            <h2 className="w-full flex gap-2 items-center font-bold text-xl">
                <TagIcon className="w-[2rem]"/>
                Create off code
            </h2>
            <input className="w-[49%] p-2 rounded-lg shadow-customeTwo bg-white" type="text" placeholder="Code name"/>
            <input className="w-[49%] p-2 rounded-lg shadow-customeTwo bg-white" type="number" placeholder="Off Percentage"/>
            <label className="w-[49%] p-2 flex gap-2 items-center font-semibold" htmlFor="code-date-expire">
                <UserGroupIcon className="w-[1.5rem]"/>
                <p>For which users code is for ?</p>
            </label>
            <select className="w-[49%] p-2 rounded-lg shadow-customeTwo bg-white">
                <option value="all">All users</option>
                <option value="staff">Staff</option>
                <option value="agents">Agents</option>
                <option value="subs">Subscribers</option>
            </select>
            <label className="w-[49%] p-2 flex gap-2 items-center font-semibold" htmlFor="code-date-expire">
                <CalendarDaysIcon className="w-[1.5rem]"/> 
                Select Code Expire date
            </label>
            <input id="code-date-expire" className="w-[49%] p-2 rounded-lg shadow-customeTwo bg-white" type="date"/>
            <button className="p-2  px-[2rem] rounded-lg bg-green-500 text-white font-semibold shadow-customeOne">Create ticket</button>
        </div>
    </div>
  )
}

const OffCodeItem = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="w-[20rem] flex flex-col p-1 rounded-lg bg-white shadow-customeTwo text-neutral-800">
            <p className="flex items-center justify-between p-2"><b className="font-semibold flex gap-2 items-center"><TagIcon className="w-[1.5rem]"/> #Summer1400 </b><span onClick={e => setIsOpen(!isOpen)} className="cursor-pointer">{isOpen ? <EyeSlashIcon className="w-[1.6rem]"/> :  <EyeIcon className="w-[1.6rem]"/>}</span></p>
            {isOpen && 
                <>
                    <span className="w-full h-[1.5px] bg-zinc-200"></span>
                    <p className="flex items-center justify-between p-2 "><b className="flex font-semibold gap-2 items-center"><CalendarDaysIcon className="w-[1.5rem]"/> Expire date : </b>23 - April - 2023</p>
                    <p className="flex items-center justify-between p-2 "><b className="flex font-semibold gap-2 items-center"><UserGroupIcon className="w-[1.5rem]"/> For : </b> All users</p>
                    <button className="flex p-2 justify-center gap-2 rounded-lg bg-red-400 text-white font-bold"><TrashIcon className="w-[1.5rem]"/> Remove code</button>
                </>
            }
        </div>
    )
}