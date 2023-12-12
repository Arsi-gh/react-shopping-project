import { CheckCircleIcon, EyeIcon, EyeSlashIcon, LockClosedIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import Background from "../Global Ui/Background"

export default function EditPassword({displayHandler}) {
    const [passOneInput , setPassOneInput] = useState('')
    const [passTwoInput , setPassTwoInput] = useState('')
  
    const [passValidation , setPassValidation] = useState({
      capital : false,
      minLength : false ,
      specialChar : false,
      number: false,
    })
  
    const [passOneStat , setPassOneStat] = useState(false)
    const [passTwoStat , setPassTwoStat] = useState(false)
  
    const passCapitalCharCheck = () => {
      setPassValidation(prev => {
        return {...prev , capital : /[A-Z]+/g.test(passOneInput)}
      })
        
    }
  
    const passlengthCheck = () => {
      setPassValidation(prev =>  {
        return {...prev , minLength : passOneInput.length > 4}
      })
    }
    
    const passSpecialCharCheck = () => {
      setPassValidation(prev =>  {
        return {...prev , specialChar : /[-@#!$%^&*()_+|~=`{}[\]:";'<>?,./]/.test(passOneInput)}
      })
        
  
    }
  
    const passNumberCheck = () => {
      setPassValidation(prev => {
        return {...prev , number : /[0-9]+/g.test(passOneInput)}
      })
        
    }
  
    useEffect(() => {
      if (passOneInput) {
        passCapitalCharCheck()
        passlengthCheck()
        passSpecialCharCheck()
        passNumberCheck()
      }
    } , [passOneInput] )
  
    return (
      <>
        <Background displayHandler={displayHandler}/>
        <form className="flex flex-col p-4 gap-2 rounded-lg bg-white fixed transform -translate-x-1/2 left-1/2 z-30 sm:top-1/2 sm:-translate-y-1/2 w-[25rem] max-sm:w-full  max-sm:bottom-0 max-sm:rounded-none max-sm:rounded-t-xl max-sm:p-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold flex gap-2"><LockClosedIcon className="w-[1.5rem]"/> Change password</h4>
            <XMarkIcon onClick={() => displayHandler(false)} className="w-[1.5rem] cursor-pointer"/>
          </div>
          <span className="w-full h-[1px] bg-zinc-300 my-2"></span>
          <label className="pl-1" htmlFor="first-pass">Enter new password</label>
          <div className="relative">
          <input value={passOneInput} onChange={(e) => setPassOneInput(e.target.value)} id="first-pass" placeholder="Password" type={passOneStat ? 'text' : 'password'} className="w-full p-2 flex-1 px-4 rounded-lg shadow-customeTwo"/> 
          <span onClick={() => setPassOneStat(!passOneStat)} className="cursor-pointer">  
            {passOneStat ? <EyeIcon className="w-[1.5rem] absolute top-2 right-2"/> : <EyeSlashIcon className="w-[1.5rem] absolute top-2 right-2"/>}
          </span>
         </div>
         <div className="flex flex-col gap-1 px-2">
          <h3 className="font-bold">Passwrd must have:</h3>
          <p className="px-1 flex justify-between gap-2">least one capital letter{passValidation.capital ? <ValidIcon/> : <InValidIcon/>}</p>
          <p className="px-1 flex justify-between gap-2">least one special character{passValidation.specialChar ? <ValidIcon/> : <InValidIcon/>}</p>
          <p className="px-1 flex justify-between gap-2">least one number{passValidation.number ? <ValidIcon/> : <InValidIcon/>}</p>
          <p className="px-1 flex justify-between gap-2">min lenght of 8 characters{passValidation.minLength ? <ValidIcon/> : <InValidIcon/>}</p>
         </div>
         <span className="w-full h-[1px] bg-zinc-300 my-1"></span>
         <label className="pl-1" htmlFor="second-pass">Enter password again</label>
         <div className="relative">
          <input value={passTwoInput} onChange={(e) => setPassTwoInput(e.target.value)} id="second-pass" placeholder="Password" type={passTwoStat ? 'text' : 'password'} className="w-full p-2 flex-1 px-4 rounded-lg shadow-customeTwo"/> 
          <span onClick={() => setPassTwoStat(!passTwoStat)} className="cursor-pointer">      
            {passTwoStat ? <EyeIcon className="w-[1.5rem] absolute top-2 right-2"/> : <EyeSlashIcon className="w-[1.5rem] absolute top-2 right-2"/>}
          </span>
         </div>
         <button className="mt-2 p-2 bg-green-500 text-white font-semibold rounded-lg">Submit password</button>
        </form>
      </>
    )
}

const ValidIcon = () => {
    return (
        <CheckCircleIcon className="w-[1.6rem] text-green-500"/>
    )
}

const InValidIcon = () => {
    return (
        <XCircleIcon className="w-[1.6rem] text-red-500"/>
    )
}