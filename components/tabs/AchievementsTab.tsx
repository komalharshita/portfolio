'use client';

import React, { useState } from 'react';
import { Award, CheckCircle } from 'lucide-react';

const CERTIFICATIONS = [
  {
    name: 'Data Analytics Certificate',
    platform: 'Coursera',
    year: 2025,
    status: 'Completed',
    skills: ['Data Analysis', 'Excel', 'SQL'],
  },
  {
    name: 'Power BI Desktop Master',
    platform: 'Udemy',
    year: 2025,
    status: 'Completed',
    skills: ['Power BI', 'DAX', 'Data Visualization'],
  },
  {
    name: 'Python for Data Science',
    platform: 'Coursera',
    year: 2024,
    status: 'Completed',
    skills: ['Python', 'Pandas', 'Matplotlib'],
  },
  {
    name: 'Advanced SQL for Analytics',
    platform: 'DataCamp',
    year: 2024,
    status: 'Completed',
    skills: ['SQL', 'Database Design', 'Query Optimization'],
  },
  {
    name: 'Business Analytics Professional',
    platform: 'Google Cloud',
    year: 2025,
    status: 'In Progress',
    skills: ['Analytics', 'Cloud', 'Big Data'],
  },
  {
    name: 'Tableau Public Specialist',
    platform: 'Tableau',
    year: 2024,
    status: 'Completed',
    skills: ['Tableau', 'Dashboard Design', 'Data Storytelling'],
  },
];

export default function AchievementsTab() {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const completedCount = CERTIFICATIONS.filter((c) => c.status === 'Completed').length;

  return (
    <div className="max-w-3xl space-y-6">
      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: 'Programs Completed', value: '10' },
          { label: 'Certifications Earned', value: completedCount.toString() },
          { label: 'Communities Contributed', value: '5' },
        ].map((metric) => (
          <div key={metric.label} className="stat-card text-center">
            <p className="text-xs mb-1" style={{ color: `hsl(var(--muted-foreground))` }}>{metric.label}</p>
            <p className="text-3xl font-bold" style={{ color: `hsl(var(--primary))` }}>
              {metric.value}
            </p>
          </div>
        ))}
      </div>

      {/* CERTIFICATION TABLE */}
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-6">
          <Award className="w-5 h-5" style={{ color: `hsl(var(--primary))` }} />
          <h3 className="font-semibold">Certifications</h3>
        </div>

        <div className="space-y-3">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="border rounded-lg p-4 cursor-pointer transition-all"
              style={{ borderColor: `hsl(var(--border))` }}
              onClick={() =>
                setExpandedCert(expandedCert === cert.name ? null : cert.name)
              }
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold flex items-center gap-2">
                    {cert.status === 'Completed' && (
                      <CheckCircle className="w-4 h-4" style={{ color: `hsl(var(--primary))` }} />
                    )}
                    {cert.name}
                  </h4>
                  <p className="text-sm" style={{ color: `hsl(var(--muted-foreground))` }}>{cert.platform}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full"
                  style={{
                    backgroundColor:
                      cert.status === 'Completed'
                        ? `hsl(var(--primary) / 0.1)`
                        : `hsl(var(--accent) / 0.1)`,
                    color:
                      cert.status === 'Completed'
                        ? `hsl(var(--primary))`
                        : `hsl(var(--accent))`,
                  }}>
                  {cert.status}
                </span>
              </div>

              {expandedCert === cert.name && (
                <div className="mt-4 space-y-2 text-sm animate-slide-up">
                  <p><strong>Year:</strong> {cert.year}</p>
                  <p><strong>Skills:</strong> {cert.skills.join(', ')}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
