import { ArrowRightCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Product from "../Global Ui/Product";
import { useQuery } from "react-query";
import axios from "axios";

const getProducts = async () => {
  const {data} = await axios.get('http://localhost:5000/products')
  return data
}

export default function ProductsShowcase() {

  const prodsConRef = useRef()

  const {isPending , error , data  } = useQuery("Products" , getProducts)


  useEffect(() => {
    prodsConRef.current.scrollBy(0 , 0)
  } , [prodsConRef])

  const scrollBehaviour = (dir) => {
    if (dir === 'rtl') {
      prodsConRef.current.scrollBy(256 , 0)
    } else {
      prodsConRef.current.scrollBy(-256 , 0)
    }
  }

  if (isPending) return <p>Loading ...</p>
  return (
    <section className="w-fit mx-auto my-20 bg-zinc-200 flex rounded-xl max-lg:hidden">
        <div dir="rtl" ref={prodsConRef} className="max-w-[1100px] px-4 xl:gap-x-6 py-8 gap-3 flex overflow-hidden scroll-smooth">
            {
              data && data.slice(0 , 6).map((prod) => {
                return <Product key={prod.id} {...prod}/>
              })
            }
        </div>
        <div className="w-72 px-8 h-96 z-10 rounded-r-lg flex items-center justify-center relative max-xl:w-[30%] max-lg:w-[50%] max-lg:pl-4 max-lg:leading-loose max-sm:w-full max-sm:p-0 max-sm:flex-col">
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
