import React from "react";

export default function AnimatedText({ text }: { text: string }) {
  return (
    <h1
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.1em] font-serif"
    >
      {text}
    </h1>
  );
} 