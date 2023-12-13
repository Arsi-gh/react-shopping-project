import { ClockIcon, DevicePhoneMobileIcon, EyeIcon, MapPinIcon, ReceiptRefundIcon, ShoppingBagIcon, TruckIcon, UserIcon, XCircleIcon } from '@heroicons/react/24/outline'

export default function OrdersPage() {
  return (
    <div className="flex flex-col gap-2 p-2 h-full">
      <OrdersCategory/>
      <div className='flex gap-2 h-full max-xl:flex-col'>
        <OrdersList/>
        <div className='w-1/2 mt-2 bg-white shadow-customeTwo rounded-lg flex flex-col gap-2 h-fit max-xl:w-full'>
            <OrderMainInfos/>
            <OrderReciept/>
        </div>
      </div>
    </div>
  );
}

function OrdersCategory () {
    return (
      <div className="flex mt-2 px-2 gap-2 overflow-auto">
        <button className='group p-2 pr-3 rounded-lg border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-semibold flex gap-2 items-center max-lg:flex-1'>
                <TruckIcon strokeWidth={2} className='w-[2rem] p-1 bg-blue-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-blue-400'/>
                <p>On going</p>
        </button>
        <button className='group p-2 pr-3 rounded-lg border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-semibold flex gap-2 items-center max-lg:flex-1'>
                <ShoppingBagIcon strokeWidth={2} className='w-[2rem] p-1 bg-green-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-green-400'/>
                <p>Completed</p>
        </button>
        <button className='group p-2 pr-3 rounded-lg border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white font-semibold flex gap-2 items-center max-lg:flex-1'>
                <ClockIcon strokeWidth={2} className='w-[2rem] p-1 bg-orange-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-orange-400'/>
                <p>Await</p>
        </button>
        <button className='group p-2 pr-3 rounded-lg border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white font-semibold flex gap-2 items-center max-lg:flex-1'>
                <XCircleIcon strokeWidth={2} className='w-[2rem] p-1 bg-red-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-red-400'/>
                <p>Canceled</p>
        </button>
        <button className='group p-2 pr-3 rounded-lg border-2 border-violet-400 text-violet-400 hover:bg-violet-400 hover:text-white font-semibold flex gap-2 items-center max-lg:flex-1'>
                <ReceiptRefundIcon strokeWidth={2} className='w-[2rem] p-1 bg-violet-400 rounded-md text-white group-hover:bg-white group-hover:bg-opacity-80 group-hover:text-violet-400'/>
                <p>Refund</p>
        </button>
      </div>
    )
}

const OrdersList = () => {
    return (
        <div className='max-h-[37.5em] flex flex-col gap-2 p-2 overflow-scroll'>
            <OrderItem>
                <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
            </OrderItem>
            <OrderItem>
                <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
            </OrderItem>
            <OrderItem>
                <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
            </OrderItem>
            <OrderItem>
                <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
            </OrderItem>
            <OrderItem>
                <EyeIcon strokeWidth={1.5} className='w-[2rem] p-1 bg-green-400 rounded-md cursor-pointer text-white'/>
            </OrderItem>
        </div>
    )
}

export function OrderItem ({children}) {
    return (
        <div className='flex w-full gap-3 items-center justify-between p-2 rounded-md bg-zinc-50 shadow-customeTwo max-sm:text-sm'>
            <ShoppingBagIcon className='w-[2rem] max-sm:hidden'/>
            <span className='w-[1px] h-[90%] bg-zinc-300 max-sm:hidden'></span>
            <div className='flex gap-2 items-center bg-blue-400 rounded-md text-white p-2 px-3'>
                <TruckIcon className='w-[1.5rem]'/>
                <p className='max-sm:hidden max-lg:hidden'>on the way</p>
            </div>
            <span className='w-[1px] h-[90%] bg-zinc-300'></span>
            <p>Jan , 21 , 2023</p>
            <span className='w-[1px] h-[90%] bg-zinc-300'></span>
            <p><b className='max-md:hidden'>Price :</b> 214 $</p>
            {children ? <span className='w-[1px] h-[90%] bg-zinc-300'></span> : null}
            {children && children}
        </div>
    )
}

function OrderMainInfos () {
    return (
        <div className='p-2 max-sm:text-sm'>
            <div className='flex items-center gap-2'>
                <ShoppingBagIcon strokeWidth={1.8} className='w-[2rem] p-1' />
                <h3> <b>Shopped in : </b> 2023 - January - 15 , at : 8:13 PM</h3>
            </div>
            <div className='flex items-center gap-2 flex-wrap mt-2 pt-2 border-t-[1px] border-gray-200'>
                <MapPinIcon strokeWidth={1.8} className='w-[2rem] p-1'/>
                <b>Location address :</b>
                <p className='pl-2'>IR , Tehran , fereshte street , Roya alley , khorshid apartment</p>
            </div>
            <div className='flex items-center gap-2 flex-wrap mt-2 pt-2 border-t-[1px] border-gray-200'>
                <UserIcon strokeWidth={1.8} className='w-[2rem] p-1'/>
                <p><b>Name :</b> Arsalan ghoochani</p>
            </div>
            <div className='flex items-center gap-2 flex-wrap mt-2 pt-2 border-t-[1px] border-gray-200'>
                <DevicePhoneMobileIcon strokeWidth={1.8} className='w-[1.9rem] p-1'/>
                <p><b>Phone number :</b> 09129850823</p>
            </div>
        </div>
    )
}

function OrderReciept () {
    return (
        <ul className='m-2 rounded-lg bg-zinc-100 overflow-auto border-[1px]'>
            <li className='flex justify-between border-b-[1px] p-2'>
                <h4>Products reciept</h4>
                <p><b>Total price :</b> 67$</p>
            </li>
            <OrderRecieptProd/>
            <OrderRecieptProd/>
            <OrderRecieptProd/>
        </ul>
    )
}

function OrderRecieptProd () {
    return (
        <li className='flex justify-between items-center cursor-pointer p-2 px-4 max-sm:text-sm'>
            <img src='/images/welcome-section-images/2.png' className='w-[2rem] h-[2rem] bg-green-500 rounded-md shadow-customeTwo'/>
            <span className='w-[1px] h-6 bg-zinc-400'></span>
            <h4><b className='max-sm:hidden'>Name : </b> Rose maryam</h4>
            <span className='w-[1px] h-6 bg-zinc-400'></span>
            <p><b className='max-sm:hidden'>Size : </b> 25 * 35</p>
            <span className='w-[1px] h-6 bg-zinc-400'></span>
            <p><b className='max-sm:hidden'>Price : </b> 25 $</p>
        </li>
    )
}