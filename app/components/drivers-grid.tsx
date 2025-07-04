"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Zap, Target, Flag, Calendar, MapPin } from "lucide-react"

interface Driver {
  id: number
  name: string
  team: string
  teamColor: string
  number: string
  nationality: string
  age: number
  championships: number
  raceWins: number
  podiums: number
  points: number
  fastestLaps: number
  photo: string
  teamLogo: string
}

const drivers: Driver[] = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
    teamColor: "from-blue-600 to-blue-800",
    number: "1",
    nationality: "Netherlands",
    age: 26,
    championships: 3,
    raceWins: 54,
    podiums: 99,
    points: 575,
    fastestLaps: 29,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Mercedes",
    teamColor: "from-green-500 to-green-700",
    number: "44",
    nationality: "United Kingdom",
    age: 39,
    championships: 7,
    raceWins: 103,
    podiums: 197,
    points: 234,
    fastestLaps: 33,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Charles Leclerc",
    team: "Ferrari",
    teamColor: "from-red-600 to-red-800",
    number: "16",
    nationality: "Monaco",
    age: 26,
    championships: 0,
    raceWins: 5,
    podiums: 29,
    points: 308,
    fastestLaps: 9,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Lando Norris",
    team: "McLaren",
    teamColor: "from-orange-500 to-orange-700",
    number: "4",
    nationality: "United Kingdom",
    age: 24,
    championships: 0,
    raceWins: 1,
    podiums: 13,
    points: 279,
    fastestLaps: 4,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 5,
    name: "Carlos Sainz",
    team: "Ferrari",
    teamColor: "from-red-600 to-red-800",
    number: "55",
    nationality: "Spain",
    age: 30,
    championships: 0,
    raceWins: 3,
    podiums: 23,
    points: 244,
    fastestLaps: 3,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 6,
    name: "George Russell",
    team: "Mercedes",
    teamColor: "from-green-500 to-green-700",
    number: "63",
    nationality: "United Kingdom",
    age: 26,
    championships: 0,
    raceWins: 1,
    podiums: 12,
    points: 192,
    fastestLaps: 2,
    photo: "/placeholder.svg?height=400&width=300",
    teamLogo: "/placeholder.svg?height=60&width=60",
  },
]

export default function DriversGrid() {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null)
  const [hoveredDriver, setHoveredDriver] = useState<number | null>(null)

  return (
    <div className="relative">
      {/* Drivers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {drivers.map((driver, index) => (
          <Card
            key={driver.id}
            className={`group relative overflow-hidden bg-gray-900/50 border-gray-800 backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-gray-800/70 animate-fade-in-up ${
              selectedDriver?.id === driver.id ? "ring-2 ring-white/50" : ""
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedDriver(selectedDriver?.id === driver.id ? null : driver)}
            onMouseEnter={() => setHoveredDriver(driver.id)}
            onMouseLeave={() => setHoveredDriver(null)}
          >
            <CardContent className="p-0">
              {/* Driver Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={driver.photo || "/placeholder.svg"}
                  alt={driver.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${driver.teamColor} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                />

                {/* Driver Number */}
                <div className="absolute top-4 right-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${driver.teamColor} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                  >
                    {driver.number}
                  </div>
                </div>

                {/* Team Logo */}
                <div className="absolute top-4 left-4">
                  <img
                    src={driver.teamLogo || "/placeholder.svg"}
                    alt={`${driver.team} logo`}
                    className="w-10 h-10 opacity-80"
                  />
                </div>

                {/* Hover Overlay */}
                {hoveredDriver === driver.id && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300">
                    <div className="text-center text-white">
                      <Trophy className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-semibold">View Stats</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Driver Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{driver.name}</h3>
                  <Badge variant="outline" className="text-gray-400 border-gray-600">
                    {driver.nationality}
                  </Badge>
                </div>
                <p
                  className={`text-sm font-semibold bg-gradient-to-r ${driver.teamColor} bg-clip-text text-transparent mb-4`}
                >
                  {driver.team}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-white">{driver.raceWins}</div>
                    <div className="text-xs text-gray-400">Wins</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{driver.podiums}</div>
                    <div className="text-xs text-gray-400">Podiums</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">{driver.points}</div>
                    <div className="text-xs text-gray-400">Points</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Driver Stats Modal */}
      {selectedDriver && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <Card className="w-full max-w-4xl bg-gray-900 border-gray-700 max-h-[90vh] overflow-y-auto">
            <CardContent className="p-0">
              <div className="relative">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDriver(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
                >
                  ×
                </button>

                {/* Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={selectedDriver.photo || "/placeholder.svg"}
                    alt={selectedDriver.name}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${selectedDriver.teamColor} opacity-60`} />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h2 className="text-3xl font-black mb-2">{selectedDriver.name}</h2>
                    <p className="text-lg opacity-90">{selectedDriver.team}</p>
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${selectedDriver.teamColor} flex items-center justify-center text-white font-black text-2xl shadow-lg`}
                    >
                      {selectedDriver.number}
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-400">Age</span>
                      </div>
                      <div className="text-2xl font-bold text-white">{selectedDriver.age}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                        <span className="text-gray-400">Nation</span>
                      </div>
                      <div className="text-lg font-semibold text-white">{selectedDriver.nationality}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Trophy className="w-5 h-5 text-yellow-500 mr-2" />
                        <span className="text-gray-400">Titles</span>
                      </div>
                      <div className="text-2xl font-bold text-yellow-500">{selectedDriver.championships}</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Zap className="w-5 h-5 text-purple-500 mr-2" />
                        <span className="text-gray-400">Fastest Laps</span>
                      </div>
                      <div className="text-2xl font-bold text-purple-500">{selectedDriver.fastestLaps}</div>
                    </div>
                  </div>

                  {/* Detailed Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <Flag className="w-8 h-8 text-green-500 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">{selectedDriver.raceWins}</div>
                        <div className="text-gray-400">Race Wins</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <Trophy className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">{selectedDriver.podiums}</div>
                        <div className="text-gray-400">Podium Finishes</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                      <CardContent className="p-6 text-center">
                        <Target className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-white mb-1">{selectedDriver.points}</div>
                        <div className="text-gray-400">Championship Points</div>
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
