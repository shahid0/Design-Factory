
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'acid-graphix')!;

export const acidGraphix: StyleCartridge = {
  id: 'acid-graphix',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#111',
      '--bg-layer-2': '#000',
      '--text-primary': '#B5B5B5', // Chrome
      '--text-secondary': '#666',
      '--accent-color': '#CCFF00', // Acid Green
      '--border-radius': '0px',
      '--font-display': '"Planet Kosmos", "Arial Black", sans-serif',
    },
    elementClasses: {
      stage: 'acid-stage',
      navbar: 'acid-nav',
      container: 'acid-panel',
      buttonPrimary: 'acid-btn-primary',
      buttonSecondary: 'acid-btn-secondary',
      input: 'acid-input',
      badge: 'acid-badge'
    },
    injectCss: `
      /* Acid Graphix - 90s Rave Flyer Style */
      @import url('https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap');

      .acid-stage {
        background: #050505;
        color: #DDD;
        font-family: 'Syncopate', sans-serif;
        overflow-x: hidden;
      }

      /* Liquid Chrome BG */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: repeating-linear-gradient(45deg, #111, #111 10px, #222 10px, #222 20px);
        opacity: 0.5;
        z-index: -1;
      }
      
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; left: 30%;
        width: 400px; height: 400px;
        background: radial-gradient(circle, #CCFF00 0%, transparent 60%);
        mix-blend-mode: exclusion;
        filter: blur(80px);
        animation: acid-pulse 5s infinite alternate;
        z-index: -1;
      }

      @keyframes acid-pulse {
        0% { transform: scale(1); opacity: 0.5; }
        100% { transform: scale(1.5); opacity: 0.8; }
      }

      /* Distorted Panels */
      .acid-panel, .ds-panel, .ds-card, .acid-nav {
        background: #000;
        border: 1px solid #555;
        position: relative;
        padding: 20px;
      }
      
      /* Chrome Text Effect */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        background: linear-gradient(to bottom, #FFF 0%, #888 50%, #000 51%, #FFF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 4rem;
        letter-spacing: -2px;
        transform: scaleY(1.5);
        margin-bottom: 40px;
      }
      .ds-hero-title span {
        color: #CCFF00;
        background: none;
        -webkit-text-fill-color: initial;
        display: block;
        transform: skewX(-20deg);
      }

      /* Buttons */
      .acid-btn-primary, .ds-btn-primary {
        background: #CCFF00 !important;
        color: #000 !important;
        border-radius: 50% !important; /* Oval/Pill */
        padding: 15px 40px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: none !important;
        box-shadow: 0 0 20px #CCFF00 !important;
      }
      .acid-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1) rotate(5deg);
      }

      .acid-btn-secondary, .ds-btn-secondary {
        background: transparent !important;
        color: #FFF !important;
        border: 1px solid #FFF !important;
        border-radius: 50px !important;
      }

      /* Inputs */
      .acid-input, .ds-input {
        background: transparent !important;
        border: 2px solid #CCFF00 !important;
        border-radius: 0 !important;
        color: #CCFF00 !important;
        font-family: 'Courier New', monospace;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        border: 1px solid #333;
        background: #111;
        transform: skewX(-10deg);
      }
      .ds-stats > div > div > * {
        transform: skewX(10deg);
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 2px solid #CCFF00 !important;
        box-shadow: 10px 10px 0 #333 !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #CCFF00;
        color: #000;
        font-weight: 700;
        transform: rotate(90deg);
        top: 20px; right: -20px;
        padding: 5px 20px;
      }

      /* Footer */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #333;
        margin-top: 60px;
      }
    `
  }
};
