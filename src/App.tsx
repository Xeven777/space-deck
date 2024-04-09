import { useState } from "react";
import bg from "./assets/bg.webp";
import datajson from "./Data.json";

interface Data {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl: string;
}

function App() {
  const [view, setView] = useState(false);
  const data = datajson as Data;
  return (
    <>
      <div className="h-svh w-screen relative overflow-hidden flex items-center justify-center bg-slate-800">
        <img
          src={data?.hdurl || bg}
          alt="background Image"
          className="object-cover h-full z-10"
        />
        <img
          src={data?.hdurl || bg}
          fetchPriority="low"
          alt="background Image"
          className="object-cover h-full absolute min-w-full blur-md"
        />
        {data && (
          <div
            className="absolute z-10 transition-all duration-200 ease-in bottom-2 left-0 sm:left-2 p-4 backdrop-blur bg-gradient-to-tr shadow-sm hover:shadow-lg from-slate-500/40 to-zinc-300/30 rounded-xl text-white space-y-2 tracking-wider max-w-3xl text-balance pb-6"
            onClick={() => {
              setView(!view);
            }}
          >
            <h1 className="font-bold space text-md sm:text-2xl ">
              {data.title}
            </h1>
            <p className="space text-sm opacity-75">{data.date}</p>
            <p
              className={`grotesk  text-sm ${
                !view
                  ? "line-clamp-2"
                  : "line-clamp-none max-h-96 overflow-y-scroll"
              }`}
            >
              {data.explanation}
            </p>
            {!view && (
              <div className="relative">
                <span className="underline text-xs absolute top-0 right-0">
                  Tap to read more..
                </span>
              </div>
            )}
          </div>
        )}
        {!data && (
          <div className="absolute z-10 bottom-2 left-2 p-4 backdrop-blur bg-gradient-to-tr shadow-sm from-slate-500/40 to-zinc-500/30 rounded-xl text-white space-y-2 tracking-wider max-w-3xl text-balance">
            <h1 className="font-bold space text-5xl">OOps. Error</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
