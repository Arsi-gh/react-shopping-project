import { StarIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon , ChatBubbleBottomCenterTextIcon  } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";
import { SeperatorX, SeperatorY } from "../Components/Global Ui/Seperator";
import ReactComments from "../Components/Global Ui/react-comments";
import Comment from "../Components/Form/Comment";
import { Question } from "../Components/Form/Question";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

export default function Product() {
  
  const {id} = useParams()

  const getProduct = async () => {
    const {data} = await axios.get(`http://localhost:5000/products/${id}`)
    return data
  }

  const [commentDisplay , setCommnetDisplay] = useState(false)
  const [questionDisplay , setQuestionDisplay] = useState(false)

  const about = useRef()
  const comments = useRef()
  const questions = useRef()

  const {isPending , error , data } = useQuery("Product" , getProduct)

  return (
    <>
      <main className="mx-2 flex items-start gap-2 relative max-md:flex-col ">
        <ProdStick refs={{comments , questions , about}} {...data}/>
        <section ref={about} className="m-2 px-4 bg-white w-[68rem] h-full relative left-0 rounded-xl flex flex-col gap-2 p-2 max-md:w-full max-md:mx-auto">
          <MainProdInfo {...data}/>
          <SeperatorY/>
          <ProdAbout {...data}/>
          <SeperatorY/>
          <div className="flex flex-col gap-4">
            <div ref={comments} className="flex justify-between items-center mb-4 gap-4">
              <h2 className="text-2xl font-bold max-sm:text-base">Comments</h2>
              <button onClick={() => setCommnetDisplay(true)} className="border-2 text-green-500 border-green-400 font-bold rounded-xl p-2 px-3 w-fit flex gap-2 items-center max-sm:text-sm"><ChatBubbleBottomCenterTextIcon className="w-[1.5rem]"/> Add comment</button>
            </div>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
          </div>
          <SeperatorY/>
          <div className="max-md:w-full max-md:px-2">
            <div ref={questions} className="flex justify-between items-center mb-10 gap-4">
              <h2 className="text-2xl font-bold max-sm:text-base">Questions</h2>
              <button onClick={() => setQuestionDisplay(true)} className="border-2 text-green-500 border-green-400 font-bold rounded-xl p-2 px-3 w-fit flex gap-2 items-center max-sm:text-sm"><QuestionMarkCircleIcon className="w-[1.5rem]"/>Ask question</button>
            </div>
            <ReactComments/>
            <ReactComments/>
          </div>
        </section>
        {commentDisplay && <Comment displayHandler={setCommnetDisplay}/>}
        {questionDisplay && <Question displayHandler={setQuestionDisplay}/>}
      </main>
    </>
  );
}


const ProdStick = ({refs , price , img , off}) => {
    return (
      <div className="p-2 sticky md:top-[5rem] max-md:relative max-md:w-full max-sm:text-sm">
          <img className="w-[18rem] h-[20rem] shadow-customeThree bg-white rounded-xl" src={img} alt="" />
          <div className="p-1 py-2 rounded-xl bg-white mt-2 shadow-lg max-md:flex max-md:w-full justify-between max-md:items-center max-sm:flex-col">
            <ul className="flex font-semibold  gap-2 p-1 justify-around max-lg:flex-col max-lg:items-center max-sm:w-full max-md:flex-row max-md:gap-x-6 max-md:px-4">
              <li onClick={() => refs.about.current.scrollIntoView()} className="cursor-pointer">About</li>
              <li onClick={() => refs.questions.current.scrollIntoView()} className="cursor-pointer">Questions</li>
              <li onClick={() => refs.comments.current.scrollIntoView()} className="cursor-pointer">Comments</li>
            </ul>
            <hr className="my-2"/>
            <div className="p-2 flex items-center gap-2 justify-between max-lg:flex-col max-md:w-full max-md:px-8 max-md:flex-row max-md:border-0 max-md:m-0">
              <p><b>Price : </b> {price - (price * off / 100)} $</p>
              <button className="p-3 font-semibold gradient rounded-xl">Add to basket</button>
            </div>
        </div>
      </div>
    )
}

const MainProdInfo = ({name , category , price , size , sutes}) => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <h2 className="text-xl">
              <b>Name : </b> {name}
            </h2>
            <p className="text-md">
              <b>Category : </b> {category}
            </p>
            <p className="text-md">
              <b>Size : </b> {size}
            </p>
            <p className="text-md">
              <b>Sutes for : </b> {sutes}
            </p>
        </div>
    )
}

const ProdAbout = ({name , desc}) => {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2">About {name} :</h3>
            <p>{desc}</p>
        </div>
    )
}

const CommentItem = () => {
    return (
        <div className="w-full bg-slate-50 shadow-customeTwo rounded-lg flex flex-col gap-2 p-2">
            <div className="flex gap-2 gap-x-4 flex-wrap max-sm:justify-between">
                <ChatBubbleBottomCenterTextIcon className="w-[1.5rem]"/>
                <SeperatorX/>
                <h3><b>Arsalan ghoochani </b></h3>
                <SeperatorX/>
                <p>23 . January . 2023</p>
                <SeperatorX/>
                <span className="flex gap-2">
                    <p>4.3 / 5</p>
                    <StarIcon className="w-[1.3rem] text-yellow-400"/>
                </span>
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam odio cumque distinctio labore accusamus voluptas totam voluptatem temporibus tempora repudiandae exercitationem unde, ducimus qui doloribus, maiores laboriosam quam laborum. Doloremque.</p>
        </div>
    )
}