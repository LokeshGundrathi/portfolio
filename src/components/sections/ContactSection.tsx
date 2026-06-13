import { Mail, Phone, Sparkles } from 'lucide-react';
import { personal, sectionMeta } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const actionButtonClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition sm:w-auto';

export function ContactSection() {
  const { label, title, icon } = sectionMeta.contact;

  return (
    <Section
      id="contact"
      label={label}
      title={title}
      subtitle="The page ends with a direct recruiter action path: email, LinkedIn, GitHub, and resume."
      icon={icon}
    >
      <Card className="p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col justify-between gap-5 sm:gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs text-cyan-300 sm:text-sm">
              <Sparkles size={15} className="shrink-0" />
              <span>Available for Java backend and full-stack roles</span>
            </div>
            <p className="max-w-3xl text-sm leading-7 text-portfolio-muted sm:text-base sm:leading-8">
              Reach out for roles involving Spring Boot, Kafka, ETL pipelines, AWS automation, multi-tenant SaaS, and
              production platform engineering.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <a
              href={`mailto:${personal.email}`}
              className={`${actionButtonClass} bg-portfolio-accent text-portfolio-bg hover:bg-portfolio-accentHover`}
            >
              <Mail size={18} /> Email
            </a>
            <a
              href={`tel:${personal.phone.replace(/\s/g, '')}`}
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-bg text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              <Phone size={18} /> {personal.phone}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-bg text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-bg text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
