import { ArrowUpTrayIcon, InformationCircleIcon, MinusIcon, PencilIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Background from "../Global Ui/Background";

export default function EditProduct({toggleDisplay}) {
    return (
        <>
            <Background/>
            <div className="flex flex-col bg-white rounded-lg fixed transform -translate-x-[50%] left-[50%] top-[10%]">
              <div className="w-full gap-2 flex justify-between p-3 ">
                <b className="flex gap-2 items-center">Edit product<PencilIcon className="w-[1.2rem]"/></b>
                <XMarkIcon onClick={() =>toggleDisplay(false)} className="w-[1.5rem] cursor-pointer"/>
              </div>
              <span className="w-full h-[1px] bg-zinc-200"></span>
              <div className="flex p-4  max-h-[35rem] w-[41rem] flex-col flex-wrap gap-3">
                <input placeholder="Name :" type="text" className="w-[20rem] p-2 px-4 shadow-customeTwo bg-zinc-50 rounded-lg"/>
                <div className="flex gap-x-4 items-center w-[20rem] justify-between">
                  <label htmlFor="">Price : </label>
                  <input type="number" className="p-2 px-4 w-[12rem] bg-zinc-50 rounded-lg shadow-customeTwo"/>
                </div>
                <div className="flex gap-x-4 items-center w-[20rem] justify-between">
                  <label htmlFor="">Amount : </label>
                  <input type="number" className="p-2 px-4 w-[12rem] bg-zinc-50 rounded-lg shadow-customeTwo"/>
                </div>
                <div className="flex gap-x-4 items-center w-[20rem] justify-between">
                  <label htmlFor="">Category :</label>
                  <select type="number" className="p-2 px-4 w-[13rem] bg-zinc-50 rounded-lg shadow-customeTwo">
                    <option value="select">Select category</option>
                    <option value="spanish">spanish</option>
                    <option value="italian">italian</option>
                    <option value="french">french</option>
                  </select>
                </div>
                <div className="flex gap-x-4 items-center w-[20rem] justify-between">
                  <label htmlFor="">Advice :</label>
                  <select type="number" className="p-2 px-4 w-[13rem] bg-zinc-50 rounded-lg shadow-customeTwo">
                    <option value="select">Product sutes for : </option>
                    <option value="apartment">apartment</option>
                    <option value="farm-fields">farming fields</option>
                  </select>
                </div>
                <EditProdSizePart/>
                <EditProdOffCodePart/>
                <EditProdImagePart/>
                <textarea placeholder="desc..." className="w-[18rem] h-[14rem] p-2 px-4  bg-zinc-50 shadow-customeTwo rounded-lg"></textarea>
              </div>
              <button className="m-2 bg-green-500 text-white rounded-lg font-bold p-2 px-4 hover:bg-green-600">Submit changes</button>
            </div>  
          
        </>
    )
}

const EditProdSizePart = () => {
    return (
      <div className="bg-zinc-50 w-[20rem] shadow-customeTwo p-2 flex flex-wrap gap-2 gap-x-12 rounded-lg relative">
        <div className="flex gap-2 items-center justify-between gap-x-2">
          <label className="" htmlFor="">Width : </label>
          <input type="text" className="p-2 rounded-lg shadow-customeTwo bg-zinc-100 w-[4rem]"/>
        </div>
        <div className="flex gap-2 items-center justify-between gap-x-2">
          <label className="" htmlFor="">Height : </label>
          <input type="text" className="p-2 rounded-lg shadow-customeTwo bg-zinc-100 w-[4rem]"/>
        </div>
        <p className="w-full flex gap-2 text-green-600 "><InformationCircleIcon className="w-[1.5rem]"/> Sizes are in cm</p>
      </div>
    )
  }
  
const EditProdOffCodePart = () => {
  
    const [displayEdit , setDisplayEdit] = useState(false)
  
    return (
      <div className="py-2 w-[20rem] h-fit shadow-customeTwo rounded-md bg-zinc-50">
        {
          !displayEdit ? (
            <div className="flex gap-2 justify-between px-2">
              <p>Off code : <b>20%</b></p>
              <button onClick={() => setDisplayEdit(true)} className="text-green-600 font-bold">Change ?</button>
            </div>
          ) : (
            <div className="flex gap-2 justify-between items-center  px-2">
              <div className="flex gap-2 items-center">
                <MinusIcon strokeWidth={2}  className="w-[1.8rem] shadow-customeTwo p-1 bg-zinc-200 rounded-md cursor-pointer"/>
                <b className="text-xl">20%</b>
                <PlusIcon strokeWidth={2} className="w-[1.8rem] shadow-customeTwo p-1 bg-zinc-200 rounded-md cursor-pointer"/>
              </div>
              <div className="flex gap-1">
                <button onClick={() => setDisplayEdit(false)} className="text-red-500 border-2 border-red-400  p-1 rounded-md">Cancel</button>
                <button className="bg-green-500 text-white  py-1 px-3 rounded-md hover:bg-green-600">Submit</button>
              </div>
            </div>
          )
        }
      </div>
    )
  }
  
  const EditProdImagePart = () => {
    return (
      <>
        <label className="flex justify-between gap-2 items-center p-2 cursor-pointer bg-zinc-50 rounded-md shadow-customeTwo" htmlFor="new-image-input">
          <p>Upload new image</p>
          <ArrowUpTrayIcon className="w-[1.5rem]"/>
        </label>
        <input className="hidden" id="new-image-input" type="file" />
        <div className="w-[18rem] bg-zinc-50 h-[13rem] rounded-lg shadow-customeTwo overflow-hidden flex justify-center items-center">
          {/* <img className=" w-full h-full " src="" alt="" /> */}
          
        </div>
      </>
    )
  }
