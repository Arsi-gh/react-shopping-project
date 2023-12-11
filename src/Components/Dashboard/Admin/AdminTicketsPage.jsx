import { useState } from "react";
import { EllipsisHorizontalCircleIcon, TicketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SeperatorX } from "../../Global Ui/Seperator";

export default function AdminTicketsPage() {

  const [displayAnswerForm , setDisplayAnswerForm] = useState(false)

  return (
    <div className="p-2 flex flex-col gap-2 h-full">
                <TicketItem toggleDisplay={setDisplayAnswerForm}/>
                <TicketItem toggleDisplay={setDisplayAnswerForm}/>
                <TicketItem toggleDisplay={setDisplayAnswerForm}/>
        {displayAnswerForm && <TicketAnswerForm toggleDisplay={setDisplayAnswerForm}/>}
    </div>
  )
}

function TicketItem ({toggleDisplay})  {
    return (
        <div className="w-full flex items-center p-2 gap-4  bg-zinc-50 rounded-lg  shadow-customeTwo ">
          <p className="text-center truncate w-[10rem]">Arsalan ghoochani</p>
          <SeperatorX/>
          <p className="text-center truncate w-[10rem]"><b>Category : </b>Problem</p>
          <SeperatorX/>
          <p className="text-center truncate w-[15rem"><b>Autherization : </b>user</p>
          <SeperatorX/>
          <p className="text-center truncate w-[13rem]"><b>Date : </b>13 - Apr - 2023</p>
          <SeperatorX/>
          <p className=" truncate flex-1 min-w-[13rem]"><b>Subject : </b>Problem with signing up</p>
          <button onClick={() => toggleDisplay(true)} className="flex gap-2 p-[6px] px-2 bg-green-500 font-semibold text-white rounded-lg hover:bg-green-600">See more<EllipsisHorizontalCircleIcon className="w-[1.6rem]"/></button>
        </div> 
    )       
}

function TicketCategoryFilter() {
    return (
      <>
      <div className="w-[15rem] h-fit overflow-hidden ">
        <h3  className="font-bold w-full flex justify-between items-center p-2">
          <p>Filter by category</p>
        </h3>
        <ul className="flex flex-col bg-gray-50">
          <li className="flex gap-2  items-center p-2 px-4">
            <input type="checkbox" />
            <p>Errors</p>
          </li>
          <li className="flex gap-2  items-center p-2 px-4">
            <input type="checkbox" />
            <p>User problem</p>
          </li>
          <li className="flex gap-2  items-center p-2 px-4">
            <input type="checkbox" />
            <p>Requests</p>
          </li>
        </ul>
      </div>
      </>
    );
}

const TicketAnswerForm = ({toggleDisplay}) => {
    return (
      <>
        <div onClick={() => toggleDisplay(false)} className="w-screen h-screen fixed top-0 left-0 bg-black opacity-30 z-30"></div>
        <div className="z-30 bg-white p-4 gap-2 w-[50rem] h-[40rem] rounded-lg fixed inset-0 m-auto flex flex-col">
          <div className="flex p-1 justify-between">
            <p className="text-xl flex gap-2"> <TicketIcon className="w-[1.6rem]"/> Ticket</p>
            <XMarkIcon onClick={() => toggleDisplay(false)} className="w-[1.8rem] cursor-pointer"/>
          </div>
          <SeperatorY/>
          <div className="flex gap-3 justify-between">
            <div className="w-fit">
              <p className="mb-1"><b>Name : </b>Arsalan ghoochani</p>
              <p className="my-1"><b>Category : </b>Problem</p>
              <p className="my-1"><b>Authrization : </b>USER</p>
              <p className="my-1"><b>Created at : </b>13 - april - 2023</p>
              <p className="my-1"><b>Subject : </b>Problem with sign in up</p>
              <p className="my-1"><b>Phone number : </b>09136955525</p>
              <p className="my-1"><b>Email : </b> arsalanghoochani15@gmail.com</p>
            </div>
            <p className="flex-1 p-2 bg-zinc-50 rounded-xl shadow-customeOne overflow-scroll h-[12rem]"><b>Description : </b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore id repudiandae eligendi, aspernatur, laboriosam labore numquam eum exercitationem dolores aliquid magni vitae quidem harum itaque. Atque nisi nesciunt blanditiis consectetur! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam earum, cupiditate temporibus ex praesentium minima sed tempore vitae deleniti aliquid molestias repellendus consequatur! In quo blanditiis eos? Accusamus, voluptate quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ex iusto nobis, dolore itaque provident adipisci voluptatibus deleniti! Dolores, inventore! Ipsum laborum doloremque iure dolor minima fugiat nemo ipsa nulla!</p>
          </div>
          <div className="flex flex-col min-w-[20rem] flex-1 rounded-lg overflow-hidden shadow-customeThree h-fit">
              <textarea placeholder="Write your answer ..." className="p-2 px-4 bg-slate-100 border-gray-400 h-[20rem] rounded-t-lg"></textarea>
              <button className="p-2 bg-green-500 text-white font-bold placeholder:text-neutral-800">Submit answer</button>
          </div>
        </div>
      </>
    )
}