
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'vaporwave')!;

export const vaporwave: StyleCartridge = {
  id: 'vaporwave',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#240046', // Deep Indigo
      '--bg-layer-2': '#E0E0E0', // Windows 95 Grey (Tinted)
      '--text-primary': '#00F0FF', // Cyan
      '--text-secondary': '#FF00FF', // Magenta
      '--accent-color': '#FF9E00', // Sunset Yellow
      '--border-radius': '0px',
      '--font-display': '"VT323", monospace',
    },
    elementClasses: {
      stage: 'vapor-stage',
      navbar: 'vapor-nav',
      container: 'vapor-win',
      buttonPrimary: 'vapor-btn-primary',
      buttonSecondary: 'vapor-btn-secondary',
      input: 'vapor-input',
      badge: 'vapor-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Mr+Dafoe&family=VT323&display=swap');

      /* --- A E S T H E T I C   E N G I N E --- */

      /* 1. SCENE COMPOSITION */
      .vapor-stage {
        background-color: #240046;
        background: linear-gradient(180deg, #10002b 0%, #240046 60%, #3c096c 100%);
        position: relative;
        font-family: 'VT323', monospace;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* The Retro Sun */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
        width: 300px;
        height: 300px;
        border-radius: 50%;
        background: linear-gradient(to bottom, #FF9E00, #FF00FF);
        box-shadow: 0 0 50px rgba(255, 0, 255, 0.6);
        /* Blinds effect using mask */
        -webkit-mask-image: repeating-linear-gradient(black, black 10px, transparent 10px, transparent 14px);
        mask-image: repeating-linear-gradient(black, black 10px, transparent 10px, transparent 14px);
        z-index: 0;
        pointer-events: none;
      }

      /* The Perspective Grid */
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        bottom: -25%;
        left: -50%;
        width: 200%;
        height: 60%;
        background-image: 
          linear-gradient(0deg, transparent 24%, rgba(0, 240, 255, 0.3) 25%, rgba(0, 240, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.3) 75%, rgba(0, 240, 255, 0.3) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(0, 240, 255, 0.3) 25%, rgba(0, 240, 255, 0.3) 26%, transparent 27%, transparent 74%, rgba(0, 240, 255, 0.3) 75%, rgba(0, 240, 255, 0.3) 76%, transparent 77%, transparent);
        background-size: 60px 60px;
        transform: perspective(300px) rotateX(60deg);
        animation: vapor-grid 10s linear infinite;
        z-index: 0;
        pointer-events: none;
      }

      @keyframes vapor-grid {
        0% { background-position: 0 0; }
        100% { background-position: 0 60px; }
      }

      /* 2. WINDOWS 95 CONTAINERS */
      .vapor-win, .ds-panel, .ds-card, .vapor-nav {
        background: rgba(224, 224, 224, 0.85); /* Win95 Grey with opacity */
        backdrop-filter: blur(4px);
        border: 2px solid #dfdfdf;
        /* Classic 3D Bevel */
        box-shadow: 
          inset -1px -1px #0a0a0a, 
          inset 1px 1px #dfdfdf, 
          inset -2px -2px #808080, 
          inset 2px 2px #ffffff,
          8px 8px 0px rgba(0,0,0,0.5);
        color: #000; /* Dark text inside windows for contrast */
        border-radius: 0;
        position: relative;
        z-index: 10;
        padding: 4px; /* Frame padding */
      }
      
      /* Title Bar */
      .vapor-win::before, .ds-panel::before, .ds-card::before {
        content: "AESTHETICS.EXE";
        display: flex;
        align-items: center;
        padding-left: 8px;
        height: 24px;
        background: linear-gradient(90deg, #000080 0%, #1084d0 100%); /* Classic Blue Gradient */
        color: white;
        font-family: 'VT323', monospace;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 12px;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Mr Dafoe', cursive;
        font-weight: 400;
        color: #FF00FF;
        text-shadow: 
          0 0 10px #FF00FF,
          4px 4px 0px #00F0FF;
        font-size: 5rem;
        transform: rotate(-3deg) skewX(-5deg);
        z-index: 20;
        position: relative;
        text-transform: none;
        letter-spacing: 0;
        line-height: 0.8;
      }
      .ds-hero-title span {
        font-family: 'VT323', monospace;
        font-size: 2rem;
        color: #00F0FF;
        text-shadow: 2px 2px 0 #000;
        background: transparent;
        -webkit-text-fill-color: initial;
        display: block;
        margin-top: 10px;
        transform: skewX(0deg);
        text-transform: uppercase;
        letter-spacing: 12px;
      }
      .ds-hero-text {
        background: #000;
        color: #00F0FF;
        padding: 16px;
        border: 2px solid #fff;
        box-shadow: 4px 4px 0 rgba(255,0,255,0.5);
        font-size: 1.2rem;
      }

      /* 4. BUTTONS */
      /* Primary: Hot Pink Win95 */
      .vapor-btn-primary, .ds-btn-primary {
        background: #FF00FF !important;
        color: #FFFFFF !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.5rem !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        border: 2px solid #FF00FF !important;
        /* Win95 Bevel on a colored button */
        box-shadow: 
          inset -1px -1px #800080, 
          inset 1px 1px #ff80ff, 
          inset -2px -2px #4d004d, 
          inset 2px 2px #ffffff,
          4px 4px 0 rgba(0,0,0,0.5) !important;
        border-radius: 0 !important;
        transition: transform 0.1s !important;
        text-shadow: 1px 1px 0 #000;
      }
      .vapor-btn-primary:hover, .ds-btn-primary:hover {
        background: #00F0FF !important;
        color: #000 !important;
        box-shadow: 
          inset -1px -1px #005f66, 
          inset 1px 1px #80f8ff, 
          inset -2px -2px #003033, 
          inset 2px 2px #ffffff,
          6px 6px 0 rgba(0,0,0,0.5) !important;
        text-shadow: none;
        transform: translate(-1px, -1px);
      }
      .vapor-btn-primary:active, .ds-btn-primary:active {
        transform: translate(1px, 1px);
        box-shadow: none !important;
      }

      /* Secondary: Transparent with Scanlines */
      .vapor-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255,255,255,0.1) !important;
        color: #FF00FF !important;
        border: 2px solid #FF00FF !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        border-radius: 0 !important;
        box-shadow: 0 0 10px rgba(255, 0, 255, 0.4);
      }
      .vapor-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FF00FF !important;
        color: white !important;
        box-shadow: 0 0 20px #FF00FF;
      }

      /* 5. NAVIGATION */
      .vapor-nav, .ds-navbar {
        background: #c0c0c0; /* Authentic Win95 Grey */
        width: 100% !important;
        margin: 0 !important;
        border-bottom: 2px solid #000;
        padding: 8px 16px;
      }
      .ds-logo {
        font-family: 'Mr Dafoe', cursive;
        color: #FF00FF;
        font-size: 2rem;
        text-shadow: 2px 2px 0 #00F0FF;
        transform: rotate(-2deg);
      }
      .ds-nav-links span {
        color: #000;
        font-weight: bold;
        padding: 4px 12px;
        border: 1px solid transparent;
      }
      .ds-nav-links span:hover {
        border: 1px solid #808080;
        box-shadow: inset 1px 1px #000, inset -1px -1px #fff;
      }

      /* 6. INPUTS */
      .vapor-input, .ds-input {
        background: #000 !important;
        color: #00F0FF !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        border: 2px solid #808080 !important;
        border-right-color: #fff !important;
        border-bottom-color: #fff !important;
        box-shadow: inset 2px 2px 0 #000 !important;
        border-radius: 0 !important;
        padding-left: 36px !important;
      }
      .ds-input:focus {
        background: #111 !important;
        color: #FF00FF !important;
        outline: 2px solid #FF00FF;
      }
      .ds-input-decorator {
        background: transparent !important;
        color: #FF00FF;
        left: 10px !important;
        content: '>';
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 2px solid #FF00FF;
        border-bottom: 2px solid #00F0FF;
        background: rgba(0,0,0,0.3) !important;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 2px solid rgba(255,255,255,0.2);
        color: #fff;
      }
      .ds-stats .text-3xl {
        font-family: 'Mr Dafoe', cursive;
        color: #FF9E00;
        text-shadow: 2px 2px 0 #FF00FF;
        font-size: 2.5rem !important;
      }
      .ds-stats span:first-child {
        color: #00F0FF;
        font-size: 1.2rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: #fff !important;
        color: #000;
        /* Bevel */
        box-shadow: 
          inset -1px -1px #0a0a0a, 
          inset 1px 1px #dfdfdf, 
          inset -2px -2px #808080, 
          inset 2px 2px #ffffff !important;
        border: none !important;
      }
      .ds-table-container > div:first-child {
        background: #000080; /* Win95 Selected Blue */
        color: white;
        font-weight: bold;
        letter-spacing: 2px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FF00FF !important;
        color: white !important;
        cursor: help;
      }
      .ds-table-container span {
        background: #c0c0c0 !important;
        border: 2px solid #fff;
        border-right-color: #000;
        border-bottom-color: #000;
        color: #000 !important;
        font-weight: bold;
        border-radius: 0;
      }

      /* 9. PRICING CARDS */
      /* Force Text Color inside cards to black by default due to grey bg */
      .ds-card h3, .ds-card .text-4xl, .ds-card li {
        color: #000 !important;
      }
      
      .ds-card:hover {
        transform: scale(1.02);
        z-index: 20;
        box-shadow: 10px 10px 0 rgba(0, 240, 255, 0.3) !important;
      }

      /* Popular Card (Inverted/Glitch) */
      .ds-card:nth-child(2) {
        background: #000 !important;
        border: 2px solid #FF00FF !important;
        color: #00F0FF !important;
      }
      .ds-card:nth-child(2) h3, 
      .ds-card:nth-child(2) .text-4xl, 
      .ds-card:nth-child(2) li {
        color: #00F0FF !important;
        text-shadow: 2px 2px 0 #FF00FF;
      }
      .ds-card:nth-child(2) button {
        background: #FF00FF !important;
        color: #fff !important;
        border: 2px solid #fff !important;
        box-shadow: 4px 4px 0 #00F0FF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00F0FF;
        color: #000;
        font-weight: bold;
        border: 2px solid #fff;
        top: -15px; right: 10px;
        transform: rotate(3deg);
        animation: blink 1s infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* 10. BADGE */
      .vapor-badge, .ds-badge {
        background: #00F0FF !important;
        color: #000 !important;
        border: 2px solid #fff;
        border-bottom-color: #000;
        border-right-color: #000;
        border-radius: 0 !important;
        font-size: 1rem !important;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 4px solid #FF00FF !important;
        margin-top: 40px;
      }
      .ds-footer .ds-logo {
        text-shadow: none;
      }
    `
  }
};
