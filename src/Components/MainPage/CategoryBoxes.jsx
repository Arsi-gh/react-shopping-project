import { BeakerIcon, BookOpenIcon, BugAntIcon, BuildingOffice2Icon, GiftIcon, HeartIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

const categoryDatas = [
  {id : 1 , title : 'Top favorites' , img : '/images/category-images/favorite.png' , icon : <HeartIcon className="w-[2rem]"/> },
  {id : 2 , title : 'For apartments' , img : '/images/category-images/apartment.png' , icon : <BuildingOffice2Icon className="w-[2rem]"/> },
  {id : 3 , title : 'Fast transport' , img : '/images/category-images/transport.png' , icon : <RocketLaunchIcon className="w-[2rem]"/> },
  {id : 4 , title : 'Eqipments' , img : '/images/category-images/equipments.png' , icon : <WrenchScrewdriverIcon className="w-[2rem]" /> },
  {id : 5 , title : 'Chemicals' , img : '/images/category-images/chemicals.png' , icon : <BeakerIcon className="w-[2rem]"/> },
  {id : 6 , title : 'Bug destroyer' , img : '/images/category-images/bug.png' , icon : <BugAntIcon className="w-[2rem]"/> },
  {id : 7 , title : 'Gift advice' , img : '/images/category-images/gift.png' , icon : <GiftIcon className="w-[2rem]"/> },
  {id : 8 , title : 'Plant books' , img : '/images/category-images/book.png' , icon : <BookOpenIcon className="w-[2rem]"/> },
]

export default function CategoryBoxes() {
  return (
    <section className="custom-container grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-4 my-16">
      {categoryDatas.map(data => <Category key={data.id} {...data}/>)}
    </section>
  )
}

const Category = ({img , title , icon}) => {
  return (
    <div className="group h-[7rem] rounded-md cursor-pointer bg-zinc-100 transition-all sm:hover:scale-[105%] relative overflow-hidden">
      <img className="w-full h-full object-cover filter brightness-[65%] absolute" src={img} alt="title" />
      <h3 className="absolute text-white bottom-3 left-5 font-semibold z-10 flex gap-2 items-center">
        {icon}
        <p className="text-3xl max-sm:text-2xl">{title}</p>
      </h3>
      <div className="w-0 h-full bg-gradient-to-br opacity-70 from-green-600 to-green-500 absolute top-0 group-hover:w-full">
          <div className="absolute w-full h-full bg-zinc-800 rounded-bl-full rounded-tr-full"></div>
      </div>
    </div>
  )
}