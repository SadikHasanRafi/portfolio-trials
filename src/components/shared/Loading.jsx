import { useEffect, useState } from "react";

export default function Loading({ onComplete }) {
  const [text, setText] = useState("");

  const fullText = "<Hello />";

  useEffect(() => {
    let index = 0;
    index++;
    let interval2 = null;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      if (index === fullText.length + 1) {
        interval2 = setTimeout(() => {
          onComplete();
        }, 700);
      }
      index++;
    }, 200);

    return () => {
      //   onComplete()
      clearInterval(interval2);
      console.log("loading complete");
      clearInterval(interval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-bold font-mono">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>

      <div className=" w-[200px] h-[2px] bg-gray-800 rounded overflow-hidden">
        <div className=" w-40% h-full bg-blue-600 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
}
