"use client"

import { useState } from "react"
import HolographicText from "./holographic-text"

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const caseStudies = [
    {
      id: 1,
      title: "ProdigyFlow",
      subtitle: "Python + Data Analytics Mini Workflow",
      description: "Data-driven workflow automation project showcasing end-to-end analytics pipeline",
      githubLink: "https://github.com/komalharshita/promigyflow",
      sections: {
        business: "Developed an automated data analytics workflow to streamline repetitive data processing tasks.",
        tools: "Python, Pandas, Matplotlib, SQL",
        cleaning: "Handled missing values, outliers, and data type conversions for consistency.",
        exploratory: "Statistical analysis and pattern recognition in multi-dimensional datasets.",
        visualizations: "Interactive dashboards and trend visualizations for insights discovery.",
        insights: "Identified key performance indicators and optimization opportunities through data exploration.",
        impact:
          "Reduced manual data processing time by 60% and improved data accuracy for decision-making.",
      },
    },
    {
      id: 2,
      title: "Excel Dashboards Showcase",
      subtitle: "Business Intelligence & Reporting",
      description: "Comprehensive collection of professional dashboards demonstrating data visualization expertise",
      githubLink: "https://github.com/komalharshita/excel-dashboards",
      sections: {
        business: "Created executive-level dashboards for real-time business metrics monitoring and KPI tracking.",
        tools: "Microsoft Excel, Advanced Formulas, Pivot Tables, Data Validation",
        cleaning: "Cleansed multi-source data and normalized formats for dashboard integration.",
        exploratory: "Analyzed business metrics across multiple dimensions for comprehensive insights.",
        visualizations: "Developed 15+ dynamic charts with drill-down capabilities for detailed analysis.",
        insights: "Uncovered seasonal trends and performance gaps leading to strategic recommendations.",
        impact:
          "Enabled stakeholders to make data-driven decisions, improving business efficiency by 40%.",
      },
    },
    {
      id: 3,
      title: "SQLLab",
      subtitle: "SQL Practice & Query Optimization",
      description: "Repository of optimized SQL queries and database design practices for data extraction",
      githubLink: "https://github.com/komalharshita/sqllab",
      sections: {
        business: "Built robust SQL solutions for complex data queries and efficient database management.",
        tools: "SQL, Database Design, Query Optimization, SQLite/PostgreSQL",
        cleaning: "Implemented data validation constraints and cleaning procedures within SQL scripts.",
        exploratory: "Complex JOINs and aggregations to explore relationships across datasets.",
        visualizations: "Generated SQL reports and data exports for further analysis and visualization.",
        insights: "Discovered data quality issues and optimization opportunities through query analysis.",
        impact:
          "Optimized query performance by 70%, enabling faster data retrieval for analytical processes.",
      },
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif font-bold mb-4 text-white">
          <HolographicText>Projects & Case Studies</HolographicText>
        </h2>
        <p className="text-xl text-white/80">More Projects Coming Soon</p>
      </div>

      {/* Case Studies Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {caseStudies.map((study) => (
          <div
            key={study.id}
            className="group relative overflow-hidden rounded-3xl cursor-pointer h-full"
            onMouseEnter={() => setExpandedId(study.id)}
            onMouseLeave={() => setExpandedId(null)}
          >
            <div
              className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-between transition-all duration-300 hover:border-[#ff4da6]/50 hover:shadow-[0_0_40px_rgba(255,77,166,0.3)]"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,77,166,0.05) 100%)",
              }}
            >
              {/* Coming Soon Badge */}
              <div className="absolute top-4 right-4 bg-[#ff4da6] text-black px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                Coming Soon
              </div>

              {/* Preview Content */}
              <div className="mb-6">
                {/* Screenshot Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-[#ff4da6]/20 to-black/50 rounded-2xl mb-4 flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <div className="text-white/40 text-sm">Screenshot Preview</div>
                    <div className="text-white/20 text-xs mt-1">Coming Soon</div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="w-full h-24 bg-gradient-to-r from-black/30 to-[#ff4da6]/10 rounded-xl flex items-center justify-center border border-white/5">
                  <div className="text-white/30 text-xs">📊 Visualization Preview</div>
                </div>
              </div>

              {/* Project Info */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-1">{study.title}</h3>
                <p className="text-[#ff4da6] text-sm font-semibold mb-3">{study.subtitle}</p>
                <p className="text-white/70 text-sm leading-relaxed">{study.description}</p>
              </div>

              {/* Locked Content Preview */}
              <div className="mb-6 p-4 bg-black/40 rounded-xl border border-white/5">
                <p className="text-white/50 text-xs font-semibold mb-2">📋 Full Case Study Content (Locked):</p>
                <ul className="text-white/30 text-xs space-y-1">
                  <li>• Business Problem & Context</li>
                  <li>• Tools & Technologies</li>
                  <li>• Data Cleaning & Preparation</li>
                  <li>• Exploratory Analysis</li>
                  <li>• Visualizations & Insights</li>
                  <li>• Impact & Recommendations</li>
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={study.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-3 bg-[#ff4da6] text-black rounded-xl font-semibold text-sm hover:bg-[#ff4da6]/80 transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,77,166,0.4)]"
                >
                  View GitHub →
                </a>
                <button
                  disabled
                  className="flex-1 px-4 py-3 bg-white/5 text-white/50 rounded-xl font-semibold text-sm border border-white/10 cursor-not-allowed opacity-50"
                >
                  Full Case Study
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* More Projects Coming Soon CTA */}
      <div className="text-center py-16 px-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-[#ff4da6]/30 transition-all">
        <p className="text-white/80 text-lg mb-4">🚀 More detailed case studies and projects coming soon!</p>
        <p className="text-white/60 text-sm">
          The full case study breakdowns with visualizations, insights, and impact metrics are currently in development.
        </p>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a
          href="https://github.com/komalharshita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#ff4da6] text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,77,166,0.5)] transition-all transform hover:scale-105"
        >
          Explore All GitHub Projects →
        </a>
      </div>
    </section>
  )
}
