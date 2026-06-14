import { ChevronRight } from 'lucide-react';
import { productionOwnershipItems, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function ProductionOwnershipSection() {
  const { label, title, subtitle, icon } = sectionMeta.productionOwnership;

  return (
    <Section
      id="production-ownership"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
        {productionOwnershipItems.map(({ title: itemTitle, icon: ItemIcon, points }) => (
          <Card key={itemTitle} className="h-full min-w-0 overflow-hidden p-4 sm:p-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="shrink-0 rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                <ItemIcon size={22} />
              </span>
              <h3 className="break-words text-base font-bold leading-snug text-portfolio-text sm:text-lg">{itemTitle}</h3>
            </div>
            <div className="space-y-2.5">
              {points.map((point) => (
                <div key={point} className="flex gap-2.5 text-sm leading-6 text-portfolio-muted">
                  <ChevronRight className="mt-1 shrink-0 text-cyan-400" size={17} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
