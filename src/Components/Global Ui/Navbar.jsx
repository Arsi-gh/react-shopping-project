import {ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, Bars3BottomLeftIcon, PencilSquareIcon, PresentationChartLineIcon, ShoppingBagIcon, UserPlusIcon} from "@heroicons/react/24/outline"
import { ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import { NavLink } from 'react-router-dom'

export default function Navbar({sideDisplayHandler}) {

    const [isLogged , setIsLogged] = useState(false)
    
  
    useEffect(() => {
      document.cookie && setIsLogged(true)
    } , [])
  
    return (
      <nav className="bg-white bg-opacity-60 backdrop-blur-2xl flex items-center justify-between p-3 mb-[1rem] sticky top-0 z-20 font-semibold">
        <div className='flex ml-6'>
          <NavLink to="/" className='cursor-pointer max-md:hidden'>Logo</NavLink>
          <button onClick={() => sideDisplayHandler(true)} className='hidden max-md:block'>
            <Bars3BottomLeftIcon className='w-[2.4rem]'/>
          </button>
          <ul className='ml-20 flex items-center gap-2 gap-x-8 max-md:hidden'>
            <NavLink to="/products" className='cursor-pointer hover:text-green-700 hover:scale-[110%] transition-all'>Products</NavLink>
            <NavLink to="/documents" className='cursor-pointer hover:text-green-700 hover:scale-[110%] transition-all'>Documents</NavLink>
            <NavLink to="/subscription" className='cursor-pointer hover:text-green-700 hover:scale-[110%] transition-all'>Subscribtion</NavLink>
            <NavLink to="/aboutus" className='cursor-pointer hover:text-green-700 hover:scale-[110%] transition-all'>About us</NavLink>
          </ul>
        </div>
        {!isLogged ? <AuthenticatedBtns/> : <AuthenticateBtns/>}
      </nav>
    )
}

const AuthenticatedBtns = () => {
    
    const [isOpenOption , setIsOpenOption] = useState(false)
  
    return (
      <div className='flex gap-2 gap-x-4'>
        <NavLink to="/basket">
          <ShoppingCartIcon className='w-[2.4rem]'/>
        </NavLink>
        <div className='relative'>
          <UserCircleIcon id="dropDownBtn" onClick={() => setIsOpenOption(!isOpenOption)}  className='w-[2.4rem] cursor-pointer'/>
          {isOpenOption && <NavOption display={isOpenOption} displayHandler={setIsOpenOption}/>}
        </div>
      </div>
    )
}
  
const NavOption = ({display , displayHandler}) => {
  
    const dropDownRef = useRef()
  
    const [username , setUsername] = useState('')
  
    useEffect(() => {
      setUsername(document.cookie.slice(9))
    } , [])
  
    const logoutFn = () => {
      document.cookie = `username=${username};path='/';expires=Thu, 01 Jan 1970 00:00:00`
    }
  
    return (
      <ul ref={dropDownRef} onClick={() => displayHandler(false)} className={`flex-col w-[12rem] absolute rounded-lg overflow-hidden shadow-customeFour right-1 top-10 border-[1px] border-zinc-200 font-normal z-20 flex ${display ? 'flex' : 'hidden'}`}>
        <NavLink to="/dashboard/edit-account" className='bg-white p-2 py-3 cursor-pointer hover:bg-zinc-100'>
          <p>{username}</p>
          <div className='flex justify-between items-center'>
            <p>#pu214568</p>
            <PencilSquareIcon className='w-[1.5rem]' />
          </div>
        </NavLink>
        <NavLink to="/dashboard" className='bg-white border-t-[1px] border-zinc-200 flex gap-2 justify-between items-center p-2 cursor-pointer hover:bg-zinc-100'>
          Dashboard
          <PresentationChartLineIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/orders" className='bg-white border-t-[1px] border-zinc-200 flex gap-2 justify-between items-center p-2 cursor-pointer hover:bg-zinc-100'>
          Orders
          <ShoppingBagIcon className='w-[1.5rem]'/>
        </NavLink>
        <li onClick={logoutFn} className='bg-white border-t-[1px] border-zinc-200 flex gap-2 justify-between items-center p-2 cursor-pointer hover:bg-zinc-100'>
          Log out
          <ArrowRightOnRectangleIcon className='w-[1.5rem]'/>
        </li>
      </ul>
    )
}
  
const AuthenticateBtns = () => {
    return (
      <div className='flex gap-2 max-lg:gap-0 max-lg:rounded-lg overflow-hidden'>
          <NavLink to="/authentication/signup" className="h-[3rem] border-2 border-green-400 rounded-xl p-2 flex gap-2 items-center lg:hover:bg-slate-100 max-lg:border-none max-lg:rounded-none max-lg:bg-zinc-200 max-lg:px-4">
            <p className='max-lg:hidden'>Create an account</p>
            <UserPlusIcon strokeWidth={2} className='w-6 rounded-full'/>
          </NavLink>
          <NavLink to="/authentication/login" className="h-[3rem] bg-green-400 rounded-xl p-1 px-2 flex items-center gap-2 hover:bg-green-500 max-lg:rounded-none max-lg:px-5">
            <ArrowLeftOnRectangleIcon className='w-8 bg-green-50 p-1 rounded-md rotate-180 max-lg:text-white max-lg:bg-inherit max-lg:w-10'/>
            <p className='max-lg:hidden text-white'>Log in</p>
          </NavLink>
      </div>
    )
}