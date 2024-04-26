"use client"
import { useEffect, useState } from "react"
import { getURL } from "next/dist/shared/lib/utils";
import Link from "next/link"

export default function Humburger({hrefList=[]}) {
    const [burger,setBurger]=useState(false);
    const [url,setUrl] = useState();
    useEffect(()=>{
        setUrl(getURL());
    },[])
    return(
        <div className={`flex flex-col items-end h-full w-max`}>
        <button className="md:hidden self-end h-full aspect-square relative flex justify-center items-center *:*:transition-all"
        onClick={()=>setBurger(!burger)}>
            {!burger
            ?<>Open</>
            :<>Close</>
            }
        </button>

        <ul className={`md:h-full items-center flex-col md:flex-row md:flex md:gap-2 md:static bg-black md:bg-transparent
        ${!burger?"hidden":"flex absolute top-5 right-0 "}`}>
            {
            hrefList.map((e,i)=>
                <Link className={`w-full h-full text-end px-2 ${url==e.url?"bg-gray-500":""} hover:bg-gray-500 flex justify-center items-center`} href={e.url} key={i} onClick={()=>setUrl(e.url)}>
                    <li className="w-full text-nowrap">{e.text}</li>
                </Link>
            )
            }
        </ul>
        </div>
    )
}