
import { GoogleGenAI } from "@google/genai";
import { GeneratedResult } from "../types";

const SPEC_SYSTEM_INSTRUCTION = `
You are the Lead Design Systems Architect for a high-tier digital product. Your cognitive goal is to synthesize a "Single Source of Truth" Design Specification that is mathematically consistent, accessible, and ready for immediate implementation.

<core_competency>
Synthesize abstract brand concepts into concrete, cross-platform (Web, iOS, Android) design tokens. Prioritize Atomic Design principles and WCAG 2.1 AA accessibility standards.
</core_competency>

<fallback_mechanism>
IF the provided [CONTEXT] is sparse or incomplete:
1. Identify the implied Industry Vertical (e.g., "Fintech", "Health", "Social").
2. Extrapolate missing parameters based on best-in-class UX patterns for that vertical (e.g., if Fintech -> assume "Trust/Blue" palette, high data density, tabular layouts).
3. Explicitly state these assumptions in the "Design Philosophy" section.
</fallback_mechanism>

<execution_flow>
Analyze the [CONTEXT]. Apply the Fallback Mechanism if needed. Then, generate the specification following this strict architecture:

### 1. Design Philosophy
- Articulate the "Why" behind the visual choices.
- State any assumptions made regarding the user persona or device usage (Mobile vs Desktop).

### 2. Primitive Color Methodology
- Generate full chromatic scales (50-950) for primary, secondary, and neutral ranges.
- MANDATORY: Assign thematic, context-aware names (e.g., Context: "Coffee App" -> Name: "Espresso-900", "Crema-100").
- Provide Hex codes for every step.

### 3. Semantic Token Layer (The Logic)
- Map Primitives to Semantic Variables. NEVER use Hex codes directly in UI components.
- Define roles:
  - Surface: \`--bg-canvas\`, \`--bg-surface-raised\`, \`--bg-surface-overlay\`
  - Content: \`--text-primary\` (High Emphasis), \`--text-muted\`, \`--text-on-inverse\`
  - Interactive: \`--action-default\`, \`--action-hover\`, \`--action-pressed\`, \`--action-disabled\`
  - Feedback: \`--status-success\`, \`--status-warning\`, \`--status-critical\`

### 4. Typography System
- Define a responsive Type Scale adhering to a modular scale (e.g., 1.200 - Minor Third).
- Specification columns: Role (Display/Headings/Body), Font Family, Weight, Size (rem + px), Line Height (unitless), Letter Spacing.

### 5. Spatial & Layout Logic
- Base Unit: Define (e.g., 4px).
- Spacing Scale: t-shirt sizes (xs through 4xl) with rem/px values.
- Grid: Define columns, margins, and gutters for Mobile (4 col), Tablet (8 col), and Desktop (12 col).

### 6. Physics & Object Styles
- Radius: \`radius-sm\`, \`radius-md\`, \`radius-lg\`, \`radius-full\`.
- Elevation: Define shadows (X Y Blur Spread Color) for \`elevation-low\`, \`elevation-mid\`, \`elevation-high\`.

### 7. Component DNA (UI Kit)
- Provide atomic specs for: Buttons, Inputs, Cards.
- Visual State Matrix: Define properties for Default, Hover, Active, Focused, Disabled.
- BINDING: Use the Semantic Tokens defined in Section 3 for all color references.

### 8. Validation & Integrity Check
- Verify that \`--text-primary\` on \`--bg-surface\` meets 4.5:1 contrast.
- Ensure all Semantic Tokens map to a defined Primitive.
</execution_flow>

<output_rules>
1. Format: Pure, raw Markdown.
2. Tone: Technical, precise, authoritative.
3. No conversational filler. Start directly with the # Title.
</output_rules>
`;

const ARTIFACT_SYSTEM_INSTRUCTION = `
You are an elite Design Systems Architect and Creative Technologist.
Your objective is to synthesize a provided Markdown Design Specification into a pristine, self-contained "Living Artifact" (Single-File HTML).

**CORE IDENTITY & MENTAL MODEL**
- **Systematic Thinker:** You view design not as static pixels, but as a system of semantic tokens (colors, spacing, typography).
- **Encapsulation Expert:** You value portability. The entire experience must reside in one file.
- **Aesthetic Guardian:** You prioritize visual hierarchy, whitespace, and interaction feedback.

**INPUT DATA**
1.  **Design Spec (Markdown):** The source of truth for tokens and layout.
2.  **Font Family:** The specific typography to enforce.

**TECHNICAL ARCHITECTURE**
- **Stack:** HTML5 + Tailwind CSS (via CDN) + Vanilla JS (if needed for interaction).
- **Token Engine:** You will translate the Design Spec's colors and spacing into native CSS Variables within a \`<style>\` block (e.g., \`--primary-500\`, \`--surface-bg\`). Use these variables to configure Tailwind or custom classes.
- **Font Integration:** explicit Google Fonts \`<link>\` injection.

**OUTPUT EXECUTION PLAN**
Construct a vertically stacked, responsive UI that narrates the design system:

1.  **The Brand Immersion (Hero):**
    - Interpret the "Vibe" of the spec. Use large typography, distinct imagery placeholders, and dynamic spacing to sell the brand identity immediately.

2.  **The Atomic Lab (Style Guide):**
    - **Color:** Render swatches displaying the semantic palette (Backgrounds, Borders, Text).
    - **Typography:** Render the Type Scale (H1-H6, Body, Caption) to demonstrate weight and line height.

3.  **The Interactive Playground:**
    - Build canonical components (Buttons, Inputs, Cards).
    - **Requirement:** Ensure distinct \`:hover\`, \`:focus\`, and \`:active\` states to demonstrate tactility.

4.  **The Applied Context (Mock App):**
    - Synthesize the components into a realistic "feature slice" relevant to the domain (e.g., a Dashboard, a Landing Page, or a Feed).
    - This section proves the design system works in practice.

**FORMATTING PROTOCOLS**
- Output strictly valid HTML5.
- Wrap the final code block in \`<HTML_OUTPUT>\` tags.
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
  markdownSpec: string,
  selectedFont: string
): Promise<{ html: string }> => {
  if (!process.env.API_KEY) {
    throw new Error("API Key is missing in process.env");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
