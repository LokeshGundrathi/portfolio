import { motion } from 'framer-motion';
import { FileText, MapPin } from 'lucide-react';
import { assets } from '../../assets';
import { fadeUp } from '../../constants/animations';
import { metrics, personal, primaryTech } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';
import { Card } from '../ui/Card';
import { TechBadge } from '../ui/TechBadge';

const actionButtonClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition sm:w-auto';

const roleParts = personal.role.split(' | ');

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-[4.25rem] border-b border-portfolio-border/60 bg-gradient-to-b from-cyan-500/[0.06] to-transparent sm:scroll-mt-[4.75rem]"
    >
      <div className="mx-auto grid w-full min-w-0 max-w-6xl grid-cols-1 items-start gap-6 px-4 py-10 sm:gap-8 sm:px-6 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-20">
        <Card className="order-1 mx-auto min-w-0 overflow-hidden p-2 sm:p-3 lg:col-start-2 lg:row-start-1 lg:mx-0">
          <div className="mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-lg sm:max-w-[360px] lg:max-w-[420px]">
            <img
              src={assets.profileImage}
              alt="Gundrathi Lokesh professional headshot"
              className="h-full w-full origin-[50%_24%] scale-[1.38] object-cover object-[50%_24%]"
              loading="eager"
            />
          </div>
        </Card>

        <motion.div
          className="order-2 min-w-0 w-full lg:col-start-1 lg:row-span-2 lg:row-start-1"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.36 }}
        >
          <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-portfolio-border bg-portfolio-card px-3 py-2 text-xs text-portfolio-muted sm:mb-4 sm:text-sm">
            <MapPin size={16} className="shrink-0 text-cyan-400" />
            <span className="truncate">{personal.location}</span>
          </div>
          <h1 className="max-w-full break-words text-2xl font-extrabold leading-tight tracking-tight text-portfolio-text sm:text-4xl md:text-5xl lg:text-6xl">
            {personal.name}
          </h1>

          <div className="mt-3 flex flex-col gap-1 sm:hidden">
            {roleParts.map((part) => (
              <span key={part} className="text-sm font-semibold leading-snug text-cyan-300">
                {part}
              </span>
            ))}
          </div>
          <p className="mt-3 hidden max-w-full break-words text-base font-semibold leading-snug text-cyan-300 sm:block md:text-lg lg:text-xl">
            {personal.role}
          </p>

          <p className="mt-3 max-w-full break-words text-sm leading-6 text-portfolio-muted sm:mt-4 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
            {personal.heroBio}
          </p>
          <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
            {primaryTech.map((item) => (
              <TechBadge key={item}>{item}</TechBadge>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
            <a
              href="#resume"
              className={`${actionButtonClass} bg-portfolio-accent text-portfolio-bg hover:bg-portfolio-accentHover`}
            >
              <FileText size={18} /> View Resume
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-card text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-card text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </motion.div>

        <div className="order-3 grid min-w-0 grid-cols-2 gap-2 sm:gap-3 lg:col-start-2 lg:row-start-2">
          {metrics.map((metric) => (
            <Card key={metric.label} className="min-w-0 p-3 sm:p-4">
              <p className="text-lg font-bold text-portfolio-text sm:text-xl lg:text-2xl">{metric.value}</p>
              <p className="mt-1 break-words text-[0.62rem] uppercase leading-snug tracking-wider text-portfolio-muted sm:text-xs sm:tracking-widest">
                {metric.label}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
