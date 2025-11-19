"use client"

import { useState, useEffect } from "react"

interface CaseStudyModalProps {
  isOpen: boolean
  onClose: () => void
  data: {
    id: number
    title: string
    subtitle: string
    description: string
    githubLink: string
    sections: {
      business: string
      tools: string
      cleaning: string
      exploratory: string
      visualizations: string
      insights: string
      impact: string
    }
  }
}

export default function CaseStudyModal({ isOpen, onClose, data }: CaseStudyModalProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const isKalakatha = data.id === 2

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 animate-fade-in transition-all duration-300"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 overflow-y-auto animate-fade-in">
        <div className="flex items-center justify-center min-h-screen p-4 md:p-8">
          <div className="relative w-full max-w-4xl bg-black/80 border border-[#ff4da6]/30 rounded-3xl backdrop-blur-xl shadow-[0_0_60px_rgba(255,77,166,0.3)] overflow-hidden">
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center bg-[#ff4da6] text-black rounded-full font-bold text-2xl hover:shadow-[0_0_20px_rgba(255,77,166,0.6)] transition-all duration-300 hover:scale-110"
              aria-label="Close modal"
            >
              ×
            </button>

            <div className="p-8 md:p-12 space-y-8 max-h-[90vh] overflow-y-auto">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">{data.title}</h1>
                <div className="h-1 w-24 bg-gradient-to-r from-[#ff4da6] to-[#ff1a7f] rounded-full" />
                <p className="text-white/80 text-lg">{data.subtitle}</p>
                <p className="text-white/60 text-base leading-relaxed">{data.description}</p>
              </div>

              <div className="space-y-8">
                <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                  <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">
                    {isKalakatha ? "Project Overview" : "Business Problem & Context"}
                  </h2>
                  <p className="text-white/80 leading-relaxed">{data.sections.business}</p>
                </section>

                <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                  <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">Tools & Technologies</h2>
                  <p className="text-white/80 leading-relaxed">{data.sections.tools}</p>
                </section>

                {!isKalakatha && (
                  <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                    <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">Data Cleaning & Steps</h2>
                    <p className="text-white/80 leading-relaxed">{data.sections.cleaning}</p>
                  </section>
                )}

                {!isKalakatha && (
                  <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                    <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">Exploratory Analysis</h2>
                    <p className="text-white/80 leading-relaxed">{data.sections.exploratory}</p>
                  </section>
                )}

                {!isKalakatha && (
                  <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                    <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">Visualizations & Charts</h2>
                    <div className="w-full h-64 bg-gradient-to-br from-[#ff4da6]/20 to-black/60 rounded-xl flex items-center justify-center border border-white/10">
                      <div className="text-center">
                        <div className="text-white/40 text-lg">📊 Visualization Preview</div>
                        <div className="text-white/20 text-sm mt-2">Charts & Graphs Coming Soon</div>
                      </div>
                    </div>
                    <p className="text-white/80 leading-relaxed">{data.sections.visualizations}</p>
                  </section>
                )}

                <section className="space-y-3 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff4da6]/30 transition-all">
                  <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">
                    {isKalakatha ? "Key Features & Impact" : "Insights & Findings"}
                  </h2>
                  <p className="text-white/80 leading-relaxed">{data.sections.insights}</p>
                </section>

                <section className="space-y-3 p-6 rounded-2xl bg-[#ff4da6]/10 border border-[#ff4da6]/30 hover:border-[#ff4da6]/50 transition-all">
                  <h2 className="text-2xl font-bold text-[#ff4da6] font-serif">
                    {isKalakatha ? "Vision & Mission" : "Impact & Conclusion"}
                  </h2>
                  <p className="text-white/80 leading-relaxed">{data.sections.impact}</p>
                </section>

                <div className="flex flex-col md:flex-row gap-4 pt-4">
                  <a
                    href={data.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-[#ff4da6] text-black rounded-xl font-bold text-lg transition-all transform cta-button"
                  >
                    View on GitHub →
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 px-6 py-4 bg-white/10 text-white rounded-xl font-bold text-lg border border-white/20 hover:border-[#ff4da6] hover:text-[#ff4da6] transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
