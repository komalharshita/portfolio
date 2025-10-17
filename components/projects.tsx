"use client"

import { useState } from "react"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    {
      id: 1,
      title: "McKinsey Forward Program",
      category: "Professional Development",
      description:
        "Global 10-week learning initiative for young professionals. Growing professionally and personally while connecting with a diverse global network.",
      skills: "Problem Solving, Communication",
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      category: "Certification",
      description:
        "Deloitte Data Analytics simulation covering data analysis, data modeling, and business insights. Completed Sep 2025.",
      skills: "Data Analysis, Data Modeling",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      category: "Volunteering",
      description:
        "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
      skills: "AI Education, Community Building",
    },
    {
      id: 4,
      title: "Advanced PowerPoint Certification",
      category: "Skill Development",
      description:
        "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
      skills: "Visual Storytelling, Design",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2
          className="text-5xl font-serif font-bold mb-4"
          style={{
            background: "linear-gradient(to right, #ff4da6, #ffd3b6, #d9a7e0)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Experience & Achievements
        </h2>
        <p className="text-lg text-[#8b4a6d]">Professional growth, certifications, and volunteer work</p>
      </div>

      {/* Magazine-style grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative overflow-hidden rounded-2xl cursor-pointer"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Project card */}
            <div
              className="relative h-80 overflow-hidden rounded-2xl glass-effect bubble-glow p-6 flex flex-col justify-between"
              style={{
                background: "linear-gradient(to bottom right, rgba(255, 182, 193, 0.4), rgba(217, 167, 224, 0.4))",
              }}
            >
              {/* Magazine-style label */}
              <div className="absolute top-4 right-4 bg-[#ff4da6] text-white px-4 py-2 rounded-full text-xs font-bold transform rotate-12 group-hover:rotate-0 transition-transform">
                {project.category}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#8b4a6d] mb-3">{project.title}</h3>
                <p className="text-[#8b4a6d] text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                style={{ background: "linear-gradient(to top, rgba(255, 77, 166, 0.9), transparent)" }}
              >
                <p className="text-white font-semibold mb-4">Skills & Focus:</p>
                <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                <button className="w-fit px-4 py-2 bg-white text-[#ff4da6] rounded-full font-semibold text-sm hover:bg-[#fff6f9] transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          className="px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow text-lg"
          style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
        >
          View Full Resume
        </button>
      </div>
    </section>
  )
}
