"use client"

export default function FloatingShapes() {
  return (
    <>
      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-40px) translateX(20px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-50px) translateX(-30px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(40px); }
        }
      `}</style>

      {/* Floating circle - top left */}
      <div
        className="fixed pointer-events-none opacity-30"
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 77, 166, 0.4), rgba(217, 167, 224, 0.1))",
          top: "10%",
          left: "5%",
          animation: "float1 8s ease-in-out infinite",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 211, 182, 0.2)",
        }}
      />

      {/* Floating square - top right */}
      <div
        className="fixed pointer-events-none opacity-25"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "20px",
          background: "radial-gradient(circle at 30% 30%, rgba(217, 167, 224, 0.3), rgba(255, 211, 182, 0.1))",
          top: "20%",
          right: "8%",
          animation: "float2 10s ease-in-out infinite",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 77, 166, 0.15)",
        }}
      />

      {/* Floating circle - bottom center */}
      <div
        className="fixed pointer-events-none opacity-20"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, rgba(255, 211, 182, 0.3), rgba(255, 77, 166, 0.05))",
          bottom: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "float3 12s ease-in-out infinite",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(217, 167, 224, 0.2)",
        }}
      />
    </>
  )
}
