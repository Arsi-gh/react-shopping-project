import { BookOpenIcon } from "@heroicons/react/24/solid"

export default function About() {
  return (
      <section className="flex flex-col gap-2 gap-y-4 p-2 w-[60rem] mx-auto max-md:w-full max-lg:w-full">
        <h1 className="text-3xl font-bold pl-4 p-2 border-l-2 border-green-500 flex gap-2"><BookOpenIcon className="w-[2.5rem] text-green-600"/> What is the story about ?</h1>
        <AboutFirstSec/>
        <AboutSecondSec/>
        <AboutSmallPart image="/images/about-us-images/plant-2.png"/>
        <AboutSmallPart image="/images/about-us-images/plant-3.png"/>
        <AboutSmallPart image="/images/about-us-images/plant-4.png"/>
        <p className="font-bold pl-4 p-2 border-l-2 border-green-500">To be continued ...</p>
      </section>
  )
}

const AboutFirstSec = () => {
  return (
    <div className="flex w-full items-center gap-4 p-2 pl-4 border-l-2 border-green-500 relative max-md:flex-col">
      <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
        <h3 className="font-bold text-xl">Lorem morem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio quas tenetur, blanditiis maxime sed esse eligendi aperiam possimus dolorem nostrum facilis aliquid eveniet aut deleniti temporibus est ex consectetur!
        Quos odit eveniet porro deserunt omnis voluptatibus illo, cum sapiente, suscipit rem aliquid ut laudantium soluta ratione quia esse autem impedit at id, quaerat eaque aspernatur? Eos quasi distinctio illo.
        Doloribus nemo accusaadipisci a nam nemo quae magni? Maiores quam nesciunt voluptatibus culpa, voluptates voluptatem eveniet ex ad amet vel. Ea, porro!</p>
      </div>
      <div className="flex flex-wrap w-1/2 gap-2 max-md:w-full">
        <img className="shadow-customeFour rounded-lg h-[10rem] w-full" src="/images/about-us-images/leafs.png" alt="" />
        <img className="shadow-customeFour rounded-lg h-[10rem] w-[49%] max-sm:w-full" src="/images/about-us-images/company-logo.png" alt="" />
        <img className="shadow-customeFour rounded-lg h-[10rem] w-[49%] max-sm:w-full" src="/images/about-us-images/categories.png" alt="" />
      </div>
    </div>
  )
}

const AboutSecondSec = () => {
  return (
    <div className="flex  items-center w-full gap-4 p-2 pl-4 border-l-2 border-green-500 max-md:flex-col">
      <img src="/images/about-us-images/shop-man.png" alt="" className="shadow-customeFour rounded-lg w-1/2 max-md:w-full"></img>
      <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
        <h3 className="text-xl font-bold">Lorem morem</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odio quas tenetur, blanditiis maxime sed esse eligendi aperiam possimus dolorem nostrum facilis aliquid eveniet aut deleniti temporibus est ex consectetur!
        Quos odit eveniet porro deserunt omnis voluptatibus illo, cum sapiente, suscipit rem aliquid ut laudantium soluta ratione quia esse autem impedit at id, quaerat eaque aspernatur? Eos quasi distinctio illo.
        Doloribus nemo accusaadipisci a nam nemo quae magni? Maiores quam nesciunt voluptatibus culpa, voluptates voluptatem eveniet ex ad amet vel. Ea, porro!</p>
      </div>
    </div>
  )
}

const AboutSmallPart = ({image}) => {
  return (
    <div className="flex bg-gradient-to-r from-white  gap-2 gap-x-4 items-center pl-4 p-2 border-l-2 border-green-500 max-md:flex-col max-lg:w-full">
      <img className="shadow-customeFour rounded-lg w-[4rem] h-[4rem]" src={image} alt="" />
      <p className="w-[100%]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, quo! Doloremque maiores ipsam beatae magni, earum fugiat debitis unde deserunt, quasi iusto similique quia repellendus. Dignissimos aspernatur tenetur deserunt rem?</p>
    </div>
  )
}