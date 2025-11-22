"use client"

export default function Certifications() {
  const certifications = [
    {
      title: "Get Started using Google Analytics (GA4)",
      issuer: "Google Digital Academy (Skillshop)",
      date: "Nov 2025",
      skills: ["Data Analytics"],
      link: "https://skillshop.credential.net/9e5b9ea7-0d04-4bb8-a209-5571b5798dca#acc.QA0SqCLu",
      logo: "/public/GA4.png",   
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Sep 2025",
      skills: ["Critical Thinking", "Data Analytics"],
      link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_4mtaiZhB6yJk3Nmt8_1758279128058_completion_certificate.pdf",
      logo: "/public/DELOITTE-DA.png",
    },
    {
      title: "Data Analytics Essentials",
      issuer: "Cisco Networking Academy",
      date: "Aug 2025",
      skills: ["Analytical Skills", "Microsoft Excel"],
      link: "https://www.netacad.com/certificates?issuanceId=c61111c3-e658-47fc-8d74-96710254df2c",
      logo: "/public/CISCO-DAE.png",
    },
    {
      title: "Introduction to Data Analytics on Google Cloud",
      issuer: "Google",
      date: "Aug 2025",
      skills: ["Analytical Skills"],
      link: "https://www.cloudskillsboost.google/public_profiles/5f57da2d-f94b-4f3a-8ad8-2ea2d626af73/badges/17601736?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      logo: "/public/GCP-DA.png",
    },
    {
      title: "Basic to Advanced PowerPoint",
      issuer: "Skill Nation",
      date: "Aug 2025",
      skills: ["Business Storytelling", "Microsoft PowerPoint"],
      link: "https://excel.jatanshah.in/your-certificate/2D120D398754-2D120D3987BB-2D041AB9D39F/",
      logo: "/public/PPT-ADV.png",
    },
    {
      title: "Data Visualisation: Empowering Business with Effective Insights Job Simulation",
      issuer: "Forage",
      date: "Jul 2025",
      skills: ["Microsoft Power BI", "Data Visualisation"],
      link: "https://www.theforage.com/simulations/tata/data-visualisation-p5xo",
      logo: "/public/FORAGE-PBI.png",
    },
    {
      title: "Scrum Foundation: Scrum in Action",
      issuer: "Skillsoft",
      date: "Jul 2025",
      skills: ["Agile Project Management", "Scrum"],
      link: "https://skillsoft.digitalbadges.skillsoft.com/15c42d14-ea93-402e-bd12-540af6631328",
      logo: "/public/SCRUM-SF.png",
    },
    {
      title: "Business Analysis & Process Management",
      issuer: "Coursera",
      date: "Jun 2025",
      skills: ["Business Analysis", "Process Mapping"],
      link: "https://www.coursera.org/account/accomplishments/verify/VPCHRHR1Q8T7",
      logo: "/public/COURSERA-BA.png",
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
            key={`${cert.title}-${index}`}
            className="relative glass-effect p-6 rounded-2xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/20 transition-all duration-300 hover:scale-105 scroll-reveal"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Clickable Logo */}
            {cert.logo && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 rounded-md overflow-hidden flex items-center justify-center"
              >
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="w-full h-full object-contain"
                />
              </a>
            )}

            <h3 className="text-lg font-semibold text-accent mb-2">{cert.title}</h3>
            <p className="text-foreground/80 text-sm mb-3">{cert.issuer}</p>
            <p className="text-foreground/60 text-xs mb-3">{cert.date}</p>

            <div className="flex flex-wrap gap-2">
              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-1 bg-[#ff4da6]/20 text-accent text-xs rounded"
                >
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
