"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background with blur */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-slate-900/50" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8 bg-slate-900/20 backdrop-blur-2xl rounded-3xl p-12 border border-white/10">
          <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            MIREN MEDIA
          </h1>
          <p className="text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">
            Crafting the future of sound through innovative artistry and cutting-edge production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500/80 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 border border-white/20"
            >
              {isPlaying ? <Pause className="mr-2 h-5 w-5" /> : <Play className="mr-2 h-5 w-5" />}
              {isPlaying ? "Pause" : "Play"} Latest
            </Button>

            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 bg-transparent backdrop-blur-sm"
            >
              Explore Music
            </Button>
          </div>
        </div>
      </div>

      {/* Simple scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
