import React, { useRef, useEffect } from 'react';

interface PreviewFrameProps {
  htmlContent: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ htmlContent }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // We strictly use srcDoc for sandboxing, but we also want to ensure the iframe 
    // doesn't inherit any weird browser defaults. The prompt ensures a reset is inside the HTML.
  }, [htmlContent]);

  return (
    <div className="w-full h-full bg-checkers rounded-xl overflow-hidden border border-zinc-700 shadow-2xl bg-white/5 relative group">
      <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-900 border-b border-zinc-700 flex items-center px-3 gap-2 z-10">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        <div className="ml-auto text-xs text-zinc-500 font-mono">index.html</div>
      </div>
      <iframe
        ref={iframeRef}
        srcDoc={htmlContent}
        className="w-full h-[calc(100%-2rem)] mt-8 bg-white"
        sandbox="allow-scripts" // Allow JS for interactive demos
        title="Artifact Preview"
      />
    </div>
  );
};
