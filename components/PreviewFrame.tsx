
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
        bg-white flex flex-col overflow-hidden transition-all duration-300 w-full h-full shadow-sm
        ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'relative rounded-2xl'}
      `}
    >
      {/* Toolbar */}
      <div className="h-10 bg-kaolin-50 border-b border-kaolin-200 flex items-center justify-between px-3 shrink-0 z-10">
        
        {/* Indicators */}
        <div className="flex gap-1.5 opacity-50 hover:opacity-100 transition-opacity">
          <div className="w-2.5 h-2.5 rounded-full bg-kiln-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-glaze-500"></div>
        </div>

        {/* Device Toggles */}
        <div className="flex items-center gap-1 bg-kaolin-200/50 p-0.5 rounded-lg">
          <button 
            onClick={() => handleDeviceChange('mobile')}
            className={`p-1 rounded transition-all ${deviceMode === 'mobile' ? 'bg-white shadow-sm text-resin-600' : 'text-kaolin-400 hover:text-kaolin-600'}`}
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => handleDeviceChange('tablet')}
            className={`p-1 rounded transition-all ${deviceMode === 'tablet' ? 'bg-white shadow-sm text-resin-600' : 'text-kaolin-400 hover:text-kaolin-600'}`}
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => handleDeviceChange('desktop')}
            className={`p-1 rounded transition-all ${deviceMode === 'desktop' ? 'bg-white shadow-sm text-resin-600' : 'text-kaolin-400 hover:text-kaolin-600'}`}
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1">
          <button 
            onClick={handleOpenNewTab}
            className="p-1.5 text-kaolin-400 hover:text-resin-600 hover:bg-kaolin-100 rounded-lg transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-kaolin-400 hover:text-resin-600 hover:bg-kaolin-100 rounded-lg transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Iframe Canvas */}
      <div className="flex-grow bg-[#FDFDFE] flex justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        <iframe
          srcDoc={htmlContent}
          style={{ width: width, transition: 'width 0.4s cubic-bezier(0.25, 1, 0.5, 1)' }}
          className="h-full bg-white shadow-2xl border-x border-kaolin-200"
          sandbox="allow-scripts"
          title="Artifact Preview"
        />
      </div>
    </div>
  );
};
