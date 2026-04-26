# Design Factory

A high-fidelity, motion-driven UI design specification and artifact generator powered by Google's Generative AI. Design Factory transforms creative concepts and abstract styles into cinematic web layouts and immediately usable HTML/Tailwind artifacts.

## 📸 Screenshots

*(Replace the placeholder image below with actual screenshots of your running application)*

![Design Factory Interface](https://via.placeholder.com/900x500?text=Design+Factory+App+Interface)

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. This guide assumes you have basic familiarity with the terminal but doesn't require prior knowledge of the project's architecture.

### Prerequisites

You will need the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- A package manager like `npm`, `yarn`, or `pnpm`
- A Google AI Studio API Key (for the GenAI features)

### Installation

1. **Clone the repository:**
   Download the project code to your local machine.
   ```bash
   git clone https://github.com/shahid0/Design-Factory.git
   cd Design-Factory
   ```

2. **Install dependencies:**
   Install all the required libraries to run the project.
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   The AI agent relies on an API key to communicate with Google's GenAI models. 
   Create a new file named `.env` in the root directory of the project, and add your API key like this:
   ```env
   API_KEY=your_google_ai_studio_api_key_here
   ```

4. **Start the development server:**
   Launch the app locally!
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the localhost URL provided in your terminal (usually `http://localhost:3000` or `http://localhost:5173`).

---

## 🛠️ Customizing the AI (Developer Guide)

If you are a developer looking to tweak the AI's behavior, update its strict system instructions, or change the underlying LLM models, here is exactly where you need to look:

### 1. Updating the Prompts
All system instructions and prompt templates have been centralized into a single file to make them easy to maintain.
- **File to Edit:** `services/ai/prompts.ts`
- **What you'll find here:** 
  You will see two main exports: `SPEC_SYSTEM_INSTRUCTION` (which heavily guides the AI on how to write the cinematic design system spec) and `ARTIFACT_SYSTEM_INSTRUCTION` (which tells the AI how to generate the final HTML/Tailwind artifacts). You can modify these markdown strings to adjust the AI's output format, stylistic constraints, and specific behaviors.

### 2. Changing the AI Model
The core execution logic, API interactions, and model selections are handled by the `DesignAgent`.
- **File to Edit:** `services/ai/DesignAgent.ts`
- **What you'll find here:** 
  Look for the `generateContent` calls (e.g., `ai.models.generateContent({...})`). Under the `model` property, you can change the active model (for example, switching from `gemma-4-31b-it` or `gemini-3.1-pro-preview` to another model). 
  *Note:* You can also tweak other generation configurations here, such as `temperature` and `thinkingConfig` (set to `ThinkingLevel.HIGH`).

---

## 📜 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2026

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
