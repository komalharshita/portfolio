"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Github } from 'lucide-react'
import HolographicText from "./holographic-text"

interface GitHubProject {
  id: number
  name: string
  description: string
  url: string
  language: string
  stars: number
}

export default function GitHubProjects() {
  const [projects, setProjects] = useState<GitHubProject[]>([])
  const [loading, setLoading] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        // Replace 'komalharshita' with your actual GitHub username
        const response = await fetch("https://api.github.com/users/komalharshita/repos?sort=updated&per_page=12")
        const data = await response.json()
        setProjects(
          data.map((repo: any) => ({
            id: repo.id,
            name: repo.name,
            description: repo.description || "No description available",
            url: repo.html_url,
            language: repo.language || "N/A",
            stars: repo.stargazers_count,
          }))
        )
      } catch (error) {
        console.error("Error fetching GitHub projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHubProjects()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  if (loading) {
    return (
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <p className="text-[#8b4a6d] font-semibold">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="gallery" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
          <HolographicText>My Projects</HolographicText>
        </h2>
        <p className="text-lg text-[#8b4a6d]">Check out my latest work on GitHub</p>
      </div>

      {/* Horizontal scrolling container */}
      <div className="relative">
        {/* Left scroll button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-md rounded-full p-3 shadow-lg transition-all hover:shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} className="text-[#ff4da6]" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 px-16"
          style={{ scrollBehavior: "smooth" }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-80 rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Project card with glass effect */}
              <div
                className="h-96 p-6 flex flex-col justify-between rounded-2xl glass-effect bubble-glow"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 77, 166, 0.1), rgba(217, 167, 224, 0.1))",
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <Github size={28} className="text-[#ff4da6]" />
                    <span className="bg-[#ff4da6] text-white px-3 py-1 rounded-full text-xs font-bold">
                      {project.language}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#8b4a6d] mb-2 line-clamp-2">{project.name}</h3>
                  <p className="text-[#8b4a6d] text-sm leading-relaxed line-clamp-3">{project.description}</p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <div className="flex items-center gap-1">
                    <span className="text-[#ff4da6] text-sm font-semibold">★ {project.stars}</span>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 backdrop-blur-md bg-white/20 hover:bg-white/40 text-[#ff4da6] rounded-full font-semibold text-sm border border-white/30 transition-all"
                  >
                    View →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right scroll button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-md rounded-full p-3 shadow-lg transition-all hover:shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} className="text-[#ff4da6]" />
        </button>
      </div>
    </section>
  )
}
