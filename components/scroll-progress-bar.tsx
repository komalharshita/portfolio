"use client"

import { useEffect, useState } from "react"

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrollPercent)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent pointer-events-none">
      <div
        className="h-full shadow-lg transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(to right, #ff4da6, #ff1a7f)",
          boxShadow: "0 0 20px rgba(255, 77, 166, 0.5)",
        }}
      />
    </div>
  )
}
