import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Dumbbell, Wrench, Target } from "lucide-react";

const stats = [
  { label: "Practice Exercises", target: 50, icon: Dumbbell, suffix: "+" },
  { label: "SQL, Python & BI Tools", target: 8, icon: Wrench, suffix: "" },
  { label: "Open to Summer Internships", target: 2026, icon: Target, suffix: "" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const duration = 1500;
        const step = Math.max(1, Math.ceil(target / (duration / 30)));
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-3xl font-heading font-bold text-primary">
      {count}{suffix}
    </span>
  );
};

const StatCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {stats.map((s, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + i * 0.15 }}
        className="stat-card text-center"
      >
        <s.icon className="h-6 w-6 mx-auto mb-3 text-accent-foreground/60" />
        <AnimatedCounter target={s.target} suffix={s.suffix} />
        <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
      </motion.div>
    ))}
  </div>
);

export default StatCards;
