import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CyberBackground } from "@/components/CyberBackground";
import { CursorGlow } from "@/components/CursorGlow";
import { RippleClick } from "@/components/RippleClick";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import arishPhoto from "@/assets/arish-photo.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
  head: () => ({
    meta: [
      { title: "Arish M — Cybersecurity Analyst & Ethical Hacker" },
      {
        name: "description",
        content:
          "Portfolio of Arish M — Cybersecurity analyst building AI-powered offensive security tools, SOC labs, and network forensics research.",
      },
      { property: "og:title", content: "Arish M — Cybersecurity Analyst" },
      {
        property: "og:description",
        content:
          "AI-powered pentesting, SOC labs, Tor traffic analysis. 300+ labs solved, 35+ tools built.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const skills = {
  Offensive: ["Nmap", "Burp Suite", "Metasploit", "Nikto", "Gobuster", "Kali Linux"],
  Defensive: ["Wazuh", "Splunk", "Suricata", "Sysmon", "Wireshark", "SIEM"],
  Code: ["Python", "Bash", "C / C++", "SQL", "JavaScript", "React"],
  Systems: ["Kali", "Parrot", "Ubuntu", "Windows", "MySQL", "MongoDB"],
};

const projects = [
  {
    name: "PentraMind",
    tag: "AI · Pentesting",
    desc: "AI-powered penetration testing assistant that automates recon, vulnerability analysis, and attack-surface mapping using Python + LLM orchestration.",
    color: "cyan",
  },
  {
    name: "Tor Analyzer",
    tag: "Network Forensics",
    desc: "Traffic analysis tool monitoring Tor network communication patterns with anomaly detection for identifying suspicious activity.",
    color: "red",
  },
  {
    name: "SOC Lab",
    tag: "Blue Team · SIEM",
    desc: "Virtual Security Operations Center with Wazuh SIEM, Sysmon and Suricata for centralized logging, endpoint monitoring and incident response.",
    color: "blue",
  },
];

const certs = [
  "EC-Council CEH",
  "Network Defense Essentials",
  "Digital Forensics Essentials",
  "TryHackMe SOC Level 1",
  "Network Traffic Analysis (Infosec)",
];

const stats = [
  { n: "300+", l: "Labs Solved" },
  { n: "35+", l: "Tools Built" },
  { n: "Top 20%", l: "National CTF" },
  { n: "2025", l: "TN Police Hackathon" },
];

const freelanceSoftware = [
  {
    title: "Web Applications",
    desc: "Full-stack web apps using React, Node.js, and databases — from CRUD dashboards to real-time platforms.",
    stack: ["React", "Node.js", "MongoDB", "MySQL"],
    color: "cyan",
  },
  {
    title: "Automation Scripts",
    desc: "Python & Bash scripts for data processing, report generation, security scanning, and workflow automation.",
    stack: ["Python", "Bash", "Selenium"],
    color: "blue",
  },
  {
    title: "Desktop Applications",
    desc: "Cross-platform GUI tools and utilities built with modern frameworks for academic and research use.",
    stack: ["Python", "Tkinter", "Electron"],
    color: "cyan",
  },
];

const freelanceHardware = [
  {
    title: "IoT & Embedded Systems",
    desc: "Smart device prototypes using Arduino, ESP32, and Raspberry Pi with sensor integration and cloud connectivity.",
    stack: ["Arduino", "ESP32", "Raspberry Pi", "C/C++"],
    color: "red",
  },
  {
    title: "PCB Design",
    desc: "Custom printed circuit board design and prototyping for student hardware projects and IoT modules.",
    stack: ["EasyEDA", "KiCad", "Proteus"],
    color: "blue",
  },
  {
    title: "Robotics & Automation",
    desc: "Autonomous bots, line followers, and servo-controlled systems for robotics competitions and labs.",
    stack: ["Arduino", "Motor Drivers", "Sensors"],
    color: "red",
  },
];

function Portfolio() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <CursorGlow />
      <RippleClick />
      <CyberBackground />

      <main className="relative min-h-screen">
        {/* NAV */}
        <nav className="fixed top-0 inset-x-0 z-40 px-6 md:px-12 py-5 flex items-center justify-between glass-panel border-0 border-b">
          <a href="#top" className="font-display font-bold tracking-[0.3em] text-gradient-cyber">
            ARISH.M
          </a>
          <div className="hidden md:flex gap-8 text-xs font-mono tracking-[0.2em] uppercase text-muted-foreground">
            <a href="#about" className="hover:text-[var(--cyber-cyan)] transition">About</a>
            <a href="#skills" className="hover:text-[var(--cyber-cyan)] transition">Skills</a>
            <a href="#projects" className="hover:text-[var(--cyber-cyan)] transition">Projects</a>
            <a href="#freelance" className="hover:text-[var(--cyber-cyan)] transition">Freelance</a>
            <a href="#experience" className="hover:text-[var(--cyber-cyan)] transition">Experience</a>
            <a href="#contact" className="hover:text-[var(--cyber-cyan)] transition">Contact</a>
          </div>
          <span className="font-mono text-xs text-[var(--cyber-cyan)] hidden sm:inline">
            [ status: <span className="text-[var(--cyber-red)]">online</span> ]
          </span>
        </nav>

        {/* HERO */}
        <section id="top" className="min-h-screen flex items-center px-6 md:px-12 pt-32 pb-20 relative">
          <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center">
            <div>
              <Reveal>
                <p className="font-mono text-xs tracking-[0.4em] text-[var(--cyber-cyan)] mb-6">
                  ┌─[arishm@kali]─[~]
                  <br />
                  └─$ whoami --verbose
                </p>
              </Reveal>
              <Reveal delay={150}>
                <h1 className="font-display font-black text-6xl md:text-8xl leading-[0.9] mb-6">
                  <span className="block text-gradient-cyber">ETHICAL</span>
                  <span className="block text-foreground">HACKER<span className="text-[var(--cyber-red)]">.</span></span>
                </h1>
              </Reveal>
              <Reveal delay={300}>
                <p className="text-lg text-muted-foreground max-w-xl mb-4 leading-relaxed">
                  I break systems to make them stronger. Cybersecurity analyst specializing in
                  offensive security, SIEM engineering, and AI-driven pentesting tools.
                </p>
                <p className="font-mono text-xs text-[var(--cyber-cyan)]/70 mb-10">
                  &gt; B.Sc. Digital &amp; Cyber Forensic Science · Palakkad, Kerala
                </p>
              </Reveal>
              <Reveal delay={450}>
                <div className="flex flex-wrap gap-4">
                  <MagneticButton href="#projects">View Arsenal</MagneticButton>
                  <MagneticButton href="#contact" variant="danger">Establish Contact</MagneticButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <TiltCard className="p-2 aspect-square flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 cyber-grid-bg" />
                <img
                  src={arishPhoto}
                  alt="Arish M"
                  className="relative w-full h-full object-cover rounded-lg"
                  style={{ filter: "drop-shadow(0 0 20px oklch(0.75 0.2 220 / 0.4))" }}
                />
                <div className="absolute bottom-4 left-4 right-4 font-mono text-[10px] text-[var(--cyber-cyan)]/80 flex justify-between">
                  <span>SYS.CORE</span>
                  <span className="animate-pulse-glow">◉ ACTIVE</span>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        <section className="px-6 md:px-12 py-16">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s, i) => (
              <Reveal key={s.l} delay={i * 100}>
                <TiltCard className="p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gradient-cyber">{s.n}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground mt-2">
                    {s.l}
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading num="01" title="PROFILE" />
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Reveal>
                <TiltCard className="p-8">
                  <h3 className="font-display text-2xl mb-4 text-[var(--cyber-cyan)]">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Recent Digital &amp; Cyber Forensic Science graduate with hands-on experience in
                    cybersecurity tools, networking, and threat detection. Passionate about
                    securing systems, analyzing vulnerabilities, and building automated security
                    solutions.
                  </p>
                </TiltCard>
              </Reveal>
              <Reveal delay={150}>
                <TiltCard className="p-8">
                  <h3 className="font-display text-2xl mb-4 text-[var(--cyber-red)]">Focus Areas</h3>
                  <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                    {[
                      "Ethical Hacking & VAPT",
                      "Incident Response & SOC",
                      "Threat Hunting",
                      "AI-driven Security Tooling",
                      "Network Forensics",
                    ].map((x) => (
                      <li key={x} className="flex items-center gap-3">
                        <span className="text-[var(--cyber-cyan)]">▸</span> {x}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading num="02" title="ARSENAL" />
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              {Object.entries(skills).map(([cat, list], i) => (
                <Reveal key={cat} delay={i * 100}>
                  <TiltCard className="p-6 h-full">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--cyber-cyan)] mb-4">
                      // {cat.toUpperCase()}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {list.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-mono px-2 py-1 border border-white/10 rounded bg-white/5 hover:border-[var(--cyber-cyan)] hover:text-[var(--cyber-cyan)] transition"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading num="03" title="OPERATIONS" />
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {projects.map((p, i) => {
                const color =
                  p.color === "cyan"
                    ? "var(--cyber-cyan)"
                    : p.color === "red"
                    ? "var(--cyber-red)"
                    : "var(--cyber-blue)";
                return (
                  <Reveal key={p.name} delay={i * 120}>
                    <TiltCard className="p-7 h-full flex flex-col relative">
                      <div
                        className="absolute top-0 left-0 h-px w-16"
                        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                      />
                      <div
                        className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3"
                        style={{ color }}
                      >
                        {p.tag}
                      </div>
                      <h3 className="font-display text-2xl font-bold mb-3">{p.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.desc}
                      </p>
                      <div className="mt-6 flex items-center justify-between font-mono text-xs">
                        <span className="text-muted-foreground">0{i + 1} / 03</span>
                        <span style={{ color }}>◉ deployed</span>
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading num="04" title="FIELD LOG" />
            </Reveal>
            <div className="mt-12 space-y-4">
              {[
                {
                  role: "Cybersecurity Intern",
                  org: "Vethnix Cybersecurity & Forensic Science Academy",
                  date: "May 2026",
                  points: [
                    "Monitored SIEM alerts and performed vulnerability assessments",
                    "Built Wazuh SIEM lab for endpoint threat detection",
                    "Worked with Nmap, Wireshark and Burp Suite for active testing",
                  ],
                },
                {
                  role: "Intern",
                  org: "Cyber Crime Police Station",
                  date: "May 2025",
                  points: [
                    "Assisted with digital evidence handling and case documentation",
                    "Supported forensic investigation workflows",
                  ],
                },
              ].map((e, i) => (
                <Reveal key={e.role + i} delay={i * 100}>
                  <TiltCard className="p-7">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display text-xl">{e.role}</h3>
                        <div className="text-sm text-[var(--cyber-cyan)]">{e.org}</div>
                      </div>
                      <span className="font-mono text-xs text-muted-foreground">{e.date}</span>
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="text-[var(--cyber-red)]">›</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </TiltCard>
                </Reveal>
              ))}
            </div>

            {/* Certs */}
            <Reveal>
              <div className="mt-10">
                <div className="font-mono text-xs tracking-[0.3em] text-[var(--cyber-cyan)] mb-4">
                  // CERTIFICATIONS
                </div>
                <div className="flex flex-wrap gap-3">
                  {certs.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-mono px-3 py-2 glass-panel rounded hover:border-[var(--cyber-red)] transition"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FREELANCE */}
        <section id="freelance" className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionHeading num="05" title="CONTRACTS" />
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-4 mb-10 max-w-2xl">
                <p className="text-muted-foreground leading-relaxed">
                  I take on freelance college projects — software and hardware — delivering
                  production-ready work on deadline. From web apps and automation scripts to
                  IoT prototypes and PCB design, I build what your syllabus demands.
                </p>
              </div>
            </Reveal>

            {/* Software */}
            <Reveal>
              <div className="font-mono text-xs tracking-[0.3em] text-[var(--cyber-cyan)] mb-4">
                // SOFTWARE PROJECTS
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {freelanceSoftware.map((p, i) => {
                const color =
                  p.color === "cyan"
                    ? "var(--cyber-cyan)"
                    : p.color === "red"
                    ? "var(--cyber-red)"
                    : "var(--cyber-blue)";
                return (
                  <Reveal key={p.title} delay={i * 120}>
                    <TiltCard className="p-6 h-full flex flex-col relative">
                      <div
                        className="absolute top-0 left-0 h-px w-16"
                        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                      />
                      <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-1 border border-white/10 rounded bg-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            {/* Hardware */}
            <Reveal>
              <div className="font-mono text-xs tracking-[0.3em] text-[var(--cyber-red)] mb-4">
                // HARDWARE PROJECTS
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              {freelanceHardware.map((p, i) => {
                const color =
                  p.color === "cyan"
                    ? "var(--cyber-cyan)"
                    : p.color === "red"
                    ? "var(--cyber-red)"
                    : "var(--cyber-blue)";
                return (
                  <Reveal key={p.title} delay={i * 120}>
                    <TiltCard className="p-6 h-full flex flex-col relative">
                      <div
                        className="absolute top-0 left-0 h-px w-16"
                        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
                      />
                      <h3 className="font-display text-lg font-bold mb-2">{p.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {p.desc}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-mono px-2 py-1 border border-white/10 rounded bg-white/5"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-6 justify-center glass-panel rounded-xl p-8">
                <div className="text-center md:text-left">
                  <h3 className="font-display text-xl mb-1">Have a college project?</h3>
                  <p className="text-sm text-muted-foreground">
                    Software or hardware — I deliver clean, documented, presentation-ready work.
                  </p>
                </div>
                <MagneticButton href="mailto:arishm450450@gmail.com?subject=Project%20Inquiry">
                  Start a Project
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="px-6 md:px-12 py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <p className="font-mono text-xs tracking-[0.4em] text-[var(--cyber-cyan)] mb-6">
                &gt; ESTABLISH_CONNECTION.sh
              </p>
              <h2 className="font-display text-5xl md:text-7xl font-black mb-6">
                <span className="text-gradient-cyber">LET'S BREAK</span>
                <br />
                <span>SOMETHING<span className="text-[var(--cyber-red)]">.</span></span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-10">
                Available for entry-level cybersecurity roles, freelance VAPT engagements,
                college software & hardware projects, and research collaborations.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <MagneticButton href="mailto:arishm450450@gmail.com">Send Email</MagneticButton>
                <MagneticButton href="https://github.com/alexx-cyber3" variant="danger">
                  GitHub
                </MagneticButton>
                <MagneticButton
                  href="https://www.linkedin.com/in/arish-m-345b0538b/"
                  variant="ghost"
                >
                  LinkedIn
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={350}>
              <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto font-mono text-xs">
                {[
                  ["EMAIL", "arishm450450@gmail.com"],
                  ["PHONE", "+91 95625 25386"],
                  ["LOCATION", "Palakkad, Kerala"],
                ].map(([k, v]) => (
                  <div key={k} className="glass-panel rounded p-4">
                    <div className="text-[var(--cyber-cyan)] mb-1">{k}</div>
                    <div className="text-muted-foreground truncate">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <footer className="px-6 md:px-12 py-8 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between gap-4 font-mono text-xs text-muted-foreground">
            <span>© 2026 ARISH.M // all systems nominal</span>
            <span className="text-[var(--cyber-cyan)]">encrypted_channel_established ◉</span>
          </div>
        </footer>
      </main>
    </>
  );
}

function SectionHeading({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-end gap-4 mb-2">
      <span className="font-mono text-xs text-[var(--cyber-red)] tracking-[0.3em] pb-2">
        {num}
      </span>
      <h2 className="font-display text-4xl md:text-6xl font-black text-gradient-cyber">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-[var(--cyber-cyan)]/50 to-transparent mb-4" />
    </div>
  );
}
