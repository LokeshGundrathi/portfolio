import { Code2 } from 'lucide-react';
import { projects, sectionMeta } from '../../data/portfolio';
import { ArchitectureFlow } from '../ui/ArchitectureFlow';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { TechBadge } from '../ui/TechBadge';

const detailBlockClass = 'mt-3 min-w-0 sm:mt-4';

export function ProjectsSection() {
  const { label, title, subtitle, icon } = sectionMeta.projects;

  return (
    <Section
      id="projects"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
      variant="band"
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
        {projects.map((project) => (
          <Card key={project.title} className="flex h-full min-w-0 flex-col overflow-hidden p-4 sm:p-6">
            <div className="mb-3 flex min-w-0 items-start justify-between gap-3 sm:mb-4 sm:gap-4">
              <h3 className="min-w-0 break-words text-base font-bold leading-snug text-portfolio-text sm:text-lg md:text-xl">
                {project.title}
              </h3>
              <Code2 className="mt-0.5 shrink-0 text-cyan-400" size={20} />
            </div>
            <p className="break-words text-sm leading-6 text-portfolio-muted sm:text-base sm:leading-7">
              {project.description}
            </p>
            <p className="mt-3 break-words rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 font-mono text-[0.7rem] font-semibold leading-relaxed text-cyan-300 sm:mt-4 sm:text-xs">
              {project.highlight}
            </p>
            <div className={detailBlockClass}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Architecture</p>
              <ArchitectureFlow nodes={project.architecture} />
            </div>
            <div className={detailBlockClass}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Scale</p>
              <p className="break-words text-sm leading-6 text-portfolio-muted">{project.scale}</p>
            </div>
            <div className={detailBlockClass}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Reliability</p>
              <p className="break-words text-sm leading-6 text-portfolio-muted">{project.reliability}</p>
            </div>
            <div className={detailBlockClass}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Business impact</p>
              <p className="break-words text-sm leading-6 text-portfolio-muted">{project.businessImpact}</p>
            </div>
            <div className="mt-3 flex min-w-0 flex-wrap gap-2 sm:mt-4">
              {project.stack.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
