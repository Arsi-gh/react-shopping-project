import { PlusCircleIcon, ShareIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Product() {

  const [isAdded , setIsAdded] = useState(false)

  const addProdFn = (e) => {
    e.preventDefault()
    setIsAdded(!isAdded)
  }
  
  return (
    <NavLink to={`/products/1`} className="group lg:min-w-[16rem] h-[20rem] rounded-xl  overflow-hidden flex flex-col relative shadow-customeTwo cursor-pointer max-lg:w-[48%] max-lg:h-fit max-lg:flex-row max-md:w-full max-sm:flew-wrap max-sm:shadow-none max-sm:rounded-none max-sm:border-y-[0.6px] max-sm:border-x-[0.5px] max-[540px]:border-x-0 border-zinc-300 max-sm:text-sm max-sm:w-[50%] max-[540px]:w-full">
        <img className="w-full object-fill h-[100%] bg-slate-200 max-lg:w-[10rem] max-lg:h-[9rem] max-sm:m-2 max-sm:rounded-md max-sm:max-w-[7rem] max-sm:shadow-customeTwo" src="/images/welcome-section-images/2.png" alt="" />
        <div className="w-full h-[4rem] absolute lg:bottom-0 p-3 max-lg:h-fit max-lg:relative">
            <div className="w-full h-full bg-zinc-600 absolute bottom-0 left-0 opacity-20 max-lg:hidden"></div>
            <p className="font-semibold w-full hidden max-lg:block mt-8 mb-4 max-sm:my-3 max-sm:w-fit">Lustoros gloria fem</p>
            <div className="w-full flex h-full justify-between items-center max-sm:flex-wrap max-sm:gap-3 max-sm:flex-col max-sm:items-start">
                <div className="flex flex-wrap gap-1 w-[6rem]">
                    <span className="z-10 bg-green-500 p-[1px] px-2 rounded-2xl text-sm text-slate-50 font-bold">15%</span> 
                    <p className="z-10 line-through opacity-60 font-bold">140$</p>
                    <p className="z-10 font-bold">Price : 90 $</p>
                </div>
                {isAdded ? (
                    <div className="bg-zinc-200 shadow-customeFour rounded-lg z-10 p-2 px-3  font-bold text-sm flex items-center justify-center gap-2 max-sm:self-end max-sm:shadow-none max-sm:p-0 max-sm:bg-zinc-100">
                        <MinusIcon strokeWidth={2} className="z-10 w-[1.8rem] p-1  rounded-md bg-white  cursor-pointer hover:shadow-customeThree max-sm:bg-zinc-100 max-sm:border-[1px] border-zinc-300"/>
                        <span className="text-xl">1</span>
                        <PlusIcon strokeWidth={2} className="z-10 w-[1.8rem] p-1 rounded-md bg-white cursor-pointer hover:shadow-customeThree max-sm:bg-zinc-100 max-sm:border-[1px] border-zinc-300"/>
                    </div>
                ) : (
                 <button 
                    onClick={(e) => addProdFn(e)} 
                    className="z-10 p-3 bg-green-500 shadow-customeOne rounded-lg font-bold text-white text-sm max-sm:p-0 max-sm:bg-zinc-100 max-sm:self-end">
                    <p className="max-sm:hidden">Add to basket</p>
                    <PlusCircleIcon className="w-[2rem] text-green-500 hidden max-sm:block"/>
                 </button>
                )}
            </div>
        </div>
        <ShareIcon className="absolute right-2 top-2 w-5 cursor-pointer opacity-0 group-hover:opacity-100"/>
    </NavLink>
  )
}