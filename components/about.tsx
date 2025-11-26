"use client";

export default function About() {
  return (
    <div
      id="about"
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24"
    >
      {/* Heading with small heart */}
      <h2
        class="section-title"
        className="font-bold mb-16 text-center text-5xl flex items-center justify-center gap-3"
        style={{ color: "#f6a5c0" }}
      >
        <img
          src="/cute-badges/silver-soft-heart.png"
          alt="heart"
          className="w-6 h-6 opacity-85"
        />
        About Me
      </h2>

      {/* Top Row: Portrait + Bio */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        
        {/* Avatar Container */}
          <div className="h-96 rounded-lg flex items-center justify-center overflow-hidden relative">

            {/* 🦋 Butterfly - top left */}
            <img
              src="/cute-badges/blue-butterflies.png"
              alt="butterfly"
              className="hidden sm:block absolute top-0 left-6 w-18 opacity-80 animate-float-slower pointer-events-none z-20"
            />

            {/* ✨ Sparkle above avatar */}
            <img
              src="/cute-badges/purple-sparkles.png"
              alt="sparkle"
              className="absolute top-4 right-6 w-9 opacity-80 animate-twinkle-soft pointer-events-none z-20"
            />

            {/* 🌷 Tulips bottom-right */}
            <img
              src="/cute-badges/pink-tulip-pair.png"
              alt="tulips"
              className="absolute bottom-0 right-0 top-80 w-18 opacity-85 animate-float-slow pointer-events-none z-20"
            />

            {/* ✦ Sparkle near text side */}
            <img
              src="/cute-badges/purple-sparkles.png"
              alt="sparkle"
              className="hidden lg:block absolute top-[55%] left-[52%] w-9 opacity-70 animate-twinkle-soft pointer-events-none z-20"
            />

            {/* Avatar Image — LOWER z-index */}
            <img
              src="/images/p_posing.png"
              alt="Komal Harshita"
              className="h-full w-full object-cover z-10"  //<-- BADGES WILL BE ABOVE THIS
            />

            {/* McKinsey Badge — keep on top */}
            <div
              className="absolute top-6 left-6 glass-effect px-6 py-3 rounded-lg shadow-lg transform -rotate-6 border border-white/30 pl-6 z-30"
              style={{ backgroundColor: "rgba(156, 82, 120, 0.7)" }}
            >
              <p className="font-bold text-sm text-white">McKinsey</p>
              <p className="text-xs text-white">Forward Learner</p>
            </div>
          </div>

        {/* Bio */}
        <div className="flex flex-col justify-center space-y-4">
          <p
            className="leading-relaxed text-lg"
            style={{ color: "#e0c3cc" }}
          >
            Hi, I'm Komal — a Computer Science Engineering sophomore at NMIET,
            currently exploring Data and Business Analytics. I'm building
            skills in SQL, Excel, Python (Pandas), and Power BI, and I enjoy
            identifying patterns in data and solving analytical problems.
          </p>

          <p
            className="leading-relaxed text-lg"
            style={{ color: "#e0c3cc" }}
          >
            I learn through consistent daily practice, small exercises, and
            hands-on exploration. I'm working toward building dashboards,
            case-based analyses, and beginner-friendly analytical projects
            that reflect my growth.
          </p>

          <p
            className="leading-relaxed text-lg"
            style={{ color: "#e0c3cc" }}
          >
            I'm also open to Summer Internship opportunities where I can apply
            my skills, work with real datasets, and continue growing as an
            analyst.
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Education */}
        <div
          className="rounded-lg p-6 transition-all duration-300 leading-10"
          style={{ backgroundColor: "#2e1637" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#351b42";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(246,165,192,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2e1637";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: "#f6a5c0" }}
          >
            Education
          </h3>

          <div className="space-y-6">
            <div>
              <h4
                className="font-semibold mb-1"
                style={{ color: "#f6a5c0" }}
              >
                Savitribai Phule Pune University
              </h4>
              <p className="text-sm" style={{ color: "#e0c3cc" }}>
                Bachelor of Engineering (Computer Science)
              </p>
              <p className="text-sm mt-1" style={{ color: "#b8a0b8" }}>
                Sep 2024 – Jun 2028
              </p>
              <p className="text-sm mt-2" style={{ color: "#f6a5c0" }}>
                First Year CGPA: 9.05
              </p>
            </div>

            <div>
              <h4
                className="font-semibold mb-1"
                style={{ color: "#f6a5c0" }}
              >
                Symbiosis Junior College
              </h4>
              <p className="text-sm" style={{ color: "#e0c3cc" }}>
                Higher Secondary – Science
              </p>
              <p className="text-sm mt-1" style={{ color: "#b8a0b8" }}>
                Sep 2022 – Jun 2024
              </p>
              <p className="text-sm mt-2" style={{ color: "#f6a5c0" }}>
                Percentage: 80.67%
              </p>
              <p className="text-sm mt-2" style={{ color: "#b8a0b8" }}>
                Activities: Creative writing, essay competitions, Student
                Editor of the Symbi Tribe Magazine
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies & Traits */}
        <div
          className="rounded-lg p-6 transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#351b42";
            e.currentTarget.style.boxShadow =
              "0 0 20px rgba(246,165,192,0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#2e1637";
            e.currentTarget.style.boxShadow = "none";
          }}
        >

          <div className="space-y-6">
            {/* Hobbies */}
            <div>
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: "#f6a5c0" }}
              >
                Hobbies & Creative Interests
              </h3>

              <p className="text-sm mb-4" style={{ color: "#e0c3cc" }}>
                These hobbies keep me grounded, inspired, and connected to my
                creative side.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  { label: "Poetry", icon: "✨" },
                  { label: "Writing", icon: "✍️" },
                  { label: "Guitar", icon: "🎸" },
                  { label: "Crocheting", icon: "🧵" },
                  { label: "Reading", icon: "📖" },
                  { label: "Journaling", icon: "📓" },
                  { label: "Creative Coding", icon: "💻" },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md"
                    style={{
                      background:
                        "linear-gradient(90deg, #ff99c8, #c774b6, #8b5f9b)",
                      color: "white",
                    }}
                  >
                    {item.icon} {item.label}
                  </span>
                ))}
              </div>

              {/* Traits */}
              <h4
                className="text-xl font-semibold mb-3"
                style={{ color: "#f6a5c0" }}
              >
                Personal Traits
              </h4>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Creativity", icon: "🌟" },
                  { label: "Empathy", icon: "💗" },
                  { label: "Communication", icon: "🗣" },
                  { label: "Leadership", icon: "🎯" },
                ].map((trait) => (
                  <span
                    key={trait.label}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md"
                    style={{
                      background:
                        "linear-gradient(90deg, #c774b6, #9c5fa7, #6d4b8a)",
                      color: "white",
                    }}
                  >
                    {trait.icon} {trait.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
