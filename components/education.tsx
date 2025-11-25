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

      <div className="section-title">My skills</div>

      <section className="skills">
        <div className="skill">
          <div className="icon">A</div>
          <h4>App design</h4>
          <p>Figma, Adobe XD, Photoshop & Illustrator</p>
        </div>

        <div className="skill">
          <div className="icon">W</div>
          <h4>Web design</h4>
          <p>Figma, Adobe XD, Photoshop & Illustrator</p>
        </div>

        <div className="skill">
          <div className="icon">U</div>
          <h4>UX design</h4>
          <p>User research, interviews, personas, testing</p>
        </div>
      </section>

    </section>
  )
}
