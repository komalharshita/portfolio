import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const skillData = [
  { name: "Python", value: 70 },
  { name: "SQL", value: 80 },
  { name: "Data Viz", value: 75 },
  { name: "Analytics", value: 72 },
  { name: "EDA", value: 68 },
  { name: "Business", value: 55 },
];

const SkillRadar = () => {
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
      transition={{ duration: 0.6 }}
      className="stat-card relative overflow-hidden"
    >
      {/* Gradient background accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            background: "radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.15), transparent 60%)"
          }}
        />
      </div>
      
      <div className="relative z-10">
        <h3 className="font-heading font-semibold text-foreground mb-5">Technical Skills Radar</h3>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart data={skillData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
            <defs>
              <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(270 60% 65%)" stopOpacity={0.8} />
                <stop offset="100%" stopColor="hsl(330 50% 72%)" stopOpacity={0.6} />
              </linearGradient>
            </defs>
            <PolarGrid stroke="hsl(var(--border))" strokeOpacity={0.3} />
            <PolarAngleAxis 
              dataKey="name" 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              tickLine={false}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 100]} 
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} 
              tickLine={false}
            />
            <Radar
              name="Skill Level"
              dataKey="value"
              stroke="url(#radarGradient)"
              fill="url(#radarGradient)"
              fillOpacity={0.5}
              animationBegin={inView ? 0 : 100}
              animationDuration={1000}
              isAnimationActive={inView}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                color: "hsl(var(--foreground))",
              }}
              formatter={(value: number) => `${value}%`}
              labelStyle={{ color: "hsl(var(--foreground))" }}
            />
            <Legend wrapperStyle={{ color: "hsl(var(--foreground))", paddingTop: "20px" }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SkillRadar;
