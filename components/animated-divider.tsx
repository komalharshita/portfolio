"use client"

export default function AnimatedDivider() {
  return (
    <div className="relative h-24 flex items-center justify-center overflow-hidden">
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div
        className="w-full h-1 rounded-full"
        style={{
          background: "linear-gradient(90deg, #ff4da6, #ffd3b6, #d9a7e0, #ff4da6)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 4s ease infinite",
          boxShadow: "0 0 20px rgba(255, 77, 166, 0.4)",
        }}
      />
    </div>
  )
}
