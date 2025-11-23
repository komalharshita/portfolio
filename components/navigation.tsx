"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [navGlow, setNavGlow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            setNavGlow(true)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 glass-effect transition-all duration-300 ${
      navGlow ? "shadow-[0_0_30px_rgba(255,77,166,0.4)]" : ""
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-sidebar-foreground">
        <Link
          href="#"
          className="text-2xl font-serif font-bold opacity-100 shadow-none text-zinc-50 bg-sidebar-foreground"
          style={{
            background: "linear-gradient(to right, #ff4da6, #ffd3b6, #d9a7e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          The Gilded Girl   
        </Link>

        <div className="hidden md:flex gap-8">
          {["About", "Projects", "Contact"].map((item) => {
            const lower = item.toLowerCase();

            return (
              <a
                key={item}
                href={`#${lower}`}
                className={`
                  nav-swipe 
                  transition-all duration-300 font-medium 
                  ${activeSection === lower ? "nav-active" : "text-[#b78aa3] hover:text-[#ff4da6]"}
                `}
              >
                {item}
                </a>
              );
            })}

        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#ff4da6]">
          ☰
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur p-4 md:hidden">
            {["About", "Projects", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-[#8b4a6d] hover:text-[#ff4da6]">
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
