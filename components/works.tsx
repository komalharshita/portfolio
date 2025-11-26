"use client"

import { useState } from "react"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const caseStudies = [
    {
      id: 1,
      title: "ProdigyFlow",
      subtitle: "Python + Data Analytics Mini Workflow",
      description: "Data-driven workflow automation project showcasing end-to-end analytics pipeline",
      githubLink: "https://github.com/komalharshita/promigyflow",
    },
    {
      id: 2,
      title: "Excel Dashboards Showcase",
      subtitle: "Business Intelligence & Reporting",
      description: "Comprehensive collection of professional dashboards demonstrating data visualization expertise",
      githubLink: "https://github.com/komalharshita/excel-dashboards",
    },
    {
      id: 3,
      title: "SQLLab",
      subtitle: "SQL Practice & Query Optimization",
      description: "Repository of optimized SQL queries and database design practices for data extraction",
      githubLink: "https://github.com/komalharshita/sqllab",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="section-title font-bold mb-16 text-center text-5xl" style={{ color: "#f6a5c0" }}>
        ☆  My Works  ☆
        </h2>
      </div>

      {/* Case Studies Grid */}
      <div className="reveal-stagger grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="group relative overflow-hidden rounded-3xl cursor-pointer h-full"
            onMouseEnter={() => setExpandedId(study.id)}
            onMouseLeave={() => setExpandedId(null)}
          >
            <div
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-pink-soft/50 hover:shadow-[0_0_40px_rgba(246,165,192,0.3)]"
              style={{
                background: "linear-gradient(135deg, rgba(246, 165, 192, 0.08) 0%, rgba(157, 133, 182, 0.05) 100%)",
              }}
            >
              {/* Project Info */}
              <div className="mb-8">
                <h3 className="reveal text-2xl font-bold text-white mb-1">{study.title}</h3>
                <p className="reveal text-sm font-semibold mb-3" style={{ color: "#f6a5c0" }}>
                  {study.subtitle}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{study.description}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={study.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 rounded-xl font-semibold text-sm text-white transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(246,165,192,0.4)]"
                  style={{ background: "linear-gradient(135deg, #837ab6 0%, #cc8db3 50%, #f6a5c0 100%)" }}
                >
                  View GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/komalharshita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 rounded-full font-bold text-lg text-white hover:shadow-[0_0_30px_rgba(246,165,192,0.5)] transition-all transform hover:scale-105"
          style={{ background: "linear-gradient(135deg, #837ab6 0%, #cc8db3 50%, #f6a5c0 100%)" }}
        >
          Explore All GitHub Projects →
        </a>
      </div>
    </section>
  )
}
