"use client"

export default function Volunteering() {
  const volunteering = [
    {
      title: "Google Student Ambassador",
      organization: "Gemini AI Program",
      duration: "Aug 2025 - Present",
      category: "Science and Technology",
    },
    {
      title: "Girl Rising Student Ambassador",
      organization: "Girl Rising",
      duration: "Oct 2025 - Present",
      category: "Civil Rights and Social Action",
    },
    {
      title: "Member",
      organization: "Women Techmakers",
      duration: "Oct 2025 - Present",
      category: "Technology & Community",
    },
  ]

  return (
    <section id="volunteering" className="py-32 px-4 max-w-6xl mx-auto">
      <div className="mb-20">
        <div className="h-px w-24 bg-gradient-to-r from-[#ff4da6] to-transparent mb-8" />
        <h2 className="text-5xl font-serif font-bold text-foreground">Volunteering & Community</h2>
      </div>

      <div className="space-y-6">
        {volunteering.map((vol, index) => (
          <div 
            key={vol.title} 
            className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/20 transition-all duration-300 hover:scale-102 scroll-reveal"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-2">{vol.title}</h3>
                <p className="text-foreground/90 font-medium">{vol.organization}</p>
              </div>
              <p className="text-foreground/70 text-sm">{vol.duration}</p>
            </div>
            <p className="text-foreground/80 text-sm">{vol.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
