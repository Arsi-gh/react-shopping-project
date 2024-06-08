import { ArrowLongRightIcon, CpuChipIcon, CubeIcon, RocketLaunchIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function JobInfo() {
  return (
    <section className="custom-container flex flex-wrap items-center font-semibold justify-center mt-12 mb-32 mx-auto gap-6 max-xl:gap-4 max-md:flex-col">
        <div className="h-[5rem] rounded-md bg-gradient-to-tr from-neutral-200 to-zinc-100 shadow-customeOne flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white transition-all max-md:flex-1 hover:w-full max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <CpuChipIcon className="w-[3rem] p-2 bg-white rounded-md text-green-600"/>
            <p>Processing your request</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="h-[5rem] rounded-md bg-gradient-to-tr from-neutral-200 to-zinc-100 shadow-customeOne flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white transition-all max-md:flex-1 hover:w-full max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <CubeIcon className="w-[3rem] p-2 bg-white rounded-md text-green-600"/>
            <p>Getting packages ready</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="h-[5rem] rounded-md bg-gradient-to-tr from-neutral-200 to-zinc-100 shadow-customeOne flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white transition-all max-md:flex-1 hover:w-full max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <TruckIcon className="w-[3rem] p-2 bg-white rounded-md text-green-600"/>
            <p>Transporting by VIP services</p>
        </div>
            <ArrowLongRightIcon className="w-6 max-md:rotate-90 max-sm:w-5"/>
        <div className="h-[5rem] rounded-md bg-gradient-to-tr from-neutral-200 to-zinc-100 shadow-customeOne flex items-center gap-2 p-2 hover:from-green-600 hover:to-green-400 hover:text-white transition-all max-md:flex-1 hover:w-full max-md:w-[100%] max-md:text-sm max-md:font-semibold">
            <RocketLaunchIcon className="w-[3rem] p-2 bg-white rounded-md text-green-600"/>
            <p>Sending it as soon as possible to you</p>
        </div>
    </section>
  )
}
