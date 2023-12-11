import { CalendarIcon, CreditCardIcon, InformationCircleIcon, MapPinIcon } from "@heroicons/react/24/outline";

const basketBtns = [ 
  {text : 'Choose address' , icon : <MapPinIcon strokeWidth={1.8} className="w-[1.5rem]"/>}, 
  {text : 'Finish registration' , icon : <CreditCardIcon strokeWidth={1.8} className="w-[1.5rem]"/>}, 
]

export default function BasketSide({basketHandler , basketIndex}) {
  if (basketIndex !== 2) {

    return (
      <div className="w-[18rem] h-fit flex flex-col gap-3 p-2 rounded-xl bg-white shadow-customeThree max-lg:w-full">
        <p className="flex items-center gap-2 font-bold"><InformationCircleIcon className="w-[1.5rem]"/> Basket info</p>
        <p className="flex gap-2"><CalendarIcon className="w-[1.5rem]"/> <b>Today : </b>13 - April - 2023</p>
        <span className="w-full h-[1px] bg-zinc-300"></span>
        <div className="flex flex-col gap-2 relative">
            <label htmlFor="code-input">Have off code ?</label>
            <div className="flex gap-2 w-full">
                <input placeholder="Enter here" type="text" className="flex-1 p-2 bg-zinc-100 shadow-customeTwo rounded-lg focus:bg-white focus:shadow-customeFive focus:border-[1px] border-green-500 outline-none"/>
                <button className="bg-green-500 text-sm  text-white font-bold p-2 px-2 rounded-lg w-fit">Submit</button>
            </div>
        </div>
        <span className="w-full h-[1px] bg-zinc-300"></span>
        <p className="flex justify-between"><b>Total price : </b>310 $</p>
        <p className="flex justify-between text-red-400"><b>Off :</b>-10 $</p>
        <p className="flex justify-between"><b>Price to pay </b>300$</p>
        <span className="w-full h-[1px] bg-zinc-300"></span>
        <button onClick={() => basketIndex != 2 && basketHandler(prev => prev+1)} className="bg-green-500  p-2 rounded-lg text-white flex justify-between items-center">
          <b>{basketBtns[basketIndex].text}</b>
          {basketBtns[basketIndex].icon}
        </button>
      </div>
    )
  }
}
