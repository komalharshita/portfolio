"use client";
import React from "react";

const Skills: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* Section Heading */}
      <h2
        className="text-4xl font-bold mb-14 text-center"
        style={{ color: "#f6a5c0" }}
      >
        My Skills
      </h2>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* ====================== CARD 1: TECHNICAL SKILLS ====================== */}
        <div
          className="p-6 rounded-2xl transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Technical Skills
          </h3>

          <ul className="space-y-3 text-sm" style={{ color: "#e0c3cc" }}>
            {[
              "Python",
              "SQL Queries",
              "Data Visualization",
              "Data Analytics",
              "Exploratory Data Analysis (EDA)",
              "Business Analytics",
            ].map((skill) => (
              <li
                key={skill}
                className="px-4 py-2 w-fit rounded-full text-sm font-medium shadow-sm"
                style={{
                  background: "rgba(246, 165, 192, 0.15)",
                  border: "1px solid rgba(246,165,192,0.3)",
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* ====================== CARD 2: SOFTWARE & TOOLS ====================== */}
        <div
          className="p-6 rounded-2xl transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
        >
          <h3 className="text-xl font-bold mb-6" style={{ color: "#f6a5c0" }}>
            Software & Tools
          </h3>

          <div className="space-y-6">
            {[
              { name: "Excel", level: 85 },
              { name: "Power BI", level: 60 },
              { name: "GitHub", level: 94 },
              { name: "Notion", level: 97 },
              { name: "Google Sheets", level: 65 },
              { name: "VS Code", level: 95 },
              { name: "Tableau", level: 45 },
              { name: "Canva", level: 90 },
            ].map((tool) => (
              <div key={tool.name}>
                <div
                  className="flex justify-between mb-1 text-sm font-medium"
                  style={{ color: "#e0c3cc" }}
                >
                  <span>{tool.name}</span>
                  <span>{tool.level}%</span>
                </div>

                {/* Progress Bar */}
                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="h-full rounded-full"
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

        {/* ====================== CARD 3: AVATAR ONLY ====================== */}
        <div
          className="p-6 rounded-2xl text-center transition-all duration-300"
          style={{ backgroundColor: "#2e1637" }}
        >
          <div className="flex justify-center mb-6">
            <div
              className="w-28 h-28 rounded-full overflow-hidden"
              style={{
                background: "rgba(246,165,192,0.2)",
                border: "2px solid rgba(246,165,192,0.5)",
              }}
            >
              <img
                src="/images/p_working.png"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
