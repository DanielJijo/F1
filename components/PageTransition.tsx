"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // These events are only available in next/router, not next/navigation
    // So we use a workaround for next/navigation: listen to push/replace
    // For now, we'll use a timer to simulate a fade on navigation
    const handleStart = () => setIsTransitioning(true);
    const handleComplete = () => setTimeout(() => setIsTransitioning(false), 400);

    // Listen to browser navigation
    window.addEventListener('next-page-transition', handleStart);
    window.addEventListener('next-page-transition-end', handleComplete);

    return () => {
      window.removeEventListener('next-page-transition', handleStart);
      window.removeEventListener('next-page-transition-end', handleComplete);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-500 bg-black ${
        isTransitioning ? "opacity-60" : "opacity-0"
      }`}
    />
  );
} 