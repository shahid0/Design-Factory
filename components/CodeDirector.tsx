import React, { useState, useEffect, useRef } from 'react';
import { Copy, Check, Terminal, Smartphone, Code, Layers, MessageSquare, Send, Sparkles } from 'lucide-react';
import { GeneratedResult, ChatMessage } from '../types';

interface CodeDirectorProps {
  result: GeneratedResult;
  onRefine: (instruction: string) => void;
  isRefining: boolean;
}

type TabType = 'spec' | 'swiftui' | 'compose' | 'flutter';

export const CodeDirector: React.FC<CodeDirectorProps> = ({ result, onRefine, isRefining }) => {
  const [activeTab, setActiveTab] = useState<TabType>('spec');
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
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

  const renderContent = () => {
    switch (activeTab) {
      case 'spec': return result.markdown;
      case 'swiftui': return result.swiftui;
      case 'compose': return result.compose;
      case 'flutter': return result.flutter;
      default: return '';
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0c0c0e] rounded-xl border border-zinc-800 shadow-inner overflow-hidden">
      
      {/* Tabs Header */}
      <div className="flex items-center px-2 pt-2 bg-zinc-900 border-b border-zinc-800 gap-1 overflow-x-auto">
        <TabButton 
          active={activeTab === 'spec'} 
          onClick={() => setActiveTab('spec')} 
          icon={<Terminal className="w-3.5 h-3.5" />} 
          label="Design Spec" 
        />
        <TabButton 
          active={activeTab === 'swiftui'} 
          onClick={() => setActiveTab('swiftui')} 
          icon={<Smartphone className="w-3.5 h-3.5" />} 
          label="SwiftUI" 
        />
        <TabButton 
          active={activeTab === 'compose'} 
          onClick={() => setActiveTab('compose')} 
          icon={<Layers className="w-3.5 h-3.5" />} 
          label="Compose" 
        />
        <TabButton 
          active={activeTab === 'flutter'} 
          onClick={() => setActiveTab('flutter')} 
          icon={<Code className="w-3.5 h-3.5" />} 
          label="Flutter" 
        />
      </div>

      {/* Code Content */}
      <div className="flex-grow overflow-hidden relative group">
        <textarea
          readOnly
          value={renderContent()}
          className="w-full h-full bg-[#0c0c0e] text-zinc-300 font-mono text-xs p-4 resize-none focus:outline-none custom-scrollbar"
        />
        <button
          onClick={() => handleCopy(renderContent())}
          className="absolute top-4 right-4 p-2 bg-zinc-800/80 backdrop-blur text-zinc-400 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:text-white"
        >
          <Copy className="w-4 h-4" />
        </button>
      </div>

      {/* Director Mode Chat Interface */}
      <div className="h-1/3 min-h-[200px] border-t border-zinc-800 bg-[#121214] flex flex-col">
        <div className="px-4 py-2 bg-zinc-900/50 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400">
            <Sparkles className="w-3 h-3" />
            <span>Director Mode</span>
          </div>
          <span className="text-[10px] text-zinc-500">Refine with Gemini</span>
        </div>

        {/* Messages Area */}
        <div ref={chatScrollRef} className="flex-grow overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {messages.length === 0 && (
            <div className="text-center text-zinc-600 text-xs mt-4">
              <p>Ask Gemini to refine the design.</p>
              <p className="opacity-50">"Make the buttons rounder", "Add a dark mode toggle"...</p>
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
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-75"></div>
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce delay-150"></div>
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
              placeholder="Type your refinement instructions..."
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

const TabButton: React.FC<{ active: boolean; onClick: () => void; icon: React.ReactNode; label: string }> = ({ active, onClick, icon, label }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-xs font-medium transition-colors border-t border-l border-r ${
      active 
        ? 'bg-[#0c0c0e] text-blue-400 border-zinc-800 border-b-[#0c0c0e] -mb-px z-10' 
        : 'bg-transparent text-zinc-500 border-transparent hover:text-zinc-300 hover:bg-zinc-800/50'
    }`}
  >
    {icon}
    <span>{label}</span>
  </button>
);
