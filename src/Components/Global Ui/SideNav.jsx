import { ArrowRightOnRectangleIcon, BookOpenIcon, HomeIcon, InformationCircleIcon, ShoppingBagIcon, SparklesIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Background from "./Background";

export default function SideNav({toggleDisplay}) {
    return (
        <>
        <Background displayHandler={toggleDisplay}/>
        <section className="w-64 flex flex-col fixed left-0 top-0 bg-zinc-100 h-screen z-30 rounded-r-3xl">
            <NavLink className="flex justify-between p-4 px-4 items-center border-b-[1px] border-zinc-300">
                <h3 className="text-lg">Plant store</h3>
                <XMarkIcon onClick={() => toggleDisplay(false)} strokeWidth={2} className="w-[1.5rem] cursor-pointer"/>
            </NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/"  className="flex justify-between  p-4">Home <HomeIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/products" className="flex justify-between  p-4">Products <ShoppingBagIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/documents" className="flex justify-between  p-4">Documents <BookOpenIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/subscription" className="flex justify-between  p-4">Subscribtion <SparklesIcon className="w-[1.5rem]"/></NavLink>
            <NavLink onClick={() => toggleDisplay(false)} to="/aboutus" className="flex justify-between  p-4">About us <InformationCircleIcon className="w-[1.5rem]"/></NavLink>
            <button className="flex justify-between p-4 absolute bottom-0 w-full">Log out <ArrowRightOnRectangleIcon className="w-[1.5rem]"/></button>
        </section>
        </>
    )
}
