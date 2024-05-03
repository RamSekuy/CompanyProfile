"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Humburger({ hrefList = [] }) {
  const pathname = usePathname();
  const [burger, setBurger] = useState(false);

  return (
    <div className={`flex flex-col items-end h-full w-max`}>
      <button
        className="md:hidden self-end h-full aspect-square relative flex justify-center items-center *:*:transition-all"
        onClick={() => setBurger(!burger)}
      >
        {!burger ? <>Open</> : <>Close</>}
      </button>

      <ul
        className={`md:h-full items-center flex-col md:flex-row md:flex md:gap-2 md:static bg-black md:bg-transparent
        ${!burger ? "hidden" : "flex absolute top-8 right-0 "}`}
      >
        {hrefList.map((e, i) => (
          <li className="h-full w-full text-white md:text-black" key={i}>
            <Link
              className={`w-full h-full text-end px-2 ${
                pathname == e.url ? "bg-gray-600 text-white" : ""
              } hover:bg-gray-600 hover:text-white flex justify-center items-center`}
              href={e.url}
            >
              <p className="w-full text-nowrap">{e.text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
