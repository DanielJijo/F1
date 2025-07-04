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
        stagger: 0.05,
        ease: "power2.out",
        duration: 0.7,
      }
    );
  }, []);

  return (
    <h1
      ref={ref}
      className="text-5xl md:text-7xl lg:text-8xl font-semibold opacity-80 mb-6 animate-slide-up text-gray-300 drop-shadow-xl text-center"
    >
      {(() => {
        // Custom split for three lines
        const line1 = "F1 IS A SPORT,";
        const line2 = "NOT AN";
        const line3 = "ENTERTAINMENT.";
        return [line1, line2, line3].map((line, idx) => (
          <span key={idx} className="inline-block">
            {line.split("").map((char, i) =>
              char === " " ? (
                <span key={i + "-" + idx} className="inline-block">&nbsp;</span>
              ) : (
                <span key={i + "-" + idx} className="inline-block">{char}</span>
              )
            )}
            {idx < 2 && (
              <>
                <span className="hidden md:inline"><br/></span>
                <span className="inline md:hidden"> </span>
              </>
            )}
          </span>
        ));
      })()}
    </h1>
  );
} 