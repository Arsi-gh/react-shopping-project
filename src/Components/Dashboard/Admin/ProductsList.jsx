import { AdjustmentsHorizontalIcon , PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import EditProduct from '../../Form/EditProduct'
import SearchFilter from '../../Filters/SearchFilter'
import DateFilter from '../../Filters/DateFilter'
import { useState } from 'react'
import DynamicFilter from '../../Filters/DynamicFilter'

export default function ProductsList() {

  const [editDisplay , setEditDisplay] = useState(false)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex items-center gap-2 justify-between'>
        <FilterOptions/>
        <SearchFilter/>
      </div>
      <div className="bg-neutral-100 pt-2 pb-8 rounded-xl shadow-customeTwo w-fit">
        <table className="border-collapse table-auto">
          <ProdListHeader/>
          <tbody>
            <ProdItem displayHandler={setEditDisplay}/>
            <ProdItem displayHandler={setEditDisplay}/>
            <ProdItem displayHandler={setEditDisplay}/>
            <ProdItem displayHandler={setEditDisplay}/>
            <ProdItem displayHandler={setEditDisplay}/>
          </tbody>
        </table>
      </div>    
      {editDisplay && <EditProduct displayHandler={setEditDisplay}/>}
    </div>
  )
}

const FilterOptions = () => {
  return (
    <div className='flex gap-2 gap-x-2 items-center relative'>
      <p className="flex gap-2 items-center font-semibold text-xl mr-4"> <AdjustmentsHorizontalIcon className="w-[1.5rem]"/> Filter : </p>
      <DateFilter/>
      <DynamicFilter type="Amount"/>
      <DynamicFilter type="Price"/>
    </div>
  )
}


const ProdItem = ({displayHandler}) => {
    return (
      <tr className="bg-white border-y-[1px] border-zinc-300">
        <td className="p-2 px-6 text-center">
            <img className="w-[2.5rem] h-[2.5rem]  rounded-md" src="/images/welcome-section-images/1.png" alt="" />
        </td>
        <td className="p-2 px-6 text-center">flora plant</td>
        <td className="p-2 px-6 text-center">25 $</td>
        <td className="p-2 px-6 text-center">Spanish plant</td>
        <td className="p-2 px-6 text-center">Spain</td>
        <td className="p-2 px-6 text-center">#035adfg</td>
        <td className="p-2 px-6 text-center">230</td>
        <td className="p-2 px-6 text-center">20 %</td>
        <td className="p-2 px-6 text-center flex gap-2">
            <button onClick={() => displayHandler(true)}>
                <PencilSquareIcon className='w-[2rem] p-1 bg-blue-400 text-white rounded-md'/>
            </button>            
            <button>
                <TrashIcon className='w-[2rem] p-1 bg-red-500 text-white rounded-md'/>
            </button>            
        </td>
      </tr>
    )
}

export const ProdListHeader = () => {
    return (
      <thead className="">
        <tr className="">
            <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Image</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Product name</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Product price</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Product category</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Product country</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>code</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>amount</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>off code</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p className='font-semibold'>Options</p>
          </th>
        </tr>
      </thead>
    )
  }