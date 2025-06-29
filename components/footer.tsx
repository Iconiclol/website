"use client"

import { Music, Instagram, Twitter, Youtube, AirplayIcon as Spotify } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-950/90 backdrop-blur-xl border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-blue-500/20 backdrop-blur-sm rounded-lg border border-white/10">
                <Music className="h-5 w-5 text-blue-400" />
              </div>
              <span className="text-xl font-bold text-white">MIREN MEDIA</span>
            </div>
            <p className="text-blue-200/80 mb-6">
              Crafting the future of sound through innovative artistry and cutting-edge production.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Youtube, Spotify].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800/50 backdrop-blur-sm rounded-full flex items-center justify-center text-blue-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border border-white/10"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Artists", "Releases", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-blue-200/80 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {["Music Production", "Artist Development", "Distribution", "Marketing"].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-200/80 hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-blue-200/60 text-sm">© 2024 Miren Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
