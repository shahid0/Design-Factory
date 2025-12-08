
import React, { useState, useEffect, useRef } from 'react';
import { Copy, Sparkles, Send, FileText } from 'lucide-react';
import { GeneratedResult, ChatMessage } from '../types';

interface CodeDirectorProps {
  result: GeneratedResult;
  onRefine: (instruction: string) => void;
  isRefining: boolean;
}

export const CodeDirector: React.FC<CodeDirectorProps> = ({ result, onRefine, isRefining }) => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCopy = () => {
    navigator.clipboard.writeText(result.markdown);
  };

  const handleSendChat = () => {
    if (!chatInput.trim() || isRefining) return;
    
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: chatInput,
      timestamp: Date.now()
    };
    
    setMessages(prev => [...prev, newMessage]);
    onRefine(chatInput);
    setChatInput('');
  };

  return (
    <div className="flex flex-col h-full bg-white w-full overflow-hidden">
      
      {/* Action Bar */}
      <div className="flex items-center justify-end px-4 py-2 bg-white border-b border-kaolin-100 z-10 shrink-0">
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold text-kaolin-500 hover:text-resin-600 bg-kaolin-50 hover:bg-kaolin-100 rounded-lg transition-colors border border-kaolin-200"
        >
          <Copy className="w-3 h-3" />
          <span>COPY SPEC</span>
        </button>
      </div>

      {/* Markdown Content */}
      <div className="flex-1 min-h-0 relative bg-white">
        <textarea
          readOnly
          value={result.markdown}
          className="w-full h-full bg-white text-kaolin-800 font-mono text-xs p-4 resize-none focus:outline-none custom-scrollbar leading-relaxed"
          spellCheck={false}
          style={{ fontFamily: '"JetBrains Mono", monospace' }}
        />
      </div>

      {/* Director Chat */}
      <div className="h-48 border-t border-kaolin-200 bg-kaolin-50 flex flex-col shrink-0 relative">
        <div className="px-4 py-2 bg-kaolin-100/50 flex items-center gap-2 border-b border-kaolin-200">
          <Sparkles className="w-3 h-3 text-resin-500" />
          <span className="text-[10px] font-bold text-kaolin-600 uppercase tracking-wider">Director Refinement</span>
        </div>

        {/* Messages */}
        <div ref={chatScrollRef} className="flex-grow overflow-y-auto p-3 space-y-3 custom-scrollbar bg-kaolin-50">
          {messages.length === 0 && (
            <div className="text-center text-kaolin-400 text-[10px] mt-2 italic">
               Ask to refine colors, spacing, or components...
            </div>
          )}
          
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] px-3 py-2 rounded-xl text-xs font-medium shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-resin-500 text-white rounded-br-sm' 
                  : 'bg-white text-kaolin-700 border border-kaolin-200 rounded-bl-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {isRefining && (
             <div className="text-[10px] text-resin-500 font-bold px-3 animate-pulse">Refining Spec...</div>
          )}
        </div>

        {/* Input */}
        <div className="p-2 bg-white border-t border-kaolin-200">
          <div className="relative flex items-center">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
              placeholder="Type instructions..."
              disabled={isRefining}
              className="w-full bg-kaolin-50 border border-kaolin-200 rounded-lg pl-3 pr-10 py-2 text-xs text-kaolin-900 focus:outline-none focus:ring-1 focus:ring-resin-400 transition-all"
            />
            <button 
              onClick={handleSendChat}
              disabled={!chatInput.trim() || isRefining}
              className="absolute right-1 p-1.5 text-resin-500 hover:bg-resin-50 rounded-md disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
