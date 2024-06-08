import { useState } from "react";
import { AdjustmentsHorizontalIcon, BarsArrowDownIcon, BarsArrowUpIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Product from "../Components/Global Ui/Product";
import Sort from "../Components/Filters/Sort";
import CategoryFilter from "../Components/Filters/CategoryFilter";
import PriceFilter from "../Components/Filters/PriceFilter";
import axios from "axios";
import { useQuery } from "react-query";

const getProducts = async () => {
  const {data} = await axios.get('http://localhost:5000/products')
  return data
}

export default function Products() {

  const [showFilterModal , setShowFilterModal] = useState(false)


  const {isPending , error , data  } = useQuery("Products" , getProducts)

  return (
    <>
      <main className="flex m-[2rem] mt-[3rem] gap-x-10 content-start relative max-sm:m-[0.5rem] max-lg:flex-col">
        <section className="flex flex-col gap-4 h-fit sticky top-[5rem] max-lg:relative max-lg:top-0 max-lg:flex-row  max-lg:w-full max-lg:mx-auto max-lg:my-[1rem] max-sm:flex-col">
          <div className="flex flex-col gap-4 max-lg:hidden">
            <Sort/>
            <CategoryFilter/>
            <PriceFilter/>
          </div>
        </section>
        <button onClick={() => setShowFilterModal(true)} className="hidden m-2 font-semibold text-left text-lg max-lg:flex gap-2 items-center"> <AdjustmentsHorizontalIcon className="w-[1.8rem]"/> Filters</button>
        {
          showFilterModal && (
            <FiltersModal displayModal={setShowFilterModal}>
                <Sort/>
                <CategoryFilter/>
                <PriceFilter/>
            </FiltersModal>
          )
        }
        <section className="flex flex-wrap gap-6 h-fit max-lg:w-full  max-md:gap-2 max-sm:gap-0 max-sm:justify-start">
          <div className="w-full items-center flex justify-between pr-14 max-lg:px-2 max-sm:text-sm max-lg:my-2">
            <h3 className="font-semibold text-xl max-sm:text-sm">Products</h3>
            <span className="flex gap-2 gap-x-6 font-semibold max-sm:gap-x-2">
              <button className="flex gap-2 p-2 rounded-xl border-2 border-zinc-50 hover:border-neutral-600 box-content"><BarsArrowUpIcon className="w-6"/> <p className="max-[400px]:hidden">Ascending</p></button>
              <button className="flex gap-2 p-2 rounded-xl border-2 border-zinc-50 hover:border-neutral-600 box-content"><BarsArrowDownIcon className="w-6"/> <p className="max-[400px]:hidden">Decending</p></button>
            </span>
          </div>
          {
            data?.map((prod) => {
              return <Product key={prod.id} {...prod}/>
            })
          }
        </section>
      </main>
    </>
  );
}


const FiltersModal = ({children , displayModal}) => {
  return (
    <>
      <div onClick={() => displayModal(false)} className="w-screen h-screen bg-zinc-800 opacity-50 fixed top-0 left-0 z-30"></div>
      <div className="bg-zinc-200 hidden w-full max-lg:flex flex-col gap-3 gap-y-4 fixed left-0 bottom-0 p-2 py-4 rounded-t-2xl z-30 shadow-customeThree">
        <div className="flex justify-center">
          <XMarkIcon onClick={() => displayModal(false)} className="w-[1.6rem] cursor-pointer" strokeWidth={2}/>
          <h2 className="flex-1 text-center font-bold">Sort products</h2>
        </div>
        {children}
      </div>
    </>
  )
}