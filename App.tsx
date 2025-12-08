import React, { useState, useRef, useEffect, useMemo } from 'react';
import JSZip from 'jszip';
import { DESIGN_PRESETS } from './lib/design-presets';
import { DesignPreset, GeneratedResult, HistoryItem } from './types';
import { generateDesignSystem } from './services/geminiService';
import { ConfigForm } from './components/ConfigForm';
import { MarkdownViewer } from './components/MarkdownViewer';
import { PreviewFrame } from './components/PreviewFrame';
import { HistoryDrawer } from './components/HistoryDrawer';
import { GenerationLoader } from './components/GenerationLoader';
import { Layers, Terminal, Palette, Zap, Search, History as HistoryIcon, Download } from 'lucide-react';

export default function App() {
  // State
  const [selectedStyle, setSelectedStyle] = useState<DesignPreset | null>(null);
  const [context, setContext] = useState('');
  const [fonts, setFonts] = useState('Default system fonts');
  const [isGenerating, setIsGenerating] = useState(false);
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

  const handleGenerate = async () => {
    if (!selectedStyle) return;
    
    setIsGenerating(true);
    setResult(null);
    
    try {
      const data = await generateDesignSystem(selectedStyle.label, context, fonts);
      setResult(data);
      
      // Add to history
      saveToHistory({
        id: Date.now().toString(),
        timestamp: Date.now(),
        style: selectedStyle,
        context,
        result: data
      });

      // Wait a tick for render then scroll
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (error) {
      console.error(error);
      alert('Failed to generate design system. Check console for details.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownloadPackage = async () => {
    if (!result || !selectedStyle) return;
    
    const zip = new JSZip();
    zip.file("design-specs.md", result.markdown);
    zip.file("index.html", result.html);
    
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
      
      {/* Loaders & Drawers */}
      <GenerationLoader isVisible={isGenerating} />
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
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Layers className="text-white w-5 h-5" />
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
              v2.0 • Gemini 3 Pro
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col">
        {/* Hero */}
        <div className="py-12 px-6 text-center border-b border-zinc-800 bg-[#0c0c0e]">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
            Define. Generate. Visualize.
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Select a style, define your app's purpose, and let AI architect a complete design system and a functional HTML prototype in seconds.
          </p>
        </div>

        {/* Controls Section (Search + Filter) */}
        <div className="max-w-7xl mx-auto px-6 py-8 w-full">
           
           <div className="flex flex-col md:flex-row gap-6 mb-8 justify-between items-center">
             {/* Category Pills */}
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

             {/* Search Bar */}
             <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                <input 
                  type="text"
                  placeholder="Search styles (e.g. 'neon', 'clean')..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
             </div>
           </div>

           {/* Grid */}
           {filteredPresets.length === 0 ? (
             <div className="text-center py-20 text-zinc-600">
               <p>No styles found matching "{searchQuery}"</p>
               <button onClick={() => { setSearchQuery(''); setActiveCategory('All'); }} className="text-blue-500 hover:underline mt-2">Reset Filters</button>
             </div>
           ) : (
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
           )}
        </div>

        {/* Results Section */}
        {result && (
          <div ref={resultsRef} className="w-full bg-[#050505] border-t border-zinc-800 min-h-screen">
             <div className="max-w-[1600px] mx-auto p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-green-400">
                      <Zap className="w-5 h-5 fill-current" />
                      <span className="font-bold">Generation Complete</span>
                    </div>
                    <div className="h-px w-12 bg-zinc-800"></div>
                  </div>
                  
                  <button 
                    onClick={handleDownloadPackage}
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Package (.zip)
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[800px]">
                  {/* Left: Spec */}
                  <div className="flex flex-col h-full min-h-[500px]">
                    <div className="flex items-center gap-2 mb-3 text-zinc-400 text-sm font-medium">
                      <Terminal className="w-4 h-4" />
                      <span>design-spec.md</span>
                    </div>
                    <MarkdownViewer 
                      content={result.markdown} 
                      onContentChange={(newMd) => setResult(prev => prev ? {...prev, markdown: newMd} : null)}
                    />
                  </div>

                  {/* Right: Preview */}
                  <div className="flex flex-col h-full min-h-[500px]">
                    <div className="flex items-center gap-2 mb-3 text-zinc-400 text-sm font-medium">
                      <Palette className="w-4 h-4" />
                      <span>Live Artifact</span>
                    </div>
                    <PreviewFrame htmlContent={result.html} />
                  </div>
                </div>
             </div>
          </div>
        )}

        <div className="h-24"></div> {/* Spacer for fixed footer */}
      </main>

      <ConfigForm 
        selectedStyle={selectedStyle}
        context={context}
        setContext={setContext}
        fonts={fonts}
        setFonts={setFonts}
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
      />
    </div>
  );
}