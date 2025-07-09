"use client"

import MouseTracker from "./MouseTracker";
import { useIsMobile } from "@/hooks/use-mobile";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ClientMouseTracker() {
  const isMobile = useIsMobile();
  
  if (isMobile) {
    return null;
  }
  
  return <MouseTracker />;
} 