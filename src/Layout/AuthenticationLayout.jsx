import { ToastContainer } from "react-toastify";

export default function AuthenticationLayout({children}) {
    return (
        <main className="flex h-full max-sm:flex-col">
          <section className="w-[60%] h-screen bg-gradient-to-br from-green-700 to-green-500 rounded-r-[2rem] relative max-sm:h-[5rem] max-sm:w-full max-sm:rounded-none">
          </section>
          <section className="w-[40%]  h-screen relative max-sm:w-[100%] flex items-center max-sm:items-start  max-sm:text-sm max-sm:h-screen max-sm:bg-white">
            {children}
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" /><ToastContainer />
          </section>
        </main>
      )
}