
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === '8bit')!;

export const eightBitPixel: StyleCartridge = {
  id: '8bit',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#212529', // Dark Arcade Grey
      '--bg-layer-2': '#000000', // Void
      '--text-primary': '#FFFFFF', // White
      '--text-secondary': '#9CA3AF', // Grey
      '--accent-color': '#FF0055', // Neon Red
      '--border-radius': '0px',
      '--font-display': '"VT323", monospace',
    },
    elementClasses: {
      stage: 'pixel-stage',
      navbar: 'pixel-nav',
      container: 'pixel-container',
      buttonPrimary: 'pixel-btn-primary',
      buttonSecondary: 'pixel-btn-secondary',
      input: 'pixel-input',
      badge: 'pixel-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      /* RESET & BASE */
      .ds-page-root {
        font-family: 'VT323', monospace;
        image-rendering: pixelated;
        text-transform: uppercase;
        line-height: 1.4;
        letter-spacing: 1px;
        font-size: 18px;
      }

      /* SCANLINES */
      .ds-deco-layer::before {
        content: " ";
        display: block;
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.03), rgba(0, 255, 0, 0.01), rgba(0, 0, 255, 0.03));
        z-index: 999;
        background-size: 100% 4px, 6px 100%;
        pointer-events: none;
      }

      /* REVISED BORDER STRATEGY: Simple Thick Lines (NES Style) */
      .pixel-container, .ds-panel, .ds-card, .ds-navbar {
        border: 4px solid #fff;
        box-shadow: 8px 8px 0px rgba(0,0,0,0.5);
        background: #000;
        color: #fff;
        border-radius: 0;
        position: relative;
        margin: 4px;
      }

      /* STAGE BACKGROUND */
      .pixel-stage {
        background-color: #212529;
        background-image:
          linear-gradient(45deg, #2a2e33 25%, transparent 25%, transparent 75%, #2a2e33 75%, #2a2e33),
          linear-gradient(45deg, #2a2e33 25%, transparent 25%, transparent 75%, #2a2e33 75%, #2a2e33);
        background-position: 0 0, 10px 10px;
        background-size: 20px 20px;
      }

      /* HERO TEXT */
      .ds-hero-title {
        font-size: 3.5rem;
        line-height: 1;
        text-shadow: 4px 4px 0px #000;
        color: #fff;
        margin-bottom: 2rem;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 4px 4px 0px #000;
      }
      .ds-hero-text {
         font-size: 1.2rem;
         background: #000;
         color: #0f0;
         padding: 1rem;
         border: 2px solid #fff;
         box-shadow: 6px 6px 0px rgba(0,0,0,0.5);
         text-transform: none;
         font-weight: 400;
         line-height: 1.4;
      }
      
      /* SECTION TITLES */
      .ds-section-title {
         color: #fff !important;
         text-shadow: 4px 4px 0 #000;
         font-size: 2.5rem;
      }
      .ds-section-subtitle {
         color: #ccc !important;
         text-transform: none;
         font-size: 1.2rem;
      }

      /* NAVIGATION */
      .pixel-nav, .ds-navbar {
        background: #000;
        color: #fff;
        border: 4px solid #fff;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 8px 0 rgba(0,0,0,0.5);
      }
      .ds-logo {
        color: var(--accent-color);
        text-shadow: 2px 2px 0 #fff;
        font-size: 1.5rem;
      }
      .ds-nav-links span {
        font-size: 1.2rem;
        color: #fff;
      }
      .ds-nav-links span:hover {
        background: #fff;
        color: #000;
        box-shadow: 2px 2px 0px #000;
      }

      /* 5. BUTTONS (NES Style) */
      .pixel-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #fff !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.5rem !important;
        padding: 8px 24px !important;
        border: 4px solid #fff !important;
        border-radius: 0 !important;
        box-shadow: 6px 6px 0px #000 !important;
        transition: all 0.1s !important;
        text-shadow: 2px 2px 0px #000;
        position: relative;
      }
      
      .pixel-btn-primary:hover, .ds-btn-primary:hover {
        transform: translate(2px, 2px) !important;
        box-shadow: 4px 4px 0px #000 !important;
        background: #ff4d4d !important;
      }
      .pixel-btn-primary:active, .ds-btn-primary:active {
        transform: translate(6px, 6px) !important;
        box-shadow: none !important;
      }

      .pixel-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #3e3e3e !important;
        color: #fff !important;
        border: 4px solid #fff !important;
        border-radius: 0 !important;
        box-shadow: 6px 6px 0px #000 !important;
        font-size: 1.2rem !important;
        font-family: 'VT323', monospace !important;
      }
      .pixel-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #fff !important;
        color: #000 !important;
        text-shadow: none;
        transform: translate(2px, 2px);
        box-shadow: 4px 4px 0px #000 !important;
      }

      /* 6. INPUTS (Terminal) */
      .pixel-input, .ds-input {
        background: #000 !important;
        color: #0f0 !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        border: 4px solid #fff !important;
        border-radius: 0 !important;
        padding: 16px !important;
        box-shadow: 6px 6px 0px rgba(0,0,0,0.5) !important;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        outline: none;
      }
      .ds-input-decorator {
        background: var(--accent-color) !important;
        width: 12px !important;
        height: 12px !important;
        border-radius: 0 !important;
        animation: blink 1s step-end infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* 7. STATS (Scoreboard) */
      .ds-stats {
        background: #000 !important;
        border-top: 4px solid #fff;
        border-bottom: 4px solid #fff;
        color: #fff;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 2px dashed #333;
        padding: 20px;
        text-align: center;
      }
      .ds-stats .text-3xl {
        font-family: 'VT323', monospace;
        color: var(--accent-color);
        text-shadow: 2px 2px 0 #fff;
        font-size: 2rem !important;
        margin-top: 10px;
      }
      .ds-stats span:first-child {
        font-size: 1rem;
        color: #0f0;
      }

      /* 8. TABLE (High Scores) */
      .ds-table-container {
        background: #000 !important;
        border: 4px solid #fff !important;
        box-shadow: 8px 8px 0px rgba(0,0,0,0.5) !important;
      }
      .ds-table-container > div:first-child {
        background: var(--accent-color);
        color: #fff;
        border-bottom: 4px solid #fff !important;
        font-size: 1.2rem;
        text-shadow: 2px 2px 0 #000;
      }
      .ds-table-container > div:not(:first-child) {
        border-bottom: 2px dashed #333 !important;
        color: #fff;
        font-size: 1.1rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #fff !important;
        color: #000 !important;
      }
      /* Status Badge */
      .ds-table-container span {
        background: #000 !important;
        border: 2px solid #fff;
        color: #0f0 !important;
        border-radius: 0;
        font-size: 1rem;
      }

      /* 9. PRICING CARDS (Select Player) */
      .ds-card {
        background: #fff !important;
        border: 4px solid #000 !important;
        box-shadow: 8px 8px 0px #000 !important;
        image-rendering: pixelated;
        position: relative;
        margin-top: 20px;
        color: #000 !important; /* Force black text on white cards */
      }
      /* FORCE TEXT COLOR OVERRIDE for Elements inside white cards */
      .ds-card h3, 
      .ds-card .text-4xl, 
      .ds-card li, 
      .ds-card span {
        color: #000 !important;
      }

      .ds-card:hover {
        transform: translate(-4px, -4px);
        box-shadow: 12px 12px 0px var(--accent-color) !important;
        background: #fff !important;
        z-index: 10;
        border-color: var(--accent-color) !important;
      }
      
      /* Card Title Divider */
      .ds-card h3 {
        font-size: 1.5rem;
        text-transform: uppercase;
        margin-bottom: 1rem;
        border-bottom: 4px solid #000;
        padding-bottom: 16px;
        display: block;
        width: 100%;
      }
      
      /* Popular Card (The "Selected" one - Inverted) */
      .ds-card.selected, .ds-card:nth-child(2) {
        background: #000 !important;
        border: 4px solid var(--accent-color) !important;
        box-shadow: 8px 8px 0px #fff !important;
        transform: scale(1.05);
        z-index: 5;
        color: #fff !important;
      }
      /* Reset text color for the dark card */
      .ds-card:nth-child(2) h3, 
      .ds-card:nth-child(2) .text-4xl, 
      .ds-card:nth-child(2) li,
      .ds-card:nth-child(2) span {
        color: #fff !important;
      }

      .ds-card:nth-child(2) h3 {
         border-bottom-color: var(--accent-color);
         color: var(--accent-color) !important;
         text-shadow: 2px 2px 0px #fff;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color) !important;
      }
      
      /* Popular Label (Floating) */
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #fff !important;
        font-size: 1rem;
        padding: 8px;
        border: 2px solid #fff;
        top: -20px; 
        right: 10px;
        box-shadow: 4px 4px 0px #000;
        animation: float 1s infinite steps(2);
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-4px); }
      }

      /* Card Buttons */
      .ds-card button {
        background: #ccc !important;
        color: #000 !important;
        border: 4px solid #000 !important;
        /* Beveled 3D look */
        box-shadow: inset -4px -4px 0px #999, inset 4px 4px 0px #fff !important; 
        border-radius: 0 !important;
        text-transform: uppercase;
        font-size: 1.2rem !important;
        font-family: 'VT323', monospace !important;
        font-weight: bold;
      }
      .ds-card button:hover {
        background: var(--accent-color) !important;
        color: #fff !important;
        box-shadow: inset -4px -4px 0px #b3003b, inset 4px 4px 0px #ff6699 !important;
        cursor: pointer;
      }
      
      /* Popular Card Button */
      .ds-card:nth-child(2) button {
         background: #fff !important;
         color: var(--accent-color) !important;
         border-color: var(--accent-color) !important;
         box-shadow: inset -4px -4px 0px #ccc, inset 4px 4px 0px #fff !important;
      }
      .ds-card:nth-child(2) button:hover {
         background: var(--accent-color) !important;
         color: #fff !important;
         border-color: #fff !important;
         box-shadow: inset -4px -4px 0px #b3003b, inset 4px 4px 0px #ff6699 !important;
      }

      /* 10. BADGE */
      .pixel-badge, .ds-badge {
        background: #000 !important;
        color: #fff !important;
        border: 2px solid #fff;
        font-size: 1rem !important;
        padding: 4px 8px;
        box-shadow: 2px 2px 0px rgba(0,0,0,0.5);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 4px solid #fff !important;
        color: #fff !important;
      }
      .ds-footer .ds-logo {
        color: #fff;
        text-shadow: none;
      }

      /* 12. TOGGLES (8-Bit Switch) */
      .mannequin-toggle-track {
        background: #000;
        border: 4px solid #fff;
        border-radius: 0;
        box-shadow: 4px 4px 0 #000;
      }
      .mannequin-toggle-track.active {
        background: var(--accent-color);
        border-color: #fff;
      }
      .mannequin-toggle-thumb {
        background: #fff;
        border-radius: 0;
        box-shadow: none;
        width: calc(1.5rem - 8px);
        height: calc(1.5rem - 8px);
        top: 0; left: 0;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         left: calc(100% - 1.5rem + 8px);
      }
    `
  }
};
