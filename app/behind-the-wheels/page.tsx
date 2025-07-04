"use client"

import Link from "next/link";
import { motion } from "framer-motion";

export default function BehindTheWheelsPage() {
  return (
    <div className="min-h-screen text-white w-full" style={{ background: 'transparent' }}>
      {/* Back Link */}
      <div className="absolute top-6 left-6 z-20">
        <Link href="/" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200">
          &larr; Return to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div
          className="fixed inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/behind-the-wheels-bg.jpg')" }}
        />
        {/* Overlay for readability */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/50 via-black/50 to-green-900/50 z-10" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-20 text-5xl md:text-7xl lg:text-8xl font-extrabold text-center text-white drop-shadow-xl tracking-tight font-mono"
        >
          Behind the Wheels
        </motion.h1>
      </section>

      {/* Content Sections */}
      <main className="w-full flex flex-col gap-16 py-16 px-2 md:px-8" style={{ background: 'transparent' }}>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-6xl mx-auto bg-black/50 rounded-2xl shadow-2xl px-2 md:px-16 py-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white text-center drop-shadow-lg font-sans">Why F1 is Not in India?</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed text-center drop-shadow">
            India hosted F1 from 2011 to 2013 at the Buddh International Circuit. Despite the world-class track, the sport struggled due to high taxation, lack of government support, and complicated logistics. F1 was taxed as entertainment, not sport — making operations expensive and unsustainable.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-6xl mx-auto bg-black/50 rounded-2xl shadow-2xl px-2 md:px-16 py-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-white text-center drop-shadow-lg font-sans">Can F1 Return to India?</h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed text-center drop-shadow">
            Yes — the fanbase is growing. Young talent like Jehan Daruvala and the success of MotoGP Bharat prove there's demand. For a return, India needs policy clarity, better motorsport recognition, and strong sponsor or government backing.
          </p>
        </motion.section>
      </main>
    </div>
  );
} 