
import React from 'react';
import { useHistoryStore } from '../store/useHistoryStore';
import { useGenerationStore } from '../store/useGenerationStore';
import { Clock, Trash2, ArrowRight } from 'lucide-react';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ 
  isOpen, 
  onClose
}) => {
  const { items: history, clear: clearHistory } = useHistoryStore();
  const { restoreSession } = useGenerationStore();

  const handleRestore = (item: any) => {
    restoreSession(item);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-kaolin-900/20 backdrop-blur-sm z-50 transition-opacity" 
          onClick={onClose}
        />
      )}
      
      {/* Drawer (Floating Clay Panel) */}
      <div 
        className={`fixed top-4 right-4 bottom-4 w-80 bg-kaolin-50 rounded-3xl shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col border border-white/50
          ${isOpen ? 'translate-x-0' : 'translate-x-[120%]'}
        `}
      >
        <div className="p-6 border-b border-kaolin-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-kaolin-900 font-extrabold">
            <Clock className="w-5 h-5 text-resin-500" />
            <span>Kiln History</span>
          </div>
          <button 
            onClick={onClose}
            className="text-kaolin-400 hover:text-kaolin-800 transition-colors font-medium text-sm"
          >
            Close
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {history.length === 0 ? (
            <div className="text-center text-kaolin-400 mt-10">
              <p className="font-medium">No artifacts found.</p>
              <p className="text-xs mt-2 text-kaolin-300">Start the kiln!</p>
            </div>
          ) : (
            history.map((item) => (
              <div 
                key={item.id}
                onClick={() => handleRestore(item)}
                className="group p-4 rounded-2xl bg-white border border-kaolin-100 shadow-sm hover:shadow-clay-float hover:border-resin-200 hover:-translate-y-1 cursor-pointer transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-kaolin-800 text-sm group-hover:text-resin-600 transition-colors">{item.style.label}</span>
                  <span className="text-[10px] text-kaolin-400 font-mono">
                    {new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
                <p className="text-xs text-kaolin-500 line-clamp-2 mb-3 leading-relaxed">{item.context}</p>
                <div className="flex items-center text-resin-500 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Restore Artifact <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </div>
            ))
          )}
        </div>

        {history.length > 0 && (
          <div className="p-4 border-t border-kaolin-200">
            <button 
              onClick={() => clearHistory()}
              className="w-full py-3 flex items-center justify-center gap-2 text-xs font-bold text-kiln-500 hover:text-white hover:bg-kiln-500 rounded-xl transition-all shadow-sm hover:shadow-md"
            >
              <Trash2 className="w-3 h-3" />
              Clear History
            </button>
          </div>
        )}
      </div>
    </>
  );
};
