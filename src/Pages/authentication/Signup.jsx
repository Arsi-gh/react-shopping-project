import { EyeIcon, EyeSlashIcon, UserCircleIcon} from "@heroicons/react/24/outline";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { NavLink, useNavigate } from "react-router-dom";


export default function Signup() {

  const navigate = useNavigate()

  const [showPass , setShowPass] = useState(false)    
  const [showSecPass , setShowSecPass] = useState(false)

  const {register , watch , formState : {errors} , handleSubmit } = useForm()

  const addUser = async (data) => {
    const res = await axios.post('http://localhost:5000/users' ,{...data , created_At : new Date().toISOString() , isAdmin : false})
    if (res) {
      navigate('/')
      toast.success("Account has been created successfully")
    }
  }

  const {isLoading , mutateAsync } = useMutation("add-user" , addUser)

  const onSubmit = (data) => {
    mutateAsync(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[25rem] font-semibold gap-2 p-3 -ml-24 rounded-[2rem] bg-white shadow-customeOne max-md:-ml-40  max-sm:top-0 max-sm:shadow-none max-sm:m-0  max-sm:w-full max-sm:rounded-sm max-sm:py-4">
      <div className="flex text-zinc-50 items-center justify-between p-3 text-lg font-semibold bg-gradient-to-tr from-green-600 to-green-400  rounded-t-3xl max-sm:rounded-md">
        <h2>Create your account</h2>
        <UserCircleIcon className="w-8" />
      </div>
      <div className="flex flex-col gap-3 mt-1">
        <div className="flex flex-col gap-2 relative mb-4 mt-4">
          <label className="absolute  bg-white text-neutral-600 px-2  -top-4 left-3" htmlFor="user-full-name">Enter your username <span className="text-red-400">*</span> </label>
          <input  {...register("username" , { required: "Please fill this field" , minLength : {value : 8 , message : 'Username must be at least 8 characters'} , maxLength  :{value : 20 , message : "Username cant be longer than 20 characters"} })} id="user-full-name" className="peer shadow-customeTwo p-3 rounded-lg outline-none" type="text"/>
          {errors.username && <p className="text-red-500">{errors.username.message}</p>}
        </div>

        <div className="flex flex-col gap-2 relative">
          <label className="absolute bg-white text-neutral-600 px-2 -top-4 left-3" htmlFor="email">Enter your email  <span className="text-red-400">*</span></label>
          <input {...register("email" , {required : 'Please enter your email' , pattern : {value : /\S+@\S+\.\S+/, message : 'Email format is invalid'}})} id="email" className="peer shadow-customeTwo p-3 rounded-lg outline-none" type="text"/>
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="flex flex-col gap-2 relative mt-4">
          <label className="absolute bg-white text-neutral-600 px-2  -top-4 left-3" htmlFor="pass">Enter your password</label>
          <input {...register("password" , {required : "Please define your password" , minLength : {value : 8 , message : 'Password must be at least 8 characters'}, maxLength : {value : 16 , message : 'massage cant be more than 16 characters'}})} id="pass" type={`${showPass ? "text" : "password"}`} className="peer shadow-customeTwo w-full p-3 rounded-lg outline-none" />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          <span onClick={() => setShowPass(!showPass)} className="absolute right-2 top-3 cursor-pointer max-sm:top-3">
              {showPass ? <EyeIcon className="w-7 max-sm:w-[1.4rem]"/> : <EyeSlashIcon className="w-7 max-sm:w-[1.5rem]"/>}
          </span>
        </div>

    <div className="flex flex-col gap-2 relative mt-4">
        <label className="absolute bg-white text-neutral-600 px-2 -top-4 left-3" htmlFor="secPass">Repeat your password</label>
        <input {...register("secPassword" , {required : "Please repeat your password" , validate : (val) => {
          if (watch('password') != val) {
            return "Your password does not match";
          }
        }})} id="secPass" type={`${showSecPass ? "text" : "password"}`} className="peer shadow-customeTwo w-full p-3 rounded-lg outline-none" />
        {errors.secPassword && <p className="text-red-500">{errors.secPassword.message}</p>}
        <span onClick={() => setShowSecPass(!showSecPass)} className="absolute right-2 top-3   cursor-pointer max-sm:top-3">
            {showSecPass ? <EyeIcon className="w-7 max-sm:w-[1.4rem]"/> : <EyeSlashIcon className="w-7 max-sm:w-[1.5rem]"/>}
        </span>
      </div>

      <button type="submit" className="p-3  rounded-lg text-white font-semibold shadow-customeOne bg-gradient-to-tr from-green-600 to-green-400 hover:to-green-500">Create account</button>
      </div>
      <span className="w-full h-[1px] bg-zinc-300 my-2"></span>
      <OtherOptions/>
      <NavLink to="/login" className="font-semibold px-1 my-2" href="#">Have an account already ?</NavLink>
    </form>
  );
}

function OtherOptions () {
  return (
    <>
    <button className="flex items-center justify-between p-2 rounded-lg shadow-customeTwo hover:bg-zinc-50">
        <p>Sign up with Google</p>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
          <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
        </svg>
      </button>
      <button className="flex items-center justify-between p-2 rounded-lg shadow-customeTwo hover:bg-zinc-50">
        <p>Sign up with Apple id</p>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
          <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
        </svg>
      </button>
    </>
  )
}