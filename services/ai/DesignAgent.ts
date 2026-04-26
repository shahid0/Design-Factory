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
  public constructSpecRequest(style: string, category: string, context: string, fonts: string, risk: number): PromptRequest {
    const userContent = `
    **PROJECT BRIEF:**
    - Visual Style: "${style}"
    - Style Category: "${category}"
    - App Context (Product Type): "${context}"
    - Font Preference: "${fonts}"
    - Risk Budget (1-5): ${risk}
    
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
  async generateSpec(style: string, category: string, context: string, fonts: string, risk: number): Promise<SpecResult> {
    const ai = this.getClient();
    const req = this.constructSpecRequest(style, category, context, fonts, risk);

    try {
      // Primary Attempt: High-Reasoning "Architect" Mode
      const response = await ai.models.generateContent({
        model: "gemma-4-31b-it",
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
          model: "gemma-4-31b-it",
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
        model: "gemma-4-31b-it",
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
        model: "gemma-4-31b-it",
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
}

// Export singleton
export const designAgent = new DesignAgent();