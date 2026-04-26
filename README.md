# Design Factory

A high-fidelity, motion-driven UI design specification and artifact generator powered by Google's Generative AI. 

## Table of Contents
- [The Problem](#-the-problem)
- [What It Does](#-what-it-does)
- [How It Works](#-how-it-works)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Customizing the AI (Developer Guide)](#-customizing-the-ai-developer-guide)
- [License](#-license)

## 🚨 The Problem

Designing and prototyping modern web interfaces is often a fragmented process. Designers create visual specifications in tools like Figma, which developers must painstakingly translate into code. This handoff can be slow, leaving room for misinterpretation of stylistic intent (such as spatial rhythm, motion, and typography weight). Furthermore, exploring diverse aesthetic variations rapidly requires significant manual effort, stalling creative exploration.

## ✨ What It Does

Design Factory bridges the gap between abstract creative concepts and functional frontend code. It acts as an automated design agency and development pair. You give it a brief (a style and context), and it will:
1. **Generate a Master Design Specification:** A rigorous Markdown document outlining a cohesive design system (colors, typography, grid, interaction states).
2. **Generate a Functional Artifact:** A high-fidelity, responsive HTML landing page that implements the design system perfectly using Tailwind CSS.
3. **Apply Director-Level Refinements:** Allow you to iterate on the design using natural language (e.g., "Make it moodier", "Add more white space"), continuously updating both the spec and the coded artifact.

## ⚙️ How It Works

1. **Concept Intake:** You provide the application context (e.g., "Fintech Dashboard"), visual style intent (e.g., "Cyberpunk"), font preferences, and a "risk budget" for creative deviation.
2. **Architectural AI Prompting:** The `DesignAgent` queries Google's Generative AI (Gemini models) with a high-cognitive prompt to craft a comprehensive, cohesive aesthetic system.
3. **Translation to Code:** A specialized artifact-generation prompt takes that spec and outputs pristine HTML/Tailwind CSS, including dynamic Google Font integration.
4. **State & Refinement:** The application maintains the design state, allowing rapid revisions. When refined, the AI updates the spec, which triggers a regeneration of the coded artifact.

## 📸 Screenshots

*(Replace the placeholder image below with actual screenshots of your running application)*

![Design Factory Interface](https://via.placeholder.com/900x500?text=Design+Factory+App+Interface)

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A package manager like `npm`, `yarn`, or `pnpm`
- A Google AI Studio API Key (for the GenAI features)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shahid0/Design-Factory.git
   cd Design-Factory
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a new file named `.env` in the root directory of the project, and add your Google AI Studio API key:
   ```env
   API_KEY=your_google_ai_studio_api_key_here
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the localhost URL provided in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 🛠️ Customizing the AI (Developer Guide)

If you are a developer looking to tweak the AI's behavior, update its strict system instructions, or change the underlying LLM models:

### 1. Updating the Prompts
All system instructions and prompt templates have been centralized into a single file to make them easy to maintain.
- **File to Edit:** `services/ai/prompts.ts`
- **What you'll find here:** You will see `SPEC_SYSTEM_INSTRUCTION` (guides spec generation) and `ARTIFACT_SYSTEM_INSTRUCTION` (guides HTML/Tailwind output). Modify these to adjust the AI's structural format or stylistic constraints.

### 2. Changing the AI Model
The core execution logic, API interactions, and model selections are handled by the `DesignAgent`.
- **File to Edit:** `services/ai/DesignAgent.ts`
- **What you'll find here:** Look for the `generateContent` block. You can change the active model (e.g., `gemini-3.1-pro-preview`) and configure reasoning parameters like `thinkingConfig` (`ThinkingLevel.HIGH`).

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
