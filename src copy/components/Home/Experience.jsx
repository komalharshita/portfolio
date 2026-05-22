"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="experience">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience & Leadership</h2>
      
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[var(--accent-primary)] before:to-transparent">
        {portfolioData.experience.map((job, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--bg-color)] bg-[var(--accent-primary)] text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
              <Briefcase size={16} />
            </div>
            
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                <h3 className="font-bold text-lg text-gradient leading-tight">{job.role}</h3>
                <span className="glass-pill text-[10px] sm:text-xs whitespace-nowrap">{job.period}</span>
              </div>
              <p className="text-[var(--text-primary)] font-medium mb-4">{job.company}</p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
