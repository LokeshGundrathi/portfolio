import { engineeringHighlights, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function EngineeringHighlightsSection() {
  const { label, title, subtitle, icon } = sectionMeta.highlights;

  return (
    <Section
      id="highlights"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
      variant="band"
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3">
        {engineeringHighlights.map(({ value, label: metricLabel, detail, icon: MetricIcon }) => (
          <Card key={metricLabel} className="flex h-full min-w-0 flex-col p-4 sm:p-6">
            <div className="mb-3 flex items-start justify-between gap-3 sm:mb-4">
              <span className="shrink-0 rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                <MetricIcon size={22} />
              </span>
              <p className="font-mono text-2xl font-bold leading-none text-cyan-300 sm:text-3xl">{value}</p>
            </div>
            <h3 className="break-words text-base font-bold leading-snug text-portfolio-text sm:text-lg">{metricLabel}</h3>
            <p className="mt-2 flex-1 break-words text-sm leading-6 text-portfolio-muted">{detail}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
