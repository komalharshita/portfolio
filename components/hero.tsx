"use client"

import { useState } from "react"
import Image from "next/image"

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-8 md:px-16"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0">
        {/* Starfield background */}
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(2px 2px at 20px 30px, #eee, rgba(255,255,255,.2) 1px, transparent 1px),
                radial-gradient(2px 2px at 60px 70px, #fff, rgba(255,255,255,.3) 1px, transparent 1px),
                radial-gradient(1px 1px at 50px 50px, #fff, rgba(255,255,255,.2) 1px, transparent 1px),
                radial-gradient(1px 1px at 130px 80px, #fff, rgba(255,255,255,.2) 1px, transparent 1px),
                radial-gradient(2px 2px at 90px 10px, #fff, rgba(255,255,255,.3) 1px, transparent 1px)
              `,
              backgroundSize: "200px 200px",
              animation: "twinkle 5s ease-in-out infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{
              background: "radial-gradient(circle, #ff4da6, #d946ef, transparent)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-25"
            style={{
              background: "radial-gradient(circle, #d946ef, #ff4da6, transparent)",
            }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, #ff1a7f, #d946ef, transparent)",
            }}
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#ff4da6]/15 via-[#d946ef]/10 to-transparent pointer-events-none" />

        {/* Animated particle sparkles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/30"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 6 + 4}s ease-in-out infinite`,
                animationDelay: Math.random() * 2 + "s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between gap-12">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider relative">
            <span
              style={{
                textShadow: `
                  3px 3px 0px #ff4da6,
                  6px 6px 0px rgba(255,77,166,0.5),
                  -2px -2px 0px #ff1a7f,
                  4px 4px 10px rgba(255,77,166,0.3)
                `,
                letterSpacing: "0.15em",
              }}
            >
              KOMAL
            </span>
            <br />
            <span
              style={{
                textShadow: `
                  3px 3px 0px #ff4da6,
                  6px 6px 0px rgba(255,77,166,0.5),
                  -2px -2px 0px #ff1a7f,
                  4px 4px 10px rgba(255,77,166,0.3)
                `,
                letterSpacing: "0.15em",
              }}
            >
              HARSHITA
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-widest"
            style={{
              textShadow: "0px 2px 8px rgba(255,77,166,0.4)",
            }}
          >
            Portfolio 2025 — BLACKPINK Edition
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/90 mb-12 font-light">
            CSE Sophomore at NMIET, Pune | Aspiring Data Analyst
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="/resume.pdf"
              download
              className="px-10 py-4 rounded-full font-bold text-lg text-white bg-white/20 backdrop-blur-md border border-white/40 hover:border-[#ff4da6] hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ff4da6]/50 animate-float relative overflow-hidden group w-fit"
            >
              <span className="relative z-10">Download Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff4da6]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="https://www.linkedin.com/in/komalharshita/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 rounded-full font-bold text-lg text-black bg-[#ff4da6] backdrop-blur-md border border-[#ff4da6] hover:bg-[#ff1a7f] hover:border-[#ff1a7f] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#ff4da6]/50 animate-float relative overflow-hidden group w-fit"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="relative z-10">Connect on LinkedIn</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Avatar image */}
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Nov%2018%2C%202025%2C%2010_30_55%20AM-e4I5O7DElwryTgKjXM6SVqmzj4Fx4A.png"
              alt="Komal Harshita Avatar"
              fill
              className="object-cover rounded-full"
              priority
            />

            <div className="absolute -bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 shadow-xl hover:shadow-2xl transition-all hover:bg-white/30">
              <p className="font-bold text-sm text-white">McKinsey</p>
              <p className="text-xs text-white font-semibold">Forward Learner</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to projects - kept in same position */}
      <button
        onClick={() => scrollToSection("projects")}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-[#ff4da6] transition-colors flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-sm tracking-widest">EXPLORE</span>
        <span className="text-2xl">↓</span>
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}
