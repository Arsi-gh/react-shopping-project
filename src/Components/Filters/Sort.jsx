import { AdjustmentsHorizontalIcon, CalendarIcon, ChevronDownIcon, EyeIcon, StarIcon } from '@heroicons/react/24/outline';
import { useState } from 'react'

export default function Sort() {

  const [isOpen , setIsOpen] = useState(false)
    
  return (
    <div className="w-[15rem]  rounded-lg overflow-hidden bg-white shadow-md h-fit max-lg:w-full max-sm:w-full">
      <button onClick={() => setIsOpen(!isOpen)} className="p-2 w-full px-4 font-bold items-center flex justify-between">
        <p className="flex gap-2 items-center"><AdjustmentsHorizontalIcon className="w-[1.5rem]"/>Sort</p>
        <ChevronDownIcon strokeWidth={2} className={`w-[1.3rem] cursor-pointer transition-all ${isOpen && 'rotate-180'}`}/>
      </button>
      {
        isOpen && (
          <ul className='flex flex-col border-t-2 border-zinc-100'>
            <li className="flex gap-2  items-center py-2 px-4 justify-between">
              <input id="rating" type="checkbox" className="cursor-pointer"/>
              <label htmlFor="rating" className="flex-1 cursor-pointer">ratings</label>
              <StarIcon className="w-[1.3rem]"/>
            </li>
            <li className="flex gap-2  items-center py-2 px-4 justify-between">
              <input id="view" type="checkbox" className="cursor-pointer"/>
              <label htmlFor="view" className="flex-1 cursor-pointer">viewed</label>
              <EyeIcon className="w-[1.3rem]"/>
            </li>
            <li className="flex gap-2  items-center py-2 px-4 justify-between">
              <input id="latest" type="checkbox" className="cursor-pointer"/>
              <label htmlFor="latest" className="flex-1 cursor-pointer">latest</label>
              <CalendarIcon className="w-[1.3rem]"/>
            </li>
            <li className="flex gap-2  items-center py-2 px-4 justify-between">
              <input id="oldest" type="checkbox" className="cursor-pointer"/>
              <label htmlFor="oldest" className="flex-1 cursor-pointer">oldest</label>
              <CalendarIcon className="w-[1.3rem]"/>
            </li>
          </ul>
        )
      }
    </div>
  );
}
