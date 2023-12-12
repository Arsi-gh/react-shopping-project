import { ArrowRightOnRectangleIcon, BookOpenIcon, HomeIcon, InformationCircleIcon, ShoppingBagIcon, SparklesIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Background from "./Background";

export default function SideNav({toggleDisplay}) {
    return (
        <>
        <Background displayHandler={toggleDisplay}/>
        <section className="flex flex-col fixed left-0 top-0 bg-zinc-200 w-[13rem] h-screen z-30">
            <NavLink className="flex justify-between p-4 px-4 items-center border-b-[1px] border-zinc-300 bg-zinc-100">
                <h3 className="text-lg">Plant store</h3>
                <XMarkIcon onClick={() => toggleDisplay(false)} strokeWidth={2} className="w-[1.5rem] cursor-pointer"/>
            </NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/"  className="flex justify-between  p-4 px-6 hover:bg-stone-100">Home <HomeIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/products" className="flex justify-between  p-4 px-6 hover:bg-stone-100">Products <ShoppingBagIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/documents" className="flex justify-between  p-4 px-6 hover:bg-stone-100">Documents <BookOpenIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/subscription" className="flex justify-between  p-4 px-6 hover:bg-stone-100">Subscribtion <SparklesIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/aboutus" className="flex justify-between  p-4 px-6 hover:bg-stone-100">About us <InformationCircleIcon className="w-[1.5rem]"/></NavLink>
            <button className="flex justify-between p-4 px-6 absolute bottom-0 w-full hover:bg-stone-100">Log out <ArrowRightOnRectangleIcon className="w-[1.5rem]"/></button>
        </section>
        </>
    )
}
