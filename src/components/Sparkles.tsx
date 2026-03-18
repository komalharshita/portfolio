import { useMemo } from "react";

const Sparkles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 3,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 6,
        color: i % 3 === 0 ? "bg-primary/20" : i % 3 === 1 ? "bg-accent/30" : "bg-lavender/40",
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className={`sparkle ${p.color}`}
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${4 + Math.random() * 4}s`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
