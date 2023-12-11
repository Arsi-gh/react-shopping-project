import { CreditCardIcon, MapIcon, MapPinIcon, SunIcon, TruckIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function BasketSecondPart() {

  const [displayModal , setDisplayModal] = useState(false)

  return (
    <>
      <h3 className="font-bold text-lg flex gap-2 items-center max-md:text-base max-sm:text-sm">
        <TruckIcon className="w-[2rem]" /> Location , timing and payment method{" "}
      </h3>
      <LocationSelection setDisplayModal={setDisplayModal}/>
      <span className="w-full h-[1px] bg-zinc-300"></span>
      <div className="flex flex-col p-3 rounded-lg gap-4 bg-white shadow-customeFour">
        <h4 className="font-bold flex gap-2 items-center">
          <SunIcon className="w-[2rem]" />
          Select delivery day :
        </h4>
        <DaySelection />
      </div>
      <span className="w-full h-[1px] bg-zinc-300"></span>
      <PaymentMethod />
      {/* {displayModal && <LocationSelectionModal setDisplayModal={setDisplayModal}/>} */}
    </>
  );
}

const LocationSelection = ({setDisplayModal}) => {
    return (
        <div className="flex flex-col p-3 rounded-lg gap-4 bg-white shadow-customeFour">
            <h4 className="font-bold flex gap-2 items-center"><MapIcon className="w-[1.5rem]"/>location :</h4>
            <div className="flex gap-2 flex-col rounded-lg bg-zinc-100 shadow-customeTwo p-2">
                <div className="flex gap-2 gap-x-20 justify-between flex-wrap">
                    <p className="flex gap-2"><MapIcon className="w-[1.5rem]"/>IR</p>
                    <span>Isfahan</span>
                    <p><b>Reciever : </b>Arsalan ghoochani</p>
                    <p><b>Phone number  : </b>09185126544</p>
                </div>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p className="flex gap-2"><MapPinIcon className="w-[1.5rem]"/>kashani street , zarandooz alley , khorshid apartment , third unit</p>
            </div>
            <button onClick={() => setDisplayModal(true)} className="flex gap-2 items-center bg-green-500 text-white font-bold w-fit p-2 rounded-lg"><MapIcon className="w-[1.5rem]"/>Choose another location </button>
        </div>
    )
}

const DaySelection = () => {
    return (
        <div className="flex gap-2 overflow-auto p-2">
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Monday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>13.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Tuesday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>14.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Wednesday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>15.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Thursday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>16.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Friday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>17.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Saturday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>18.Sep.2023</p>
            </button>
            <button className="w-fit bg-zinc-100 items-center shadow-customeTwo p-2 h-[8rem] rounded-xl flex flex-col justify-between gap-2 hover:bg-gradient-to-tr from-green-600 to-green-400 hover:text-white">
                <p className="text-lg font-bold">Sunday</p>
                <span className="w-full h-[1px] bg-zinc-300"></span>
                <p>9AM - 9PM</p>
                <p>19.Sep.2023</p>
            </button>
        </div>
    )
}

const PaymentMethod = () => {
    return (
        <div className="flex flex-col p-3 rounded-lg gap-4 bg-white shadow-customeFour w-fit">
                <h4 className="font-bold flex gap-2 items-center"><CreditCardIcon className="w-[2rem]"/> Select payment method :</h4>
                <div className="flex gap-2 w-fit">
                    <button className="w-[4rem] h-[4rem] bg-zinc-300 shadow-customeTwo rounded-lg p-1 hover:border-2 border-green-500"><img className="w-full h-full rounded-lg" src="/images/payment-images/paypal.png" alt="" /></button>
                    <button className="w-[4rem] h-[4rem] bg-zinc-300 shadow-customeTwo rounded-lg p-1 hover:border-2 border-green-500"><img className="w-full h-full rounded-lg" src="/images/payment-images/visa.png" alt="" /></button>
                    <button className="w-[4rem] h-[4rem] bg-zinc-300 shadow-customeTwo rounded-lg p-1 hover:border-2 border-green-500"><img className="w-full h-full rounded-lg" src="/images/payment-images/apple.jpg" alt="" /></button>
                </div>
        </div>
    )
}