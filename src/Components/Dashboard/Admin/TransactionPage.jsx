import { AdjustmentsHorizontalIcon, BanknotesIcon, CreditCardIcon } from "@heroicons/react/24/outline"
import { SeperatorX } from "../../Global Ui/Seperator"
import SearchFilter from "../../Filters/SearchFilter"
import DateFilter from "../../Filters/DateFilter"
import AutherizationFilter from "../../Filters/AutherizationFilter"
import DynamicFilter from "../../Filters/DynamicFilter"

export default function TransactionPage() {
  return (
    <div className="w-full gap-2 p-3 h-[85%] max-h-[45rem]">
        <div className="flex gap-2 my-2 mb-4 relative items-center">
            <p className="flex gap-2 items-center font-semibold text-xl mr-4"> <AdjustmentsHorizontalIcon className="w-[1.5rem]"/> Filter : </p>
            <DateFilter/>
            <AutherizationFilter/>
            <DynamicFilter type="Price"/>
            <SearchFilter/>
        </div>
        <div className="flex flex-col gap-3">
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
            <Transaction/>
        </div>
    </div>
  )
}

const Transaction = () => {
    return (
        <div className="w-full flex p-2 shadow-customeTwo bg-zinc-50 rounded-lg gap-2 items-center">
            <BanknotesIcon className="w-[1.5rem]"/>
            <p className="w-[8rem] text-center"><b>Credit : </b> 215 $</p>
            <SeperatorX/>
            <p className="w-[15rem] text-center"><b>Time : </b> 2023 - 2 - 5 / 11:30 PM</p>
            <SeperatorX/>
            <p className="w-[12rem] text-center"><b>Autherization : </b>User</p>
            <SeperatorX/>
            <p className="flex-1 truncate"><b>Email : </b>arsalanghoochani15@gmail.com</p>
            <button className="flex gap-2 items-center p-2 bg-green-500 font-semibold text-white rounded-lg hover:bg-green-600">more info <CreditCardIcon className="w-[1.5rem]"/> </button>
        </div>
    )
}