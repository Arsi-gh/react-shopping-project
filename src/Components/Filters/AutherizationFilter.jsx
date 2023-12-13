import { BriefcaseIcon, BuildingStorefrontIcon, ChevronDownIcon, Squares2X2Icon, UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Background from "../Global Ui/Background";

export default function AutherizationFilter() {

  const [isOpen , setIsOpen] = useState(false)
    
  return (
    <>    
    {isOpen && <Background displayHandler={setIsOpen}/>}
    <div className={`rounded-lg overflow-hidden bg-zinc-50 shadow-customeTwo h-fit max-lg:w-full max-sm:w-full ${isOpen && 'z-40'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className={`w-[6rem] p-2 px-4 font-semibold items-center flex justify-between`}>Role <ChevronDownIcon className={`transition-all w-[1.2rem] ${isOpen ? 'rotate-180' : 'rotate-0'}`}/> </button>
      {
        isOpen && (
          <ul className="top-12 rounded-lg w-[9rem] overflow-hidden shadow-customeOne absolute font-semibold">
              <li className="pl-4 flex justify-between p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b-[1px] border-zinc-200">All <Squares2X2Icon className="w-[1.5rem]"/> </li>
              <li className="pl-4 flex justify-between p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b-[1px] border-zinc-200">User <UserIcon className="w-[1.5rem]"/> </li>
              <li className="pl-4 flex justify-between p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b-[1px] border-zinc-200">Admin <BriefcaseIcon className="w-[1.5rem]"/> </li>
              <li className="pl-4 flex justify-between p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 border-b-[1px] border-zinc-200">Agent <BuildingStorefrontIcon className="w-[1.5rem]"/> </li>
              <li className="pl-4 flex justify-between p-2 text-center cursor-pointer bg-zinc-50 hover:bg-zinc-100 ">Staff <UserGroupIcon className="w-[1.5rem]"/> </li>
          </ul>
        )
      }
    </div>
    </>
  );
}
