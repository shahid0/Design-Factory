
import { create } from 'zustand';
import { DesignPreset, GeneratedResult, GenerationPhase, HistoryItem } from '../types';
import { designAgent } from '../services/ai/DesignAgent';
import { useHistoryStore } from './useHistoryStore';
import { DESIGN_PRESETS } from '../lib/design-presets';

interface GenerationState {
  // Inputs
  selectedStyle: DesignPreset | null;
  context: string;
  font: string;
  riskBudget: number;
  
  // Customizations
  customColor: string;
  customMaterial: string;
  customSize: string;
  customEmbellishments: string;

  // AI Style Matchmaker Params
  targetAudience: string;
  platformType: string;
  coreFeatures: string;
  
  // Flow State
  phase: GenerationPhase | 'suggesting_style';
  result: GeneratedResult | null;
  viewMode: 'browse' | 'inspect' | 'catalog';
  
  // Actions
  setSelectedStyle: (style: DesignPreset | null) => void;
  setContext: (ctx: string) => void;
  setFont: (font: string) => void;
  setRiskBudget: (val: number) => void;
  setCustomColor: (color: string) => void;
  setCustomMaterial: (material: string) => void;
  setCustomSize: (size: string) => void;
  setCustomEmbellishments: (embellishments: string) => void;
  
  setTargetAudience: (audience: string) => void;
  setPlatformType: (platform: string) => void;
  setCoreFeatures: (features: string) => void;

  setViewMode: (mode: 'browse' | 'inspect' | 'catalog') => void;
  
  // Async Processes
  suggestStyleWithAI: (suggestCustomizations?: boolean) => Promise<void>;
  generateSpec: (mode: 'tailored' | 'standard') => Promise<void>;
  generateArtifact: () => Promise<void>;
  refineSpec: (instruction: string) => Promise<void>;
  restoreSession: (item: HistoryItem) => void;
}

export const useGenerationStore = create<GenerationState>((set, get) => ({
  selectedStyle: null,
  context: '',
  font: 'Inter',
  riskBudget: 3, // Default to balanced

  customColor: '',
  customMaterial: '',
  customSize: '',
  customEmbellishments: '',

  targetAudience: '',
  platformType: '',
  coreFeatures: '',

  phase: 'idle',
  result: null,
  viewMode: 'browse',

  setSelectedStyle: (style) => set({ selectedStyle: style }),
  setContext: (context) => set({ context }),
  setFont: (font) => set({ font }),
  setRiskBudget: (riskBudget) => set({ riskBudget }),
  
  setCustomColor: (customColor) => set({ customColor }),
  setCustomMaterial: (customMaterial) => set({ customMaterial }),
  setCustomSize: (customSize) => set({ customSize }),
  setCustomEmbellishments: (customEmbellishments) => set({ customEmbellishments }),

  setTargetAudience: (targetAudience) => set({ targetAudience }),
  setPlatformType: (platformType) => set({ platformType }),
  setCoreFeatures: (coreFeatures) => set({ coreFeatures }),

  setViewMode: (viewMode) => set({ viewMode }),

  suggestStyleWithAI: async (suggestCustomizations: boolean = false) => {
    const { targetAudience, platformType, coreFeatures } = get();
    if (!targetAudience && !platformType && !coreFeatures) return;

    set({ phase: 'suggesting_style' });
    try {
      const presetsData = DESIGN_PRESETS.map(p => ({ id: p.id, label: p.label, description: p.description }));
      const result = await designAgent.suggestStyle(targetAudience, platformType, coreFeatures, presetsData, suggestCustomizations);
      
      if (result && result.presetId) {
         const matchedPreset = DESIGN_PRESETS.find(p => p.id === result.presetId) || DESIGN_PRESETS[0];
         
         const updates: Partial<GenerationState> = {
           selectedStyle: matchedPreset,
           context: `Target Audience: ${targetAudience}\nPlatform: ${platformType}\nFeatures: ${coreFeatures}\n\nAI Reason: ${result.reason}\n`
         };
         
         if (suggestCustomizations) {
           if (result.fonts) updates.font = result.fonts;
           if (result.customColor) updates.customColor = result.customColor;
           if (result.customMaterial) updates.customMaterial = result.customMaterial;
           if (result.customSize) updates.customSize = result.customSize;
           if (result.customEmbellishments) updates.customEmbellishments = result.customEmbellishments;
         }
         
         set(updates);
      }
      set({ phase: 'idle' });
    } catch (error) {
      console.error(error);
      set({ phase: 'idle' });
    }
  },

  generateSpec: async (mode) => {
    const { 
      selectedStyle, context, font, riskBudget,
      customColor, customMaterial, customSize, customEmbellishments 
    } = get();
    
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
      // Pass the category to trigger motion-specific logic
      const data = await designAgent.generateSpec(
        enrichedStylePrompt, 
        selectedStyle.category, 
        effectiveContext, 
        font, 
        riskBudget,
        {
          color: customColor,
          material: customMaterial,
          size: customSize,
          embellishments: customEmbellishments
        }
      );
      
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
    const { 
      result, font, selectedStyle, context,
      customColor, customMaterial, customSize, customEmbellishments
    } = get();
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
          customColor,
          customMaterial,
          customSize,
          customEmbellishments,
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
      customColor: item.customColor || '',
      customMaterial: item.customMaterial || '',
      customSize: item.customSize || '',
      customEmbellishments: item.customEmbellishments || '',
      result: item.result,
      viewMode: 'inspect'
    });
  }
}));