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
        className="h-full bg-gradient-to-r from-[#ff4da6] to-[#ff1a7f] shadow-lg shadow-[#ff4da6]/50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  )
}
