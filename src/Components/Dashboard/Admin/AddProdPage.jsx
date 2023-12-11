import { ArrowUpTrayIcon, CubeIcon, GlobeAsiaAustraliaIcon, InformationCircleIcon, PhotoIcon, PlusCircleIcon, ShoppingBagIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

function AddProdPage() {
  return (
    <div className="m-2 p-2 flex flex-wrap gap-6 rounded-lg h-[40rem] content-start relative">
        <div className="flex gap-3 bg-gradient-to-b from-gray-100 to-white rounded-sm w-full p-2">
            <ProdCategory/>
            <RecommandCategory/>
            <CountrySelection/>
            <ProdSizes/>
        </div>
        <ProdMainInfo/>
        <textarea className="w-[24rem] h-[20rem] mt-2 p-2 rounded-lg bg-zinc-100 shadow-customeTwo" placeholder="Description"></textarea>
        <ProdImage/>
        <button className="flex gap-2 items-center justify-center w-[20rem] p-3 rounded-lg bg-green-500 text-white font-bold"><ShoppingBagIcon strokeWidth={2} className="w-[1.5rem]"/> Add Product</button>
    </div>
  )
}

const ProdMainInfo = () => {
    return (
        <div className="bg-wite flex flex-col gap-3 w-fit p-3 bg-zinc-100 shadow-customeFour rounded-lg border-[1px] border-neutral-300 relative mt-4 pt-8 pb-4 h-fit">
            <div className="flex gap-2 absolute bg-inherit p-1 px-2 border-[1px] border-neutral-300 w-fit rounded-lg -top-4 shadow-customeFour">
                <InformationCircleIcon className="w-[1.5rem]"/>
                <p>Main infos</p>
            </div>
            <div className="w-[20rem] flex justify-between items-center">
                <label className="px-2" htmlFor="plant-name">Name *</label>
                <input className="p-2 px-4 rounded-lg bg-white shadow-customeTwo" type="text" placeholder="Example : Flora "/>
            </div>
            <div className="w-[20rem] flex justify-between items-center">
                <label className="px-2" htmlFor="plant-price">Price *</label>
                <input className="p-2 px-4 rounded-lg bg-white shadow-customeTwo" type="number" placeholder="Example : 23 $" />
            </div>
            <div className="w-[20rem] flex justify-between items-center">
                <label className="px-2" htmlFor="plant-amount">Amount *</label>
                <input className="p-2 px-4 rounded-lg bg-white shadow-customeTwo" type="number" placeholder="Example : 20" />
            </div>
            <div className="w-[20rem] flex justify-between items-center">
                <label className="px-2" htmlFor="plant-amount">Vase type</label>
                <input className="p-2 px-4 rounded-lg bg-white shadow-customeTwo" type="number" placeholder="Example : Glass " />
            </div>
            <div className="w-[20rem] flex justify-between items-center">
                <label className="px-2" htmlFor="plant-amount">Amount *</label>
                <input className="p-2 px-4 rounded-lg bg-white shadow-customeTwo" type="number" placeholder="Example : 20" />
            </div>
        </div>
    )
}

const ProdCategory = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="flex flex-1 flex-col gap-3 p-3 bg-zinc-100 shadow-customeFour rounded-lg border-[1px] border-neutral-300 relative mt-4 pt-8 pb-3 h-fit">
            <div className="flex gap-2 absolute bg-inherit p-1 px-2 border-[1px] border-neutral-300 w-fit rounded-lg -top-4 shadow-customeFour">
                <InformationCircleIcon className="w-[1.5rem]"/>
                <p>Category</p>
            </div>
            {!isOpen && (
                <>
                    <select className="w-full p-2 rounded-lg bg-white shadow-customeTwo">
                        <option value="select">Select category</option>
                        <option value="arabian">Arabian</option>
                        <option value="spanish">Spanish</option>
                    </select>
                    <button onClick={(e) => setIsOpen(true)} className="w-full p-1 text-left text-green-600 font-bold">Add new category ?</button>
                </>
            )}
            <div className={`w-full p-2 shadow-customeOne rounded-lg bg-white flex justify-between flex-wrap gap-2 ${!isOpen && 'hidden'}`}>
                <h4 className="font-bold flex gap-2">
                    <PlusCircleIcon className="w-[1.5rem]"/>
                    <p>Add category</p>
                </h4>
                <XMarkIcon onClick={() => setIsOpen(false)} className="w-[1.5rem] cursor-pointer"/>
                <span className="w-full h-[1px] bg-zinc-200 mb-2"></span>
                <div className="flex gap-2">
                    <input className="p-2 px-4 rounded-lg bg-zinc-100 shadow-customeTwo" type="text" />
                    <button className="bg-green-500 p-2 rounded-lg px-4 text-white font-bold">Add</button>
                </div>
            </div>
        </div>
    )
}

const RecommandCategory = () => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="bg-wite flex flex-col gap-3 flex-1 p-3 bg-zinc-100 shadow-customeFour rounded-lg border-[1px] border-neutral-300 relative mt-4 pt-8 pb-3 h-fit">
            <div className="flex gap-2 absolute bg-inherit p-1 px-2 border-[1px] border-neutral-300 w-fit rounded-lg -top-4 shadow-customeFour">
                <InformationCircleIcon className="w-[1.5rem]"/>
                <p>Reccomendation</p>
            </div>
            {
                !isOpen && (
                    <>
                        <select className="p-2 rounded-lg bg-white shadow-customeTwo">
                            <option value="select">Plant Sutes for</option>
                            <option value="apartment">Apartment</option>
                            <option value="fields">Fields</option>
                            <option value="Equipment">Equipment</option>
                        </select>
                        <button onClick={() => setIsOpen(true)} className="p-1 text-left text-green-600 font-bold">Add new selection ?</button>
                    </>
                )
            }
            <div className={`p-2 shadow-customeOne rounded-lg bg-white flex justify-between flex-wrap gap-2 ${!isOpen && 'hidden'}`}>
                <h4 className="font-bold flex gap-2">
                    <PlusCircleIcon className="w-[1.5rem]"/>
                    <p>Add selection</p>
                </h4>
                <XMarkIcon onClick={() => setIsOpen(false)} className="w-[1.5rem] cursor-pointer"/>
                <span className="w-full h-[1px] bg-zinc-200 mb-1"></span>
                <div className="flex gap-2">
                    <input className="p-2 px-4 rounded-lg bg-zinc-100 shadow-customeTwo" type="text" />
                    <button className="bg-green-500 p-2 rounded-lg px-4 text-white font-bold">Add</button>
                </div>
            </div>
        </div>
    )
}

const CountrySelection = () => {
    return (
        <div className="bg-wite flex flex-col gap-3 flex-1 h-fit p-3 bg-zinc-100 shadow-customeFour rounded-lg border-[1px] border-neutral-300 relative mt-4 pt-8 pb-3">
            <select className="p-2 rounded-lg bg-white shadow-customeTwo">
                <option value="select">Select country</option>
                <option value="IR">iran</option>
                <option value="FR">france</option>
                <option value="USA">USA</option>
            </select>
            <p className="flex gap-x-2 text-green-600"><InformationCircleIcon className="w-[1.5rem]"/>leave it blank if it is unknown</p>
            <div className="flex gap-2 absolute bg-inherit p-1 px-2 border-[1px] border-neutral-300 w-fit rounded-lg -top-4 shadow-customeFour">
                <GlobeAsiaAustraliaIcon className="w-[1.5rem]"/>
                <p>Country</p>
            </div>
        </div>
    )
}

const ProdSizes = () => {
    return (
        <div className="bg-wite flex flex-wrap items-center gap-2 flex-1 p-2 bg-zinc-100 shadow-customeFour rounded-lg border-[1px] border-neutral-300 relative mt-4 pt-8 pb-3 h-fit">
            <label htmlFor="planet-width">Height :</label>
            <input className="w-[3rem] rounded-lg shadow-customeTwo p-2" type="number" />
            <label htmlFor="plant-height">Width :</label>
            <input className="w-[3rem] rounded-lg shadow-customeTwo p-2" type="number" />
            <p className="flex gap-x-2 text-green-600"><InformationCircleIcon className="w-[1.5rem]"/> sizes are in meters</p>
            <div className="flex gap-2 absolute bg-inherit p-1 px-2 border-[1px] border-neutral-300 w-fit rounded-lg -top-4 shadow-customeFour">
                <CubeIcon className="w-[1.5rem]"/>
                <p>Prod size</p>
            </div>
        </div>
    )
}

const ProdImage = () => {
    return (
        <div className="bg-white w-[20rem] flex flex-col shadow-customeTwo rounded-lg overflow-x-hidden">
            <div className="h-[18rem] bg-zinc-200 flex items-center justify-center text-neutral-700">
                <PhotoIcon className="w-[10rem]"/>
            </div>
            <label className="p-2 flex items-center justify-between cursor-pointer" htmlFor="plant-img">
                <p>Choose image</p>
                <ArrowUpTrayIcon className="w-[1.5rem]"/>
            </label>
            <input className="hidden" id="plant-img" type="file" />
        </div>
    )
}

export default AddProdPage
