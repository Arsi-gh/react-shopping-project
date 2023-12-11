import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Title({text , href , children}) {
  return (
    <div className="flex items-center justify-between m-[2rem] mt-[4rem] mx-24 gap-2 relative max-sm:justify-center max-sm:m-4">
        <div className="flex gap-2 items-center w-fit relative">
          <span className={`bg-green-500 w-[110%]  h-[1.5rem] absolute top-[60%] max-sm:h-[1rem] opacity-50 -z-10 max-sm:w-[102%]`}></span>
          {children}
          <h3 className="text-3xl font-bold text-stone-800 max-sm:text-xl max-[300px]:text-base max-sm:text-center">{text}</h3>
        </div>
        {href && <NavLink to={href} className="font-bold flex gap-2 items-center p-2 px-4 text-lg rounded-lg border-2 border-green-600 text-green-600">see more <ArrowRightCircleIcon className="w-[1.6rem]"/> </NavLink>}
    </div>
  )
}