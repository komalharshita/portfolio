"use client"

export default function SkillsExpertise() {
  const categories = [
    {
      title: "Industry Knowledge",
      skills: [
        "Data Analytics",
        "Data Cleaning",
        "Data Visualisation",
        "Dashboards",
        "Data-driven Decision Making",
        "Business Analysis",
        "Process Mapping",
        "Agile Project Management",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["SQL", "Python", "Microsoft Excel", "Microsoft Power BI", "Tableau", "Microsoft PowerPoint", "Scrum", "Notion", "Canva"],
    },
    {
      title: "Interpersonal Skills",
      skills: ["Analytical Skills", "Critical Thinking", "Communication Skills", "Business Storytelling"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-serif font-bold mb-12 text-foreground">My Skills & Expertise</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.title} className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
            <h3 className="text-2xl font-semibold text-accent mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3">
                  <span className="text-accent">•</span>
                  <span className="text-foreground/90">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
