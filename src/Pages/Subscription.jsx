import { CurrencyDollarIcon, GiftIcon, ListBulletIcon, MoonIcon, ReceiptRefundIcon, RocketLaunchIcon, SparklesIcon, TicketIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function Subscription() {
  return (
    <section className="flex flex-col gap-2 my-12 mx-auto px-24 gap-y-4 max-sm:p-4">
        <h1 className="text-2xl font-bold max-sm:text-lg">Plant store subscription</h1>
        <p className="flex gap-2 items-center text-lg"><ListBulletIcon className="w-[1.5rem]"/> Why you should by our subscribtion :</p>
        <SubFeatures/>
        <SubFeaturesInfo/>
        <SubSelection/>
    </section>
  )
}

const SubSelection = () => {
    return (
        <div className="flex rounded-xl bg-gradient-to-r overflow-hidden my-12 mx-auto w-fit shadow-customeFive max-md:flex-col">
            <div className="flex flex-col p-2 gap-4 w-[18rem] font-bold text-neutral-600 border-r-[1px] border-zinc-300 max-md:border-0 max-md:w-[100%]">
                <h3 className="text-[2.3rem] m-4 max">Select your Sub tier</h3>
                <button className="flex justify-between p-2 bg-green-500 text-white rounded-lg hover:from-zinc-300 hover:to-zinc-200">
                    <p>Buy sub</p>
                    <p>30 $</p>
                </button>
            </div>
            <div className="flex gap-2 p-2 max-sm:flex-col">
                 <ul className="bg-gradient-to-l from-zinc-200 to-zinc-100 shadow-customeTwo flex flex-col gap-2 p-2 rounded-lg bg-gren-500 cursor-pointer  outline-2 outline-green-500 outline-offset-2 hover:from-white hover:to-white">
                    <h3 className="font-bold text-lg">Tier 1</h3>
                    <li>1 month</li>
                    <li>10 free transport</li>
                    <li>5-10 % cash back</li>
                    <li>least 10 special offers</li>
                 </ul>
                 <ul className="bg-gradient-to-l from-zinc-200 to-zinc-100 shadow-customeTwo flex flex-col gap-2 p-2 rounded-lg bg-gren-500 cursor-pointer  outline-2 outline-green-500 outline-offset-2 hover:from-white hover:to-white">
                    <h3 className="font-bold text-lg">Tier 2</h3>
                    <li>2 months</li>
                    <li>15 free transport</li>
                    <li>10-15 % cash back</li>
                    <li>least 15 special offers</li>
                 </ul>
                 <ul className="bg-gradient-to-l from-zinc-200 to-zinc-100 shadow-customeTwo flex flex-col gap-2 p-2 rounded-lg bg-gren-500 cursor-pointer  outline-2 outline-green-500 outline-offset-2 hover:from-white hover:to-white">
                    <h3 className="font-bold text-lg">Tier 3</h3>
                    <li>3 months</li>
                    <li>20 free transport</li>
                    <li>15-20 % cash back</li>
                    <li>least 20 special offers</li>
                 </ul>
            </div>
        </div>
    )
}

const SubFeatures = () => {
    return (
        <div className="flex gap-2 text-lg font-bold text-neutral-700 flex-wrap w-3/4 max-sm:text-sm max-sm:w-full">
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <TruckIcon className="w-[2rem]"/>
                <p>limited free transports</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <MoonIcon className="w-[2rem]"/>
                <p>All time delivery</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <RocketLaunchIcon className="w-[2rem]"/>
                <p>Fast travel</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <GiftIcon className="w-[2rem]"/>
                <p>Free gifts</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <CurrencyDollarIcon className="w-[2rem]"/>
                <p>Cash back</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <ReceiptRefundIcon className="w-[2rem]"/>
                <p>More refund days</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <SparklesIcon className="w-[2rem]"/>
                <p>Special offers</p>
            </div>
            <div className="w-fit flex gap-2 p-2 px-4 items-center rounded-r-md border-l-4 border-green-500 bg-white">
                <TicketIcon className="w-[2rem]"/>
                <p>Special ticket service</p>
            </div>
        </div>
    )
}

const SubFeaturesInfo = () => {
    return (
        <ul className="flex flex-col rounded-lg overflow-hidden shadow-customeFour mt-12 max-sm:mt-0">
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <TruckIcon className="w-[2rem]"/>
                    <p>limited free transports</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">Free transportation based on any tier level you will register for</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <MoonIcon className="w-[2rem]"/>
                    <p>All time delivery</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">24 hours delivery time line based on you</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <RocketLaunchIcon className="w-[2rem]"/>
                    <p>Fast travel</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">Orders will receive under 2 days , Normal transport takes 5 at least</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <GiftIcon className="w-[2rem]"/>
                    <p>Free gifts</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">Free gifts based on any calendar events or special suprises</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <CurrencyDollarIcon className="w-[2rem]"/>
                    <p>Cash back</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">For some special products you buy , you will paid some money back</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <ReceiptRefundIcon className="w-[2rem]"/>
                    <p>More refund days</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">You have 30 days time to refund your orders (Normal users have a week) </p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <SparklesIcon className="w-[2rem]"/>
                    <p>Special offers</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">Some special product offers will be appeared every month</p>
            </li>
            <li className="bg-gradient-to-r from-zinc-100 flex gap-2 items-center max-lg:flex-col">
                <div className="flex items-center gap-2 p-2 w-[18rem] bg-gradient-to-r from-green-600 to-green-500 text-white font-bold max-lg:w-full">
                    <TicketIcon className="w-[2rem]"/>
                    <p>Special ticket service</p>
                </div>
                <p className="max-lg:w-full max-lg:p-2">Your tickets will be answerd as soon as possible</p>
            </li>
        </ul>
    )
}