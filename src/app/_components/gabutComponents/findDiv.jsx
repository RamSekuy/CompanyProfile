"use client";
import { useState, useRef, useEffect } from "react";

export default function FindDiv() {
  const [timerOn, setTimerOn] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef();
  const renderGame = Object.keys(Array.apply(0, Array(100)));
  const randomgenerator = () => Math.floor(Math.random() * renderGame.length);
  const [random, setRandom] = useState(randomgenerator());

  const start = () => {
    setRandom(randomgenerator());
    setTimerOn(true);
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1);
  };

  const stop = () => {
    setTimerOn(false);
    alert(time);
    setTime(0);
    clearInterval(intervalRef.current);
  };
  useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <div className="w-full h-[80vh] m-auto my-5 relative">
      <div
        className={`absolute top-0 bottom-0 right-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center ${
          timerOn ? "hidden" : ""
        }`}
      >
        <button
          onClick={start}
          className="bg-green-400 hover:bg-green-600 p-2 rounded-full"
        >
          Find button!
        </button>
      </div>
      <div className="w-full h-full grid grid-cols-10">
        {renderGame.map((e, i) =>
          i == random ? (
            <button
              key={i}
              className={`w-full h-full border-2 border-green-400 hover:bg-blue-500`}
              onClick={stop}
            >
              {" "}
            </button>
          ) : (
            <button
              key={i}
              className={`w-full h-full border-2 border-green-400`}
            >
              {" "}
            </button>
          )
        )}
      </div>
    </div>
  );
}
