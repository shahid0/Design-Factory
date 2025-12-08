import { GoogleGenAI } from "@google/genai";
import { GeneratedResult } from "../types";

const parseResponse = (text: string): GeneratedResult => {
  const specMatch = text.match(/<SPEC>([\s\S]*?)<\/SPEC>/);
  const artifactMatch = text.match(/<ARTIFACT>([\s\S]*?)<\/ARTIFACT>/);
  const swiftMatch = text.match(/<SWIFTUI>([\s\S]*?)<\/SWIFTUI>/);
  const composeMatch = text.match(/<COMPOSE>([\s\S]*?)<\/COMPOSE>/);
  const flutterMatch = text.match(/<FLUTTER>([\s\S]*?)<\/FLUTTER>/);

  return {
    markdown: specMatch ? specMatch[1].trim() : "# Error: Could not parse Design Spec.",
    html: artifactMatch ? artifactMatch[1].trim() : "<!-- Error: Could not parse HTML Artifact. -->",
    swiftui: swiftMatch ? swiftMatch[1].trim() : "// Error: Could not parse SwiftUI.",
    compose: composeMatch ? composeMatch[1].trim() : "// Error: Could not parse Compose.",
    flutter: flutterMatch ? flutterMatch[1].trim() : "// Error: Could not parse Flutter.",
  };
};

const SYSTEM_INSTRUCTION = `
You are a World-Class Lead Design Architect and Senior Frontend Engineer. 
You are the engine of "Design Spec Factory".

**YOUR OUTPUT FORMAT:**
You must generate 5 distinct sections wrapped in XML-like tags.
1. <SPEC> ... </SPEC> : Markdown design documentation (Platform Agnostic).
2. <ARTIFACT> ... </ARTIFACT> : A single-file HTML prototype.
3. <SWIFTUI> ... </SWIFTUI> : SwiftUI Theme & Components struct.
4. <COMPOSE> ... </COMPOSE> : Jetpack Compose Theme & Colors object.
5. <FLUTTER> ... </FLUTTER> : Flutter ThemeData class.

**TASK 1: The Specification (<SPEC>)**
- Define Colors (Primitives & Semantics), Typography, Spacing, Radius.
- Explain the "Design Philosophy".
- Use CSS Variables methodology (e.g. --primary, --surface-1).

**TASK 2: The Artifact (<ARTIFACT>)**
- Create a SINGLE-FILE HTML artifact acting as a "Showcase".
- Use standard CSS in <style>. NO Tailwind in the output.
- Include a CSS Reset.
- **Visuals**: Use CSS gradients, shadows, and borders to create "assets" if needed.
- **Layout**: 
  - Hero Section (Contextual).
  - UI Kit Grid (Buttons, Inputs, Cards).
  - Mobile-First responsive.

**TASK 3: Native Mobile Code (<SWIFTUI>, <COMPOSE>, <FLUTTER>)**
- Generate production-ready boilerplate for the defined style.
- Map the hex codes and logic from the Spec to these platforms.

`;

export const generateDesignSystem = async (
  style: string,
  context: string,
  fonts: string
): Promise<GeneratedResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
  **INPUTS:**
  - Style: "${style}"
  - Context: "${context}"
  - Fonts: "${fonts}"
  
  Generate the complete Design System Showcase.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, 
        thinkingConfig: { thinkingBudget: 4096 }
      }
    });

    const text = response.text || "";
    return parseResponse(text);

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};

export const refineDesignSystem = async (
  currentResult: GeneratedResult,
  instruction: string
): Promise<GeneratedResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const prompt = `
  **CONTEXT:**
  I have an existing design system. I want to modify it based on the user's request.
  
  **CURRENT SPEC (Excerpt):**
  ${currentResult.markdown.slice(0, 2000)}...

  **CURRENT HTML (Excerpt):**
  ${currentResult.html.slice(0, 2000)}...

  **USER INSTRUCTION (DIRECTOR MODE):**
  "${instruction}"

  **TASK:**
  Regenerate the ALL parts (<SPEC>, <ARTIFACT>, <SWIFTUI>, <COMPOSE>, <FLUTTER>) applying this change.
  Keep the rest of the design consistent.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Using the same model for consistency and smarts
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        thinkingConfig: { thinkingBudget: 2048 } // Lower budget for refinement
      }
    });

    const text = response.text || "";
    return parseResponse(text);

  } catch (error) {
    console.error("Gemini Refinement Error:", error);
    throw error;
  }
};
