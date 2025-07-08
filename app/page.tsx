"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Zap, Target, Menu, X } from "lucide-react"
import DriversGrid from "./components/drivers-grid"
import Link from "next/link"
import AnimatedText from "@/components/AnimatedText"
import GooeyNav from "@/components/GooeyNav/GooeyNav"
import TrueFocus from "@/components/TrueFocus/TrueFocus"
import { navItems } from "@/lib/navItems"
import drivers from "@/lib/drivers";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import GlitchText from "@/components/GlitchText/GlitchText";
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from "@/components/ui/drawer"

export default function F1Homepage() {
  const [showSplash, setShowSplash] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Total Races",
      value: "23",
      color: "text-red-500", // Ferrari red
      delay: "0s",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fastest Lap",
      value: "1:12.345",
      color: "text-blue-500", // Red Bull blue
      delay: "0.2s",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Most Wins",
      value: "Max Verstappen",
      color: "text-green-500", // Mercedes green
      delay: "0.4s",
    },
  ]

  if (showSplash) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-8xl md:text-9xl font-black text-white mb-4 animate-fade-in">F1</div>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-green-500 mx-auto animate-pulse"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden relative bg-[url('/backgrounds/redbull.jpg')] bg-cover bg-top md:bg-[length:110%] md:bg-[center_top_-180px] bg-no-repeat"
    >
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">
              <span className="text-red-500">F</span>
              <span className="text-blue-500">1</span>
              <span className="text-green-500">-X</span>
            </div>

            {/* Desktop Navigation - GooeyNav */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <GooeyNav items={navItems} />
            </div>

            {/* Mobile Dock Trigger */}
            <div className="md:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <button className="text-white">
                    <Menu className="w-6 h-6" />
                  </button>
                </DrawerTrigger>
                <DrawerContent className="pb-8 pt-4 px-4 bg-black border-t border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-2xl font-bold">
                      <span className="text-red-500">F</span>
                      <span className="text-blue-500">1</span>
                      <span className="text-green-500">-X</span>
                    </div>
                    <DrawerClose asChild>
                      <button className="text-white">
                        <X className="w-6 h-6" />
                      </button>
                    </DrawerClose>
                  </div>
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <DrawerClose asChild key={item.label}>
                        <Link
                          href={item.href}
                          className="block py-3 px-2 text-lg text-gray-300 hover:text-white rounded transition-colors duration-200"
                        >
                          {item.label}
                        </Link>
                      </DrawerClose>
                    ))}
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up text-white drop-shadow-xl">
            <div className="relative flex flex-col gap-2 items-center">
              <div className="relative">
                <TrueFocus sentence="F1 IS A SPORT NOT JUST ENTERTAINMENT" animationDuration={0.3} pauseBetweenAnimations={0.3} blurAmount={2} borderColor="red" glowColor="rgba(239,68,68,0.6)" />
                <div className="absolute inset-0">
                  <TrueFocus sentence="F1 IS A SPORT NOT JUST ENTERTAINMENT" animationDuration={0.3} pauseBetweenAnimations={0.3} blurAmount={2} borderColor="blue" glowColor="rgba(59,130,246,0.6)" randomMode={true} />
                </div>
              </div>
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-up-delay drop-shadow-lg">Your Unofficial F1 Companion</p>

          <div className="flex gap-4 justify-center">
          <a href="/behind-the-wheels">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-slide-up-delay-2 drop-shadow-lg"
            >
              Behind the Wheels
            </Button>
          </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={stat.title}
                className="stats-card bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`${stat.color} mb-4 flex justify-center animate-pulse`}>{stat.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{stat.value}</h3>
                  <p className="text-gray-400 text-lg">{stat.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="flex justify-center py-12">
        <ProfileCard 
          avatarUrl="/drivers/daniel-jijo.jpg" 
          name="DANIEL JIJO" 
          handle="danieljijo"
          contactText="Contact Me"
          onContactClick={() => window.open("https://github.com/DanielJijo", "_blank")}
        />
      </section>

      {/* Drivers Section */}
    </div>
  )
}
