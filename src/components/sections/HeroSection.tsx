import { motion } from 'framer-motion';
import { FileText, MapPin } from 'lucide-react';
import { assets } from '../../assets';
import { fadeUp } from '../../constants/animations';
import { metrics, personal, primaryTech } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';
import { Card } from '../ui/Card';
import { TechBadge } from '../ui/TechBadge';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-[4.75rem] border-b border-portfolio-border/60 bg-gradient-to-b from-cyan-500/[0.06] to-transparent"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-20">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.36 }}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-portfolio-border bg-portfolio-card px-3 py-2 text-sm text-portfolio-muted">
            <MapPin size={16} className="text-cyan-400" />
            {personal.location}
          </div>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-portfolio-text sm:text-5xl lg:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-cyan-300 sm:text-xl lg:text-2xl">{personal.role}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-portfolio-muted sm:text-lg sm:leading-8">
            I build production-grade Java platforms: Kafka pipelines, ETL workflows, multi-tenant SaaS systems, and cloud
            automation that engineering teams can operate with confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {primaryTech.map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-xl bg-portfolio-accent px-5 py-3 text-sm font-semibold text-portfolio-bg transition hover:bg-portfolio-accentHover"
            >
              <FileText size={18} /> View Resume
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-portfolio-border bg-portfolio-card px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-portfolio-border bg-portfolio-card px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <Card className="overflow-hidden p-2 sm:p-3">
            <img
              src={assets.profileImage}
              alt="Gundrathi Lokesh speaking at a podium"
              className="aspect-[4/5] w-full max-h-[420px] rounded-lg object-cover object-[52%_52%] sm:max-h-[460px]"
              loading="eager"
            />
          </Card>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-4">
                <p className="text-xl font-bold text-portfolio-text sm:text-2xl">{metric.value}</p>
                <p className="mt-1 text-[0.65rem] uppercase leading-snug tracking-widest text-portfolio-muted sm:text-xs">
                  {metric.label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
