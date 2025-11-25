"use client"

import type React from "react"

interface GlassmorphicTooltipProps {
  content: string
  children: React.ReactNode
}

export default function GlassmorphicTooltip({ content, children }: GlassmorphicTooltipProps) {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div
          className="px-3 py-2 rounded-lg text-xs text-white whitespace-nowrap backdrop-blur-md border border-white/20"
          style={{ background: "rgba(255, 255, 255, 0.1)" }}
        >
          {content}
        </div>
      </div>
    </div>
  )
}
