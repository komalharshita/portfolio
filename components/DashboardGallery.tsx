"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export default function DashboardGallery() {
  // your existing filenames in public root (spaces + parentheses)
  const dashboards = [
    "/dashboard  (1).png",
    "/dashboard  (2).png",
    "/dashboard  (3).png",
    "/dashboard  (4).png",
    "/dashboard  (5).png",
  ]

  const containerRef = useRef<HTMLDivElement | null>(null)
  const [maxDrag, setMaxDrag] = useState(0)

  // compute max drag only if you later add drag; this keeps layout responsive
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const calc = () => {
      const scrollWidth = el.scrollWidth
      const clientWidth = el.clientWidth
      setMaxDrag(Math.max(0, scrollWidth - clientWidth))
    }
    calc()
    window.addEventListener("resize", calc)
    return () => window.removeEventListener("resize", calc)
  }, [dashboards.length])

  // small inline SVG fallback (data URI) so you don't need an extra file
  const fallbackDataUri =
    'data:image/svg+xml;utf8,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="360" height="230"><rect width="100%" height="100%" fill="#0E0E0F"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#ffffff" font-family="Poppins, sans-serif" font-size="16">Image unavailable</text></svg>`
    )

  return (
    <div className="mt-24 relative z-20">
      <h3 className="text-4xl font-serif font-bold text-white mb-8">Dashboard Gallery</h3>

      <motion.div
        ref={containerRef}
        className="horizontal-gallery flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6"
        // optional: uncomment the next two props to enable drag-with-constraints (framer-motion)
        // drag="x"
        // dragConstraints={{ left: -maxDrag, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
        style={{ cursor: "grab" }}
      >
        {dashboards.map((rawSrc, idx) => {
          // encode spaces & special chars so browser can load files with weird names
          const safeSrc = encodeURI(rawSrc)

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.18 }}
              className="min-w-[360px] snap-start"
            >
              <img
                src={safeSrc}
                alt={`Dashboard ${idx + 1}`}
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement
                  // avoid infinite loop if fallback fails
                  img.onerror = null
                  img.src = fallbackDataUri
                }}
                className="w-[360px] h-[230px] rounded-xl object-cover border border-white/20 glass-effect hover:shadow-xl hover:shadow-[#ff4da6]/40 transition-all"
                draggable={false}
                aria-label={`Dashboard preview ${idx + 1}`}
              />
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
