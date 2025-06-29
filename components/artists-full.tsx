"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play, Users } from "lucide-react"

const artists = [
  {
    name: "AURORA SYNTH",
    genre: "Electronic",
    image: "/placeholder.svg?height=300&width=300",
    streams: "2.4M",
    description: "Ethereal soundscapes meet cutting-edge production",
  },
  {
    name: "NEON PULSE",
    genre: "Future Bass",
    image: "/placeholder.svg?height=300&width=300",
    streams: "1.8M",
    description: "High-energy beats that define the underground scene",
  },
  {
    name: "VOID WALKER",
    genre: "Ambient",
    image: "/placeholder.svg?height=300&width=300",
    streams: "950K",
    description: "Atmospheric journeys through digital realms",
  },
  {
    name: "CRYSTAL ECHO",
    genre: "Melodic",
    image: "/placeholder.svg?height=300&width=300",
    streams: "3.1M",
    description: "Emotional drops that resonate with the soul",
  },
  {
    name: "DIGITAL STORM",
    genre: "Techno",
    image: "/placeholder.svg?height=300&width=300",
    streams: "1.2M",
    description: "Driving rhythms that electrify the dance floor",
  },
  {
    name: "LUNAR WAVES",
    genre: "Chillwave",
    image: "/placeholder.svg?height=300&width=300",
    streams: "800K",
    description: "Dreamy textures for late-night contemplation",
  },
]

export default function ArtistsFull() {
  return (
    <section id="artists-full" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Artists</h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">
              Discover the talented individuals behind the music
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <Card
              key={artist.name}
              className="group bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:bg-slate-800/50"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={artist.image || "/placeholder.svg"}
                    alt={artist.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-blue-600/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20">
                      <Play className="h-6 w-6 text-white ml-0.5" />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-900/60 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 border border-white/10">
                    <Users className="h-3 w-3 text-blue-400" />
                    <span className="text-xs text-white">{artist.streams}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{artist.name}</h3>
                  <p className="text-blue-300 text-sm mb-3">{artist.genre}</p>
                  <p className="text-blue-200/80 text-sm leading-relaxed">{artist.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
