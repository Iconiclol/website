"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Music, Headphones, Award, Globe } from "lucide-react"

const stats = [
  { icon: Music, label: "Artists", value: "25+" },
  { icon: Headphones, label: "Monthly Streams", value: "5M+" },
  { icon: Award, label: "Releases", value: "100+" },
  { icon: Globe, label: "Countries", value: "50+" },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h2 className="text-4xl font-bold mb-8 text-white">About Miren Media</h2>
            <div className="space-y-6 text-blue-100/90 text-lg leading-relaxed">
              <p>
                Miren Media is a forward-thinking record label dedicated to discovering and nurturing exceptional talent
                in electronic music.
              </p>
              <p>
                We specialize in creating innovative soundscapes that push creative boundaries while connecting artists
                with global audiences.
              </p>
              <p>
                Our mission is to provide artists with the tools, support, and platform they need to create
                groundbreaking music.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <Card
                key={stat.label}
                className="bg-slate-900/40 backdrop-blur-xl border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:bg-slate-800/50"
              >
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-white/10 w-fit mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-200/80 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
