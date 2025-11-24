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
    <main className="min-h-screen relative overflow-x-hidden">
    <Navigation />
  
    <GradientMeshBackground />
    <FloatingShapes />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
          <Hero />
          <About />
          <Projects />
          <Certifications />
          <Volunteering />
          <Contact />
          <BackToTop />
        </div>
        
    </main>
  )
}
