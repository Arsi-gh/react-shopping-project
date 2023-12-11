import Background from "../Global Ui/Background"
import { XMarkIcon } from '@heroicons/react/24/solid'

export const Question = ({displayHandler}) => {
    return (
      <>
        <Background displayHandler={displayHandler}/>
        <form className="flex flex-col p-4 gap-2 rounded-lg bg-neutral-200 fixed transform -translate-x-[50%] left-[50%] sm:top-[25%]  w-[25rem] max-sm:w-full  max-sm:bottom-0 max-sm:rounded-none max-sm:rounded-t-xl max-sm:p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold">Ask your question</h4>
            <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
          </div>
          <span className="w-full h-[1px] bg-zinc-300 my-2"></span>
          <textarea className="bg-white mb-2 p-2 px-4 rounded-md h-[10rem] shadow-customeFour" placeholder="Description"></textarea>
          <button className="p-2 px-4 rounded-lg bg-green-500 text-white font-bold">Submit</button>
        </form>
      </>
    )
  }