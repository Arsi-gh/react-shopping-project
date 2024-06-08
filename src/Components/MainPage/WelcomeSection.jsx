import { ArrowRightCircleIcon, CurrencyDollarIcon, ReceiptRefundIcon, TruckIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function WelcomeSection () {
  return (
    <section className="custom-container flex justify-between  my-12 ">
        <div className="w-1/2 flex flex-col gap-6 font-semibold max-lg:w-full max-sm:items-center">
            <h2 className="text-[3rem] max-sm:text-xl max-xl:text-[2rem] max-sm:text-center font-bold text-neutral-800">Welcome to plant store</h2>
            <p className="text-[1.5rem] max-sm:text-base max-xl:text-xl max-sm:text-center text-neutral-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt iure illum voluptate  adipisicing elit  adipisicing elit</p>
            <div className="flex flex-wrap gap-2 text-neutral-600">
                <div className="text-lg p-2 px-4 flex items-center justify-between rounded-lg max-sm:w-full max-sm:flex-row-reverse max-sm:text-base">
                    <CurrencyDollarIcon className="w-8"/> 
                    <p className="ml-4">Best Prices ever</p>
                </div>
                <div className="text-lg p-2 px-4 flex items-center justify-between rounded-lg max-sm:w-full max-sm:flex-row-reverse max-sm:text-base">
                    <TruckIcon className="w-8"/> 
                    <p className="ml-4">fast transportation </p>
                </div>
                <div className="text-lg p-2 px-4 flex items-center justify-between rounded-lg max-sm:w-full max-sm:flex-row-reverse max-sm:text-base">
                    <ReceiptRefundIcon className="w-8"/>
                    <p className="ml-4">long refund time </p>
                </div>
                <div className="text-lg p-2 px-4 flex items-center justify-between rounded-lg max-sm:w-full max-sm:flex-row-reverse max-sm:text-base">
                    <UserGroupIcon className="w-8"/> 
                    <p className="ml-4">24 hours support </p>
                </div>
            </div>
            <NavLink to="/products" className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 p-4 w-fit rounded-xl text-slate-50 max-sm:text-base max-sm:p-2 max-sm:py-3 max-sm:rounded-lg shadow-xl max-sm:w-fit">Check out some products <ArrowRightCircleIcon className="w-[1.6rem]"/> </NavLink>
        </div>
        <div className="flex gap-2 justify-center items-center max-lg:hidden w-fit relative -z-10">
            <img className="shadow-customeTwo min-w-[15rem] h-[18rem] rounded-xl absolute top-0 right-40" src="/images/welcome-section-images/2.png" alt="" />
            <img className="shadow-customeTwo min-w-[15rem] h-[18rem] rounded-xl absolute top-4 right-8 z-10" src="/images/welcome-section-images/3.png" alt="" />
            <img className="shadow-customeTwo min-w-[15rem] h-[18rem] rounded-xl absolute bottom-0 right-24" src="/images/welcome-section-images/1.png" alt="" />
        </div>
    </section>
  )
}
