import { useEffect, useState } from "react";

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const duration = 2600;
    let raf: number;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / duration) * 100);
      setProgress(p);
      if (p < 100) raf = requestAnimationFrame(tick);
      else {
        setExiting(true);
        setTimeout(onDone, 700);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  const particles = Array.from({ length: 30 });

  return (
    <div
      className="fixed inset-0 z-[10001] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700"
      style={{
        background: "radial-gradient(ellipse at center, oklch(0.15 0.05 260), oklch(0.05 0.02 260))",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "auto",
      }}
    >
      {/* Energy particles */}
      {particles.map((_, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const dist = 100 + Math.random() * 200;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4,
              height: 4,
              background: i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-red)",
              boxShadow: `0 0 15px ${i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-red)"}`,
              left: "50%",
              top: "50%",
              transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`,
              animation: `pulse-glow ${1 + Math.random() * 2}s ease-in-out ${Math.random()}s infinite`,
            }}
          />
        );
      })}

      {/* Crystal logo */}
      <div className="relative w-40 h-40 mb-10 animate-rotate-crystal">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="crystalGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.18 210)" />
              <stop offset="50%" stopColor="oklch(0.65 0.24 250)" />
              <stop offset="100%" stopColor="oklch(0.65 0.27 20)" />
            </linearGradient>
          </defs>
          <polygon
            points="50,5 85,35 75,85 25,85 15,35"
            fill="url(#crystalGrad)"
            fillOpacity="0.2"
            stroke="url(#crystalGrad)"
            strokeWidth="1.5"
            style={{ filter: "drop-shadow(0 0 20px oklch(0.75 0.2 220))" }}
          />
          <polygon points="50,5 50,85 15,35" fill="oklch(0.75 0.2 220 / 0.15)" />
          <polygon points="50,5 50,85 85,35" fill="oklch(0.65 0.27 20 / 0.15)" />
          <line x1="50" y1="5" x2="50" y2="85" stroke="oklch(0.95 0.02 220)" strokeWidth="0.5" opacity="0.6" />
          <line x1="15" y1="35" x2="85" y2="35" stroke="oklch(0.95 0.02 220)" strokeWidth="0.5" opacity="0.6" />
        </svg>
      </div>

      <h1 className="font-display text-4xl font-bold tracking-[0.4em] text-gradient-cyber mb-2">
        ARISH.M
      </h1>
      <p className="font-mono text-xs tracking-[0.3em] text-[var(--cyber-cyan)] mb-8 opacity-70">
        INITIALIZING SECURE SHELL
      </p>

      {/* Loading bar */}
      <div className="relative w-72 h-1 bg-white/10 rounded-full overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 transition-[width] duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, var(--cyber-cyan), var(--cyber-blue), var(--cyber-red))",
            boxShadow: "0 0 20px var(--cyber-cyan)",
          }}
        />
      </div>
      <div className="mt-3 font-mono text-xs text-[var(--cyber-cyan)] tabular-nums">
        {Math.floor(progress)}% // decrypting_payload.sh
      </div>
    </div>
  );
}
