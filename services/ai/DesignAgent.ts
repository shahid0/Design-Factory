import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { SPEC_SYSTEM_INSTRUCTION, ARTIFACT_SYSTEM_INSTRUCTION } from "./prompts";

export interface SpecResult {
  markdown: string;
}

export interface ArtifactResult {
  html: string;
}

export interface PromptRequest {
  contents: string;
  systemInstruction: string;
}

/**
 * The Service Layer (The Brains)
 * Encapsulates all AI generation logic.
 * 
 * ARCHITECTURAL NOTE:
 * Uses Lazy Initialization for the GoogleGenAI client.
 * Implements explicit prompt construction for traceability and testing.
 */
export class DesignAgent {
  private client: GoogleGenAI | null = null;

  private getClient(): GoogleGenAI {
    if (!this.client) {
      if (!process.env.API_KEY) {
        throw new Error("API Key is missing in process.env");
      }
      this.client = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return this.client;
  }

  /**
   * Constructs the prompt payload for the spec generation.
   * Now accepts 'category' to trigger specific motion-heavy instructions.
   */
  public constructSpecRequest(
    style: string, 
    category: string, 
    context: string, 
    fonts: string, 
    risk: number,
    customizations?: { color?: string, material?: string, size?: string, embellishments?: string }
  ): PromptRequest {
    const userContent = `
    **PROJECT BRIEF:**
    - Visual Style: "${style}"
    - Style Category: "${category}"
    - App Context (Product Type): "${context}"
    - Font Preference: "${fonts}"
    - Risk Budget (1-5): ${risk}
    
    **PRODUCT CUSTOMIZATIONS (Overrides):**
    - Color Override: ${customizations?.color || "None (Use default style)"}
    - Material/Texture: ${customizations?.material || "None (Use default style)"}
    - Size/Density: ${customizations?.size || "None (Use default style)"}
    - Embellishments: ${customizations?.embellishments || "None (Use default style)"}

    Generate the Master Design Specification (Markdown).
    `;

    return {
      contents: userContent,
      systemInstruction: SPEC_SYSTEM_INSTRUCTION
        .replace('[STYLE_NAME]', style)
        .replace('[CATEGORY]', category)
    };
  }

  /**
   * Constructs the prompt payload for the refinement generation.
   */
  public constructRefineRequest(currentMarkdown: string, instruction: string): PromptRequest {
    const prompt = `
    **CURRENT SPEC:**
    ${currentMarkdown}

    **USER INSTRUCTION (DIRECTOR MODE):**
    "${instruction}"

    **TASK:**
    Regenerate the Markdown Spec. Update tokens, descriptions, and values to match the instruction.
    `;

    return {
      contents: prompt,
      systemInstruction: SPEC_SYSTEM_INSTRUCTION
    };
  }

  /**
   * Generates a technical design specification based on a style and context.
   */
  async generateSpec(
    style: string, 
    category: string, 
    context: string, 
    fonts: string, 
    risk: number,
    customizations?: { color?: string, material?: string, size?: string, embellishments?: string }
  ): Promise<SpecResult> {
    const ai = this.getClient();
    const req = this.constructSpecRequest(style, category, context, fonts, risk, customizations);

    try {
      // Primary Attempt: High-Reasoning "Architect" Mode
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: req.contents,
        config: {
          systemInstruction: req.systemInstruction, 
          temperature: 0.8, // Slightly higher creativity for motion design
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH } 
        }
      });

      return { markdown: response.text || "# Error: Could not generate spec." };
    } catch (error) {
      console.warn("DesignAgent: Thinking Model failed. Attempting Fallback.", error);
      
      // Fallback Attempt: Fast Inference (Resilience)
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: req.contents,
          config: {
            systemInstruction: req.systemInstruction,
            temperature: 0.8,
            thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
          }
        });
        return { markdown: fallbackResponse.text || "# Error: Fallback generation failed." };
      } catch (fallbackError) {
        console.error("DesignAgent: Critical Failure.", fallbackError);
        throw fallbackError;
      }
    }
  }

  /**
   * Transforms a markdown spec into a functional HTML artifact.
   */
  async generateArtifact(markdownSpec: string, selectedFont: string): Promise<ArtifactResult> {
    const ai = this.getClient();

    const prompt = `
    **DESIGN SPECIFICATION:**
    ${markdownSpec}
    
    **REQUIRED FONT:**
    "${selectedFont}"
    
    **INSTRUCTION:**
    Generate a **High-Fidelity Landing Page** based on this spec.
    The page should be a "Real World" example of the design system applied to the specific product context described in the spec.
    
    CRITICAL: You MUST include a Google Fonts <link> tag for '${selectedFont}' in the <head> and apply it to the body font-family.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: ARTIFACT_SYSTEM_INSTRUCTION,
          temperature: 0.5, 
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });

      const text = response.text || "";
      const match = text.match(/<HTML_OUTPUT>([\s\S]*?)<\/HTML_OUTPUT>/);
      
      return { html: match ? match[1].trim() : text }; 

    } catch (error) {
      console.error("DesignAgent: Artifact Generation Error:", error);
      throw error;
    }
  }

  /**
   * Refines an existing spec based on natural language instructions.
   */
  async refineSpec(currentMarkdown: string, instruction: string): Promise<SpecResult> {
    const ai = this.getClient();
    const req = this.constructRefineRequest(currentMarkdown, instruction);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: req.contents,
        config: {
          systemInstruction: req.systemInstruction,
          temperature: 0.7,
          thinkingConfig: { thinkingLevel: ThinkingLevel.HIGH }
        }
      });

      return { markdown: response.text || currentMarkdown };

    } catch (error) {
      console.error("DesignAgent: Refinement Error:", error);
      throw error;
    }
  }

  /**
   * AI Matchmaker: Suggests the best design preset based on user goals.
   */
  async suggestStyle(
    audience: string,
    appType: string,
    goal: string,
    availablePresets: { id: string, label: string, description: string }[],
    suggestCustomizations: boolean = false
  ): Promise<{ presetId: string, reason: string, fonts?: string, customColor?: string, customMaterial?: string, customSize?: string, customEmbellishments?: string }> {
    const ai = this.getClient();
    const customInstruction = suggestCustomizations ? `
Additionally, suggest specific product customisation settings and fonts that best fit this.
Return these additional keys in the JSON:
"fonts": "suggested standard Google fonts to use (e.g. 'Inter, serif')",
"customColor": "a specific hex color or color tone",
"customMaterial": "a specific UI material feel (e.g. 'frosted glass', 'matte plastic')",
"customSize": "sizing feel (e.g. 'compact', 'spacious')",
"customEmbellishments": "specific visual embellishments (e.g. 'neon glows', 'subtle shadows')"
` : '';

    const prompt = `
You are an expert Design Matchmaker.
Based on the following product requirements, select the BEST fitting design style from the provided list.

REQUIREMENTS:
- Target Audience: ${audience || 'General public'}
- App/Product Type: ${appType || 'Software application'}
- End Goal / Theme: ${goal || 'Standard functional UI'}

AVAILABLE STYLES:
${availablePresets.map(p => `- ${p.id}: ${p.label} (${p.description})`).join('\n')}
${customInstruction}
Return a raw JSON object (NO markdown formatting, NO \`\`\`json tags) with the keys:
"presetId": "the id of the matched style"
"reason": "a short 1-sentence explanation why"
${suggestCustomizations ? `"fonts": "...",\n"customColor": "...",\n"customMaterial": "...",\n"customSize": "...",\n"customEmbellishments": "..."` : ''}
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          temperature: 0.1,    
          responseMimeType: "application/json"
        }
      });

      const text = response.text || "{}";
      const cleaned = text.replace(/\`\`\`json/g, '').replace(/\`\`\`/g, '');
      const data = JSON.parse(cleaned);
      
      // Fallback if AI hallucinates an ID
      const validIds = availablePresets.map(p => p.id);
      if (!validIds.includes(data.presetId)) {
        data.presetId = validIds[0];
      }
      return data;
    } catch (error) {
      console.error("DesignAgent: Suggest Style Error:", error);
      // Fallback
      return { presetId: availablePresets[0].id, reason: "Default selection due to error." };
    }
  }
}

// Export singleton
export const designAgent = new DesignAgent();