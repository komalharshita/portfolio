"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "Loading your experience…";

  // hide screen after 2.8s
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        animate-fadeIn backdrop-blur-2xl
      "
      style={{
        background:
          "linear-gradient(145deg, #1a0820 0%, #250e2c 40%, #2e1637 100%)",
      }}
    >
      {/* Center Block */}
      <div className="text-center animate-pulseSlow">
        <h1
          className="text-5xl font-bold"
          style={{ color: "#f7c2ca" }}
        >
          Welcome to my Portfolio!
        </h1>

        {/* Typewriter Text */}
        <p
          className="mt-4 text-sm font-medium typewriter"
          style={{ color: "rgba(247,194,202,0.85)" }}
        >
          {typedText}
          <span className="caret">|</span>
        </p>
      </div>

      {/* Soft glowing orb */}
      <div
        className="absolute w-64 h-64 rounded-full blur-3xl opacity-40"
        style={{
          background: "rgba(247,194,202,0.35)",
          animation: "pulseGlow 4s infinite ease-in-out",
        }}
      ></div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        /* Glow animation */
        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 0.3; }
        }

        /* Fade-in wrapper */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Slow pulsing */
        .animate-pulseSlow {
          animation: pulse 2.4s ease-in-out infinite;
        }

        /* Typewriter caret blink */
        .caret {
          display: inline-block;
          margin-left: 3px;
          width: 6px;
          animation: blink 0.7s infinite;
          color: rgba(247,194,202,0.85);
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
