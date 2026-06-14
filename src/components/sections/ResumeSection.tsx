import { useState } from 'react';
import { Download, Eye, EyeOff } from 'lucide-react';
import { assets } from '../../assets';
import { sectionMeta } from '../../data/portfolio';
import { PdfViewer } from '../pdf/PdfViewer';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

const actionButtonClass =
  'inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition sm:w-auto';

export function ResumeSection() {
  const { label, title, subtitle, icon } = sectionMeta.resume;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Section
      id="resume"
      label={label}
      title={title}
      subtitle={subtitle}
      icon={icon}
    >
      <Card className="overflow-hidden">
        <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row sm:items-center sm:p-6">
          <div className="min-w-0">
            <h3 className="break-words text-base font-bold text-portfolio-text sm:text-lg">{assets.resumeFileName}</h3>
            <p className="mt-1 text-sm text-portfolio-muted">One-page PDF — preview on demand or download directly.</p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => setShowPreview((prev) => !prev)}
              className={`${actionButtonClass} border border-portfolio-border bg-portfolio-card text-portfolio-text hover:border-cyan-500/40 hover:text-cyan-300`}
            >
              {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
              {showPreview ? 'Hide Preview' : 'Preview Resume'}
            </button>
            <a
              href={assets.resumePdf}
              download={assets.resumeFileName}
              className={`${actionButtonClass} bg-portfolio-accent text-portfolio-bg hover:bg-portfolio-accentHover`}
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
        {showPreview ? (
          <div className="border-t border-portfolio-border">
            <PdfViewer file={assets.resumePdf} className="max-h-[70vh] sm:max-h-[620px]" />
          </div>
        ) : null}
      </Card>
    </Section>
  );
}
