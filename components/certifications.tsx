"use client"

export default function Certifications() {
  const certifications = [
    {
      title: "Get Started using Google Analytics (GA4)",
      issuer: "Google Digital Academy (Skillshop)",
      date: "Nov 2025",
      skills: ["Data Analytics"],
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Sep 2025",
      skills: ["Critical Thinking", "Data Analytics"],
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Aug 2025",
      skills: ["Analytical Skills", "Microsoft Excel"],
    },
    {
      title: "Introduction to Data Analytics on Google Cloud",
      issuer: "Google",
      date: "Aug 2025",
      skills: ["Analytical Skills"],
    },
    {
      title: "Basic to Advanced PowerPoint",
      issuer: "Skill Nation",
      date: "Aug 2025",
      skills: ["Business Storytelling", "Microsoft PowerPoint"],
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      skills: ["Microsoft Power BI", "Data Visualisation"],
    },
    {
      title: "Scrum Foundation: Scrum in Action",
      issuer: "Skillsoft",
      date: "Jul 2025",
      skills: ["Agile Project Management", "Scrum"],
    },
    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      date: "Jun 2025",
      skills: ["Business Analysis", "Process Mapping"],
    },
  ]

  return (
    <section id="certifications" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-serif font-bold mb-12 text-foreground">Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div key={cert.title} className="glass-effect p-6 rounded-2xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
            <h3 className="text-lg font-semibold text-accent mb-2">{cert.title}</h3>
            <p className="text-foreground/80 text-sm mb-3">{cert.issuer}</p>
            <p className="text-foreground/60 text-xs mb-3">{cert.date}</p>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-[#ff4da6]/20 text-accent text-xs rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
