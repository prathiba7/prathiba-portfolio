"use client";

const experiences = [
  {
    role: "Software Developer",
    company: "IBM India Private Limited",
    period: "Jul 2022 – Present",
    location: "Kochi, India",
    type: "Full-time",
    color: "#7c3aed",
    highlights: [
      "Developed and maintained React + TypeScript UI components for IBM Cloud and App Connect, used by enterprise customers worldwide",
      "Integrated REST APIs and WebSocket-based real-time monitoring to display pod-level runtime statistics for hybrid cloud deployments",
      "Led Angular-to-React migration for key UI modules, improving load time and maintainability with pixel-perfect responsive design",
      "Developed UI features for IBM Hybrid Cloud webMethods integration platform",
      "Collaborated with product managers, designers, and backend engineers in agile sprints to ship UX-focused features on time",
    ],
    stack: ["React", "TypeScript", "WebSocket", "REST API", "Angular", "Carbon DS"],
  },
  {
    role: "Software Developer Intern",
    company: "IBM India Private Limited",
    period: "Jan 2022 – Jul 2022",
    location: "Kochi, India",
    type: "Internship",
    color: "#06b6d4",
    highlights: [
      "Contributed to migrating IBM App Connect from Angular to React, ensuring seamless transition and improved performance",
      "Implemented unit and E2E tests using React Testing Library, Jest, and CodeceptJS/Cypress, reducing production incidents",
      "Gained hands-on experience with Git, Jenkins, OpenShift, Kubernetes, and Grafana in a production environment",
    ],
    stack: ["React", "Angular", "Jest", "Cypress", "Git", "Kubernetes"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] font-mono text-sm mb-3">// work experience</p>
          <h2 className="text-4xl font-black">
            Where I&apos;ve <span className="gradient-text">Worked</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#7c3aed] via-[#06b6d4] to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <div key={i} className="md:pl-16 relative">
                {/* Dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block"
                  style={{ borderColor: exp.color, background: "#0a0a0f", boxShadow: `0 0 12px ${exp.color}60` }}
                />

                <div className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#111118] card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="font-semibold mt-0.5" style={{ color: exp.color }}>
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-mono border"
                        style={{ borderColor: `${exp.color}40`, color: exp.color, background: `${exp.color}10` }}
                      >
                        {exp.type}
                      </span>
                      <p className="text-xs text-[#64748b] mt-2 font-mono">{exp.period}</p>
                      <p className="text-xs text-[#64748b]">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#0a0a0f] border border-[#1e1e2e] text-[#64748b]"
                      >
                        {s}
                      </span>
                    ))}
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
