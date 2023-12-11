import { useState } from "react";
import { AdjustmentsHorizontalIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Product from "../Components/Global Ui/Product";
import Sort from "../Components/Filters/Sort";
import CategoryFilter from "../Components/Filters/CategoryFilter";
import PriceFilter from "../Components/Filters/PriceFilter";

export default function Products() {

  const [showFilterModal , setShowFilterModal] = useState(false)

  return (
    <>
      <div className="flex items-center m-[1rem] ml-[2rem] gap-2 relative w-fit max-sm:m-6">
        <span className={`bg-green-500 w-[105%]  h-[1.5rem] absolute top-[60%] opacity-70 -z-10`}></span>
        <ShoppingBagIcon className="w-[2.5rem] h-[2.5rem] text-green-900" />
        <h3 className="text-3xl font-bold text-neutral-800 max-sm:text-xl">Plant store products</h3>
      </div>
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
        <section className="flex flex-wrap gap-6 h-fit max-lg:w-full max-sm:gap-0 max-md:gap-2 max-sm:justify-start">
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
          <Product/>
        </section>
      </main>
    </>
  );
}

// const FilterBtnsCon = ({filtersHandler , displayModal}) => {

//   const displayFilters = (filter) => {
//     displayModal(true)
//     filtersHandler({
//       sort : false,
//       category : false,
//       price : false,
//     })
//     filtersHandler(prev => {
//       return {
//         ...prev,
//         [filter] : true
//       }
//     })
//   }

//   return (
//     <div className="flex flex-wrap w-full gap-2">
//       <button onClick={() => displayFilters('sort')} className="hidden max-lg:flex justify-center max-sm:justify-between max-sm:flex-row-reverse max-lg:w-[32%] max-md:w-[49%] max-sm:w-full gap-2 p-2 px-4 border-4 border-zinc-100  rounded-xl font-bold text-neutral-700">
//         <AdjustmentsHorizontalIcon className="w-[1.5rem]"/>
//         <span>Category</span>
//       </button>
//       <button onClick={() => displayFilters('category')} className="hidden max-lg:flex justify-center max-sm:justify-between max-sm:flex-row-reverse max-lg:w-[32%] max-md:w-[49%] max-sm:w-full gap-2 p-2 px-4 border-4 border-zinc-100  rounded-xl font-bold text-neutral-700">
//         <AdjustmentsHorizontalIcon className="w-[1.5rem]"/>
//         <span>Sort</span>
//       </button>
//       <button onClick={() => displayFilters('price')} className="hidden justify-center max-sm:justify-between max-sm:flex-row-reverse max-lg:w-[32%] max-md:w-full gap-2 max-lg:flex  p-2 px-4 border-4 border-zinc-100  rounded-xl font-bold text-neutral-700">
//         <CurrencyDollarIcon className="w-[1.5rem]"/>
//         <span>Price</span>
//       </button>
//     </div>
//   )
// }

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