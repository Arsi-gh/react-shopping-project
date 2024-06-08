import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Background from "../Global Ui/Background";

export default function DateFilter() {

    const [isOpen , setIsOpen] = useState(false)
    
    return (
      <>
      {isOpen && <Background displayHandler={setIsOpen}/>}
      <div className={`rounded-lg overflow-hidden bg-zinc-50 shadow-customeTwo h-fit max-lg:w-full max-sm:w-full ${isOpen && 'z-40'}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`w-[6rem] p-2 px-4 font-semibold items-center flex justify-between`}>Date <ChevronDownIcon className={`transition-all w-[1.2rem] ${isOpen ? 'rotate-180' : 'rotate-0'}`}/> </button>
        {
          isOpen && (
            <ul className="top-12 rounded-lg w-[10rem] overflow-hidden shadow-customeOne absolute z-30 font-semibold">
                <li className="p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100  ">All</li>
                <li className="p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100  ">Today</li>
                <li className="p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100  ">This week</li>
                <li className="p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100  ">This month</li>
                <li className="p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 ">This year</li>
            </ul>
          )
        }
      </div>
      </>
    );
}
