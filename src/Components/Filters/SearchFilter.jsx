import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function SearchFilter() {
  return (
    <div className="flex gap-2">
        <input placeholder="Search" type="text" className="flex-1 p-2 rounded-lg bg-white shadow-customeTwo" />
        <MagnifyingGlassIcon strokeWidth={2} className="w-[2.5rem] shadow-customeOne p-2 rounded-lg bg-green-500 text-white cursor-pointer"/>
    </div>
  )
}
