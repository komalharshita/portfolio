"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 })
  const [buttonAttract, setButtonAttract] = useState({ left: 0, top: 0 })
  const [pageLoaded, setPageLoaded] = useState(false)
  const [typedText, setTypedText] = useState('')
  const [showFlicker, setShowFlicker] = useState(false)
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const trailIdRef = useRef(0)

  const fullText = 'Aspiring Data Analyst | CSE Sophomore'

  useEffect(() => {
    setPageLoaded(true)
  }, [])

  useEffect(() => {
    if (!pageLoaded) return

    let currentIndex = 0
    let isDeleting = false

    const typeInterval = setInterval(() => {
      if (currentIndex <= fullText.length && !isDeleting) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else if (currentIndex === fullText.length) {
        isDeleting = false
        setShowFlicker(true)
        clearInterval(typeInterval)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [pageLoaded])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePos({ x: e.clientX, y: e.clientY })

    if (Math.random() > 0.7) {
      setTrails((prev) => [
        ...prev.slice(-20),
        { x: e.clientX, y: e.clientY, id: trailIdRef.current++ },
      ])
    }

    setParallaxOffset({
      x: (x - rect.width / 2) * 0.002,
      y: (y - rect.height / 2) * 0.002,
    })

    if (buttonsRef.current) {
      const buttonRect = buttonsRef.current.getBoundingClientRect()
      const buttonCenterX = buttonRect.left + buttonRect.width / 2
      const buttonCenterY = buttonRect.top + buttonRect.height / 2
      const distX = (x + rect.left - buttonCenterX) * 0.05
      const distY = (y + rect.top - buttonCenterY) * 0.05
      setButtonAttract({ left: distX, top: distY })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-8 md:px-16 transition-all duration-500 ${
        pageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={pageLoaded ? { boxShadow: "inset 0 0 100px rgba(255,77,166,0.05)" } : {}}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-5 overflow-hidden">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              background: `
                linear-gradient(90deg, 
                  transparent 0%, 
                  rgba(255, 77, 166, 0.4) 25%, 
                  rgba(255, 26, 127, 0.3) 50%, 
                  rgba(255, 77, 166, 0.4) 75%, 
                  transparent 100%)
              `,
              animation: "auroraFlow 12s ease-in-out infinite",
              filter: "blur(60px)",
            }}
          />
        </div>

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
                radial-gradient(2px 2px at 90px 10px, #fff, rgba(255,77,166,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "200px 200px",
              animation: "twinkle 5s ease-in-out infinite",
            }}
          />
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{
              background: "radial-gradient(circle, #ff4da6, #d946ef, transparent)",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{
              background: "radial-gradient(circle, #d946ef, #ff4da6, transparent)",
            }}
          />
          <div
            className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full blur-3xl opacity-12"
            style={{
              background: "radial-gradient(circle, #ff1a7f, #d946ef, transparent)",
            }}
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={`bokeh-${i}`}
              className="absolute rounded-full blur-3xl opacity-20 pointer-events-none"
              style={{
                width: Math.random() * 100 + 50 + "px",
                height: Math.random() * 100 + 50 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                background: i % 2 === 0 ? "radial-gradient(circle, #ff4da6, transparent)" : "radial-gradient(circle, #d946ef, transparent)",
                animation: `float ${Math.random() * 8 + 6}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + "s",
              }}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#ff4da6]/8 via-[#d946ef]/5 to-transparent pointer-events-none" />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={`particle-${i}`}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                background: i % 3 === 0 ? "rgba(255, 77, 166, 0.6)" : "rgba(255, 255, 255, 0.4)",
                boxShadow: i % 3 === 0 ? "0 0 6px rgba(255, 77, 166, 0.4)" : "0 0 4px rgba(255, 255, 255, 0.2)",
                animation: `floatSlow ${Math.random() * 8 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 3 + "s",
                opacity: 0.5,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {trails.map((trail, index) => (
            <div
              key={trail.id}
              className="fixed rounded-full pointer-events-none"
              style={{
                left: trail.x,
                top: trail.y,
                width: "8px",
                height: "8px",
                background: index % 2 === 0 ? "rgba(255, 77, 166, 0.3)" : "rgba(200, 100, 200, 0.2)",
                filter: "blur(2px)",
                opacity: Math.max(0, 1 - index / 20),
                boxShadow: `0 0 ${6 + index}px ${index % 2 === 0 ? "rgba(255, 77, 166, 0.3)" : "rgba(200, 100, 200, 0.2)"}`,
                animation: "fadeOutTrail 0.8s ease-out forwards",
                animationDelay: "0s",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex items-center justify-between gap-12 py-36 pt-1">
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-4 tracking-wider relative">
            <span className="text-7xl"
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
            <span className="text-7xl"
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
            Portfolio
          </p>

          <p className="text-lg text-white/90 mb-12 font-light md:text-base h-8">
            <span
              style={{
                animation: showFlicker ? 'subtleFlicker 1.5s ease-in-out infinite' : 'none',
                display: 'inline-block',
              }}
            >
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4" ref={buttonsRef}>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm text-black bg-[#ff4da6] border-2 border-[#ff4da6] transition-all duration-300 shadow-lg w-fit relative group cta-button bg-destructive"
              style={{
                transform: `translate(${buttonAttract.left}px, ${buttonAttract.top}px)`,
                transition: "transform 0.1s ease-out, all 0.3s ease",
              }}
            >
              <span className="relative z-10">Download Resume</span>
            </a>

            <a
              href="https://www.linkedin.com/in/komalharshita/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-bold text-xs md:text-sm bg-[#ff4da6] border-2 border-[#ff4da6] transition-all duration-300 shadow-lg w-fit relative group cta-button text-primary"
              style={{
                transform: `translate(${buttonAttract.left}px, ${buttonAttract.top}px)`,
                transition: "transform 0.1s ease-out, all 0.3s ease",
              }}
            >
              <span className="relative z-10">Connect on LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative">
          <div
            className="relative w-72 h-72 md:w-80 md:h-80 transition-transform duration-200"
            style={{
              transform: `translate(${parallaxOffset.x * 100}px, ${parallaxOffset.y * 100}px)`,
            }}
          >
            <div className="absolute inset-0 rounded-4xl blur-2xl opacity-40 bg-[#ff4da6]/40" />

            <Image
              src="/images/design-mode/profileee.png"
              alt="Komal Harshita Avatar"
              fill
              className="object-cover opacity-90 relative z-10 rounded-none"
              priority
            />

            <div className="absolute -bottom-4 right-4 bg-white/25 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 shadow-xl z-20">
              <p className="text-xs font-extralight text-muted">McKinsey</p>
              <p className="text-xs font-semibold text-muted">Forward Learner</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to projects - static position */}
      <button
        onClick={() => scrollToSection("projects")}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-[#ff4da6] transition-colors flex flex-col items-center gap-2 animate-bounce-subtle"
      >
        <span className="text-sm tracking-widest animate-pulse-fade">EXPLORE</span>
        <span className="text-2xl animate-bounce-subtle" style={{ animationDelay: "0.2s" }}>↓</span>
      </button>

      <style jsx>{`
        @keyframes auroraFlow {
          0% {
            transform: translateY(0px) translateX(-100%);
            opacity: 0.03;
          }
          50% {
            transform: translateY(-40px) translateX(0px);
            opacity: 0.06;
          }
          100% {
            transform: translateY(0px) translateX(100%);
            opacity: 0.03;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-15px) translateX(10px);
          }
          50% {
            transform: translateY(-30px) translateX(0px);
          }
          75% {
            transform: translateY(-15px) translateX(-10px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes subtleFlicker {
          0%, 100% {
            text-shadow: 0px 2px 8px rgba(255, 77, 166, 0.4);
            opacity: 1;
          }
          50% {
            text-shadow: 0px 2px 8px rgba(255, 77, 166, 0.2);
            opacity: 0.95;
          }
        }

        @keyframes fadeOutTrail {
          from {
            opacity: 1;
            transform: scale(1);
          }
          to {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        @keyframes pageEnter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes animate-bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes animate-pulse-fade {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </section>
  )
}
