import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import Background from '../Global Ui/Background'

export default function EditPhone({displayHandler}) {

    const [part , setPart] = useState(0)

    return (
      <>
        <Background displayHandler={displayHandler}/>
        <form className="flex flex-col p-4 gap-3 rounded-lg bg-neutral-200 fixed transform -translate-x-[50%] left-[50%] sm:top-[25%]  w-[25rem] max-sm:w-full max-sm:top-[70%] max-sm:rounded-none max-sm:rounded-t-xl max-sm:p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold">Change number</h4>
            <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
          </div>
          <span className="w-full h-[1px] bg-zinc-300"></span>
          <label htmlFor="">Enter your new number</label>
          <div className="flex gap-2">
            <input type="number" className="p-2 w-1/6 px-4 rounded-lg shadow-customeTwo"/>
            <input type="number" placeholder="" className="p-2 flex-1 px-4 rounded-lg shadow-customeTwo"/>
          </div>
          <div className="flex gap-2 text-sm px-1">
            <p className="w-1/6">Country</p>
            <p className="flex-1">Phone number</p>
          </div>
          <button className="p-2 bg-green-500 text-white font-bold rounded-lg">Send verify code</button>
        </form>
      </>
    )
}
