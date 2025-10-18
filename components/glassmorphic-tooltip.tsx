"use client"

import type React from "react"

import { useState } from "react"

interface GlassmorphicTooltipProps {
  content: string
  children: React.ReactNode
}

export default function GlassmorphicTooltip({ content, children }: GlassmorphicTooltipProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="relative inline-block">
      <div onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)} className="cursor-help">
        {children}
      </div>

      {isVisible && (
        <div
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap pointer-events-none z-50"
          style={{
            background: "rgba(255, 255, 255, 0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 211, 182, 0.3)",
            color: "#8b4a6d",
            boxShadow: "0 8px 32px rgba(255, 77, 166, 0.1)",
          }}
        >
          {content}
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              borderRight: "1px solid rgba(255, 211, 182, 0.3)",
              borderBottom: "1px solid rgba(255, 211, 182, 0.3)",
              transform: "translateX(-50%) rotate(45deg)",
            }}
          />
        </div>
      )}
    </div>
  )
}
