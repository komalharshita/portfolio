import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Works from "@/components/works"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import ScrollProgressBar from "@/components/scroll-progress-bar"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#250e2c]">
      <ScrollProgressBar />
      <Header />
      <Hero />
      <About />
      <Works />
      <Experience />
      <Contact />
      <BackToTop />
    </div>
  )
}
