import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll("span");

    // Reset any existing animations
    gsap.set(letters, { clearProps: "all" });

    // Initial state - letters are invisible and positioned randomly
    gsap.set(letters, {
      opacity: 0,
      y: gsap.utils.random(-100, 100),
      x: gsap.utils.random(-50, 50),
      rotation: gsap.utils.random(-180, 180),
      scale: 0,
    });

    // Animate letters into position
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      x: 0,
      rotation: 0,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
      stagger: {
        amount: 1.5,
        from: "start",
      },
      delay: 0.5,
    });

    // Add a subtle hover effect
    letters.forEach((letter) => {
      letter.addEventListener("mouseenter", () => {
        gsap.to(letter, {
          scale: 1.3,
          color: "#ef4444",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      letter.addEventListener("mouseleave", () => {
        gsap.to(letter, {
          scale: 1,
          color: "#ffffff",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });
  }, []);

  // Split text into three specific lines
  const lines = [
    "F1 IS SPORT,",
    "NOT AN",
    "ENTERTAINMENT"
  ];
  
  return (
    <h1
      ref={ref}
      className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-xl text-center leading-tight uppercase tracking-[0.1em] font-serif"
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => (
            <span
              key={`${lineIndex}-${charIndex}`}
              className="inline-block"
              style={{ 
                display: char === " " ? "inline" : "inline-block",
                marginRight: char === " " ? "0.2em" : "0.05em"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      ))}
    </h1>
  );
} 