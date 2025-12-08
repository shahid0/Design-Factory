
import React, { useState, useRef, useEffect, useMemo } from 'react';
import JSZip from 'jszip';
import { DESIGN_PRESETS } from './lib/design-presets';
import { DesignPreset, GeneratedResult, HistoryItem, GenerationPhase } from './types';
import { generateDesignSpec, generateArtifact, refineDesignSpec } from './services/geminiService';
import { ConfigForm } from './components/ConfigForm';
import { CodeDirector } from './components/CodeDirector';
import { PreviewFrame } from './components/PreviewFrame';
import { HistoryDrawer } from './components/HistoryDrawer';
import { GenerationLoader } from './components/GenerationLoader';
import { Palette, Zap, Search, History as HistoryIcon, Download, Layers, BookOpen, Play, ChevronRight } from 'lucide-react';

export default function App() {
  // State
  const [selectedStyle, setSelectedStyle] = useState<DesignPreset | null>(null);
  const [context, setContext] = useState('');
  const [fonts, setFonts] = useState('Default system fonts');
  
  const [phase, setPhase] = useState<GenerationPhase>('idle');
  
  const [result, setResult] = useState<GeneratedResult | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // History State
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  const resultsRef = useRef<HTMLDivElement>(null);

  // Load History on Mount
  useEffect(() => {
    const saved = localStorage.getItem('dsf_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history", e);
      }
    }
  }, []);

  // Save History Helper
  const saveToHistory = (newItem: HistoryItem) => {
    const updated = [newItem, ...history].slice(0, 10); // Keep last 10
    setHistory(updated);
    localStorage.setItem('dsf_history', JSON.stringify(updated));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('dsf_history');
  };

  // Step 1: Generate Spec
  const handleGenerateSpec = async () => {
    if (!selectedStyle) return;
    
    setPhase('spec');
    setResult(null);
    
    try {
      const data = await generateDesignSpec(selectedStyle.label, context, fonts);
      setResult({ markdown: data.markdown, html: null });
      
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error(error);
      alert('Failed to generate design spec.');
    } finally {
      setPhase('idle');
    }
  };

  // Step 2: Generate Artifact
  const handleGenerateArtifact = async () => {
    if (!result?.markdown) return;
    
    setPhase('artifact');
    
    try {
      const data = await generateArtifact(result.markdown);
      const newResult = { ...result, html: data.html };
      setResult(newResult);
      
      // Save full result to history
      if (selectedStyle) {
        saveToHistory({
          id: Date.now().toString(),
          timestamp: Date.now(),
          style: selectedStyle,
          context,
          result: newResult
        });
      }
    } catch (error) {
      console.error(error);
      alert('Failed to generate artifact.');
    } finally {
      setPhase('idle');
    }
  };

  const handleRefine = async (instruction: string) => {
    if (!result) return;
    setPhase('refining');
    try {
      const refinedData = await refineDesignSpec(result.markdown, instruction);
      // Invalidate HTML because spec changed
      setResult({ markdown: refinedData.markdown, html: null });
    } catch (error) {
      console.error(error);
      alert('Failed to refine design.');
    } finally {
      setPhase('idle');
    }
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

  const handleRestore = (item: HistoryItem) => {
    setSelectedStyle(item.style);
    setContext(item.context);
    setResult(item.result);
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Filter Logic
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col font-sans selection:bg-blue-500/30">
      
      <GenerationLoader phase={phase} />
      <HistoryDrawer 
        isOpen={isHistoryOpen} 
        onClose={() => setIsHistoryOpen(false)} 
        history={history}
        onSelect={handleRestore}
        onClear={clearHistory}
      />

      {/* Header */}
      <header className="border-b border-zinc-800 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 relative flex items-center justify-center group">
              <div className="absolute inset-0 bg-blue-600/30 rounded-lg blur-sm group-hover:bg-blue-600/50 transition-colors"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 border border-zinc-700/50 rounded-lg flex items-center justify-center overflow-hidden">
                <Layers className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <span className="font-bold text-lg tracking-tight">Design Spec Factory</span>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsHistoryOpen(true)}
              className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              <HistoryIcon className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </button>
            <div className="text-xs text-zinc-600 font-mono hidden sm:block border-l border-zinc-800 pl-4">
              v4.1 • Dual-Engine
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero */}
        <div className="py-12 px-6 text-center border-b border-zinc-800 bg-[#0c0c0e]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
            Define. Generate. Realize.
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Create an exhaustive <b>Master Design Specification</b> first. <br/>
            Then, compile it into a high-fidelity HTML artifact.
          </p>
        </div>

        {/* Controls Section */}
        <div className="max-w-7xl mx-auto px-6 py-8 w-full">
           <div className="flex flex-col md:flex-row gap-6 mb-8 justify-between items-center">
             <div className="flex flex-wrap gap-2 justify-center">
               {categories.map(cat => (
                 <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat 
                      ? 'bg-white text-black shadow-lg scale-105' 
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
             <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Search styles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
             </div>
           </div>

           {/* Grid */}
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {filteredPresets.map((preset) => (
               <button
                key={preset.id}
                onClick={() => setSelectedStyle(preset)}
                className={`group relative p-6 rounded-xl border text-left transition-all duration-300 hover:shadow-2xl
                  ${selectedStyle?.id === preset.id 
                    ? 'bg-zinc-900/50 border-blue-500 ring-1 ring-blue-500/50 shadow-blue-900/20' 
                    : 'bg-[#121214] border-zinc-800 hover:border-zinc-600 hover:-translate-y-1'
                  }
                `}
               >
                 <div className="flex justify-between items-start mb-3">
                   <h3 className="font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">{preset.label}</h3>
                   {selectedStyle?.id === preset.id && <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>}
                 </div>
                 <p className="text-xs text-zinc-400 leading-relaxed mb-4 min-h-[40px]">{preset.description}</p>
                 <div className="flex flex-wrap gap-2">
                   {preset.tags.slice(0, 3).map(tag => (
                     <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-500">
                       {tag}
                     </span>
                   ))}
                 </div>
               </button>
             ))}
           </div>
        </div>

        {/* Results Section */}
        {result && (
          <div ref={resultsRef} className="w-full bg-[#050505] border-t border-zinc-800 min-h-screen">
             <div className="max-w-[1600px] mx-auto p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Zap className="w-5 h-5 fill-current" />
                      <span className="font-bold">Session Active</span>
                    </div>
                    <div className="h-px w-12 bg-zinc-800"></div>
                  </div>
                  
                  <button 
                    onClick={handleDownloadPackage}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Package
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[850px]">
                  {/* Left: Spec Director */}
                  <div className="flex flex-col h-full min-h-[500px]">
                    <div className="flex items-center gap-2 mb-3 text-zinc-400 text-sm font-medium">
                      <BookOpen className="w-4 h-4" />
                      <span>Master Specification</span>
                    </div>
                    <CodeDirector 
                      result={result} 
                      onRefine={handleRefine}
                      isRefining={phase === 'refining'}
                    />
                  </div>

                  {/* Right: Preview or Placeholder */}
                  <div className="flex flex-col h-full min-h-[500px]">
                    <div className="flex items-center gap-2 mb-3 text-zinc-400 text-sm font-medium">
                      <Palette className="w-4 h-4" />
                      <span>Visual Artifact</span>
                    </div>
                    
                    {result.html ? (
                       <PreviewFrame htmlContent={result.html} />
                    ) : (
                      <div className="flex-grow rounded-xl border border-zinc-800 border-dashed bg-[#121214]/50 flex flex-col items-center justify-center p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                          <Play className="w-8 h-8 text-zinc-500 ml-1" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Ready to Visualize</h3>
                        <p className="text-zinc-400 max-w-sm mb-8">
                          The Master Specification is ready. Generate the high-fidelity HTML artifact to see it in action.
                        </p>
                        <button
                          onClick={handleGenerateArtifact}
                          className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all flex items-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20"
                        >
                          Generate Visual Preview
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
             </div>
          </div>
        )}

        <div className="h-24"></div> 
      </main>

      <ConfigForm 
        selectedStyle={selectedStyle}
        context={context}
        setContext={setContext}
        fonts={fonts}
        setFonts={setFonts}
        onGenerate={handleGenerateSpec}
        isGenerating={phase !== 'idle'}
      />
    </div>
  );
}
