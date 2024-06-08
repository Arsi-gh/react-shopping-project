import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Title({text , href , children}) {
  return (
    <div className="custom-container flex items-center font-semibold justify-between mb-8 mt-16 gap-2 relative max-sm:justify-center max-sm:m-4">
        <div className="flex gap-2 items-center w-fit relative">
          {children}
          <h3 className="text-xl  text-stone-800 max-sm:text-xl max-[300px]:text-base max-sm:text-center">{text}</h3>
        </div>
        {href && <NavLink to={href} className="flex gap-2 items-center p-2 px-4 text-lg rounded-lg border-2 border-green-600 text-green-600">See more <ArrowRightCircleIcon className="w-[1.6rem]"/> </NavLink>}
    </div>
  )
}