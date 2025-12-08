import { GoogleGenAI } from "@google/genai";
import { GeneratedResult } from "../types";

const parseResponse = (text: string): GeneratedResult => {
  // We use specific delimiters requested in the prompt to ensure clean extraction
  const specMatch = text.match(/<SPEC>([\s\S]*?)<\/SPEC>/);
  const artifactMatch = text.match(/<ARTIFACT>([\s\S]*?)<\/ARTIFACT>/);

  return {
    markdown: specMatch ? specMatch[1].trim() : "# Error: Could not parse Design Spec.",
    html: artifactMatch ? artifactMatch[1].trim() : "<!-- Error: Could not parse HTML Artifact. -->",
  };
};

export const generateDesignSystem = async (
  style: string,
  context: string,
  fonts: string
): Promise<GeneratedResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const systemPrompt = `
You are a World-Class Lead Design Architect and Senior Frontend Engineer. 
You will perform two distinct tasks in a single response to create a "Design System Showcase".

**INPUTS:**
- Style: "${style}"
- Context: "${context}"
- Fonts: "${fonts}"

**TASK 1: The Specification (Markdown)**
Create a comprehensive Design System documentation.
- It MUST be platform-agnostic (No Tailwind classes in the spec, use CSS Variables).
- Define: Colors (Primitives & Semantics), Typography, Spacing, Radius, Shadows/Effects.
- Explain the "Design Philosophy" behind this specific implementation of the style.
- WRAP this content in <SPEC> ... </SPEC> tags.

**TASK 2: The Artifact (HTML)**
Act as a Senior Frontend Developer. CONSUME the design specs you just wrote.
- Create a SINGLE-FILE HTML artifact that acts as a "Showcase" for this design system.
- **CRITICAL:** The HTML must be self-contained. 
- **CRITICAL:** You must write standard CSS inside a <style> block. Do NOT use Tailwind or external CSS libraries.
- **CRITICAL:** Include a CSS Reset (box-sizing: border-box; margin: 0; padding: 0;).
- The Layout:
  - A Hero section relevant to the "${context}".
  - A "UI Kit" section showing: Buttons (Primary/Secondary/Ghost), Inputs, Cards, and Typography scales.
  - Interactive elements: Add :hover and :active states to demonstrate the physics/feel.
- WRAP this content in <ARTIFACT> ... </ARTIFACT> tags.

**Example Response Structure:**
<SPEC>
# Design System: Cyberpunk
...
</SPEC>
<ARTIFACT>
<!DOCTYPE html>
<html>
...
</html>
</ARTIFACT>
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: systemPrompt,
      config: {
        temperature: 0.7, // Slightly creative but structured
        thinkingConfig: { thinkingBudget: 4096 } // Give it space to think about the design cohesion
      }
    });

    const text = response.text || "";
    return parseResponse(text);

  } catch (error) {
    console.error("Gemini Generation Error:", error);
    throw error;
  }
};
