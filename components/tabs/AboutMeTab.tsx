'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, GraduationCap } from 'lucide-react';

const HOBBIES = [
  { name: 'Poetry', emoji: '✍️' },
  { name: 'Writing', emoji: '📝' },
  { name: 'Guitar', emoji: '🎸' },
  { name: 'Crocheting', emoji: '🧶' },
  { name: 'Reading', emoji: '📚' },
  { name: 'Journaling', emoji: '📖' },
  { name: 'Creative Coding', emoji: '💻' },
];

const SOFT_SKILLS = ['Communication', 'Problem-Solving', 'Leadership', 'Creativity', 'Collaboration'];

const EDUCATION = [
  {
    degree: 'B.E. Computer Science Engineering',
    institution: 'NMIET Pune (SPPU)',
    year: '2022 - 2026',
    cgpa: '9.05',
    achievements: ['Distinction (CGPA > 9.0)', 'Dean\'s List', 'Merit-based Scholarship'],
  },
  {
    degree: 'Higher Secondary (12th)',
    institution: 'Jamnabai Narsee School',
    year: '2020 - 2022',
    cgpa: '95%',
    achievements: ['Science Stream', 'Merit Scholar'],
  },
  {
    degree: 'Secondary (10th)',
    institution: 'Jamnabai Narsee School',
    year: '2019 - 2020',
    cgpa: '95.2%',
    achievements: ['School Topper', 'Science Merit Award'],
  },
  {
    degree: 'Professional Certification',
    institution: 'McKinsey Forward Learner Program',
    year: '2024',
    cgpa: 'Completed',
    achievements: ['Data Analytics Foundation', 'Business Intelligence'],
  },
];

export default function AboutMeTab() {
  const [showHobbies, setShowHobbies] = useState(false);

  return (
    <div className="max-w-4xl space-y-6">
      {/* PROFILE CARD */}
      <div className="stat-card">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center gap-4">
            <motion.div
              className="w-28 h-28 rounded-full flex items-center justify-center text-6xl cursor-pointer"
              style={{ backgroundColor: 'hsl(var(--secondary) / 0.2)', borderWidth: '4px', borderColor: 'hsl(var(--primary) / 0.2))' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHobbies(!showHobbies)}
            >
              👩‍💼
            </motion.div>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
              style={{ backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Download className="w-4 h-4" />
              Export Resume
            </button>
          </div>

          {/* Info Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2" style={{ color: 'hsl(var(--primary))' }}>Komal Harshita</h1>
            <p className="mb-4" style={{ color: 'hsl(var(--accent))' }}>ESG Analyst Intern · Data Analytics & Business Intelligence</p>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
              {['McKinsey Forward Learner', 'Infosys Springboard Pragati Cohort 7', 'ESG Analyst @ Excelerate'].map((tag) => (
                <motion.span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}
                  whileHover={{ scale: 1.05 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Bio */}
            <p className="leading-relaxed text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
              Passionate data analyst focused on turning complex datasets into actionable insights. Currently interning at Excelerate as an ESG Analyst, leveraging SQL, Python, Power BI, and advanced Excel skills to drive business intelligence and sustainability initiatives. Committed to continuous learning and making data meaningful.
            </p>
          </div>
        </div>

        {/* Hobbies Panel - Animated Collapse/Expand */}
        <AnimatePresence>
          {showHobbies && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 border-t pt-6"
              style={{ borderColor: 'hsl(var(--border))' }}
            >
              <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Hobbies & Interests</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {HOBBIES.map((hobby, i) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-3 rounded-lg text-center"
                    style={{ backgroundColor: 'hsl(var(--accent) / 0.1)' }}
                  >
                    <div className="text-2xl mb-1">{hobby.emoji}</div>
                    <p className="text-xs font-medium">{hobby.name}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4 border-t" style={{ borderColor: 'hsl(var(--border))' }}>
                <h4 className="font-semibold mb-3" style={{ color: 'hsl(var(--primary))' }}>Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {SOFT_SKILLS.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: 'hsl(var(--muted) / 0.5)', color: 'hsl(var(--muted-foreground))' }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* EDUCATION SECTION */}
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-6">
          <GraduationCap className="w-5 h-5" style={{ color: 'hsl(var(--primary))' }} />
          <h3 className="text-lg font-semibold" style={{ color: 'hsl(var(--primary))' }}>Education</h3>
        </div>

        <div className="space-y-4">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-4 rounded-lg"
              style={{ backgroundColor: 'hsl(var(--secondary) / 0.1)' }}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>{edu.degree}</h4>
                  <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>{edu.cgpa}</p>
                  <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{edu.year}</p>
                </div>
              </div>
              <div className="space-y-1">
                {edu.achievements.map((achievement) => (
                  <p key={achievement} className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    ✓ {achievement}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BIO SECTION */}
      <div className="stat-card space-y-4">
        <h3 className="text-lg font-semibold" style={{ color: 'hsl(var(--primary))' }}>About Me</h3>
        <p className="leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
          I'm a Computer Science student at NMIET Pune with a strong passion for data analytics and business intelligence. My journey into data began with curiosity about how organizations use information to make strategic decisions, and it has evolved into a deep commitment to mastering the technical and analytical skills required in the field.
        </p>
        <p className="leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Currently, I'm interning as an ESG Analyst where I apply SQL, Python, and Power BI to analyze sustainability metrics and business performance data. I specialize in exploratory data analysis, dashboard creation, and turning raw numbers into compelling narratives that drive action. My focus areas include business intelligence, data visualization, and ESG analytics.
        </p>
        <p className="leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Beyond analytics, I'm an avid learner who stays current with industry trends through platforms like McKinsey Forward and Infosys Springboard. I believe in continuous growth, and whether it's through coding projects, data competitions, or professional certifications, I'm always pushing myself to expand my skillset and impact.
        </p>
      </div>
    </div>
  );
}
