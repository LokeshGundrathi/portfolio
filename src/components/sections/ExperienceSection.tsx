import { ChevronRight, MapPin } from 'lucide-react';
import { experienceBullets, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function ExperienceSection() {
  const { label, title, icon } = sectionMeta.experience;

  return (
    <Section
      id="experience"
      label={label}
      title={title}
      subtitle="A recruiter should see the shape of the work immediately: throughput, services owned, cloud automation, and team leadership."
      icon={icon}
    >
      <div className="relative border-l border-portfolio-border pl-4 sm:pl-8">
        <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
        <Card className="p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col justify-between gap-3 border-b border-portfolio-border pb-4 sm:gap-4 sm:pb-6 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-xl font-bold text-portfolio-text sm:text-2xl">InspironLabs</h2>
              <p className="mt-1 text-sm text-cyan-300 sm:text-base">Software Engineer - Java Full Stack</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="text-sm font-medium text-portfolio-muted sm:text-base">Oct 2024 - Present</p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs text-portfolio-muted sm:text-sm">
                <MapPin size={14} className="shrink-0 text-cyan-400" /> Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-2.5 sm:mt-6 sm:gap-3 lg:grid-cols-2">
            {experienceBullets.map((bullet) => (
              <div key={bullet} className="flex gap-2.5 text-sm leading-6 text-portfolio-muted sm:gap-3">
                <ChevronRight className="mt-1 shrink-0 text-cyan-400" size={17} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Section>
  );
}
