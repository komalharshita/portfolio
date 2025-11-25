"use client"

export default function Education() {
  // Tech stack with logos
  const techStack = [
    {
      name: "SQL",
      logo: "https://upload.wikimedia.org/wikipedia/en/b/b9/Microsoft_Office_Access_%282019%E2%80%93present%29.svg",
    },
    { name: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    {
      name: "Excel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg",
    },
    { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
    { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Tableau_Software_Logo.png" },
  ]

  const analyticsSkills = ["Data Visualization", "Data Analytics", "Business Storytelling"]

  const softSkills = ["Critical Thinking", "Communication", "Problem Solving"]

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Tech Stack */}
      <div className="mb-16">
        <h2
          className="text-4xl font-bold mb-12 font-sans"
          style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif", fontWeight: 700, letterSpacing: "-1px" }}
        >
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-12 justify-start">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center gap-4 transition-all duration-300">
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_8px_24px_rgba(246,165,192,0.4)] hover:-translate-y-2 backdrop-blur-sm border border-white/10"
                style={{ backgroundColor: "rgba(246, 165, 192, 0.12)" }}
              >
                <img
                  src={tech.logo || "/placeholder.svg"}
                  alt={tech.name}
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = "none"
                  }}
                />
              </div>
              <p
                className="text-sm font-bold text-center"
                style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
              >
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Analytics Skills and Soft Skills - Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Analytics Skills */}
        <div>
          <h3
            className="text-2xl font-bold mb-8"
            style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Analytics Skills
          </h3>
          <div className="space-y-4">
            {analyticsSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-3 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(246,165,192,0.2)]"
                style={{ backgroundColor: "rgba(46, 22, 55, 0.5)" }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#f6a5c0" }}></div>
                <p style={{ color: "#e0c3cc" }}>{skill}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3
            className="text-2xl font-bold mb-8"
            style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
          >
            Soft Skills
          </h3>
          <div className="space-y-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 p-3 rounded-lg transition-all hover:shadow-[0_0_15px_rgba(246,165,192,0.2)]"
                style={{ backgroundColor: "rgba(46, 22, 55, 0.5)" }}
              >
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#f6a5c0" }}></div>
                <p style={{ color: "#e0c3cc" }}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beyond Tech */}
      <div className="mt-16">
        <h3
          className="text-2xl font-bold mb-8"
          style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}
        >
          Beyond Tech
        </h3>
        <div className="flex flex-wrap gap-3">
          {["Poetry", "Writing", "Guitar", "Crocheting"].map((hobby) => (
            <span
              key={hobby}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:shadow-[0_0_15px_rgba(246,165,192,0.3)]"
              style={{
                backgroundColor: "rgba(246, 165, 192, 0.15)",
                color: "#f6a5c0",
              }}
            >
              {hobby}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
