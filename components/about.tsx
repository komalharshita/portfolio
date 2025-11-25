"use client"

export default function About() {
  return (
    <div id="about" className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
      <h2 className="font-bold mb-16 text-center text-5xl" style={{ color: "#f6a5c0" }}>
        About Me
      </h2>

      {/* Top Row: Portrait + Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="h-96 rounded-lg flex items-center justify-center overflow-hidden relative">
          <img
            src="/images/p_posing.png"
            alt="Komal Harshita"
            className="h-full w-full object-cover"
          />

          {/* McKinsey Badge */}
          <div
            className="absolute top-6 left-6 glass-effect px-6 py-3 rounded-lg shadow-lg transform -rotate-6 border border-white/30 pl-6"
            style={{ backgroundColor: "rgba(156, 82, 120, 0.7)" }}
          >
            <p className="font-bold text-sm text-white">McKinsey</p>
            <p className="text-xs text-white">Forward Learner</p>
          </div>
        </div>

        {/* Bio */}
        <div className="flex flex-col justify-center space-y-4">
          <p className="leading-relaxed text-lg" style={{ color: "#e0c3cc" }}>
            Hi, I'm Komal — a Computer Science Engineering sophomore at NMIET, currently exploring Data and Business
            Analytics. I'm building skills in SQL, Excel, Python (Pandas), and Power BI, and I enjoy identifying
            patterns in data and solving analytical problems.
          </p>
          <p className="leading-relaxed text-lg" style={{ color: "#e0c3cc" }}>
            I learn through consistent daily practice, small exercises, and hands-on exploration. I'm working toward
            building dashboards, case-based analyses, and beginner-friendly analytical projects that reflect my growth.
          </p>
          <p className="leading-relaxed text-lg" style={{ color: "#e0c3cc" }}>
            I'm also open to Summer Internship opportunities where I can apply my skills, work with real datasets, and
            continue growing as an analyst.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Education Block */}
        <div
          className="rounded-lg p-6 transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#351b42"
            e.currentTarget.style.boxShadow = "0 0 20px rgba(246,165,192,0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2e1637"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Education
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-1" style={{ color: "#f6a5c0" }}>
                Savitribai Phule Pune University
              </h4>
              <p className="text-sm" style={{ color: "#e0c3cc" }}>
                Bachelor of Engineering (Computer Science)
              </p>
              <p className="text-sm mt-1" style={{ color: "#b8a0b8" }}>
                Sep 2024 – Jun 2028
              </p>
              <p className="text-sm mt-2" style={{ color: "#f6a5c0" }}>
                First Year CGPA: 9.05
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "#f6a5c0" }}>
                Symbiosis Junior College
              </h4>
              <p className="text-sm" style={{ color: "#e0c3cc" }}>
                Higher Secondary – Science
              </p>
              <p className="text-sm mt-1" style={{ color: "#b8a0b8" }}>
                Sep 2022 – Jun 2024
              </p>
              <p className="text-sm mt-2" style={{ color: "#f6a5c0" }}>
                Percentage: 80.67%
              </p>
              <p className="text-sm mt-2" style={{ color: "#b8a0b8" }}>
                Activities: Creative writing, essay competitions, Student Editor of the Symbi Tribe Magazine
              </p>
            </div>
          </div>
        </div>

        {/* Skills Block */}
        <div
          className="rounded-lg p-6 transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#351b42"
            e.currentTarget.style.boxShadow = "0 0 20px rgba(246,165,192,0.2)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2e1637"
            e.currentTarget.style.boxShadow = "none"
          }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Skills
          </h3>

          <div className="space-y-6">
            
            {/* Tech Stack */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#f6a5c0" }}>
                Tech Stack
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {/* SQL */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
                    alt="SQL Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2" style={{ color: "#e0c3cc" }}>SQL</p>
                </div>

                {/* Python */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                    alt="Python Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2" style={{ color: "#e0c3cc" }}>Python (Pandas)</p>
                </div>

                {/* Excel */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/Microsoft_Office_Excel_%282018%E2%80%93present%29.svg"
                    alt="Excel Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2" style={{ color: "#e0c3cc" }}>Excel</p>
                </div>

                {/* Power BI */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
                    alt="Power BI Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2" style={{ color: "#e0c3cc" }}>Power BI</p>
                </div>

                {/* Tableau */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png"
                    alt="Tableau Logo"
                    className="w-12 h-12 object-contain"
                  />
                  <p className="text-sm mt-2" style={{ color: "#e0c3cc" }}>Tableau</p>
                </div>
              </div>
            </div>

            {/* Analytics + Soft Skills Block (added exactly as requested) */}
            <div className="grid grid-cols-2 gap-6">
              
              <div>
                <h4 className="font-semibold mb-3" style={{ color: "#f6a5c0" }}>
                  Analytics Skills
                </h4>
                <ul className="text-sm space-y-1" style={{ color: "#e0c3cc" }}>
                  <li>• Data Visualisation</li>
                  <li>• Data Analytics</li>
                  <li>• Business Storytelling</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3" style={{ color: "#f6a5c0" }}>
                  Soft Skills
                </h4>
                <ul className="text-sm space-y-1" style={{ color: "#e0c3cc" }}>
                  <li>• Critical Thinking</li>
                  <li>• Communication</li>
                  <li>• Storytelling</li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
