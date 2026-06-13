import { FileText } from 'lucide-react';
import { navItems } from '../../data/portfolio';

type HeaderProps = {
  onNavigate: (id: string) => void;
};

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-border bg-portfolio-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => onNavigate('hero')}
          className="rounded-md text-sm font-extrabold uppercase tracking-[0.24em] text-portfolio-text transition hover:text-cyan-400"
          aria-label="Scroll to hero"
        >
          GL
        </button>
        <div className="hidden items-center gap-4 text-sm font-medium text-portfolio-muted lg:flex">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => onNavigate(item.toLowerCase().replaceAll(' ', '-'))}
              className="transition hover:text-cyan-400"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => onNavigate('resume')}
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-portfolio-accent px-3 py-2 text-sm font-semibold text-portfolio-bg transition hover:bg-portfolio-accentHover"
        >
          <FileText size={16} /> Resume
        </button>
      </nav>
    </header>
  );
}
