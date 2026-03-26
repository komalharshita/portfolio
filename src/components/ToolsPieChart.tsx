import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const toolsData = [
  { name: "Notion", value: 97 },
  { name: "VS Code", value: 95 },
  { name: "GitHub", value: 94 },
  { name: "Canva", value: 90 },
  { name: "Excel", value: 85 },
  { name: "Google Sheets", value: 65 },
  { name: "Power BI", value: 60 },
  { name: "Tableau", value: 45 },
];

// Sophisticated gradient colors matching design system
const COLORS = [
  "#4F46E5", // Indigo
  "#06B6D4", // Cyan
  "#8B5CF6", // Violet
  "#EC4899", // Pink
  "#F59E0B", // Amber
  "#10B981", // Emerald
  "#6366F1", // Indigo-lighter
  "#F97316", // Orange
];

const ToolsPieChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="stat-card relative overflow-hidden"
    >
      {/* Gradient background accent */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(99, 102, 241, 0.2), transparent 70%)"
          }}
        />
      </div>

      <div className="relative z-10">
        <h3 className="font-heading font-semibold text-foreground mb-5">Software & Tools Distribution</h3>
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <defs>
              {/* Define gradient definitions for pie slices */}
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#6366F1" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#0891B2" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#A78BFA" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EC4899" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#F472B6" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#FBBF24" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#34D399" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient7" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F97316" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#FB923C" stopOpacity={0.7} />
              </linearGradient>
              <linearGradient id="gradient8" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity={0.9} />
                <stop offset="100%" stopColor="#818CF8" stopOpacity={0.7} />
              </linearGradient>
            </defs>
            <Pie
              data={toolsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              animationBegin={inView ? 0 : 100}
              animationDuration={1000}
              isAnimationActive={inView}
            >
              {toolsData.map((entry, index) => {
                const gradientId = `gradient${index + 1}`;
                return <Cell key={`cell-${index}`} fill={`url(#${gradientId})`} />;
              })}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
              }}
              formatter={(value: number) => `${value}%`}
              labelStyle={{ color: "hsl(var(--foreground))" }}
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
            />
            <Legend 
              wrapperStyle={{ color: "hsl(var(--foreground))", paddingTop: "20px" }}
              verticalAlign="bottom"
              height={36}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ToolsPieChart;
