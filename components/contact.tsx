"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Music, User, LinkIcon, Heart, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    artistName: "",
    legalName: "",
    email: "",
    profileLink: "",
    proudestSong: "",
    aboutYourself: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create email body with all the information
    const emailBody = `
Artist Application - ${formData.artistName}

Artist Name: ${formData.artistName}
Legal Name: ${formData.legalName}
Email: ${formData.email}

Main Artist Profile: ${formData.profileLink}
Song I'm Most Proud Of: ${formData.proudestSong}

About Myself:
${formData.aboutYourself}
    `.trim()

    // Create mailto link
    const mailtoLink = `mailto:demos@mirenmedia.com?subject=Artist Application - ${formData.artistName}&body=${encodeURIComponent(emailBody)}`

    // Open email client
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 inline-block">
            <h2 className="text-4xl font-bold mb-4 text-white">Want to become apart of the team?</h2>
            <p className="text-lg text-blue-200/80 max-w-2xl mx-auto">Contact us with the following info.</p>
          </div>
        </div>

        {/* Join Miren Media Form */}
        <Card className="bg-slate-900/40 backdrop-blur-xl border-white/10">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">Join Miren Media</h3>
              <p className="text-blue-200/80 mb-6">
                To request to join Miren Media, please send an email with the following information:
              </p>

              {/* Requirements List */}
              <div className="text-left bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 mb-8">
                <ul className="space-y-4 text-blue-200/90">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Your main artist profile (e.g., Spotify, SoundCloud, YouTube)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Artist name</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Legal name</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Link to the song you're most proud of</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>A little about yourself</span>
                  </li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="artistName"
                    className="block text-sm font-medium text-blue-200 mb-2 flex items-center"
                  >
                    <Music className="h-4 w-4 mr-2" />
                    Artist Name *
                  </label>
                  <Input
                    id="artistName"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400"
                    placeholder="Your stage/artist name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="legalName" className="block text-sm font-medium text-blue-200 mb-2 flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Legal Name *
                  </label>
                  <Input
                    id="legalName"
                    name="legalName"
                    value={formData.legalName}
                    onChange={handleChange}
                    className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400"
                    placeholder="Your legal full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="profileLink" className="block text-sm font-medium text-blue-200 mb-2 flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2" />
                  Main Artist Profile *
                </label>
                <Input
                  id="profileLink"
                  name="profileLink"
                  type="url"
                  value={formData.profileLink}
                  onChange={handleChange}
                  className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400"
                  placeholder="https://spotify.com/artist/yourname or SoundCloud/YouTube link"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="proudestSong"
                  className="block text-sm font-medium text-blue-200 mb-2 flex items-center"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Song You're Most Proud Of *
                </label>
                <Input
                  id="proudestSong"
                  name="proudestSong"
                  type="url"
                  value={formData.proudestSong}
                  onChange={handleChange}
                  className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400"
                  placeholder="Link to your best/favorite track"
                  required
                />
              </div>

              <div>
                <label htmlFor="aboutYourself" className="block text-sm font-medium text-blue-200 mb-2">
                  A Little About Yourself *
                </label>
                <Textarea
                  id="aboutYourself"
                  name="aboutYourself"
                  value={formData.aboutYourself}
                  onChange={handleChange}
                  rows={6}
                  className="bg-slate-800/50 backdrop-blur-sm border-white/20 text-white placeholder-blue-200/50 focus:border-blue-400 resize-none"
                  placeholder="Tell us about your musical journey, influences, goals, and what makes you unique as an artist..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600/80 backdrop-blur-sm hover:bg-blue-500/80 text-white py-3 text-lg font-semibold rounded-full transition-all duration-300 border border-white/20"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Application Email
              </Button>

              <p className="text-center text-blue-200/60 text-sm">
                This will open your email client with all the information pre-filled
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
