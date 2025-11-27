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
    tagline: "Autonomous data workflow agent built using Python and LangGraph.",
    repo: "prodigyflow",
    thumb: "https://via.placeholder.com/600x350?text=ProdigyFlow+Screenshot",
    tools: ["Python", "LangGraph", "OpenAI API", "MCP", "Agents", "Workflow Automation"],
    gallery: [
      "https://via.placeholder.com/600x350?text=ProdigyFlow+1",
    ],
  },
  {
    title: "Urban Sustainability Analysis",
    tagline: "Exploring sustainable city patterns using EDA.",
    repo: "CitiesOfTomorrow_EDA",
    thumb: "https://via.placeholder.com/600x350?text=Urban+Sustainability",
    tools: ["Python", "Pandas", "Seaborn", "Matplotlib", "EDA", "Data Cleaning"],
    gallery: [
      "https://via.placeholder.com/600x350?text=Urban+1",
      "https://via.placeholder.com/600x350?text=Urban+2",
      "https://via.placeholder.com/600x350?text=Urban+3",
    ],
  },
  {
    title: "Interactive Power BI Resume",
    tagline: "An interactive analytics resume built using Power BI.",
    repo: "yourdatastory-powerbi-resume",
    thumb: "https://via.placeholder.com/600x350?text=Power+BI+Resume",
    tools: ["Power BI", "DAX", "Data Modeling", "UX Design", "Dashboards"],
    gallery: [
      "https://via.placeholder.com/600x350?text=Resume+1",
      "https://via.placeholder.com/600x350?text=Resume+2",
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
  "Strengthened exploratory analysis & visualization skills",
  "Improved ability to structure insights for decision-making",
  "Demonstrated practical tool proficiency",
  "Enhanced storytelling through dashboards and reports",
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<ProjectType | null>(null);

  const openModal = (p: ProjectType) => {
    setModalProject(p);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="reveal text-center text-4xl font-bold mb-12" style={{ color: "#f6a5c0" }}>
        ☆ Featured Projects ☆
      </h2>

      {/* GRID */}
      <div className="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="card-custom p-4 rounded-2xl border border-pink-200/30 shadow-lg transition-all duration-500 cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="overflow-hidden rounded-xl">
              <Image
                src={p.thumb}
                width={600}
                height={350}
                alt={p.title}
                className="rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>

            <h3 className="text-2xl font-semibold mt-4 mb-1" style={{ color: "#f6a5c0" }}>
              {p.title}
            </h3>

            <p className="text-sm mb-3" style={{ color: "#eac7d6" }}>
              {p.tagline}
            </p>

            {/* Tools (first three) */}
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tools.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-md text-xs border border-pink-200/30"
                  style={{ background: "rgba(246,165,192,0.15)", color: "#f7c2ca" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => openModal(p)}
                className="flex-1 py-2 rounded-lg font-semibold text-sm shadow-md transition-all"
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
                className="flex-1 py-2 rounded-lg font-semibold text-sm border border-pink-200/40"
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

      {/* ===================== MODAL ===================== */}

      {modalOpen && modalProject && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex justify-center items-center"
          onClick={closeModal}
        >
          <div
            className="modal-box w-[90%] max-w-2xl p-8 rounded-2xl border border-pink-200/30 shadow-2xl relative"
            style={{ background: "#2e1637" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-2xl font-bold"
              style={{ color: "#f7c2ca" }}
            >
              ×
            </button>

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
                  style={{ background: "rgba(246,165,192,0.14)", color: "#f7c2ca" }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Key Takeaways */}
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

            {/* Gallery */}
            <h3 className="text-lg font-semibold mb-3" style={{ color: "#f6a5c0" }}>
              Project Gallery
            </h3>

            <div className="grid gap-4 mb-8">
              {modalProject.gallery.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  width={600}
                  height={350}
                  alt="project screenshot"
                  className="rounded-xl shadow-md hover:scale-[1.03] transition-transform"
                />
              ))}
            </div>

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
