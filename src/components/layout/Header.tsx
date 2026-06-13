import { useEffect, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { navItems } from '../../data/portfolio';

type HeaderProps = {
  onNavigate: (id: string) => void;
};

export function Header({ onNavigate }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavigate = (id: string) => {
    setMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-portfolio-border bg-portfolio-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleNavigate('hero')}
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
              onClick={() => handleNavigate(item.toLowerCase().replaceAll(' ', '-'))}
              className="transition hover:text-cyan-400"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => handleNavigate('resume')}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-portfolio-accent px-3 py-2 text-sm font-semibold text-portfolio-bg transition hover:bg-portfolio-accentHover sm:gap-2"
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-lg border border-portfolio-border bg-portfolio-card p-2 text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {menuOpen ? (
        <div id="mobile-nav" className="border-t border-portfolio-border bg-portfolio-bg/95 lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigate(item.toLowerCase().replaceAll(' ', '-'))}
                className="rounded-lg px-3 py-3 text-left text-base font-medium text-portfolio-muted transition hover:bg-portfolio-card hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
