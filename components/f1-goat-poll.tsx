"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Users, CheckCircle, Star, Zap } from "lucide-react"

interface PollOption {
  id: string
  name: string
  votes: number
  championships: number
  era: string
}

const pollOptions: PollOption[] = [
  {
    id: "schumacher",
    name: "Michael Schumacher",
    votes: 0,
    championships: 7,
    era: "1991-2012"
  },
  {
    id: "hamilton",
    name: "Lewis Hamilton",
    votes: 0,
    championships: 7,
    era: "2007-Present"
  },
  {
    id: "verstappen",
    name: "Max Verstappen",
    votes: 0,
    championships: 3,
    era: "2015-Present"
  },
  {
    id: "senna",
    name: "Ayrton Senna",
    votes: 0,
    championships: 3,
    era: "1984-1994"
  },
  {
    id: "vettel",
    name: "Sebastian Vettel",
    votes: 0,
    championships: 4,
    era: "2007-2022"
  },
  {
    id: "alonso",
    name: "Fernando Alonso",
    votes: 0,
    championships: 2,
    era: "2001-2024"
  }
]

export default function F1GoatPoll() {
  const [options, setOptions] = useState<PollOption[]>(pollOptions)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [hasVoted, setHasVoted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [votedDriver, setVotedDriver] = useState<PollOption | null>(null)
  const [totalVotes, setTotalVotes] = useState(0)

  // Load votes from localStorage on component mount
  useEffect(() => {
    const savedVotes = localStorage.getItem("f1-goat-poll-votes")
    
    if (savedVotes) {
      const parsedVotes = JSON.parse(savedVotes)
      setOptions(parsedVotes)
      setTotalVotes(parsedVotes.reduce((sum: number, option: PollOption) => sum + option.votes, 0))
    }
  }, [])

  const handleVote = () => {
    if (!selectedOption) return

    const selectedDriver = options.find(option => option.id === selectedOption)
    if (!selectedDriver) return

    const updatedOptions = options.map(option => 
      option.id === selectedOption 
        ? { ...option, votes: option.votes + 1 }
        : option
    )

    setOptions(updatedOptions)
    setTotalVotes(totalVotes + 1)
    setVotedDriver(selectedDriver)
    setShowCelebration(true)
    
    // Save to localStorage
    localStorage.setItem("f1-goat-poll-votes", JSON.stringify(updatedOptions))
  }

  const closeCelebration = () => {
    setShowCelebration(false)
    setHasVoted(true)
  }

  const resetPoll = () => {
    setHasVoted(false)
    setSelectedOption(null)
    setShowCelebration(false)
    setVotedDriver(null)
    localStorage.removeItem("f1-goat-poll-voted")
  }

  // Celebration Animation Component
  const CelebrationOverlay = () => (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in">
      {/* Confetti Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            <div className={`w-2 h-2 rounded-full ${
              ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500'][Math.floor(Math.random() * 5)]
            }`} />
          </div>
        ))}
      </div>

      {/* Main Celebration Content */}
      <div className="relative z-10 text-center space-y-8 animate-scale-in">
        {/* Trophy Icon */}
        <div className="animate-bounce">
          <Trophy className="w-32 h-32 text-yellow-500 mx-auto drop-shadow-2xl" />
        </div>

        {/* Driver Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-black text-white drop-shadow-2xl animate-pulse">
            {votedDriver?.name}
          </h1>
          <div className="flex items-center justify-center gap-4 text-2xl text-gray-300">
            <Star className="w-8 h-8 text-yellow-500 animate-spin" />
            <span>YOUR F1 GOAT!</span>
            <Star className="w-8 h-8 text-yellow-500 animate-spin" />
          </div>
        </div>

        {/* Driver Stats */}
        <div className="bg-gradient-to-r from-red-500/20 via-blue-500/20 to-green-500/20 border border-gray-600 rounded-xl p-6 max-w-md mx-auto">
          <div className="flex items-center justify-center gap-6 text-white">
            <div className="text-center">
              <div className="text-3xl font-bold">🏆</div>
              <div className="text-sm text-gray-300">{votedDriver?.championships} Titles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">📅</div>
              <div className="text-sm text-gray-300">{votedDriver?.era}</div>
            </div>
          </div>
        </div>

        {/* Celebration Message */}
        <div className="space-y-4">
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            "The greatest driver is not the one who wins the most, but the one who inspires the most."
          </p>
          <div className="flex items-center justify-center gap-2 text-yellow-500">
            <Zap className="w-6 h-6 animate-pulse" />
            <span className="text-lg font-semibold">Legendary Choice!</span>
            <Zap className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={closeCelebration}
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 text-lg font-semibold"
          >
            Continue
          </Button>
          <Button
            onClick={resetPoll}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700/50 px-8 py-3 text-lg"
          >
            Vote Again
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="w-6 h-6 text-yellow-500" />
            <CardTitle className="text-2xl font-bold text-white">
              Select Your F1 GOAT
            </CardTitle>
          </div>
          <p className="text-gray-400">
            Vote for the greatest Formula 1 driver of all time
          </p>
          {totalVotes > 0 && (
            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <Users className="w-4 h-4" />
              <span>{totalVotes} total votes</span>
            </div>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {!hasVoted ? (
            // Voting Interface
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {options.map((option) => (
                  <Button
                    key={option.id}
                    variant={selectedOption === option.id ? "default" : "outline"}
                    className={`h-auto p-4 flex flex-col items-start gap-2 transition-all duration-300 ${
                      selectedOption === option.id 
                        ? "bg-gradient-to-r from-red-600 to-red-700 border-red-600" 
                        : "bg-gray-800/50 border-gray-700 hover:bg-gray-700/50"
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="font-semibold text-left">{option.name}</span>
                      {selectedOption === option.id && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span>🏆 {option.championships} titles</span>
                      <span>📅 {option.era}</span>
                    </div>
                  </Button>
                ))}
              </div>
              
              <Button
                onClick={handleVote}
                disabled={!selectedOption}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-lg font-semibold"
              >
                Cast Your Vote
              </Button>
            </div>
          ) : (
            // Simple confirmation after celebration
            <div className="text-center space-y-4">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Vote Cast Successfully!</h3>
                <p className="text-gray-300 mb-4">
                  Thank you for participating in the F1 GOAT poll.
                </p>
                <Button
                  onClick={resetPoll}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700/50"
                >
                  Vote Again
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Celebration Overlay */}
      {showCelebration && <CelebrationOverlay />}
    </>
  )
} 