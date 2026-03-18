import { motion } from "framer-motion";
import ChartCard from "@/components/ChartCard";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, ScatterChart, Scatter,
} from "recharts";

const purple = "hsl(270, 60%, 65%)";
const pink = "hsl(330, 50%, 72%)";
const lavender = "hsl(270, 40%, 75%)";
const dustyPink = "hsl(340, 40%, 72%)";
const colors = [purple, pink, lavender, dustyPink, "hsl(270,30%,60%)"];
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
    fontSize: 12,
    color: "hsl(270, 20%, 85%)",
  },
};

const VisualizationGrid = () => (
  <div>
    <Section title="Business Dashboards">
      <ChartCard title="Projects by Technology" description="Distribution of projects across tech stacks.">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={projectsByTech}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} animationDuration={1200}>
              {projectsByTech.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Tool Usage Distribution" description="Share of tools used across all projects.">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={toolUsage}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={75}
              dataKey="value"
              animationDuration={1200}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              fontSize={10}
            >
              {toolUsage.map((_, i) => (
                <Cell key={i} fill={colors[i % colors.length]} />
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
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="month" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Line
              type="monotone"
              dataKey="skill"
              stroke={purple}
              strokeWidth={2.5}
              dot={{ fill: purple, r: 4 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Data Quality Findings" description="Common EDA issues across datasets.">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={edaBar} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis type="number" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <YAxis dataKey="cat" type="category" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} width={70} />
            <Tooltip {...tooltipStyle} />
            <Bar dataKey="count" radius={[0, 4, 4, 0]} fill={pink} animationDuration={1200} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </Section>

    <Section title="Practice Visualizations">
      <ChartCard title="Practice Activity Trend" description="Weekly exercise completion over 8 weeks.">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={practiceActivity}>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="week" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <YAxis tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Line
              type="monotone"
              dataKey="exercises"
              stroke={pink}
              strokeWidth={2.5}
              dot={{ fill: pink, r: 4 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Skill vs. Project Complexity" description="Scatter showing skill level vs. project difficulty.">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
            <XAxis dataKey="x" name="Complexity" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <YAxis dataKey="y" name="Skill" tick={{ fontSize: 11, fill: axisColor }} stroke={axisColor} />
            <Tooltip {...tooltipStyle} />
            <Scatter data={scatterData} fill={purple} animationDuration={1200} />
          </ScatterChart>
        </ResponsiveContainer>
      </ChartCard>
    </Section>
  </div>
);

export default VisualizationGrid;
