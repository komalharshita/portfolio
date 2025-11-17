"use client"

import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect">
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
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[#8b4a6d] hover:text-[#ff4da6] transition-colors font-medium text-card-foreground"
            >
              {item}
            </a>
          ))}
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
