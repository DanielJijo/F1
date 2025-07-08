"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

interface PageTransitionProps {
  children: React.ReactNode
  skipTransitionFor?: string[]
}

const STRIPE_DURATION = 0.4; // seconds (medium-fast)

// F1 car SVG, scalable to parent height
const F1CarSVG = () => (
  <svg viewBox="0 0 96 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ height: '100%', width: 'auto', display: 'block' }}>
    <rect x="3" y="33" width="18" height="9" rx="3" fill="#222" />
    <rect x="75" y="33" width="18" height="9" rx="3" fill="#222" />
    <rect x="15" y="24" width="66" height="15" rx="6" fill="#e11d27" stroke="#fff" strokeWidth="2" />
    <rect x="42" y="15" width="12" height="12" rx="3" fill="#fff" />
    <rect x="45" y="9" width="6" height="9" rx="2.25" fill="#e11d27" />
    <rect x="27" y="30" width="42" height="6" rx="3" fill="#222" />
    <circle cx="15" cy="42" r="6" fill="#111" stroke="#fff" strokeWidth="2" />
    <circle cx="81" cy="42" r="6" fill="#111" stroke="#fff" strokeWidth="2" />
  </svg>
);

export default function PageTransition({ children, skipTransitionFor = [] }: PageTransitionProps) {
  const pathname = usePathname();
  const [showStripe, setShowStripe] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [pendingChildren, setPendingChildren] = useState<React.ReactNode | null>(null);

  // Detect route change
  useEffect(() => {
    // If the current pathname is in skipTransitionFor, just swap content instantly
    if (skipTransitionFor.includes(pathname)) {
      setDisplayChildren(children);
      setShowStripe(false);
      setPendingChildren(null);
      return;
    }
    setPendingChildren(children);
    setShowStripe(true);
  }, [pathname, children, skipTransitionFor]);

  // After stripe covers, swap content and animate out
  useEffect(() => {
    if (showStripe) {
      const timer = setTimeout(() => {
        if (pendingChildren) setDisplayChildren(pendingChildren);
        setShowStripe(false);
      }, STRIPE_DURATION * 1000);
      return () => clearTimeout(timer);
    }
  }, [showStripe, pendingChildren]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {showStripe && (
          <motion.div
            key="racing-stripe"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: STRIPE_DURATION, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
            style={{ background: "black" }}
          >
            <div className="relative w-full h-32 md:h-40 flex items-center">
              {/* Red stripe */}
              <div className="absolute left-0 top-0 w-full h-full bg-red-600 shadow-2xl rounded-b-2xl" style={{ boxShadow: "0 8px 32px 0 #dc2626" }} />
              {/* F1 car at the leading edge */}
              <motion.div
                className="absolute"
                style={{ left: 'calc(100% - 6rem)', top: 0, height: '100%' }}
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                exit={{ x: 0 }}
              >
                <F1CarSVG />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={showStripe ? "pointer-events-none select-none opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {displayChildren}
      </div>
    </div>
  );
} 