"use client";
import { useEffect, useState } from "react";
import { Star, GitFork, ExternalLink, Code2 } from "lucide-react";
import { GithubIcon } from "./icons";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  "C++": "#f34b7d",
  Java: "#b07219",
};

// Fallback featured projects in case GitHub API is rate-limited
const fallbackProjects = [
  {
    id: 1,
    name: "RoleWeaverCv",
    description: "AI-powered resume builder with React + TypeScript frontend and Node.js backend. Features PDF generation and real-time preview.",
    html_url: "https://github.com/prathiba7",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: ["react", "typescript", "nodejs", "ai"],
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "nextRole",
    description: "Next.js job tracking application with dashboard, resume management, and application pipeline features.",
    html_url: "https://github.com/prathiba7",
    homepage: null,
    stargazers_count: 0,
    forks_count: 0,
    language: "TypeScript",
    topics: ["nextjs", "typescript", "dashboard"],
    updated_at: new Date().toISOString(),
  },
];

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/prathiba7/repos?sort=updated&per_page=6")
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data.filter((r: Repo) => !r.name.startsWith(".")));
        } else {
          setRepos(fallbackProjects as Repo[]);
        }
      })
      .catch(() => setRepos(fallbackProjects as Repo[]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="py-24 px-6 bg-[#111118]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] font-mono text-sm mb-3">// github projects</p>
          <h2 className="text-4xl font-black">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#64748b] mt-4">
            Live from{" "}
            <a
              href="https://github.com/prathiba7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a78bfa] hover:underline"
            >
              github.com/prathiba7
            </a>
          </p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-52 rounded-2xl bg-[#1e1e2e] animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="p-6 rounded-2xl border border-[#1e1e2e] bg-[#0a0a0f] card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <Code2 size={20} className="text-[#7c3aed]" />
                  <div className="flex gap-2">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#64748b] hover:text-white transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#64748b] hover:text-white transition-colors"
                    >
                    <GithubIcon size={16} />
                    </a>
                  </div>
                </div>

                <h3 className="font-bold text-white mb-2 font-mono">{repo.name}</h3>
                <p className="text-sm text-[#64748b] flex-1 leading-relaxed mb-4">
                  {repo.description || "No description provided."}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-xs bg-[#7c3aed]/10 text-[#a78bfa] border border-[#7c3aed]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center justify-between text-xs text-[#64748b]">
                  <div className="flex items-center gap-1">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ background: langColors[repo.language ?? ""] ?? "#64748b" }}
                    />
                    <span>{repo.language ?? "—"}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star size={12} /> {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork size={12} /> {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <a
            href="https://github.com/prathiba7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1e1e2e] text-[#94a3b8] hover:border-[#7c3aed] hover:text-white transition-all"
          >
            <GithubIcon size={18} />
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
}
