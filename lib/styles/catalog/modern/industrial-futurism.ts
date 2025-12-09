
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'industrial-futurism')!;

export const industrialFuturism: StyleCartridge = {
  id: 'industrial-futurism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F2F2F2', // Light Concrete
      '--bg-layer-2': '#FFFFFF', // White Structural
      '--text-primary': '#111111', // Black Ink
      '--text-secondary': '#666666', // Technical Grey
      '--accent-color': '#FF3300', // Safety Orange
      '--border-radius': '0px', // Strict
      '--font-display': '"JetBrains Mono", "Roboto Mono", monospace',
    },
    elementClasses: {
      stage: 'bg-[#F2F2F2] overflow-hidden',
      navbar: 'ind-nav',
      container: 'ind-panel',
      buttonPrimary: 'ind-btn-primary',
      buttonSecondary: 'ind-btn-secondary',
      input: 'ind-input',
      badge: 'ind-badge'
    },
    injectCss: `
      /* --- INDUSTRIAL FUTURISM ENGINE --- */

      /* 1. GRID FRAMEWORK */
      .ds-page-root {
        background-color: var(--bg-layer-1);
        color: var(--text-primary);
        font-family: 'Inter', sans-serif; /* Body font clean sans */
        /* Technical Grid Background */
        background-image: 
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
      }

      /* Ruler Markings on Edges */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        top: 0; left: 0; bottom: 0; width: 40px;
        background: 
          repeating-linear-gradient(to bottom, #ccc 0 1px, transparent 1px 10px),
          repeating-linear-gradient(to bottom, #999 0 1px, transparent 1px 50px);
        border-right: 1px solid #ccc;
        z-index: 0;
        pointer-events: none;
      }
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        top: 0; right: 0; bottom: 0; width: 1px;
        background: #ccc;
        z-index: 0;
      }

      /* 2. STRUCTURAL PANELS */
      .ind-panel, .ds-panel, .ds-card, .ind-nav {
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 0;
        box-shadow: 4px 4px 0px rgba(0,0,0,0.1);
        position: relative;
        transition: all 0.2s ease;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0px var(--accent-color);
        z-index: 10;
        border-color: #000;
      }
      
      /* Technical Corners */
      .ind-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        top: -1px; left: -1px;
        width: 10px; height: 10px;
        border-top: 3px solid var(--accent-color);
        border-left: 3px solid var(--accent-color);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: var(--font-display);
        text-transform: uppercase;
        letter-spacing: -2px;
        font-weight: 800;
      }
      .ds-hero-title span {
        background: var(--text-primary);
        color: var(--bg-layer-1);
        padding: 0 10px;
        /* No gradient */
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Inter', sans-serif;
        border-left: 4px solid var(--accent-color);
        padding-left: 20px;
        color: var(--text-secondary);
      }

      /* 4. BUTTONS (Mechanical) */
      .ind-btn-primary, .ds-btn-primary {
        background: var(--text-primary) !important;
        color: white !important;
        border-radius: 0 !important;
        font-family: var(--font-display) !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 1px solid transparent !important;
        position: relative;
        padding: 12px 30px !important;
        transition: all 0.1s;
      }
      .ind-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
        box-shadow: 2px 2px 0px black;
        transform: translate(-1px, -1px);
      }
      .ind-btn-primary:active, .ds-btn-primary:active {
        transform: translate(1px, 1px);
        box-shadow: none;
      }

      .ind-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: white !important;
        border: 1px solid #000 !important;
        color: #000 !important;
        border-radius: 0 !important;
        font-family: var(--font-display) !important;
        text-transform: uppercase;
        font-size: 12px !important;
      }
      .ind-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #f0f0f0 !important;
        box-shadow: 2px 2px 0px #000;
      }

      /* 5. NAVIGATION (Top Bar) */
      .ind-nav, .ds-navbar {
        border-bottom: 2px solid #000;
        background: #fff;
        margin: 0 !important;
        width: 100% !important;
        padding-left: 60px; /* Clear ruler */
      }
      .ds-logo {
        font-family: var(--font-display);
        font-weight: 700;
        letter-spacing: -1px;
        border: 2px solid #000;
        padding: 4px 8px;
        background: var(--accent-color);
        color: white;
      }
      .ds-nav-links span {
        font-family: var(--font-display);
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        background: #000;
        color: #fff;
      }

      /* 6. INPUTS (Technical Field) */
      .ind-input, .ds-input {
        background: #F8F8F8 !important;
        border: 1px solid #999 !important;
        border-radius: 0 !important;
        font-family: var(--font-display) !important;
        font-size: 13px !important;
        color: #000 !important;
        padding-left: 40px !important;
      }
      .ds-input:focus {
        background: #FFF !important;
        border-color: #000 !important;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.1) !important;
      }
      .ds-input-decorator {
        background: #000 !important;
        width: 6px !important;
        height: 6px !important;
        border-radius: 0 !important;
        left: 16px !important;
      }

      /* 7. STATS (Data Modules) */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #ccc;
        padding: 24px;
        border-radius: 0;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-family: var(--font-display);
        font-weight: 700;
      }
      .ds-stats span:first-child {
        font-family: 'Inter', sans-serif;
        font-size: 10px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: var(--text-secondary);
      }

      /* 8. TABLE (Manifest) */
      .ds-table-container {
        background: white !important;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
        box-shadow: 4px 4px 0px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div {
         border-bottom: 1px solid #eee !important;
      }
      .ds-table-container > div:first-child {
         background: #eee;
         border-bottom: 2px solid #000 !important;
         font-family: var(--font-display);
         text-transform: uppercase;
         letter-spacing: 1px;
         font-size: 11px;
         color: #000;
      }
      .ds-table-container > div:not(:first-child):hover {
         background: rgba(255, 51, 0, 0.05) !important;
      }
      .ds-table-container span {
         background: #000 !important;
         color: #fff !important;
         border-radius: 0;
         font-family: var(--font-display);
         font-size: 10px;
         padding: 2px 6px;
         border: none;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
         border: 2px solid var(--accent-color) !important;
         box-shadow: 8px 8px 0px rgba(0,0,0,0.1) !important;
      }
      .ds-card:nth-child(2) .absolute {
         background: var(--accent-color);
         color: white;
         font-family: var(--font-display);
         text-transform: uppercase;
         letter-spacing: 1px;
         font-size: 10px;
         border-radius: 0;
         right: 10px; top: -10px;
      }
      .ds-card button {
         border-radius: 0 !important;
      }

      /* 10. BADGE */
      .ind-badge, .ds-badge {
         background: #000 !important;
         color: #FFF !important;
         border-radius: 0 !important;
         font-family: var(--font-display);
         font-size: 10px !important;
         letter-spacing: 1px;
         padding: 4px 8px;
         box-shadow: none !important;
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #e5e5e5 !important;
         border-top: 1px solid #000 !important;
      }
    `
  }
};
