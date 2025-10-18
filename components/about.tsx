"use client"

import AnimatedDivider from "./animated-divider"
import HolographicText from "./holographic-text"
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
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Profile Picture */}
        <div className="relative">
          <div className="relative w-full rounded-3xl overflow-hidden">
            <img src="/about-me-image.png" alt="Komal Harshita About Me" className="w-full h-auto object-cover" />
          </div>

          <div className="absolute -bottom-6 -right-6 glass-effect px-6 py-3 rounded-lg shadow-lg transform rotate-12 border border-white/40">
            <p className="font-bold text-sm text-[#8b4a6d]">McKinsey</p>
            <p className="text-xs text-[#8b4a6d]">Forward Learner</p>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-5xl font-serif font-bold mb-6 text-[#8b4a6d]">About Me</h2>

          <p className="text-lg text-[#8b4a6d] mb-6 leading-relaxed">
            I'm a Computer Science Engineering student at Savitribai Phule Pune University with a strong passion for
            <HolographicText className="ml-1"> business intelligence and data analytics</HolographicText>. I love
            transforming raw data into meaningful insights through dashboards and visualizations.
          </p>

          <p className="text-lg text-[#8b4a6d] mb-8 leading-relaxed">
            Currently, I'm a <HolographicText>McKinsey Forward Learner</HolographicText> and{" "}
            <HolographicText>Google Student Ambassador for Gemini AI</HolographicText>. I'm proficient in Power BI, SQL,
            Python, and Excel, and I believe data should tell a story that inspires action and understanding.
          </p>

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

          {/* Hobbies section */}
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

      <AnimatedDivider />

      <div className="mt-20 space-y-6">
        <h3 className="text-3xl font-serif font-bold text-[#8b4a6d] mb-8">Education</h3>

        {/* Savitribai Phule Pune University */}
        <div className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">🎓</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg text-[#ff4da6]">Bachelor of Engineering - Computer Science</p>
              <p className="text-[#8b4a6d] font-semibold">Savitribai Phule Pune University</p>
              <p className="text-sm text-[#8b4a6d] opacity-80">Sep 2024 - Jun 2028</p>
            </div>
          </div>
          <div className="ml-16 space-y-2 text-sm text-[#8b4a6d]">
            <p>
              <span className="font-semibold">Grade:</span> First Year CGPA: 9.05
            </p>
            <p>
              <span className="font-semibold">Activities:</span> Google Student Ambassador Program
            </p>
          </div>
        </div>

        {/* Symbiosis Junior College */}
        <div className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">📚</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg text-[#ff4da6]">Higher Secondary - Science</p>
              <p className="text-[#8b4a6d] font-semibold">Symbiosis Junior College</p>
              <p className="text-sm text-[#8b4a6d] opacity-80">Sep 2022 - Jun 2024</p>
            </div>
          </div>
          <div className="ml-16 space-y-2 text-sm text-[#8b4a6d]">
            <p>
              <span className="font-semibold">Grade:</span> 80.67%
            </p>
            <p>
              <span className="font-semibold">Activities:</span> Creative writing and essay competitions, Student Editor
              for Symbi Tribe Magazine
            </p>
            <p>
              <span className="font-semibold">Skills:</span> Magazine Design, Project Management
            </p>
          </div>
        </div>

        {/* Bharati Vidyapeeth English Medium School */}
        <div className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 glass-effect rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-xl">✨</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-lg text-[#ff4da6]">Secondary School - CBSE</p>
              <p className="text-[#8b4a6d] font-semibold">Bharati Vidyapeeth English Medium School</p>
              <p className="text-sm text-[#8b4a6d] opacity-80">Apr 2013 - Jul 2022</p>
            </div>
          </div>
          <div className="ml-16 space-y-2 text-sm text-[#8b4a6d]">
            <p>
              <span className="font-semibold">Grade:</span> 92.2%
            </p>
            <p>
              <span className="font-semibold">Activities:</span> Poetry Writing, Speech and Elocution Competitions
            </p>
            <p>
              <span className="font-semibold">Awards:</span> Class 10th Board School Topper Award
            </p>
            <p>
              <span className="font-semibold">Skills:</span> Poetry Writing, Communication Skills
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
