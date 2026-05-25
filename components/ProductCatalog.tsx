import React, { useState, useMemo } from 'react';
import { PRODUCT_TEMPLATES, ProductTemplate } from '../lib/product-templates';
import { Search, LayoutTemplate, Layers, ArrowRight } from 'lucide-react';
import { useGenerationStore } from '../store/useGenerationStore';

export const ProductCatalog: React.FC<{ onBlueprintSelected?: () => void }> = ({ onBlueprintSelected }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const { setContext, setTargetAudience, setPlatformType, setCoreFeatures, setViewMode, suggestStyleWithAI } = useGenerationStore();

  const categories = ['All', ...Array.from(new Set(PRODUCT_TEMPLATES.map(p => p.category)))];

  const filteredTemplates = useMemo(() => {
    return PRODUCT_TEMPLATES.filter(p => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = 
        p.name.toLowerCase().includes(searchLower) || 
        p.description.toLowerCase().includes(searchLower) ||
        p.components.some(c => c.toLowerCase().includes(searchLower));
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSelectTemplate = (template: ProductTemplate) => {
    setContext(`Build a ${template.name}. ${template.description}\nIncludes: ${template.components.join(', ')}`);
    setTargetAudience('General Users');
    setPlatformType(template.category);
    setCoreFeatures(template.components.join(', '));
    
    // Automatically transition to materials to let user configure options
    setViewMode('browse');
    if (onBlueprintSelected) onBlueprintSelected();
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto custom-scrollbar relative p-4 md:p-8 pb-20">
      {/* Header */}
      <div className="mb-8 shrink-0">
        <h2 className="text-2xl font-black text-kaolin-900 mb-2">Product Templates</h2>
        <p className="text-kaolin-500 text-sm">Select a blueprint strategy and we will craft it in your chosen style.</p>
      </div>

      {/* Filters Toolbar */}
      <div className="flex flex-col gap-4 mb-8 sticky top-0 bg-kaolin-50/95 backdrop-blur-sm p-4 -mx-4 md:mx-0 md:rounded-2xl shadow-sm z-20 border-b md:border border-kaolin-100 transition-all shrink-0">
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
              placeholder="Search product templates, components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 bg-white rounded-xl pl-9 pr-4 text-sm border border-kaolin-200 focus:border-resin-300 focus:ring-2 focus:ring-resin-100 focus:outline-none transition-all shadow-clay-pressed"
           />
        </div>
      </div>

      {/* Dynamic Masonry Grid */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6 space-y-6 pb-20">
        {filteredTemplates.map((template) => (
          <div 
            key={template.id}
            onClick={() => handleSelectTemplate(template)}
            className="break-inside-avoid group relative bg-white rounded-3xl border border-kaolin-100 shadow-clay-float overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
          >
            {/* Image Banner */}
            <div className="w-full relative overflow-hidden bg-kaolin-100">
               <img 
                 src={template.imageUrl} 
                 alt={template.name}
                 crossOrigin="anonymous"
                 className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wider text-kaolin-600 uppercase">
                 {template.category}
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-kaolin-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-bold flex items-center gap-2 text-sm bg-resin-500 px-4 py-2 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Use Blueprint <ArrowRight className="w-4 h-4" />
                  </span>
               </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg text-kaolin-900 mb-2 group-hover:text-resin-600 transition-colors">{template.name}</h3>
              <p className="text-xs text-kaolin-500 leading-relaxed mb-6">{template.description}</p>
              
              <div className="mt-auto pt-4 border-t border-kaolin-100">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-kaolin-400 uppercase tracking-widest mb-3">
                   <Layers className="w-3 h-3" /> Architecture
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {template.components.map((comp, idx) => (
                    <span key={idx} className="bg-kaolin-50 border border-kaolin-200 text-kaolin-600 px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wide">
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredTemplates.length === 0 && (
         <div className="py-20 text-center flex flex-col items-center">
            <LayoutTemplate className="w-12 h-12 text-kaolin-200 mb-4" />
            <h3 className="text-lg font-bold text-kaolin-700">No templates found</h3>
            <p className="text-kaolin-500 text-sm max-w-sm mt-2">Try adjusting your filters or search terms.</p>
         </div>
      )}
    </div>
  );
};
