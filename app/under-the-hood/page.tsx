"use client"

import Link from "next/link";
import TiltedCard from "@/components/TiltedCard/TiltedCard";

export default function UnderTheHoodPage() {
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
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-full md:w-auto px-6 py-4 rounded-xl mx-auto mb-4 bg-red-600">
            <h1 className="text-5xl md:text-7xl font-black mb-0 text-white drop-shadow-lg">
              UNDER THE HOOD
            </h1>
          </div>
          <p className="text-xl text-gray-400">Interactive F1 Technology Showcase</p>
        </div>
      </div>

      {/* TiltedCard Showcase */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* F1 Engine */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">F1 Engine</h3>
            <TiltedCard
              imageSrc="/under-the-hood/engine.jpg"
              altText="F1 Engine"
              captionText="1.6L V6 Turbo Hybrid"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="F1 engines can reach over 15,000 RPM!"
            />
            <p className="text-gray-400 mt-4">
              Explore the cutting-edge hybrid power units that power modern Formula 1 cars.
            </p>
          </div>

          {/* Aerodynamics */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Aerodynamics</h3>
            <TiltedCard
              imageSrc="/under-the-hood/aerodynamics.jpg"
              altText="F1 Aerodynamics"
              captionText="Downforce & Drag"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="F1 cars generate more downforce than their own weight!"
            />
            <p className="text-gray-400 mt-4">
              Discover how F1 teams optimize airflow for maximum performance and grip.
            </p>
          </div>

          {/* Tire Technology */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Tire Technology</h3>
            <TiltedCard
              imageSrc="/under-the-hood/tires.jpg"
              altText="F1 Tires"
              captionText="Pirelli Compounds"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="F1 tires can reach temperatures over 100°C!"
            />
            <p className="text-gray-400 mt-4">
              Learn about the sophisticated tire compounds and strategies used in F1.
            </p>
          </div>

          {/* Brake System */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Brake System</h3>
            <TiltedCard
              imageSrc="/under-the-hood/brakes.jpg"
              altText="F1 Brakes"
              captionText="Carbon Fiber Discs"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="F1 brakes can go from 200 km/h to 0 in just 2 seconds!"
            />
            <p className="text-gray-400 mt-4">
              Explore the advanced braking systems that handle extreme deceleration forces.
            </p>
          </div>

          {/* Electronics */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Electronics</h3>
            <TiltedCard
              imageSrc="/under-the-hood/electronics.jpg"
              altText="F1 Electronics"
              captionText="ECU & Sensors"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="An F1 car has over 300 sensors collecting data!"
            />
            <p className="text-gray-400 mt-4">
              Dive into the sophisticated electronic systems that monitor and control every aspect.
            </p>
          </div>

          {/* Safety Systems */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-white mb-4">Safety Systems</h3>
            <TiltedCard
              imageSrc="/under-the-hood/safety.jpg"
              altText="F1 Safety"
              captionText="Halo & Monocoque"
              containerHeight="300px"
              imageHeight="300px"
              imageWidth="100%"
              scaleOnHover={1.05}
              rotateAmplitude={10}
              popupContent="The Halo device can withstand 12 tonnes of force!"
            />
            <p className="text-gray-400 mt-4">
              Understand the advanced safety features that protect drivers in extreme conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="container mx-auto px-4 py-8 text-center">
        <Link href="/" className="text-gray-300 hover:text-white text-lg font-semibold transition-colors duration-200">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
} 