
import React, { useState } from 'react';
import { useGenerationStore } from '../store/useGenerationStore';
import { Sparkles, FileText, DraftingCompass, History as HistoryIcon, Play, AlertCircle, X, Layers, Box } from 'lucide-react';
import { FontPicker } from './FontPicker';

interface ConfigFormProps {
  onOpenHistory: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const ConfigForm: React.FC<ConfigFormProps> = ({
  onOpenHistory,
  isOpenMobile,
  onCloseMobile,
}) => {
  const [mode, setMode] = useState<'tailored' | 'standard'>('tailored');
  
  // Connect to Store
  const { 
    selectedStyle, 
    context, 
    setContext, 
    font, 
    setFont, 
    generateSpec, 
    phase 
  } = useGenerationStore();

  const isGenerating = phase !== 'idle';

  const handleGenerate = () => {
    generateSpec(mode);
    if (window.innerWidth < 1024) onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-kaolin-900/40 backdrop-blur-sm z-30 lg:hidden transition-opacity"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar / Drawer */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-80 lg:relative lg:translate-x-0 lg:w-80 flex-shrink-0
          bg-white/80 border-r border-kaolin-200 flex flex-col h-full shadow-2xl lg:shadow-none 
          overflow-hidden backdrop-blur-xl transition-transform duration-300 ease-out
          ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        
        {/* 1. Branding Header */}
        <div className="p-6 border-b border-kaolin-100 flex flex-col gap-4 bg-white/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group select-none cursor-default">
              <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-white to-kaolin-50 rounded-xl shadow-clay-convex text-resin-600 border border-white transition-all duration-300 group-hover:shadow-clay-btn-primary group-hover:scale-105">
                <DraftingCompass className="w-5 h-5 transition-transform duration-700 group-hover:rotate-180" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tighter text-kaolin-900 leading-none">
                  SPEC<span className="text-resin-500">.</span>FACTORY
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-kaolin-400 mt-0.5">
                  Design System AI
                </span>
              </div>
            </div>
            <button 
              onClick={onCloseMobile}
              className="lg:hidden p-2 text-kaolin-400 hover:text-kiln-500 rounded-lg hover:bg-kaolin-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between">
             <span className="text-[10px] uppercase font-bold text-kaolin-400 tracking-widest pl-1">v5.0 Clean Arch</span>
             <button 
               onClick={() => {
                 onOpenHistory();
                 onCloseMobile();
               }}
               className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-kaolin-500 hover:text-resin-600 bg-kaolin-50 hover:bg-kaolin-100 rounded-lg transition-all"
               title="Open History"
             >
               <HistoryIcon className="w-3.5 h-3.5" />
               <span>HISTORY</span>
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
                ? 'bg-gradient-to-br from-white to-kaolin-50 border-resin-200 shadow-clay-float' 
                : 'bg-kaolin-50 border-dashed border-kaolin-300'
              }
            `}>
              {selectedStyle ? (
                <>
                  <div className="font-bold text-kaolin-900 text-sm mb-1">{selectedStyle.label}</div>
                  <div className="text-xs text-kaolin-500 leading-snug">{selectedStyle.description}</div>
                  <div className="absolute top-2 right-2">
                     <div className="w-2 h-2 rounded-full bg-resin-500 shadow-[0_0_8px_rgba(79,122,246,0.6)] animate-pulse"></div>
                  </div>
                </>
              ) : (
                <div className="text-xs text-kaolin-400 text-center py-4 flex flex-col items-center gap-2">
                  <AlertCircle className="w-5 h-5 opacity-30" />
                  <span>Select a preset from the grid</span>
                </div>
              )}
            </div>
          </div>

          {/* Mode Selection */}
          <div className="p-1 bg-kaolin-100 rounded-xl flex shadow-inner">
              <button 
                onClick={() => setMode('tailored')}
                className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mode === 'tailored' 
                    ? 'bg-white text-resin-600 shadow-sm' 
                    : 'text-kaolin-500 hover:text-kaolin-700'
                }`}
              >
                <Layers className="w-3 h-3" />
                Tailored
              </button>
              <button 
                onClick={() => setMode('standard')}
                className={`flex-1 py-2.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  mode === 'standard' 
                    ? 'bg-white text-resin-600 shadow-sm' 
                    : 'text-kaolin-500 hover:text-kaolin-700'
                }`}
              >
                <Box className="w-3 h-3" />
                Standard
              </button>
          </div>

          {/* Context Input (Tailored Only) */}
          {mode === 'tailored' ? (
            <div className="space-y-2 animate-in fade-in slide-in-from-right-4 duration-300">
              <label className="text-[10px] font-bold text-kaolin-500 uppercase tracking-widest flex items-center gap-1.5">
                <FileText className="w-3 h-3" />
                Product Context
              </label>
              <textarea
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="e.g. A meditation app for sleep, or a brutalist crypto exchange..."
                className="w-full h-32 p-4 rounded-2xl bg-kaolin-50 border border-transparent focus:border-resin-300 text-sm text-kaolin-800 placeholder-kaolin-400 font-medium focus:outline-none shadow-inner focus:ring-4 focus:ring-resin-50 resize-none transition-all"
              />
            </div>
          ) : (
            <div className="p-4 bg-kaolin-50 rounded-2xl border border-kaolin-200 text-center animate-in fade-in slide-in-from-left-4 duration-300">
              <p className="text-xs text-kaolin-500 leading-relaxed">
                Generating a universal component library (Buttons, Inputs, Cards) optimized for <strong>{selectedStyle?.label || 'this style'}</strong>.
              </p>
            </div>
          )}

          {/* Fonts Picker */}
          <FontPicker selectedFont={font} onChange={setFont} />

        </div>

        {/* 3. Action Footer */}
        <div className="p-6 bg-gradient-to-t from-white to-transparent">
          <button
            onClick={handleGenerate}
            disabled={!selectedStyle || isGenerating || (mode === 'tailored' && !context)}
            className={`w-full py-4 rounded-2xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-lg
              ${(!selectedStyle || (mode === 'tailored' && !context))
                ? 'bg-kaolin-200 text-kaolin-400 cursor-not-allowed shadow-none' 
                : 'bg-resin-500 text-white hover:bg-resin-400 hover:-translate-y-1 hover:shadow-resin-500/30 active:translate-y-0 active:scale-95'
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
                {mode === 'tailored' ? 'IGNITE KILN' : 'GENERATE LIB'}
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
};
