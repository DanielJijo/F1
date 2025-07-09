"use client"

import React, { useState, useMemo, useCallback, Suspense, lazy } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Trophy, Zap } from "lucide-react"
import Link from "next/link"
import GooeyNav from "@/components/GooeyNav/GooeyNav"
import { navItems } from "@/lib/navItems"
import Image from "next/image";
import { FixedSizeGrid as Grid } from "react-window";

interface Race {
  id: number
  name: string
  country: string
  flag: string
  circuit: string
  date: string
  time: string
  status: "completed" | "upcoming" | "current"
  round: number
  winner?: string
  fastestLap?: string
  coordinates: [number, number]
  circuitImage: string
  countryImage: string
}

const races: Race[] = [
  {
    id: 1,
    name: "Bahrain Grand Prix",
    country: "Bahrain",
    flag: "🇧🇭",
    circuit: "Bahrain International Circuit",
    date: "2024-03-02",
    time: "15:00",
    status: "completed",
    round: 1,
    winner: "Max Verstappen",
    fastestLap: "1:31.447",
    coordinates: [26.0325, 50.5106],
    circuitImage: "/bahrain-circuit.jpg",
    countryImage: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 2,
    name: "Saudi Arabian Grand Prix",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    circuit: "Jeddah Corniche Circuit",
    date: "2024-03-09",
    time: "17:00",
    status: "completed",
    round: 2,
    winner: "Max Verstappen",
    fastestLap: "1:30.734",
    coordinates: [21.6319, 39.1044],
    circuitImage: "/saudi-circuit.jpg",
    countryImage: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 3,
    name: "Australian Grand Prix",
    country: "Australia",
    flag: "🇦🇺",
    circuit: "Albert Park Circuit",
    date: "2024-03-24",
    time: "05:00",
    status: "completed",
    round: 3,
    winner: "Carlos Sainz",
    fastestLap: "1:20.235",
    coordinates: [-37.8497, 144.968],
    circuitImage: "/australia/australia-circuit.jpg",
    countryImage: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 4,
    name: "Las Vegas Grand Prix",
    country: "United States",
    flag: "🇺🇸",
    circuit: "Las Vegas Strip Circuit",
    date: "2024-11-23",
    time: "22:00",
    status: "upcoming",
    round: 22,
    coordinates: [36.1699, -115.1398],
    circuitImage: "/las-vegas/las-vegas-circuit.jpg",
    countryImage: "/placeholder.svg?height=150&width=200",
  },
  {
    id: 5,
    name: "Abu Dhabi Grand Prix",
    country: "United Arab Emirates",
    flag: "🇦🇪",
    circuit: "Yas Marina Circuit",
    date: "2024-12-08",
    time: "13:00",
    status: "upcoming",
    round: 24,
    coordinates: [24.4672, 54.6031],
    circuitImage: "/abu-dhabi/abu-dhabi-circuit.jpg",
    countryImage: "/placeholder.svg?height=150&width=200",
  },
]

const RaceModal = lazy(() => Promise.resolve({
  default: ({ selectedRace, onClose, getStatusColor, getCountdown }: any) => (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity duration-300">
      <Card className="w-full max-w-4xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
        <CardContent className="p-0">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center text-xl"
            >
              ×
            </button>
            {/* Header */}
            <div className="relative h-64 overflow-hidden flex items-center justify-center bg-black">
              <Image
                src={selectedRace.circuitImage || "/placeholder.svg"}
                alt={selectedRace.circuit}
                className="w-full h-full object-contain p-4"
                width={800}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{selectedRace.flag}</span>
                  <h2 className="text-3xl font-black">{selectedRace.name}</h2>
                </div>
                <p className="text-xl opacity-90">{selectedRace.circuit}</p>
              </div>
            </div>
            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Race Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">Race Information</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Round:</span>
                      <span className="text-white font-semibold">{selectedRace.round}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date:</span>
                      <span className="text-white font-semibold">
                        {new Date(selectedRace.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Time:</span>
                      <span className="text-white font-semibold">{selectedRace.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status:</span>
                      <Badge className={`${getStatusColor(selectedRace.status)} text-white`}>
                        {selectedRace.status.charAt(0).toUpperCase() + selectedRace.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                </div>
                {/* Race Results */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {selectedRace.status === "completed" ? "Race Results" : "Race Preview"}
                  </h3>
                  {selectedRace.status === "completed" ? (
                    <div className="space-y-3">
                      {selectedRace.winner && (
                        <div className="flex items-center gap-3 p-3 bg-yellow-600/20 rounded-lg">
                          <Trophy className="w-6 h-6 text-yellow-500" />
                          <div>
                            <div className="text-white font-semibold">Winner</div>
                            <div className="text-yellow-500">{selectedRace.winner}</div>
                          </div>
                        </div>
                      )}
                      {selectedRace.fastestLap && (
                        <div className="flex items-center gap-3 p-3 bg-purple-600/20 rounded-lg">
                          <Zap className="w-6 h-6 text-purple-500" />
                          <div>
                            <div className="text-white font-semibold">Fastest Lap</div>
                            <div className="text-purple-500">{selectedRace.fastestLap}</div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center p-6 bg-blue-600/20 rounded-lg">
                      <Clock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-blue-500 mb-2">{getCountdown(selectedRace.date)}</div>
                      <div className="text-gray-400">until race start</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}));

export default function MapPage() {
  const [selectedRace, setSelectedRace] = useState<Race | null>(null)
  const [filter, setFilter] = useState<"all" | "completed" | "upcoming">("all")

  const filteredRaces = useMemo(() => races.filter((race) => filter === "all" || race.status === filter), [filter]);

  const getStatusColor = useCallback((status: Race["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-600"
      case "upcoming":
        return "bg-blue-600"
      case "current":
        return "bg-red-600"
      default:
        return "bg-gray-600"
    }
  }, []);

  const getCountdown = useCallback((dateString: string) => {
    const raceDate = new Date(dateString)
    const now = new Date()
    const diff = raceDate.getTime() - now.getTime()

    if (diff < 0) return "Race Completed"

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))

    return `${days}d ${hours}h`
  }, []);

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
      <div className="pt-16 pb-8 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block w-full md:w-auto px-6 py-4 rounded-xl mx-auto mb-4 bg-red-600">
            <h1 className="text-5xl md:text-7xl font-black mb-0 text-white drop-shadow-lg">
              2024 CALENDAR
            </h1>
          </div>
          <p className="text-xl text-gray-400">Formula 1 World Championship</p>
        </div>
      </div>

      {/* Interactive Map Placeholder */}
      <div className="container mx-auto px-4 py-8">
        <Card className="bg-gray-900/50 border-gray-800 mb-8">
          <CardContent className="p-8">
            <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-400 mb-2">Interactive World Map</h3>
                  <p className="text-gray-500">Click on race pins to view circuit details</p>
                </div>
              </div>

              {/* Simulated Map Pins */}
              <div
                className="absolute top-1/4 left-1/4 w-4 h-4 bg-red-500 rounded-full transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedRace(races[0])}
              />
              <div
                className="absolute top-1/3 right-1/3 w-4 h-4 bg-blue-500 rounded-full transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedRace(races[1])}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-green-500 rounded-full transition-transform duration-500 cursor-pointer"
                onClick={() => setSelectedRace(races[2])}
              />
            </div>
          </CardContent>
        </Card>

        {/* Filter Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "all" ? "bg-white text-black" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            All Races
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "completed" ? "bg-green-600 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter("upcoming")}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
              filter === "upcoming" ? "bg-blue-600 text-white" : "bg-gray-800 text-white hover:bg-gray-700"
            }`}
          >
            Upcoming
          </button>
        </div>

        {/* Race Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ height: 600 }}>
          <Grid
            columnCount={3}
            columnWidth={400}
            height={600}
            rowCount={Math.ceil(filteredRaces.length / 3)}
            rowHeight={350}
            width={1200}
          >
            {({ columnIndex, rowIndex, style }) => {
              const index = rowIndex * 3 + columnIndex;
              if (index >= filteredRaces.length) return null;
              const race = filteredRaces[index];
              return (
                <div style={style} key={race.id} className="p-2">
                  <Card
                    className="group bg-gray-900/50 border-gray-800 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:bg-gray-800/70"
                    onClick={() => setSelectedRace(race)}
                  >
                    <CardContent className="p-0">
                      {/* Race Image */}
                      <div className="relative h-48 overflow-hidden flex items-center justify-center bg-black">
                        <Image
                          src={race.circuitImage || "/placeholder.svg"}
                          alt={race.circuit}
                          className="w-full h-full object-contain p-2"
                          width={600}
                          height={300}
                          priority={index < 3}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        {/* Round Badge */}
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-black/70 text-white">Round {race.round}</Badge>
                        </div>
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4">
                          <Badge className={`${getStatusColor(race.status)} text-white`}>
                            {race.status.charAt(0).toUpperCase() + race.status.slice(1)}
                          </Badge>
                        </div>
                        {/* Race Info */}
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{race.flag}</span>
                            <h3 className="text-xl font-bold text-white">{race.name}</h3>
                          </div>
                          <p className="text-sm text-white/80">{race.circuit}</p>
                        </div>
                      </div>
                      {/* Race Details */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-400">{new Date(race.date).toLocaleDateString()}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-400">{race.time}</span>
                          </div>
                        </div>
                        {race.status === "completed" && race.winner && (
                          <div className="flex items-center gap-2 mb-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm text-white">Winner: {race.winner}</span>
                          </div>
                        )}
                        {race.status === "upcoming" && (
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-500">{getCountdown(race.date)}</div>
                            <div className="text-xs text-gray-400">until race start</div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            }}
          </Grid>
        </div>
      </div>

      {selectedRace && (
        <Suspense fallback={<div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center text-white">Loading...</div>}>
          <RaceModal selectedRace={selectedRace} onClose={() => setSelectedRace(null)} getStatusColor={getStatusColor} getCountdown={getCountdown} />
        </Suspense>
      )}
    </div>
  )
}
