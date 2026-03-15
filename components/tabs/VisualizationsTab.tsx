'use client';

import React from 'react';
import { BarChart3, LineChart, PieChart } from 'lucide-react';

const DASHBOARDS = [
  { title: 'Sales Analytics', category: 'Business' },
  { title: 'EDA Dashboard', category: 'Analysis' },
  { title: 'Movie Insights', category: 'Entertainment' },
  { title: 'Financial Report', category: 'Finance' },
];

const CHARTS = [
  { title: 'Projects by Technology', icon: BarChart3 },
  { title: 'Tool Usage Distribution', icon: PieChart },
  { title: 'Skill Growth Over Time', icon: LineChart },
  { title: 'Data Quality Metrics', icon: BarChart3 },
  { title: 'Practice Activity', icon: LineChart },
  { title: 'Skill vs Complexity', icon: LineChart },
];

export default function VisualizationsTab() {
  return (
    <div className="max-w-5xl space-y-8">
      {/* DASHBOARD SHOWCASE */}
      <div>
        <h3 className="font-semibold mb-4">Dashboard Showcase</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {DASHBOARDS.map((dashboard) => (
            <div key={dashboard.title}
              className="stat-card aspect-video bg-secondary/20 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform">
              <div className="text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-2" style={{ color: `hsl(var(--primary))` }} />
                <h4 className="font-semibold text-sm">{dashboard.title}</h4>
                <p className="text-xs text-muted-foreground">{dashboard.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VISUALIZATION GRID */}
      <div>
        <h3 className="font-semibold mb-4">My Visualizations</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {CHARTS.map((chart) => {
            const Icon = chart.icon;
            return (
              <div key={chart.title}
                className="stat-card min-h-64 flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-transform">
                <Icon className="w-12 h-12 mb-3" style={{ color: `hsl(var(--accent))` }} />
                <h4 className="font-semibold text-center text-sm">{chart.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
