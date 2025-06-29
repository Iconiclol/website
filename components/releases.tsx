"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Download, Pause } from "lucide-react"

const releases = [
  {
    title: "Midnight Protocol",
    artist: "AURORA SYNTH",
    cover: "/images/releases/midnight-protocol.jpg", // Updated path
    releaseDate: "2024-01-15",
    duration: "4:32",
    audioFile: "/audio/midnight-protocol.mp3", // Added audio path
  },
  {
    title: "Digital Dreams",
    artist: "NEON PULSE",
    cover: "/images/releases/digital-dreams.jpg", // Updated path
    releaseDate: "2024-01-08",
    duration: "3:45",
    audioFile: "/audio/digital-dreams.mp3", // Added audio path
  },
  {
    title: "Void Transmission",
    artist: "VOID WALKER",
    cover: "/images/releases/void-transmission.jpg", // Updated path
    releaseDate: "2023-12-22",
    duration: "6:18",
    audioFile: "/audio/void-transmission.mp3", // Added audio path
  },
  {
    title: "Crystal Cascade",
    artist: "CRYSTAL ECHO",
    cover: "/images/releases/crystal-cascade.jpg", // Updated path
    releaseDate: "2023-12-15",
    duration: "5:02",
    audioFile: "/audio/crystal-cascade.mp3", // Added audio path
  },
]

export default function Releases() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null)
  const [audioElements, setAudioElements] = useState<{ [key: string]: HTMLAudioElement }>({})

  const handlePlayPause = (releaseTitle: string, audioFile: string) => {
    // Stop any currently playing audio
    Object.values(audioElements).forEach((audio) => {
      audio.pause()
      audio.currentTime = 0
    })

    if (currentlyPlaying === releaseTitle) {
      // If clicking the same track, stop it
      setCurrentlyPlaying(null)
    } else {
      // Play the new track
      if (!audioElements[releaseTitle]) {
        const audio = new Audio(audioFile)
        audio.addEventListener("ended", () => setCurrentlyPlaying(null))
        setAudioElements((prev) => ({ ...prev, [releaseTitle]: audio }))
        audio.play()
      } else {
        audioElements[releaseTitle].play()
      }
      setCurrentlyPlaying(releaseTitle)
    }
  }

  return (
    <section id="releases" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h2 className="text-4xl font-bold mb-4 text-white">Latest Releases</h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">Fresh tracks from our talented artists</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {releases.map((release) => (
            <Card
              key={release.title}
              className="group bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:bg-slate-800/50"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={release.cover || "/placeholder.svg"}
                    alt={release.title}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=250&width=250"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => handlePlayPause(release.title, release.audioFile)}
                  >
                    <div className="w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      {currentlyPlaying === release.title ? (
                        <Pause className="h-6 w-6 text-white" />
                      ) : (
                        <Play className="h-6 w-6 text-white ml-0.5" />
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 bg-slate-900/60 backdrop-blur-sm rounded-full px-3 py-1 border border-white/10">
                    <span className="text-xs text-white">{release.duration}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{release.title}</h3>
                  <p className="text-blue-300 text-sm mb-2">{release.artist}</p>
                  <p className="text-blue-200/60 text-xs mb-4">{new Date(release.releaseDate).toLocaleDateString()}</p>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      onClick={() => handlePlayPause(release.title, release.audioFile)}
                      className="flex-1 bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500/80 text-white border border-white/20"
                    >
                      {currentlyPlaying === release.title ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </>
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 bg-transparent"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
