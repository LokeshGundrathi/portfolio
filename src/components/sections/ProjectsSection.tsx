import { Code2 } from 'lucide-react';
import { projects, sectionMeta } from '../../data/portfolio';
import { ArchitectureFlow } from '../ui/ArchitectureFlow';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { TechBadge } from '../ui/TechBadge';

export function ProjectsSection() {
  const { label, title, icon } = sectionMeta.projects;

  return (
    <Section
      id="projects"
      label={label}
      title={title}
      subtitle="Each project shows the technical system, stack, and business reason a recruiter or engineering manager should care."
      icon={icon}
      variant="band"
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex h-full flex-col p-6">
            <div className="mb-4 flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-portfolio-text">{project.title}</h3>
              <Code2 className="mt-1 shrink-0 text-cyan-400" size={21} />
            </div>
            <p className="leading-7 text-portfolio-muted">{project.description}</p>
            <p className="mt-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 font-mono text-xs font-semibold text-cyan-300">
              {project.highlight}
            </p>
            <div className="mt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Business impact</p>
              <p className="text-sm leading-6 text-portfolio-muted">{project.businessImpact}</p>
            </div>
            <ArchitectureFlow nodes={project.architecture} />
            <div className="mt-4 flex flex-wrap gap-2">
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
