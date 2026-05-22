"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FadeIn from "../../components/FadeIn";
import CaseStudyModal from "../../components/Home/CaseStudyModal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="mx-auto pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl">
            A deep dive into the data, analysis, and tools I've used to solve complex problems and build automated pipelines.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {portfolioData.projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="liquid-glass p-8 flex flex-col h-full group">
                {project.image && (
                  <div className="w-full h-48 overflow-hidden rounded-2xl mb-6 border border-[var(--glass-border)] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="glass-pill text-[10px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)]">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex-grow mb-4">
                  <ul className="space-y-3 text-[var(--text-secondary)] mb-6">
                    {project.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shrink-0" />
                        <span className="text-sm leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1.5 mb-6 cursor-pointer self-start"
                  >
                    <BookOpen size={14} /> Read Detailed Case Study <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                <div className="flex gap-4 mt-auto border-t border-[var(--glass-border)] pt-6">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <FaGithub size={18} /> View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

