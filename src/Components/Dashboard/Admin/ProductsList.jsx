import { AdjustmentsHorizontalIcon, BanknotesIcon, CalculatorIcon, ChevronDownIcon, ClipboardIcon, MagnifyingGlassIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import { forwardRef, useEffect, useRef, useState } from 'react'
import EditProduct from '../../Form/EditProduct'

export default function ProductsList() {

  const [editDisplay , setEditDisplay] = useState(false)

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className='flex items-center gap-2 justify-between'>
        <FilterOptions/>
        <div className='flex gap-2'>
          <input className='bg-zinc-100 shadow-customeTwo px-4 p-2 rounded-md w-[20rem]' type="text" placeholder='Search product'/>
          <MagnifyingGlassIcon className='w-[2rem] p-2 rounded-lg border-'/>
        </div>
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

  const dropDownDefaultState = {
    category  : false,
    price  : false,
    amount  : false,
  }

  const categoryRef = useRef()
  const priceRef = useRef()
  const amountRef = useRef()

  const [dropDown , setDropDown] = useState({
    category  : false,
    price  : false,
    amount  : false,
  })


  const displayDropDown = (name) => {
    setDropDown(dropDownDefaultState)
    if (!name) return
    setDropDown(prev => {
      
      return {...prev , [name] : !dropDown[name]}
    })
  }
  
  useEffect(() => {
    if (!categoryRef.current.className.includes(' hidden') || !priceRef.current.className.includes(' hidden') || !amountRef.current.className.includes(' hidden'))
    document.addEventListener('mousedown' , (event) => {
      if (!categoryRef.current.contains(event.target) && !priceRef.current.contains(event.target)  && !amountRef.current.contains(event.target)) {
        // if (categoryRef.current.id == event.target.id && priceRef.current.id == event.target.id && amountRef.current.id == event.target.id) return
        displayDropDown()
        // console.log(event.target.parentElement)
        // console.log(categoryRef.current.id)
        }
      })
    
    
  } , [dropDown])

  return (
    <div className='flex gap-2 gap-x-4 items-center relative'>
          <b className='text-lg flex gap-2 items-center'><AdjustmentsHorizontalIcon className='w-[2rem]'/>Filter by : </b>
          <button onClick={() => displayDropDown('category')} className='p-2 px-3  bg-zinc-100 shadow-customeTwo rounded-md hover:bg-zinc-200 flex gap-2 items-center'><ClipboardIcon className='w-[1.2rem]'/>Category<ChevronDownIcon strokeWidth={2} className={`w-[1rem] ${dropDown.category && 'rotate-180'}`}/></button>
          <button onClick={() => displayDropDown('price')} className='p-2 px-3  bg-zinc-100 shadow-customeTwo rounded-md hover:bg-zinc-200 flex gap-2 items-center'><BanknotesIcon className='w-[1.2rem]'/>Price<ChevronDownIcon strokeWidth={2} className={`w-[1rem] ${dropDown.price && 'rotate-180'}`}/></button>
          <button onClick={() => displayDropDown('amount')} className='p-2 px-3  bg-zinc-100 shadow-customeTwo rounded-md hover:bg-zinc-200 flex gap-2 items-center'><CalculatorIcon className='w-[1.2rem]'/>Amount<ChevronDownIcon strokeWidth={2} className={`w-[1rem] ${dropDown.amount && 'rotate-180'}`}/></button>
          <CategoryDropDown display={dropDown.category} ref={categoryRef}/>
          <PriceDropDown display={dropDown.price} ref={priceRef} />
          <AmountDropDown display={dropDown.amount} ref={amountRef} />
    </div>
  )
}

const CategoryDropDown = forwardRef(function  CategoryDropDown (props , ref)  {
  return (
    <ul id='category-drop-down' className={`absolute bg-white border-[1px] border-gray-300 shadow-customeFour  rounded-lg overflow-hidden top-[3rem] left-[24%] ${!props.display && 'hidden'}`} ref={ref}>
      <li className='p-2 px-4 cursor-pointer w-[10rem] hover:bg-zinc-100 border-b-[1px] border-gray-300'>spanish</li>
      <li className='p-2 px-4 cursor-pointer w-[10rem] hover:bg-zinc-100 border-b-[1px] border-gray-300'>italian</li>
      <li className='p-2 px-4 cursor-pointer w-[10rem] hover:bg-zinc-100 border-b-[1px] border-gray-300'>arabian</li>
    </ul>
  )
});

const PriceDropDown = forwardRef(function PriceDropDown(props , ref) {
  return (
    <div id='price-drop-down' className={`absolute top-[3rem] bg-white left-[50%] rounded-lg border-[1px] border-gray-300 shadow-customeFour ${!props.display && 'hidden'}`} ref={ref}>
      <div className='flex gap-2 p-3 px-4 items-center'>
        <label className='flex-1'>Min : </label>
        <input className='bg-zinc-200 w-[10rem] p-2 px-4 rounded-lg shadow-customeTwo flex-1' type="number" placeholder='Example : 10 $'/>
      </div>
      <div className='flex gap-2 p-3 px-4 items-center'>
        <label className='flex-1'>Max : </label>
        <input className='bg-zinc-200 w-[10rem] p-2 px-4 rounded-lg shadow-customeTwo flex-1' type="number" placeholder='Example : 200 $'/>
      </div>
    </div>
  )
});

const AmountDropDown = forwardRef(function AmountDropDown(props , ref) {
  return (
    <div id='amount-drop-down' className={`absolute top-[3rem] bg-white left-[75%] rounded-lg border-[1px] border-gray-300 shadow-customeFour ${!props.display && 'hidden'}`} ref={ref}>
      <div className='flex gap-2 p-3 px-4 items-center'>
        <label className='w-[3rem]'>Min : </label>
        <input className='bg-zinc-200 w-[10rem] p-2 px-4 rounded-lg shadow-customeTwo' type="number" placeholder='Example : 20'/>
      </div>
      <div className='flex gap-2 p-3 px-4 items-center'>
        <label className='w-[3rem]'>Max : </label>
        <input className='bg-zinc-200 w-[10rem] p-2 px-4 rounded-lg shadow-customeTwo' type="number" placeholder='Example : 300 '/>
      </div>
    </div>
  )
});

const ProdItem = ({displayHandler}) => {
    return (
      <tr className="bg-white border-y-[1px] border-zinc-300">
        <td className="p-2 px-6 text-center">
            <img className="w-[2.5rem] h-[2.5rem]  rounded-md" src="/images/welcome-section-images/1.png" alt="" />
        </td>
        <td className="p-2 px-6 text-center">flora plant</td>
        <td className="p-2 px-6 text-center">25 $</td>
        <td className="p-2 px-6 text-center">Spanish plant</td>
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
            <p>Image</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Product name</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Product price</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Product category</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Product code</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Product amount</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>off code</p>
          </th>
          <th className="p-2 px-[1.335rem] text-center">
            <p>Options</p>
          </th>
        </tr>
      </thead>
    )
  }