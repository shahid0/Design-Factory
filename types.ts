
export interface DesignPreset {
  id: string;
  label: string;
  description: string;
  category: 'Modern/Tech' | 'Retro' | 'Minimal' | 'Experimental' | 'Animated';
  tags: string[];
}

export interface GeneratedResult {
  markdown: string;
  html: string | null;
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

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export type GenerationStatus = 'idle' | 'generating' | 'refining' | 'complete' | 'error';
export type GenerationPhase = 'idle' | 'spec' | 'artifact' | 'refining';