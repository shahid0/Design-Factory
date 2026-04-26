
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'particle-data')!;

export const particleData: StyleCartridge = {
  id: 'particle-data',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#0A0A0A',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#888888',
      '--accent-color': '#00FF00', // Data Green
      '--border-radius': '4px',
      '--font-display': '"Source Code Pro", monospace',
    },
    elementClasses: {
      stage: 'particle-stage',
      navbar: 'particle-nav',
      container: 'particle-panel',
      buttonPrimary: 'particle-btn-primary',
      buttonSecondary: 'particle-btn-secondary',
      input: 'particle-input',
      badge: 'particle-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');

      .particle-stage {
        background-color: #000;
        color: #FFF;
        font-family: 'Source Code Pro', monospace;
        overflow-x: hidden;
      }

      /* Moving Dots Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: radial-gradient(#00FF00 1px, transparent 1px);
        background-size: 40px 40px;
        opacity: 0.2;
        animation: particles 20s linear infinite;
        z-index: -1;
      }
      
      @keyframes particles {
        0% { background-position: 0 0; }
        100% { background-position: 40px 40px; }
      }

      /* Constellation Lines */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .05) 25%, rgba(0, 255, 0, .05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .05) 75%, rgba(0, 255, 0, .05) 76%, transparent 77%, transparent);
        background-size: 100px 100px;
        z-index: -1;
      }

      /* 2. CONTAINERS (HUD) */
      .particle-panel, .ds-panel, .ds-card, .particle-nav {
        background: rgba(0, 20, 0, 0.8);
        border: 1px solid #00FF00;
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.1);
        padding: 20px;
        margin: 20px;
        position: relative;
      }
      
      /* Animated Corners */
      .particle-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -2px; left: -2px; width: 10px; height: 10px;
        border-top: 2px solid #FFF;
        border-left: 2px solid #FFF;
        animation: corner-flash 2s infinite;
      }
      .particle-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        bottom: -2px; right: -2px; width: 10px; height: 10px;
        border-bottom: 2px solid #FFF;
        border-right: 2px solid #FFF;
        animation: corner-flash 2s infinite 1s;
      }
      
      @keyframes corner-flash {
         0%, 100% { opacity: 1; }
         50% { opacity: 0.2; }
      }

      .ds-panel:hover, .ds-card:hover {
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        background: rgba(0, 30, 0, 0.9);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3.5rem;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        color: #00FF00;
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 5px #00FF00;
      }
      .ds-hero-text {
        color: #00AA00;
        border-left: 2px solid #00FF00;
        padding-left: 15px;
      }

      /* 4. BUTTONS (Data Points) */
      .particle-btn-primary, .ds-btn-primary {
        background: #00FF00 !important;
        color: #000 !important;
        border: none !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        padding: 10px 30px !important;
        border-radius: 2px !important;
        transition: all 0.2s !important;
      }
      .particle-btn-primary:hover, .ds-btn-primary:hover {
        box-shadow: 0 0 15px #00FF00 !important;
        letter-spacing: 1px;
      }

      .particle-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #00FF00 !important;
        border: 1px solid #00FF00 !important;
        border-radius: 2px !important;
        font-weight: 700 !important;
      }
      .particle-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(0, 255, 0, 0.1) !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .particle-nav, .ds-navbar {
        background: #000;
        border-bottom: 1px solid #00FF00;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 1px;
      }
      .ds-nav-links span {
        color: #888;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        color: #00FF00;
        text-shadow: 0 0 5px #00FF00;
      }

      /* 6. INPUTS */
      .particle-input, .ds-input {
        background: #000 !important;
        border: 1px solid #00FF00 !important;
        border-radius: 2px !important;
        color: #00FF00 !important;
        padding-left: 15px !important;
      }
      .ds-input:focus {
        box-shadow: 0 0 10px rgba(0, 255, 0, 0.3) !important;
      }
      .ds-input-decorator {
        background: #00FF00 !important;
        width: 8px !important; height: 8px !important;
        border-radius: 50%;
        left: auto !important; right: 15px !important;
        animation: blink 1s infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(0,255,0,0.05);
        border: 1px solid #00FF00;
      }
      .ds-stats .text-3xl {
        color: #00FF00;
        text-shadow: 0 0 5px #00FF00;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #00FF00 !important;
        background: #000 !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(0, 255, 0, 0.2);
        color: #00FF00;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(0, 255, 0, 0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #00FF00;
        color: #00FF00 !important;
        border-radius: 0;
        padding: 2px 8px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #0A0A0A !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #00FF00 !important;
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.2) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #00FF00;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00FF00;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .particle-badge, .ds-badge {
        background: rgba(0, 255, 0, 0.1) !important;
        color: #00FF00 !important;
        border: 1px solid #00FF00;
        border-radius: 2px;
        padding: 4px 10px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #00FF00 !important;
        margin-top: 80px;
      }
    `
  }
};
