import { sectionMeta, skillCategories } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { TechBadge } from '../ui/TechBadge';

export function TechStackSection() {
  const { label, title, subtitle, icon } = sectionMeta.techStack;

  return (
    <Section
      id="tech-stack"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
      variant="band"
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
        {skillCategories.map(({ title: categoryTitle, icon: CategoryIcon, skills, primary, familiar, priority, muted }) => (
          <Card
            key={categoryTitle}
            className={`h-full min-w-0 overflow-hidden p-4 sm:p-6 ${muted ? 'opacity-80' : ''}`}
          >
            <div className="mb-4 flex flex-col gap-3 sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="shrink-0 rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                  <CategoryIcon size={22} />
                </span>
                <h3 className="break-words text-base font-bold text-portfolio-text sm:text-lg md:text-xl">{categoryTitle}</h3>
              </div>
              <span className={`w-fit shrink-0 rounded-full border px-3 py-1 text-xs ${muted ? 'border-portfolio-border/60 text-portfolio-muted/70' : 'border-portfolio-border text-portfolio-muted'}`}>
                {priority}
              </span>
            </div>
            {primary ? (
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-portfolio-muted">Primary</p>
                  <div className="flex flex-wrap gap-2">
                    {primary.map((item) => (
                      <TechBadge key={item}>{item}</TechBadge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-300/60">Familiar</p>
                  <div className="flex flex-wrap gap-2">
                    {familiar?.map((item) => (
                      <TechBadge key={item} muted>
                        {item}
                      </TechBadge>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {skills?.map((item) => (
                  <TechBadge key={item} muted={muted}>
                    {item}
                  </TechBadge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
