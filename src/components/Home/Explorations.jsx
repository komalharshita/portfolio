"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Explorations() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const colLeftRef = useRef(null);
  const colRightRef = useRef(null);
  const [activeItem, setActiveItem] = useState(null);

  const explorations = [
    {
      id: 1,
      title: "The Caffeine Half-Life",
      category: "Metabolic Decay & Focus Cycles",
      description: "Tracking the decay curve of daily caffeine levels vs. productivity spikes, highlighting the exact coordinates where focus descends into jitters.",
      gradient: "from-[#022c22] to-[#047857]",
      rotation: "rotate-[-3deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 stroke-emerald-400" viewBox="0 0 200 200" fill="none">
          <path d="M20 170 H180" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <path d="M20 30 V170" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <path d="M20 40 Q40 40 80 120 T180 160" strokeWidth="1.5" />
          <circle cx="20" cy="40" r="4" fill="currentColor" />
          <circle cx="80" cy="120" r="3" fill="currentColor" />
          <circle cx="130" cy="148" r="2" fill="currentColor" />
          <path d="M80 120 Q90 100 100 130 T120 120 T140 150" strokeWidth="0.75" strokeDasharray="1 1" opacity="0.5" />
        </svg>
      )
    },
    {
      id: 2,
      title: "The Spotify Tempo Index",
      category: "Audio Analytics & Mood Scaling",
      description: "Correlating personal music tempo (Beats Per Minute) with coding velocity, demonstrating that high-BPM synthwave yields 40% fewer syntax bugs.",
      gradient: "from-[#082f49] to-[#0369a1]",
      rotation: "rotate-[4deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 fill-sky-400 stroke-sky-400" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" fill="none" opacity="0.3" />
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" fill="none" opacity="0.2" />
          <circle cx="50" cy="80" r="3" />
          <circle cx="70" cy="60" r="4" />
          <circle cx="85" cy="130" r="2.5" />
          <circle cx="120" cy="70" r="5" />
          <circle cx="140" cy="110" r="3.5" />
          <circle cx="150" cy="85" r="4" />
          <rect x="55" y="145" width="6" height="15" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="70" y="135" width="6" height="25" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="85" y="120" width="6" height="40" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="100" y="110" width="6" height="50" rx="1" fill="currentColor" stroke="none" />
          <rect x="115" y="125" width="6" height="35" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
          <rect x="130" y="140" width="6" height="20" rx="1" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    },
    {
      id: 4,
      title: "The Imposter Syndrome Wave",
      category: "Sentiment Amplitude & Career Velocity",
      description: "A cyclical sine wave tracing the monthly recurrence of imposter syndrome, showing its exact peak amplitude right before a major code deployment.",
      gradient: "from-[#2e1065] to-[#7c3aed]",
      rotation: "rotate-[-2deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 stroke-purple-400" viewBox="0 0 200 200" fill="none">
          <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
          <path d="M 10 100 C 50 20, 70 180, 100 100 C 130 20, 150 180, 190 100" strokeWidth="1.5" />
          <path d="M 10 100 C 30 50, 60 150, 100 100 C 140 50, 170 150, 190 100" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.7" />
          <circle cx="100" cy="100" r="5" fill="currentColor" />
          <circle cx="55" cy="140" r="3" fill="currentColor" />
          <circle cx="145" cy="60" r="3" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Midnight Code Commits",
      category: "Git Telemetry & Flow States",
      description: "Mapping personal coding times to reveal that the most creative, high-impact pull requests occur between 11 PM and 2 AM.",
      gradient: "from-[#3f2b0f] to-[#ca8a04]",
      rotation: "rotate-[3deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 stroke-yellow-500 fill-yellow-500" viewBox="0 0 200 200">
          <rect x="30" y="40" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="60" y="40" width="20" height="20" rx="4" fill="currentColor" opacity="0.2" />
          <rect x="90" y="40" width="20" height="20" rx="4" fill="currentColor" opacity="0.5" />
          <rect x="120" y="40" width="20" height="20" rx="4" fill="currentColor" opacity="0.8" />
          <rect x="150" y="40" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="30" y="70" width="20" height="20" rx="4" fill="currentColor" opacity="0.4" />
          <rect x="60" y="70" width="20" height="20" rx="4" fill="currentColor" />
          <rect x="90" y="70" width="20" height="20" rx="4" fill="currentColor" opacity="0.6" />
          <rect x="120" y="70" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="150" y="70" width="20" height="20" rx="4" fill="currentColor" opacity="0.3" />
          <rect x="30" y="100" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="60" y="100" width="20" height="20" rx="4" fill="currentColor" opacity="0.1" />
          <rect x="90" y="100" width="20" height="20" rx="4" fill="currentColor" opacity="0.9" />
          <rect x="120" y="100" width="20" height="20" rx="4" fill="currentColor" />
          <rect x="150" y="100" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="30" y="130" width="20" height="20" rx="4" fill="currentColor" opacity="0.7" />
          <rect x="60" y="130" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="0.75" />
          <rect x="90" y="130" width="20" height="20" rx="4" fill="currentColor" opacity="0.3" />
          <rect x="120" y="130" width="20" height="20" rx="4" fill="currentColor" opacity="0.8" />
          <rect x="150" y="130" width="20" height="20" rx="4" fill="currentColor" />
        </svg>
      )
    },
    {
      id: 7,
      title: "The StackOverflow Dependency",
      category: "Network Topography & Knowledge Graphs",
      description: "Mapping the web of logical dependencies when fixing a single CSS bug, showcasing the winding path from one simple query to 12 deep tab threads.",
      gradient: "from-[#083344] to-[#0891b2]",
      rotation: "rotate-[-5deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 stroke-cyan-400 fill-cyan-400" viewBox="0 0 200 200" fill="none">
          <path d="M 30 50 Q 80 20 100 90 T 170 150" strokeWidth="1.2" />
          <path d="M 30 50 Q 50 120 110 110 T 150 50" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="30" cy="50" r="6" />
          <circle cx="100" cy="90" r="5" />
          <circle cx="170" cy="150" r="8" fill="#ec4899" stroke="none" />
          <circle cx="110" cy="110" r="3.5" />
          <circle cx="150" cy="50" r="4" />
        </svg>
      )
    },
    {
      id: 10,
      title: "Choice Paralysis Spiral",
      category: "Multi-Criteria Decision Theory",
      description: "Visualizing the exponential expansion of possible movie choices vs. time spent browsing, showing the exact point where search time exceeds watch time.",
      gradient: "from-[#4c0519] to-[#be123c]",
      rotation: "rotate-[3deg]",
      graphic: (
        <svg className="w-full h-full opacity-70 stroke-rose-400" viewBox="0 0 200 200" fill="none">
          <path d="M 100 100 A 10 10 0 0 1 110 110 A 20 20 0 0 1 90 120 A 30 30 0 0 1 70 90 A 40 40 0 0 1 120 60 A 50 50 0 0 1 150 120" strokeWidth="1.5" />
          <path d="M 100 100 A 15 15 0 0 0 85 85 A 25 25 0 0 0 110 70 A 35 35 0 0 0 135 110 A 45 45 0 0 0 90 145" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
          <path d="M 120 60 Q 140 30 170 40" strokeWidth="1" />
          <path d="M 90 120 Q 60 140 40 120" strokeWidth="1" />
          <circle cx="170" cy="40" r="3" fill="currentColor" />
          <circle cx="40" cy="120" r="3" fill="currentColor" />
        </svg>
      )
    }
  ];

  // GSAP ScrollTrigger Pinned Center & Columns Parallax
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const colLeft = colLeftRef.current;
    const colRight = colRightRef.current;

    if (!section || !content || !colLeft || !colRight) return;

    // Create the Pinned Center ScrollTrigger
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin: content,
      pinSpacing: false,
    });

    // Create Parallax for Columns
    const parallaxTriggerLeft = gsap.fromTo(colLeft, 
      { y: 80 },
      { 
        y: -150, 
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      }
    );

    const parallaxTriggerRight = gsap.fromTo(colRight, 
      { y: 220 },
      { 
        y: -320, 
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      }
    );

    return () => {
      pinTrigger.kill();
      parallaxTriggerLeft.scrollTrigger?.kill();
      parallaxTriggerRight.scrollTrigger?.kill();
      parallaxTriggerLeft.kill();
      parallaxTriggerRight.kill();
    };
  }, []);

  return (
    <section 
      id="explorations"
      ref={sectionRef}
      className="relative min-h-[300vh] w-full overflow-hidden border-b border-[var(--glass-border)] bg-transparent transition-colors duration-300"
    >
      {/* LAYER 1: PINNED CENTER */}
      <div 
        ref={contentRef}
        className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center z-10 pointer-events-none px-6"
      >
        <div className="max-w-xl pointer-events-auto select-none p-8 md:p-10 rounded-3xl bg-[var(--bg-color)]/70 backdrop-blur-md border border-[var(--glass-border)] shadow-[var(--glass-shadow)] liquid-glass">
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-[0.3em] mb-4 block font-medium text-[var(--accent-primary)]">Explorations</span>
          
          {/* Heading */}
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-[var(--text-primary)] mb-6">
            Visual <span className="font-display italic text-[var(--text-primary)]/90 text-gradient">playground</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-sm mx-auto mb-8 leading-relaxed font-light">
            An open sandbox for testing interactive visual systems, procedural layouts, complex chart engines, and raw SVG math.
          </p>

          {/* Action button */}
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[var(--text-primary)] border border-[var(--glass-border)] transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Let&apos;s Collaborate <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </button>
        </div>
      </div>

      {/* LAYER 2: PARALLAX COLUMNS */}
      <div className="relative w-full z-20 pointer-events-none max-w-[1400px] mx-auto px-6 md:px-20 lg:px-32">
        <div className="grid grid-cols-2 gap-12 md:gap-40 w-full min-h-screen py-[25vh]">
          
          {/* Left Column (Items 1, 4, 7) */}
          <div ref={colLeftRef} className="flex flex-col gap-28 md:gap-48 items-start pointer-events-auto">
            {explorations.filter((_, i) => i % 2 === 0).map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full aspect-square max-w-[320px] rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-[2px] transition-all duration-500 cursor-pointer shadow-[var(--glass-shadow)] hover:scale-[1.03] group ${item.rotation}`}
              >
                <div className={`relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-br ${item.gradient} flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
                  
                  {/* Visual SVG representation */}
                  {item.graphic}

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end select-none">
                    <span className="text-[9px] text-white/50 tracking-[0.2em] font-semibold uppercase">{item.category}</span>
                    <span className="text-sm font-normal text-white mt-0.5">{item.title}</span>
                  </div>

                  {/* Glass indicator on hover */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                      🔍
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Items 2, 5, 10) */}
          <div ref={colRightRef} className="flex flex-col gap-28 md:gap-48 items-end pointer-events-auto">
            {explorations.filter((_, i) => i % 2 !== 0).map((item) => (
              <div 
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`w-full aspect-square max-w-[320px] rounded-3xl bg-[var(--glass-bg)] border border-[var(--glass-border)] p-[2px] transition-all duration-500 cursor-pointer shadow-[var(--glass-shadow)] hover:scale-[1.03] group ${item.rotation}`}
              >
                <div className={`relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-br ${item.gradient} flex items-center justify-center p-8`}>
                  <div className="absolute inset-0 halftone-overlay opacity-20 mix-blend-multiply" />
                  
                  {/* Visual SVG representation */}
                  {item.graphic}

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-col justify-end select-none">
                    <span className="text-[9px] text-white/50 tracking-[0.2em] font-semibold uppercase">{item.category}</span>
                    <span className="text-sm font-normal text-white mt-0.5">{item.title}</span>
                  </div>

                  {/* Glass indicator on hover */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center text-white backdrop-blur-md">
                      🔍
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-6 lightbox-backdrop"
            onClick={() => setActiveItem(null)}
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-[var(--bg-color)] border border-[var(--glass-border)] rounded-[32px] overflow-hidden shadow-2xl p-6 md:p-8 flex flex-col gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[var(--glass-border)] bg-[var(--bg-color)] hover:bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-primary)] transition-all duration-200 cursor-pointer z-50"
              >
                ✕
              </button>

              {/* Large Graphic Display */}
              <div className={`w-full aspect-[16/10] rounded-2xl bg-gradient-to-br ${activeItem.gradient} flex items-center justify-center p-12 border border-[var(--glass-border)] relative overflow-hidden`}>
                <div className="absolute inset-0 halftone-overlay opacity-25 mix-blend-multiply" />
                <div className="w-48 h-48 drop-shadow-2xl">
                  {activeItem.graphic}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-[var(--accent-primary)] font-bold tracking-[0.25em] uppercase">{activeItem.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--glass-border)]" />
                  <span className="text-[10px] text-[var(--accent-secondary)] font-semibold tracking-wider">SANDBOX</span>
                </div>
                
                <h3 className="text-3xl font-display italic text-[var(--text-primary)] tracking-wide">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-light mt-1">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .lightbox-backdrop {
          background-color: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .halftone-overlay {
          background-image: radial-gradient(rgba(0,0,0,0.15) 1px, transparent 0);
          background-size: 8px 8px;
        }
      `}} />
    </section>
  );
}
