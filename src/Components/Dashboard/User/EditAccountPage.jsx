import { InformationCircleIcon, LockClosedIcon, MapIcon, MapPinIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import EditEmail from "../../Form/EditEmail";
import EditPhone from "../../Form/EditPhone";
import EditPassword from "../../Form/EditPassword";

export default function EditAccountPage() {
    
    const [dispalyPass , setDisplayPass] = useState(false)    
    const [dispalyEmail , setDisplayEmail] = useState(false)
    const [dispalyPhone , setDisplayPhone] = useState(false)

  return (
    <div className="flex h-full flex-wrap p-3 gap-2 text-neutral-800 max-lg:flex-col">
        <MainInfos displayPass={setDisplayPass} displayEmail={setDisplayEmail} displayPhone={setDisplayPhone}/>
        <LocationPart/>
        {dispalyEmail && <EditEmail displayHandler={setDisplayEmail}/>}
        {dispalyPhone && <EditPhone displayHandler={setDisplayPhone}/>}
        {dispalyPass && <EditPassword displayHandler={setDisplayPass}/>}        
    </div>
  )
}

const MainInfos = ({displayPass, displayEmail , displayPhone}) => {

    const [user , setUser] = useState(null)

    const fetchUserData = async () => {
      fetch(`http://localhost:5000/users?q=${document.cookie.slice(9)}`)
        .then(res => res.json())
        .then(res => setUser(res[0]))
    }

    useEffect(() => {
        fetchUserData()
    } , [])

    return (
        <div className="flex flex-wrap flex-1 items-start content-start bg-zinc-100 rounded-md p-2 gap-3 h-full max-sm:w-full">
            <h3 className="w-full font-semibold text-lg px-2 flex gap-2 items-center"><InformationCircleIcon className="w-[1.5rem]"/>Main infos</h3>
            <input value={user?.fullname && user.fullname} className="flex-1 rounded-lg p-2 px-4 shadow-customeTwo" type="text" placeholder="First name" />
            <input className="flex-1 rounded-lg p-2 px-4 shadow-customeTwo" type="text" placeholder="Last name"/>
            <input className="flex-1 rounded-lg p-2 px-4 shadow-customeTwo" type="number" placeholder="National code"/>
            <input className="flex-1 rounded-lg p-2 px-4 shadow-customeTwo" type="text" placeholder="Job"/>
            <input className="w-full rounded-lg p-2 px-4 shadow-customeTwo" type="date" placeholder="Birth date"/>
            <span className="w-full h-[1px] bg-gray-300"></span>
            <h3 className="w-full font-semibold text-lg px-2 flex gap-2 items-center"><MapPinIcon className="w-[1.5rem]"/>Add location</h3>
            <LocationForm/>
            <span className="w-full h-[1px] bg-gray-300"></span>
            <h3 className="w-full font-semibold text-lg px-2 flex gap-2 items-center"><LockClosedIcon className="w-[1.5rem]"/>Need verification</h3>
            <VerificationChanges displayPass={displayPass} displayEmail={displayEmail} displayPhone={displayPhone}/>
        </div>
    )
}

const VerificationChanges = ({displayPass, displayEmail , displayPhone}) => {
    return (
        <>
            <div onClick={() => displayPhone(true)} className="flex w-full cursor-pointer bg-white items-center justify-between p-2 rounded-lg shadow-customeTwo hover:bg-zinc-50 max-sm:text-sm"> 
                <p>Phone number : 09134545689</p>
                <div className="flex gap-2">
                    <PencilSquareIcon className="w-[1.5rem] cursor-pointer max-sm:w-[1.3rem]"/>
                </div>
            </div>
            <div onClick={() => displayEmail(true)} className="flex w-full cursor-pointer bg-white items-center justify-between p-2 rounded-lg shadow-customeTwo hover:bg-zinc-50 max-sm:text-sm"> 
                <p>Email : arsalanghoochani15@gmail.com</p>
                <div className="flex gap-2">
                    <PencilSquareIcon className="w-[1.5rem] cursor-pointer max-sm:w-[1.3rem]"/>
                </div>
            </div>
            <div onClick={() => displayPass(true)} className="flex w-full cursor-pointer bg-white items-center justify-between p-2 rounded-lg shadow-customeTwo hover:bg-zinc-50 max-sm:text-sm"> 
                <p>Password : *****</p>
                <div className="flex gap-2">
                    <PencilSquareIcon className="w-[1.5rem] cursor-pointer max-sm:w-[1.3rem]"/>
                </div>
            </div>
        </>
    )
}

const LocationPart = () => {
    return (
        <div className="flex-1 p-2 rounded-lg bg-gray-100 flex flex-wrap gap-1 content-start">
            <h3 className="w-full font-semibold text-lg px-2 flex gap-2 items-center"><MapIcon className="w-[1.5rem]"/>Your locations</h3>
            <div className="w-full p-1 rounded-lg flex flex-col gap-2 overflow-scroll">
                <LocationItem/>
                <LocationItem/>
                <LocationItem/>
                <LocationItem/>
                <LocationItem/>
            </div>
            
        </div>
    )
}

const LocationForm = () => {
    return (
        <div className="rounded-lg flex flex-wrap gap-2 p-1 max-sm:text-sm">
            <select className="rounded-lg shadow-customeTwo w-1/2 p-2 max-sm:w-full">
                <option value="Select">select country</option>
                <option value="IR">iran</option>
                <option value="FR">france</option>
                <option value="TR">turkey</option>
            </select>
            <select className="rounded-lg shadow-customeTwo flex-1 p-2">
                <option value="Select">select city</option>
                <option value="Esf">esfahan</option>
                <option value="Teh">tehran</option>
            </select>
            <input className="p-2 flex-1 shadow-customeTwo rounded-lg" type="text" placeholder="Street name"/>
            <input className="p-2 flex-1 shadow-customeTwo rounded-lg" type="text" placeholder="Alley name"/>
            <input className="p-2 flex-1 shadow-customeTwo rounded-lg" type="text" placeholder="Pelak :)"/>
            <input className="p-2 flex-1 shadow-customeTwo rounded-lg" type="text" placeholder="Postal code" />
            <textarea className="p-2 w-full h-[7rem] shadow-customeTwo rounded-lg" placeholder="Description"></textarea>
            <button className="flex-1 p-2 rounded-lg bg-white hover:bg-zinc-100 shadow-customeTwo">Add</button>
            <button className="flex-1 p-2 rounded-lg bg-white hover:bg-zinc-100 shadow-customeTwo">Reset</button>
        </div>
    )
}

const LocationItem = () => {
 return (
    <div className="bg-white p-2 rounded-lg shadow-customeTwo max-sm:text-sm">
        <div className="flex gap-2 items-center">
          <MapPinIcon className='w-[2rem] p-1 rounded-md bg-green-400 text-white max-sm:w-[1.5rem]'/>
          <strong>IR</strong>
          <strong className="flex-1">Esf</strong>
          <TrashIcon className="w-[2rem] p-1 rounded-md bg-red-400 text-white cursor-pointer max-sm:w-[1.5rem]"/>
          <PencilSquareIcon className="w-[2rem] p-1 rounded-md bg-blue-400 text-white cursor-pointer max-sm:w-[1.5rem]"/>
        </div>
        <p className="mt-2 pt-3 border-t-[1px]">Fereshte Street , Golbahar Alley , Mehrnoosh apartment , third unit</p>
    </div>
 )
}
