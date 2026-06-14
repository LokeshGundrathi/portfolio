import { ExternalLink, GitBranch } from 'lucide-react';
import { featuredRepos, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';
import { TechBadge } from '../ui/TechBadge';

export function GitHubRepositoriesSection() {
  const { label, title, subtitle, icon } = sectionMeta.github;

  return (
    <Section
      id="github"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
    >
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
        {featuredRepos.map((repo) => (
          <Card key={repo.name} className="flex h-full min-w-0 flex-col overflow-hidden p-4 sm:p-6">
            <div className="mb-3 flex min-w-0 items-start justify-between gap-3 sm:mb-4">
              <div className="min-w-0">
                <h3 className="break-words font-mono text-base font-bold leading-snug text-portfolio-text sm:text-lg">
                  {repo.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-cyan-300/80">{repo.language}</p>
              </div>
              <GitBranch className="mt-0.5 shrink-0 text-cyan-400" size={20} />
            </div>
            <p className="break-words text-sm leading-6 text-portfolio-muted sm:text-base sm:leading-7">{repo.description}</p>
            <p className="mt-3 break-words rounded-lg border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 font-mono text-[0.7rem] font-semibold leading-relaxed text-cyan-300 sm:mt-4 sm:text-xs">
              {repo.highlight}
            </p>
            <div className="mt-3 flex min-w-0 flex-wrap gap-2 sm:mt-4">
              {repo.stack.map((item) => (
                <TechBadge key={item}>{item}</TechBadge>
              ))}
            </div>
            <a
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 sm:mt-5"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </Card>
        ))}
      </div>
    </Section>
  );
}
