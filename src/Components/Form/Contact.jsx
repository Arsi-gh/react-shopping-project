import { EnvelopeIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

export default function Contact() {
    return (
        <div className="flex flex-wrap w-[55rem] h-fit mt-[5rem] mx-auto rounded-md overflow-hidden shadow-customeFour max-lg:max-w-[30rem] max-sm:w-[20rem]">
          <div className="relative max-lg:w-full">
            <img className="w-full h-full absolute object-cover" src="/images/contact-us/bg.png" alt="" />
            <h3 className="p-3 z-20 bg-white opacity-95 w-full h-fit border-l-4 border-green-500">
              <b className="flex gap-2"><EnvelopeIcon className="w-[1.5rem]"/> Contact us</b>
              <p className="flex gap-2 mt-2"><InformationCircleIcon className="w-[1.5rem]"/> We will send you an email as soon as possible</p>
            </h3>
            <form className="w-[35rem] h-full bg-slate-300 flex flex-col gap-2 p-4 max-lg:w-full">
              <input className="p-2 z-10 placeholder:text-neutral-700 px-4 border-l-4 rounded-sm outline-none bg-white bg-opacity-75 border-green-500 max-lg:w-full transition-all focus:bg-opacity-95" type="email" placeholder="Enter your email"/>
              <select className="p-2 outline-none opacity-90 border-l-4 border-green-500 bg-zinc-200 z-10 max-lg:w-full">
                <option value="select">Select category</option>
                <option value="error">Found an error</option>
                <option value="problem">Have problem with something</option>
                <option value="request">Any request you have</option>
              </select>
              <input className="p-2 placeholder:text-neutral-700 px-4 border-l-4 rounded-sm  z-10 bg-white bg-opacity-75 outline-none border-green-500 max-lg:w-full transition-all focus:bg-opacity-95" type="text" placeholder="Write subject"/>
              <textarea placeholder="Description" className="z-10 bg-white bg-opacity-75 placeholder:text-neutral-700 w-full h-[15rem] p-2 outline-none border-l-4 rounded-sm  border-green-500 transition-all focus:bg-opacity-95"></textarea>
              <button className="z-10 p-2 px-4 w-full gradient font-semibold rounded-lg">submit</button>
            </form>
          </div>
          <img src="/images/contact-us/plant.png" className="w-80 z-10 border-l-4 border-green-500 max-lg:hidden"/>
        </div>
      )
}
