
import React, { useState, useEffect, useMemo } from 'react';
import JSZip from 'jszip';
import { DESIGN_PRESETS } from './lib/design-presets';
import { getStyleCartridge } from './lib/styles/registry';
import { StyleCartridge } from './lib/styles/types';
import { DesignPreset } from './types';

// Stores
import { useGenerationStore } from './store/useGenerationStore';
import { useHistoryStore } from './store/useHistoryStore';

// Components
import { ConfigForm } from './components/ConfigForm';
import { CodeDirector } from './components/CodeDirector';
import { PreviewFrame } from './components/PreviewFrame';
import { HistoryDrawer } from './components/HistoryDrawer';
import { GenerationLoader } from './components/GenerationLoader';
import { StyleInspectorModal } from './components/StyleInspectorModal';
import { Zap, Search, Download, BookOpen, Play, Grid, ArrowLeft, LayoutTemplate, Menu, Eye } from 'lucide-react';

export default function App() {
  // --- STORE CONSUMPTION ---
  const { 
    selectedStyle, 
    setSelectedStyle, 
    phase, 
    result, 
    viewMode, 
    setViewMode, 
    generateArtifact 
  } = useGenerationStore();

  const { fetchHistory } = useHistoryStore();

  // --- LOCAL UI STATE ---
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Inspector
  const [inspectorOpen, setInspectorOpen] = useState(false);
  const [inspectedCartridge, setInspectedCartridge] = useState<StyleCartridge | null>(null);

  // Initialize History on Mount
  useEffect(() => {
    fetchHistory();
  }, []);

  // --- ACTIONS ---

  const handleInspect = (preset: DesignPreset, e: React.MouseEvent) => {
    e.stopPropagation(); 
    const cartridge = getStyleCartridge(preset.id);
    setInspectedCartridge(cartridge);
    setInspectorOpen(true);
  };

  const handleDownloadPackage = async () => {
    if (!result || !selectedStyle) return;
    
    const zip = new JSZip();
    zip.file("design-specs.md", result.markdown);
    if (result.html) {
      zip.file("index.html", result.html);
    }
    
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedStyle.id}-design-system.zip`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // --- FILTER LOGIC ---
  const categories = ['All', 'Modern/Tech', 'Retro', 'Minimal', 'Experimental'];
  
  const filteredPresets = useMemo(() => {
    return DESIGN_PRESETS.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        p.label.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower) ||
        p.tags.some(t => t.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="flex h-screen bg-kaolin-50 text-kaolin-800 font-sans selection:bg-resin-200 overflow-hidden relative">
      
      <GenerationLoader phase={phase} />
      
      <HistoryDrawer 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
      />

      {/* Inspector Modal (Visualizer Only) */}
      {inspectedCartridge && (
        <StyleInspectorModal 
          isOpen={inspectorOpen}
          onClose={() => setInspectorOpen(false)}
          cartridge={inspectedCartridge}
          onSelect={() => {
            setSelectedStyle(inspectedCartridge.meta);
            if (window.innerWidth < 1024) setIsMobileMenuOpen(true);
          }}
        />
      )}

      {/* LEFT: THE OPERATOR CONSOLE */}
      <ConfigForm 
        onOpenHistory={() => setIsHistoryOpen(true)}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* RIGHT: THE FACTORY FLOOR */}
      <main className="flex-1 flex flex-col min-w-0 bg-kaolin-50 relative overflow-hidden transition-all duration-300">
        
        {/* Top Navigation Bar */}
        <div className="h-16 px-4 md:px-8 flex items-center justify-between border-b border-kaolin-200 bg-white/80 backdrop-blur-md z-20 shrink-0 sticky top-0">
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-kaolin-600 hover:bg-kaolin-200 rounded-lg"
             >
               <Menu className="w-6 h-6" />
             </button>

             {viewMode === 'inspect' ? (
               <button 
                 onClick={() => setViewMode('browse')}
                 className="flex items-center gap-2 text-xs font-bold text-kaolin-500 hover:text-resin-600 px-3 py-1.5 rounded-lg hover:bg-kaolin-100 transition-colors group"
               >
                 <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                 <span className="hidden sm:inline">WAREHOUSE</span>
               </button>
             ) : (
                <div className="w-4 h-4" />
             )}
             
             <div className="h-6 w-px bg-kaolin-200 mx-2"></div>

             <h1 className="text-lg md:text-xl font-extrabold text-kaolin-900 tracking-tight truncate max-w-[200px] md:max-w-none flex items-center gap-2">
               {viewMode === 'browse' ? (
                 <>
                   <Grid className="w-5 h-5 text-kaolin-400" />
                   <span>Material Warehouse</span>
                 </>
               ) : (
                 <>
                   <Zap className="w-5 h-5 text-resin-500" />
                   <span>Fabrication Chamber</span>
                 </>
               )}
             </h1>
          </div>

          <div className="flex items-center gap-3">
             {viewMode === 'inspect' && result && (
                <button 
                  onClick={handleDownloadPackage}
                  className="flex items-center gap-2 px-3 py-2 bg-kaolin-100 hover:bg-white text-kaolin-700 hover:text-resin-600 rounded-xl text-xs font-bold shadow-sm hover:shadow-clay-float transition-all border border-transparent hover:border-kaolin-200"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">EXPORT</span>
                </button>
             )}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 scroll-smooth relative">
          
          {/* VIEW: BROWSE (Grid) */}
          <div className={`transition-all duration-500 ease-out absolute inset-0 p-4 md:p-8 overflow-y-auto custom-scrollbar ${viewMode === 'browse' ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0 pointer-events-none'}`}>
             
             {/* Filters Toolbar */}
             <div className="flex flex-col gap-4 mb-8 sticky top-0 bg-kaolin-50/95 backdrop-blur-sm p-4 -mx-4 md:mx-0 md:rounded-2xl shadow-sm z-20 border-b md:border border-kaolin-100 transition-all">
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                        activeCategory === cat 
                          ? 'bg-resin-500 text-white shadow-clay-convex' 
                          : 'bg-kaolin-100 text-kaolin-500 hover:text-kaolin-800 hover:bg-kaolin-200'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div className="w-full relative group">
                   <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-kaolin-400 group-focus-within:text-resin-500 transition-colors" />
                   <input 
                      type="text"
                      placeholder="Search textures..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-10 bg-white rounded-xl pl-9 pr-4 text-sm border border-kaolin-200 focus:border-resin-300 focus:ring-2 focus:ring-resin-100 focus:outline-none transition-all shadow-clay-pressed"
                   />
                </div>
             </div>

             {/* The Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6 pb-20">
               {filteredPresets.map((preset) => (
                 <div
                  key={preset.id}
                  onClick={() => {
                    setSelectedStyle(preset);
                    if (window.innerWidth < 1024) setIsMobileMenuOpen(true);
                  }}
                  className={`group relative p-6 rounded-3xl text-left transition-all duration-300 flex flex-col h-64 cursor-pointer
                    ${selectedStyle?.id === preset.id 
                      ? 'bg-white ring-4 ring-resin-200 shadow-clay-convex scale-[1.02] z-10' 
                      : 'bg-white shadow-clay-float hover:-translate-y-2 hover:shadow-xl border border-kaolin-100'
                    }
                  `}
                 >
                   <div className="flex justify-between items-start mb-4">
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${selectedStyle?.id === preset.id ? 'bg-resin-100 text-resin-600' : 'bg-kaolin-100 text-kaolin-400 group-hover:bg-resin-50 group-hover:text-resin-500'}`}>
                        {selectedStyle?.id === preset.id ? <Zap className="w-5 h-5 fill-current" /> : <Grid className="w-5 h-5" />}
                     </div>
                     
                     {/* INSPECT BUTTON */}
                     <button 
                        onClick={(e) => handleInspect(preset, e)}
                        className="p-2 rounded-full bg-kaolin-100 text-kaolin-400 hover:bg-resin-500 hover:text-white transition-all transform hover:scale-110 shadow-sm z-20"
                        title="Inspect Style"
                     >
                       <Eye className="w-4 h-4" />
                     </button>
                   </div>
                   
                   <h3 className="font-bold text-lg text-kaolin-800 mb-2 group-hover:text-resin-600 transition-colors">{preset.label}</h3>
                   <p className="text-xs text-kaolin-500 font-medium leading-relaxed mb-auto line-clamp-3">
                     {preset.description}
                   </p>
                   
                   <div className="flex flex-wrap gap-2 pt-4 mt-2 border-t border-kaolin-100">
                      {preset.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase text-kaolin-400 bg-kaolin-50 px-2 py-1 rounded-md border border-kaolin-100">
                          {tag}
                        </span>
                      ))}
                   </div>
                 </div>
               ))}
             </div>
          </div>

          {/* VIEW: INSPECT (Result) */}
          <div className={`absolute inset-0 p-4 md:p-8 overflow-y-auto xl:overflow-hidden flex flex-col transition-all duration-500 ${viewMode === 'inspect' ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-10 z-0 pointer-events-none'}`}>
            {result ? (
               <div className="flex-1 grid grid-cols-1 xl:grid-cols-2 gap-8 xl:h-full pb-20 xl:pb-0 shrink-0">
                  
                  {/* Spec Column */}
                  <div className="flex flex-col h-[500px] xl:h-full bg-white rounded-3xl shadow-clay-panel overflow-hidden border border-kaolin-100 transition-all duration-500 shrink-0">
                    <div className="p-3 bg-kaolin-50 border-b border-kaolin-100 flex items-center gap-2 text-kaolin-500 text-xs font-bold uppercase tracking-wider">
                       <BookOpen className="w-4 h-4" /> Specification
                    </div>
                    <div className="flex-1 overflow-hidden relative">
                       <CodeDirector />
                    </div>
                  </div>

                  {/* Artifact Column */}
                  <div className="flex flex-col h-[600px] xl:h-full bg-kaolin-200/50 rounded-3xl shadow-clay-pressed overflow-hidden p-2 border border-kaolin-200 xl:mb-0 transition-all duration-500 delay-100 shrink-0">
                     {result.html ? (
                        <PreviewFrame htmlContent={result.html} />
                     ) : (
                        <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-kaolin-50/50 rounded-2xl">
                          <div className="w-20 h-20 rounded-full bg-white shadow-clay-float flex items-center justify-center mb-6 text-resin-500 animate-pulse">
                             <LayoutTemplate className="w-10 h-10" />
                          </div>
                          <h3 className="text-xl font-bold text-kaolin-800 mb-2">Spec Ready</h3>
                          <p className="text-kaolin-500 text-sm max-w-xs mb-8">
                            The architectural blueprints are complete. Initialize the render engine to see the artifact.
                          </p>
                          <button
                            onClick={() => generateArtifact()}
                            className="px-8 py-3 bg-resin-500 text-white text-sm font-bold rounded-xl shadow-clay-btn-primary hover:-translate-y-1 active:scale-95 transition-all flex items-center gap-2"
                          >
                            <Play className="w-4 h-4 fill-current" />
                            RENDER ARTIFACT
                          </button>
                        </div>
                     )}
                  </div>
               </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-kaolin-400">
                 <p>No active project.</p>
                 <button onClick={() => setViewMode('browse')} className="text-resin-500 hover:underline mt-2">Browse Materials</button>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
