
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'synthwave')!;

export const synthwave: StyleCartridge = {
  id: 'synthwave',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#2b213a', // Deep Purple
      '--bg-layer-2': '#050510', // Darker Void
      '--text-primary': '#00f3ff', // Cyan
      '--text-secondary': '#ff00ff', // Magenta
      '--accent-color': '#f9c80e', // Sun Yellow
      '--border-radius': '0px',
      '--font-display': '"Orbitron", "Exo 2", sans-serif',
    },
    elementClasses: {
      stage: 'synth-stage',
      navbar: 'synth-nav',
      container: 'synth-panel',
      buttonPrimary: 'synth-btn-primary',
      buttonSecondary: 'synth-btn-secondary',
      input: 'synth-input',
      badge: 'synth-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Exo+2:ital,wght@0,400;0,700;1,900&display=swap');

      /* --- SYNTHWAVE OUTRUN ENGINE --- */

      /* 1. THE GRID & HORIZON */
      .synth-stage {
        background: linear-gradient(180deg, #240046 0%, #10002b 50%, #2b213a 100%);
        color: white;
        font-family: 'Exo 2', sans-serif;
        overflow-x: hidden;
        perspective: 1000px;
      }

      /* Retro Sun */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 400px;
        height: 400px;
        background: linear-gradient(to top, #ff00ff, #ffbd00);
        border-radius: 50%;
        box-shadow: 0 0 100px rgba(255, 0, 255, 0.5);
        mask-image: linear-gradient(to bottom, black 50%, transparent 50%, transparent 55%, black 55%, black 60%, transparent 60%, transparent 65%, black 65%);
        -webkit-mask-image: repeating-linear-gradient(black, black 20px, transparent 20px, transparent 30px);
        z-index: -1;
      }

      /* Perspective Grid Floor */
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        bottom: -50%;
        left: -50%;
        width: 200%;
        height: 100%;
        background-image: 
          linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .5) 25%, rgba(255, 0, 255, .5) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .5) 75%, rgba(255, 0, 255, .5) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .5) 25%, rgba(255, 0, 255, .5) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .5) 75%, rgba(255, 0, 255, .5) 76%, transparent 77%, transparent);
        background-size: 50px 50px;
        transform: rotateX(60deg);
        animation: synth-grid 4s linear infinite;
        z-index: -1;
        box-shadow: 0 -50px 100px #240046; /* Fade to horizon */
      }

      @keyframes synth-grid {
        0% { transform: rotateX(60deg) translateY(0); }
        100% { transform: rotateX(60deg) translateY(50px); }
      }

      /* 2. CHROME PANELS */
      .synth-panel, .ds-panel, .ds-card, .synth-nav {
        background: rgba(16, 0, 43, 0.8);
        border: 2px solid #00f3ff;
        box-shadow: 
          0 0 10px rgba(0, 243, 255, 0.3),
          inset 0 0 20px rgba(255, 0, 255, 0.1);
        backdrop-filter: blur(10px);
        border-radius: 0;
        transform: skewX(-5deg);
        position: relative;
      }
      
      /* Reset Skew for Content */
      .synth-panel > *, .ds-panel > *, .ds-card > * {
        transform: skewX(5deg);
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: #ff00ff;
        box-shadow: 0 0 20px rgba(255, 0, 255, 0.5);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY (Chrome) */
      .ds-hero-title {
        font-family: 'Orbitron', sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        font-style: italic;
        font-size: 4rem;
        background: linear-gradient(to bottom, #00f3ff 0%, #ffffff 50%, #ff00ff 51%, #240046 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px rgba(255,255,255,0.5);
        filter: drop-shadow(4px 4px 0px rgba(0,0,0,0.5));
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        font-family: 'Exo 2', sans-serif;
        color: #f9c80e;
        text-shadow: 0 0 10px #f9c80e;
        -webkit-text-fill-color: initial;
        -webkit-text-stroke: 0;
        background: none;
        display: block;
        font-size: 0.5em;
        letter-spacing: 10px;
        margin-top: 10px;
      }
      .ds-hero-text {
        color: #00f3ff;
        text-shadow: 0 0 5px #00f3ff;
        font-size: 1.2rem;
      }

      /* 4. BUTTONS (Neon) */
      .synth-btn-primary, .ds-btn-primary {
        background: transparent !important;
        color: white !important;
        border: 2px solid #ff00ff !important;
        box-shadow: 
          0 0 10px #ff00ff,
          inset 0 0 10px #ff00ff !important;
        font-family: 'Orbitron', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 700 !important;
        transform: skewX(-10deg);
        padding: 10px 30px !important;
        border-radius: 0 !important;
        transition: all 0.2s !important;
      }
      /* Unskew Text */
      .synth-btn-primary span, .ds-btn-primary span {
         transform: skewX(10deg);
         display: inline-block;
      }
      
      .synth-btn-primary:hover, .ds-btn-primary:hover {
        background: #ff00ff !important;
        color: #000 !important;
        box-shadow: 0 0 30px #ff00ff !important;
      }

      .synth-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #00f3ff !important;
        border: 1px solid #00f3ff !important;
        transform: skewX(-10deg);
        border-radius: 0 !important;
        text-transform: uppercase;
        font-family: 'Exo 2', sans-serif;
        font-weight: bold;
      }
      .synth-btn-secondary:hover, .ds-btn-secondary:hover {
        box-shadow: 0 0 15px #00f3ff;
        text-shadow: 0 0 5px #00f3ff;
      }

      /* 5. NAVIGATION */
      .synth-nav, .ds-navbar {
        background: rgba(0,0,0,0.8);
        border-bottom: 2px solid #f9c80e;
        box-shadow: 0 5px 20px rgba(249, 200, 14, 0.2);
        margin: 0 !important;
        width: 100% !important;
        border-radius: 0 !important;
        transform: skewX(0deg); /* Nav stays straight */
      }
      .ds-logo {
        font-family: 'Orbitron', sans-serif;
        color: #f9c80e;
        text-shadow: 2px 2px 0 #ff00ff;
        font-style: italic;
      }
      .ds-nav-links span {
        color: #00f3ff;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .ds-nav-links span:hover {
        color: #ff00ff;
        text-shadow: 0 0 8px #ff00ff;
      }

      /* 6. INPUTS */
      .synth-input, .ds-input {
        background: rgba(0,0,0,0.5) !important;
        border: 2px solid #00f3ff !important;
        border-radius: 0 !important;
        color: #ff00ff !important;
        font-family: 'Exo 2', sans-serif;
        text-transform: uppercase;
        padding-left: 20px !important;
        box-shadow: inset 0 0 10px rgba(0, 243, 255, 0.2);
      }
      .ds-input:focus {
        border-color: #ff00ff !important;
        box-shadow: 0 0 15px #ff00ff, inset 0 0 10px #ff00ff !important;
      }
      .ds-input-decorator {
        background: #f9c80e !important;
        border-radius: 0 !important;
        transform: rotate(45deg);
        box-shadow: 0 0 10px #f9c80e;
        left: auto !important;
        right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #ff00ff;
        border-bottom: 1px solid #ff00ff;
        background: linear-gradient(90deg, transparent, rgba(255,0,255,0.1), transparent) !important;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid rgba(0, 243, 255, 0.3);
        box-shadow: none;
        border-radius: 0;
        transform: none;
      }
      .ds-stats > div > div > * {
         transform: none;
      }
      .ds-stats .text-3xl {
        font-family: 'Orbitron', sans-serif;
        color: #f9c80e;
        text-shadow: 0 0 10px #f9c80e;
      }
      .ds-stats span:first-child {
        color: #00f3ff;
        text-transform: uppercase;
        letter-spacing: 2px;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: rgba(0,0,0,0.7) !important;
        border: 1px solid #ff00ff !important;
        border-radius: 0 !important;
        transform: none !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255, 0, 255, 0.2);
        color: #ff00ff;
        font-family: 'Orbitron', sans-serif;
        border-bottom: 1px solid #ff00ff !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(0, 243, 255, 0.2) !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #00f3ff;
        color: #00f3ff !important;
        box-shadow: 0 0 5px #00f3ff;
        border-radius: 0;
      }

      /* 9. PRICING CARDS */
      /* Popular Card */
      .ds-card:nth-child(2) {
        border-color: #f9c80e !important;
        box-shadow: 0 0 20px #f9c80e !important;
        z-index: 20;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #f9c80e;
        text-shadow: 0 0 10px #f9c80e;
      }
      .ds-card:nth-child(2) .absolute {
        background: #f9c80e;
        color: black;
        font-weight: 900;
        font-family: 'Orbitron', sans-serif;
        top: -15px; right: -15px;
        transform: skewX(-10deg);
        border: 2px solid white;
      }
      
      .ds-card button {
         border-radius: 0 !important;
         transform: skewX(-10deg);
      }

      /* 10. BADGE */
      .synth-badge, .ds-badge {
        background: transparent !important;
        border: 1px solid #00f3ff;
        color: #00f3ff !important;
        box-shadow: 0 0 5px #00f3ff;
        border-radius: 0 !important;
        padding: 4px 10px;
        transform: skewX(-10deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #10002b !important;
        border-top: 2px solid #00f3ff !important;
        margin-top: 60px;
      }
    `
  }
};
