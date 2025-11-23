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
    { name: "Poetry Writing", number: "1" },
    { name: "Playing Guitar", number: "2" },
    { name: "Crocheting", number: "3" },
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
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <GlassmorphicTooltip
                    key={skill.category}
                    content={
                      <span className="text-white font-medium">
                        {skill.hoverMessage}
                      </span>
                    }
                    tooltipClassName="backdrop-blur-md bg-[#ff4da6]/30 border border-[#ff4da6]/40 text-white shadow-lg shadow-[#ff4da6]/20 p-3 rounded-xl"
                    >
                    <div className="group flex flex-col items-center justify-center p-4 glass-effect rounded-2xl hover:shadow-lg hover:shadow-[#ff4da6]/30 transition-all duration-300 cursor-pointer transform hover:scale-110">
                      <img
                        src={skill.logo || '/placeholder.svg'}
                        alt={skill.category}
                        className="w-12 h-12 mb-2 group-hover:brightness-125 transition-all"
                      />
                      <p className="text-xs font-semibold text-white group-hover:text-white/100 transition-colors text-center">
                        {skill.category}
                      </p>
                    </div>
                  </GlassmorphicTooltip>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6 text-white">Hobbies</h3>
              <div className="space-y-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="glass-effect p-4 rounded-xl flex items-center gap-3 text-white hover:shadow-md hover:shadow-[#ff4da6]/30 transition-all"
                  >
                    <span className="text-2xl font-bold text-[#ff4da6]">{hobby.number}</span>
                    <span className="font-medium">{hobby.name}</span>
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
