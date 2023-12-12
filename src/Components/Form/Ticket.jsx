import Background from "../Global Ui/Background";
import {XMarkIcon} from "@heroicons/react/24/outline"

export default function Ticket({displayHandler}) {
  return (
    <>
      <Background displayHandler={displayHandler}/>
      <div className="w-[25rem] flex flex-col gap-2 p-4 rounded-lg bg-white h-fit fixed transform -translate-x-1/2 left-1/2 sm:top-1/2 sm:-translate-y-1/2 max-sm:w-full  max-sm:bottom-0 max-sm:rounded-none max-sm:rounded-t-xl z-30 max-sm:p-4">
          <div className="flex justify-between items-center py-1">
            <h3 className="font-semibold">Add new ticket</h3>
          <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
          </div>
          <span className="w-full h-[1px] bg-zinc-300 my-1"></span>
          <select className="p-2  rounded-md shadow-customeTwo">
              <option value="select">Select category</option>
              <option value="err">Error in site</option>
              <option value="problem">Problem with order</option>
              <option value="request">Having a request</option>
          </select>
          <input className="p-2 px-4 rounded-md shadow-customeTwo" type="text" placeholder="Subject"/>
          <textarea className="h-[15rem] p-2 px-4 rounded-md shadow-customeTwo" placeholder="Description"></textarea>
          <button className="p-2 px-4 rounded-md bg-green-500 font-semibold text-white">Submit</button>
      </div>
   </>
  )
}
