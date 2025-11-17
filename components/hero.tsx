"use client"

import { useState } from "react"

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  return (
    <section
      className="min-h-screen flex items-center justify-between relative overflow-hidden pt-20 px-8 md:px-16"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1a0a1a 50%, #000000 100%)",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient mesh overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #ff4da6/20, transparent)",
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transition: "all 0.3s ease-out",
          }}
        />
      </div>

      {/* Left side: Text content */}
      <div className="relative z-10 flex-1 max-w-xl">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white leading-tight">
            Komal Harshita
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            CSE Sophomore @ NMIET | Aspiring Business & Data Analyst
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/komalharshita/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#ff4da6] backdrop-blur-md text-white rounded-full font-semibold hover:bg-[#ff1a7f] transition-all duration-300 border border-[#ff4da6] hover:scale-105 text-center"
            >
              Connect on LinkedIn
            </a>
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>

      {/* Right side: Profile image */}
      <div className="relative z-10 flex-1 flex justify-center items-center">
        <div className="relative">
          <div className="relative w-64 h-64 rounded-3xl overflow-hidden border-2 border-[#ff4da6]/50 shadow-lg shadow-[#ff4da6]/30">
            <img
              src="/about-me-image.png"
              alt="Komal Harshita"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-[#ff4da6] px-6 py-3 rounded-xl border border-transparent opacity-85 bg-primary shadow-xl">
            <p className="font-bold text-sm text-white">McKinsey</p>
            <p className="text-xs text-white font-semibold">Forward Learner</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-0">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#ffb6c1]/20 to-[#d9a7e0]/20 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#ffd3b6]/15 to-[#ff4da6]/15 blur-3xl animate-bounce"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="text-white text-2xl">↓</div>
      </div>
    </section>
  )
}
