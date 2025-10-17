"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; left: number; delay: number }>>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated bubbles background */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-20 animate-pulse"
          style={{
            width: `${100 + bubble.id * 50}px`,
            height: `${100 + bubble.id * 50}px`,
            left: `${bubble.left}%`,
            top: `${bubble.id * 15}%`,
            background: `radial-gradient(circle at 30% 30%, #ff4da6, #d9a7e0)`,
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${bubble.delay}s`,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
      `}</style>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Sparkle decorations */}
        <div className="absolute -top-10 left-10 text-4xl opacity-60 animate-bounce">✨</div>
        <div
          className="absolute -bottom-10 right-10 text-4xl opacity-60 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          ✨
        </div>

        <h1
          className="text-6xl md:text-7xl font-serif font-bold mb-6 text-balance"
          style={{
            background: "linear-gradient(to right, #ff4da6, #ffd3b6, #d9a7e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Komal Harshita
        </h1>

        <p className="text-xl md:text-2xl text-[#8b4a6d] mb-4 font-light text-balance">
          CSE Sophomore at NMIET
        </p>

        <p className="text-lg md:text-xl text-[#8b4a6d] mb-8 font-light text-balance max-w-2xl mx-auto">
          Business & Data Analytics| Google Student Ambassador – Gemini Program| Creative Writer & Poet
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="px-8 py-3 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow"
            style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
          >
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-[#ff4da6] text-[#ff4da6] rounded-full font-semibold hover:bg-[#fff6f9] transition-all">
            Get In Touch
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-[#ff4da6] text-2xl">↓</div>
        </div>
      </div>
    </section>
  )
}
