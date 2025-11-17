"use client"

export default function Languages() {
  const languages = [
    { name: "English", level: "Full Professional" },
    { name: "Hindi", level: "Full Professional" },
    { name: "Spanish", level: "Elementary" },
    { name: "Telugu", level: "Native or Bilingual" },
  ]

  return (
    <section id="languages" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-5xl font-serif font-bold mb-12 text-foreground">Languages</h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
        {languages.map((lang) => (
          <div key={lang.name} className="glass-effect p-6 rounded-2xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/10 transition-all">
            <p className="text-lg font-semibold text-accent mb-2">{lang.name}</p>
            <p className="text-foreground/90">{lang.level}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
