"use client"

import { useState } from "react"
import HolographicText from "./holographic-text"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects = [
    "use client"

    import { useState } from "react"
    import HolographicText from "./holographic-text"
    import GlassmorphicTooltip from "./glassmorphic-tooltip"

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
          link: "https://www.mckinsey.com/careers/students",
        },
        {
          id: 2,
          title: "Data Analytics Job Simulation",
          category: "Certification",
          description:
            "Deloitte Data Analytics simulation covering data analysis, data modeling, and business insights. Completed Sep 2025.",
          skills: "Data Analysis, Data Modeling",
          link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf",
        },
        {
          id: 3,
          title: "Google Student Ambassador",
          category: "Volunteering",
          description:
            "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
          skills: "AI Education, Community Building",
          link: "https://www.linkedin.com/posts/komalharshita_google-googlegemini-googlestudentambassador-activity-7370335014271725568-EQjf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE3zy-oBwxdmzeYaYUiGfkj0x9atR_t2dtU",
        },
        {
          id: 4,
          title: "Advanced PowerPoint Certification",
          category: "Skill Development",
          description:
            "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
          skills: "Visual Storytelling, Design",
          link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/",
        },
      ]

      return (
        <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
              <HolographicText>Experience & Achievements</HolographicText>
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
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none group-hover:pointer-events-auto z-20"
                    style={{ background: "linear-gradient(to top, rgba(255, 77, 166, 0.9), transparent)" }}
                  >
                    <p className="text-white font-semibold mb-4">Skills & Focus:</p>
                    <GlassmorphicTooltip content="Key competencies for this role">
                      <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                    </GlassmorphicTooltip>
                  </div>

                  {/* Know More button */}
                  <div className="flex justify-end mt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 backdrop-blur-md text-[#ff4da6] rounded-full font-semibold text-sm hover:bg-white/40 transition-all border border-white/30 bg-background"
                    >
                      Know More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="/resume.pdf"
              download
              className="inline-block px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow text-lg"
              style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
            >
              View Full Resume
            </a>
          </div>
        </section>
      )
    }
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
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      category: "Volunteering",
      description:
        "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
      skills: "AI Education, Community Building",
      link: "https://www.linkedin.com/posts/komalharshita_google-googlegemini-googlestudentambassador-activity-7370335014271725568-EQjf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE3zy-oBwxdmzeYaYUiGfkj0x9atR_t2dtU",
    },
    {
      id: 4,
      title: "Advanced PowerPoint Certification",
      category: "Skill Development",
      description:
        "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
      skills: "Visual Storytelling, Design",
      link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
          <HolographicText>Experience & Achievements</HolographicText>
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
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none group-hover:pointer-events-auto z-20"
                style={{ background: "linear-gradient(to top, rgba(255, 77, 166, 0.9), transparent)" }}
              >
                <p className="text-white font-semibold mb-4">Skills & Focus:</p>
                <GlassmorphicTooltip content="Key competencies for this role">
                  <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                </GlassmorphicTooltip>
              </div>

              {/* Know More button */}
              <div className="flex justify-end mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md text-[#ff4da6] rounded-full font-semibold text-sm hover:bg-white/40 transition-all border border-white/30 bg-background"
                >
                  Know More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow text-lg"
          style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
        >
          View Full Resume
        </a>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import HolographicText from "./holographic-text"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

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
      link: "https://www.mckinsey.com/careers/students",
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      category: "Certification",
      description:
        "Deloitte Data Analytics simulation covering data analysis, data modeling, and business insights. Completed Sep 2025.",
      skills: "Data Analysis, Data Modeling",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      category: "Volunteering",
      description:
        "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
      skills: "AI Education, Community Building",
      link: "https://www.linkedin.com/posts/komalharshita_google-googlegemini-googlestudentambassador-activity-7370335014271725568-EQjf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE3zy-oBwxdmzeYaYUiGfkj0x9atR_t2dtU",
    },
    {
      id: 4,
      title: "Advanced PowerPoint Certification",
      category: "Skill Development",
      description:
        "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
      skills: "Visual Storytelling, Design",
      link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
          <HolographicText>Experience & Achievements</HolographicText>
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
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none group-hover:pointer-events-auto z-20"
                style={{ background: "linear-gradient(to top, rgba(255, 77, 166, 0.9), transparent)" }}
              >
                <p className="text-white font-semibold mb-4">Skills & Focus:</p>
                <GlassmorphicTooltip content="Key competencies for this role">
                  <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                </GlassmorphicTooltip>
              </div>

              {/* Know More button */}
              <div className="flex justify-end mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md text-[#ff4da6] rounded-full font-semibold text-sm hover:bg-white/40 transition-all border border-white/30 bg-background"
                >
                  Know More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow text-lg"
          style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
        >
          View Full Resume
        </a>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import HolographicText from "./holographic-text"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

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
      link: "https://www.mckinsey.com/careers/students",
    },
    {
      id: 2,
      title: "Data Analytics Job Simulation",
      category: "Certification",
      description:
        "Deloitte Data Analytics simulation covering data analysis, data modeling, and business insights. Completed Sep 2025.",
      skills: "Data Analysis, Data Modeling",
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf",
    },
    {
      id: 3,
      title: "Google Student Ambassador",
      category: "Volunteering",
      description:
        "Helping students discover how Google Gemini AI can enhance their studies and creativity through campus events and activities.",
      skills: "AI Education, Community Building",
      link: "https://www.linkedin.com/posts/komalharshita_google-googlegemini-googlestudentambassador-activity-7370335014271725568-EQjf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE3zy-oBwxdmzeYaYUiGfkj0x9atR_t2dtU",
    },
    {
      id: 4,
      title: "Advanced PowerPoint Certification",
      category: "Skill Development",
      description:
        "Completed comprehensive PowerPoint training covering visual storytelling and presentation design. Credential ID: 593317",
      skills: "Visual Storytelling, Design",
      link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4 text-[#8b4a6d]">
          <HolographicText>Experience & Achievements</HolographicText>
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
              {/* Overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 pointer-events-none group-hover:pointer-events-auto z-20"
                style={{ background: "linear-gradient(to top, rgba(255, 77, 166, 0.9), transparent)" }}
              >
                <p className="text-white font-semibold mb-4">Skills & Focus:</p>
                <GlassmorphicTooltip content="Key competencies for this role">
                  <p className="text-white/90 text-sm mb-4">{project.skills}</p>
                </GlassmorphicTooltip>
              </div>

              {/* Know More button */}
              <div className="flex justify-end mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 backdrop-blur-md text-[#ff4da6] rounded-full font-semibold text-sm hover:bg-white/40 transition-all border border-white/30 bg-background"
                >
                  Know More →
                </a>
              </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <a
          href="/resume.pdf"
          download
          className="inline-block px-8 py-4 text-white rounded-full font-semibold hover:shadow-lg transition-all bubble-glow text-lg"
          style={{ background: "linear-gradient(to right, #ff4da6, #d9a7e0)" }}
        >
          View Full Resume
        </a>
      </div>
    </section>
  )
}
