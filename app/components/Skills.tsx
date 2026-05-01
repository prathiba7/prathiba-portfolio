"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Frontend (Core)",
    color: "#7c3aed",
    skills: [
      { name: "React.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "HTML5 / CSS3", level: 90 },
    ],
  },
  {
    category: "State & Testing",
    color: "#06b6d4",
    skills: [
      { name: "Redux", level: 85 },
      { name: "React Testing Library", level: 88 },
      { name: "Jest", level: 85 },
      { name: "Cypress / CodeceptJS", level: 80 },
    ],
  },
  {
    category: "Backend & DevOps",
    color: "#10b981",
    skills: [
      { name: "Node.js / Express", level: 70 },
      { name: "REST APIs / OpenAPI", level: 85 },
      { name: "Docker / Kubernetes", level: 72 },
      { name: "Jenkins CI/CD", level: 75 },
    ],
  },
];

const techBadges = [
  "React", "TypeScript", "Next.js", "Redux", "JavaScript",
  "HTML5", "CSS3", "Node.js", "Express", "REST API",
  "Jest", "Cypress", "Git", "Docker", "Kubernetes",
  "OpenShift", "Grafana", "Figma", "Carbon DS", "Python",
];

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-[#94a3b8] font-medium">{name}</span>
        <span className="text-xs font-mono" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[#1e1e2e] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%`, background: `linear-gradient(90deg, ${color}, ${color}99)` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] font-mono text-sm mb-3">// technical skills</p>
          <h2 className="text-4xl font-black">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
            Focused on frontend excellence with enterprise-grade tooling
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map(({ category, color, skills }) => (
            <div
              key={category}
              className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#0a0a0f] card-hover"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                <h3 className="font-bold text-white">{category}</h3>
              </div>
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} color={color} />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="text-center">
          <p className="text-[#64748b] text-sm mb-6 font-mono">// all technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techBadges.map((t) => (
              <span
                key={t}
                className="px-4 py-2 rounded-xl text-sm font-mono border border-[#1e1e2e] text-[#94a3b8] bg-[#0a0a0f] hover:border-[#7c3aed] hover:text-[#a78bfa] transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
