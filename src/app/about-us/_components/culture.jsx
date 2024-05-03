"use client";

import { useState, useEffect } from "react";

export default function Culture() {
  const cultures = [
    {
      point: "Innovation Without Limits",
      text: "We embrace the idea that innovation is the key to creating extraordinary gaming experiences. We encourage boundless creativity, introducing new features, and creating games that have never been imagined before.",
    },
    {
      point: "Strong Community",
      text: "We build a strong community around our games, connecting gamers from various backgrounds and cultures. We value diversity and ensure that everyone feels accepted and appreciated in our community.",
    },
    {
      point: "Unmatched Quality",
      text: "We are committed to delivering unmatched quality in every aspect of our games, from graphic design to smooth gameplay. We believe that small details make a big difference in the gaming experience.",
    },
    {
      point: "Solid Teamwork",
      text: "We understand that solid team collaboration is the key to success. We encourage open communication, mutual respect, and working together to achieve common goals.",
    },
    {
      point: "Player Appreciation",
      text: "We highly value every player who plays our games. We listen to their feedback, interact with them directly, and continually strive to meet their expectations in every game we create.",
    },
    {
      point: "Commitment to Excellence",
      text: "We are not satisfied with 'good enough.' We always strive to improve ourselves, fix mistakes, and achieve higher standards of excellence in everything we do.",
    },
    {
      point: "Work-Life Balance",
      text: "We believe that maintaining a balance between personal life and work is key to well-being and productivity. We encourage employees to maintain this balance and offer the flexibility needed to achieve it.",
    },
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) =>
        prevActive === cultures.length - 1 ? 0 : prevActive + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="w-full px-4 overflow-hidden">
        <div className="w-full flex justify-evenly gap-2 *:rounded-full mb-2">
          {cultures.map((e, i) => (
            <button
              className={`w-full ${
                active == i ? "bg-green-600" : "bg-green-400"
              } hover:bg-green-600`}
              key={i}
              onClick={() => setActive(i)}
            >
              <h1 className="text-xs sm:text-base">{i + 1}</h1>
            </button>
          ))}
        </div>
        {
          <div
            className={`w-full overflow-visible perspective-1000 transform-style-3d relative h-[25vh]`}
          >
            {cultures.map((e, i) => (
              <div
                className={`bg-gradient-to-tl from-green-300 to-green-400  p-2 text-sm rounded-lg w-full text-black transition-all duration-300 ease-linear absolute h-full
                border-green-700 border-2 shadow-md x overflow-auto
                ${
                  active > i
                    ? "-rotate-y-45 -translate-x-full scale-0"
                    : active < i
                    ? "rotate-y-45 translate-x-full scale-0"
                    : "rotate-y-0 translate-x-0"
                } `}
                key={i}
              >
                <h1 className="text-2xl font-semibold my-2">{e.point}</h1>
                <p className="md:text-xl">{e.text}</p>
              </div>
            ))}
          </div>
        }
      </div>
    </>
  );
}
