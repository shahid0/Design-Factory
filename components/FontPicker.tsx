
import React, { useState, useEffect, useRef } from 'react';
import { Type, Check, Search, ChevronDown, Loader2 } from 'lucide-react';
import { fetchGoogleFonts, GoogleFont } from '../services/fontService';

interface FontPickerProps {
  selectedFont: string;
  onChange: (font: string) => void;
}

export const FontPicker: React.FC<FontPickerProps> = ({ selectedFont, onChange }) => {
  const [fonts, setFonts] = useState<GoogleFont[]>([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadFonts = async () => {
      const data = await fetchGoogleFonts();
      setFonts(data);
      setLoading(false);
    };
    loadFonts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredFonts = fonts.filter(f => 
    f.family.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="text-[10px] font-bold text-kaolin-500 uppercase tracking-widest flex items-center gap-1.5">
        <Type className="w-3 h-3" />
        Typography Pref
      </label>
      
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-4 rounded-xl bg-kaolin-200 flex items-center justify-between cursor-pointer shadow-clay-pressed hover:ring-2 hover:ring-resin-200 transition-all"
      >
        <span className={`text-sm font-medium ${selectedFont ? 'text-kaolin-800' : 'text-kaolin-400'}`}>
          {selectedFont || 'Select a font...'}
        </span>
        <ChevronDown className={`w-4 h-4 text-kaolin-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-kaolin-200 z-50 overflow-hidden max-h-64 flex flex-col">
          <div className="p-2 border-b border-kaolin-100 bg-kaolin-50 sticky top-0">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-kaolin-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Google Fonts..."
                className="w-full bg-white border border-kaolin-200 rounded-lg pl-8 pr-2 py-1.5 text-xs focus:outline-none focus:border-resin-400"
                autoFocus
              />
            </div>
          </div>
          
          <div className="overflow-y-auto flex-1 p-1 custom-scrollbar">
            {loading ? (
              <div className="flex items-center justify-center py-4">
                <Loader2 className="w-5 h-5 text-resin-500 animate-spin" />
              </div>
            ) : filteredFonts.length === 0 ? (
              <div className="p-3 text-center text-xs text-kaolin-400">No fonts found</div>
            ) : (
              filteredFonts.map((font) => (
                <button
                  key={font.family}
                  onClick={() => {
                    onChange(font.family);
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center justify-between transition-colors ${
                    selectedFont === font.family 
                      ? 'bg-resin-50 text-resin-600 font-bold' 
                      : 'text-kaolin-700 hover:bg-kaolin-100'
                  }`}
                >
                  <span style={{ fontFamily: 'sans-serif' }}>{font.family}</span>
                  {selectedFont === font.family && <Check className="w-3.5 h-3.5" />}
                </button>
              ))
            )}
          </div>
        </div>
      )}
      <div className="text-[10px] text-kaolin-400 text-right">
        Powered by Google Fonts
      </div>
    </div>
  );
};
