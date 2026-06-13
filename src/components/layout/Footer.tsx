import { Mail } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-[#0c0e14]/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-portfolio-text">{personal.name}</p>
          <p className="mt-1 text-sm text-portfolio-muted">{personal.role}</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-1.5 text-portfolio-muted transition hover:text-cyan-300"
          >
            <Mail size={15} /> {personal.email}
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
