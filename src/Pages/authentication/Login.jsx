import { PhoneIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

export default function Login() {
    return (
        <form className="flex flex-col w-[25rem] gap-2 p-3  rounded-[2rem] bg-white max-sm:shadow-none -ml-14 shadow-customeOne max-md:-ml-40 max-sm:m-0 max-sm:top-0 max-sm:rounded-none max-sm:w-full">
          <div className="flex text-neutral-800 items-center justify-between p-3 text-lg font-bold bg-gradient-to-tr from-green-500 to-green-300  rounded-t-3xl max-sm:rounded-md">
            <h2 className="">Login account</h2>
            <UserCircleIcon className="w-8" />
          </div>
          <div className="flex flex-col relative gap-2 my-3">
            <input id="username" className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" type="text"/>
            <label htmlFor="username" className="transition-all absolute top-2 left-1 text-neutral-900 bg-white px-2 peer-focus:-top-3 peer-focus:left-4"> Username or email</label>
          </div>
          <div className="flex flex-col relative gap-2">
            <input id="userpass" className="peer shadow-customeTwo p-1 px-2 py-2 rounded-lg outline-none" type="password"/>
            <label htmlFor="userpass" className="transition-all absolute top-2 left-1 text-neutral-900 bg-white px-2 peer-focus:-top-3 peer-focus:left-4"> Password</label>
          </div>
          <div className="flex gap-2 px-1 mt-2">
            <label>Remember me</label>
            <input className="" type="checkbox" name="" id="" />
          </div>
          <button className="bg-green-500 text-white font-bold p-2 rounded-md mt-2 hover:bg-green-600">
            Submit
          </button>
          <span className="w-full h-[2px] bg-zinc-200 my-2"></span>
          <button className="flex justify-between p-2 rounded-sm shadow-customeTwo bg-zinc-100 hover:bg-zinc-200">
            <p>Login with phone number</p>
            <PhoneIcon strokeWidth={2} className="w-6" />
          </button>
          <button className="flex justify-between p-2 rounded-sm shadow-customeTwo bg-zinc-100 hover:bg-zinc-200">
            <p>Login with Google</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
              <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"></path>
            </svg>
          </button>
          <button className="flex items-center justify-between p-2 rounded-sm shadow-customeTwo bg-zinc-100 hover:bg-zinc-200">
            <p>Login with Apple id</p>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
              <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
            </svg>
          </button>
          <NavLink to="/signup" className="px-1 my-2" href="#">Dont have an account ?</NavLink>
        </form>
      );
}