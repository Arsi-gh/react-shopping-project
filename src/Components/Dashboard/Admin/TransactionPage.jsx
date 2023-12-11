import { BanknotesIcon, ChevronDownIcon, ClockIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function TransactionPage() {
  return (
    <div className="flex gap-2 p-2 h-[85%] max-h-[45rem]">
        <TransactionCon/>
        <div className="flex-1  rounded-lg h-full flex gap-2 pb-2 flex-wrap">
            <div className="w-full h-1/2 bg-zinc-200 shadow-customeTwo rounded-lg"></div>
            <TransactionStatics/>
            <div className="w-[20rem] h-1/2 bg-zinc-200 shadow-customeTwo rounded-lg"></div>
        </div>
    </div>
  )
}

const TransactionCon = () => {
    return (
        <div className="w-[20rem] h-full flex flex-col gap-3 p-2 bg-zinc-200 shadow-customeTwo rounded-lg overflow-scroll">
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
        </div>
    )
}

const Transaction = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="flex h-fit flex-col rounded-lg bg-white shadow-customeTwo">
            <header className="flex items-center justify-between p-2 bg-slate-50 border-b-[1px] rounded-t-lg border-zinc-200">
                <p className="flex gap-2"><b className="flex gap-2 items-center"><BanknotesIcon className="w-[1.5rem]"/> Price : </b>23 $</p>
                <span className="flex gap-2">8:32 PM <ClockIcon className="w-[1.5rem]"/></span>
            </header>
            {
                isOpen && (
                    <>
                        <p className="p-2"><b>By : </b>Arsalan ghoochani</p>
                        <p className="p-2"><b>User Authentication : </b>Subscriber</p>
                        <p className="p-2"><b>Date : </b>23 . April . 2023</p>
                        <h4 className="px-2 mt-2">Products : </h4>
                        <div className="m-2 mb-4 p-2 flex flex-col gap-2 shadow-customeTwo rounded-md bg-zinc-100 h-[10rem] overflow-scroll relative">
                            <TransactionProd/>
                            <TransactionProd/>
                            <TransactionProd/>
                            <TransactionProd/>
                        </div>
                    </>
                )
            }
            <button onClick={e => setIsOpen(!isOpen)} className="p-[2px] rounded-b-lg flex justify-center bg-slate-100  hover:bg-slate-200"><ChevronDownIcon  className={`w-[1.2rem] ${isOpen ? 'rotate-180' : 'rotate-0'}`}/></button>
        </div>
    )
}

const TransactionStatics = () => {
    return (
        <div className="flex-1 h-1/2 pt-3 bg-zinc-200 shadow-customeTwo rounded-lg flex flex-col overflow-hidden">
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>Year successful transactions : </b>180</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>Year total transactions : </b>2300 $</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>This month all transactions  : </b>24</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>This month all refunds : </b>5</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>This month transactions : </b>450 $</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>Total refund payments : </b>200 $</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>Agent sales this month : </b>800 $</p>
            <p className="p-[6px] border-b-[1px] border-zinc-200 bg-white"><b>Sub sales this month : </b>35</p>
        </div>
    )
}

const TransactionProd = () => {
    return (
        <div className="flex justify-between p-1 items-center rounded-lg shadow-customeTwo bg-white">
             <img className="w-[2rem] h-[2rem] bg-red-500 rounded-md" src="" alt="" />
             <p>Flora plant</p>
             <span>3</span>
             <span>45 $</span>
        </div>
    )
}