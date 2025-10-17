import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"
import GradientMeshBackground from "@/components/gradient-mesh-background"
import FloatingShapes from "@/components/floating-shapes"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <GradientMeshBackground />
      <FloatingShapes />

      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
