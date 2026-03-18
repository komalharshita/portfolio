'use client';

import { BarChart3, LineChart, PieChart } from 'lucide-react';

const dashboards = [
  { title: 'Sales Analytics', category: 'Power BI' },
  { title: 'EDA Dashboard', category: 'Python' },
  { title: 'Movie Insights', category: 'Tableau' },
  { title: 'Financial Report', category: 'Excel' },
];

const charts = [
  { title: 'Revenue Trends', icon: LineChart },
  { title: 'Tool Distribution', icon: PieChart },
  { title: 'Skill Growth', icon: BarChart3 },
];

export default function VisualizationsTab() {
  return (
    <div className="space-y-6">
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Dashboard Showcase</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {dashboards.map((dashboard) => (
            <div key={dashboard.title} className="glass-card p-6 min-h-32 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-sm mb-1">{dashboard.title}</h4>
                <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{dashboard.category}</p>
              </div>
              <BarChart3 className="w-8 h-8 self-end" style={{ color: 'hsl(var(--primary))' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Key Visualizations</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {charts.map((chart) => {
            const Icon = chart.icon;
            return (
              <div key={chart.title} className="glass-card p-6 flex flex-col items-center justify-center min-h-40">
                <Icon className="w-10 h-10 mb-3" style={{ color: 'hsl(var(--accent))' }} />
                <h4 className="text-sm font-semibold text-center">{chart.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
