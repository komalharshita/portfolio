"use client"

import { useState } from "react"

interface ProjectCardProps {
  id: number
  title: string
  subtitle: string
  description: string
  status: "In Progress" | "Completed" | "Coming Soon"
  onOpen: () => void
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  description,
  status,
  onOpen,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [tiltStyle, setTiltStyle] = useState({ rotateX: 0, rotateY: 0 })

  const statusColors = {
    "In Progress": "bg-[#ff4da6]",
    "Completed": "bg-[#ff4da6]",
    "Coming Soon": "bg-[#ff4da6]",
  }

  const ribbonTextColor = {
    "In Progress": "text-black",
    "Completed": "text-black",
    "Coming Soon": "text-black",
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isHovered) return

    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((0.5 - (y / rect.height)) * 8)

    setTiltStyle({ rotateX, rotateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTiltStyle({ rotateX: 0, rotateY: 0 })
  }

  return (
    <button
      onClick={onOpen}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative overflow-hidden rounded-3xl w-full h-full text-left transition-all duration-300 focus:outline-none"
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered 
          ? `perspective(1000px) rotateX(${tiltStyle.rotateX}deg) rotateY(${tiltStyle.rotateY}deg) translateY(-16px)` 
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)",
        transition: "transform 0.2s ease-out",
      }}
    >
      {/* Magazine Cover Style Card */}
      <div
        className={`relative w-full h-full p-8 rounded-3xl backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between ${
          isHovered
            ? "border-[#ff4da6] shadow-[0_0_60px_rgba(255,77,166,0.8)]"
            : "border-white/20 shadow-[0_0_20px_rgba(255,77,166,0.2)]"
        }`}
        style={{
          background: isHovered
            ? "linear-gradient(135deg, rgba(255,77,166,0.15) 0%, rgba(255,26,127,0.08) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,77,166,0.03) 100%)",
        }}
      >
        {/* Status Ribbon */}
        <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden pointer-events-none">
          <div
            className={`absolute top-0 right-0 w-48 h-12 ${statusColors[status]} ${ribbonTextColor[status]} font-bold text-xs md:text-sm flex items-center justify-center transition-all duration-300 shadow-lg z-20 whitespace-nowrap px-3`}
            style={{
              transform: "rotate(45deg) translate(24px, -24px)",
            }}
          >
            {status}
          </div>
        </div>

        {/* Magazine Cover Content */}
        <div className="mb-6 space-y-4">
          {/* Screenshot Placeholder - Show Kalakatha image for project id 2 */}
          <div
            className={`w-full aspect-video bg-gradient-to-br from-[#ff4da6]/30 to-black/60 rounded-2xl flex items-center justify-center border transition-all duration-300 overflow-hidden ${
              isHovered
                ? "border-[#ff4da6]/50 shadow-[0_0_20px_rgba(255,77,166,0.3)]"
                : "border-white/10"
            }`}
          >
            {id === 2 ? (
              <img 
                src="/images/kalakatha-marketplace.png" 
                alt="Kalakatha Marketplace" 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center">
                <div className="text-white/50 text-sm font-semibold">📸 Screenshot</div>
                <div className="text-white/30 text-xs mt-1">Magazine Preview</div>
              </div>
            )}
          </div>
        </div>

        {/* Project Info */}
        <div className="mb-6 flex-grow">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">{title}</h3>
          <p className="text-[#ff4da6] text-xs font-semibold mb-3">{subtitle}</p>
          <p className="text-white/70 text-sm leading-relaxed">{description}</p>
        </div>

        {/* View Button */}
        <div className="flex gap-3">
          <button
            onClick={onOpen}
            className="flex-1 px-4 py-3 bg-[#ff4da6] text-black rounded-xl font-semibold text-sm transition-all duration-300 cta-button"
          >
            View Case Study →
          </button>
        </div>
      </div>
    </button>
  )
}
