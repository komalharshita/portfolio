"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(135deg, #250e2c 0%, #3d2847 50%, rgba(246,165,192,0.1) 100%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-20 sm:py-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-sans leading-[5.5rem] tracking-wider" style={{ color: "#f6a5c0" }}>
                PORTFOLIO
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold" style={{ color: "#cc8db3" }}>
                Komal Harshita
              </h2>
              <p className="text-sm sm:text-base" style={{ color: "#b8a0b8" }} className="pt-2">
                A CSE Sophomore @ NMIET Pune
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary" onClick={() => window.open("path-to-cv", "_blank")}>
                Download CV
              </button>
              <button className="btn-secondary" onClick={() => window.open("https://linkedin.com", "_blank")}>
                Connect on LinkedIn
              </button>
            </div>
          </div>

          {/* Right Side - Avatar with Badges */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <img
                src="/images/p_laptop.png"
                alt="Komal Harshita - Avatar"
                className="w-full h-auto object-cover rounded-2xl"
              />

              <div
                className="absolute top-8 -left-6 bg-opacity-90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"
                style={{
                  backgroundColor: "rgba(37, 14, 44, 0.9)",
                  borderLeft: "3px solid #f6a5c0",
                }}
              >
                <p className="text-xs sm:text-sm font-medium" style={{ color: "#f6a5c0" }}>
                  📊 Daily Analytics Practice
                </p>
              </div>

              <div
                className="absolute bottom-8 -right-6 bg-opacity-90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"
                style={{
                  backgroundColor: "rgba(37, 14, 44, 0.9)",
                  borderLeft: "3px solid #cc8db3",
                }}
              >
                <p className="text-xs sm:text-sm font-medium" style={{ color: "#cc8db3" }}>
                  Building Projects & Dashboards 🚀 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t"
          style={{ borderColor: "rgba(211, 195, 227, 0.3)" }}
        >
          <div className="text-center lg:text-left">
            <p className="text-xl sm:text-2xl font-bold" style={{ color: "#f6a5c0" }}>
              50+
            </p>
            <p className="text-xs sm:text-sm mt-2" style={{ color: "#b8a0b8" }}>
              Practice Exercises
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl sm:text-2xl font-bold" style={{ color: "#cc8db3" }}>
              Skilled
            </p>
            <p className="text-xs sm:text-sm mt-2" style={{ color: "#b8a0b8" }}>
              SQL, Python & BI Tools
            </p>
          </div>
          <div className="text-center lg:text-left">
            <p className="text-xl sm:text-2xl font-bold" style={{ color: "#837ab6" }}>
              2026
            </p>
            <p className="text-xs sm:text-sm mt-2" style={{ color: "#b8a0b8" }}>
              Open to Summer Internships
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
