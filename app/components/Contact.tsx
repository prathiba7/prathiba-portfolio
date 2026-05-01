"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mprathiba4@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#111118]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] font-mono text-sm mb-3">// get in touch</p>
          <h2 className="text-4xl font-black">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-[#64748b] mt-4 max-w-xl mx-auto">
            I&apos;m actively looking for new opportunities. Whether you have a role in mind or just want to chat — my inbox is open!
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-[#a78bfa] text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="flex flex-col gap-4">
            {[
              {
                icon: <Mail size={20} className="text-[#7c3aed]" />,
                label: "Email",
                value: "mprathiba4@gmail.com",
                action: copyEmail,
                actionLabel: copied ? "Copied!" : "Copy",
              },
              {
                icon: <Phone size={20} className="text-[#06b6d4]" />,
                label: "Phone",
                value: "+91 8078778410",
                action: null,
                actionLabel: null,
              },
              {
                icon: <MapPin size={20} className="text-[#10b981]" />,
                label: "Location",
                value: "Kerala, India 678508",
                action: null,
                actionLabel: null,
              },
            ].map(({ icon, label, value, action, actionLabel }) => (
              <div
                key={label}
                className="p-5 rounded-2xl border border-[#1e1e2e] bg-[#0a0a0f] flex items-center gap-4"
              >
                <div className="p-2 rounded-lg bg-[#1e1e2e]">{icon}</div>
                <div className="flex-1">
                  <p className="text-xs text-[#64748b] font-mono">{label}</p>
                  <p className="text-white font-medium">{value}</p>
                </div>
                {action && (
                  <button
                    onClick={action}
                    className="text-xs px-3 py-1 rounded-lg border border-[#7c3aed]/40 text-[#a78bfa] hover:bg-[#7c3aed]/10 transition-colors"
                  >
                    {actionLabel}
                  </button>
                )}
              </div>
            ))}

            {/* Social */}
            <div className="flex gap-3 mt-2">
              <a
                href="https://www.linkedin.com/in/prathiba-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-[#06b6d4] transition-all"
              >
                <LinkedinIcon size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="https://github.com/prathiba7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border border-[#1e1e2e] text-[#64748b] hover:text-white hover:border-[#7c3aed] transition-all"
              >
                <GithubIcon size={18} />
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* CTA card */}
          <div className="p-8 rounded-2xl border border-[#7c3aed]/30 bg-gradient-to-br from-[#7c3aed]/10 to-[#06b6d4]/5 flex flex-col justify-center">
            <h3 className="text-2xl font-black text-white mb-3">
              Ready to build something great?
            </h3>
            <p className="text-[#94a3b8] mb-6 leading-relaxed">
              I bring 4+ years of enterprise React + TypeScript experience, a strong testing mindset,
              and a passion for clean, scalable UI architecture.
            </p>
            <a
              href="mailto:mprathiba4@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#7c3aed] text-white font-semibold hover:bg-[#6d28d9] transition-all hover:scale-105 pulse-glow"
            >
              <Send size={18} />
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
