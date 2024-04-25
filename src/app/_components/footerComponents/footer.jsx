import Image from "next/image"
import Link from "next/link"
export default function Footer(){

return(<footer className="w-full p-4 border-gray-400 text-white border-y-2 bg-gray-500 flex justify-between flex-col md:flex-row gap-4">
    
    <div className="flex justify-center items-center text-center flex-col md:flex-row relative md:h-[50px]">
        <div className="relative w-[25%] md:w-auto md:h-full aspect-square">
            <Image src={"/logo.svg"} fill/>
        </div>
        <div className="text-nowrap md:absolute md:translate-x-full">
            <h1>N0013 Company</h1>
            <p className="text-sm">© 2024 Rama Naufal Alim</p>
        </div>
    </div>

    <div className="flex flex-col text-end">
        <Link className="hover:bg-slate-300" href={"/"}>Home</Link>
        <Link className="hover:bg-slate-300" href={"/about-us"}>About Us</Link>
    </div>
</footer>)}