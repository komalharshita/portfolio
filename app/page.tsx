import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Works from "@/components/works"
import Process from "@/components/Process";
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import BackToTop from "@/components/back-to-top"
import Footer from "@/components/Footer"  

export default function Home() {
  return (
    <div className="min-h-screen bg-[#250e2c]">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Works />
      < Process />
      <Experience />
      <Contact />
      <Footer />      
      <BackToTop />
    </div>
  )
}
