"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Target, Compass, Award, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function CaseStudyModal({ project, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    // Close on Escape key press
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!project || !project.caseStudy) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content p-6 md:p-10"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 220 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-[var(--glass-border)] transition-colors text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          aria-label="Close Case Study"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="mb-8 pr-8">
          <span className="text-xs uppercase tracking-widest text-[var(--accent-secondary)] font-bold mb-2 block">
            Project Case Study
          </span>
          <h2 className="text-2xl md:text-4.5xl font-bold tracking-tight mb-4">
            {project.title}
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="glass-pill text-[11px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Challenge Section */}
          <section className="p-5 md:p-6 rounded-2xl border border-red-500/10 bg-red-500/5 dark:bg-red-500/5 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                <Target size={20} />
              </div>
              <h3 className="text-lg font-bold text-red-500">The Challenge</h3>
            </div>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed pl-1">
              {project.caseStudy.challenge}
            </p>
          </section>

          {/* Approach Section */}
          <section className="p-5 md:p-6 rounded-2xl border border-purple-500/10 bg-purple-500/5 dark:bg-purple-500/5">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-lg bg-purple-500/10 text-[var(--accent-primary)]">
                <Compass size={20} />
              </div>
              <h3 className="text-lg font-bold text-[var(--accent-primary)]">The Approach</h3>
            </div>
            
            <div className="space-y-4 pl-1">
              {project.caseStudy.approach.map((step, index) => {
                const [title, ...descParts] = step.split(":");
                const desc = descParts.join(":");
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center">
                      <span className="w-6 h-6 rounded-full bg-[var(--glass-border)] border border-[var(--accent-primary)] flex items-center justify-center text-xs font-bold text-[var(--accent-primary)] shrink-0">
                        {index + 1}
                      </span>
                      {index < project.caseStudy.approach.length - 1 && (
                        <div className="w-0.5 h-8 bg-purple-500/10 my-1" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--text-primary)]">
                        {title}
                      </h4>
                      {desc && (
                        <p className="text-xs md:text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                          {desc.trim()}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Results Section */}
          <section className="p-5 md:p-6 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 dark:bg-emerald-500/5">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                <Award size={20} />
              </div>
              <h3 className="text-lg font-bold text-emerald-500">Results & Value Delivered</h3>
            </div>
            
            <ul className="space-y-3 pl-1">
              {project.caseStudy.results.map((result, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                    {result}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Footer actions */}
        <div className="flex flex-wrap gap-4 items-center justify-between mt-10 pt-6 border-t border-[var(--glass-border)]">
          <div className="flex gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button secondary !py-2 !px-4 !text-sm flex items-center gap-2"
              >
                <FaGithub size={16} /> View Code
              </a>
            )}
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button !py-2 !px-4 !text-sm flex items-center gap-2"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
          
          <button
            onClick={onClose}
            className="text-sm font-semibold hover:text-[var(--accent-secondary)] transition-colors py-2"
          >
            Close Case Study
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
