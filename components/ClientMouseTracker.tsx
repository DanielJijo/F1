"use client"

import MouseTracker from "./MouseTracker";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ClientMouseTracker() {
  return <MouseTracker />;
} 