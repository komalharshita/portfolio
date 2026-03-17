'use client';

import React, { useState } from 'react';
import { GraduationCap, Download } from 'lucide-react';
import Image from 'next/image';

export default function AboutMeTab() {
  const [showHobbies, setShowHobbies] = useState(false);

  const hobbies = ['Poetry', 'Writing', 'Guitar', 'Crocheting', 'Reading', 'Journaling', 'Creative Coding'];
  const softSkills = ['Communication', 'Problem-Solving', 'Leadership', 'Creativity', 'Collaboration'];

  const education = [
    {
      institution: 'NMIET Pune',
      degree: 'B.E. Computer Science',
      year: '2024',
      achievements: ['CGPA: 9.05', 'Honors: Distinction'],
    },
  ];

  return (
    <div className="max-w-3xl space-y-6">
      {/* PROFILE CARD */}
      <div className="stat-card">
        <div className="flex flex-col items-center text-center mb-6">
          <div
            className="w-28 h-28 rounded-full ring-4 mb-4 cursor-pointer transition-transform hover:scale-105 flex items-center justify-center"
            onClick={() => setShowHobbies(!showHobbies)}
            style={{ 
              backgroundColor: `hsl(var(--secondary) / 0.2)`,
              ringColor: `hsl(var(--primary) / 0.2)` 
            }}
          >
            <div className="text-4xl">👩‍💼</div>
          </div>

          <h1 className="text-2xl font-bold mb-2">Komal Harshita</h1>
          <p className="text-primary mb-4">ESG Analyst Intern · Data Analytics & Business Intelligence</p>

          <div className="flex gap-2 flex-wrap justify-center mb-4">
            {['McKinsey Forward Learner', 'Infosys Springboard', 'ESG Analyst @ Excelerate'].map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{
                backgroundColor: `hsl(var(--primary) / 0.1)`,
                color: `hsl(var(--primary))`,
              }}>
                {tag}
              </span>
            ))}
          </div>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all"
            style={{
              backgroundColor: `hsl(var(--primary))`,
              color: `hsl(var(--primary-foreground))`,
            }}>
            <Download className="w-4 h-4" />
            Export Resume
          </button>
        </div>

        {/* BIO */}
        <div className="space-y-3 text-sm" style={{ color: `hsl(var(--foreground) / 0.8)` }}>
          <p>
            Hi, I'm Komal — a Computer Science Engineering student at NMIET, currently exploring Data and Business Analytics.
            I'm passionate about turning raw data into actionable insights that drive real-world impact.
          </p>
          <p>
            With hands-on experience in SQL, Excel, Python, and Power BI, I enjoy identifying patterns in complex datasets and
            solving analytical challenges. I'm always eager to learn new tools and methodologies in the data analytics space.
          </p>
        </div>
      </div>

      {/* HOBBIES PANEL */}
      {showHobbies && (
        <div className="glass-card p-6 animate-slide-up">
          <h3 className="font-semibold mb-4">Hobbies & Interests</h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            {hobbies.map((hobby) => (
              <span key={hobby} className="px-3 py-2 rounded-lg text-sm"
                style={{
                  backgroundColor: `hsl(var(--accent) / 0.1)`,
                  color: `hsl(var(--accent))`,
                }}>
                {hobby}
              </span>
            ))}
          </div>
          <h4 className="font-semibold text-sm mb-3 mt-4">Soft Skills</h4>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="px-2 py-1 rounded text-xs"
                style={{
                  backgroundColor: `hsl(var(--muted))`,
                  color: `hsl(var(--muted-foreground))`,
                }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* EDUCATION SECTION */}
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-5 h-5" style={{ color: `hsl(var(--primary))` }} />
          <h3 className="font-semibold">Education</h3>
        </div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="pb-4 border-b last:border-b-0 last:pb-0"
              style={{ borderColor: `hsl(var(--border))` }}>
              <h4 className="font-semibold text-primary">{edu.institution}</h4>
              <p className="text-sm">{edu.degree}</p>
              <p className="text-xs text-muted-foreground">{edu.year}</p>
              <ul className="text-xs mt-2 space-y-1">
                {edu.achievements.map((a) => (
                  <li key={a} className="text-muted-foreground">• {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
