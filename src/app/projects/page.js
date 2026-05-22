"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import portfolioData from "../../data/portfolio.json";
import { ExternalLink, BookOpen, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FadeIn from "../../components/FadeIn";
import CaseStudyModal from "../../components/Home/CaseStudyModal";

// Official Kaggle "K" icon SVG
const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.82 20H15.4l-4.52-6.52L8.2 17.2V20H5.32V4h2.88v8.28l6.8-8.28h3.4l-7.92 9.24L18.82 20z" />
  </svg>
);

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Identify ProdigyFlow as the main Hero Capstone project, others go below it
  const heroProject = portfolioData.projects.find(p => p.title.toLowerCase().includes("prodigyflow"));
  const otherProjects = portfolioData.projects.filter(p => !p.title.toLowerCase().includes("prodigyflow"));

  return (
    <div className="mx-auto pt-12">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-[var(--text-secondary)] text-lg mb-12 max-w-2xl">
            A deep dive into the data, analysis, and tools I&apos;ve used to solve complex problems and build automated pipelines.
          </p>
        </FadeIn>

        {/* Hero Capstone Project Block */}
        {heroProject && (
          <FadeIn>
            <div className="liquid-glass p-8 md:p-10 mb-16 flex flex-col h-full group relative overflow-hidden">
              {/* Backing decorative gradient blur effects */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--accent-primary)]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--accent-tertiary)]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

              {/* Status Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-purple-500/10 text-[var(--accent-primary)] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-purple-500/20">
                  Featured Capstone
                </span>
                <span className="bg-amber-500/10 text-amber-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20 flex items-center gap-1">
                  ★ Main Hero Project
                </span>
              </div>

              <h2 className="text-3xl md:text-4.5xl font-extrabold tracking-tight mb-4 text-gradient">
                {heroProject.title}
              </h2>

              <div className="flex flex-wrap gap-2 mb-8">
                {heroProject.tech.map((t) => (
                  <span key={t} className="glass-pill text-[10.5px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Side-by-Side Grid: Left Details, Right Media */}
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <p className="text-[var(--text-secondary)] text-base md:text-lg mb-6 leading-relaxed font-medium">
                      {heroProject.points[0]}
                    </p>
                    
                    <ul className="space-y-4 text-[var(--text-secondary)] mb-6">
                      {heroProject.points.slice(1).map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-2 w-2 h-2 rounded-full bg-[var(--accent-secondary)] shrink-0 shadow-[0_0_6px_rgba(219,39,119,0.8)]" />
                          <span className="text-sm md:text-base leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6 items-center">
                    {heroProject.links.github && (
                      <a href={heroProject.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium border border-[var(--glass-border)] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 shadow-sm">
                        <FaGithub size={18} /> View Code
                      </a>
                    )}
                    {heroProject.links.demo && (
                      <a href={heroProject.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm hover:text-[var(--accent-primary)] transition-colors font-medium border border-[var(--glass-border)] px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 shadow-sm">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    )}
                    <a href="https://www.kaggle.com/competitions/agents-intensive-capstone-project/writeups/ProdigyFlow#3329994" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-[var(--accent-tertiary)] hover:text-white transition-colors font-medium border border-[var(--glass-border)] px-4 py-2.5 rounded-xl bg-[var(--accent-tertiary)]/5 hover:bg-[var(--accent-tertiary)]/15 shadow-sm">
                      <KaggleIcon /> Kaggle Capstone Writeup
                    </a>
                    {heroProject.caseStudy && (
                      <button
                        onClick={() => setSelectedProject(heroProject)}
                        className="text-sm font-bold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1.5 cursor-pointer ml-1 py-2"
                      >
                        <BookOpen size={16} /> Read Capstone Case Study <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Media Showcase: YouTube embed + System Architecture Image */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold mb-2 block pl-1">
                      🎬 Video Walkthrough & Demo
                    </span>
                    <iframe 
                      className="w-full aspect-video rounded-2xl border border-[var(--glass-border)] shadow-xl bg-black"
                      src="https://www.youtube.com/embed/K_h24qa9SRs"
                      title="ProdigyFlow Video Demo"
                      allowFullScreen
                    />
                  </div>
                  
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] font-bold mb-2 block pl-1">
                      ⚙️ Automated Pipeline System Architecture
                    </span>
                    <div 
                      onClick={() => setSelectedProject(heroProject)}
                      className="w-full h-44 overflow-hidden rounded-2xl border border-[var(--glass-border)] shadow-xl relative cursor-pointer group"
                    >
                      <img 
                        src="/arch.png" 
                        alt="ProdigyFlow System Architecture"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <BookOpen size={12} /> Click to View Architecture & Case Study
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Section Heading for other projects */}
        <FadeIn>
          <h3 className="text-2xl font-bold mb-8 pl-1">All Analytics Projects</h3>
        </FadeIn>

        {/* 3-Column Grid for other projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {otherProjects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="liquid-glass p-6 flex flex-col h-full group">
                {project.image && (
                  <div className="w-full h-40 overflow-hidden rounded-2xl mb-6 border border-[var(--glass-border)] relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <h4 className="text-xl font-bold mb-3 line-clamp-2">{project.title}</h4>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="glass-pill text-[9px] uppercase tracking-wider text-[var(--accent-tertiary)] bg-[var(--glass-border)] px-2.5 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex-grow mb-4">
                  <ul className="space-y-2.5 text-[var(--text-secondary)] mb-6">
                    {project.points.slice(0, 2).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--accent-secondary)] shrink-0" />
                        <span className="text-xs leading-relaxed line-clamp-3">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.caseStudy && (
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[var(--accent-primary)] hover:text-[var(--accent-secondary)] transition-colors flex items-center gap-1.5 mb-6 cursor-pointer self-start py-1"
                  >
                    <BookOpen size={14} /> Read Detailed Case Study <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                )}

                <div className="flex gap-4 mt-auto border-t border-[var(--glass-border)] pt-4">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <FaGithub size={15} /> Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-xs hover:text-[var(--accent-primary)] transition-colors font-medium">
                      <ExternalLink size={15} /> Demo
                    </a>
                  )}
                  {project.links.kaggle && (
                    <a href={project.links.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-[var(--accent-tertiary)] hover:text-white transition-colors font-medium">
                      <KaggleIcon /> Kaggle
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

