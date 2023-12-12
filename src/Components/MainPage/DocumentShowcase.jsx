import { useRef } from 'react'
import DocumentItem from '../Global Ui/Document'

export default function DocumentShowcase() {
   
  const documentCon = useRef()  

  return (
    <>
      <section ref={documentCon} className="p-4 flex gap-6 h-[20rem] overflow-auto m-[1rem] mb-[1rem] mx-[4rem] justify-around max-sm:min-w-[17rem] max-sm:mx-[1rem] max-xl:justify-start scroll-smooth">
        <DocumentItem/>
        <DocumentItem/>
        <DocumentItem/>
      </section>
    </>
  )
}
