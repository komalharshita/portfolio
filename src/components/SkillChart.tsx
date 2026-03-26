import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Terminal, Database, BarChart3, TrendingUp, Search, Briefcase } from "lucide-react";

const skills: { name: string; level: number; icon: ReactNode; gradient: string }[] = [
  { name: "Python", level: 70, icon: <Terminal className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #4F46E5 0%, #6366F1 100%)" },
  { name: "SQL Queries", level: 80, icon: <Database className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #06B6D4 0%, #0891B2 100%)" },
  { name: "Data Visualization", level: 75, icon: <BarChart3 className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #8B5CF6 0%, #A78BFA 100%)" },
  { name: "Data Analytics", level: 72, icon: <TrendingUp className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #EC4899 0%, #F472B6 100%)" },
  { name: "Exploratory Data Analysis", level: 68, icon: <Search className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #F59E0B 0%, #FBBF24 100%)" },
  { name: "Business Analytics", level: 55, icon: <Briefcase className="h-4 w-4 text-primary" />, gradient: "linear-gradient(90deg, #10B981 0%, #34D399 100%)" },
];

const SkillChart = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
  <div className="stat-card relative overflow-hidden" ref={ref}>
    {/* Gradient background accent */}
    <div className="absolute inset-0 opacity-20 pointer-events-none">
      <div 
        className="absolute inset-0" 
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.15), transparent 60%)"
        }}
      />
    </div>

    <div className="relative z-10">
      <h3 className="font-heading font-semibold text-foreground mb-5">Technical Skills</h3>
      <div className="space-y-4">
        {skills.map((s, i) => (
          <div key={s.name} className="group">
            <div className="flex items-center justify-between mb-1.5">
              <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                {s.icon}
                {s.name}
              </span>
              <AnimatedPercent value={s.level} inView={inView} delay={0.2 + i * 0.08} />
            </div>
            <div className="h-2.5 rounded-full bg-secondary/50 overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: `${s.level}%` } : { width: 0 }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full group-hover:shadow-lg transition-all"
                style={{ background: s.gradient }}
              />
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

const AnimatedPercent = ({ value, inView, delay }: { value: number; inView: boolean; delay: number }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => {
      let start = 0;
      const step = Math.max(1, Math.ceil(value / 20));
      const timer = setInterval(() => {
        start += step;
        if (start >= value) { setCount(value); clearInterval(timer); }
        else setCount(start);
      }, 35);
      return () => clearInterval(timer);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return <span className="text-xs text-muted-foreground font-heading">{count}%</span>;
};

export default SkillChart;
