"use client"

export default function GradientMeshBackground() {
  return (
    <>
      <style>{`
        @keyframes meshShift {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0% 0%; }
        }
      `}</style>

      <div
        className="fixed inset-0 pointer-events-none opacity-40 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 77, 166, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(217, 167, 224, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 211, 182, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          animation: "meshShift 15s ease infinite",
        }}
      />
    </>
  )
}
