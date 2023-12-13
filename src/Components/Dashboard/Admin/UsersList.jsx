import { AdjustmentsHorizontalIcon, AtSymbolIcon, ChevronDownIcon, EyeIcon, LockClosedIcon, MagnifyingGlassIcon, UserIcon, UserMinusIcon} from "@heroicons/react/24/outline";
import DateFilter from "../../Filters/DateFilter";
import AutherizationFilter from "../../Filters/AutherizationFilter";
import SearchFilter from "../../Filters/SearchFilter";

export default function UsersList() {
  return (
    <div className="flex gap-4 p-2">
      <div className="flex flex-col gap-2">
        <FilterUser/>
        <div className="bg-neutral-100 pt-2 pb-8 w-fit rounded-xl shadow-customeTwo">
          <table className="border-collapse table-auto">
            <ListHeader/>
            <tbody>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
              <ListItem/>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const FilterUser = () => {
  return (
    <div className="flex gap-2 my-2 mb-4 relative items-center">
      <p className="flex gap-2 items-center font-semibold text-xl mr-4"> <AdjustmentsHorizontalIcon className="w-[1.5rem]"/> Filter : </p>
      <DateFilter/>
      <AutherizationFilter/>
      <SearchFilter/>
    </div>
  )
}


export const ListHeader = () => {
  return (
    <thead className="">
      <tr className="">
        <th className="p-2 px-8 text-center">
          <AtSymbolIcon className="w-[1.5rem] inline-block mr-2"/>
          <span className="font-semibold">Index</span>
        </th>
        <th className="p-2 px-8 text-center">
          <AtSymbolIcon className="w-[1.5rem] inline-block mr-2"/>
          <span className="font-semibold">Email</span>
        </th>
        <th className="p-2 px-8 text-center">
          <UserIcon className="w-[1.5rem] inline-block mr-2"/>
          <span className="font-semibold">Username</span>
        </th>
        <th className="p-2 px-8 text-center">
          <LockClosedIcon className="w-[1.5rem] inline-block mr-2"/>
          <span className="font-semibold">Password</span>
        </th>
        <th className="p-2 px-8 text-center">
          <LockClosedIcon className="w-[1.5rem] inline-block mr-2"/>
          <span className="font-semibold">Signed up date</span>
        </th>
      </tr>
    </thead>
  )
}

export const ListItem = () => {
  return (
    <tr className="bg-white border-y-[1px] border-zinc-300">
      <td className="font-semibold p-2 px-8 text-center">1</td>
      <td className="p-2 px-8 text-center">arsalanghoochani15@gmail.com</td>
      <td className="p-2 px-8 text-center">Arsalan ghoochani</td>
      <td className="p-2 px-8 text-center">Arsalan***</td>
      <td className="p-2 px-8 text-center">Wednesday, 13 December 2023</td>
      <td className="p-2 px-8 text-center">
        <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
      </td>
    </tr>
  )
}