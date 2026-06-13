import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

type PdfViewerProps = {
  file: string;
  className?: string;
};

export function PdfViewer({ file, className = '' }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  return (
    <div className={`overflow-auto bg-[#0f1117] ${className}`}>
      <Document
        file={file}
        onLoadSuccess={({ numPages: pages }) => {
          setNumPages(pages);
          setError(null);
        }}
        onLoadError={() => setError('Unable to load the resume preview.')}
        loading={<p className="p-6 text-sm text-[#94a3b8]">Loading resume preview...</p>}
        error={
          <div className="p-6 text-[#94a3b8]">
            PDF preview is not available.
            <a href={file} className="ml-1 text-cyan-300 underline" download>
              Download the resume
            </a>
            .
          </div>
        }
        className="flex flex-col items-center gap-4 p-4"
      >
        {error ? <p className="p-6 text-sm text-red-300">{error}</p> : null}
        {numPages
          ? Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page-${index + 1}`}
                pageNumber={index + 1}
                width={Math.min(860, typeof window !== 'undefined' ? window.innerWidth - 48 : 860)}
                renderTextLayer
                renderAnnotationLayer
                className="overflow-hidden rounded-lg border border-[#2a2d3a] shadow-lg"
              />
            ))
          : null}
      </Document>
    </div>
  );
}
