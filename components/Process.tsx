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
    <section className="mt-24 mb-24">
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
          <img
            src="/images/p_book.png"
            alt="Avatar Placeholder"
          />
        </div>
      </div>

      {/* === SPECIALTIES SECTION === */}
        <div className="max-w-6xl mx-auto mt-32 px-4">
        {/* Header */}
        <div className="flex flex-wrap justify-between gap-6 mb-12">
            <div>
            <p className="text-sm font-semibold" style={{ color: "#cc8db3" }}>Services</p>

            <h2
                className="text-4xl sm:text-5xl font-extrabold mt-2 relative"
                style={{ color: "#f6a5c0" }}
            >
                My{" "}
                <span className="relative inline-block">
                <span
                    className="absolute rounded-full -left-2 -top-3"
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
            className="max-w-md text-sm leading-relaxed"
            style={{ color: "#e0c3cc" }}
            >
            I help turn raw data into clear insights through structured analysis,
            visualization, and data-driven storytelling — blending analytics, design,
            and problem-solving.
            </p>
        </div>

        {/* GRID WRAPPER */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">

            {/* ==== Specialty Cards ==== */}
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
                className="opacity-0 translate-y-6 animate-fade-up p-6 rounded-2xl border"
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
                className="text-lg font-semibold"
                style={{ color: "#f7c2ca" }}
                >
                {item.title}
                </h3>

                <span className="text-xl mt-4 inline-block" style={{ color: "#f6a5c0" }}>
                ↗
                </span>
            </div>
            ))}

            {/* ==== CTA BOX (right side tall block) ==== */}
            <a
            href="https://linkedin/in/komalharshita"
            className="lg:row-span-2 flex flex-col justify-between rounded-2xl p-10 transition-all hover:-translate-y-1"
            style={{
                background: "linear-gradient(135deg, #837ab6, #f6a5c0)",
                color: "white",
                boxShadow: "0 0 20px rgba(246,165,192,0.3)",
            }}
            >
            {/* Arrow top-right */}
            <div className="text-4xl text-right">↗</div>

            {/* CTA Text */}
            <div>
                <p className="text-sm opacity-80">Say Hello!</p>
                <h3 className="text-2xl font-bold mt-2">Add me on Linkedin</h3>
            </div>
            </a>
        </div>
        </div>

        {/* Fade-up animation */}
        <style jsx>{`
        @keyframes fade-up {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
            animation: fade-up 0.6s forwards ease-out;
        }
        `}</style>


      {/* ---- STYLES ---- */}
      <style jsx>{`
        :root {
          --deep-purple: #250e2c;
          --lavender-blue: #837ab6;
          --dusty-pink: #cc8db3;
          --pastel-pink: #f6a5c0;
          --light-blush: #f7c2ca;
        }

        .wrapper {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
          position: relative;
          margin: 0 auto;
          padding: 20px;
        }

        h2 {
          font-family: "Poppins", sans-serif;
          font-size: 36px;
          color: var(--pastel-pink);
          font-weight: 700;
          grid-column: 1 / -1;
          margin-bottom: 30px;
        }

        /* ===== Timeline ===== */
        .timeline {
          position: absolute;
          top: 100px;
          left: 20px;
          width: 3px;
          height: calc(100% - 150px);
          background: linear-gradient(
            180deg,
            rgba(246, 165, 192, 0.3),
            rgba(131, 122, 182, 0.3)
          );
          border-radius: 20px;
        }

        .process-container {
          max-width: 900px;
          position: relative;
          padding-left: 50px;
        }

        .step {
          position: relative;
          padding: 22px 26px;
          margin-bottom: 32px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.45s ease;
          opacity: 0;
          transform: translateY(25px);
        }

        .dot {
          position: absolute;
          left: -33px;
          top: 50%;
          transform: translateY(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: var(--pastel-pink);
          box-shadow: 0 0 14px rgba(246, 165, 192, 0.6);
        }

        .step.visible {
          opacity: 1;
          transform: translateY(0px);
        }

        .step:hover,
        .step.active {
          background: linear-gradient(
            135deg,
            var(--lavender-blue),
            var(--dusty-pink),
            var(--pastel-pink)
          );
          border: 1px solid rgba(246, 165, 192, 0.9);
          transform: translateY(-4px);
          box-shadow: 0 0 28px rgba(246, 165, 192, 0.45);
        }

        .number {
          font-family: "Poppins", sans-serif;
          font-size: 30px;
          font-weight: 700;
          min-width: 60px;
          color: var(--light-blush);
          transition: 0.3s;
        }

        .step-title {
          font-family: "Poppins", sans-serif;
          font-size: 22px;
          font-weight: 600;
          color: var(--pastel-pink);
          margin: 0;
          transition: 0.3s;
        }

        .step-desc {
          font-size: 14px;
          color: #b8a0b8;
          margin-top: 5px;
          max-width: 450px;
          transition: 0.3s;
        }

        .step:hover .number,
        .step.active .number,
        .step:hover .step-title,
        .step.active .step-title,
        .step:hover .step-desc,
        .step.active .step-desc {
          color: var(--deep-purple);
        }

        /* ===== Avatar Box ===== */
        .avatar-box {
          width: 100%;
          height: 350px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(14px);
          box-shadow: 0 0 20px rgba(246, 165, 192, 0.25);
          overflow: hidden;
          position: relative;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .avatar-box.visible {
          opacity: 1;
          transform: translateY(0px);
          box-shadow: 0 0 40px rgba(246, 165, 192, 0.45);
        }

        .avatar-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.9);
          transform: scale(1.1);
          opacity: 0;
          transition: all 0.9s cubic-bezier(0.2, 0.8, 0.3, 1);
        }

        .avatar-box.visible img {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}
