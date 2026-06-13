import { useEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

type PdfViewerProps = {
  file: string;
  className?: string;
};

export function PdfViewer({ file, className = '' }: PdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pageWidth, setPageWidth] = useState(320);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateWidth = () => {
      const nextWidth = Math.floor(container.clientWidth - 24);
      setPageWidth(Math.max(240, Math.min(nextWidth, 860)));
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={`overflow-auto bg-portfolio-bg ${className}`}>
      <Document
        file={file}
        onLoadSuccess={({ numPages: pages }) => {
          setNumPages(pages);
          setError(null);
        }}
        onLoadError={() => setError('Unable to load the resume preview.')}
        loading={<p className="p-4 text-sm text-portfolio-muted sm:p-6">Loading resume preview...</p>}
        error={
          <div className="p-4 text-sm text-portfolio-muted sm:p-6">
            PDF preview is not available.
            <a href={file} className="ml-1 text-cyan-300 underline" download>
              Download the resume
            </a>
            .
          </div>
        }
        className="flex flex-col items-center gap-3 p-3 sm:gap-4 sm:p-4"
      >
        {error ? <p className="p-4 text-sm text-red-300 sm:p-6">{error}</p> : null}
        {numPages
          ? Array.from({ length: numPages }, (_, index) => (
              <Page
                key={`page-${index + 1}`}
                pageNumber={index + 1}
                width={pageWidth}
                renderTextLayer
                renderAnnotationLayer
                className="max-w-full overflow-hidden rounded-lg border border-portfolio-border shadow-lg"
              />
            ))
          : null}
      </Document>
    </div>
  );
}
