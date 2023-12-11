import { AdjustmentsHorizontalIcon, AtSymbolIcon, ChevronDownIcon, EyeIcon, LockClosedIcon, MagnifyingGlassIcon, UserIcon, UserMinusIcon} from "@heroicons/react/24/outline";

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
      <div className="h-full w-[21rem]">
        <MainInfos/>
        <div className="flex flex-col gap-3 p-2 mt-4 bg-white shadow-customeTwo rounded-lg">
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
            <InfoItem/>
            <button className="bg-red-400 p-2 rounded-lg text-white font-bold flex gap-2 justify-center"><UserMinusIcon className="w-[1.5rem]"/> kick user</button>
        </div>
      </div>
    </div>
  );
}

const FilterUser = () => {
  return (
    <div className="flex gap-x-3 p-2 items-center relative">
      <h3 className="flex gap-2 font-bold items-center"><AdjustmentsHorizontalIcon className="w-[2rem]"/> Filter users by : </h3>
      <button className="p-2 px-3 bg-zinc-100 shadow-customeTwo rounded-md hover:bg-zinc-200 flex gap-2 items-center">Autherization <ChevronDownIcon strokeWidth={2} className="transition-all w-[1.2rem]"/></button>
      <button className="p-2 px-3 bg-zinc-100 shadow-customeTwo rounded-md hover:bg-zinc-200 flex gap-2 items-center">Signed date <ChevronDownIcon strokeWidth={2} className="transition-all w-[1.2rem]"/></button>
      <input className="flex-1 p-2 px-4 bg-zinc-100 shadow-customeTwo rounded-lg" type="text" placeholder="Search"/>
      <MagnifyingGlassIcon className="w-[2rem] p-1 bg-green-500 rounded-lg"/>
    </div>
  )
}

const UserAutherizationPart = () => {
  return (
    <div className="absolute bg-stone-100 shadow-customeThree top-[100%] left-[22%] rounded-lg overflow-hidden">
        <label className="p-2 px-4 border-b-[1px] border-zinc-300 flex justify-between w-[10rem]" htmlFor="all">
          <p>All users</p>
          <input id="all" type="checkbox" />
        </label>
        <label className="p-2 px-4 border-b-[1px] border-zinc-300 flex justify-between w-[10rem]" htmlFor="subscribers">
          <p>subscribers</p>
          <input id="subscribers" type="checkbox" />
        </label>
        <label className="p-2 px-4 flex justify-between w-[10rem]" htmlFor="staff">
          <p>staff</p>
          <input id="staff" type="checkbox" />
        </label>
    </div>
  )
}

export const ListHeader = () => {
  return (
    <thead className="">
      <tr className="">
        <th className="p-2 px-8 text-center">
          <AtSymbolIcon className="w-[1.5rem] inline-block mr-2"/>
          <b>Email</b>
        </th>
        <th className="p-2 px-8 text-center">
          <UserIcon className="w-[1.5rem] inline-block mr-2"/>
          <b>Username</b>
        </th>
        <th className="p-2 px-8 text-center">
          <LockClosedIcon className="w-[1.5rem] inline-block mr-2"/>
          <b>Password</b>
        </th>
      </tr>
    </thead>
  )
}

export const MainInfos = () => {
  return (
    <div className="flex items-center gap-2 gap-x-4 p-2 rounded-xl bg-zinc-100 shadow-customeTwo">
      <UserIcon className="w-[3rem]"/>
      <div>
        <h2 className="font-bold">Arsalan ghoochani</h2>
        <p>arsalanghoochani15@gmail.com</p>
      </div>
    </div>
  )
}

export const ListItem = () => {
  return (
    <tr className="bg-white border-y-[1px] border-zinc-300">
      <td className="p-2 px-8 text-center">arsalanghoochani15@gmail.com</td>
      <td className="p-2 px-8 text-center">Arsalan ghoochani</td>
      <td className="p-2 px-8 text-center">Arsalan***</td>
      <td className="p-2 px-8 text-center">
        <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
      </td>
    </tr>
  )
}

export const InfoItem = () => {
  return (
    <div className="flex p-1 w-full justify-between items-center">
      <p className="flex gap-2 items-center">
        <LockClosedIcon className="w-[1.5rem]"/>
        <b>Password</b>
      </p>
      <p>Arsalan2003</p>
    </div>
  )
}