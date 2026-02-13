"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: "#250e2c", borderColor: "rgba(211,195,227,0.2)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#" className="transition-transform duration-300 hover:scale-110 flex-shrink-0">
          <img src="/images/kh-favicon.png" alt="KH Logo" className="rounded-full size-10 sm:size-12" />
        </a>

        <nav className="flex gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm font-medium">

          <a
            href="#about"
            className="transition-colors duration-300 whitespace-nowrap"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            About
          </a>

          <a
            href="#projects"
            className="transition-colors duration-300 whitespace-nowrap"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            Projects
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 whitespace-nowrap"
            style={{ color: "#b8a0b8" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#b8a0b8")}
          >
            Contact
          </a>
        </nav>
      </div>

      {/* 🔥 Scroll Progress Bar */}
      <div
        className="h-1"
        style={{
          width: `${scrollProgress}%`,
          background: "linear-gradient(90deg, #837ab6, #cc8db3, #f6a5c0)",
          transition: "width 0.2s ease-out",
        }}
      ></div>
    </header>
  );
}
