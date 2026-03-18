'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter, PieChart, Pie, Cell } from 'recharts';

const DASHBOARDS = [
  { title: 'Sales Analytics', category: 'Power BI' },
  { title: 'EDA Dashboard', category: 'Python' },
  { title: 'Movie Insights', category: 'Tableau' },
  { title: 'Financial Report', category: 'Excel' },
];

const PROJECTS_BY_TECH = [
  { name: 'Python', projects: 8 },
  { name: 'SQL', projects: 6 },
  { name: 'Power BI', projects: 5 },
  { name: 'Excel', projects: 4 },
  { name: 'Tableau', projects: 3 },
];

const TOOL_USAGE = [
  { name: 'GitHub', value: 22, color: 'hsl(var(--primary))' },
  { name: 'VS Code', value: 18, color: 'hsl(var(--accent))' },
  { name: 'Notion', value: 15, color: 'hsl(var(--secondary))' },
  { name: 'Power BI', value: 12, color: 'hsl(var(--primary) / 0.7)' },
];

const SKILL_GROWTH = [
  { month: 'Jan', python: 45, sql: 40, analytics: 35 },
  { month: 'Feb', python: 52, sql: 48, analytics: 42 },
  { month: 'Mar', python: 58, sql: 55, analytics: 50 },
  { month: 'Apr', python: 65, sql: 62, analytics: 58 },
  { month: 'May', python: 70, sql: 70, analytics: 65 },
];

const DATA_QUALITY = [
  { name: 'Data Cleaning', value: 92 },
  { name: 'Validation', value: 87 },
  { name: 'Normalization', value: 85 },
  { name: 'Formatting', value: 90 },
];

const PRACTICE_ACTIVITY = [
  { day: 'Mon', hours: 4 },
  { day: 'Tue', hours: 5 },
  { day: 'Wed', hours: 3 },
  { day: 'Thu', hours: 6 },
  { day: 'Fri', hours: 7 },
  { day: 'Sat', hours: 2 },
  { day: 'Sun', hours: 4 },
];

const SKILL_COMPLEXITY = [
  { skill: 'Python', complexity: 6, level: 70 },
  { skill: 'SQL', complexity: 7, level: 80 },
  { skill: 'Data Viz', complexity: 5, level: 75 },
  { skill: 'Statistics', complexity: 8, level: 65 },
  { skill: 'Excel', complexity: 4, level: 85 },
  { skill: 'BI Tools', complexity: 6, level: 60 },
];

export default function VisualizationsTab() {
  return (
    <div className="max-w-5xl space-y-6">
      {/* Dashboard Showcase Grid */}
      <div className="stat-card">
        <h3 className="font-semibold mb-6 text-lg" style={{ color: 'hsl(var(--primary))' }}>Dashboard Showcase</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {DASHBOARDS.map((dashboard, idx) => (
            <motion.div
              key={dashboard.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="relative overflow-hidden rounded-lg cursor-pointer group h-40"
              style={{
                backgroundColor: 'hsl(var(--secondary) / 0.3)',
                border: '1px solid hsl(var(--border))',
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 p-4 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-sm" style={{ color: 'hsl(var(--foreground))' }}>{dashboard.title}</h4>
                  <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{dashboard.category}</p>
                </div>
              </div>
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--accent) / 0.1))`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Charts Grid - 2x3 Layout */}
      <div className="space-y-6">
        {/* Row 1: Bar + Donut */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Projects by Tech */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Projects by Technology</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={PROJECTS_BY_TECH}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Bar dataKey="projects" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Tool Usage Donut */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Tool Usage Distribution</h4>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={TOOL_USAGE}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {TOOL_USAGE.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 2: Line + Horizontal Bar */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Skill Growth Line */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Skill Growth Over Time</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={SKILL_GROWTH}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="python" stroke="hsl(var(--primary))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="sql" stroke="hsl(var(--accent))" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="analytics" stroke="hsl(var(--secondary))" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Data Quality Bar */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Data Quality Metrics</h4>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={DATA_QUALITY} layout="vertical">
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="name" type="category" width={120} stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[0, 8, 8, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Row 3: Line + Scatter */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Practice Activity */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Weekly Practice Activity</h4>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={PRACTICE_ACTIVITY}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Skill vs Complexity Scatter */}
          <div className="stat-card">
            <h4 className="font-semibold mb-4" style={{ color: 'hsl(var(--primary))' }}>Skill Proficiency vs Complexity</h4>
            <ResponsiveContainer width="100%" height={250}>
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid stroke="hsl(var(--border))" strokeDasharray="3 3" />
                <XAxis dataKey="complexity" name="Complexity" stroke="hsl(var(--muted-foreground))" />
                <YAxis dataKey="level" name="Proficiency %" stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                  }}
                  labelFormatter={(value) => `Complexity: ${value}`}
                  formatter={(value) => `Level: ${value}%`}
                />
                <Scatter name="Skills" data={SKILL_COMPLEXITY} fill="hsl(var(--primary))" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
