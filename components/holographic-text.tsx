"use client"

import type React from "react"

interface HolographicTextProps {
  children: React.ReactNode
  className?: string
}

export default function HolographicText({ children, className = "" }: HolographicTextProps) {
  return (
    <span
      className={`relative inline-block ${className}`}
      style={{
        animation: "holographicShimmer 3s ease-in-out infinite",
      }}
    >
      <style>{`
        @keyframes holographicShimmer {
          0%, 100% {
            text-shadow: 
              0 0 10px rgba(255, 77, 166, 0.4),
              0 0 20px rgba(255, 211, 182, 0.2);
          }
          50% {
            text-shadow: 
              0 0 20px rgba(217, 167, 224, 0.5),
              0 0 30px rgba(255, 77, 166, 0.3),
              0 0 40px rgba(255, 211, 182, 0.2);
          }
        }
      `}</style>
      {children}
    </span>
  )
}
