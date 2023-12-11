import { useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import DocumentItem from '../Global Ui/Document'

export default function DocumentShowcase() {
   
  const documentCon = useRef()  

  const swipeHandler = (dir) => {
    if (dir === 'rtl') {
        documentCon.current.scrollBy(documentCon.current.clientWidth , 0)
    } else {
        documentCon.current.scrollBy(-documentCon.current.clientWidth , 0)
    }
  }
    
  return (
    <>
      <section ref={documentCon} className="p-4 flex gap-6 h-[20rem] overflow-auto m-[1rem] mb-[1rem] mx-[4rem] justify-around  max-sm:min-w-[17rem] max-sm:mx-[1rem] max-xl:justify-start scroll-smooth">
        <DocumentItem/>
        <DocumentItem/>
        <DocumentItem/>
      </section>
      <div className="gap-2 mb-[2rem] justify-center hidden max-lg:flex">
          <ChevronLeftIcon onClick={() => swipeHandler('ltr')} className="w-[2.5rem] text-neutral-700 p-2 rounded-full bg-zinc-200 cursor-pointer hover:bg-zinc-300 shadow-customeThree"/>
          <ChevronRightIcon onClick={() => swipeHandler('rtl')} className="w-[2.5rem] text-neutral-700 p-2 rounded-full bg-zinc-200 cursor-pointer hover:bg-zinc-300 shadow-customeThree"/>
      </div>
    </>
  )
}
