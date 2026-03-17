'use client';

import React, { useState } from 'react';
import { GitBranch2, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    name: 'Sales Analytics Dashboard',
    tool: 'Power BI',
    dataset: 'E-commerce Sales',
    insight: 'Revenue trends and customer segmentation',
    github: 'github.com/komalharshita/sales-dashboard',
  },
  {
    name: 'EDA: Movie Dataset',
    tool: 'Python (Pandas, Matplotlib)',
    dataset: 'IMDB Dataset',
    insight: 'Genre trends and rating patterns',
    github: 'github.com/komalharshita/eda-movies',
  },
  {
    name: 'SQL Portfolio Queries',
    tool: 'SQL, MySQL',
    dataset: 'Portfolio Database',
    insight: 'Complex joins and aggregations',
    github: 'github.com/komalharshita/sql-queries',
  },
  {
    name: 'Data Visualization: Profit Analysis',
    tool: 'Tableau',
    dataset: 'Business Data',
    insight: 'Regional profit distribution',
    github: 'github.com/komalharshita/tableau-viz',
  },
  {
    name: 'Python Data Cleaning',
    tool: 'Python (Pandas, NumPy)',
    dataset: 'CSV Data',
    insight: 'Handling missing values and outliers',
    github: 'github.com/komalharshita/data-cleaning',
  },
  {
    name: 'Excel Dashboard',
    tool: 'Excel',
    dataset: 'Financial Data',
    insight: 'PivotTables and charts',
    github: 'github.com/komalharshita/excel-dashboard',
  },
  {
    name: 'GitHub Analytics',
    tool: 'Python + API',
    dataset: 'GitHub API',
    insight: 'Repository statistics and trends',
    github: 'github.com/komalharshita/gh-analytics',
  },
];

export default function ProjectsTab() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  return (
    <div className="max-w-5xl space-y-6">
      <div className="stat-card">
        <h3 className="font-semibold mb-6">My Projects</h3>

        <div className="space-y-3">
          {PROJECTS.map((project) => (
            <div key={project.name}
              className="border rounded-lg p-4 cursor-pointer transition-all"
              style={{ borderColor: `hsl(var(--border))` }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `hsl(var(--secondary) / 0.2)`}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              onClick={() =>
                setExpandedProject(expandedProject === project.name ? null : project.name)
              }>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-semibold">{project.name}</h4>
                  <p className="text-sm text-muted-foreground">{project.tool}</p>
                </div>
                <a
                  href={`https://${project.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded"
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = `hsl(var(--primary) / 0.1)`}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  style={{ cursor: 'pointer' }}
                >
                  <ExternalLink className="w-4 h-4" style={{ color: `hsl(var(--primary))` }} />
                </a>
              </div>

              {expandedProject === project.name && (
                <div className="mt-4 space-y-2 text-sm animate-slide-up">
                  <p><strong>Dataset:</strong> {project.dataset}</p>
                  <p><strong>Key Insight:</strong> {project.insight}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
