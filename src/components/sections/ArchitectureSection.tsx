import { architectureSections, sectionMeta } from '../../data/portfolio';
import { ArchitectureFlow } from '../ui/ArchitectureFlow';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function ArchitectureSection() {
  const { label, title, icon } = sectionMeta.architecture;

  return (
    <Section
      id="architecture"
      label={label}
      title={title}
      subtitle="These compact diagrams make private production work explainable without exposing confidential source code."
      icon={icon}
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
        {architectureSections.map(({ title: sectionTitle, icon: SectionIcon, nodes, detail }) => (
          <Card key={sectionTitle} className="h-full min-w-0 overflow-hidden p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <span className="shrink-0 rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                <SectionIcon size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="break-words text-base font-bold leading-snug text-portfolio-text sm:text-lg">{sectionTitle}</h3>
                <p className="mt-2 break-words text-sm leading-6 text-portfolio-muted">{detail}</p>
              </div>
            </div>
            <ArchitectureFlow nodes={nodes} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
