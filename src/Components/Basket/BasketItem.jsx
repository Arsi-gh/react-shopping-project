import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function BasketItem() {
  return (
    <div className="flex gap-2 justify-between items-center bg-white shadow-customeTwo rounded-lg p-2 max-sm:flex-wrap max-sm:gap-4">
        <img className="w-[3rem] h-[3rem] bg-red-500  rounded-md shadow-customeTwo max-sm:h-[10rem] max-sm:w-[8rem]" src="/images/welcome-section-images/2.png" alt="" /> 
        <div className="flex gap-2 justify-between items-center flex-1 max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <p><b className="max-md:hidden max-sm:inline">Name : </b>Flora plant</p>
          <p><b className="max-md:hidden max-sm:inline">Size : </b>20 * 45</p>
          <span><b className="max-md:hidden max-sm:inline">Price :</b> 25 $</span>
          <div className="flex gap-2 items-center">
              <MinusIcon strokeWidth={1.8} className="w-[1.5rem] p-1 rounded-md cursor-pointer bg-zinc-200"/>
              <span className="text-lg font-bold">1</span>
              <PlusIcon strokeWidth={1.8} className="w-[1.5rem] p-1 rounded-md cursor-pointer bg-zinc-200"/>
          </div>
          <button className="flex gap-2 items-center rounded-lg bg-red-400 p-2 text-white font-bold mr-4">
            <p className="md:hidden">Remove</p>
            <TrashIcon strokeWidth={2} className="w-[1.5rem]"/>
          </button>
        </div>
    </div>
  )
}
