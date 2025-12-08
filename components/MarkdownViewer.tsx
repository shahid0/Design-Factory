import React from 'react';

interface MarkdownViewerProps {
  content: string;
}

// A simple regex-based renderer to avoid complex deps and build issues with pure XML output
// In a real app, we'd use react-markdown
const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  
  return (
    <div className="space-y-4 text-zinc-300 font-mono text-sm leading-relaxed">
      {lines.map((line, i) => {
        // Headers
        if (line.startsWith('### ')) return <h3 key={i} className="text-lg font-bold text-accent mt-6 mb-2">{line.replace('### ', '')}</h3>;
        if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-8 mb-4 border-b border-zinc-700 pb-2">{line.replace('## ', '')}</h2>;
        if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-extrabold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">{line.replace('# ', '')}</h1>;
        
        // List items
        if (line.trim().startsWith('- ')) return <div key={i} className="flex gap-2 ml-4"><span className="text-zinc-500">•</span><span>{line.replace('- ', '')}</span></div>;
        
        // Code blocks (naive)
        if (line.startsWith('```')) return <div key={i} className="h-px bg-zinc-700 my-2"></div>;
        
        // Key-Value pairs (often used in specs)
        if (line.includes(':') && !line.startsWith('http')) {
             const parts = line.split(':');
             return (
                 <div key={i} className="flex flex-wrap gap-2">
                     <span className="font-semibold text-zinc-400">{parts[0]}:</span>
                     <span className="text-zinc-200">{parts.slice(1).join(':')}</span>
                 </div>
             )
        }

        if (line.trim() === '') return <br key={i} />;

        return <p key={i}>{line}</p>;
      })}
    </div>
  );
};

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  return (
    <div className="bg-[#0c0c0e] rounded-xl border border-zinc-800 p-8 shadow-inner overflow-auto h-full w-full">
      <SimpleMarkdown text={content} />
    </div>
  );
};
