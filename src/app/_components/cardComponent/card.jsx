import Image from "next/image";
export default function Card({data}) {

    return(
        <div className="bg-white min-w-[200px] aspect-square flex justify-center items-center flex-col border-2 border-black group">
            <div className="w-full p-2 aspect-square flex justify-center items-center relative">
            <Image className="block" src={data.imageUrl} alt="" fill priority/>
            <div className="absolute bg-black text-white w-full group-hover:block text-center bottom-0
            transition-opacity opacity-0 group-hover:opacity-100
            ">
                <h1>{data.name+" Games"}</h1>
                <h1>{data.stats.HP+" $USD"}</h1>
            </div>
            </div>
        </div>
    )
}