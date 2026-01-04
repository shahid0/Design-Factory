
import { GoogleGenAI } from "@google/genai";
import { SPEC_SYSTEM_INSTRUCTION, ARTIFACT_SYSTEM_INSTRUCTION } from "./prompts";

export interface SpecResult {
  markdown: string;
}

export interface ArtifactResult {
  html: string;
}

/**
 * The Service Layer (The Brains)
 * Encapsulates all AI generation logic.
 * 
 * ARCHITECTURAL NOTE:
 * Uses Lazy Initialization for the GoogleGenAI client.
 * Implements "Graceful Degradation" - if high-reasoning (Thinking) models fail,
 * it falls back to standard inference to ensure system availability.
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
   * Generates a technical design specification based on a style and context.
   */
  async generateSpec(style: string, context: string, fonts: string, risk: number): Promise<SpecResult> {
    const ai = this.getClient();
    
    const prompt = `
    **PROJECT BRIEF:**
    - Visual Style: "${style}"
    - App Context (Product Type): "${context}"
    - Font Preference: "${fonts}"
    - Risk Budget (1-5): ${risk}
    
    Generate the Master Design Specification (Markdown).
    `;

    try {
      // Primary Attempt: High-Reasoning "Architect" Mode
      // Increased budget to 8192 tokens to allow for deep architectural reasoning.
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          systemInstruction: SPEC_SYSTEM_INSTRUCTION,
          temperature: 0.7, 
          // @ts-ignore
          thinkingConfig: { thinkingBudget: 8192 } 
        }
      });

      return { markdown: response.text || "# Error: Could not generate spec." };
    } catch (error) {
      console.warn("DesignAgent: Thinking Model failed. Attempting Fallback.", error);
      
      // Fallback Attempt: Fast Inference (Resilience)
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: "gemini-3-pro-preview", // Still use Pro, but disable thinking
          contents: prompt,
          config: {
            systemInstruction: SPEC_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            // No thinkingConfig implies standard inference
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
    Generate the High-Fidelity HTML Artifact based on this spec.
    CRITICAL: You MUST include a Google Fonts <link> tag for '${selectedFont}' in the <head> and apply it to the body font-family.
    `;

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          systemInstruction: ARTIFACT_SYSTEM_INSTRUCTION,
          temperature: 0.5, 
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

    const prompt = `
    **CURRENT SPEC:**
    ${currentMarkdown}

    **USER INSTRUCTION (DIRECTOR MODE):**
    "${instruction}"

    **TASK:**
    Regenerate the Markdown Spec. Update tokens, descriptions, and values to match the instruction.
    `;

    try {
      // Refinement now uses 4k budget to ensure complex instructions (e.g. "make it darker and more spacious") 
      // are thought through carefully before applying token changes.
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: prompt,
        config: {
          systemInstruction: SPEC_SYSTEM_INSTRUCTION,
          temperature: 0.7,
          // @ts-ignore
          thinkingConfig: { thinkingBudget: 4096 }
        }
      });

      return { markdown: response.text || currentMarkdown };

    } catch (error) {
      console.error("DesignAgent: Refinement Error:", error);
      throw error;
    }
  }
}

// Export singleton
export const designAgent = new DesignAgent();
