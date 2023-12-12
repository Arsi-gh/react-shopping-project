import { CheckCircleIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export default function Comment ({displayHandler})  {

    const [subject , setSubject] = useState('')
    const [desc , setDesc] = useState('')

    const handleComment = (e) => {
        e.preventDefault()
        let newComment = {
            rating : null,
            subject,
            positivePoints : null,
            negativePoints : null,
            desc,
        }

    }

    return (
        <>
            <div onClick={() => displayHandler(false)} className="w-screen h-screen bg-zinc-800 opacity-50 fixed top-0 left-0 z-40"></div>
            <form className="flex flex-col max-h-[45rem] p-4 gap-2 gap-y-4 rounded-lg bg-zinc-100 fixed transform -translate-x-1/2 left-1/2 sm:top-1/2 sm:-translate-y-1/2  w-[25rem] overflow-auto max-sm:w-full max-sm:max-h-screen  max-sm:bottom-0 max-sm:rounded-t-3xl max-sm:p-4 z-50">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Write comment</h4>
                <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
              </div>
              <span className=" h-[1px] bg-zinc-300"></span>
              <PointCon/>
              <input value={subject} onInput={e => setSubject(e.target.value)} className="bg-white w-full p-2 px-4 rounded-md shadow-customeTwo" type="text" placeholder="Subject" />
              <PositivePointsCon/>
              <NegativePointsCon/>
              <textarea value={desc} onInput={e => setDesc(e.target.value)} placeholder="description" className="p-2 px-4 min-h-[10rem] rounded-lg shadow-customeFour"></textarea>
              <button onClick={() => handleComment} className="bg-green-500 p-2 text-white font-bold rounded-lg mt-2">Submit comment</button>
            </form>
        </>
    )
}

const PointCon = () => {

    const [point , setPoint] = useState(0)

    const pointStats = ["Very bad", "Bad" , "Not bad" , "Good" , "Very good"]

    return (
        <>
            <label className="font-semibold" htmlFor="">Rate this product from 1 to 5 :</label>
            <div className="w-full flex justify-between items-center">
                <div className="flex-1 flex">
                    <StarIcon onClick={() => setPoint(1)} className={`w-[2.4rem] cursor-pointer ${1 <= point ? 'text-yellow-400' : 'text-zinc-300'}  drop-shadow-sm`}/>
                    <StarIcon onClick={() => setPoint(2)} className={`w-[2.4rem] cursor-pointer ${2 <= point ? 'text-yellow-400' : 'text-zinc-300'}  drop-shadow-sm`}/>
                    <StarIcon onClick={() => setPoint(3)} className={`w-[2.4rem] cursor-pointer ${3 <= point ? 'text-yellow-400' : 'text-zinc-300'}  drop-shadow-sm`}/>
                    <StarIcon onClick={() => setPoint(4)} className={`w-[2.4rem] cursor-pointer ${4 <= point ? 'text-yellow-400' : 'text-zinc-300'}  drop-shadow-sm`}/>
                    <StarIcon onClick={() => setPoint(5)} className={`w-[2.4rem] cursor-pointer ${5 <= point ? 'text-yellow-400' : 'text-zinc-300'}  drop-shadow-sm`}/>
                </div>
                <span className="text-center font-semibold">{pointStats[point - 1]}</span>
            </div>
        </>
    )
}

const PositivePointsCon = () => {

    const [positivePoints , setPositivePoints] = useState([])
    const [inputValue , setInputValue] = useState('')

    const handlePoints = (e) => {
        e.preventDefault()
        if (inputValue) {
            setPositivePoints(prev => [...prev , inputValue])
            setInputValue('')
        }
    }


    const deletePoint = (text) => {
        let newPoints = positivePoints.filter((point) => point !== text)
        setPositivePoints(newPoints)
    }

    return (
        <div>
            <div className="flex gap-2 w-full">
              <input value={inputValue} onKeyUp={e => e.key == 'Enter' && handlePoints} onInput={e => setInputValue(e.target.value)} className="w-4/5 flex p-2 px-4 rounded-lg shadow-customeTwo" type="text" placeholder="Positive points"/>
              <button onClick={handlePoints} className="flex-1 p-2 bg-green-500 text-white font-semibold rounded-lg">Add</button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
                {
                    positivePoints.map((item,index) => {
                        return (
                            <div key={index} className="flex  gap-2 items-center px-2 w-fit bg-white rounded-lg p-2 shadow-customeFour">
                                <XMarkIcon onClick={() => deletePoint(item)} strokeWidth={1.5} className="w-[1.3rem] cursor-pointer"/>
                                <span className="h-full w-[1px] bg-zinc-200"></span>
                                <p>{item}</p>
                                <CheckCircleIcon strokeWidth={1.8} className="w-[1.5rem] text-green-600"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const NegativePointsCon = () => {

    const [negativePoints , setNegativePoints] = useState([])
    const [inputValue , setInputValue] = useState('')

    const handlePoints = (e) => {
        e.preventDefault()
        if (inputValue){
            setNegativePoints(prev => [...prev , inputValue])
            setInputValue('')
        }
    }

    const deletePoint = (text) => {
        let newPoints = negativePoints.filter((point) => point !== text)
        setNegativePoints(newPoints)
    }

    return (
        <div>
            <div className="flex gap-2 w-full">
              <input value={inputValue} onKeyUp={e => e.key == 'Enter' && handlePoints(e)}  onInput={e => setInputValue(e.target.value)} className="w-4/5 flex p-2 px-4 rounded-lg shadow-customeTwo" type="text" placeholder="Negative points"/>
              <button onClick={handlePoints} className="flex-1 p-2 bg-green-500 text-white font-semibold rounded-lg">Add</button>
            </div>
            <div className="flex gap-2 mt-4 flex-wrap">
                {
                    negativePoints.map((item,index) => {
                        return (
                            <div key={index} className="flex  gap-2 items-center px-2 w-fit bg-white rounded-lg p-2 shadow-customeFour">
                                <XMarkIcon onClick={() => deletePoint(item)} strokeWidth={1.5} className="w-[1.3rem] cursor-pointer"/>
                                <span className="h-full w-[1px] bg-zinc-200"></span>
                                <p>{item}</p>
                                <XCircleIcon strokeWidth={1.8} className="w-[1.5rem] text-red-600"/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}