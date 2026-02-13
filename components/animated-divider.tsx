export default function AnimatedDivider() {
  return (
    <div className="relative h-px my-16 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, transparent, #f6a5c0, transparent)",
          animation: "shimmer 3s infinite",
        }}
      />
      <style>{`
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}
