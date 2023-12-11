import { ArrowRightCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Product from "../Global Ui/Product";

export default function ProductsShowcase() {

  const prodsConRef = useRef()

  useEffect(() => {
    prodsConRef.current.scrollBy(0 , 0)
  } , [prodsConRef])

  const scrollBehaviour = (dir) => {
    if (dir === 'rtl') {
      prodsConRef.current.scrollBy(296.5 , 0)
    } else {
      prodsConRef.current.scrollBy(-296.5 , 0)
    }
  }

  return (
    <section className="mx-20 h-[24rem] mt-[5rem] mb-[2rem] bg-zinc-200 flex rounded-xl max-sm:flex-col-reverse max-sm:to-gray-400  max-sm:h-fit min-w-[10rem] max-sm:mx-[2rem] max-sm:mt-[5rem]">
        <div ref={prodsConRef} className="w-4/5 p-4 xl:gap-x-6 py-8 gap-3 flex overflow-hidden scroll-smooth max-sm:w-full max-sm:gap-x-10 max-sm:px-10">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
        <div className="w-1/5 h-full z-10 rounded-r-lg flex items-center justify-center relative max-xl:w-[30%] max-lg:w-[50%] max-lg:pl-4 max-lg:leading-loose max-sm:w-full max-sm:p-0 max-sm:flex-col">
            <h3 onClick={() => scrollBehaviour} className="font-bold text-neutral-600 text-[3rem] w-[13rem] max-lg:text-[2.5rem] z-20 max-sm:w-full max-sm:text-center max-sm:text-3xl py-4">Some of our Products</h3>
            <div className="bg-zinc-50 w-[9rem] flex p-3 gap-2 h-[4rem] absolute right-0 rounded-l-full max-sm:rounded-full max-sm:w-[8rem] max-sm:from-inherit max-sm:h-[3.5rem] max-sm:relative">
                <ChevronLeftIcon onClick={() => scrollBehaviour('ltr')} className="w-[3rem] cursor-pointer p-2 text-neutral-600 bg-zinc-200 rounded-l-full hover:bg-zinc-300 z-20 max-sm:w-[50%]"/>
                <ChevronRightIcon onClick={() => scrollBehaviour('rtl')} className="w-[3rem] cursor-pointer p-2 text-neutral-600 bg-zinc-200 rounded-r-full hover:bg-zinc-300 z-20 max-sm:w-[50%]"/>
                <div className="w-[4.5rem] h-[2.5rem] bg-zinc-50  absolute -top-[2.5rem] right-0 max-sm:hidden"><div className="w-full h-full  bg-zinc-200 rounded-br-full"></div></div>
                <div className="w-[4.5rem] h-[2.5rem] bg-zinc-50  absolute -bottom-[2.5rem] right-0 max-sm:hidden"><div className="w-full h-full bg-zinc-200 rounded-tr-full"></div></div>
            </div>
            <NavLink to="/products" className="z-20 absolute bottom-6 p-2 px-4 rounded-xl text-lg bg-green-500 font-bold shadow-customeFour text-white flex gap-2">See all products <ArrowRightCircleIcon className="w-[1.5rem]"/> </NavLink>
        </div>
    </section>
  )
}
