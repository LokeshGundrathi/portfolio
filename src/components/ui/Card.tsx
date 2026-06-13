import type { ReactNode } from 'react';

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div
      className={`min-w-0 max-w-full rounded-xl border border-portfolio-border bg-portfolio-card transition hover:border-cyan-500/40 hover:shadow-glow ${className}`}
    >
      {children}
    </div>
  );
}
