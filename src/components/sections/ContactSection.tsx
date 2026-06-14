import type { ReactNode } from 'react';
import { FileText, Mail, Phone, Sparkles } from 'lucide-react';
import { assets } from '../../assets';
import { personal, sectionMeta } from '../../data/portfolio';
import { Github, Linkedin } from '../icons/SocialIcons';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
};

const contactLinkClass =
  'group flex min-w-0 items-center gap-3 rounded-xl border border-portfolio-border bg-portfolio-bg px-4 py-3 transition hover:border-cyan-500/40 hover:bg-cyan-500/[0.04]';

export function ContactSection() {
  const { label, title, icon } = sectionMeta.contact;

  const contactLinks: ContactLink[] = [
    {
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
      icon: <Mail size={18} className="shrink-0 text-cyan-400" />,
    },
    {
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
      icon: <Phone size={18} className="shrink-0 text-cyan-400" />,
    },
    {
      label: 'LinkedIn',
      value: 'lokesh-gundrathi',
      href: personal.linkedin,
      icon: <Linkedin size={18} className="shrink-0 text-cyan-400" />,
      external: true,
    },
    {
      label: 'GitHub',
      value: 'LokeshGundrathi',
      href: personal.github,
      icon: <Github size={18} className="shrink-0 text-cyan-400" />,
      external: true,
    },
    {
      label: 'Resume',
      value: assets.resumeFileName,
      href: assets.resumePdf,
      icon: <FileText size={18} className="shrink-0 text-cyan-400" />,
    },
  ];

  return (
    <Section
      id="contact"
      label={label}
      title={title}
      subtitle="Java Full Stack Developer experienced in Spring Boot, Microservices, React, Kafka, MongoDB, PostgreSQL, and AWS, building scalable enterprise applications."      icon={icon}
    >
      <Card className="p-4 sm:p-6 lg:p-8">
        <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-1.5 text-xs text-cyan-300 sm:mb-6 sm:text-sm">
          <Sparkles size={15} className="shrink-0" />
          <span>Available for Java Full Stack roles</span>
        </div>

        <p className="max-w-3xl text-sm leading-7 text-portfolio-muted sm:text-base sm:leading-8">
          I work across the full Java stack — backend services, REST APIs, integrations, cloud deployment, and
          frontend delivery. If you are hiring for Java full stack engineering, I would be glad to connect.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              download={item.label === 'Resume' ? assets.resumeFileName : undefined}
              className={contactLinkClass}
            >
              {item.icon}
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-portfolio-muted">
                  {item.label}
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-portfolio-text transition group-hover:text-cyan-300 sm:text-base">
                  {item.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </Card>
    </Section>
  );
}
