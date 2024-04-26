import Link from "next/link";
import Card from "./_components/cardComponent/card";
import TestimonialCard from "./_components/cardComponent/testimonialCard";

export default async function Home() {
  const res = await fetch("https://pokeapi.deno.dev/pokemon?offset=0&limit=3")
  const products = await res.json()
  return (
    <main className="w-full h-max">
      <section id="Hero" className="w-full h-[300px] flex items-center px-2 flex-col md:flex-row">
        <div className="h-full w-[50%] flex justify-center items-center">
          <h1 className="font-black text-4xl text-center">N0013 Companny</h1>
        </div>
        <div className="h-full w-[75%] md:w-[50%] flex justify-center items-center">
          <h2 className="font-bold text-start">N0013 Company is a company dedicated to creating hardcore game for anyone.</h2>
        </div>
      </section>

        <section className="w-full border-y-2 border-green-400 bg-green-600 flex items-center justify-center py-4">
          <div className="w-[80%] text-justify text-white md:w-[50%] text-sm">
          <p>N0013 Company, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil quia, in expedita eum nisi asperiores minima. Culpa quos neque sint? Placeat at autem nulla inventore voluptates iure maxime itaque illo.</p>
          </div>
        </section>

      <section className="w-full flex flex-col items-center py-4">
        <h1 className="text-center w-full py-2 font-bold">Our Games:</h1>
        <div className="w-[80%] flex flex-row items-center justify-center gap-2 md:gap-5 flex-wrap">

          {
            products.map((e,i)=><Card data={e} key={i}/>)
          }

        </div>

        <a className="mt-4 py-2 px-3 border-2 border-black bg-green-500 hover:bg-green-400 hover:border-gray-600 hover:text-gray-800" href={"/games"}>See more...</a>
      </section>

      <section className="w-full border-y-2 border-green-400 bg-green-600 flex items-center justify-center py-4 flex-col gap-4">
          <h1 className="text-center font-bold py-4">Testimonial</h1>
          <div className="flex justify-evenly items-center flex-col md:flex-row gap-2">
          {
            [4,5,4].map((e,i)=><TestimonialCard key={i} star={e} customerName={`customer ${i+1}`}/>)
          }
          </div>
      </section>
    </main>
  );
}