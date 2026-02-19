"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #250e2c 0%, #3d2847 50%, rgba(246,165,192,0.1) 100%)",
        }}
      />

      {/* BADGES (absolute decorations) */}
      {/* Pink Planet Heart */}
      <img
        src="/cute-badges/pink-heart-planet.png"
        className="hidden sm:block absolute top-20 right-10 w-20 opacity-60 animate-float-slow pointer-events-none"
        alt="Pink Heart Planet"
      />

      {/* Sparkle 1 */}
      <img
        src="/cute-badges/purple-sparkles.png"
        className="hidden sm:block absolute top-10 left-[20%] w-8 opacity-80 animate-twinkle-soft pointer-events-none"
        alt="Sparkle"
      />

      {/* Sparkle 2 */}
      <img
        src="/cute-badges/purple-sparkles.png"
        className="hidden sm:block absolute bottom-20 left-10 w-5 opacity-70 animate-twinkle-soft pointer-events-none"
        alt="Sparkle"
      />


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6 lg:space-y-8 text-left order-2 lg:order-1">
            <div className="space-y-3">
              <h1
                className="heading-reveal text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight sm:leading-snug lg:leading-[5.5rem] tracking-wider text-left"
                style={{ color: "#f6a5c0" }}
              >
                PORTFOLIO
              </h1>
              <h2
                className="heading-reveal-delayed text-xl sm:text-2xl lg:text-4xl font-semibold text-left"
                style={{ color: "#cc8db3" }}
              >
                Komal Harshita
              </h2>
              <p
                className="text-reveal text-xs sm:text-sm lg:text-base pt-2"
                style={{ color: "#b8a0b8" }}
              >
                A CSE Sophomore @ NMIET Pune
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 items-stretch sm:items-start w-full sm:w-auto">
              <button
                className="btn-primary relative px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
                onClick={() => window.open("/MY RESUME.pdf", "_blank")}
              >
                Download CV

                {/* Silver soft heart beside button */}
                <img
                  src="/cute-badges/silver-soft-heart.png"
                  className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 opacity-80 transition-all duration-300 hover:brightness-110 size-10 sm:size-14 my-0 hidden sm:block"
                  alt="heart"
                />
              </button>

              <button
                className="btn-secondary mx-3"
                onClick={() => window.open("https://linkedin.com/in/komalharshita", "_blank")}
              >
                Connect on LinkedIn
              </button>
            </div>
          </div>

          {/* RIGHT AVATAR SIDE */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-sm">
              <img
                src="/images/p_laptop.png"
                alt="Komal Harshita - Avatar"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />

              <div
                className="absolute top-8 -left-6 bg-opacity-90 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg"
                style={{
                  backgroundColor: "rgba(37, 14, 44, 0.9)",
                  borderLeft: "3px solid #f6a5c0",
                }}
              >
                <p
                  className="reveal text-xs sm:text-sm font-medium"
                  style={{ color: "#f6a5c0" }}
                >
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
                <p
                  className="reveal text-xs sm:text-sm font-medium"
                  style={{ color: "#cc8db3" }}
                >
                  Building Projects & Dashboards 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 pt-12 sm:pt-16 border-t"
          style={{ borderColor: "rgba(211, 195, 227, 0.3)" }}
        >
          <div className="stagger-item text-center lg:text-left">
            <p
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#f6a5c0" }}
            >
              50+
            </p>
            <p
              className="text-xs sm:text-sm mt-2 text-micro-pulse"
              style={{ color: "#b8a0b8" }}
            >
              Practice Exercises
            </p>
          </div>
          <div className="stagger-item text-center lg:text-left">
            <p
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#cc8db3" }}
            >
              Skilled
            </p>
            <p
              className="text-xs sm:text-sm mt-2 text-micro-pulse"
              style={{ color: "#b8a0b8" }}
            >
              SQL, Python & BI Tools
            </p>
          </div>
          <div className="stagger-item text-center lg:text-left">
            <p
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "#837ab6" }}
            >
              2026
            </p>
            <p
              className="text-xs sm:text-sm mt-2 text-micro-pulse"
              style={{ color: "#b8a0b8" }}
            >
              Open to Summer Internships
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
