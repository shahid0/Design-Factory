import React, { useRef, useState, useEffect } from 'react';
import { Smartphone, Tablet, Monitor, Maximize2, Minimize2, ExternalLink } from 'lucide-react';

interface PreviewFrameProps {
  htmlContent: string;
}

export const PreviewFrame: React.FC<PreviewFrameProps> = ({ htmlContent }) => {
  const [width, setWidth] = useState<string>('100%');
  const [deviceMode, setDeviceMode] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Esc key to exit fullscreen
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsFullscreen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleDeviceChange = (mode: 'mobile' | 'tablet' | 'desktop') => {
    setDeviceMode(mode);
    switch (mode) {
      case 'mobile': setWidth('375px'); break;
      case 'tablet': setWidth('768px'); break;
      case 'desktop': setWidth('100%'); break;
    }
  };

  const handleOpenNewTab = () => {
    const win = window.open('', '_blank');
    if (win) {
      win.document.write(htmlContent);
      win.document.close();
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`
        bg-[#18181b] rounded-xl border border-zinc-700 shadow-2xl flex flex-col overflow-hidden transition-all duration-300
        ${isFullscreen ? 'fixed inset-0 z-50 rounded-none border-0' : 'w-full h-full relative'}
      `}
    >
      {/* Toolbar */}
      <div className="h-10 bg-zinc-900 border-b border-zinc-700 flex items-center justify-between px-3 shrink-0">
        
        {/* Window Controls (Cosmetic) */}
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
        </div>

        {/* Device Toggles */}
        <div className="flex items-center bg-zinc-800 rounded-lg p-0.5">
          <button 
            onClick={() => handleDeviceChange('mobile')}
            className={`p-1.5 rounded-md transition-all ${deviceMode === 'mobile' ? 'bg-zinc-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            title="Mobile (375px)"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => handleDeviceChange('tablet')}
            className={`p-1.5 rounded-md transition-all ${deviceMode === 'tablet' ? 'bg-zinc-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            title="Tablet (768px)"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => handleDeviceChange('desktop')}
            className={`p-1.5 rounded-md transition-all ${deviceMode === 'desktop' ? 'bg-zinc-600 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
            title="Desktop (Full)"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={handleOpenNewTab}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            title="Open in new tab"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            title={isFullscreen ? "Exit Fullscreen (Esc)" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Iframe Container (Handles Centering for Mobile/Tablet) */}
      <div className="flex-grow bg-checkers bg-zinc-900/50 flex justify-center overflow-hidden relative">
        <iframe
          srcDoc={htmlContent}
          style={{ width: width, transition: 'width 0.3s ease' }}
          className="h-full bg-white shadow-2xl"
          sandbox="allow-scripts"
          title="Artifact Preview"
        />
      </div>
    </div>
  );
};