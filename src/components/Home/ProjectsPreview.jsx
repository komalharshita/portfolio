"use client";
import { motion } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function ProjectsPreview() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto" id="projects">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link href="/projects" className="text-[var(--accent-primary)] hover:underline font-medium flex items-center gap-1">
          View all <ArrowRight size={16} />
        </Link>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioData.projects.slice(0, 3).map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card p-6 flex flex-col h-full"
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="glass-pill text-[10px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)]">
                  {t}
                </span>
              ))}
            </div>
            <p className="text-[var(--text-secondary)] text-sm mb-6 flex-grow">
              {project.points[0]}
            </p>
            <div className="flex gap-4 mt-auto">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium">
                  <FaGithub size={16} /> Code
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
