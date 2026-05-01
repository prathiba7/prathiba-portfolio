"use client";
import { Award, GraduationCap, Briefcase } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[#7c3aed] font-mono text-sm mb-3">// about me</p>
            <h2 className="text-4xl font-black mb-6">
              Crafting <span className="gradient-text">Enterprise UIs</span> that scale
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-6">
              I&apos;m a Frontend Engineer at <span className="text-white font-semibold">IBM India</span> with 4+ years of experience
              building scalable, high-performance web applications for enterprise cloud platforms
              including <span className="text-[#a78bfa]">IBM Cloud</span> and{" "}
              <span className="text-[#a78bfa]">App Connect</span>.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-8">
              I specialize in React + TypeScript, real-time WebSocket UIs, Angular-to-React migrations,
              and E2E testing. I thrive in agile teams collaborating with product managers and designers
              to ship pixel-perfect, UX-focused features.
            </p>

            <div className="flex flex-wrap gap-3">
              {["React", "TypeScript", "Next.js", "Redux", "Jest", "Cypress"].map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-mono border border-[#7c3aed]/40 text-[#a78bfa] bg-[#7c3aed]/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Briefcase size={20} className="text-[#7c3aed]" />,
                title: "IBM India Pvt Ltd",
                sub: "Software Developer · Jul 2022 – Present",
                desc: "Enterprise cloud UI development for IBM Cloud & App Connect",
              },
              {
                icon: <GraduationCap size={20} className="text-[#06b6d4]" />,
                title: "NSS College of Engineering",
                sub: "B.Tech Computer Science · 2022",
                desc: "CGPA: 9.34 — Graduated with Honours",
              },
              {
                icon: <Award size={20} className="text-yellow-400" />,
                title: "IBM Growth Award 2023",
                sub: "Top Performance Recognition",
                desc: "Recognised for outstanding contributions to IBM cloud products",
              },
            ].map(({ icon, title, sub, desc }) => (
              <div
                key={title}
                className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#111118] card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[#1e1e2e]">{icon}</div>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="text-xs text-[#7c3aed] font-mono mt-0.5">{sub}</p>
                    <p className="text-sm text-[#64748b] mt-1">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
