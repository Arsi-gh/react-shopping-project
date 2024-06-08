import { AdjustmentsHorizontalIcon, BeakerIcon, BookOpenIcon, BugAntIcon, BuildingOffice2Icon, ChevronDownIcon, GiftIcon, HeartIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

export default function CategoryFilter() {

    const [isOpen , setIsOpen] = useState(false)
    
    return (
      <div className="w-[15rem]  rounded-lg overflow-hidden bg-white shadow-md h-fit max-lg:w-full max-sm:w-full">
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 w-full px-4  font-semibold items-center flex justify-between">
          <p className="flex gap-2 items-center"><AdjustmentsHorizontalIcon className="w-[1.5rem]"/>Category</p>
          <ChevronDownIcon strokeWidth={2} className={`w-[1.3rem] cursor-pointer transition-all ${isOpen && 'rotate-180'}`}/>
        </button>
        {
          isOpen && (
            <ul className='flex flex-col border-t-2 border-zinc-100'>
              <label htmlFor="favorite" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="favorite" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">favorites</p>
                <HeartIcon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="apartment" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="apartment" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">apartment</p>
                <BuildingOffice2Icon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="equipment" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="equipment" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">equipment</p>
                <WrenchScrewdriverIcon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="chemicals" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="chemicals" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">chemicals</p>
                <BeakerIcon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="bug" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="bug" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">ansects</p>
                <BugAntIcon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="gift" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="gift" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">for gift</p>
                <GiftIcon className="w-[1.3rem]"/>
              </label>
              <label htmlFor="plant" className="cursor-pointer flex gap-2  items-center py-2 px-4 justify-between">
                <input id="plant" type="checkbox" className="cursor-pointer"/>
                <p className="flex-1">books</p>
                <BookOpenIcon className="w-[1.3rem]"/>
              </label>
            </ul>
          )
        }
      </div>
    );
}
