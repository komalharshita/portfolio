"use client"

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: "url('/hero-background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#ffb6c1]/40 to-[#d9a7e0]/40 blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-[#ffd3b6]/35 to-[#ff4da6]/35 blur-3xl animate-bounce"
        style={{ animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-[#d9a7e0]/30 to-[#ffb6c1]/30 blur-2xl"
        style={{ animation: "float 6s ease-in-out infinite" }}
      ></div>

      <img
        src="/cute badges/sticker  (1).png"
        alt="sticker"
        className="absolute top-32 left-20 w-20 h-20 animate-float"
        style={{ animationDuration: "3s" }}
      />
      <img
        src="/cute badges/sticker  (3).png"
        alt="sticker"
        className="absolute top-1/4 right-16 w-24 h-24 animate-bounce"
        style={{ animationDuration: "3.5s" }}
      />
      <img
        src="/cute badges/sticker  (5).png"
        alt="sticker"
        className="absolute bottom-40 left-1/4 w-20 h-20"
        style={{ animation: "float 4s ease-in-out infinite" }}
      />
      <img
        src="/cute badges/sticker  (7).png"
        alt="sticker"
        className="absolute bottom-48 right-1/3 w-24 h-24 animate-bounce"
        style={{ animationDuration: "4s" }}
      />

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="px-8 py-3 bg-[#ff4da6]/80 backdrop-blur-md text-white rounded-full font-semibold hover:bg-[#ff4da6] transition-all duration-300 border border-[#ff4da6]/50 hover:scale-105"
        >
          Explore My Work
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="px-8 py-3 bg-white/20 backdrop-blur-md text-white rounded-full font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30 hover:scale-105"
        >
          Get In Touch
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-[#ff4da6] text-2xl">↓</div>
      </div>
    </section>
  )
}
