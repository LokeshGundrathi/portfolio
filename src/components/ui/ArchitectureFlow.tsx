import { ChevronRight } from 'lucide-react';

type ArchitectureFlowProps = {
  nodes: string[];
};

export function ArchitectureFlow({ nodes }: ArchitectureFlowProps) {
  return (
    <>
      <div className="mt-4 flex flex-col gap-1.5 sm:hidden">
        {nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-stretch gap-1.5">
            <div className="rounded-lg border border-cyan-500/20 bg-portfolio-bg px-3 py-2 text-center font-mono text-xs leading-snug text-cyan-200">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <ChevronRight className="mx-auto rotate-90 text-cyan-500/60" size={14} aria-hidden />
            ) : null}
          </div>
        ))}
      </div>

      <div className="mt-4 hidden max-w-full overflow-x-auto sm:mt-5 sm:block [scrollbar-width:thin]">
        <div className="flex w-max items-center gap-2">
          {nodes.map((node, index) => (
            <div key={node} className="flex items-center gap-2">
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
    </>
  );
}
