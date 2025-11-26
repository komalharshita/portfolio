"use client"

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      {/* ================= TWO COLUMN SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* ---------- LEFT: EDUCATION ---------- */}
        <div>
          <h3
            className="section-title text-2xl font-bold mb-6"
            style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif" }}
          >
            Education
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-1" style={{ color: "#250e2c" }}>
                Savitribai Phule Pune University
              </h4>
              <p className="text-sm" style={{ color: "#6b4a72" }}>
                Bachelor of Engineering (Computer Science)
              </p>
              <p className="text-sm mt-1" style={{ color: "#6b4a72" }}>
                Sep 2024 – Jun 2028
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1" style={{ color: "#250e2c" }}>
                Symbiosis Junior College
              </h4>
              <p className="text-sm" style={{ color: "#6b4a72" }}>
                Higher Secondary – Science
              </p>
              <p className="text-sm mt-1" style={{ color: "#6b4a72" }}>
                2022 – 2024
              </p>
            </div>
          </div>
        </div>

        {/* ---------- RIGHT: BEYOND TECH ---------- */}
        <div>
          <h3
            className="section-title text-2xl font-bold mb-8"
            style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif" }}
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
      </div>

      {/* ================= SKILLS SECTION (BELOW TWO COLUMNS) ================= */}
      <div className="mt-20 mb-12">
        <h2
          className="text-3xl font-bold"
          style={{ color: "#250e2c", fontFamily: "'Poppins', sans-serif" }}
        >
          My Skills
        </h2>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* Skill 1 */}
        <div
          className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(246,165,192,0.3)]"
          style={{
            backgroundColor: "rgba(246,165,192,0.12)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold"
            style={{ backgroundColor: "rgba(246,165,192,0.25)", color: "#250e2c" }}
          >
            A
          </div>
          <h4 className="text-xl font-bold text-center" style={{ color: "#250e2c" }}>
            App Design
          </h4>
          <p className="text-sm text-center mt-2" style={{ color: "#6b4a72" }}>
            Figma, Adobe XD, Photoshop & Illustrator
          </p>
        </div>

        {/* Skill 2 */}
        <div
          className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(246,165,192,0.3)]"
          style={{
            backgroundColor: "rgba(246,165,192,0.12)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold"
            style={{ backgroundColor: "rgba(246,165,192,0.25)", color: "#250e2c" }}
          >
            W
          </div>
          <h4 className="text-xl font-bold text-center" style={{ color: "#250e2c" }}>
            Web Design
          </h4>
          <p className="text-sm text-center mt-2" style={{ color: "#6b4a72" }}>
            HTML, CSS, Tailwind, React
          </p>
        </div>

        {/* Skill 3 */}
        <div
          className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(246,165,192,0.3)]"
          style={{
            backgroundColor: "rgba(246,165,192,0.12)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-xl font-bold"
            style={{ backgroundColor: "rgba(246,165,192,0.25)", color: "#250e2c" }}
          >
            U
          </div>
          <h4 className="text-xl font-bold text-center" style={{ color: "#250e2c" }}>
            UX Design
          </h4>
          <p className="text-sm text-center mt-2" style={{ color: "#6b4a72" }}>
            User research, interviews, personas, testing
          </p>
        </div>
      </section>
    </section>
  )
}
