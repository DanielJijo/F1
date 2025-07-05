"use client"

import Link from "next/link"

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
            <div className="flex space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                Home
              </Link>
              <Link href="/drivers" className="text-gray-300 hover:text-white transition-colors duration-300">
                Drivers
              </Link>
              <Link href="/teams" className="text-gray-300 hover:text-white transition-colors duration-300">
                Teams
              </Link>
              <Link href="/records" className="text-gray-300 hover:text-white transition-colors duration-300">
                Records
              </Link>
              <Link href="/map" className="text-gray-300 hover:text-white transition-colors duration-300">
                Map
              </Link>
              <Link href="/media" className="text-white font-semibold">
                Media
              </Link>
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
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Best Onboard Overtake"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Best Onboard Overtake</h3>
              <p className="text-gray-400">Experience the thrill of F1's most spectacular overtakes from the driver's perspective.</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-gray-900/50 border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Top 10 Moments – 2024"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Top 10 Moments – 2024</h3>
              <p className="text-gray-400">Relive the most unforgettable moments from the 2024 Formula 1 season.</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="bg-gray-900/50 border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 lg:col-span-2 xl:col-span-1">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="F1 Pit Stops Explained"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">F1 Pit Stops Explained</h3>
              <p className="text-gray-400">Discover the science and precision behind Formula 1's lightning-fast pit stops.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 