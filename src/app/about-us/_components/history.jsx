"use client"

import { useEffect, useState } from "react"

export default function History() {
    const history = [
        {years:"2020",lore:"Dunia damai"},
        {years:"2021",lore:"Negara api mulai menyerang"},
        {years:"2022",lore:"lorem aja lah"},
    ]
    const [active,setActive]=useState(0);
    return (<>

<div className="w-full px-4"> 
    <div className="w-full flex justify-evenly gap-2 *:rounded-full mb-2">
    {history.map((e,i)=><>
        <button className={`w-full ${active==i?"bg-green-600":"bg-green-400"} hover:bg-green-600`} p-2 key={i} onClick={()=>setActive(i)}>
            <h1>{e.years}</h1>
        </button>
    </>)}
    </div>
    {
        <div className="bg-green-600 p-2 text-sm rounded-lg text-white">
            <p>{history[active].lore}</p>
        </div>
    }
</div>
    
</>)}
