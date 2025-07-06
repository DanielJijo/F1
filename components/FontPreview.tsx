import React from "react";

export default function FontPreview() {
  const fontExamples = [
    {
      name: "Modern Sans (Current)",
      className: "text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.15em] font-sans",
      description: "Clean, modern sans-serif with maximum boldness"
    },
    {
      name: "Technical Mono",
      className: "text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.2em] font-mono",
      description: "Technical monospace font like F1 timing boards"
    },
    {
      name: "Elegant Serif",
      className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.1em] font-serif",
      description: "Classic serif font with elegant styling"
    },
    {
      name: "Racing Bold",
      className: "text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.25em] font-sans",
      description: "Extra wide spacing for racing feel"
    },
    {
      name: "Compact Impact",
      className: "text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.05em] font-sans",
      description: "Tight spacing for maximum impact"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-500">Font Preview Examples</h1>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {fontExamples.map((example, index) => (
          <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-red-400">{example.name}</h3>
            <p className="text-gray-400 mb-6">{example.description}</p>
            
            <div className="bg-black/30 p-6 rounded-lg">
              <h1 className={example.className}>
                F1 IS SPORT, NOT AN ENTERTAINMENT
              </h1>
            </div>
            
            <div className="mt-4 p-4 bg-gray-800/50 rounded text-sm font-mono">
              <p className="text-gray-300">Class: <span className="text-green-400">{example.className}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 