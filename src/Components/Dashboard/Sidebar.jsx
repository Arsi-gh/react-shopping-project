import { ArrowRightOnRectangleIcon, BanknotesIcon, BuildingStorefrontIcon, ClipboardDocumentListIcon, FolderPlusIcon, PresentationChartLineIcon, ShoppingBagIcon, TagIcon, TicketIcon, UserIcon, UsersIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar() {

  const [role , setRole] = useState(true)

  return (
    <section className='relative'>
        <div className='w-[16rem] shadow-2xl flex justify-between items-center gap-2 bg-white p-2 rounded-xl max-md:hidden'>
            <UserIcon strokeWidth={1.5} className='w-[4rem] p-3 rounded-xl bg-neutral-100'/>
            <div className='w-full'>
                <h2>Hello Arsalan</h2>
                <p>Welcome to dashboard</p>
            </div>        
        </div>
        <ul className='mt-2 bg-white shadow-customeFour flex flex-col rounded-xl overflow-hidden max-md:sticky md:top-2 max-sm:m-0 max-sm:flex-row max-sm:shadow-customeFour max-sm:fixed max-sm:bottom-0 max-sm:left-0 max-sm:rounded-none max-sm:rounded-t-3xl max-sm:h-fit max-sm:w-full'>
            {role ? <UserOptions/> : <AdminOptions/>}
            <button className='p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center'>
              <p className='max-md:hidden'>Log out</p>
              <ArrowRightOnRectangleIcon className='w-[1.5rem]'/>
            </button>
        </ul>
    </section>
  )
}

const UserOptions = () => {
  return (
    <>
    <NavLink to="/dashboard" className='p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
        <p className='max-md:hidden'>Dashboard</p>
        <PresentationChartLineIcon className='w-[1.5rem]'/>
    </NavLink>
    <NavLink to="/dashboard/orders" className='p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
        <p className='max-md:hidden'>Orders</p>
        <ShoppingBagIcon className='w-[1.5rem]'/>
    </NavLink>
    <NavLink to="/dashboard/edit-account" className='p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
        <p className='max-md:hidden'>Edit Account</p>
        <UserIcon className='w-[1.5rem]'/>
    </NavLink>
    <NavLink to="/dashboard/tickets" className='p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
        <p className='max-md:hidden'>Ticket</p>
        <TicketIcon className='w-[1.5rem]'/>
    </NavLink>
    </>
  )
}

const AdminOptions = () => {
  return (
    <>
        <NavLink to="/dashboard" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Users</p>
          <UsersIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/products" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Products</p>
          <ClipboardDocumentListIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/addproduct" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Add Product</p>
          <FolderPlusIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/tickets" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Tickets</p>
          <TicketIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/transactions" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Transactions</p>
          <BanknotesIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/offcode" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Off code</p>
          <TagIcon className='w-[1.5rem]'/>
        </NavLink>
        <NavLink to="/dashboard/agents" className='bg-white p-4 cursor-pointer hover:bg-zinc-50 flex justify-between items-center max-md:w-fit max-sm:flex-1 max-sm:justify-center max-sm:flex-row-reverse max-sm:gap-2'>
          <p className='max-md:hidden'>Agents</p>
          <BuildingStorefrontIcon className='w-[1.5rem]'/>
        </NavLink>
    </>
  )
}
