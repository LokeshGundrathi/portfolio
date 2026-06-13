import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { fadeUp } from '../../constants/animations';

type SectionProps = {
  id: string;
  label: string;
  title: string;
  subtitle?: string;
  icon: LucideIcon;
  variant?: 'default' | 'band';
  children: ReactNode;
};

export function Section({ id, label, title, subtitle, icon: Icon, variant = 'default', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-[4.75rem] ${
        variant === 'band' ? 'border-y border-portfolio-border/60 bg-[#12151f]/55' : ''
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.36, ease: 'easeOut' }}
      variants={fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
          <Icon size={17} strokeWidth={2.2} />
          <span>{label}</span>
        </div>
        <div className="mb-8 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-portfolio-text sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-3 leading-7 text-portfolio-muted">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
