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
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {architectureSections.map(({ title: sectionTitle, icon: SectionIcon, nodes, detail }) => (
          <Card key={sectionTitle} className="h-full p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                <SectionIcon size={22} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-portfolio-text">{sectionTitle}</h3>
                <p className="mt-2 text-sm leading-6 text-portfolio-muted">{detail}</p>
              </div>
            </div>
            <ArchitectureFlow nodes={nodes} />
          </Card>
        ))}
      </div>
    </Section>
  );
}
