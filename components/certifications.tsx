"use client"

export default function Certifications() {
  const certifications = [
    {
      abbr: "GA4",
      title: "Get Started using Google Analytics (GA4)",
      issuer: "Google Digital Academy (Skillshop)",
      date: "Nov 2025",
      skills: ["Data Analytics"],
      link: "https://skillshop.credential.net/9e5b9ea7-0d04-4bb8-a209-5571b5798dca#acc.QA0SqCLu"
    },
    {
      abbr: "DELOITTE-DA",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Sep 2025",
      skills: ["Critical Thinking", "Data Analytics"],
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf"
    },
    {
      abbr: "CISCO-DAE",
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Aug 2025",
      skills: ["Analytical Skills", "Microsoft Excel"],
      link: "https://www.netacad.com/certificates?issuanceId=c61111c3-e658-47fc-8d74-96710254df2c"
    },
    {
      abbr: "GCP-DA",
      title: "Introduction to Data Analytics on Google Cloud",
      issuer: "Google",
      date: "Aug 2025",
      skills: ["Analytical Skills"],
      link: "https://www.cloudskillsboost.google/public_profiles/5f57da2d-f94b-4f3a-8ad8-2ea2d626af73/badges/17601736?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      abbr: "PPT-ADV",
      title: "Basic to Advanced PowerPoint",
      issuer: "Skill Nation",
      date: "Aug 2025",
      skills: ["Business Storytelling", "Microsoft PowerPoint"],
      link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/"
    },
    {
      abbr: "FORAGE-PBI",
      title: "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      skills: ["Microsoft Power BI", "Data Visualisation"],
      link: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo"
    },
    {
      abbr: "SCRUM-SF",
      title: "Scrum Foundation: Scrum in Action",
      issuer: "Skillsoft",
      date: "Jul 2025",
      skills: ["Agile Project Management", "Scrum"],
      link: "https://skillsoft.digitalbadges.skillsoft.com/15c42d14-ea93-402e-bd12-540af6631328"
    },
    {
      abbr: "COURSERA-BA",
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      date: "Jun 2025",
      skills: ["Business Analysis", "Process Mapping"],
      link: "https://www.coursera.org/account/accomplishments/verify/VPCHRHR1Q8T7"
    },
  ]

  return (
    <section id="certifications" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="mb-20">
        <div className="h-px w-24 bg-gradient-to-r from-[#ff4da6] to-transparent mb-8" />
        <h2 className="text-5xl font-serif font-bold text-foreground">Certifications</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert, index) => (
          <div 
            key={cert.title} 
            className="glass-effect p-6 rounded-2xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/20 transition-all duration-300 hover:scale-105 scroll-reveal"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Clickable logo / abbreviation badge (top-right) */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open certificate for ${cert.title}`}
              className="absolute top-4 right-4 w-10 h-10 rounded-md overflow-hidden flex items-center justify-center"
            >
              {/* Image path convention: /cert-logos/{abbr}.png (place files in public/cert-logos/) */}
              <img
                src={`/cert-logos/${cert.abbr}.png`}
                alt={`${cert.issuer} logo`}
                onError={(e) => {
                  // If logo missing, hide broken image and leave fallback text — keep e.nativeEvent to avoid SSR issues
                  ;(e.currentTarget as HTMLImageElement).style.display = "none"
                }}
                className="w-full h-full object-contain"
              />

              {/* Fallback: if image not found the img hides itself; we show the abbr badge via CSS pseudo or small element below */}
              <span className="hidden" aria-hidden />
            </a>

            {/* Visual fallback badge if image file is not present — uses the same link, positioned under the image in DOM,
                but visible only when img fails and is hidden by inline onError. This ensures a clickable abbreviation badge. */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open certificate for ${cert.title}`}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xs font-semibold text-foreground/90"
              style={{ textAlign: "center", lineHeight: "1" }}
            >
              {cert.abbr}
            </a>
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
