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
    <section id="volunteering" className="galaxy-bg py-32 px-4 relative z-10">
      <div className="mb-20">
        <div className="h-px w-24 bg-gradient-to-r from-[#ff4da6] to-transparent mb-8" />
        <h2 className="text-5xl font-serif font-bold text-foreground">Volunteering & Community</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {volunteering.map((vol, index) => (
          <div 
            key={vol.title} 
            className="glass-effect p-8 rounded-3xl border border-white/40 hover:shadow-lg hover:shadow-[#ff4da6]/20 transition-all duration-300 hover:scale-102 scroll-reveal"
            style={{
              animationDelay: `${index * 100}ms`
            }}
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-accent">{vol.title}</h3>
              <p className="text-foreground/90 font-medium text-sm">{vol.organization}</p>
              <p className="text-foreground/70 text-xs">{vol.duration}</p>
              <p className="text-foreground/80 text-xs">{vol.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
