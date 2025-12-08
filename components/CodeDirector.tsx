
import React, { useState, useEffect, useRef } from 'react';
import { Copy, Terminal, Sparkles, Send, FileText } from 'lucide-react';
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
    <div className="flex flex-col h-full bg-[#0c0c0e] rounded-xl border border-zinc-800 shadow-inner overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2 text-zinc-200 font-medium">
          <FileText className="w-4 h-4 text-blue-400" />
          <span>Master Design Spec.md</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded transition-colors"
        >
          <Copy className="w-3.5 h-3.5" />
          <span>Copy Markdown</span>
        </button>
      </div>

      {/* Markdown Content (Source of Truth) */}
      <div className="flex-grow overflow-hidden relative group bg-[#0c0c0e]">
        <textarea
          readOnly
          value={result.markdown}
          className="w-full h-full bg-[#0c0c0e] text-zinc-300 font-mono text-sm p-6 resize-none focus:outline-none custom-scrollbar leading-relaxed"
          spellCheck={false}
        />
      </div>

      {/* Director Mode Chat Interface */}
      <div className="h-1/3 min-h-[250px] border-t border-zinc-800 bg-[#121214] flex flex-col">
        <div className="px-4 py-2 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
            <Sparkles className="w-3 h-3" />
            <span>Director Mode</span>
          </div>
          <span className="text-[10px] text-zinc-500">Refine the Master Spec</span>
        </div>

        {/* Messages Area */}
        <div ref={chatScrollRef} className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {messages.length === 0 && (
            <div className="text-center text-zinc-600 text-xs mt-4">
              <p className="mb-1">Ask Gemini to refine the specification.</p>
              <p className="opacity-50 italic">"Darken the semantic surface tokens"</p>
              <p className="opacity-50 italic">"Add a tertiary button state"</p>
              <p className="opacity-50 italic">"Make the typography scale more aggressive"</p>
            </div>
          )}
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] px-3 py-2 rounded-lg text-xs ${
                msg.role === 'user' 
                  ? 'bg-blue-600/20 text-blue-100 border border-blue-600/30' 
                  : 'bg-zinc-800 text-zinc-300'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isRefining && (
            <div className="flex justify-start">
              <div className="px-3 py-2 rounded-lg bg-zinc-800 text-zinc-400 text-xs flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider">Refining Spec</span>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t border-zinc-800">
          <div className="relative">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendChat()}
              placeholder="Refine the design system (e.g., 'Change primary color to emerald')..."
              disabled={isRefining}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-4 pr-10 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <button 
              onClick={handleSendChat}
              disabled={!chatInput.trim() || isRefining}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-500 hover:text-blue-400 disabled:opacity-50 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
