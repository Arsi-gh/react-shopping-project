import { CreditCardIcon, MapIcon, ShoppingCartIcon } from "@heroicons/react/24/outline"

const progressBar = [
    {index : 0 ,text : 'Confirm basket' , icon : <ShoppingCartIcon className="w-[2.5rem] p-2 bg-green-500 text-white rounded-full max-sm:w-[2rem]"/>},
    {index : 1 ,text : 'Select location' , icon : <MapIcon className="w-[2.5rem] p-2 bg-green-500 text-white rounded-full max-sm:w-[2rem]"/>},
    {index : 2 ,text : 'Finish payment' , icon : <CreditCardIcon className="w-[2.5rem] p-2 bg-green-500 text-white rounded-full max-sm:w-[2rem]"/>},
]

export default function BasketProgress ({basketHandler , basketIndex}) {
    return (
        <header className="flex gap-2 items-center p-2 m-auto w-fit text-neutral-700 my-10 max-md:w-full max-md:justify-center">
            {progressBar.map((item) => {
                return (
                    <div className="flex items-center gap-2 max-md:text-sm max-md:font-thin" key={item.index}>
                        <div onClick={() => basketHandler(item.index)} className="p-1 bg-white rounded-full flex gap-2 items-center shadow-customeThree cursor-pointer">
                            {item.icon}
                            <p className={`font-semibold mr-2 ${basketIndex == item.index ? '' : 'hidden'}`}>{item.text}</p>
                        </div>
                        { item.index + 1 < progressBar.length && <span className="w-[10rem] h-[1px] bg-zinc-400 max-md:w-[6rem] max-sm:w-[2rem]"></span>}
                    </div>
                )
            })}
        </header>
    )
}