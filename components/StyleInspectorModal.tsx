
import React from 'react';
import { X, Check } from 'lucide-react';
import { StyleCartridge } from '../lib/styles/types';
import { StyleMannequin } from './StyleMannequin';

interface StyleInspectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartridge: StyleCartridge;
  onSelect: () => void;
}

export const StyleInspectorModal: React.FC<StyleInspectorModalProps> = ({
  isOpen,
  onClose,
  cartridge,
  onSelect
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-6">
      {/* Dark Backdrop */}
      <div 
        className="absolute inset-0 bg-kaolin-900/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Modal Window (Full Viewport) */}
      <div className="relative w-full h-full md:rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300 bg-black border border-white/10">
        
        {/* Style Info & Controls Overlay (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 pt-32 bg-gradient-to-t from-black via-black/90 to-transparent z-50 pointer-events-none flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            
            {/* Info Block */}
            <div className="flex flex-col items-start justify-end pointer-events-auto max-w-2xl">
                <div className="flex items-center gap-3 mb-3 animate-in slide-in-from-bottom-4 duration-500">
                  <div className="h-px w-12 bg-white/50"></div>
                  <span className="text-xs font-mono text-white/70 uppercase tracking-widest">System Preview Mode</span>
                </div>
                <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter drop-shadow-2xl mb-4 animate-in slide-in-from-bottom-6 duration-700 delay-100 leading-[0.9]">
                  {cartridge.meta.label}
                </h1>
                <div className="flex flex-wrap gap-2 animate-in slide-in-from-bottom-8 duration-700 delay-200">
                   {cartridge.meta.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                       {tag}
                     </span>
                   ))}
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 pointer-events-auto animate-in slide-in-from-bottom-8 duration-700 delay-300 w-full md:w-auto">
               <button 
                  onClick={onClose}
                  className="p-3.5 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all border border-white/10 group"
                  title="Close Preview"
               >
                  <X className="w-5 h-5 opacity-70 group-hover:opacity-100" />
               </button>
               <button 
                  onClick={() => {
                    onSelect();
                    onClose();
                  }}
                  className="flex-1 md:flex-none px-8 py-3.5 bg-resin-500 hover:bg-resin-400 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-resin-500/50 hover:scale-105 transition-all flex items-center justify-center gap-2"
               >
                  <Check className="w-4 h-4" />
                  USE THIS STYLE
               </button>
            </div>
        </div>

        {/* THE VISUALIZER (Full Canvas) */}
        <div className="w-full h-full">
           <StyleMannequin config={cartridge.previewConfig} />
        </div>

      </div>
    </div>
  );
};
