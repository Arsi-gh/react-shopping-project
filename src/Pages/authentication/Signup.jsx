import { CheckCircleIcon, EyeIcon, EyeSlashIcon, UserCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function Signup() {
    return (
      <form className="flex flex-col w-[25rem] gap-2 p-3 -ml-24 rounded-[2rem] bg-white shadow-customeOne max-md:-ml-40  max-sm:top-0 max-sm:shadow-none max-sm:m-0  max-sm:w-full max-sm:rounded-sm max-sm:py-4">

        <div className="flex text-neutral-800 items-center justify-between p-3 text-lg font-bold bg-gradient-to-tr from-green-500 to-green-300  rounded-t-3xl max-sm:rounded-md">
          <h2 className="">Create your account</h2>
          <UserCircleIcon className="w-8" />
        </div>
  
        <UserInfo/>
  
        <span className="w-full h-[1px] bg-zinc-300 my-2"></span>
  
        <button className="flex items-center justify-between p-2 rounded-sm shadow-customeTwo bg-zinc-100 hover:bg-zinc-200">
          <p>Sign up with Google</p>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
          </svg>
        </button>
  
        <button className="flex items-center justify-between p-2 rounded-sm shadow-customeTwo bg-zinc-100 hover:bg-zinc-200">
          <p>Sign up with Apple id</p>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
            <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
          </svg>
        </button>
  
        <NavLink to="/login" className="px-1 my-2" href="#">Have an account already ?</NavLink>
      </form>
    );
  }
  
  function  SignupFirstPart () {
    return (
      <>
        <div className="flex flex-col gap-4 mt-1">
          <label htmlFor="registration">Enter your email or phone number</label>
          <input id="registration" placeholder="Email or phone ..." className="shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" type="text"/>
        </div>
  
        <button className="bg-green-500 text-white font-bold p-2 rounded-md mt-2">
          Send validatation code
        </button>
      </>
    )
  }
  
  function ValidationSection() {
    const [currentInputIndex, setCurrentInputIndex] = useState(0);
    const validateInputs = useRef(new Array());
  
    const handleValidateInput = (e) => {
      if (e.keyCode === 8) {
        if (currentInputIndex > 0) {
          setCurrentInputIndex(currentInputIndex - 1);
        }
      } else {
        if (currentInputIndex < 5) {
          setCurrentInputIndex(currentInputIndex + 1);
        }
      }
    };
  
    useEffect(() => {
      validateInputs.current[currentInputIndex].focus();
      validateInputs.current[currentInputIndex].select();
    }, [currentInputIndex]);
  
    return (
      <>
        <p>Enter validatation code</p>
        <div className="flex gap-4">
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
          <input ref={(elem) => validateInputs.current.push(elem)} onKeyUp={(e) => handleValidateInput(e)} className="w-1/6 text-3xl p-4 rounded-2xl shadow-customeTwo" type="number" maxLength={1}/>
        </div>
      </>
    );
  }
  
function UserInfo() {

  const navigate = useNavigate()

  const [infos , setInfos] = useState({
    userFullName : '',
    username : '',
    userPass : '',
    userPassTwo : '',
})

  const [validationProps , setValidationProps] = useState({
    fullNameLenght : false,
    userNameLength : false,
    passLength : false,
    passNumber : false, 
    passSpecialChar : false,
    passCapital : false,
    passRepeat : false,
  })

  const validationFn = () => {
    setValidationProps(prev => {
      return {
        ...prev,
        fullNameLenght : infos.userFullName.length > 2,
        userNameLength : infos.username.length > 6,
        passRepeat : infos.userPass == infos.userPassTwo,
      }
    })
  }

  const fetchNewUser = async () => {
    const newUser = {
        fullname : infos.userFullName,
        username : infos.username,
        job : null,
        email : null,
        phone : null,
        password : infos.userPass,
        national_code : null,
        birthdate : null,
        createdAt : new Date().toISOString(),
        addresses : [],
    }
    await fetch('http://localhost:5000/users' , {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify(newUser),
    })
    navigate('/')  
    let expireDate = new Date().setTime(new Date().getTime + 2 * 24 * 60 * 60)
    if (!document.cookie) {
      document.cookie = `username=${infos.username};path='/';expires=${expireDate}`
    }
  }

  const notif = () => {
    toast.error('Please fill up inputs correctly', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const createNewAccount = async (e) => {
    e.preventDefault()
    if (validationProps.fullNameLenght && validationProps.passCapital && validationProps.passLength && validationProps.passNumber && validationProps.passRepeat && validationProps.passSpecialChar && validationProps.userNameLength) {
      fetchNewUser()
    } else {
      notif()
    }
  }

  return (
    <>
      <div className="flex flex-col gap-3 mt-1">
        <UserFullnameInput value={infos.userFullName} handler={setInfos}validateProps={validationProps} validate={setValidationProps}/>
        <UsernameInput value={infos.username} handler={setInfos} validateProps={validationProps} validate={setValidationProps}/>
        <FirstPassInput  value={infos.userPass} handler={setInfos} validateProps={validationProps} validate={setValidationProps}/>
        <SecondPassInput  value={infos.userPassTwo} handler={setInfos} validateProps={validationProps} validate={setValidationProps} checkPass={infos.userPass}/>
        <button onClick={(e) => createNewAccount(e)} className="p-2 px-4 rounded-lg bg-green-500 text-white font-bold hover:bg-green-600">Create account</button>
      </div>
    </>
  );
}

function UserFullnameInput ({value , handler , validate}) {

  const handleNameInput = (e) => {
    handler((prev) => { return {...prev , userFullName : e.target.value} })
    validate(prev => {
      return {
        ...prev,
        fullNameLenght : e.target.value.length > 2,
      }
    })
  }

  return (
    <div className="flex flex-col gap-2 relative mb-4 mt-4">
      <input  value={value} onChange={e => (handleNameInput(e))} id="user-full-name" className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" type="text"/>
      <label className="absolute  bg-white text-neutral-600 px-2 transition-all -top-4 left-3" htmlFor="user-full-name">Enter your Full name</label>
    </div>
  )
}

function UsernameInput ({value , handler , validate}) {

  const handleUserNameInput = (e) => {
    handler((prev) => { return {...prev , username : e.target.value} })
    validate(prev => {
      return {
        ...prev,
        userNameLength : e.target.value.length > 5,
      }
    })
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <input value={value} onChange={(e) => handleUserNameInput(e)} id="username" className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" type="text"/>
      <label className="absolute  bg-white text-neutral-600 px-2 transition-all -top-4 left-3" htmlFor="username">Enter your username</label>
    </div>
  )
}

function FirstPassInput ({value , handler , validateProps , validate}) {

    const [showPass , setShowPass] = useState(false)

    const passLengthCheck = () => {
      validate((prev) => {
        return {...prev , passLength :  value.length > 8 }
      })
    }
    
    const passNumberCheck = () => {
      validate((prev) => {
        return {...prev , passNumber : /[0-9]+/g.test(value)}
      })
    }
    
    const passSpecialCharCheck = () => {
      validate((prev) => {
        return {...prev , passSpecialChar : /[-@#!$%^&*()_+|~=`{}[\]:";'<>?,./]/.test(value)}
      })
    }
    
    const passCapitalCheck = () => {
      validate((prev) => {
        return {...prev , passCapital : /[A-Z]+/g.test(value)}
      })
    }

    useEffect(() => {
      passLengthCheck()
      passNumberCheck()
      passSpecialCharCheck()
      passCapitalCheck()
    } , [value])

    return (
        <div className="flex flex-col gap-2 relative">
            <label className="bg-white text-neutral-600 px-2" htmlFor="userpass">Write your password</label>
            <input value={value} onChange={(e) => handler((prev) => { return {...prev , userPass : e.target.value}})}  id="userpass" type={`${showPass ? "text" : "password"}`} className="peer shadow-customeTwo w-full p-1 px-2 py-2 rounded-lg outline-none" />
            <span onClick={() => setShowPass(prev => !prev)} className="absolute right-2 top-10 cursor-pointer max-sm:top-9">
                {showPass ? <EyeIcon className="w-[1.6rem] max-sm:w-[1.4rem]"/> : <EyeSlashIcon className="w-[1.6rem] max-sm:w-[1.5rem]"/>}
            </span>
          <p className="hidden items-center justify-between mx-2 peer-focus:flex mt-2">
              Password must contain capital letter
              <span>
                {validateProps.passCapital ? 
                  <CheckCircleIcon className="w-6 text-green-500"/>
                  :
                  <XCircleIcon className="w-6 text-red-600" /> 
                }
              </span>
          </p>
          <p className="hidden items-center justify-between mx-2 peer-focus:flex">
              Password must be at least 8 characters
              <span>
                {validateProps.passLength ? 
                  <CheckCircleIcon className="w-6 text-green-500"/>
                  :
                  <XCircleIcon className="w-6 text-red-600" /> 
                }
              </span>
          </p>
          <p className="hidden items-center justify-between mx-2 peer-focus:flex">
              Password must contain one number
              <span>
                {validateProps.passNumber ? 
                  <CheckCircleIcon className="w-6 text-green-500"/>
                  :
                  <XCircleIcon className="w-6 text-red-600" /> 
                }
              </span>
          </p>
          <p className="hidden items-center justify-between mx-2 peer-focus:flex">
              Password must contain one special character
              <span>
                {validateProps.passSpecialChar ? 
                  <CheckCircleIcon className="w-6 text-green-500"/>
                  :
                  <XCircleIcon className="w-6 text-red-600" /> 
                }
              </span>
          </p>
          <span className="hidden w-full h-[1px] mt-2 bg-neutral-300 peer-focus:block"></span>
        </div>
    )
}

function SecondPassInput ({value , handler , validate , checkPass}) {

    const [showPass , setShowPass] = useState(false)

    const handleSecPassInput = (e) => {
      handler((prev) => { return {...prev , userPassTwo : e.target.value}})
      validate(prev => {
        return {
          ...prev,
          passRepeat : e.target.value == checkPass,
        }
      })
    }

    return (
        <div className="flex flex-col gap-2 relative">
            <label className="bg-white text-neutral-600 px-2" htmlFor="userpass-two">Write your password again</label>
            <input value={value} onChange={(e) => handleSecPassInput(e)} id="userpass-two" type={`${showPass ? "text" : "password"}`} className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" />
            <span onClick={() => setShowPass(prev => !prev)} className="absolute right-2 bottom-2 cursor-pointer">
                {showPass ? <EyeIcon className="w-[1.6rem] max-sm:w-[1.4rem]"/> : <EyeSlashIcon className="w-[1.6rem] max-sm:w-[1.5rem]"/>}
            </span>
        </div>
    )
}

