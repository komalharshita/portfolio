"use client";

import React, { useState, useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend as ChartLegend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, ChartLegend);

const Skills: React.FC = () => {
  /* --------------------------- TECHNICAL SKILLS --------------------------- */
  const technicalSkills = [
    {
      name: "Python",
      icon: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
    },
    {
      name: "SQL Queries",
      icon: "https://img.icons8.com/?size=100&id=J6KcaRLsTgpZ&format=png&color=000000",
    },
    {
      name: "Data Visualization",
      icon: "https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000",
    },
    {
      name: "Data Analytics",
      icon: "https://img.icons8.com/?size=100&id=eRN6xwYNB76I&format=png&color=000000",
    },
    {
      name: "Exploratory Data Analysis (EDA)",
      icon: "https://img.icons8.com/?size=100&id=UT0KFoaguV2Z&format=png&color=000000",
    },
    {
      name: "Business Analytics",
      icon: "https://img.icons8.com/?size=100&id=6R735OAB4eCV&format=png&color=000000",
    },
  ];

  /* ----------------------------- TOOL SKILLS ------------------------------ */
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

  /* --------------------------- ANIMATED LEVELS ---------------------------- */
  const [animatedLevels, setAnimatedLevels] = useState<number[]>(
    tools.map(() => 0)
  );
  const timers = useRef<number[]>([]);

  /* --------------------------- ANIMATE NUMBERS ---------------------------- */
  useEffect(() => {
    timers.current.forEach((id) => clearInterval(id));
    timers.current = [];

    setAnimatedLevels(tools.map(() => 0));

    tools.forEach((tool, index) => {
      let current = 0;
      const end = tool.level;
      const duration = 700;
      const stepTime = 16;
      const steps = Math.floor(duration / stepTime);
      const increment = end / steps;

      const id = window.setInterval(() => {
        current += increment;
        if (current >= end) {
          current = end;
          clearInterval(id);
        }

        setAnimatedLevels((prev) => {
          const updated = [...prev];
          updated[index] = Math.floor(current);
          return updated;
        });
      }, stepTime);

      timers.current.push(id);
    });

    return () => {
      timers.current.forEach((id) => clearInterval(id));
      timers.current = [];
    };
  }, [tools]);

  /* --------------------------- SORT FUNCTIONS ----------------------------- */
  const sortAscending = () => {
    const sorted = [...tools].sort((a, b) => a.level - b.level);
    setTools(sorted);
    setAnimatedLevels(sorted.map(() => 0));
  };

  const sortDescending = () => {
    const sorted = [...tools].sort((a, b) => b.level - a.level);
    setTools(sorted);
    setAnimatedLevels(sorted.map(() => 0));
  };

  /* -------------------------- TECHNICAL PIE CHART ------------------------- */
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
        borderWidth: 0,
      },
    ],
  };

  const donutOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#f7c2ca",
          padding: 10,
        },
      },
    },
  };

  /* ------------------------------------------------------------------------ */

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2 className="reveal section-title text-4xl font-bold mb-14">My Skills</h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        
        {/* ---------------------- TECHNICAL SKILLS ---------------------- */}
        <div
          className="p-6 rounded-2xl"
          style={{ backgroundColor: "#2e1637" }}
        >
          <h3 className="reveal text-xl font-bold mb-4" style={{ color: "#f6a5c0" }}>
            Technical Skills
          </h3>

          <ul className="space-y-3 text-sm mb-8">
            {technicalSkills.map((skill) => (
              <li
                key={skill.name}
                className="flex items-center gap-3 px-3 py-2 w-fit rounded-full"
                style={{
                  background: "rgba(246, 165, 192, 0.15)",
                  border: "1px solid rgba(246,165,192,0.3)",
                }}
              >
                <img
                  src={skill.icon}
                  className="w-5 h-5 object-contain"
                  alt={skill.name}
                />
                <span style={{ color: "#e0c3cc" }}>{skill.name}</span>
              </li>
            ))}
          </ul>

          {/* PIE CHART */}
          <div className="mx-auto w-full max-w-xs h-48 md:h-56 relative">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>

        {/* ---------------------- SOFTWARE & TOOLS ---------------------- */}
        <div
          className="p-6 rounded-2xl"
          style={{ backgroundColor: "#2e1637" }}
        >
          <h3 className="reveal text-xl font-bold mb-4" style={{ color: "#f6a5c0" }}>
            Software & Tools
          </h3>

          <div className="flex gap-3 mb-5">
            <button
              onClick={sortAscending}
              className="px-3 py-1 text-xs rounded bg-purple-900/40 text-pink-200 border border-pink-300/30"
            >
              Sort ↑
            </button>
            <button
              onClick={sortDescending}
              className="px-3 py-1 text-xs rounded bg-purple-900/40 text-pink-200 border border-pink-300/30"
            >
              Sort ↓
            </button>
          </div>

          <div className="space-y-5">
            {tools.map((tool, index) => (
              <div key={tool.name}>
                <div
                  className="flex justify-between text-sm font-medium"
                  style={{ color: "#e0c3cc" }}
                >
                  <span>{tool.name}</span>
                  <span>{animatedLevels[index]}%</span>
                </div>

                <div
                  className="w-full h-3 rounded-full overflow-hidden mt-1"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${animatedLevels[index]}%`,
                      background:
                        "linear-gradient(90deg, #ff99c8, #c774b6, #8b5f9b)",
                      boxShadow: "0 0 8px rgba(246,165,192,0.5)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------------- AVATAR ---------------------- */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/p_working.png"
            alt="Avatar"
            className="object-cover w-56 h-72 md:w-64 md:h-80 rounded-3xl shadow-lg"
            style={{
              boxShadow: "0 0 30px rgba(246,165,192,0.3)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
