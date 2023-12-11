import { SparklesIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export default function Subscription() {
  return (
    <article className="mx-[14rem] mr-[20rem] my-[5rem]  h-[16rem] bg-gradient-to-br from-green-700 to-green-500 flex flex-col relative rounded-lg p-4 text-white max-lg:w-fit max-lg:mx-auto max-lg:h-fit max-lg:items-center max-lg:gap-4 max-sm:px-1">
      <h3 className="z-10 text-3xl font-bold shadow-customeSix p-2 rounded-md w-fit max-sm:text-lg">Unlock special features</h3>
      <div className="z-10 font-bold p-4 text-lg">
        <p>Limited free transport</p>
        <p>Special offers</p>
        <p>Cash back</p>
      </div>
      <p className="z-10 font-bold text-3xl max-sm:text-lg">And more features...</p>
      <img className="w-full h-full absolute bottom-0 left-0 rounded-lg object-cover opacity-30" src="/images/sub-bg.png" alt="" />
        <div className="w-[12rem] h-[16rem] bg-slate-100 absolute -right-24 -top-8 rounded-lg flex flex-col items-center justify-center gap-2 p-2 shadow-customeThree max-lg:relative max-lg:right-0 max-lg:top-0 ">
            <SparklesIcon className="w-[3rem] top-4 bg-gradient-to-br from-gray-300 to-white p-2 left-4 shadow-customeFive rounded-full text-yellow-500 absolute"/>
            <img className="w-full h-[12rem] rounded-md bg-slate-50 shadow-customeTwo" src="/images/sub-img.png" alt="" />
            <NavLink to="/subscription" className="text-center w-full p-2 bg-green-600 text-slate-50 font-bold rounded-md">Buy subscription</NavLink>
        </div>
    </article>
  )
}
