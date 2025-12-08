
import React from 'react';
import { DesignPreset } from '../types';
import { Sparkles, FileText, Layers, History as HistoryIcon, Play, AlertCircle, X } from 'lucide-react';
import { FontPicker } from './FontPicker';

interface ConfigFormProps {
  selectedStyle: DesignPreset | null;
  context: string;
  setContext: (val: string) => void;
  fonts: string;
  setFonts: (val: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
  onOpenHistory: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const ConfigForm: React.FC<ConfigFormProps> = ({
  selectedStyle,
  context,
  setContext,
  fonts,
  setFonts,
  onGenerate,
  isGenerating,
  onOpenHistory,
  isOpenMobile,
  onCloseMobile,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-kaolin-900/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar / Drawer */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-80 lg:relative lg:translate-x-0 lg:w-80 flex-shrink-0
          bg-kaolin-100/95 border-r border-kaolin-200 flex flex-col h-full shadow-clay-panel 
          overflow-hidden backdrop-blur-md transition-transform duration-300 ease-out
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        
        {/* 1. Branding Header */}
        <div className="p-6 border-b border-kaolin-200 bg-kaolin-50/50 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-kaolin-100 rounded-lg shadow-clay-convex text-resin-600">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight text-kaolin-900 block leading-none">MOLD & MANIFEST</span>
              </div>
            </div>
            {/* Mobile Close Button */}
            <button 
              onClick={onCloseMobile}
              className="lg:hidden p-2 text-kaolin-400 hover:text-kiln-500 rounded-lg hover:bg-kaolin-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between">
             <span className="text-[10px] uppercase font-bold text-kaolin-400 tracking-widest pl-11">v4.1 Factory</span>
             <button 
               onClick={() => {
                 onOpenHistory();
                 onCloseMobile();
               }}
               className="p-1.5 text-kaolin-400 hover:text-resin-600 hover:bg-kaolin-200 rounded-md transition-colors"
               title="Open History"
             >
               <HistoryIcon className="w-4 h-4" />
             </button>
          </div>
        </div>

        {/* 2. Scrollable Inputs Area */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Selected Style Indicator */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-kaolin-500 uppercase tracking-widest flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-resin-500" />
              Raw Material
            </label>
            <div className={`p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group
              ${selectedStyle 
                ? 'bg-kaolin-50 border-resin-200 shadow-clay-float' 
                : 'bg-kaolin-200/50 border-dashed border-kaolin-300'
              }
            `}>
              {selectedStyle ? (
                <>
                  <div className="font-bold text-kaolin-900 text-sm mb-1">{selectedStyle.label}</div>
                  <div className="text-xs text-kaolin-500 leading-snug">{selectedStyle.description}</div>
                  <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <div className="w-2 h-2 rounded-full bg-resin-500 shadow-[0_0_8px_rgba(79,122,246,0.6)]"></div>
                  </div>
                </>
              ) : (
                <div className="text-xs text-kaolin-400 text-center py-2 flex flex-col items-center gap-2">
                  <AlertCircle className="w-4 h-4 opacity-50" />
                  <span>Select a preset from the grid to begin.</span>
                </div>
              )}
            </div>
          </div>

          {/* Context Input */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-kaolin-500 uppercase tracking-widest flex items-center gap-1.5">
              <FileText className="w-3 h-3" />
              Product Context
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g. A meditation app for sleep, or a brutalist crypto exchange..."
              className="w-full h-32 p-4 rounded-2xl bg-kaolin-200 text-sm text-kaolin-800 placeholder-kaolin-400 font-medium focus:outline-none shadow-clay-pressed focus:ring-2 focus:ring-resin-200 resize-none transition-shadow"
            />
          </div>

          {/* Fonts Picker */}
          <FontPicker selectedFont={fonts} onChange={setFonts} />

        </div>

        {/* 3. Action Footer */}
        <div className="p-6 pt-0 bg-gradient-to-t from-kaolin-100 to-transparent">
          <button
            onClick={() => {
              onGenerate();
              if (window.innerWidth < 1024) onCloseMobile();
            }}
            disabled={!selectedStyle || isGenerating || !context}
            className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-clay-btn-primary
              ${!selectedStyle || !context 
                ? 'bg-kaolin-300 text-kaolin-500 cursor-not-allowed shadow-none opacity-50' 
                : 'bg-resin-500 text-white hover:bg-resin-400 hover:-translate-y-1 active:translate-y-0 active:shadow-clay-btn-pressed'
              }
            `}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>PROCESSING...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                IGNITE KILN
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
