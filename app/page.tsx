import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import GradientMeshBackground from "@/components/gradient-mesh-background"
import FloatingShapes from "@/components/floating-shapes"
import Certifications from "@/components/certifications"
import Volunteering from "@/components/volunteering"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="min-h-screen relative">
    <Navigation />
  
    <GradientMeshBackground />
    <FloatingShapes />

      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Volunteering />
      <Contact />
      <BackToTop />
    </main>
  )
}
