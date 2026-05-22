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
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-screen pointer-events-none"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for seamless blending and text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0914]/90 via-[#0B0914]/30 to-[#0B0914] z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0, ease: "easeOut" }}
          className="w-full text-center bg-[#0B0914]/65 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
        >
          <div className="mb-6 inline-block">
            <span className="glass-pill text-[var(--accent-secondary)]">Hello, I'm {portfolioData.personal.name.split(" ")[0]}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Aspiring <span className="text-gradient">Data Analyst</span>
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

