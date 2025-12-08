export interface DesignPreset {
  id: string;
  label: string;
  description: string;
  category: 'Modern/Tech' | 'Retro' | 'Minimal' | 'Experimental';
  tags: string[];
}

export interface GeneratedResult {
  markdown: string;
  html: string;
}

export interface GenerationRequest {
  style: string;
  context: string;
  fonts: string;
}

export interface HistoryItem {
  id: string;
  timestamp: number;
  style: DesignPreset;
  context: string;
  result: GeneratedResult;
}

export type GenerationStatus = 'idle' | 'generating' | 'complete' | 'error';