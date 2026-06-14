import { Award } from 'lucide-react';
import { certifications, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function CertificationsSection() {
  const { label, title, subtitle, icon } = sectionMeta.certifications;

  return (
    <Section
      id="certifications"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
      variant="band"
    >
      <div className="grid items-stretch gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex h-full flex-col p-4 sm:p-5">
            <Award className="mb-3 text-cyan-400 sm:mb-4" size={24} />
            <h3 className="text-base font-bold leading-snug text-portfolio-text sm:text-lg">{cert.title}</h3>
            <p className="mt-2 text-sm font-semibold text-cyan-300">{cert.issuer}</p>
            <p className="mt-auto pt-2 font-mono text-xs text-portfolio-muted">{cert.period}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
