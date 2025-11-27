"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="w-full mt-20 py-10 px-6 text-center"
      style={{
        background: "linear-gradient(180deg, #2e1637 0%, #250e2c 100%)",
        borderTop: "1px solid rgba(246,165,192,0.2)",
      }}
    >
      {/* 🩷 AVATAR ABOVE BRAND */}
      <img
        src="/images/p_book.png"
        alt="Avatar"
        className="w-14 h-14 rounded-full mx-auto mb-4 shadow-[0_0_12px_rgba(246,165,192,0.45)]"
      />

      {/* BRAND */}
      <div
        className="text-4xl font-extrabold tracking-wider mb-6"
        style={{
          color: "#f6a5c0",
          textShadow: "0 0 15px rgba(246,165,192,0.4)",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        K.H.
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
        {[
          { name: "About", href: "#about" },
          { name: "Skills", href: "#skills" },
          { name: "Resume", href: "#resume" },
          { name: "Projects", href: "#projects" },
          { name: "Contact", href: "#contact" },
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition-all"
            style={{ color: "#e0c3cc" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f6a5c0")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#e0c3cc")}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* COPYRIGHT */}
      <div
        className="text-xs tracking-wide"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        © 2025 komalharshita
      </div>
    </footer>
  );
};

export default Footer;
