'use client';

import { ExternalLink, Github } from 'lucide-react';

const projects = [
  { name: 'Sales Analytics Dashboard', tech: 'Power BI', desc: 'E-commerce sales analysis', github: 'github.com/komalharshita/sales' },
  { name: 'EDA: Movie Dataset', tech: 'Python', desc: 'IMDB data analysis & viz', github: 'github.com/komalharshita/eda' },
  { name: 'SQL Portfolio Queries', tech: 'SQL', desc: 'Complex database queries', github: 'github.com/komalharshita/sql' },
  { name: 'Data Visualization: Profit', tech: 'Tableau', desc: 'Business intelligence', github: 'github.com/komalharshita/viz' },
];

export default function ProjectsTab() {
  return (
    <div className="space-y-6">
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Featured Projects</h3>
        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="rounded-lg p-4 transition-all" style={{ border: '1px solid hsl(var(--border))', backgroundColor: 'transparent' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--secondary) / 0.2)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{project.name}</h4>
                  <p className="text-xs" style={{ color: 'hsl(var(--accent))' }}>{project.tech}</p>
                </div>
                <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="p-1 rounded" onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'hsl(var(--primary) / 0.1)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                  <Github className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                </a>
              </div>
              <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
