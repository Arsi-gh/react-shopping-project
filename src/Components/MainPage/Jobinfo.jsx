import { ArrowLongRightIcon, CpuChipIcon, CubeIcon, RocketLaunchIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function JobInfo() {
  return (
    <section className="flex flex-wrap items-center justify-center m-[6rem] mb-[8rem] mx-auto gap-4 max-xl:gap-4 max-xl:mx-[5rem] max-md:flex-col max-sm:mx-[3rem]">
        <div className="font-bold h-[5rem] rounded-md bg-gradient-to-tr from-neutral-300 to-gray-200 flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white hover:scale-110 transition-all cursor-pointer max-xl:flex-1 max-xl:min-w-[25%] max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <CpuChipIcon className="w-[3rem] p-2 bg-white rounded-md text-green-800"/>
            <p>Processing your request</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="font-bold h-[5rem] rounded-md bg-gradient-to-tr from-neutral-300 to-gray-200 flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white hover:scale-110 transition-all cursor-pointer max-xl:flex-1 max-xl:min-w-[25%] max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <CubeIcon className="w-[3rem] p-2 bg-white rounded-md text-green-800"/>
            <p>Getting packages ready</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="font-bold h-[5rem] rounded-md bg-gradient-to-tr from-neutral-300 to-gray-200 flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white hover:scale-110 transition-all cursor-pointer max-xl:flex-1 max-xl:min-w-[25%] max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <TruckIcon className="w-[3rem] p-2 bg-white rounded-md text-green-800"/>
            <p>Transporting by VIP services</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="font-bold h-[5rem] rounded-md bg-gradient-to-tr from-neutral-300 to-gray-200 flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white hover:scale-110 transition-all cursor-pointer max-xl:flex-1 max-xl:min-w-[25%] max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <RocketLaunchIcon className="w-[3rem] p-2 bg-white rounded-md text-green-800"/>
            <p>Sending it as soon as possible to you</p>
        </div>
    </section>
  )
}
