"use client"

export default function GradientMeshOverlay() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(255, 77, 166, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(217, 167, 224, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 211, 182, 0.3) 0%, transparent 50%)
          `,
          animation: "meshShift 15s ease-in-out infinite",
        }}
      />
    </div>
  )
}
