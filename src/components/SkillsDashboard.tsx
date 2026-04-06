import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data for different skill categories
const dataAnalyticsData = [
  { skill: "SQL", value: 85 },
  { skill: "Python", value: 80 },
  { skill: "Data Viz", value: 88 },
  { skill: "EDA", value: 82 },
  { skill: "Tableau", value: 75 },
];

const aiMlData = [
  { name: "Machine Learning", proficiency: 70 },
  { name: "Deep Learning", proficiency: 65 },
  { name: "NLP", proficiency: 68 },
  { name: "Model Deployment", proficiency: 72 },
];

const skillCategoriesData = [
  { name: "Data Analytics", value: 85 },
  { name: "AI/ML", value: 68 },
  { name: "Gen AI", value: 75 },
  { name: "Business Analytics", value: 78 },
  { name: "Interpersonal", value: 88 },
];

const radarData = [
  { name: "Analysis", value: 85 },
  { name: "Communication", value: 88 },
  { name: "Problem-Solving", value: 82 },
  { name: "Leadership", value: 80 },
  { name: "Collaboration", value: 86 },
];

const lineChartData = [
  { month: "Jan", analytics: 65, aiml: 55, genai: 60, business: 70 },
  { month: "Feb", analytics: 68, aiml: 58, genai: 65, business: 72 },
  { month: "Mar", analytics: 72, aiml: 62, genai: 70, business: 75 },
  { month: "Apr", analytics: 78, aiml: 65, genai: 73, business: 78 },
  { month: "May", analytics: 82, aiml: 68, genai: 75, business: 80 },
  { month: "Jun", analytics: 85, aiml: 70, genai: 78, business: 82 },
];

// Color scheme inspired by design reference
const colors = {
  primary: "#00D9FF", // Cyan
  secondary: "#1E3A8A", // Dark blue
  accent: "#3B82F6", // Bright blue
  gradient1: { start: "#00D9FF", end: "#0EA5E9" },
  gradient2: { start: "#3B82F6", end: "#1E40AF" },
  gradient3: { start: "#60A5FA", end: "#2563EB" },
};

// Custom tooltip component
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-2 shadow-lg">
        <p className="text-xs text-foreground font-medium">{payload[0].payload.name || payload[0].payload.month}</p>
        <p className="text-xs text-primary font-semibold">{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

const DashboardCard = ({ title, description, children }: { title: string; description?: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="stat-card border border-border/50 hover:border-primary/30 transition-colors"
  >
    <div className="mb-4">
      <h3 className="font-heading font-semibold text-foreground text-sm">{title}</h3>
      {description && <p className="text-xs text-muted-foreground mt-1">{description}</p>}
    </div>
    {children}
  </motion.div>
);

const SkillsDashboard = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-6">
      {/* Dashboard Header */}
      <div className="space-y-2">
        <h2 className="font-heading font-semibold text-foreground text-xl">Skills Dashboard</h2>
        <p className="text-sm text-muted-foreground">Professional expertise overview across key domains</p>
      </div>

      {/* Top Row: Main Charts - 2 columns */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Data Analytics Skills */}
        <DashboardCard 
          title="Data Analytics Proficiency" 
          description="Core technical skills in data analytics"
        >
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={dataAnalyticsData} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <defs>
                <linearGradient id="dataGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={colors.primary} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={colors.accent} stopOpacity={0.6} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
              <XAxis dataKey="skill" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="value" fill="url(#dataGradient)" radius={[6, 6, 0, 0]} animationDuration={1200} />
            </BarChart>
          </ResponsiveContainer>
        </DashboardCard>

        {/* Skill Categories Distribution */}
        <DashboardCard 
          title="Skill Categories Overview" 
          description="Distribution across major skill domains"
        >
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <defs>
                <linearGradient id="pieGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#0EA5E9" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="pieGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="pieGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="pieGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#93C5FD" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity={0.7} />
                </linearGradient>
                <linearGradient id="pieGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#BFDBFE" stopOpacity={0.9} />
                  <stop offset="100%" stopColor="#93C5FD" stopOpacity={0.7} />
                </linearGradient>
              </defs>
              <Pie
                data={skillCategoriesData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                dataKey="value"
                animationDuration={1200}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                labelLine={false}
              >
                {skillCategoriesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={`url(#pieGrad${index + 1})`} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>

      {/* Middle Row: Radar + Line Chart - 2 columns */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Soft Skills Radar */}
        <DashboardCard 
          title="Interpersonal Skills" 
          description="Core professional competencies"
        >
          <ResponsiveContainer width="100%" height={280}>
            <RadarChart data={radarData}>
              <defs>
                <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={colors.primary} stopOpacity={0.7} />
                  <stop offset="100%" stopColor={colors.accent} stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <PolarGrid stroke="hsl(var(--border))" opacity={0.3} />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
              <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 9, fill: "hsl(var(--muted-foreground))" }} />
              <Radar
                name="Proficiency"
                dataKey="value"
                stroke="url(#radarGradient)"
                fill="url(#radarGradient)"
                fillOpacity={0.5}
                animationDuration={1000}
              />
              <Tooltip content={<CustomTooltip />} />
            </RadarChart>
          </ResponsiveContainer>
        </DashboardCard>

        {/* Skill Growth Over Time */}
        <DashboardCard 
          title="Skill Development Timeline" 
          description="Proficiency growth across domains (last 6 months)"
        >
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={lineChartData} margin={{ top: 10, right: 10, bottom: 10, left: -10 }}>
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="100%" stopColor="#0EA5E9" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip content={<CustomTooltip />} />
              <Line type="monotone" dataKey="analytics" stroke="url(#lineGrad1)" strokeWidth={2.5} dot={{ fill: colors.primary, r: 3 }} animationDuration={1200} />
              <Line type="monotone" dataKey="business" stroke="url(#lineGrad2)" strokeWidth={2.5} dot={{ fill: colors.accent, r: 3 }} animationDuration={1200} />
            </LineChart>
          </ResponsiveContainer>
        </DashboardCard>
      </div>

      {/* Bottom Row: AI/ML Skills - Full width */}
      <DashboardCard 
        title="AI/ML & Generative AI Competencies" 
        description="Advanced technical skills in artificial intelligence and machine learning"
      >
        <ResponsiveContainer width="100%" height={240}>
          <BarChart 
            data={aiMlData} 
            layout="vertical"
            margin={{ top: 5, right: 20, bottom: 5, left: 120 }}
          >
            <defs>
              <linearGradient id="aiGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00D9FF" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.2} vertical={false} />
            <XAxis type="number" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} domain={[0, 100]} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} width={110} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="proficiency" fill="url(#aiGradient)" radius={[0, 6, 6, 0]} animationDuration={1200} />
          </BarChart>
        </ResponsiveContainer>
      </DashboardCard>

      {/* Summary Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {[
          { label: "Data Analytics", value: "85", icon: "📊" },
          { label: "AI/ML", value: "70", icon: "🤖" },
          { label: "Gen AI", value: "78", icon: "✨" },
          { label: "Business Analytics", value: "82", icon: "📈" },
          { label: "Interpersonal", value: "88", icon: "🤝" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="stat-card border border-border/50 p-4 text-center"
          >
            <div className="text-2xl mb-2">{stat.icon}</div>
            <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
            <p className="font-heading font-semibold text-lg text-primary">{stat.value}%</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsDashboard;
