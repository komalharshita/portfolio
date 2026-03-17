'use client';

import React, { useState, useEffect } from 'react';

interface Skill {
  name: string;
  level: number;
}

const SKILLS: Skill[] = [
  { name: 'Python', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'Data Visualization', level: 75 },
  { name: 'Data Analytics', level: 72 },
  { name: 'EDA', level: 68 },
  { name: 'Business Analytics', level: 55 },
];

const TOOLS = [
  { name: 'Excel', level: 85 },
  { name: 'Power BI', level: 60 },
  { name: 'GitHub', level: 94 },
  { name: 'Notion', level: 97 },
  { name: 'Google Sheets', level: 65 },
  { name: 'VS Code', level: 95 },
  { name: 'Tableau', level: 45 },
  { name: 'Canva', level: 90 },
];

function SkillBar({ skill }: { skill: Skill }) {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayLevel(skill.level);
    }, 100);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs" style={{ color: `hsl(var(--muted-foreground))` }}>{displayLevel}%</span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${displayLevel}%` }}
        />
      </div>
    </div>
  );
}

export default function MySkillsTab() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* SKILL CHART */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6">Technical Skills</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>

      {/* TOOLS DASHBOARD */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6">Tools & Technologies</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {TOOLS.map((tool) => (
            <div key={tool.name} className="p-4 rounded-lg transition-all hover:scale-105 hover:-translate-y-1"
              style={{
                backgroundColor: `hsl(var(--secondary) / 0.5)`,
                cursor: 'pointer',
              }}>
              <h4 className="font-semibold text-sm mb-2">{tool.name}</h4>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
              <p className="text-xs mt-1" style={{ color: `hsl(var(--muted-foreground))` }}>{tool.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
