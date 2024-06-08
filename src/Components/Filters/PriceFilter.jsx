import { ChevronDownIcon, CreditCardIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function PriceFilter() {
    const [isOpen , setIsOpen] = useState(false)
    
    return (
      <div className="w-[15rem]  rounded-lg overflow-hidden bg-white shadow-md h-fit max-lg:w-full max-sm:w-full">
        <button onClick={() => setIsOpen(!isOpen)} className="p-3 w-full px-4 font-semibold items-center flex justify-between">
          <p className="flex gap-2 items-center"><CreditCardIcon className="w-[1.5rem]"/>Price</p>
          <ChevronDownIcon strokeWidth={2} className={`w-[1.3rem] cursor-pointer transition-all ${isOpen && 'rotate-180'}`}/>
        </button>
        {
          isOpen && (
            <div className="flex flex-col gap-4 p-4 w-full">
              <div className="flex gap-2 items-center justify-between">
                <label htmlFor="">Min</label>
                <input className="bg-zinc-50 p-2 px-4 shadow-customeTwo w-[10rem] max-lg:w-[80%] rounded-lg" type="text" placeholder="Example : 20$"/>
              </div>
              <div className="flex gap-2 items-center justify-between">
                <label htmlFor="">Max</label>
                <input className="bg-zinc-50 p-2 px-4 shadow-customeTwo w-[10rem] max-lg:w-[80%] rounded-lg" type="text" placeholder="Example : 200$"/>
              </div>
              <button className="bg-green-500 text-white font-semibold p-2 rounded-lg">Submit</button>
            </div>
          )
        }
      </div>
    );
}
