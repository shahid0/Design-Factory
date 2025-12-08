
import { GoogleGenAI } from "@google/genai";
import { GeneratedResult } from "../types";

const SPEC_SYSTEM_INSTRUCTION = `
You are the "Master Architect" of the Design Spec Factory (v4.1). 
Your goal is to create a SINGLE SOURCE OF TRUTH Design System Specification that is so detailed it can be handed to any developer (Web, iOS, Android) to build a perfect implementation.

**YOUR OUTPUT FORMAT:**
Output ONLY the Markdown content. Do not wrap it in XML tags. Do not output HTML.

**TASK: The Master Specification**
This Markdown document must be extensive. Do not generate generic boilerplate. Tailor every name, color, and example to the "Context".

Structure:
1.  **Design Philosophy**: A brief statement on how this style serves the specific App Context.
2.  **Primitive Color Palette**: 
    -   Don't just say "Blue". Define a scale (50, 100, ... 900) with Hex codes. 
    -   Give them thematic names based on the context (e.g., for a Forest App: "Pine-500", "Moss-200").
3.  **Semantic Token Layer**: 
    -   Map primitives to function. 
    -   Define: \`--bg-canvas\`, \`--bg-surface\`, \`--text-primary\`, \`--text-muted\`, \`--border-subtle\`, \`--action-primary\`, \`--status-error\`.
4.  **Typography System**: 
    -   Define a Type Scale (Display, Heading 1-6, Body L/M/S, Caption, Code).
    -   Include: Font Family, Weight, Size (rem/px), Line Height, Letter Spacing.
5.  **Layout & Spacing**:
    -   Base Unit (e.g., 4px).
    -   Spacing Scale (xs, sm, md, lg, xl, 2xl, 3xl).
    -   Grid System Columns & Gutters.
6.  **Shape & Depth**:
    -   Corner Radius tokens (subtle, regular, full).
    -   Elevation/Shadow tokens (low, medium, high, inner).
7.  **Component Specs (The "UI Kit")**:
    -   Detailed specs for: Buttons (Primary, Secondary, Ghost), Inputs, Cards, Modals.
    -   Define states: Default, Hover, Active, Disabled, Focused.

Make it look premium and professional.
`;

const ARTIFACT_SYSTEM_INSTRUCTION = `
You are a Senior Frontend Engineer. 
Your task is to implement a provided Design Specification into a SINGLE-FILE HTML artifact.

**INPUT:**
- A detailed Markdown Design Specification.

**OUTPUT:**
- A single HTML file containing the implementation.
- **NO EXTERNAL CSS/JS** (except Tailwind via CDN).
- You MUST write custom CSS variables in a <style> block that match the Semantic Tokens from the Spec.
- The UI must visually demonstrate the Spec.

**Structure:**
1.  **Hero Section**: Show off the brand vibe described in the spec.
2.  **Style Guide Section**: Visually render the Color Palette and Type Scale.
3.  **Component Playground**: Interactive buttons, inputs, and cards.
4.  **Example UI**: A section that looks like the actual "App Context" (e.g., if it's a Crypto app, show a chart placeholder and trade buttons).

Wrap the output in <HTML_OUTPUT> ... </HTML_OUTPUT> tags.
`;

export const generateDesignSpec = async (
  style: string,
  context: string,
  fonts: string
): Promise<{ markdown: string }> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
  **PROJECT BRIEF:**
  - Visual Style: "${style}"
  - App Context (Product Type): "${context}"
  - Font Preference: "${fonts}"
  
  Generate the Master Design Specification (Markdown).
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: SPEC_SYSTEM_INSTRUCTION,
        temperature: 0.7, 
        thinkingConfig: { thinkingBudget: 2048 }
      }
    });

    return { markdown: response.text || "# Error: Could not generate spec." };
  } catch (error) {
    console.error("Gemini Spec Error:", error);
    throw error;
  }
};

export const generateArtifact = async (
  markdownSpec: string
): Promise<{ html: string }> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
  **DESIGN SPECIFICATION:**
  ${markdownSpec}
  
  Generate the High-Fidelity HTML Artifact based on this spec.
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
    return { html: match ? match[1].trim() : text }; // Fallback to raw text if tags missing

  } catch (error) {
    console.error("Gemini Artifact Error:", error);
    throw error;
  }
};

export const refineDesignSpec = async (
  currentMarkdown: string,
  instruction: string
): Promise<{ markdown: string }> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
  **CURRENT SPEC:**
  ${currentMarkdown}

  **USER INSTRUCTION (DIRECTOR MODE):**
  "${instruction}"

  **TASK:**
  Regenerate the Markdown Spec. Update tokens, descriptions, and values to match the instruction.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: SPEC_SYSTEM_INSTRUCTION,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 1024 }
      }
    });

    return { markdown: response.text || currentMarkdown };

  } catch (error) {
    console.error("Gemini Refinement Error:", error);
    throw error;
  }
};
