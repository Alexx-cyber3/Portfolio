import { useRef, type ReactNode, type CSSProperties } from "react";

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  style,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    el.style.transform = `translate(${x * 0.3}px, ${y * 0.4}px)`;
  };
  const onLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const variants = {
    primary:
      "border-[var(--cyber-cyan)] text-[var(--cyber-cyan)] hover:bg-[var(--cyber-cyan)] hover:text-background shadow-[0_0_30px_oklch(0.85_0.18_210/0.3)]",
    danger:
      "border-[var(--cyber-red)] text-[var(--cyber-red)] hover:bg-[var(--cyber-red)] hover:text-background shadow-[0_0_30px_oklch(0.65_0.27_20/0.3)]",
    ghost: "border-white/20 text-foreground hover:border-white/50",
  };

  const Inner = (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-magnetic
      className="transition-transform duration-200 ease-out inline-block"
      style={style}
    >
      <span
        className={`relative inline-flex items-center gap-2 px-7 py-3 border font-display font-semibold tracking-[0.2em] text-sm uppercase transition-all duration-300 ${variants[variant]} ${className}`}
      >
        <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current" />
        <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-current" />
        <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-current" />
        <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current" />
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {Inner}
      </a>
    );
  }
  return <button onClick={onClick}>{Inner}</button>;
}
