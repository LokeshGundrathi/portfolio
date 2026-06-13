import { ChevronRight } from 'lucide-react';

type ArchitectureFlowProps = {
  nodes: string[];
};

export function ArchitectureFlow({ nodes }: ArchitectureFlowProps) {
  return (
    <div className="mt-5 -mx-1 overflow-x-auto px-1 pb-1 [scrollbar-width:thin]">
      <div className="flex w-max min-w-full items-center gap-1.5 sm:gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-1.5 sm:gap-2">
            <div className="shrink-0 rounded-lg border border-cyan-500/20 bg-portfolio-bg px-3 py-2.5 text-center font-mono text-xs text-cyan-200">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <ChevronRight className="shrink-0 text-cyan-500/60" size={16} aria-hidden />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
