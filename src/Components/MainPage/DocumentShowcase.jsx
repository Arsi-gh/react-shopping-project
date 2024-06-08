import { useRef } from 'react'
import DocumentItem from '../Global Ui/Document'

export default function DocumentShowcase() {
   
  const documentCon = useRef()  

  return (
    <>
      <section ref={documentCon} className="custom-container my-8 flex md:gap-6 gap-2 max-md:flex-col">
        <DocumentItem/>
        <DocumentItem/>
        <DocumentItem/>
      </section>
    </>
  )
}
