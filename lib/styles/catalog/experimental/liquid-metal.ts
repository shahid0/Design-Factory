
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'liquid-metal')!;

export const liquidMetal: StyleCartridge = {
  id: 'liquid-metal',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#111111',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#A0A0A0',
      '--accent-color': '#C0C0C0', // Silver
      '--border-radius': '20px',
      '--font-display': '"Rajdhani", sans-serif',
    },
    elementClasses: {
      stage: 'liquid-stage',
      navbar: 'liquid-nav',
      container: 'liquid-panel',
      buttonPrimary: 'liquid-btn-primary',
      buttonSecondary: 'liquid-btn-secondary',
      input: 'liquid-input',
      badge: 'liquid-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap');

      .liquid-stage {
        background: #000;
        color: #fff;
        font-family: 'Rajdhani', sans-serif;
        overflow-x: hidden;
      }

      /* Liquid background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: -20%;
        background: radial-gradient(circle at 50% 50%, #333 0%, #000 70%);
        filter: contrast(150%) brightness(150%);
        z-index: -2;
      }
      
      /* Molten blobs */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; left: 20%;
        width: 400px; height: 400px;
        background: linear-gradient(135deg, #Silver, #888, #444);
        border-radius: 50%;
        filter: blur(40px);
        opacity: 0.4;
        animation: molten 10s infinite alternate;
        z-index: -1;
      }
      
      @keyframes molten {
        0% { transform: scale(1) translate(0,0); border-radius: 50%; }
        50% { transform: scale(1.1) translate(20px, -20px); border-radius: 40% 60% 70% 30% / 50%; }
        100% { transform: scale(1) translate(0,0); border-radius: 50%; }
      }

      /* Panels (Mercury) */
      .liquid-panel, .ds-panel, .ds-card, .liquid-nav {
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 20px;
        box-shadow: 
          inset 0 0 20px rgba(255,255,255,0.1),
          0 10px 30px rgba(0,0,0,0.5);
        position: relative;
        overflow: hidden;
      }
      
      /* Liquid reflection */
      .liquid-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -50%; left: -50%; width: 200%; height: 200%;
        background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2), transparent 50%);
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
      }
      .liquid-panel:hover::before, .ds-panel:hover::before, .ds-card:hover::before {
        opacity: 1;
      }

      /* Typography */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        background: linear-gradient(to bottom, #FFF, #888, #FFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 0 10px rgba(255,255,255,0.3));
      }
      .ds-hero-title span {
        -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        color: transparent;
        background: none;
      }

      /* Buttons (Quicksilver) */
      .liquid-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #E0E0E0 0%, #A0A0A0 50%, #404040 100%) !important;
        color: #000 !important;
        border-radius: 50px !important;
        border: 1px solid rgba(255,255,255,0.5) !important;
        padding: 12px 30px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        box-shadow: 
          0 5px 15px rgba(255,255,255,0.1),
          inset 0 0 10px rgba(255,255,255,0.5) !important;
        transition: transform 0.2s !important;
      }
      .liquid-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05);
        filter: brightness(1.2);
      }

      .liquid-btn-secondary, .ds-btn-secondary {
        background: transparent !important;
        border: 1px solid #888 !important;
        color: #CCC !important;
        border-radius: 50px !important;
      }
      .liquid-btn-secondary:hover {
        border-color: #FFF !important;
        color: #FFF !important;
        box-shadow: 0 0 10px rgba(255,255,255,0.2);
      }

      /* Inputs */
      .liquid-input, .ds-input {
        background: rgba(255,255,255,0.05) !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 10px !important;
        color: #FFF !important;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: rgba(255,255,255,0.1) !important;
        border-color: #FFF !important;
        box-shadow: 0 0 15px rgba(255,255,255,0.2) !important;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: linear-gradient(180deg, rgba(255,255,255,0.05), transparent);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 10px;
      }
      .ds-stats .text-3xl {
        background: linear-gradient(to bottom, #FFF, #AAA);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 2px solid #FFF !important;
        background: linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.5)) !important;
        box-shadow: 0 0 30px rgba(255,255,255,0.1) !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-weight: 700;
      }
      
      /* 10. TOGGLES (Droplet) */
      .mannequin-toggle-track {
        background: #333;
        box-shadow: inset 0 0 5px rgba(0,0,0,0.8);
        border: 1px solid #555;
        border-radius: 50px;
      }
      .mannequin-toggle-track.active {
        background: #666;
        box-shadow: inset 0 0 10px rgba(255,255,255,0.2);
        border-color: #AAA;
      }
      .mannequin-toggle-thumb {
        background: radial-gradient(circle at 30% 30%, #FFF, #AAA);
        box-shadow: 0 2px 5px rgba(0,0,0,0.5);
      }

      /* Footer */
      .ds-footer {
        background: #050505 !important;
        border-top: 1px solid #333 !important;
      }
    `
  }
};
