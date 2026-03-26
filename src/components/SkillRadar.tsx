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
      className="stat-card"
    >
      <h3 className="font-heading font-semibold text-foreground mb-5">Technical Skills Radar</h3>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={skillData} margin={{ top: 20, right: 30, bottom: 20, left: 30 }}>
          <PolarGrid stroke="hsl(var(--border))" />
          <PolarAngleAxis dataKey="name" tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 11 }} />
          <Radar
            name="Skill Level"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary))"
            fillOpacity={0.6}
            animationBegin={inView ? 0 : 100}
            animationDuration={800}
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
          <Legend wrapperStyle={{ color: "hsl(var(--foreground))" }} />
        </RadarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default SkillRadar;
