import { motion } from "framer-motion";
import ChartCard from "@/components/ChartCard";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter,
} from "recharts";

// Sophisticated color palette with gradients
const colors = ["#4F46E5", "#06B6D4", "#8B5CF6", "#EC4899", "#F59E0B", "#10B981", "#6366F1", "#F97316"];
const gradients = [
  { start: "#4F46E5", end: "#6366F1" },    // Indigo
  { start: "#06B6D4", end: "#0891B2" },    // Cyan
  { start: "#8B5CF6", end: "#A78BFA" },    // Violet
  { start: "#EC4899", end: "#F472B6" },    // Pink
  { start: "#F59E0B", end: "#FBBF24" },    // Amber
  { start: "#10B981", end: "#34D399" },    // Emerald
  { start: "#6366F1", end: "#818CF8" },    // Indigo-light
  { start: "#F97316", end: "#FB923C" },    // Orange
];
const axisColor = "hsl(270,15%,50%)";
const gridColor = "hsl(280,20%,25%)";

const projectsByTech = [
  { name: "Python", count: 4 },
  { name: "SQL", count: 3 },
  { name: "Excel", count: 3 },
  { name: "Power BI", count: 2 },
  { name: "Tableau", count: 1 },
];

const skillGrowth = [
  { month: "Jan", skill: 20 },
  { month: "Mar", skill: 35 },
  { month: "May", skill: 45 },
  { month: "Jul", skill: 60 },
  { month: "Sep", skill: 72 },
  { month: "Nov", skill: 85 },
];

const toolUsage = [
  { name: "Excel", value: 28 },
  { name: "Power BI", value: 18 },
  { name: "Python", value: 25 },
  { name: "SQL", value: 20 },
  { name: "Other", value: 9 },
];

const practiceActivity = [
  { week: "W1", exercises: 8 },
  { week: "W2", exercises: 12 },
  { week: "W3", exercises: 6 },
  { week: "W4", exercises: 15 },
  { week: "W5", exercises: 20 },
  { week: "W6", exercises: 18 },
  { week: "W7", exercises: 22 },
  { week: "W8", exercises: 25 },
];

const scatterData = [
  { x: 2, y: 30 }, { x: 4, y: 50 }, { x: 5, y: 45 },
  { x: 7, y: 70 }, { x: 8, y: 65 }, { x: 10, y: 85 },
  { x: 3, y: 40 }, { x: 6, y: 55 }, { x: 9, y: 78 },
];

const edaBar = [
  { cat: "Outliers", count: 12 },
  { cat: "Missing", count: 8 },
  { cat: "Duplicates", count: 3 },
  { cat: "Skewed", count: 6 },
];

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-10">
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-heading font-semibold text-foreground text-lg mb-4"
    >
      {title}
    </motion.h3>
    <div className="grid gap-4 sm:grid-cols-2">{children}</div>
  </div>
);

const tooltipStyle = {
  contentStyle: {
    background: "hsl(280, 45%, 15%)",
    border: "1px solid hsl(280, 30%, 25%)",
    borderRadius: 8,
    fontSize: 11,
    color: "hsl(270, 20%, 85%)",
    padding: "6px 8px",
  },
  labelStyle: {
    fontSize: 10,
    color: "hsl(270, 20%, 85%)",
  },
};

const VisualizationGrid = () => (
  <div>
    <Section title="Business Dashboards">
      <ChartCard title="Projects by Technology" description="Distribution of projects across tech stacks.">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectsByTech}>
            <defs>
              {gradients.map((grad, i) => (
                <linearGradient key={`grad-${i}`} id={`barGrad-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={grad.start} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={grad.end} stopOpacity={0.6} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} />
            <XAxis dataKey="name" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="count" radius={[6, 6, 0, 0]} animationDuration={1200}>
              {projectsByTech.map((_, i) => (
                <Cell key={i} fill={`url(#barGrad-${i % gradients.length})`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Tool Usage Distribution" description="Share of tools used across all projects.">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {gradients.map((grad, i) => (
                <linearGradient key={`pieGrad-${i}`} id={`pieGrad-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={grad.start} stopOpacity={0.85} />
                  <stop offset="100%" stopColor={grad.end} stopOpacity={0.65} />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={toolUsage}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={75}
              dataKey="value"
              animationDuration={1200}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              fontSize={8}
            >
              {toolUsage.map((_, i) => (
                <Cell key={i} fill={`url(#pieGrad-${i % gradients.length})`} />
              ))}
            </Pie>
            <Tooltip {...tooltipStyle} />
          </PieChart>
        </ResponsiveContainer>
      </ChartCard>
    </Section>

    <Section title="EDA Experiments">
      <ChartCard title="Skill Growth Over Time" description="Proficiency increase throughout the year.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={skillGrowth}>
            <defs>
              <linearGradient id="lineGrad-growth" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Line
              type="monotone"
              dataKey="skill"
              stroke="url(#lineGrad-growth)"
              strokeWidth={2.5}
              dot={{ fill: "#8B5CF6", r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Data Quality Findings" description="Common EDA issues across datasets.">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={edaBar} layout="vertical">
            <defs>
              <linearGradient id="horizGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#EC4899" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#F472B6" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} />
            <XAxis type="number" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <YAxis dataKey="cat" type="category" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} width={65} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="count" radius={[0, 6, 6, 0]} fill="url(#horizGrad)" animationDuration={1200} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </Section>

    <Section title="Practice Visualizations">
      <ChartCard title="Practice Activity Trend" description="Weekly exercise completion over 8 weeks.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={practiceActivity}>
            <defs>
              <linearGradient id="lineGrad-practice" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} />
            <XAxis dataKey="week" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Line
              type="monotone"
              dataKey="exercises"
              stroke="url(#lineGrad-practice)"
              strokeWidth={2.5}
              dot={{ fill: "#F59E0B", r: 4 }}
              activeDot={{ r: 6 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Skill vs. Project Complexity" description="Scatter showing skill level vs. project difficulty.">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <defs>
              <linearGradient id="scatterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} opacity={0.3} />
            <XAxis dataKey="x" name="Complexity" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <YAxis dataKey="y" name="Skill" tick={{ fontSize: 10, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Scatter data={scatterData} fill="#10B981" animationDuration={1200} />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>
    </Section>
  </div>
);

export default VisualizationGrid;
