"use client";

import { useState, useEffect } from "react";

export default function History() {
  const history = [
    {
      years: 2020,
      lore: "Pie Yeah Company makes its debut in the world.",
    },
    {
      years: 2021,
      lore: "Rebrands as CupU Company.",
    },
    {
      years: 2022,
      lore: "Introduces itself with a new identity as Game Bell Company.",
    },
    {
      years: 2023,
      lore: "Reborn as N0013 Company. A game studio crafted with a new recipe, specially for you, gamers.",
    },
  ];

  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) =>
        prevActive === history.length - 1 ? 0 : prevActive + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full px-4">
        <div className="w-full flex justify-evenly gap-2 *:rounded-full mb-2">
          {history.map((e, i) => (
            <button
              className={`w-full ${
                active == i ? "bg-green-600" : "bg-green-400"
              } hover:bg-green-600`}
              key={i}
              onClick={() => setActive(i)}
            >
              <h1 className="text-xs sm:text-base">{e.years}</h1>
            </button>
          ))}
        </div>
        {
          <div className="w-full overflow-visible perspective-1000 transform-style-3d h-[20vh] relative">
            {history.map((e, i) => (
              <div
                className={`bg-gradient-to-tl from-green-300 to-green-400  p-2 text-sm rounded-lg w-full text-black transition-all duration-300 ease-linear absolute h-full
                border-green-700 border-2 shadow-md overflow-auto
                ${
                  active > i
                    ? "-rotate-y-45 -translate-x-full scale-0"
                    : active < i
                    ? "rotate-y-45 translate-x-full scale-0"
                    : "rotate-y-0 translate-x-0"
                } `}
                key={i}
              >
                <p className="">{e.lore}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
}
