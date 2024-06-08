import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

export default function EmailBox() {
  return (
    <section className="custom-container">
      <div className="custom-container p-4 mt-[3rem] pl-6 flex items-center justify-between bg-gradient-to-r from-green-600 to-green-400 rounded-lg shadow-xl text-white max-sm:flex-col  gap-4">
          <h3 className="font-bold text-lg max-sm:text-sm">Send us your email for our events and giveaways</h3>
          <div className="flex gap-2 max-sm:w-full">
              <input className="w-[16rem] p-2 rounded-md text-black max-sm:w-full" type="email" placeholder="Your email ..."/>
              <PaperAirplaneIcon className="bg-slate-50 text-neutral-600 rounded-md w-[3rem] p-2 cursor-pointer hover:bg-slate-200"/>
          </div>
      </div>
    </section>
  )
}
