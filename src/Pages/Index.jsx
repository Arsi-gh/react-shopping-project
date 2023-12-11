import { BriefcaseIcon, DocumentTextIcon, MagnifyingGlassCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Subscription from "../Components/MainPage/Subscription";
import WelcomeSection from "../Components/MainPage/WelcomeSection";
import DocumentShowcase from "../Components/MainPage/DocumentShowcase";
import Contact from "../Components/Form/Contact";
import JobInfo from "../Components/MainPage/jobinfo";
import Title from "../Components/Global Ui/Title";
import CategoryBoxes from "../Components/MainPage/categoryBoxes";
import ProductsShowcase from "../Components/MainPage/ProductsShowcase";
import EmailBox from "../Components/MainPage/EmailBox";

export default function Index() {
    
  return (
    <>
      <WelcomeSection/>
      <ProductsShowcase/>
      <Title text="What are you looking for ?">
        <MagnifyingGlassCircleIcon className="w-[2.5rem] h-[2.5rem] text-green-900 max-sm:w-[1.8rem]"/>
      </Title>
      <CategoryBoxes/>
      <Title text="Plant store subscription">
        <SparklesIcon className="w-[2.5rem] h-[2.5rem] text-green-900 max-sm:w-[1.8rem]"/> 
      </Title>
      <Subscription/>
      <Title text="How job get done in here">
        <BriefcaseIcon className="w-[2.5rem] h-[2.5rem] text-green-900 max-sm:w-[1.8rem]"/> 
      </Title>
      <JobInfo/>
      <Title text="Some of our documents" href="/documents">
        <DocumentTextIcon className="w-[2.5rem] h-[2.5rem] text-green-900 max-sm:w-[1.8rem]"/> 
      </Title>
      <DocumentShowcase/>
      <EmailBox/>
      <Contact/>
    </>
  )
}