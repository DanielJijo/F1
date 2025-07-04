"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Zap, Target, Menu, X } from "lucide-react"
import DriversGrid from "./components/drivers-grid"
import Link from "next/link"
import AnimatedText from "@/components/AnimatedText"
import GooeyNav from "@/components/GooeyNav/GooeyNav"

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

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Drivers", href: "/drivers" },
    { label: "Teams", href: "/teams" },
    { label: "Records", href: "/records" },
    { label: "Map", href: "/map" },
    { label: "Media", href: "/media" },
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
      className="min-h-screen bg-black text-white overflow-x-hidden relative"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('/backgrounds/redbull.jpg')",
        backgroundSize: "110%",
        backgroundPosition: "center top -180px",
        backgroundRepeat: "no-repeat",
      }}
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

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-slide-up text-white drop-shadow-xl">
            <AnimatedText text="F1 IS A SPORT, NOT AN ENTERTAINMENT" />
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-12 animate-slide-up-delay drop-shadow-lg">Your Unofficial F1 Companion</p>

          <a href="/behind-the-wheels">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 animate-slide-up-delay-2 drop-shadow-lg"
            >
              Behind the Wheels
            </Button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
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
                className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/50 transition-all duration-500 transform hover:scale-105 animate-fade-in-up"
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

      {/* Drivers Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block w-full md:w-auto px-6 py-4 rounded-xl mx-auto mb-4 bg-red-600">
              <h2 className="text-4xl md:text-6xl font-black mb-0 text-white drop-shadow-lg">
                2024 DRIVERS
              </h2>
            </div>
            <p className="text-xl text-gray-400">Meet the gladiators of the grid</p>
          </div>

          <DriversGrid />
        </div>
      </section>
    </div>
  )
}
