import { useEffect, useState } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  color: string;
}

export function RippleClick() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let id = 0;
    const onClick = (e: MouseEvent) => {
      const color = id % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-red)";
      const r: Ripple = { id: id++, x: e.clientX, y: e.clientY, color };
      setRipples((prev) => [...prev, r]);
      setTimeout(() => setRipples((prev) => prev.filter((p) => p.id !== r.id)), 900);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9997]">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute rounded-full border-2"
          style={{
            left: r.x,
            top: r.y,
            width: 40,
            height: 40,
            marginLeft: -20,
            marginTop: -20,
            borderColor: r.color,
            boxShadow: `0 0 30px ${r.color}`,
            animation: "ripple 0.9s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
}
