"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"

const artists = [
  {
    name: "AURORA SYNTH",
    genre: "Electronic",
    image: "/images/artists/aurora-synth.jpg", // Updated path
    streams: "2.4M",
  },
  {
    name: "NEON PULSE",
    genre: "Future Bass",
    image: "/images/artists/neon-pulse.jpg", // Updated path
    streams: "1.8M",
  },
  {
    name: "VOID WALKER",
    genre: "Ambient",
    image: "/images/artists/void-walker.jpg", // Updated path
    streams: "950K",
  },
  {
    name: "CRYSTAL ECHO",
    genre: "Melodic",
    image: "/images/artists/crystal-echo.jpg", // Updated path
    streams: "3.1M",
  },
  {
    name: "DIGITAL STORM",
    genre: "Techno",
    image: "/images/artists/digital-storm.jpg", // Updated path
    streams: "1.2M",
  },
  {
    name: "LUNAR WAVES",
    genre: "Chillwave",
    image: "/images/artists/lunar-waves.jpg", // Updated path
    streams: "800K",
  },
  {
    name: "CYBER DRIFT",
    genre: "Synthpop",
    image: "/images/artists/cyber-drift.jpg", // Updated path
    streams: "2.1M",
  },
]

export default function Artists() {
  const [isHovering, setIsHovering] = useState(false)
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    setHoveredArtist(null)
  }

  const handleArtistClick = (artistName: string) => {
    const artistsSection = document.getElementById("artists-full")
    if (artistsSection) {
      artistsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="artists" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Artists</h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">Talented creators shaping the future of music</p>
          </div>
        </div>

        {/* Horizontal Scrolling Artists Row */}
        <div
          className="relative overflow-hidden rounded-2xl bg-slate-900/20 backdrop-blur-xl border border-white/10 p-6"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`flex gap-6 ${isHovering ? "animate-scroll-slow" : "animate-scroll"}`}
            style={{
              width: "max-content",
            }}
          >
            {/* Create multiple copies for seamless loop */}
            {[...artists, ...artists, ...artists].map((artist, index) => (
              <Card
                key={`${artist.name}-${index}`}
                className="group relative flex-shrink-0 w-64 h-80 bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredArtist(`${artist.name}-${index}`)}
                onMouseLeave={() => setHoveredArtist(null)}
                onClick={() => handleArtistClick(artist.name)}
              >
                <CardContent className="p-0 h-full">
                  <div className="relative h-full">
                    <img
                      src={artist.image || "/placeholder.svg"}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.currentTarget.src = "/placeholder.svg?height=300&width=300"
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />

                    {/* Play Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                        <Play className="h-5 w-5 text-white ml-0.5" />
                      </div>
                    </div>

                    {/* Artist Info Overlay */}
                    <div
                      className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 ${
                        hoveredArtist === `${artist.name}-${index}` ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2 text-center">{artist.name}</h3>
                      <p className="text-blue-300 text-lg mb-2">{artist.genre}</p>
                      <p className="text-blue-200/80 text-sm">{artist.streams} streams</p>
                      <div className="mt-4 px-4 py-2 bg-blue-600/80 backdrop-blur-sm rounded-full border border-white/20">
                        <span className="text-white text-sm font-medium">View Profile</span>
                      </div>
                    </div>

                    {/* Bottom gradient with basic info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-white font-semibold text-sm opacity-80">{artist.name}</h4>
                      <p className="text-blue-300 text-xs opacity-60">{artist.genre}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-blue-200/60 text-sm">
            {isHovering ? "Scrolling slowly • Click any artist to explore more" : "Auto-scrolling • Hover to slow down"}
          </p>
        </div>
      </div>
    </section>
  )
}
