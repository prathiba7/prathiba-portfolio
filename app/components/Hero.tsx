"use client";
import { Mail, MapPin, ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useEffect, useState } from "react";

const roles = [
  "Frontend Engineer",
  "React + TypeScript Dev",
  "Enterprise UI Builder",
  "Full Stack Developer",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7c3aed]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#06b6d4]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          Hi, I&apos;m{" "}
          <span className="gradient-text">Prathiba M</span>
        </h1>

        <div className="h-12 flex items-center justify-center mb-6">
          <span className="text-2xl md:text-3xl font-bold text-[#94a3b8]">
            {displayed}
            <span className="animate-pulse text-[#7c3aed]">|</span>
          </span>
        </div>

        <p className="text-[#64748b] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          4+ years building enterprise-scale cloud products at{" "}
          <span className="text-[#a78bfa] font-semibold">IBM</span>. Specializing in
          React, TypeScript, and high-performance UIs for global platforms.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold hover:bg-[#6d28d9] transition-all hover:scale-105 pulse-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-[#1e1e2e] text-[#94a3b8] font-semibold hover:border-[#7c3aed] hover:text-white transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { val: "4+", label: "Years Experience" },
            { val: "IBM", label: "Current Employer" },
            { val: "9.34", label: "CGPA (B.Tech)" },
            { val: "2023", label: "Growth Award" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-black gradient-text">{val}</div>
              <div className="text-xs text-[#64748b] mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/prathiba7"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-[#7c3aed] transition-all hover:scale-110"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/prathiba-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-[#06b6d4] transition-all hover:scale-110"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:mprathiba4@gmail.com"
            className="p-3 rounded-xl border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-[#7c3aed] transition-all hover:scale-110"
          >
            <Mail size={20} />
          </a>
          <div className="flex items-center gap-1 text-[#64748b] text-sm">
            <MapPin size={14} />
            Kerala, India
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#64748b] hover:text-white transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
