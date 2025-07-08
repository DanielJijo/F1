"use client"

import Link from "next/link"
import GooeyNav from "@/components/GooeyNav/GooeyNav"
import { navItems } from "@/lib/navItems"

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-red-500">F</span>
              <span className="text-blue-500">1</span>
              <span className="text-green-500">-X</span>
            </Link>
            
            {/* Desktop Navigation - GooeyNav */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <GooeyNav items={navItems} />
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-full md:w-auto px-6 py-4 rounded-xl mx-auto mb-4 bg-red-600">
            <h1 className="text-5xl md:text-7xl font-black mb-0 text-white drop-shadow-lg">
              MEDIA
            </h1>
          </div>
          <p className="text-xl text-gray-400">F1's Greatest Moments & Insights</p>
        </div>
      </div>

      {/* Media Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="bg-gray-900/50 border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a
              href="https://youtu.be/Z_LmiQlT9oE"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-gray-800 relative"
            >
              <img
                src="https://img.youtube.com/vi/Z_LmiQlT9oE/hqdefault.jpg"
                alt="Hamilton’s Furious Comeback: Overtaking Legends in São Paulo🔥"
                className="w-full h-full object-cover transition hover:opacity-80"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="80" height="56" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" rx="115" fill="#FF0000" />
                  <polygon points="205,154 205,358 371,256" fill="#fff" />
                </svg>
              </span>
            </a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Hamilton’s Furious Comeback: Overtaking Legends in São Paulo🔥</h3>
              <p className="text-gray-400">From the back of the grid to pure dominance—Hamilton rewrites history with every overtake!</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-gray-900/50 border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <a
              href="https://youtu.be/auXfAHHNSFo"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-gray-800 relative"
            >
              <img
                src="https://img.youtube.com/vi/auXfAHHNSFo/hqdefault.jpg"
                alt="Senna’s Monaco Masterclass: Lightning‑Fast 1990 Charge ⚡️"
                className="w-full h-full object-cover transition hover:opacity-80"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="80" height="56" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" rx="115" fill="#FF0000" />
                  <polygon points="205,154 205,358 371,256" fill="#fff" />
                </svg>
              </span>
            </a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Senna’s Monaco Masterclass: Lightning‑Fast 1990 Charge ⚡️</h3>
              <p className="text-gray-400">Pure Ayrton magic as he unleashes unmatched speed and precision around Monaco’s tight streets—legendary F1 on‑board footage capturing true greatness.</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-gray-900/50 border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 lg:col-span-2 xl:col-span-1">
            <a
              href="https://youtu.be/daWr9xnkKS4"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-video bg-gray-800 relative"
            >
              <img
                src="https://img.youtube.com/vi/daWr9xnkKS4/hqdefault.jpg"
                alt="Epic Drift Frenzy: Precision Meets Mayhem 🚗🔥"
                className="w-full h-full object-cover transition hover:opacity-80"
              />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="80" height="56" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="512" height="512" rx="115" fill="#FF0000" />
                  <polygon points="205,154 205,358 371,256" fill="#fff" />
                </svg>
              </span>
            </a>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Epic Drift Frenzy: Precision Meets Mayhem 🚗🔥</h3>
              <p className="text-gray-400">Heart-pounding on‑track action as drivers unleash smoke‑filled drifts with breathtaking skill and intensity!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 