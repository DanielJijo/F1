"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Zap, Flag, Clock, Target, Crown } from "lucide-react"
import Link from "next/link"

interface Record {
  title: string
  holder: string
  value: string
  year?: string
  icon: React.ReactNode
  color: string
}

const driverRecords: Record[] = [
  {
    title: "Most Race Wins",
    holder: "Lewis Hamilton",
    value: "103",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-yellow-500",
  },
  {
    title: "Most Championships",
    holder: "Lewis Hamilton",
    value: "7",
    icon: <Crown className="w-6 h-6" />,
    color: "text-purple-500",
  },
  {
    title: "Most Pole Positions",
    holder: "Lewis Hamilton",
    value: "104",
    icon: <Flag className="w-6 h-6" />,
    color: "text-green-500",
  },
  {
    title: "Most Fastest Laps",
    holder: "Michael Schumacher",
    value: "77",
    icon: <Zap className="w-6 h-6" />,
    color: "text-blue-500",
  },
  {
    title: "Most Podium Finishes",
    holder: "Lewis Hamilton",
    value: "197",
    icon: <Target className="w-6 h-6" />,
    color: "text-orange-500",
  },
  {
    title: "Youngest Race Winner",
    holder: "Max Verstappen",
    value: "18y 228d",
    year: "2016",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-red-500",
  },
]

const constructorRecords: Record[] = [
  {
    title: "Most Constructor Championships",
    holder: "Ferrari",
    value: "16",
    icon: <Crown className="w-6 h-6" />,
    color: "text-red-500",
  },
  {
    title: "Most Race Wins",
    holder: "Ferrari",
    value: "243",
    icon: <Trophy className="w-6 h-6" />,
    color: "text-yellow-500",
  },
  {
    title: "Most Consecutive Championships",
    holder: "Ferrari",
    value: "6",
    year: "1999-2004",
    icon: <Crown className="w-6 h-6" />,
    color: "text-purple-500",
  },
  {
    title: "Most Points in a Season",
    holder: "Red Bull Racing",
    value: "860",
    year: "2023",
    icon: <Target className="w-6 h-6" />,
    color: "text-blue-500",
  },
]

const trackRecords: Record[] = [
  {
    title: "Fastest Qualifying Lap",
    holder: "Lewis Hamilton",
    value: "1:13.078",
    year: "Monza 2020",
    icon: <Zap className="w-6 h-6" />,
    color: "text-purple-500",
  },
  {
    title: "Fastest Race Lap",
    holder: "Lewis Hamilton",
    value: "1:14.260",
    year: "Monza 2020",
    icon: <Clock className="w-6 h-6" />,
    color: "text-green-500",
  },
  {
    title: "Most Wins at Single Circuit",
    holder: "Lewis Hamilton",
    value: "8",
    year: "Silverstone",
    icon: <Flag className="w-6 h-6" />,
    color: "text-blue-500",
  },
  {
    title: "Longest Circuit",
    holder: "Spa-Francorchamps",
    value: "7.004 km",
    icon: <Target className="w-6 h-6" />,
    color: "text-orange-500",
  },
]

export default function RecordsPage() {
  const [activeTab, setActiveTab] = useState("drivers")

  const RecordCard = ({ record, index }: { record: Record; index: number }) => (
    <Card
      className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`${record.color} p-3 bg-gray-800 rounded-full`}>{record.icon}</div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white mb-1">{record.title}</h3>
            <p className="text-gray-400 text-sm">{record.holder}</p>
          </div>
        </div>

        <div className="text-center">
          <div className="text-3xl font-black text-white mb-1">{record.value}</div>
          {record.year && <div className="text-sm text-gray-400">{record.year}</div>}
        </div>
      </CardContent>
    </Card>
  )

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
              <Link href="/records" className="text-white font-semibold">
                Records
              </Link>
              <Link href="/map" className="text-gray-300 hover:text-white transition-colors duration-300">
                Map
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
              F1 RECORDS
            </h1>
          </div>
          <p className="text-xl text-gray-400">The greatest achievements in Formula 1 history</p>
        </div>
      </div>

      {/* Records Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900 border-gray-800 mb-8">
            <TabsTrigger value="drivers" className="data-[state=active]:bg-red-600 data-[state=active]:text-white">
              Drivers
            </TabsTrigger>
            <TabsTrigger
              value="constructors"
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              Constructors
            </TabsTrigger>
            <TabsTrigger value="tracks" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Tracks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="drivers" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Driver Records</h2>
              <p className="text-gray-400">The greatest individual achievements in F1</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {driverRecords.map((record, index) => (
                <RecordCard key={record.title} record={record} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="constructors" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Constructor Records</h2>
              <p className="text-gray-400">Team achievements and milestones</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {constructorRecords.map((record, index) => (
                <RecordCard key={record.title} record={record} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tracks" className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Track Records</h2>
              <p className="text-gray-400">Circuit records and lap times</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trackRecords.map((record, index) => (
                <RecordCard key={record.title} record={record} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Hall of Fame Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-yellow-600/20 to-yellow-800/20 border-yellow-600/30">
            <CardHeader>
              <CardTitle className="text-center text-3xl font-black text-yellow-500 flex items-center justify-center gap-3">
                <Crown className="w-8 h-8" />
                Hall of Fame
                <Crown className="w-8 h-8" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-black text-white mb-2">Lewis Hamilton</div>
                  <div className="text-yellow-500 font-semibold mb-2">7x World Champion</div>
                  <div className="text-gray-400">Most successful driver in F1 history</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">Michael Schumacher</div>
                  <div className="text-yellow-500 font-semibold mb-2">7x World Champion</div>
                  <div className="text-gray-400">The legendary Ferrari champion</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">Ayrton Senna</div>
                  <div className="text-yellow-500 font-semibold mb-2">3x World Champion</div>
                  <div className="text-gray-400">The greatest qualifier of all time</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
