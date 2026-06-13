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
      <div className="relative border-l border-portfolio-border pl-5 sm:pl-8">
        <span className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/15" />
        <Card className="p-6 sm:p-8">
          <div className="flex flex-col justify-between gap-4 border-b border-portfolio-border pb-6 sm:flex-row sm:items-start">
            <div>
              <h2 className="text-2xl font-bold text-portfolio-text">InspironLabs</h2>
              <p className="mt-1 text-cyan-300">Software Engineer - Java Full Stack</p>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-medium text-portfolio-muted">Oct 2024 - Present</p>
              <p className="mt-1 inline-flex items-center gap-1 text-sm text-portfolio-muted">
                <MapPin size={14} className="text-cyan-400" /> Bengaluru, Karnataka
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 lg:grid-cols-2">
            {experienceBullets.map((bullet) => (
              <div key={bullet} className="flex gap-3 text-sm leading-6 text-portfolio-muted">
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
