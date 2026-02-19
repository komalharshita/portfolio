"use client";

import { useEffect } from "react";

export default function Process() {
  useEffect(() => {
    const steps = document.querySelectorAll(".step");
    const avatarBox = document.getElementById("avatarBox");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach((step) => observer.observe(step));
    if (avatarBox) observer.observe(avatarBox);
  }, []);

  return (
    <section className="bg-pattern-overlay relative mt-24 mb-24">
      {/* PROCESS TIMELINE PATTERN */}
      <div className="bg-process-pattern absolute inset-0 pointer-events-none" />
      
      <div className="wrapper">
        <h2>My Process, Step-by-Step</h2>

        {/* Timeline */}
        <div className="timeline"></div>

        {/* LEFT: Steps */}
        <div className="process-container">
          <div className="step">
            <div className="dot"></div>
            <div className="number">01</div>
            <div>
              <p className="step-title">Discovery</p>
              <p className="step-desc">
                Understanding your goals, challenges, and audience.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div className="number">02</div>
            <div>
              <p className="step-title">Strategy</p>
              <p className="step-desc">
                Crafting a data-driven approach aligned with your objectives.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div className="number">03</div>
            <div>
              <p className="step-title">Design</p>
              <p className="step-desc">
                Creating workflows, dashboards, or systems that match your
                vision.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div className="number">04</div>
            <div>
              <p className="step-title">Delivery</p>
              <p className="step-desc">
                Providing complete assets, documentation, and insights.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="dot"></div>
            <div className="number">05</div>
            <div>
              <p className="step-title">Ongoing Support</p>
              <p className="step-desc">
                Refinements, updates, and improvements over time.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Avatar */}
        <div className="avatar-box" id="avatarBox">
          <img src="/images/p_book.png" alt="Avatar Placeholder" />
        </div>
      </div>

      {/* === SPECIALTIES SECTION === */}
      <div className="max-w-6xl mx-auto px-4 mt-4 mb-4 text-left">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold" style={{ color: "#cc8db3" }}>
              Services
            </p>

            <h2
              className="reveal text-4xl sm:text-5xl font-extrabold mt-2 relative"
              style={{ color: "#f6a5c0" }}
            >
              My{" "}
              <span className="relative inline-block">
                <span
                  className="reveal absolute rounded-full -left-2 -top-3"
                  style={{
                    width: "55px",
                    height: "55px",
                    background: "#f6a5c0",
                    opacity: 0.25,
                    zIndex: -1,
                  }}
                ></span>
                Specialties
              </span>
            </h2>
          </div>

          <p
            className="reveal max-w-md text-sm leading-relaxed"
            style={{ color: "#e0c3cc" }}
          >
            I help turn raw data into clear insights through structured
            analysis, visualization, and data-driven storytelling — blending
            analytics, design, and problem-solving.
          </p>
        </div>

        {/* GRID WRAPPER
            On large screens this creates: 3 equal columns + one fixed 300px CTA column to the right.
            Tailwind arbitrary value used for custom column layout.
        */}
        <div
          className="relative text-justify gap-5 mx-1.5 my-1.5 px-7 border-0"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr) 300px",
            alignItems: "start",
            gap: "24px",
          }}
        >

          {/* Specialty Cards */}
          {[
            { title: "Data Cleaning & Preparation", icon: "filter" },
            { title: "Exploratory Data Analysis (EDA)", icon: "search" },
            { title: "Dashboard & Report Design", icon: "presentation" },
            { title: "SQL Querying & Databases", icon: "database" },
            { title: "Python for Analytics", icon: "code" },
            { title: "Business Intelligence", icon: "bar-chart" },
          ].map((item, i) => (
            <div
              key={item.title}
              className="opacity-0 translate-y-6 animate-fade-up p-6 rounded-2xl border flex flex-col justify-between min-h-[140px]"
              style={{
                animationDelay: `${0.1 * i}s`,
                background: "#2e1637",
                borderColor: "rgba(246,165,192,0.15)",
              }}
            >
              <i
                data-lucide={item.icon}
                className="w-7 h-7 mb-4"
                style={{ color: "#f6a5c0" }}
              ></i>

              <h3
                className="reveal text-lg font-semibold"
                style={{ color: "#f7c2ca" }}
              >
                {item.title}
              </h3>

              <span
                className="text-xl mt-4 inline-block mb-0 py-0"
                style={{ color: "#f6a5c0" }}
              >
                ↗
              </span>
            </div>
          ))}

          {/* CTA Box: force into right column (col 4) and span 2 rows */}
          <a
            href="https://www.linkedin.com/in/komalharshita/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between rounded-2xl p-10 transition-all hover:-translate-y-1 px-10 my-5 py-24"
            style={{
              background: "linear-gradient(135deg, #837ab6, #f6a5c0)",
              color: "white",
              boxShadow: "0 0 20px rgba(246,165,192,0.3)",
              gridColumn: 4,
              gridRow: "1 / span 2",
              height: "100%",
            }}
          >

            <div className="text-4xl text-right">↗</div>

            <div>
              <p className="reveal text-sm opacity-80 text-muted">Open to Opportunities!</p>
              <h3 className="reveal text-2xl font-bold mt-2 text-left text-card">
                Available for Data Analytics Internships 2026.
              </h3>

              <span
                className="inline-block mt-6 text-lg font-semibold"
                style={{ color: "white" }}
              >
                -&gt; Contact Me
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
