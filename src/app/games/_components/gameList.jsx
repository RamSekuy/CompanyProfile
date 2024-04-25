"use client"

import Card from "@/app/_components/cardComponent/card"
import TestimonialCard from "@/app/_components/cardComponent/testimonialCard"
import Image from "next/image"
import { useState , useEffect } from "react"

export default function GameList() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)
    const [limit,setLimit] = useState(8);
    const [modal,setModal] = useState({active:false,data:{}});


      useEffect(()=>{
        fetch(`https://pokeapi.deno.dev/pokemon?offset=${limit-7}&limit=8`)
          .then((res) => res.json())
          .then((fetched) => {
            setData([...data,...fetched])
            setLoading(false)
          })
      },[limit])

      if (isLoading) return (
        <>
        <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 px-4 my-4">
            {
                data.map((e,i)=>
                <button className="w-max h-max m-auto"
                onClick={()=>{setModal({active:true,data:e})}}
                key={i}
                >
                  <Card data={e}/>
                </button>
              )
            }
    </div>
        <h1 className="text-center">Loading...</h1>
        </>
      )
      if (!data) return <p>Failed Fetch Data</p>

    return (<>
    <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 px-4 my-4">
            {
                data.map((e,i)=>
                <button className="w-max h-max m-auto"
                onClick={()=>{setModal({active:true,data:e})}}
                key={i}
                >
                  <Card data={e}/>
                </button>
              )
            }
    </div>

    <button className="p-2 my-4 border-gray-200 bg-green-500 hover:bg-green-600 m-auto"
    onClick={()=>{
          setLoading(true);
          setLimit(limit+10);
        }
    }
    >See more...</button>
    
    {/* modal  */}
    <div className={`fixed bg-[rgba(0,0,0,0.5)] z-50 top-0 bottom-0 right-0 left-0 ${!modal.active?"hidden":""}`}
    onClick={()=>setModal(
      {
        active:false,
        data:modal.data
      }
      )}>
      {
        modal.data.stats?
        <div className="z-40 w-full h-full p-4 flex justify-center items-center">
          {/* Image  */}
          <div className="w-full aspect-square relative">
          <Image src={modal.data.imageUrl} alt="Game Image" fill/>
          </div>
          
          <div className="w-full bg-white border-2 border-black p-5">
            <h1 className="text-4xl font-extrabold">{modal.data.name+" Game"}</h1>
            {/* Star Rate  */}
            <div className="w-[50%] flex my-4">{
              Object.keys(Array.apply(0,Array(modal.data.stats.Attack>=100?5:Math.ceil(modal.data.stats.Attack/20)))).map((e,i)=>
                <div className="relative w-[20%] aspect-square" key={i}>
                      <Image fill objectFit="contain" src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZvW8bdRzGf1Q09r357MT3YikTZSgIwdAWCZA6MYBQ/oIKykCHDlUZujcUlQ2pVMAYJFQQUgckhKCxHb/cxU7sOunZvoiKdkCZUFGGVlS0gd/vQXcXv9upae4SG/mRnsny3ef5+vHd92xCJppoosAEW3sVdf0EGUfB0lTY2kPXlqaScRPq2jxsHag71ubJOAm/Ph+Crf+OuubAAzX1HoqzHBkXwU6cacHvuKp+QMZBAHkGNXWjCV5THXjAUm87r5FRF6r6221Tb8ADluL4LTLqQk1L9YW/pQDr8UUyyoKlvQRLZX3hvQDAuvIKGVXBUr/qqkwXfByozCyQkb1xWcpfPVNvh19zAkw/QiWeIKMmWMrH/SvTBr8243wCji+RURKKsxys+B994RvgLXjg5vQWLE04uOu8reioxY/B0uZgKWdhKdcGVqYd3IP3XJ6+hlLsLMrROazKx1BSdF/uE6grR7Chn4SdOIW6fgE1/Qpq6nVUtQKq6iaq6vbuV5kB8A1wDx4ox4CSZ7YadU1Xotu0KG/SFblAi5HrtBi5goJ0AcuRUyiIJ2HKz+0Ov5H4yF3AWktY9zrQfWMatjKd4H3g2UrDMlhxx4WI5+WGJcAQLw4OYOunUddZE757Heg39eEr0wHeCy+3wHvgJTBTAjUkBlN67wkV0t9FXdvumXoAlWH94Bvg3fCm9A8M8cxw34Oa+iaq2oNRqAxzJy8+RF56Zyj4Zoh1/QSqyr2DrAzz4LdgiG/8J/hWnZQjsOJ3DqIyzIHPi78hKx59KvhmCOf6vB6/5U9l5KEqwzx4G1ludk/wzRC2ImItntyPyjAXXsghFZN9ge94zq3MfBdkZZghOvDfo0i44NaIysynQVSGOfCG+DlADgUC3xGkHLvqZ2WYO3nxauDgzQCl2Cd+VYbtmOaFy/sXoBxb8qMyzHHeM83x6f2BBzmEUvT+XivTghfAcgJoln+Ai/vR/9XpF/dcmXwnPHOc5YGc+ELwAVbk9/2oTBM858G7ATL86cAD0FX5Sz8q44ELTXiW4UGXwl8EH6AYrfhVGbYD7pkDTYdvBgqPLAnTovx44NQ7dhlhC4ZwDlnhHM0JW/0qwxrwS5xrusQ9ds4RXICC9PoT19+8RGle/BoFofmnBkw5RrP8ZzQj/N0JzzXhWdpxGEiFXwsuQFH+cNf11xAzMISXB74/Kx6lGe6nXviw51QYSE6dDywAXZa+7QtuSpsw+d2fVduDpLk5mubudsM7pouhb4ILUJDudj6nin/SvDT/NL1FhRxGeuo8TYfve/AhsGQINDl1JxB4t8dmhDnw1JAoNcUF5Pk9/8aJn/kETU0t0GSIugFuhBh+JDF/qNtPtKgJ1BBvU1PKYTly3PfjJ589Tm9M5eji4V/wA+H9Pv5EE/1f9S9M4cKBWKiMUAAAAABJRU5ErkJggg=="}/>
                </div>
              )
            }</div>

          {/* Customer Comment */}
          <div className="w-full flex justify-center items-center p-2 gap-2">
              {
                [5,5,5].map((e,i)=><TestimonialCard key={i} star={e} customerName={`Customer `+(i+1)}/>)
              }
            </div>
          </div>  

        </div>
        :<></>
      }
    </div>

    </>)
}
