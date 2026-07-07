import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let id = 0;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev.slice(-14), { x: e.clientX, y: e.clientY, id: id++ }]);
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a,button,[data-magnetic]"));
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  return (
    <>
      {/* Glow halo */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full transition-[width,height,opacity] duration-200"
        style={{
          left: pos.x,
          top: pos.y,
          width: hovering ? 80 : 300,
          height: hovering ? 80 : 300,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, oklch(0.75 0.2 220 / 0.25), oklch(0.65 0.24 250 / 0.1) 40%, transparent 70%)",
          mixBlendMode: "screen",
        }}
      />
      {/* Trail dots */}
      {trail.map((t, i) => (
        <div
          key={t.id}
          className="pointer-events-none fixed z-[9998] rounded-full"
          style={{
            left: t.x,
            top: t.y,
            width: 6 + i * 0.6,
            height: 6 + i * 0.6,
            transform: "translate(-50%, -50%)",
            background: i % 2 === 0 ? "var(--cyber-cyan)" : "var(--cyber-red)",
            opacity: (i / trail.length) * 0.5,
            filter: "blur(2px)",
          }}
        />
      ))}
      {/* Core cursor */}
      <div
        className="pointer-events-none fixed z-[10000] rounded-full border border-[var(--cyber-cyan)] transition-transform duration-150"
        style={{
          left: pos.x,
          top: pos.y,
          width: clicking ? 8 : hovering ? 40 : 14,
          height: clicking ? 8 : hovering ? 40 : 14,
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 12px var(--cyber-cyan)",
          background: clicking ? "var(--cyber-cyan)" : "transparent",
        }}
      />
    </>
  );
}
