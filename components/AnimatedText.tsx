import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function AnimatedText({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = ref.current.querySelectorAll("span");

    gsap.fromTo(
      letters,
      {
        scale: 2,
        opacity: 0,
        color: "#00e239",
      },
      {
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
        },
        scale: 1,
        opacity: 1,
        color: "#fff",
        stagger: 0.1,
        ease: "power2.out",
        duration: 1.5,
      }
    );
  }, []);

  return (
    <h1
      ref={ref}
      className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up text-white drop-shadow-xl text-center"
    >
      {text.split(/(SPORT, )/).map((part, idx) =>
        part === "SPORT, " ? (
          <span key={idx} className="inline-block">
            {part}
            <span className="hidden md:inline"><br/></span>
            <span className="inline md:hidden"> </span>
          </span>
        ) : (
          part.split("").map((char, i) =>
            char === " " ? (
              <span key={i + "-" + idx} className="inline-block">&nbsp;</span>
            ) : (
              <span key={i + "-" + idx} className="inline-block">{char}</span>
            )
          )
        )
      )}
    </h1>
  );
} 