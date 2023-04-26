"use client"
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const calculateWordCount = () => {
        const words = text.trim().split(" ");
        setWordCount(words.filter((word) => word !== "").length);
      };

      calculateWordCount();

      const intervalId = setInterval(calculateWordCount, 1000);

      return () => clearInterval(intervalId);
    }
  }, [text]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-5 md:p-x-24">
        <div className="relative flex items-center justify-center w-auto">
          {/* <span className="absolute text-green-500 font-bold text-5xl mb-5 font-body text-center -top-3 text-transparent drop-shadow-sm md:filter-none">Contador&nbsp;de&nbsp;Palavras</span> */}
          <h1 className="text-green-500 font-bold text-4xl mb-5 font-body text-center">Contador de Palavras</h1>
        </div>

        <textarea
          value={text}
          onChange={handleChange}
          rows={15}
          placeholder="Escreva aqui e veja quantas palavras seu texto tem"
          className="h-80 md:h-auto rounded-2xl p-4 md:p-8 text-xs md:text-xl text-neutral-200 bg-neutral-700 backdrop-opacity-10 backdrop-invert border-green-800 border w-5/6"
        />
        <p className="text-gray-200 font-bold font-body text-2xl mt-5">
          Total: <span className="text-green-400">{wordCount} palavras</span>
        </p>
      </main>
  );
}