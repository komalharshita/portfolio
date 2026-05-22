"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import Image from "next/image";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">About Me</h2>
        
        {/* About Summary Block & Profile Image */}
        <div className="max-w-5xl mx-auto mb-16 flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="flex-1 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center md:text-left relative overflow-hidden group shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent-primary)]/10 to-[var(--accent-secondary)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-light">
              Aspiring Data Analyst with experience in <span className="text-[var(--accent-secondary)] font-medium">SQL</span>, <span className="text-[var(--accent-primary)] font-medium">Python</span>, <span className="text-[var(--accent-tertiary)] font-medium">Excel</span>, and <span className="text-[var(--accent-secondary)] font-medium">Power BI</span> through analytics internships, dashboard development, and data-driven projects. Skilled in exploratory data analysis, KPI reporting, business intelligence, and transforming raw datasets into actionable insights. Strong interest in solving operational and business problems using data visualization, reporting, and analytical thinking.
            </p>
          </div>
          
          <div className="flex-shrink-0 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-[var(--glass-border)] shadow-[0_0_40px_rgba(147,51,234,0.4)] transition-transform duration-500 hover:scale-105">
              <Image 
                src="/profile.png" 
                alt={portfolioData.personal.name} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-[var(--accent-primary)]" size={28} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="space-y-6">
              {portfolioData.education.map((edu, idx) => (
                <div key={idx}>
                  <h4 className="font-medium text-lg">{edu.degree}</h4>
                  <p className="text-[var(--text-secondary)]">{edu.institution}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="glass-pill">{edu.period}</span>
                    <span className="text-[var(--accent-secondary)] font-medium">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-[var(--accent-primary)]" size={28} />
              <h3 className="text-xl font-semibold">Top Certifications</h3>
            </div>
            <ul className="space-y-4">
              {portfolioData.certifications.slice(0, 5).map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[var(--accent-secondary)] shrink-0" />
                  <span className="text-[var(--text-secondary)] leading-tight">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
