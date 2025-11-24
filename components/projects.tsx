"use client"

import { useState } from "react"
import HolographicText from "./holographic-text"
import ProjectCard from "./project-card"
import CaseStudyModal from "./case-study-modal"
import DashboardGallery from "@/components/DashboardGallery"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const caseStudies = [
    {
      id: 1,
      title: "ProdigyFlow",
      subtitle: "Python + Data Analytics Mini Workflow",
      description: "Automated data analytics workflow showcasing end-to-end pipeline development with Python and SQL.",
      status: "In Progress" as const,
      githubLink: "https://github.com/komalharshita/prodigyflow",
      sections: {
        business:
          "Developed an automated data analytics workflow to streamline repetitive data processing tasks and improve efficiency in analytical operations.",
        tools: "Python, Pandas, Matplotlib, SQL, Jupyter Notebooks",
        cleaning:
          "Handled missing values using forward-fill and interpolation methods, detected and removed outliers using IQR method, normalized data types across datasets for consistency.",
        exploratory:
          "Statistical analysis including mean, median, standard deviation calculations. Pattern recognition in multi-dimensional datasets using correlation analysis and clustering techniques.",
        visualizations:
          "Interactive dashboards created with Matplotlib and Seaborn. Time-series trend visualizations, distribution plots, and heatmaps for insights discovery.",
        insights:
          "Identified key performance indicators and optimization opportunities. Uncovered seasonal patterns in data affecting business metrics.",
        impact:
          "Reduced manual data processing time by 60% and improved data accuracy for decision-making. Enabled faster insights generation for stakeholder reporting.",
      },
    },
    {
      id: 2,
      title: "Kalakatha",
      subtitle: "Google GenAI Exchange Hackathon ✨ A Portal for Local Artisans",
      description: "A mission-driven marketplace platform empowering local artisans with digital tools to showcase and sell handmade goods.",
      status: "Completed" as const,
      githubLink: "https://github.com/komalharshita/KalaKatha",
      sections: {
        business:
          "KalaKatha is a platform dedicated to empowering local artisans by providing them with a digital marketplace to showcase and sell their unique handmade goods. Our goal is to connect creators with customers, helping small businesses grow and thrive in the digital market. In a world dominated by mass production, our goal is to provide a dedicated space for unique, handmade goods.",
        tools: "HTML, Supabase (Backend, Authentication, Database, Real-time Features), React, JavaScript",
        cleaning:
          "Data validation for product listings, user profile management, and transaction records. Implemented secure data handling for artisan and customer information.",
        exploratory:
          "Analyzed artisan profiles, product categories, sales trends, and customer engagement patterns. Explored community feedback to improve platform features and user experience.",
        visualizations:
          "Dashboard displaying top artisans, best-selling products, category performance. Real-time transaction tracking and community growth metrics visualizations.",
        insights:
          "KalaKatha empowers small-scale creators—from woodworkers to jewelers, ceramicists to textile artists—by giving them the tools and visibility they need to compete in the digital economy. By supporting local artists, we're not just making a purchase—we're investing in a community and preserving the art of handmade craftsmanship.",
        impact:
          "Simplified the process of setting up an online shop, managing inventory, and connecting with customers, allowing artisans to focus on what they do best: creating. For customers, it offers a refreshing alternative to conventional shopping, providing a curated collection of authentic, high-quality items made with passion and skill. Every piece has a story.",
      },
    },
    {
      id: 3,
      title: "Data Storytelling Project",
      subtitle: "Advanced Analytics & Narrative",
      description: "Coming Soon - Data storytelling project combining analytics with compelling business narratives.",
      status: "Coming Soon" as const,
      githubLink: "#",
      sections: {
        business: "Transforming raw data into compelling business stories for executive stakeholder engagement.",
        tools: "Power BI, Tableau, Python, Storytelling frameworks",
        cleaning: "Advanced data preparation and quality assurance for narrative-driven insights.",
        exploratory: "Deep exploratory analysis to uncover meaningful patterns and business stories.",
        visualizations: "Custom visualizations designed specifically for narrative impact and audience engagement.",
        insights: "Developing actionable insights that drive business strategy and decision-making.",
        impact: "Enhanced communication of data insights leading to better strategic decisions and stakeholder alignment.",
      },
    },
    {
      id: 4,
      title: "Excel Analytics Case Study",
      subtitle: "Advanced Excel & Dashboard Design",
      description: "Coming Soon - Advanced Excel case study showcasing complex formulas and interactive dashboards.",
      status: "Coming Soon" as const,
      githubLink: "#",
      sections: {
        business: "Building sophisticated Excel-based analytics solutions for enterprise reporting needs.",
        tools: "Microsoft Excel, VBA, Power Query, Advanced Formulas",
        cleaning: "Multi-sheet data consolidation and advanced data validation techniques.",
        exploratory: "Complex analysis using advanced Excel functions and pivot table analytics.",
        visualizations: "Interactive Excel dashboards with conditional formatting and dynamic charts.",
        insights: "Leveraging Excel for predictive analytics and business intelligence.",
        impact: "Democratizing data analytics across organizations through accessible Excel-based solutions.",
      },
    },
  ]

  const selectedProjectData = caseStudies.find((p) => p.id === selectedProject)

  return (
    <section id="projects" className="tech-grid py-32 px-4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        {/* Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute rounded-full will-change-transform"
            style={{
              width: Math.random() * 8 + 4 + "px",
              height: Math.random() * 8 + 4 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              background: i % 2 === 0 
                ? "rgba(255, 77, 166, 0.4)" 
                : "rgba(217, 70, 239, 0.3)",
              animation: `drift ${Math.random() * 8 + 12}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + "s",
              boxShadow: i % 2 === 0 
                ? "0 0 15px rgba(255, 77, 166, 0.3)" 
                : "0 0 15px rgba(217, 70, 239, 0.2)",
            }}
          />
        ))}
      </div>

      <div className="text-center mb-20 relative z-10">
        <h2 className="text-5xl font-serif font-bold mb-4 text-white">
          <HolographicText>My Projects </HolographicText>
        </h2>
        <div className="flex justify-center mb-6">
          <div className="h-1 w-32 bg-gradient-to-r from-[#ff4da6] to-[#ff1a7f] rounded-full" />
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 min-h-[600px] relative z-10">
        {caseStudies.map((study) => (
          <div key={study.id} className="h-full">
            <ProjectCard
              id={study.id}
              title={study.title}
              subtitle={study.subtitle}
              description={study.description}
              status={study.status}
              onOpen={() => setSelectedProject(study.id)}
            />
          </div>
        ))}
      </div>

      {selectedProjectData && (
        <CaseStudyModal
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          data={selectedProjectData}
        />
      )}

      {/* Bottom CTA */}
      <div className="text-center mt-20 relative z-10">
        <a
          href="https://github.com/komalharshita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#ff4da6] text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,77,166,0.5)] transition-all transform hover:scale-105"
        >
        Explore All GitHub Projects →
        </a>
      </div>

      {/* Gallery section — outside CTA block */}
      <div className="mt-24 relative z-20">
        <DashboardGallery />
      </div>

      <div className="text-center mt-20 relative z-10">
        <a
          href="https://github.com/komalharshita"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-[#ff4da6] text-black rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(255,77,166,0.5)] transition-all transform hover:scale-105"
        >
          Explore All GitHub Projects →
        </a>
      </div>

      {/* FIXED gallery */}
      <div className="mt-24 relative z-20">
        <DashboardGallery />
      </div>


      <style jsx>{`
        @keyframes drift {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-30px) translateX(0px);
            opacity: 0.4;
          }
          75% {
            transform: translateY(-15px) translateX(-8px);
            opacity: 0.5;
          }
        }
      `}</style>

    </section>
  )
}
