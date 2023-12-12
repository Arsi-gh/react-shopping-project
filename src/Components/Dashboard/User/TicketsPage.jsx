import { CheckCircleIcon, ClockIcon, PlusCircleIcon, Squares2X2Icon, TicketIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Ticket from '../../Form/Ticket'
import { SeperatorX } from '../../Global Ui/Seperator'

export default function TicketsPage() {
  
  const [displayTicketForm , setDisplayTicketForm] = useState(false)  
    
  return (
    <div className="flex gap-2 p-2 h-full max-xl:flex-col max-sm:text-sm">
        <div className="w-full flex flex-wrap content-start gap-3 p-2 rounded-lg bg-zinc-100 h-full overflow-auto max-xl:w-full">
            <h3 className='font-bold text-lg p-2 flex gap-2'><TicketIcon strokeWidth={1.8} className='w-[1.5rem]'/>Your tickets :</h3>
            <div className='w-full flex justify-between p-1 pr-2 max-lg:flex-wrap max-sm:flex-col gap-2 max-sm:items-start'>
                <TicketFilter/>
                <button onClick={() => setDisplayTicketForm(true)} className='flex gap-2 items-center p-1 px-2 rounded-md bg-green-500 font-bold text-white justify-between hover:bg-green-600 max-lg:w-full'>Add new ticket<PlusCircleIcon strokeWidth={2} className='w-[1.6rem]'/></button>
            </div>
            <TicketItem/>
            <TicketItem/>
            <TicketItem/>
            <TicketItem/>
            <TicketItem/>
        </div>
        {displayTicketForm && <Ticket displayHandler={setDisplayTicketForm}/>}
    </div>
  )
}

const TicketFilter = () => {
    return (
        <div className='flex gap-2 max-lg:w-full max-sm:flex-col'>
            <button className='group p-1 pr-2 rounded-md border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-bold flex gap-2 items-center max-lg:flex-1'>
                <Squares2X2Icon strokeWidth={2} className='w-[2rem] p-1 bg-cyan-500 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-cyan-500'/>
                <p>All tickets</p>
            </button>
            <button className='group p-1 pr-2 rounded-md border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white font-bold flex gap-2 items-center max-lg:flex-1'>
                <CheckCircleIcon strokeWidth={2} className='w-[2rem] p-1 bg-green-500 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-green-500'/>
                <p>Answerd tickets</p>
            </button>
            <button className='group p-1 pr-2 rounded-md border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-bold flex gap-2 items-center max-lg:flex-1'>
                <ClockIcon strokeWidth={2} className='w-[2rem] p-1 bg-orange-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-orange-400'/>
                <p>Open tickets</p>
            </button>
            <button className='group p-1 pr-2 rounded-md border-2 border-red-400 text-red-400 hover:bg-red-400  hover:text-white font-bold flex gap-2 items-center max-lg:flex-1'>
                <XCircleIcon strokeWidth={2} className='w-[2rem] p-1 bg-red-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-red-400'/>
                <p>Closed tickets</p>
            </button>
        </div>
    )
}

const TicketItem = () => {
    return (
        <div className="w-full h-fit flex p-2 items-center gap-3 rounded-md shadow-customeTwo bg-white overflow-hidden max-lg:w-full">
            <TicketIcon className='w-[2rem] p-1 bg-green-400 text-white rounded-md'/>
            <SeperatorX/>
            <h4 className='text-center w-[8rem]'><b>Category : </b> Error</h4>
            <SeperatorX/>
            <h4 className='max-sm:w-[100%] text-center w-[11rem] truncate'><b>Subject :</b> Error in site</h4>
            <SeperatorX/>
            <p className='mx-2 text-center w-[10rem]'><b>Status : </b><span className='text-green-500'>Answerd</span></p>
            <SeperatorX/>
            <p className='text-center w-[12rem]'><b>Created at : </b>2023 - 3 - 9</p>
            <SeperatorX/>
            <p className='flex-1 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi doloribus repellat dolorem eaque in. Repudiandae corrupti incidunt rerum quaerat neque, modi magni, blanditiis possimus debitis nulla, minus dolores doloribus reprehenderit?</p>
            <button className='p-2 shadow-customeTwo rounded-lg bg-zinc-50 hover:bg-zinc-100'>See more</button>
        </div>
    )
}