
import { create } from 'zustand';
import { DesignPreset, GeneratedResult, GenerationPhase, HistoryItem } from '../types';
import { designAgent } from '../services/ai/DesignAgent';
import { useHistoryStore } from './useHistoryStore';

interface GenerationState {
  // Inputs
  selectedStyle: DesignPreset | null;
  context: string;
  font: string;
  
  // Flow State
  phase: GenerationPhase;
  result: GeneratedResult | null;
  viewMode: 'browse' | 'inspect';
  
  // Actions
  setSelectedStyle: (style: DesignPreset) => void;
  setContext: (ctx: string) => void;
  setFont: (font: string) => void;
  setViewMode: (mode: 'browse' | 'inspect') => void;
  
  // Async Processes
  generateSpec: (mode: 'tailored' | 'standard') => Promise<void>;
  generateArtifact: () => Promise<void>;
  refineSpec: (instruction: string) => Promise<void>;
  restoreSession: (item: HistoryItem) => void;
}

export const useGenerationStore = create<GenerationState>((set, get) => ({
  selectedStyle: null,
  context: '',
  font: 'Inter',
  phase: 'idle',
  result: null,
  viewMode: 'browse',

  setSelectedStyle: (style) => set({ selectedStyle: style }),
  setContext: (context) => set({ context }),
  setFont: (font) => set({ font }),
  setViewMode: (viewMode) => set({ viewMode }),

  generateSpec: async (mode) => {
    const { selectedStyle, context, font } = get();
    
    if (!selectedStyle) return;

    set({ phase: 'spec', viewMode: 'inspect', result: null });

    const effectiveContext = mode === 'standard' 
      ? `A universal, general-purpose UI component library for ${selectedStyle.label}. Create a comprehensive system including Buttons, Inputs, Cards, and Navigation without assuming a specific product niche.` 
      : context;

    // Enriched style definition for better AI context
    const enrichedStylePrompt = `
      ${selectedStyle.label}
      Keywords: ${selectedStyle.tags.join(', ')}
      Description: ${selectedStyle.description}
    `.trim();

    try {
      const data = await designAgent.generateSpec(enrichedStylePrompt, effectiveContext, font);
      set({ 
        result: { markdown: data.markdown, html: null },
        phase: 'idle' 
      });
    } catch (error) {
      console.error(error);
      set({ phase: 'idle' });
      // Optional: Add error state here
    }
  },

  generateArtifact: async () => {
    const { result, font, selectedStyle, context } = get();
    if (!result?.markdown) return;

    set({ phase: 'artifact' });

    try {
      const data = await designAgent.generateArtifact(result.markdown, font);
      const newResult = { ...result, html: data.html };
      
      set({ result: newResult, phase: 'idle' });

      // Auto-save to history via the History Store
      if (selectedStyle) {
        const historyItem: HistoryItem = {
          id: Date.now().toString(),
          timestamp: Date.now(),
          style: selectedStyle,
          context: context,
          result: newResult
        };
        useHistoryStore.getState().addItem(historyItem);
      }

    } catch (error) {
      console.error(error);
      set({ phase: 'idle' });
    }
  },

  refineSpec: async (instruction) => {
    const { result } = get();
    if (!result) return;

    set({ phase: 'refining' });

    try {
      const refinedData = await designAgent.refineSpec(result.markdown, instruction);
      // Invalidate HTML because spec changed
      set({ 
        result: { markdown: refinedData.markdown, html: null },
        phase: 'idle'
      });
    } catch (error) {
      console.error(error);
      set({ phase: 'idle' });
    }
  },

  restoreSession: (item) => {
    set({
      selectedStyle: item.style,
      context: item.context,
      result: item.result,
      viewMode: 'inspect'
    });
  }
}));
