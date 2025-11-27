"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

const Skills: React.FC = () => {
  /* ==========================================
     SOFTWARE & TOOLS STATE + SORTING
  =========================================== */
  const [tools, setTools] = useState([
    { name: "Excel", level: 85 },
    { name: "Power BI", level: 60 },
    { name: "GitHub", level: 94 },
    { name: "Notion", level: 97 },
    { name: "Google Sheets", level: 65 },
    { name: "VS Code", level: 95 },
    { name: "Tableau", level: 45 },
    { name: "Canva", level: 90 },
  ]);

  const [animatedLevels, setAnimatedLevels] = useState(
    tools.map(() => 0)
  );

  /* Animate numeric counters */
  useEffect(() => {
    tools.forEach((tool, index) => {
      let start = 0;
      const end = tool.level;
      const duration = 900;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setAnimatedLevels((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(start);
          return updated;
        });
      }, 16);
    });
  }, [tools]);

  
  const sortAscending = () => {
  const sorted = [...tools].sort((a, b) => a.level - b.level);
  setTools(sorted);
  setAnimatedLevels(sorted.map(() => 0)); // reset animation indexes
  };

  const sortDescending = () => {
  const sorted = [...tools].sort((a, b) => b.level - a.level);
  setTools(sorted);
  setAnimatedLevels(sorted.map(() => 0)); // reset animation indexes
  };


  /* ==========================================
     DONUT CHART CONFIG
  =========================================== */
  const donutData = {
    labels: ["Python", "SQL", "Viz", "Analytics", "EDA", "Business"],
    datasets: [
      {
        data: [20, 20, 15, 15, 15, 15],
        backgroundColor: [
          "#837ab6",
          "#cc8db3",
          "#f6a5c0",
          "#9d85b6",
          "#f7c2ca",
          "#d8a6c9",
        ],
        borderWidth: 1,
        borderColor: "rgba(255,255,255,0.1)",
        cutout: "62%",
      },
    ],
  };

  
  const donutOptions: any = {
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        color: "#f7c2ca",
        padding: 20,
        font: {
          size: 12,
          family: "Poppins",
        },
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};


  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2
        className="reveal section-title text-4xl font-bold mb-14 text-center"
        style={{ color: "#f6a5c0" }}
      >
        ☆ My Skills ☆
      </h2>

      {/* Grid Wrapper */}
      <div className="reveal-stagger grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-10 items-start">

        {/* ====================== TECHNICAL SKILLS CARD ====================== */}
        <div
          className="p-6 rounded-2xl transition-all duration-300 relative"
          style={{
            backgroundColor: "#2e1637",
            boxShadow: "0 0 22px rgba(246,165,192,0.35)",
            border: "1px solid rgba(246,165,192,0.25)",
          }}
        >
          <h3 className="reveal text-xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Technical Skills
          </h3>

          <ul className="space-y-3 text-sm" style={{ color: "#e0c3cc" }}>
            {[
              { name: "Python", icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" },
              { name: "SQL Queries", icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000" },
              { name: "Data Visualization", icon: "https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000" },
              { name: "Data Analytics", icon: "https://img.icons8.com/?size=100&id=eRN6xwYNB76I&format=png&color=000000" },
              { name: "Exploratory Data Analysis (EDA)", icon: "https://img.icons8.com/?size=100&id=UT0KFoaguV2Z&format=png&color=000000" },
              { name: "Business Analytics", icon: "https://img.icons8.com/?size=100&id=6R735OAB4eCV&format=png&color=000000" },
            ].map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 px-4 py-2 w-fit rounded-full text-sm font-medium shadow-sm"
                style={{
                  background: "rgba(246, 165, 192, 0.15)",
                  border: "1px solid rgba(246,165,192,0.3)",
                }}
              >
                <img src={skill.icon} className="w-5 h-5 object-contain" />
                {skill.name}
              </li>
            ))}
          </ul>

          {/* Donut Chart */}
          <div className="mt-10 mx-auto w-60 h-60 relative group">
            <div className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-500"
              style={{ background: "radial-gradient(circle, rgba(246,165,192,0.35), rgba(131,122,182,0.2))" }}
            ></div>

            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>

        {/* ====================== SOFTWARE & TOOLS CARD ====================== */}
        <div
          className="p-6 rounded-2xl transition-all duration-300 relative"
          style={{
            backgroundColor: "#2e1637",
            boxShadow: "0 0 22px rgba(246,165,192,0.35)",
            border: "1px solid rgba(246,165,192,0.25)",
          }}
        >
          {/* Sorting Buttons */}
          <div className="absolute top-6 right-6 flex gap-3">
            <button
              onClick={sortAscending}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: "rgba(246,165,192,0.25)",
                color: "#f6a5c0",
                border: "1px solid rgba(246,165,192,0.4)",
                boxShadow: "0 0 14px rgba(246,165,192,0.3)",
              }}
            >
              ↑
            </button>
            <button
              onClick={sortDescending}
              className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
              style={{
                background: "#f6a5c0",
                color: "#250e2c",
                border: "1px solid rgba(246,165,192,0.6)",
                boxShadow: "0 0 16px rgba(246,165,192,0.4)",
              }}
            >
              ↓
            </button>
          </div>

          <h3 className="reveal text-xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Software & Tools
          </h3>

          <div className="space-y-6">
            {tools.map((tool, index) => (
              <div key={tool.name} className="transition-all duration-300">
                <div
                  className="flex justify-between mb-1 text-sm font-medium"
                  style={{ color: "#e0c3cc" }}
                >
                  <span>{tool.name}</span>
                  <span>{animatedLevels[index]}%</span>
                </div>

                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${tool.level}%`,
                      background:
                        "linear-gradient(90deg, #ff99c8, #c774b6, #8b5f9b)",
                      boxShadow: "0 0 8px rgba(246,165,192,0.5)",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====================== AVATAR ====================== */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/p_working.png"
            className="object-cover w-52 h-96 border-0 rounded-4xl"
            style={{ borderColor: "rgba(246,165,192,0.5)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
