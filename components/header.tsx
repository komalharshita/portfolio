"use client";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{ backgroundColor: "#250e2c", borderColor: "rgba(211,195,227,0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a href="#" className="transition-transform duration-300 hover:scale-110">
          <img src="/images/kh-favicon.png" alt="KH Logo" className="rounded-full size-12" />
        </a>
        <nav className="flex gap-8 text-sm font-medium">
          <a
            hrerounded-full size-5lassName="transition-colors duration-300"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors duration-300"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="transition-colors duration-300"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
