import { Mail, Sparkles } from 'lucide-react';
import { personal, sectionMeta } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

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
      <Card className="p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1 text-sm text-cyan-300">
              <Sparkles size={15} /> Available for Java backend and full-stack roles
            </div>
            <p className="max-w-3xl leading-8 text-portfolio-muted">
              Reach out for roles involving Spring Boot, Kafka, ETL pipelines, AWS automation, multi-tenant SaaS, and
              production platform engineering.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-portfolio-accent px-5 py-3 text-sm font-semibold text-portfolio-bg transition hover:bg-portfolio-accentHover"
            >
              <Mail size={18} /> Email
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-portfolio-border bg-portfolio-bg px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-portfolio-border bg-portfolio-bg px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </Card>
    </Section>
  );
}
