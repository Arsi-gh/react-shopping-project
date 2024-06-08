import { PlusCircleIcon, ShareIcon } from "@heroicons/react/24/outline";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

export default function Product({id , name , price , off , img  }) {

  const [isAdded , setIsAdded] = useState(false)

  const addProdFn = (e) => {
    e.preventDefault()
    setIsAdded(!isAdded)
  }

  const notify = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText('/products/'+id).then(() => toast.success('Product link has been copied'))
  };
  
  return (
    <NavLink dir="ltr" to={`/products/${id}`} className="group lg:min-w-[16rem] lg:max-w-[16rem] h-[20rem] rounded-xl  overflow-hidden flex flex-col relative shadow-customeTwo cursor-pointer max-lg:w-[48%] max-lg:h-fit max-lg:flex-row max-md:w-full max-sm:flew-wrap  max-sm:rounded-none max-sm:shadow-none  max-sm:border-t  max-sm:text-sm max-sm:w-[50%] max-[540px]:w-full">
        <img className="w-full object-fill h-[100%] bg-slate-200 max-lg:max-w-[8rem] max-lg:min-h-[11rem] max-sm:m-2 max-sm:rounded-md max-sm:max-w-[7rem] max-sm:shadow-customeTwo" src={img} alt="" />
        <div className="w-full h-[6.3rem] lg:absolute lg:bottom-0 p-3 max-lg:h-fit">
            <div className="w-full h-full bg-white lg:absolute bottom-0 left-0 opacity-50 max-lg:hidden"></div>
            <p className="mb-1">{name}</p>
            <div className="w-full flex justify-between items-center max-sm:flex-wrap max-sm:gap-3 max-sm:flex-col max-sm:items-start">
                <div className="flex flex-wrap gap-1 w-[7rem] ">
                    {
                      off && (
                        <>
                        <span className="z-10 bg-green-500 p-[1px] px-2 rounded-2xl text-sm text-slate-50 font-semibold">{off} %</span> 
                        <p className="z-10 line-through opacity-60 font-semibold">{price} $</p>
                        </>
                      )
                    }
                    <p className={`z-10 font-semibold ${!off && 'text-lg'} max-sm:text-base`}>Price : {price - (price * off / 100)} $</p>
                </div>
                {isAdded ? (
                    <ProdAmount/>
                ) : (
                 <button onClick={(e) => addProdFn(e)} className="z-10 p-3 gradient rounded-xl shadow-md font-semibold text-sm max-sm:p-0 max-sm:bg-zinc-50 max-sm:shadow-none max-xl:absolute max-xl:bottom-2 max-xl:right-2"><p className="max-sm:hidden">Add to basket</p><PlusCircleIcon className="w-[2rem] text-green-500 hidden max-sm:block"/></button>
                )}
            </div>
        </div>
        <ShareIcon onClick={notify} className="absolute right-2 top-2 w-5 cursor-pointer opacity-0 group-hover:opacity-100"/>
    </NavLink>
  )
}

const ProdAmount = () => {
  return (
    <div className="bg-zinc-100 shadow-md rounded-lg z-10 p-2 font-semibold text-sm flex items-center justify-center gap-3 max-sm:self-end max-sm:shadow-none max-sm:p-0 max-sm:bg-zinc-50 max-xl:absolute max-xl:bottom-2 max-xl:right-2">
      <MinusIcon strokeWidth={2} className="z-10 w-[1.8rem] p-1  rounded-md bg-white  cursor-pointer shadow-md max-sm:bg-zinc-100 max-sm:border border-zinc-300"/>
      <span className="text-xl">1</span>
      <PlusIcon strokeWidth={2} className="z-10 w-[1.8rem] p-1 rounded-md bg-white cursor-pointer shadow-md max-sm:bg-zinc-100 max-sm:border border-zinc-300"/>
    </div>
  )
}