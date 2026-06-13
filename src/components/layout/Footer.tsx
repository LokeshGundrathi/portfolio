import { Mail } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-[#0c0e14]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-portfolio-text">{personal.name}</p>
          <p className="mt-1 text-sm text-portfolio-muted">{personal.role}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-1.5 break-all text-portfolio-muted transition hover:text-cyan-300"
          >
            <Mail size={15} className="shrink-0" /> {personal.email}
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-portfolio-muted transition hover:text-cyan-300"
          >
            <Linkedin size={15} /> LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-portfolio-muted transition hover:text-cyan-300"
          >
            <Github size={15} /> GitHub
          </a>
          <a href="#resume" className="text-portfolio-muted transition hover:text-cyan-300">
            Resume
          </a>
        </div>
        <p className="text-xs text-portfolio-muted/80">© {year} {personal.name}</p>
      </div>
    </footer>
  );
}
