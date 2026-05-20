"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";

export default function Skills() {
  const categories = Object.keys(portfolioData.skills);
  
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills & Tools</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold mb-4 capitalize text-[var(--accent-primary)]">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {portfolioData.skills[category].map((skill) => (
                <span key={skill} className="glass-pill text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
