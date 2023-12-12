import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="mt-20 mx-auto bg-gradient-to-t from-neutral-200 to-neutral-300 rounded-t-[3rem] overflow-hidden">
          <div className="max-w-[1600px] flex flex-col m-auto">
            <div className="w-full flex flex-wrap h-fit justify-between gap-[1rem] gap-x-[6rem] p-[2rem] px-[4rem] max-sm:flex-col">
              <div className="flex-1">
                <h3 className="my-[0.5rem] font-bold text-lg">Plant store</h3>
                <p className="">Lorem ipsum dolor sit Tempore  Ipsa recu Ipsa recu Ipsa recu  qui beatae autem adipisci eaque?</p>
              </div>
              <div className="flex-1 h-[10rem]">
                <h3 className="-ml-[1rem] m-[0.5rem] font-bold text-lg">Categories</h3>
                <ul>
                  <li className="cursor-pointer list-disc">
                    <Link to="/products" className="cursor-pointer list-disc">Products</Link>
                  </li>
                  <li className="cursor-pointer list-disc">
                    <Link to="/subscription" className="cursor-pointer list-disc">Subscribtion</Link>
                  </li>
                  <li className="cursor-pointer list-disc">
                    <Link to="/aboutus" className="cursor-pointer list-disc">About us</Link>
                  </li>
                  <li className="cursor-pointer list-disc">
                    <Link className="cursor-pointer list-disc">Contact us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 h-[10rem]">
                <h3 className="-ml-[1rem] m-[0.5rem] font-bold text-lg">Any problem ?</h3>
                <ul>
                  <li className="cursor-pointer list-disc">Report bug</li>
                  <li className="cursor-pointer list-disc">Send us ticket</li>
                  <li className="cursor-pointer list-disc">Contact us</li>
                </ul>
              </div>
              <div className="flex-1 h-[10rem]">
                <h3 className="-ml-[1rem] m-[0.5rem] font-bold text-lg">Plant store</h3>
                <ul>
                  <li className="list-disc">021 3425633</li>
                  <li className="list-disc">California USA</li>
                  <li className="list-disc">Fax 231-345-1233</li>
                </ul>
              </div>
            </div>
            <div className="flex p-4 px-[4rem] justify-between items-center max-sm:flex-col max-sm:gap-4 max-sm:pb-[4rem]">
                <p>Copyright © 2023 - All rights reserved</p>
                <p>Made with ❤️ by Arsi </p>
            </div>
          </div>
        </footer>
    )
}
