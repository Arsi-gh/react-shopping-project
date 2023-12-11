import { BookOpenIcon } from "@heroicons/react/24/outline"
import DocumentItem from "../Components/Global Ui/Document"
import Sort from "../Components/Filters/Sort"

export default function Documents() {
  return (
    <>
      <div className="flex items-center m-[1rem] ml-[2rem] gap-2 relative w-fit max-sm:m-4">
        <span className={`bg-green-500 w-[105%]  h-[1.5rem] absolute top-[60%] opacity-70 -z-10`}></span>
        <BookOpenIcon className="w-[2.5rem] h-[2.5rem] m-2 text-green-900" />
        <h3 className="text-3xl font-bold text-neutral-800 max-sm:text-xl">Plant store documents</h3>
      </div>
      <main className="flex m-[2rem] gap-2 p-2 max-lg:flex-col max-md:m-2 max-md:p-0">
        <div className="max-xl:m-[1rem]">
          <Sort/>
        </div>
        <div className="ml-8 px-8 flex flex-wrap flex-1 gap-6 max-md:gap-2 max-md:m-0 max-md:px-0"> 
          <DocumentItem/>
          <DocumentItem/>
          <DocumentItem/>
          <DocumentItem/>
          <DocumentItem/>
          <DocumentItem/>
        </div>
      </main>
    </>

  )
}
