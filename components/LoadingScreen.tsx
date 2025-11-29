"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999] flex flex-col items-center justify-center
        bg-[#250e2c]
        animate-fadeIn
      "
      style={{
        background:
          "radial-gradient(circle at center, rgba(246,165,192,0.25), rgba(37,14,44,1))",
      }}
    >
      <div className="text-center animate-pulseSlow">
        <h1
          className="text-5xl font-bold"
          style={{ color: "#f6a5c0" }}
        >
          Welcome to my Portfolio!
        </h1>

        <p
          className="mt-4 text-sm"
          style={{ color: "#f7c2ca" }}
        >
          Loading your experience…
        </p>
      </div>

      {/* Soft glow circle */}
      <div
        className="absolute w-56 h-56 rounded-full blur-3xl opacity-40"
        style={{
          background: "rgba(246,165,192,0.4)",
          animation: "pulseGlow 4s infinite ease-in-out",
        }}
      ></div>

      <style jsx global>{`
        @keyframes pulseGlow {
          0% { transform: scale(0.9); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
          100% { transform: scale(0.9); opacity: 0.3; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-pulseSlow {
          animation: pulse 2.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
