import { BeakerIcon, BookOpenIcon, BugAntIcon, BuildingOffice2Icon, GiftIcon, HeartIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function CategoryBoxes() {
  return (
    <section className="flex items-center gap-4 flex-wrap m-2 my-[4rem] mx-[6rem] justify-center  max-md:mx-[1rem]">
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/favorite.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <HeartIcon strokeWidth={1.5} className="w-[2rem]"/>
            <p className="text-3xl">Top favorites</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/apartment.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <BuildingOffice2Icon strokeWidth={1.5} className="w-[2rem]"/>
            <p className="text-3xl">For apartments</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/transport.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <RocketLaunchIcon strokeWidth={1.8} className="w-[2rem]"/>
            <p className="text-3xl">Fast transport</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/equipments.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <WrenchScrewdriverIcon className="w-[2rem]" />
            <p className="text-3xl">Eqipments</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/chemicals.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <BeakerIcon strokeWidth={1.8} className="w-[2rem]"/>
            <p className="text-3xl">Chemicals</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/bug.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <BugAntIcon strokeWidth={1.6} className="w-[2rem]"/>
            <p className="text-3xl">Bug destroyer</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/gift.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <GiftIcon strokeWidth={1.8} className="w-[2rem]"/>
            <p className="text-3xl">Gift advice</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
        <div className="group w-[18rem] h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all hover:scale-[105%] relative overflow-hidden max-lg:w-[45%] max-md:w-full">
          <img className="w-full h-full object-cover filter brightness-[65%] absolute" src="/images/category-images/book.png" alt="" />
          <h3 className="absolute text-white bottom-3 left-5 font-bold z-10 flex gap-2 items-center">
            <BookOpenIcon className="w-[2rem]"/>
            <p className="text-3xl">Plant books</p>
          </h3>
          <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
              <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
          </div>
        </div>
    </section>
  )
}
