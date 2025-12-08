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

export type GenerationStatus = 'idle' | 'generating' | 'complete' | 'error';
