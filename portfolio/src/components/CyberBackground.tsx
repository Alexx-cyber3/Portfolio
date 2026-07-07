import { useMemo } from "react";

export function CyberBackground() {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        color: Math.random() > 0.5 ? "var(--cyber-cyan)" : "var(--cyber-red)",
      })),
    []
  );

  const shapes = useMemo(
    () =>
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 60 + Math.random() * 140,
        delay: Math.random() * 5,
        type: i % 3,
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at top, oklch(0.2 0.08 260), oklch(0.08 0.02 260))",
      }} />

      {/* Cyber grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-40" />

      {/* Scanning line */}
      <div
        className="absolute inset-x-0 h-px animate-scan"
        style={{
          background: "linear-gradient(90deg, transparent, var(--cyber-cyan), transparent)",
          boxShadow: "0 0 20px var(--cyber-cyan)",
        }}
      />

      {/* Floating geometric shapes */}
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute animate-float-slow opacity-20"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        >
          {s.type === 0 && (
            <div
              className="w-full h-full border rotate-45"
              style={{ borderColor: "var(--cyber-cyan)", boxShadow: "0 0 30px var(--cyber-cyan)" }}
            />
          )}
          {s.type === 1 && (
            <div
              className="w-full h-full rounded-full border"
              style={{ borderColor: "var(--cyber-red)", boxShadow: "0 0 30px var(--cyber-red)" }}
            />
          )}
          {s.type === 2 && (
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <polygon
                points="50,5 95,50 50,95 5,50"
                fill="none"
                stroke="var(--cyber-blue)"
                strokeWidth="1"
                style={{ filter: "drop-shadow(0 0 8px var(--cyber-blue))" }}
              />
            </svg>
          )}
        </div>
      ))}

      {/* Crystal particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            transform: "rotate(45deg)",
            animation: `particle-rise ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(ellipse at center, transparent 40%, oklch(0.05 0.02 260 / 0.8))"
      }} />
    </div>
  );
}
