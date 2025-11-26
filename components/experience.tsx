"use client"

import { useState } from "react"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

export default function Experience() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "McKinsey Forward Program",
      category: "Professional Development",
      description:
        "Global 10-week learning initiative for young professionals. Growing professionally and personally while connecting with a diverse global network.",
      skills: "Problem Solving, Communication",
      link: "https://www.mckinsey.com/careers/students",
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      category: "Certification",
      description:
        "Deloitte Data Analytics simulation covering data analysis, data modeling, and business insights. Completed Sep 2025.",
      skills: "Data Analysis, Data Modeling",
      link: "https://www.deloitte.com/",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      category: "Volunteering",
      description:
        "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
      skills: "AI Education, Community Building",
      link: "https://www.google.com/",
    },
    {
      id: 4,
      title: "Advanced PowerPoint Certification",
      category: "Skill Development",
      description:
        "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
      skills: "Visual Storytelling, Design",
      link: "https://www.skillnation.com/",
    },
  ]

  return (
    <section id="experience-achievements" className="py-20 px-4 max-w-6xl mx-auto font-sans">
      <div className="text-center mb-16">
        <h2
          className="section-title font-bold mb-16 text-center text-5xl"
          style={{ color: "#f6a5c0" }}
        >
          Experience & Achievements
        </h2>
      </div>

      {/* Magazine-style grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
          >
            {/* Project card */}
            <div
              className="relative h-80 overflow-hidden rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group-hover:shadow-xl"
              style={{
                background: "linear-gradient(to bottom right, rgba(246, 165, 192, 0.3), rgba(157, 133, 182, 0.3))",
              }}
            >
              {/* Magazine-style label */}
              <div
                className="absolute top-4 right-4 text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 group-hover:rotate-0 transition-transform duration-300"
                style={{ backgroundColor: "#f6a5c0" }}
              >
                {project.category}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    color: "#ffffff",
                    fontWeight: 700,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {project.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div
                className="
                  absolute inset-0 opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-300 
                  flex flex-col justify-end p-6 font-sans
                  pointer-events-none
                "
                style={{
                  background: "linear-gradient(to top, rgba(246, 165, 192, 0.9), transparent)",
                }}
              >
                {/* Wrapper allows tooltip interaction */}
                <div className="pointer-events-auto">
                  <p className="text-white font-semibold mb-4">Skills & Focus:</p>

                  <GlassmorphicTooltip content="Key competencies for this role">
                    <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                  </GlassmorphicTooltip>
                </div>
              </div>

              {/* Know More button */}
              <div className="flex justify-end mt-4 pointer-events-auto">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full font-semibold text-sm transition-all border"
                  style={{
                    backgroundColor: "rgba(246, 165, 192, 0.1)",
                    color: "#f6a5c0",
                    borderColor: "rgba(246, 165, 192, 0.3)",
                  }}
                >
                  Know More →
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Resume button */}
      <div className="text-center mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all text-lg text-white"
          style={{
            background: "linear-gradient(135deg, #837ab6 0%, #cc8db3 50%, #f6a5c0 100%)",
          }}
        >
          View Full Resume
        </a>
      </div>
    </section>
  )
}
