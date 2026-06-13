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
      className={`min-w-0 scroll-mt-[4.25rem] sm:scroll-mt-[4.75rem] ${
        variant === 'band' ? 'border-y border-portfolio-border/60 bg-[#12151f]/55' : ''
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.36, ease: 'easeOut' }}
      variants={fadeUp}
    >
      <div className="mx-auto w-full min-w-0 max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400 sm:text-sm">
          <Icon size={17} strokeWidth={2.2} />
          <span>{label}</span>
        </div>
        <div className="mb-6 max-w-3xl sm:mb-8">
          <h2 className="break-words text-2xl font-bold tracking-tight text-portfolio-text sm:text-3xl lg:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 break-words text-sm leading-6 text-portfolio-muted sm:mt-3 sm:text-base sm:leading-7">
              {subtitle}
            </p>
          ) : null}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </motion.section>
  );
}
