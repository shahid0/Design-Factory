import React, { useState, useEffect } from 'react';
import { Copy, Check, Edit2, Eye } from 'lucide-react';

interface MarkdownViewerProps {
  content: string;
  onContentChange?: (newContent: string) => void;
}

// Helper to copy text
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};

const CodeBlock: React.FC<{ code: string; language?: string }> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-4 rounded-lg overflow-hidden border border-zinc-700 bg-[#1e1e1e]">
      <div className="flex justify-between items-center px-4 py-2 bg-[#252526] border-b border-zinc-700">
        <span className="text-xs text-zinc-400 font-mono">{language || 'code'}</span>
        <button 
          onClick={handleCopy}
          className="p-1 hover:bg-zinc-700 rounded transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3 text-zinc-400" />}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const SimpleMarkdown: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  const rendered: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeBlockContent: string[] = [];
  let codeBlockLang = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Handle Code Blocks
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        // End of block
        rendered.push(
          <CodeBlock key={`code-${i}`} code={codeBlockContent.join('\n')} language={codeBlockLang} />
        );
        codeBlockContent = [];
        inCodeBlock = false;
      } else {
        // Start of block
        inCodeBlock = true;
        codeBlockLang = line.trim().replace('```', '');
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockContent.push(line);
      continue;
    }

    // Headers
    if (line.startsWith('### ')) {
      rendered.push(<h3 key={i} className="text-lg font-bold text-blue-400 mt-8 mb-3">{line.replace('### ', '')}</h3>);
    } else if (line.startsWith('## ')) {
      rendered.push(<h2 key={i} className="text-xl font-bold text-white mt-10 mb-4 pb-2 border-b border-zinc-800">{line.replace('## ', '')}</h2>);
    } else if (line.startsWith('# ')) {
      rendered.push(<h1 key={i} className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">{line.replace('# ', '')}</h1>);
    } 
    // List Items
    else if (line.trim().startsWith('- ')) {
       rendered.push(
         <div key={i} className="flex gap-2 ml-4 my-1">
           <span className="text-zinc-500 select-none">•</span>
           <span className="text-zinc-300">{line.replace('- ', '')}</span>
         </div>
       );
    }
    // Key-Value pairs (simple detection)
    else if (line.includes(':') && !line.startsWith('http') && line.length < 100 && !line.includes('  ')) {
        const parts = line.split(':');
        rendered.push(
            <div key={i} className="flex flex-wrap gap-2 my-1">
                <span className="font-semibold text-zinc-400">{parts[0]}:</span>
                <span className="text-zinc-200">{parts.slice(1).join(':')}</span>
            </div>
        );
    }
    // Standard Paragraph
    else if (line.trim() === '') {
      rendered.push(<div key={i} className="h-4"></div>);
    } else {
      rendered.push(<p key={i} className="text-zinc-300 leading-7">{line}</p>);
    }
  }

  return <div className="space-y-1">{rendered}</div>;
};

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content, onContentChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [localContent, setLocalContent] = useState(content);

  useEffect(() => {
    setLocalContent(content);
  }, [content]);

  const handleSave = () => {
    setIsEditing(false);
    if (onContentChange) onContentChange(localContent);
  };

  return (
    <div className="flex flex-col h-full bg-[#0c0c0e] rounded-xl border border-zinc-800 shadow-inner overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <span className="text-xs font-mono text-zinc-500">design-specs.md</span>
        <button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
        >
          {isEditing ? (
            <><Check className="w-3 h-3" /> Done</>
          ) : (
            <><Edit2 className="w-3 h-3" /> Edit</>
          )}
        </button>
      </div>

      <div className="flex-grow overflow-auto p-8 custom-scrollbar">
        {isEditing ? (
          <textarea
            value={localContent}
            onChange={(e) => setLocalContent(e.target.value)}
            className="w-full h-full bg-transparent text-zinc-300 font-mono text-sm focus:outline-none resize-none"
            spellCheck={false}
          />
        ) : (
          <SimpleMarkdown text={localContent} />
        )}
      </div>
    </div>
  );
};