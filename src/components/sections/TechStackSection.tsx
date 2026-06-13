import { sectionMeta, skillCategories } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { TechBadge } from '../ui/TechBadge';

export function TechStackSection() {
  const { label, title, icon } = sectionMeta.techStack;

  return (
    <Section
      id="tech-stack"
      label={label}
      title={title}
      subtitle="Primary production strengths are surfaced first. Secondary and basic skills stay visible without diluting the backend positioning."
      icon={icon}
      variant="band"
    >
      <div className="grid items-stretch gap-5 md:grid-cols-2">
        {skillCategories.map(({ title: categoryTitle, icon: CategoryIcon, skills, primary, familiar, priority }) => (
          <Card key={categoryTitle} className="h-full p-6">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="rounded-lg bg-portfolio-tag p-2 text-cyan-300">
                  <CategoryIcon size={22} />
                </span>
                <h3 className="text-xl font-bold text-portfolio-text">{categoryTitle}</h3>
              </div>
              <span className="shrink-0 rounded-full border border-portfolio-border px-3 py-1 text-xs text-portfolio-muted">
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
                  <TechBadge key={item}>{item}</TechBadge>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </Section>
  );
}
