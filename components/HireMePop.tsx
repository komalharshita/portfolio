"use client";

import { useEffect, useState } from "react";

export default function HireMePop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 6500);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div
      className="
        fixed bottom-6 right-6 z-[9998]
        p-5 rounded-2xl shadow-xl
        flex items-start gap-4
        animate-slideUp
        backdrop-blur-xl
      "
      style={{
        background:
          "linear-gradient(135deg, rgba(131,122,182,0.85), rgba(246,165,192,0.85))",
      }}
    >

      {/* INFO */}
      <div className="text-white">
        <p className="font-semibold text-sm opacity-90 text-card-foreground">
          Open to Opportunities!
        </p>
        <h4 className="text-lg font-bold leading-tight mt-1">
          Available for Data Analytics Internships 2026.
        </h4>

        <a
          href="https://www.linkedin.com/in/komalharshita/"
          target="_blank"
          className="
            inline-block mt-3 text-sm font-semibold
            underline underline-offset-4
          "
        >
          → Contact Me
        </a>
      </div>

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setShow(false)}
        className="text-white text-xl font-bold ml-2"
      >
        ×
      </button>

      <style jsx global>{`
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
