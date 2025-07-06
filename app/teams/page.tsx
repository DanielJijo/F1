"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Settings } from "lucide-react"
import Link from "next/link"
import GooeyNav from "@/components/GooeyNav/GooeyNav"

interface Team {
  id: number
  name: string
  fullName: string
  color: string
  logo: string
  car: string
  drivers: {
    name: string
    number: string
    photo: string
  }[]
  engine: string
  powerUnit: string
  topSpeed: string
  weight: string
  position: number
  points: number
  wins: number
  podiums: number
  championships: number
  founded: number
  headquarters: string
}

const teams: Team[] = [
  {
    id: 1,
    name: "Red Bull Racing",
    fullName: "Oracle Red Bull Racing",
    color: "from-blue-600 to-blue-800",
    logo: "/placeholder.svg?height=100&width=100",
    car: "/placeholder.svg?height=300&width=600",
    drivers: [
      { name: "Max Verstappen", number: "1", photo: "/placeholder.svg?height=200&width=150" },
      { name: "Sergio Pérez", number: "11", photo: "/placeholder.svg?height=200&width=150" },
    ],
    engine: "Honda RBPT",
    powerUnit: "1.6L V6 Turbo Hybrid",
    topSpeed: "350 km/h",
    weight: "798 kg",
    position: 1,
    points: 860,
    wins: 21,
    podiums: 34,
    championships: 6,
    founded: 2005,
    headquarters: "Milton Keynes, UK",
  },
  {
    id: 2,
    name: "Mercedes",
    fullName: "Mercedes-AMG PETRONAS F1 Team",
    color: "from-green-500 to-green-700",
    logo: "/placeholder.svg?height=100&width=100",
    car: "/placeholder.svg?height=300&width=600",
    drivers: [
      { name: "Lewis Hamilton", number: "44", photo: "/placeholder.svg?height=200&width=150" },
      { name: "George Russell", number: "63", photo: "/placeholder.svg?height=200&width=150" },
    ],
    engine: "Mercedes-AMG",
    powerUnit: "1.6L V6 Turbo Hybrid",
    topSpeed: "345 km/h",
    weight: "798 kg",
    position: 2,
    points: 426,
    wins: 3,
    podiums: 11,
    championships: 8,
    founded: 2010,
    headquarters: "Brackley, UK",
  },
  {
    id: 3,
    name: "Ferrari",
    fullName: "Scuderia Ferrari",
    color: "from-red-600 to-red-800",
    logo: "/placeholder.svg?height=100&width=100",
    car: "/placeholder.svg?height=300&width=600",
    drivers: [
      { name: "Charles Leclerc", number: "16", photo: "/placeholder.svg?height=200&width=150" },
      { name: "Carlos Sainz", number: "55", photo: "/placeholder.svg?height=200&width=150" },
    ],
    engine: "Ferrari",
    powerUnit: "1.6L V6 Turbo Hybrid",
    topSpeed: "348 km/h",
    weight: "798 kg",
    position: 3,
    points: 552,
    wins: 5,
    podiums: 18,
    championships: 16,
    founded: 1950,
    headquarters: "Maranello, Italy",
  },
  {
    id: 4,
    name: "McLaren",
    fullName: "McLaren F1 Team",
    color: "from-orange-500 to-orange-700",
    logo: "/placeholder.svg?height=100&width=100",
    car: "/placeholder.svg?height=300&width=600",
    drivers: [
      { name: "Lando Norris", number: "4", photo: "/placeholder.svg?height=200&width=150" },
      { name: "Oscar Piastri", number: "81", photo: "/placeholder.svg?height=200&width=150" },
    ],
    engine: "Mercedes-AMG",
    powerUnit: "1.6L V6 Turbo Hybrid",
    topSpeed: "342 km/h",
    weight: "798 kg",
    position: 4,
    points: 516,
    wins: 3,
    podiums: 20,
    championships: 8,
    founded: 1966,
    headquarters: "Woking, UK",
  },
]

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Drivers", href: "/drivers" },
    { label: "Teams", href: "/teams" },
    { label: "Records", href: "/records" },
    { label: "Map", href: "/map" },
    { label: "Media", href: "/media" },
  ]

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
              2024 CONSTRUCTORS
            </h1>
          </div>
          <p className="text-xl text-gray-400">The teams behind the champions</p>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teams.map((team, index) => (
            <Card
              key={team.id}
              className="team-card group bg-gray-900/50 border-gray-800 backdrop-blur-sm cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gray-800/70 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setSelectedTeam(team)}
            >
              <CardContent className="p-0">
                {/* Team Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={team.car || "/placeholder.svg"}
                    alt={`${team.name} car`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${team.color} opacity-40`} />

                  {/* Position Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/70 text-white px-4 py-2 rounded-full font-bold">P{team.position}</div>
                  </div>

                  {/* Team Logo */}
                  <div className="absolute top-4 right-4">
                    <img
                      src={team.logo || "/placeholder.svg"}
                      alt={`${team.name} logo`}
                      className="w-16 h-16 bg-white/10 rounded-full p-2"
                    />
                  </div>

                  {/* Team Name */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-black text-white">{team.name}</h3>
                    <p className="text-sm text-white/80">{team.fullName}</p>
                  </div>
                </div>

                {/* Team Info */}
                <div className="p-6">
                  {/* Drivers */}
                  <div className="flex items-center gap-4 mb-6">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div className="flex gap-4">
                      {team.drivers.map((driver, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <img
                            src={driver.photo || "/placeholder.svg"}
                            alt={driver.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-semibold text-white">{driver.name}</div>
                            <div className="text-xs text-gray-400">#{driver.number}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-white">{team.points}</div>
                      <div className="text-xs text-gray-400">Points</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{team.wins}</div>
                      <div className="text-xs text-gray-400">Wins</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{team.podiums}</div>
                      <div className="text-xs text-gray-400">Podiums</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Team Detail Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-6xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative">
                <button
                  onClick={() => setSelectedTeam(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center text-xl"
                >
                  ×
                </button>

                {/* Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedTeam.car || "/placeholder.svg"}
                    alt={`${selectedTeam.name} car`}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedTeam.color} opacity-60`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-4xl font-black mb-2">{selectedTeam.fullName}</h2>
                    <p className="text-xl opacity-90">Founded {selectedTeam.founded}</p>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <img
                      src={selectedTeam.logo || "/placeholder.svg"}
                      alt={`${selectedTeam.name} logo`}
                      className="w-20 h-20 bg-white/10 rounded-full p-3"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Championship Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">{selectedTeam.championships}</div>
                      <div className="text-gray-400">Championships</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{selectedTeam.points}</div>
                      <div className="text-gray-400">2024 Points</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{selectedTeam.wins}</div>
                      <div className="text-gray-400">2024 Wins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">{selectedTeam.podiums}</div>
                      <div className="text-gray-400">2024 Podiums</div>
                    </div>
                  </div>

                  {/* Car Specs and Drivers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Car Specifications */}
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Settings className="w-6 h-6 text-blue-500" />
                          <h3 className="text-xl font-bold text-white">Car Specifications</h3>
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Engine:</span>
                            <span className="text-white font-semibold">{selectedTeam.engine}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Power Unit:</span>
                            <span className="text-white font-semibold">{selectedTeam.powerUnit}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Top Speed:</span>
                            <span className="text-white font-semibold">{selectedTeam.topSpeed}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Weight:</span>
                            <span className="text-white font-semibold">{selectedTeam.weight}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Headquarters:</span>
                            <span className="text-white font-semibold">{selectedTeam.headquarters}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Driver Lineup */}
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-6 h-6 text-green-500" />
                          <h3 className="text-xl font-bold text-white">Driver Lineup</h3>
                        </div>
                        <div className="space-y-4">
                          {selectedTeam.drivers.map((driver, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-3 bg-gray-700/50 rounded-lg">
                              <img
                                src={driver.photo || "/placeholder.svg"}
                                alt={driver.name}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                              <div className="flex-1">
                                <div className="text-lg font-semibold text-white">{driver.name}</div>
                                <div className="text-gray-400">Car #{driver.number}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
