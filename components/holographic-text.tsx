"use client"

import type React from "react"

interface HolographicTextProps {
  children: React.ReactNode
}

export default function HolographicText({ children }: HolographicTextProps) {
  return (
    <span className="font-sans text-6xl"
      style={{
        background: "linear-gradient(45deg, #f6a5c0, #d9a7e0, #f6a5c0)",
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "gradient 3s ease infinite",
      }}
    >
      {children}
    </span>
  )
}
