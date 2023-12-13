import { useState } from 'react'
import Background from '../Global Ui/Background';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function DynamicFilter({type}) {
    const [isOpen , setIsOpen] = useState(false)
    
    return (
      <>    
      {isOpen && <Background displayHandler={setIsOpen}/>}
      <div className={`rounded-lg overflow-hidden bg-zinc-50 shadow-customeTwo h-fit max-lg:w-full max-sm:w-full ${isOpen && 'z-40'}`}>
        <button onClick={() => setIsOpen(!isOpen)} className={`w-fit p-2 px-4 font-semibold items-center flex gap-x-3 justify-between `}> {type} <ChevronDownIcon className={`transition-all w-[1.2rem] ${isOpen ? 'rotate-180' : 'rotate-0'}`}/> </button>
        {
          isOpen && (
            <div className="top-12 p-3 px-4 rounded-lg w-[12rem] overflow-hidden bg-zinc-100 shadow-customeOne absolute font-semibold">
                <span className='flex items-center justify-between my-3 gap-2'>
                    <label htmlFor="min">min</label>
                    <input className='p-2 px-4 shadow-customeTwo w-[7rem] rounded-lg' id='min' type="number" />
                </span>
                <span className='flex items-center justify-between my-3 gap-2'>
                    <label htmlFor="max">max</label>
                    <input className='p-2 px-4 shadow-customeTwo w-[7rem] rounded-lg' id='max' type="number" />
                </span>
                <button className='p-2 rounded-lg text-white font-semibold bg-green-500 w-full'>Submit</button>
            </div>
          )
        }
      </div>
      </>
    );
}
