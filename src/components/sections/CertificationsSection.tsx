import { Award } from 'lucide-react';
import { certifications, sectionMeta } from '../../data/portfolio';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function CertificationsSection() {
  const { label, title, icon } = sectionMeta.certifications;

  return (
    <Section
      id="certifications"
      label={label}
      title={title}
      subtitle="A tight credential section supports the profile without competing with production work."
      icon={icon}
      variant="band"
    >
      <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <Card key={cert.title} className="flex h-full flex-col p-5">
            <Award className="mb-4 text-cyan-400" size={24} />
            <h3 className="text-lg font-bold text-portfolio-text">{cert.title}</h3>
            <p className="mt-2 text-sm font-semibold text-cyan-300">{cert.issuer}</p>
            <p className="mt-auto pt-2 font-mono text-xs text-portfolio-muted">{cert.period}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
