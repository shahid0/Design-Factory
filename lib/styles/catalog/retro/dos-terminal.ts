
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'terminal')!;

export const dosTerminal: StyleCartridge = {
  id: 'terminal',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000', // Pure Black Void
      '--bg-layer-2': '#0a0a0a', // Slightly lighter for layering
      '--text-primary': '#00FF00', // Phosphor Green
      '--text-secondary': '#00AA00', // Dim Green
      '--accent-color': '#00FF00', // Green Accent
      '--border-radius': '0px', // No curves in DOS
      '--font-display': '"VT323", "Courier New", monospace', // Pixel font
    },
    elementClasses: {
      stage: 'dos-stage',
      navbar: 'dos-nav',
      container: 'dos-panel',
      buttonPrimary: 'dos-btn-primary',
      buttonSecondary: 'dos-btn-secondary',
      input: 'dos-input',
      badge: 'dos-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      /* --- DOS TERMINAL ENGINE --- */

      /* 1. CRT MONITOR EFFECT */
      .dos-stage {
        background-color: #000000;
        color: var(--text-primary);
        font-family: 'VT323', monospace;
        text-transform: uppercase;
        overflow-x: hidden;
        font-size: 18px;
        line-height: 1.2;
      }

      /* Scanlines */
      .ds-deco-layer::before {
        content: " ";
        display: block;
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 999;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
      }

      /* Phosphor Glow */
      .ds-page-root {
        text-shadow: 0 0 2px var(--text-secondary), 0 0 5px var(--text-secondary);
      }

      /* Screen Curvature Vignette */
      .ds-deco-layer::after {
        content: " ";
        position: fixed;
        inset: 0;
        background: radial-gradient(circle, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%);
        pointer-events: none;
        z-index: 998;
      }

      /* 2. CONTAINERS (ASCII Borders) */
      .dos-panel, .ds-panel, .ds-card, .dos-nav {
        background: #000000;
        border: 2px solid var(--text-primary);
        box-shadow: none;
        border-radius: 0;
        position: relative;
        margin-bottom: 1rem;
        padding: 1rem;
      }
      
      /* Double Border Simulation via Outline */
      .dos-panel:hover, .ds-panel:hover, .ds-card:hover {
        outline: 2px solid var(--text-primary);
        outline-offset: -6px;
        cursor: text;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'VT323', monospace;
        font-weight: 400;
        font-size: 4rem;
        line-height: 1;
        margin-bottom: 20px;
        white-space: pre-wrap;
      }
      .ds-hero-title span {
        background: var(--text-primary);
        color: #000000;
        text-shadow: none;
        padding: 0 10px;
        -webkit-text-fill-color: initial;
      }
      
      /* Typing Cursor Animation */
      .ds-hero-title::after {
        content: '█';
        animation: blink 1s steps(2, start) infinite;
        margin-left: 5px;
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      .ds-hero-text {
        font-size: 1.2rem;
        color: var(--text-secondary);
        border-left: 2px solid var(--text-secondary);
        padding-left: 15px;
      }

      /* 4. BUTTONS (Text Mode UI) */
      .dos-btn-primary, .ds-btn-primary {
        background: #000000 !important;
        color: var(--text-primary) !important;
        border: 2px solid var(--text-primary) !important;
        border-radius: 0 !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        text-transform: uppercase;
        padding: 8px 24px !important;
        box-shadow: 4px 4px 0 var(--text-secondary) !important;
        transition: none !important;
      }
      /* Hover: Invert Colors */
      .dos-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--text-primary) !important;
        color: #000000 !important;
        box-shadow: none !important;
        text-shadow: none;
        transform: translate(4px, 4px);
      }
      /* Brackets */
      .dos-btn-primary::before { content: '['; margin-right: 5px; }
      .dos-btn-primary::after { content: ']'; margin-left: 5px; }

      .dos-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: var(--text-secondary) !important;
        border: 1px dashed var(--text-secondary) !important;
        border-radius: 0 !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        text-transform: uppercase;
      }
      .dos-btn-secondary:hover, .ds-btn-ghost:hover {
        border-style: solid !important;
        color: var(--text-primary) !important;
        border-color: var(--text-primary) !important;
      }

      /* 5. NAVIGATION (Top Bar Menu) */
      .dos-nav, .ds-navbar {
        border: none;
        border-bottom: 2px solid var(--text-primary);
        margin: 0 !important;
        width: 100% !important;
        padding: 10px 20px;
        background: #000;
        z-index: 100;
      }
      .ds-logo {
        font-weight: normal;
        letter-spacing: 2px;
      }
      .ds-logo::before {
        content: 'C:\\>';
        margin-right: 10px;
      }
      .ds-nav-links span {
        padding: 0 15px;
        cursor: pointer;
      }
      .ds-nav-links span:hover {
        background: var(--text-primary);
        color: #000;
        text-shadow: none;
      }

      /* 6. INPUTS (Command Line) */
      .dos-input, .ds-input {
        background: #000 !important;
        border: none !important;
        border-bottom: 2px solid var(--text-secondary) !important;
        border-radius: 0 !important;
        color: var(--text-primary) !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        padding-left: 30px !important;
        box-shadow: none !important;
      }
      .ds-input:focus {
        border-bottom-color: var(--text-primary) !important;
        background: #0a0a0a !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        color: var(--text-primary);
        left: 0 !important;
        width: auto !important;
        height: auto !important;
        content: '>';
        font-weight: bold;
        box-shadow: none !important;
      }
      /* Fake cursor in empty inputs via placeholder logic isn't easy in CSS alone, 
         but we can animate the border bottom on focus */
      .ds-input:focus {
         animation: pulse-border 1s infinite;
      }
      @keyframes pulse-border {
         0%, 100% { border-bottom-color: var(--text-primary); }
         50% { border-bottom-color: transparent; }
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px dashed var(--text-secondary);
        border-bottom: 1px dashed var(--text-secondary);
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid var(--text-secondary);
        padding: 20px;
      }
      .ds-stats .text-3xl {
        color: var(--text-primary);
        font-family: 'VT323', monospace;
      }
      .ds-stats span:first-child {
        color: var(--text-secondary);
        font-size: 1rem;
      }

      /* 8. TABLE (ASCII Grid) */
      .ds-table-container {
        background: #000 !important;
        border: 2px solid var(--text-primary) !important;
        border-radius: 0 !important;
        box-shadow: 4px 4px 0 var(--text-secondary) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid var(--text-secondary) !important;
      }
      .ds-table-container > div:first-child {
        background: var(--text-primary);
        color: #000;
        text-shadow: none;
        font-weight: bold;
        border-bottom: 2px solid #000 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: var(--text-secondary) !important;
        color: #000 !important;
        text-shadow: none;
      }
      /* Force children color change on hover */
      .ds-table-container > div:not(:first-child):hover * {
         color: #000 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid currentColor;
        color: var(--text-primary) !important;
        border-radius: 0;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        background: #000 !important;
        border: 2px solid var(--text-secondary) !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 4px double var(--text-primary) !important;
        transform: scale(1.02);
      }
      .ds-card:nth-child(2) .ds-card-title {
        text-decoration: underline;
        text-decoration-style: double;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--text-primary);
        color: #000;
        text-shadow: none;
        border: 2px solid #000;
        top: -15px; right: 10px;
        font-weight: bold;
      }
      
      .ds-card button {
         width: 100%;
      }

      /* 10. BADGE */
      .dos-badge, .ds-badge {
        background: #000 !important;
        color: var(--text-primary) !important;
        border: 1px solid var(--text-primary);
        border-radius: 0 !important;
        padding: 2px 8px;
        box-shadow: none !important;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 2px solid var(--text-primary) !important;
        margin-top: 40px;
      }
      .ds-footer .ds-logo::before {
         content: 'END OF LINE';
         margin-right: 0;
      }
    `
  }
};
