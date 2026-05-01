"use client";
import { BadgeCheck } from "lucide-react";

const certs = [
  {
    title: "IBM Cloud Practitioner",
    issuer: "IBM",
    desc: "Proficient in deploying and managing applications on the IBM Cloud platform",
    color: "#7c3aed",
    icon: "☁️",
  },
  {
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    desc: "Core cloud concepts and Azure services fundamentals",
    color: "#06b6d4",
    icon: "⚡",
  },
  {
    title: "Developer Jumpstart Badge",
    issuer: "IBM",
    desc: "Recognised for practical application of IBM development tools and technologies",
    color: "#10b981",
    icon: "🏅",
  },
];

export default function Certifications() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] font-mono text-sm mb-3">// certifications & awards</p>
          <h2 className="text-4xl font-black">
            Credentials & <span className="gradient-text">Recognition</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map(({ title, issuer, desc, color, icon }) => (
            <div
              key={title}
              className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118] card-hover relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10"
                style={{ background: color }}
              />
              <div className="text-3xl mb-4">{icon}</div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-white">{title}</h3>
                <BadgeCheck size={16} style={{ color }} />
              </div>
              <p className="text-xs font-mono mb-3" style={{ color }}>{issuer}</p>
              <p className="text-sm text-[#64748b] leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* IBM Growth Award highlight */}
        <div className="mt-8 p-6 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 flex items-center gap-6">
          <div className="text-4xl">🏆</div>
          <div>
            <h3 className="font-bold text-white text-lg">IBM Growth Award 2023</h3>
            <p className="text-yellow-400 text-sm font-mono">Top Performance Recognition · IBM India</p>
            <p className="text-[#94a3b8] text-sm mt-1">
              Recognised by IBM for outstanding performance and contributions to enterprise cloud product development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
