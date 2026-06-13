import type { ReactNode } from 'react';

type TechBadgeProps = {
  children: ReactNode;
  muted?: boolean;
};

export function TechBadge({ children, muted = false }: TechBadgeProps) {
  return (
    <span
      className={`rounded-md px-2 py-1 font-mono text-xs font-medium ${
        muted ? 'bg-[#113947] text-cyan-200/70 ring-1 ring-cyan-500/10' : 'bg-portfolio-tag text-cyan-300'
      }`}
    >
      {children}
    </span>
  );
}
