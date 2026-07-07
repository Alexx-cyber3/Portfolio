import { useRef, type ReactNode, type CSSProperties } from "react";

export function TiltCard({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`;
    el.style.setProperty("--mx", `${(x + 0.5) * 100}%`);
    el.style.setProperty("--my", `${(y + 0.5) * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`glass-panel glass-reflection rounded-xl transition-transform duration-200 ease-out ${className}`}
      style={{
        ...style,
        transformStyle: "preserve-3d",
        backgroundImage:
          "radial-gradient(circle at var(--mx,50%) var(--my,50%), oklch(0.75 0.2 220 / 0.15), transparent 50%)",
      }}
    >
      {children}
    </div>
  );
}
