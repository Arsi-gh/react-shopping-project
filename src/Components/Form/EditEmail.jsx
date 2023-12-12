import { XMarkIcon } from '@heroicons/react/24/solid'
import Background from '../Global Ui/Background'

export default function EditEmail({displayHandler}) {
    return (
        <>
          <Background displayHandler={displayHandler}/>
          <form className="flex flex-col p-4 gap-4 rounded-lg bg-white fixed transform -translate-x-[50%] left-[50%] sm:top-[25%]  w-[25rem] max-sm:w-full max-sm:top-[65%] max-sm:bottom-0 max-sm:rounded-none max-sm:rounded-t-xl z-30 max-sm:p-4">
            <div className="flex items-center justify-between">
              <h4 className="font-bold">Change email</h4>
              <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
            </div>
            <span className="w-full h-[1px] bg-zinc-300"></span>
            <label htmlFor="">Enter your new email</label>
            <input placeholder="Email" type="number" className="p-2 flex-1 px-4 rounded-lg shadow-customeTwo"/>
            <button className="p-2 bg-green-500 text-white font-semibold rounded-lg">Send verify code</button>
          </form>
        </>
    )
}
