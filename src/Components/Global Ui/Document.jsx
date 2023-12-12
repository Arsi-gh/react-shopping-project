import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function DocumentItem() {
  return (
    <div className="w-[25rem] max-h-[18rem] rounded-lg overflow-hidden justify-between cursor-pointer shadow-customeTwo relative max-lg:w-[48%] pmd:min-w-[20rem] max-md:rounded-none max-md:shadow-none max-md:border-y-[1px] border-zinc-300 max-md:h-auto max-md:w-full max-sm:w-full">
      <img className="w-full h-full object-cover" src="/images/about-us-images/categories.png" alt="" />
      <span className="w-full absolute bottom-0 bg-white h-[4rem] opacity-70 filter "></span>
      <div className="w-full p-1 px-4  flex justify-between items-center absolute bottom-0 h-[4rem] max-sm:text-sm">
        <div>
          <h3 className="text-lg font-bold max-sm:text-sm">Document title</h3>
          <p className="flex gap-2"><UserCircleIcon className="w-[1.5rem] max-sm:w-[1.2rem]"/> Author : test user</p>
        </div>
        <button className="p-2 px-4 bg-green-500 rounded-lg shadow-customeFour text-white font-bold">read more</button>
      </div>
    </div>
  )
}
