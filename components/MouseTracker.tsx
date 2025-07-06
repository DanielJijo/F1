"use client"

import React, { useEffect, useState } from "react";

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-white via-gray-200 to-white opacity-80 blur-sm animate-pulse"></div>
      <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 opacity-60 animate-spin" style={{ animationDuration: '3s' }}></div>
      <div className="absolute inset-2 w-6 h-6 rounded-full bg-transparent border-2 border-white opacity-90"></div>
    </div>
  );
} 