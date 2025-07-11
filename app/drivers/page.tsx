"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Trophy, Zap, Target, Flag } from "lucide-react"
import Link from "next/link"
import F1GoatPoll from "@/components/f1-goat-poll"
import GooeyNav from "@/components/GooeyNav/GooeyNav"
import { navItems } from "@/lib/navItems"

interface Driver {
  id: number
  slug: string
  name: string
  team: string
  teamColor: string
  number: string
  nationality: string
  flag: string
  age: number
  championships: number
  raceWins: number
  podiums: number
  points: number
  position: number
  fastestLaps: number
  photo: string
  helmet: string
  car: string
}

const drivers: Driver[] = [
  {
    id: 1,
    slug: "verstappen",
    name: "Max Verstappen",
    team: "Red Bull Racing",
    teamColor: "from-blue-600 to-blue-800",
    number: "1",
    nationality: "Netherlands",
    flag: "🇳🇱",
    age: 26,
    championships: 3,
    raceWins: 54,
    podiums: 99,
    points: 575,
    position: 1,
    fastestLaps: 29,
    photo: "/drivers/max-verstappen.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/max-verstappen-car.jpg",
  },
  {
    id: 2,
    slug: "perez",
    name: "Sergio Pérez",
    team: "Red Bull Racing",
    teamColor: "from-blue-600 to-blue-800",
    number: "11",
    nationality: "Mexico",
    flag: "🇲🇽",
    age: 34,
    championships: 0,
    raceWins: 6,
    podiums: 39,
    points: 285,
    position: 2,
    fastestLaps: 3,
    photo: "/drivers/sergio-perez.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/sergio-perez-car.jpg",
  },
  {
    id: 3,
    slug: "hamilton",
    name: "Lewis Hamilton",
    team: "Mercedes",
    teamColor: "from-green-500 to-green-700",
    number: "44",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    age: 39,
    championships: 7,
    raceWins: 103,
    podiums: 197,
    points: 234,
    position: 3,
    fastestLaps: 33,
    photo: "/drivers/hamilton.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/hamilton-car.jpg",
  },
  {
    id: 4,
    slug: "russell",
    name: "George Russell",
    team: "Mercedes",
    teamColor: "from-green-500 to-green-700",
    number: "63",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    age: 26,
    championships: 0,
    raceWins: 1,
    podiums: 12,
    points: 192,
    position: 4,
    fastestLaps: 2,
    photo: "/drivers/russell.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/russell-car.jpg",
  },
  {
    id: 5,
    slug: "leclerc",
    name: "Charles Leclerc",
    team: "Ferrari",
    teamColor: "from-red-600 to-red-800",
    number: "16",
    nationality: "Monaco",
    flag: "🇲🇨",
    age: 26,
    championships: 0,
    raceWins: 5,
    podiums: 29,
    points: 308,
    position: 5,
    fastestLaps: 9,
    photo: "/drivers/leclerc.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/leclerc-car.jpg",
  },
  {
    id: 6,
    slug: "sainz",
    name: "Carlos Sainz",
    team: "Ferrari",
    teamColor: "from-red-600 to-red-800",
    number: "55",
    nationality: "Spain",
    flag: "🇪🇸",
    age: 30,
    championships: 0,
    raceWins: 3,
    podiums: 23,
    points: 244,
    position: 6,
    fastestLaps: 3,
    photo: "/drivers/sainz.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/sainz-car.jpg",
  },
  {
    id: 7,
    slug: "norris",
    name: "Lando Norris",
    team: "McLaren",
    teamColor: "from-orange-500 to-orange-700",
    number: "4",
    nationality: "United Kingdom",
    flag: "🇬🇧",
    age: 24,
    championships: 0,
    raceWins: 1,
    podiums: 13,
    points: 279,
    position: 7,
    fastestLaps: 4,
    photo: "/drivers/norris.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/norris-car.jpg",
  },
  {
    id: 8,
    slug: "piastri",
    name: "Oscar Piastri",
    team: "McLaren",
    teamColor: "from-orange-500 to-orange-700",
    number: "81",
    nationality: "Australia",
    flag: "🇦🇺",
    age: 23,
    championships: 0,
    raceWins: 2,
    podiums: 7,
    points: 237,
    position: 8,
    fastestLaps: 1,
    photo: "/drivers/oscar-piastri.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/oscar-piastri-car.jpg",
  },
  {
    id: 9,
    slug: "alonso",
    name: "Fernando Alonso",
    team: "Aston Martin",
    teamColor: "from-blue-600 to-blue-800",
    number: "14",
    nationality: "Spain",
    flag: "🇪🇸",
    age: 42,
    championships: 2,
    raceWins: 32,
    podiums: 102,
    points: 1055,
    position: 9,
    fastestLaps: 12,
    photo: "/drivers/alonso.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/alonso-car.jpg",
  },
  {
    id: 10,
    slug: "schumacher",
    name: "Michael Schumacher",
    team: "Mercedes",
    teamColor: "from-green-500 to-green-700",
    number: "7",
    nationality: "Germany",
    flag: "🇩🇪",
    age: 55,
    championships: 7,
    raceWins: 91,
    podiums: 155,
    points: 1365,
    position: 10,
    fastestLaps: 13,
    photo: "/drivers/schumacher.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/schumacher-car.jpg",
  },
  {
    id: 11,
    slug: "senna",
    name: "Ayrton Senna",
    team: "McLaren",
    teamColor: "from-blue-600 to-blue-800",
    number: "11",
    nationality: "Brazil",
    flag: "🇧🇷",
    age: 34,
    championships: 3,
    raceWins: 41,
    podiums: 80,
    points: 1054,
    position: 11,
    fastestLaps: 13,
    photo: "/drivers/senna.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/senna-car.jpg",
  },
  {
    id: 12,
    slug: "vettel",
    name: "Sebastian Vettel",
    team: "Aston Martin",
    teamColor: "from-blue-600 to-blue-800",
    number: "5",
    nationality: "Germany",
    flag: "🇩🇪",
    age: 35,
    championships: 4,
    raceWins: 53,
    podiums: 122,
    points: 1225,
    position: 12,
    fastestLaps: 11,
    photo: "/drivers/vettel.jpg",
    helmet: "/placeholder.svg?height=200&width=200",
    car: "/car/vettel-car.jpg",
  },
]

export default function DriversPage() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedTeam, setSelectedTeam] = useState("all")

  const teams = Array.from(new Set(drivers.map((d) => d.team)))

  const filteredDrivers = drivers.filter((driver) => {
    const matchesSearch = driver.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesTeam = selectedTeam === "all" || driver.team === selectedTeam
    return matchesSearch && matchesTeam
  })

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
              2024 DRIVERS
            </h1>
          </div>
          <p className="text-xl text-gray-400">The gladiators of the grid</p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search drivers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <Select value={selectedTeam} onValueChange={setSelectedTeam}>
            <SelectTrigger className="w-full md:w-48 bg-gray-800 border-gray-700 text-white">
              <SelectValue placeholder="Filter by team" />
            </SelectTrigger>
            <SelectContent className="bg-gray-800 border-gray-700">
              <SelectItem value="all">All Teams</SelectItem>
              {teams.map((team) => (
                <SelectItem key={team} value={team}>
                  {team}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* F1 GOAT Poll */}
        <div className="mb-12">
          <F1GoatPoll />
        </div>

        {/* Drivers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDrivers.map((driver, index) => (
            <Card
              key={driver.id}
              className="group bg-gray-800/50 border border-gray-700 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gray-700/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedDriver(driver)}
            >
              <CardContent className="p-0">
                {/* Driver Photo */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={driver.photo}
                    alt={driver.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={
                      (driver.slug === "lando-norris" || driver.slug === "carlos-sainz")
                        ? { objectPosition: "center 60%" }
                        : {}
                    }
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${driver.teamColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                  />

                  {/* Position Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                      P{driver.position}
                    </div>
                  </div>

                  {/* Driver Number */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${driver.teamColor} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                    >
                      {driver.number}
                    </div>
                  </div>
                </div>

                {/* Driver Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{driver.name}</h3>
                    <span className="text-2xl">{driver.flag}</span>
                  </div>
                  <p
                    className={`text-sm font-semibold bg-gradient-to-r ${driver.teamColor} bg-clip-text text-transparent mb-4`}
                  >
                    {driver.team}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">{driver.points}</div>
                      <div className="text-xs text-gray-400">Points</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-white">{driver.raceWins}</div>
                      <div className="text-xs text-gray-400">Wins</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Driver Detail Modal */}
      {selectedDriver && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-6xl bg-gray-800 border border-gray-700 max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative">
                <button
                  onClick={() => setSelectedDriver(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center text-xl"
                >
                  ×
                </button>

                {/* Header */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={selectedDriver.car || "/placeholder.svg"}
                    alt={`${selectedDriver.team} car`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-4 mb-2">
                      <h2 className="text-4xl font-black">{selectedDriver.name}</h2>
                      <span className="text-3xl">{selectedDriver.flag}</span>
                    </div>
                    <p className="text-xl opacity-90">{selectedDriver.team}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">{selectedDriver.championships}</div>
                      <div className="text-gray-400">Championships</div>
                    </div>
                    <div className="text-center">
                      <Flag className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">{selectedDriver.raceWins}</div>
                      <div className="text-gray-400">Race Wins</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">{selectedDriver.podiums}</div>
                      <div className="text-gray-400">Podiums</div>
                    </div>
                    <div className="text-center">
                      <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white">{selectedDriver.fastestLaps}</div>
                      <div className="text-gray-400">Fastest Laps</div>
                    </div>
                  </div>

                  {/* Helmet and Additional Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                      <img
                        src={selectedDriver.helmet || "/placeholder.svg"}
                        alt={`${selectedDriver.name} helmet`}
                        className="w-48 h-48 mx-auto mb-4 object-contain"
                      />
                      <h3 className="text-xl font-bold text-white mb-2">Driver Helmet</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Age:</span>
                        <span className="text-white font-semibold">{selectedDriver.age}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Driver Number:</span>
                        <span className="text-white font-semibold">#{selectedDriver.number}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Current Position:</span>
                        <span className="text-white font-semibold">P{selectedDriver.position}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">2024 Points:</span>
                        <span className="text-white font-semibold">{selectedDriver.points}</span>
                      </div>
                    </div>
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
