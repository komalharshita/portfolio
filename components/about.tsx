"use client"

import AnimatedDivider from "./animated-divider"
import GlassmorphicTooltip from "./glassmorphic-tooltip"

export default function About() {
  const skills = [
    { category: "Power BI", logo: "/power-bl.png", hoverMessage: "BI the main character" },
    { category: "SQL", logo: "/database.png", hoverMessage: "SQL me more about your data" },
    { category: "Python", logo: "/python.png", hoverMessage: "Python? More like Py-THON of talent" },
    { category: "Data Visualization", logo: "/data-visualization.png", hoverMessage: "Visualize this: I'm amazing" },
    { category: "Excel", logo: "/excel.png", hoverMessage: "Excel-lent choice, bestie" },
    { category: "Dashboard Design", logo: "/dash.png", hoverMessage: "Dashboard? More like Dash-SLAY" },
  ]

  const hobbies = [
    { name: "Creative Writing", icon: "✍️" },
    { name: "Poetry", icon: "📝" },
    { name: "Guitar", icon: "🎸" },
    { name: "Crocheting", icon: "🧶" },
  ]

  return (
    <section id="about" className="nebula-bg py-32 px-4 relative z-10">
      <div className="space-y-12">
        <h2 className="text-5xl font-serif font-bold mb-8 text-white">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column: About content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-[#ff4da6] mb-2">Academic Focus</h3>
              <p className="text-white/90 leading-relaxed">Currently a CSE Sophomore at NMIET.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#ff4da6] mb-2">Area of Interest</h3>
              <p className="text-white/90 leading-relaxed">Exploring the dynamic fields of Data & Business Analytics.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#ff4da6] mb-2">Developing Skills</h3>
              <p className="text-white/90 leading-relaxed">Building proficiency in SQL, Excel, Python (Pandas), and Power BI.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#ff4da6] mb-2">Current Activities</h3>
              <p className="text-white/90 leading-relaxed">Engaging in daily practice, small exercises, and working on dashboards and case-based analysis projects.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#ff4da6] mb-2">Seeking Opportunities</h3>
              <p className="text-white/90 leading-relaxed">Open to Summer Internship opportunities to apply skills and grow as an analyst.</p>
            </div>
          </div>

          {/* Right column: Skills and Hobbies */}
          <div className="space-y-8">
      
            {/* Skills grid */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#8b4a6d] mb-4">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <GlassmorphicTooltip key={skill.category} content={skill.hoverMessage}>
                  <div className="p-4 glass-effect rounded-2xl hover:border-[#ff4da6] transition-all flex flex-col items-center gap-2 group hover:shadow-lg hover:shadow-[#ff4da6]/20">
                    <img
                      src={skill.logo || "/placeholder.svg"}
                      alt={skill.category}
                      className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                    />
                    <p className="font-semibold text-[#8b4a6d] text-sm text-center">{skill.category}</p>
                  </div>
                </GlassmorphicTooltip>
              ))}
            </div>
          </div>

            {/* Hobbies */}
            <div>
            <h3 className="text-xl font-semibold text-[#8b4a6d] mb-4">Beyond Tech</h3>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="glass-effect p-3 rounded-xl flex items-center gap-2 text-[#8b4a6d] hover:shadow-md hover:shadow-[#ffb6c1]/30 transition-all"
                >
                  <span className="text-2xl">{hobby.icon}</span>
                  <span className="font-medium text-sm">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
