import React from 'react';
import { DesignPreset } from '../types';

interface ConfigFormProps {
  selectedStyle: DesignPreset | null;
  context: string;
  setContext: (val: string) => void;
  fonts: string;
  setFonts: (val: string) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

export const ConfigForm: React.FC<ConfigFormProps> = ({
  selectedStyle,
  context,
  setContext,
  fonts,
  setFonts,
  onGenerate,
  isGenerating,
}) => {
  return (
    <div className="sticky bottom-0 z-40 bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-end">
        
        <div className="flex-1 w-full space-y-2">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Selected Style</label>
          <div className="h-12 px-4 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center text-zinc-300 select-none cursor-not-allowed">
            {selectedStyle ? selectedStyle.label : "Select a style from the grid above..."}
          </div>
        </div>

        <div className="flex-[2] w-full space-y-2">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">App Context</label>
          <input
            type="text"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="e.g. A crypto trading dashboard, A meditation app, A brutalist blog..."
            className="w-full h-12 px-4 rounded-lg bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <div className="flex-1 w-full space-y-2 hidden lg:block">
          <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Font Preference</label>
          <input
            type="text"
            value={fonts}
            onChange={(e) => setFonts(e.target.value)}
            placeholder="e.g. Inter, Playfair"
            className="w-full h-12 px-4 rounded-lg bg-zinc-950 border border-zinc-700 text-white placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
          />
        </div>

        <button
          onClick={onGenerate}
          disabled={!selectedStyle || isGenerating || !context}
          className={`h-12 px-8 rounded-lg font-bold text-white transition-all flex items-center justify-center min-w-[200px]
            ${!selectedStyle || !context 
              ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95'
            }
          `}
        >
          {isGenerating ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Thinking...
            </span>
          ) : (
            "Generate Spec & Preview"
          )}
        </button>
      </div>
    </div>
  );
};
