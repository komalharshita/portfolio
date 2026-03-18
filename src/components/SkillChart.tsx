import { motion } from "framer-motion";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Terminal, Database, BarChart3, TrendingUp, Search, Briefcase } from "lucide-react";

const skills: { name: string; level: number; icon: ReactNode }[] = [
  { name: "Python", level: 70, icon: <Terminal className="h-4 w-4 text-primary" /> },
  { name: "SQL Queries", level: 80, icon: <Database className="h-4 w-4 text-primary" /> },
  { name: "Data Visualization", level: 75, icon: <BarChart3 className="h-4 w-4 text-primary" /> },
  { name: "Data Analytics", level: 72, icon: <TrendingUp className="h-4 w-4 text-primary" /> },
  { name: "Exploratory Data Analysis", level: 68, icon: <Search className="h-4 w-4 text-primary" /> },
  { name: "Business Analytics", level: 55, icon: <Briefcase className="h-4 w-4 text-primary" /> },
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
  <div className="stat-card" ref={ref}>
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
          <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${s.level}%` } : { width: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.7, ease: "easeOut" }}
              className="h-full rounded-full gradient-accent group-hover:brightness-110 transition-all"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Radar bubbles */}
    <div className="mt-8">
      <h4 className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-wider mb-4">
        Skill Radar
      </h4>
      <div className="flex flex-wrap gap-2 justify-center">
        {skills.map((s) => {
          const size = 40 + (s.level / 100) * 60;
          return (
            <motion.div
              key={s.name}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + Math.random() * 0.3 }}
              className="rounded-full flex items-center justify-center text-center cursor-default hover:ring-2 hover:ring-primary/30 transition-all"
              style={{
                width: size,
                height: size,
                background: `linear-gradient(135deg, hsl(270 60% ${40 + (100 - s.level) * 0.2}%), hsl(330 50% ${55 + (100 - s.level) * 0.15}%))`,
              }}
              title={`${s.name}: ${s.level}%`}
            >
              <span className="text-[9px] font-heading font-semibold text-primary-foreground leading-tight px-1">
                {s.name.split(" ")[0]}
              </span>
            </motion.div>
          );
        })}
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
