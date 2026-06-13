import { useState } from 'react';
import { Download, Eye, EyeOff } from 'lucide-react';
import { assets } from '../../assets';
import { sectionMeta } from '../../data/portfolio';
import { PdfViewer } from '../pdf/PdfViewer';
import { Card } from '../ui/Card';
import { Section } from '../ui/Section';

export function ResumeSection() {
  const { label, title, icon } = sectionMeta.resume;
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Section
      id="resume"
      label={label}
      title={title}
      subtitle="Recruiters can inspect the resume without leaving the page, then download it in one click."
      icon={icon}
    >
      <Card className="overflow-hidden">
        <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <div>
            <h3 className="text-lg font-bold text-portfolio-text">{assets.resumeFileName}</h3>
            <p className="mt-1 text-sm text-portfolio-muted">One-page PDF — preview on demand or download directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setShowPreview((prev) => !prev)}
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-portfolio-border bg-portfolio-card px-5 py-3 text-sm font-semibold text-portfolio-text transition hover:border-cyan-500/40 hover:text-cyan-300"
            >
              {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
              {showPreview ? 'Hide Preview' : 'Preview Resume'}
            </button>
            <a
              href={assets.resumePdf}
              download={assets.resumeFileName}
              className="inline-flex w-fit items-center gap-2 rounded-xl bg-portfolio-accent px-5 py-3 text-sm font-semibold text-portfolio-bg transition hover:bg-portfolio-accentHover"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>
        </div>
        {showPreview ? (
          <div className="border-t border-portfolio-border">
            <PdfViewer file={assets.resumePdf} className="max-h-[620px]" />
          </div>
        ) : null}
      </Card>
    </Section>
  );
}
