"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { GraduationCap, Award } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="about">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">About & Education</h2>
        
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
