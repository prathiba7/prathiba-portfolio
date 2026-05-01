import { Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#64748b] text-sm font-mono">
          © {new Date().getFullYear()} Prathiba M · Built with{" "}
          <span className="text-[#7c3aed]">Next.js</span> +{" "}
          <span className="text-[#06b6d4]">TypeScript</span>
        </p>
        <div className="flex items-center gap-2 text-[#64748b] text-sm">
          <Heart size={14} className="text-red-400" />
          <span>Designed & built by Prathiba</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/prathiba7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-white transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/prathiba-m/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#64748b] hover:text-white transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
