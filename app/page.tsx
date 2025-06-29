import Hero from "@/components/hero"
import Artists from "@/components/artists"
import Releases from "@/components/releases"
import About from "@/components/about"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ArtistsFull from "@/components/artists-full"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <Navigation />
      <Hero />
      <Artists />
      <ArtistsFull />
      <Releases />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
