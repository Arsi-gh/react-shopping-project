import { StarIcon } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon , ChatBubbleBottomCenterTextIcon  } from "@heroicons/react/24/outline";
import { useState } from "react";
import { SeperatorX, SeperatorY } from "../Components/Global Ui/Seperator";
import ReactComments from "../Components/Global Ui/react-comments";
import Comment from "../Components/Form/Comment";
import { Question } from "../Components/Form/Question";

export default function Product() {

  const [commentDisplay , setCommnetDisplay] = useState(false)
  const [questionDisplay , setQuestionDisplay] = useState(false)

  return (
    <>
      <main className="mx-2 flex items-start gap-2 relative max-md:flex-col ">
        <ProdStick/>
        <section className="m-2 px-4 bg-white w-[68rem] h-full relative left-0 rounded-xl flex flex-col gap-2 p-2 max-md:w-full max-md:mx-auto">
          <MainProdInfo/>
          <SeperatorY/>
          <ProdAbout/>
          <SeperatorY/>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-4 max-sm:flex-col gap-4 max-sm:items-start">
              <h2 className="text-2xl font-bold">Comments</h2>
              <button onClick={() => setCommnetDisplay(true)} className="border-2 text-green-500 border-green-400 font-bold rounded-xl p-2 px-3 w-fit flex gap-2"><ChatBubbleBottomCenterTextIcon className="w-[1.5rem]"/> Add comment</button>
            </div>
            <CommentItem/>
            <CommentItem/>
            <CommentItem/>
          </div>
          <SeperatorY/>
          <div className="max-md:w-full max-md:px-2">
            <div className="flex justify-between items-center mb-10 max-sm:flex-col gap-4 max-sm:items-start">
              <h2 className="text-2xl font-bold">Questions</h2>
              <button onClick={() => setQuestionDisplay(true)} className="border-2 text-green-500 border-green-400 font-bold rounded-xl p-2 px-3 w-fit flex gap-2"><QuestionMarkCircleIcon className="w-[1.5rem]"/>Ask question</button>
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


const ProdStick = () => {
    return (
        <div className="p-2 sticky top-[5rem] max-md:relative max-md:w-full">
          <img className="w-[18rem] h-[20rem] shadow-customeThree bg-white rounded-xl" src="/images/welcome-section-images/2.png" alt="" />
          <ProdControls/>
        </div>
    )
}

const ProdControls = () => {
    return (
        <div className="p-1 py-2 rounded-xl bg-white mt-2 shadow-customeFour max-md:flex max-md:w-full justify-between max-md:items-center max-sm:flex-col">
            <ul className="flex  gap-2 p-1 justify-around max-lg:flex-col max-lg:items-center max-sm:w-full max-md:flex-row max-md:gap-x-6 max-md:px-4">
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Questions</li>
              <li className="cursor-pointer">Comments</li>
            </ul>
            <div className="p-2 mt-2 flex items-center gap-2 justify-between border-t-[1px] border-zinc-200 max-lg:flex-col max-md:w-full max-md:px-8 max-md:flex-row max-md:border-0 max-md:m-0">
              <p>
                <b>Price : </b> 314$
              </p>
              <button className="p-2 px-4 bg-green-500 text-white font-bold rounded-lg">
                Add to basket
              </button>
            </div>
        </div>
    )
}

const MainProdInfo = () => {
    return (
        <div className="flex flex-col gap-2 py-2">
            <h2 className="text-xl">
              <b>Name : </b> Flora plant
            </h2>
            <p className="text-md">
              <b>Category : </b> Spanish plant{" "}
            </p>
            <p className="text-md">
              <b>Size : </b> 20 * 45{" "}
            </p>
            <p className="text-md">
              <b>Sutes for : </b> Apartments{" "}
            </p>
        </div>
    )
}

const ProdAbout = () => {
    return (
        <div>
            <h3 className="font-bold text-2xl my-2">About Flora :</h3>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nisi blanditiis itaque libero odit nam reprehenderit reiciendis cum pariatur distinctio animi temporibus magnam accusamus amet placeat ab est harum quia. Illo exercitationem ipsum, pariatur nobis repellendus ea similique consequuntur minima illum iusto asperiores dolorum voluptatem sed commodi, modi odio sequi doloremque nostrum dolore earum maiores ducimus molestiae. Minima, sequi quis. Delectus maiores laborum dicta ullam fugit nulla quasi? Veniam nobis et voluptates dolore cupiditate amet, labore hic tempore maxime sapiente laboriosam odit nam impedit earum aperiam, maiores blanditiis eius. Voluptates! Perspiciatis voluptas explicabo, quaerat necessitatibus unde quae non distinctio culpa fuga quos nulla iste earum, quisquam corrupti inventore corporis error? Animi incidunt sed facere, suscipit officia autem ullam quaerat cum!</p>
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