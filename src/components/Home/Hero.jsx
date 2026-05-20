"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6" id="home">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <div className="mb-6 inline-block">
          <span className="glass-pill text-[var(--accent-secondary)]">Hello, I'm {portfolioData.personal.name.split(" ")[0]}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Aspiring <span className="text-gradient">Data Analyst</span>
        </h1>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto leading-relaxed">
          {portfolioData.personal.summary}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="mailto:komal.sony234@gmail.com" className="glass-button flex items-center gap-2">
            Let's Talk
          </a>
          <a href={portfolioData.personal.links.linkedin} target="_blank" rel="noopener noreferrer" className="glass-button secondary flex items-center gap-2">
            Connect on LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
