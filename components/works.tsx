"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProjectType {
  title: string;
  tagline: string;
  repo: string;
  thumb: string;
  tools: string[];
  gallery: string[];
}

const projects: ProjectType[] = [
  {
    title: "ProdigyFlow",
    tagline:
      "Autonomous data workflow agent built using Python, LangGraph and automation pipelines to streamline analytics tasks with clarity and speed.",
    repo: "prodigyflow",
    thumb: "/projects/prodigy_tb.png",
    tools: ["Python", "NumPy", "Gen AI", "Pandas", "Maptpotlib", "Seaborn"],
    gallery: ["/projects/PRODIGYFLOW ARCH.png"],
  },
  {
    title: "Urban Sustainability Analysis",
    tagline:
      "Explores sustainability indicators across global cities using structured EDA, data cleaning workflows, pattern exploration and visual analytics.",
    repo: "CitiesOfTomorrow_EDA",
    thumb: "/projects/urban_tb.png",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA", "Data Cleaning"],
    gallery: ["/projects/1.png", "/projects/2.png", "/projects/4.png"],
  },
  {
    title: "Interactive Power BI Resume",
    tagline:
      "Interactive analytics resume designed in Power BI with storytelling layouts, dynamic visual elements and user-centered dashboard design.",
    repo: "yourdatastory-powerbi-resume",
    thumb: "/projects/resume_tb.png",
    tools: ["Power BI", "DAX", "Data Modeling", "UX Design", "Dashboards"],
    gallery: [
      "/projects/resume_gallery.png",
      "/projects/resume_galleryy.png",
    ],
  },
];

const sharedSummary = `
This project demonstrates strong analytical thinking, a structured workflow approach,
and the ability to convert raw datasets into meaningful insights. It showcases data
cleaning, exploration, visualization, and storytelling using modern analytics tools.
`;

const sharedTakeaways = [
  "Built a clean end-to-end workflow from raw data to insights",
  "Improved exploratory analysis & visualization skills",
  "Strengthened ability to structure insights for decision-making",
  "Demonstrated tool proficiency and practical problem-solving",
  "Enhanced storytelling through dashboards and visual reports",
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);
  const [slide, setSlide] = useState(0);

  // Open modal + reset carousel slide
  const openModal = (p: ProjectType) => {
    setModalProject(p);
    setSlide(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Carousel controls
  const nextSlide = () => {
    if (!modalProject) return;
    setSlide((prev) => (prev + 1) % modalProject.gallery.length);
  };

  const prevSlide = () => {
    if (!modalProject) return;
    setSlide((prev) =>
      prev === 0 ? modalProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      {/* Title */}
      <h2
        className="reveal-left section-title text-4xl font-bold mb-12"
        style={{ color: "#f6a5c0", textAlign: "center" }}
      >
        My Works
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        {projects.map((p, i) => (
          <div
            key={i}
            onClick={() => openModal(p)}
            className="scroll-fade-up stagger-item card-custom p-5 rounded-3xl border border-pink-200/30 shadow-lg 
                       transition-all duration-500 text-left cursor-pointer"
          >
            {/* THUMBNAIL */}
            <div className="overflow-hidden rounded-2xl mb-4">
              <Image
                src={p.thumb}
                width={500}
                height={300}
                alt={p.title}
                className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-1" style={{ color: "#f6a5c0" }}>
              {p.title}
            </h3>

            {/* TAGLINE */}
            <p className="text-sm mb-4" style={{ color: "#eac7d6" }}>
              {p.tagline}
            </p>

            {/* TOOLS */}
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tools.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs border border-pink-200/30"
                  style={{ background: "rgba(246,165,192,0.18)", color: "#f7c2ca" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(p);
                }}
                className="flex-1 py-2 rounded-lg font-semibold text-sm shadow-md
                           transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, #837ab6, #cc8db3, #f6a5c0)",
                  color: "#250e2c",
                }}
              >
                Know More
              </button>

              <a
                href={`https://github.com/komalharshita/${p.repo}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 py-2 rounded-lg font-semibold text-sm border border-pink-200/40 text-center"
                style={{
                  background: "rgba(246,165,192,0.12)",
                  color: "#f6a5c0",
                }}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW MORE BUTTON */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/komalharshita"
          target="_blank"
          className="px-8 py-3 rounded-xl font-semibold text-lg"
          style={{
            background:
              "linear-gradient(135deg, #837ab6, #cc8db3, #f6a5c0)",
            color: "#250e2c",
          }}
        >
          View More Projects →
        </a>
      </div>

      {/* ===================== MODAL ===================== */}

      {modalOpen && modalProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="w-[95%] max-w-4xl max-h-[85vh] overflow-y-auto pr-3 p-8 rounded-2xl border border-pink-200/30 shadow-xl relative"
            style={{ background: "#2e1637" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold"
              style={{ color: "#f7c2ca" }}
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-3xl font-bold mb-4" style={{ color: "#f6a5c0" }}>
              {modalProject.title}
            </h2>

            {/* Summary */}
            <p className="text-sm leading-relaxed mb-6" style={{ color: "#e8c8d4" }}>
              {sharedSummary}
            </p>

            {/* Tools */}
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#f6a5c0" }}>
              Tools Used
            </h3>

            <div className="flex flex-wrap gap-2 mb-6">
              {modalProject.tools.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs border border-pink-200/30"
                  style={{ background: "rgba(246,165,192,0.16)", color: "#f7c2ca" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Takeaways */}
            <h3 className="text-lg font-semibold mb-2" style={{ color: "#f6a5c0" }}>
              Key Takeaways
            </h3>

            <ul className="text-sm space-y-2 mb-6">
              {sharedTakeaways.map((t) => (
                <li key={t} style={{ color: "#e0c3cc" }}>
                  {t}
                </li>
              ))}
            </ul>

            {/* ================= CAROUSEL ================= */}
            <h3 className="text-lg font-semibold mb-3" style={{ color: "#f6a5c0" }}>
              Project Gallery
            </h3>

            {modalProject.gallery.length > 0 ? (
              <div className="relative w-full mb-10">
                {/* IMAGE */}
                <Image
                  src={modalProject.gallery[slide]}
                  width={900}
                  height={500}
                  alt="project screenshot"
                  className="rounded-xl shadow-lg mx-auto transition-all duration-500"
                />

                {/* LEFT ARROW */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md"
                  style={{ background: "rgba(246,165,192,0.2)" }}
                >
                  ‹
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-3 rounded-full backdrop-blur-md"
                  style={{ background: "rgba(246,165,192,0.2)" }}
                >
                  ›
                </button>

                {/* INDICATORS */}
                <div className="flex justify-center gap-2 mt-3">
                  {modalProject.gallery.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => setSlide(i)}
                      className={`h-3 w-3 rounded-full cursor-pointer ${
                        i === slide ? "bg-pink-300" : "bg-pink-900/40"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            ) : (
              <p className="text-sm text-pink-200/70">No gallery available.</p>
            )}

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <a
                href={`https://github.com/komalharshita/${modalProject.repo}`}
                target="_blank"
                className="flex-1 py-3 rounded-xl text-center font-semibold"
                style={{
                  background:
                    "linear-gradient(135deg, #837ab6, #cc8db3, #f6a5c0)",
                  color: "#250e2c",
                }}
              >
                View Repository →
              </a>

              <button
                onClick={closeModal}
                className="flex-1 py-3 rounded-xl border border-pink-200/40"
                style={{
                  background: "rgba(246,165,192,0.12)",
                  color: "#f6a5c0",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
