import { useState, useEffect } from "react";
import bg from "./assets/bg.webp";

interface Data {
  title: string;
  date: string;
  explanation: string;
  url: string;
  hdurl: string;
}

function App() {
  const [data, setData] = useState<Data>();
  const [view, setView] = useState(false);

  useEffect(() => {
    fetch("/Data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div className="h-svh w-screen relative overflow-hidden">
        <img
          src={data?.hdurl || bg}
          alt=""
          className="object-cover min-h-full "
        />

        {data && (
          <div
            className="absolute z-10 transition-all duration-200 ease-in bottom-2 left-2 p-4 backdrop-blur bg-gradient-to-tr shadow-sm hover:shadow-lg from-slate-500/40 to-zinc-300/30 rounded-xl text-white space-y-2 tracking-wider max-w-3xl text-balance pb-6"
            onClick={() => {
              setView(!view);
            }}
          >
            <h1 className="font-bold space text-2xl">{data.title}</h1>
            <p className="space text-sm opacity-75">{data.date}</p>
            <p
              className={`grotesk text-sm ${
                !view ? "line-clamp-2" : "line-clamp-none"
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
