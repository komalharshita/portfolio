"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import portfolioData from "../../data/portfolio.json";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center items-center px-6 pt-20 pb-10 overflow-hidden" id="home">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none transition-all duration-300"
        style={{
          opacity: "var(--video-opacity)",
          mixBlendMode: "var(--video-blend-mode)",
        }}
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for seamless blending and text readability */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none transition-all duration-300"
        style={{
          background: "linear-gradient(to bottom, var(--hero-overlay-start) 0%, var(--hero-overlay-mid) 50%, var(--hero-overlay-end) 100%)"
        }}
      ></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 5.0, ease: "easeOut" }}
          className="w-full text-center backdrop-blur-xl p-8 md:p-10 rounded-3xl transition-all duration-300"
          style={{
            backgroundColor: "var(--hero-card-bg)",
            boxShadow: "var(--hero-card-shadow)",
            border: "1px solid var(--hero-card-border)",
          }}
        >
          <div className="mb-6 inline-block">
            <span className="glass-pill text-[var(--accent-secondary)]">Hello, I&apos;m {portfolioData.personal.name.split(" ")[0]}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            A <span className="text-gradient">Data Analyst</span>
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] mb-10 max-w-xl mx-auto leading-relaxed font-light">
            Bridging the gap between raw datasets and business insights using SQL, Python, Excel, and Power BI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="glass-button flex items-center gap-2">
              View Resume
            </a>
            <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="glass-button secondary flex items-center gap-2">
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

