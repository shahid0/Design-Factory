
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'glitch')!;

export const glitch: StyleCartridge = {
  id: 'glitch',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#050505',
      '--bg-layer-2': '#000000',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#CCCCCC',
      '--accent-color': '#00FF00', // Terminal Green
      '--border-radius': '0px',
      '--font-display': '"Rubik Glitch", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'glitch-stage',
      navbar: 'glitch-nav',
      container: 'glitch-panel',
      buttonPrimary: 'glitch-btn-primary',
      buttonSecondary: 'glitch-btn-secondary',
      input: 'glitch-input',
      badge: 'glitch-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rubik+Glitch&family=Share+Tech+Mono&display=swap');

      /* --- GLITCH ART ENGINE --- */

      .glitch-stage {
        background-color: #050505;
        color: #fff;
        font-family: 'Share Tech Mono', monospace;
        overflow-x: hidden;
      }

      /* Noise Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
        z-index: 999;
        pointer-events: none;
        opacity: 0.2;
      }

      /* RGB Split Animation Keyframes */
      @keyframes glitch-anim {
        0% { transform: translate(0); text-shadow: -2px 0 red, 2px 0 blue; }
        2% { transform: translate(-2px, 2px); text-shadow: -2px 0 red, 2px 0 blue; }
        4% { transform: translate(2px, -2px); text-shadow: 2px 0 red, -2px 0 blue; }
        6% { transform: translate(0); text-shadow: -2px 0 red, 2px 0 blue; }
        100% { transform: translate(0); text-shadow: -2px 0 red, 2px 0 blue; }
      }

      /* 2. PANELS (Broken) */
      .glitch-panel, .ds-panel, .ds-card, .glitch-nav {
        background: #0a0a0a;
        border: 1px solid #fff;
        position: relative;
        box-shadow: 4px 4px 0 #fff;
      }
      
      .glitch-panel::before, .ds-panel::before, .ds-card::before {
        content: "ERR_0X9";
        position: absolute;
        top: -10px; left: 10px;
        background: #000;
        color: var(--accent-color);
        font-size: 10px;
        padding: 0 5px;
        border: 1px solid var(--accent-color);
      }

      .ds-panel:hover, .ds-card:hover {
        animation: glitch-anim 0.3s infinite;
        border-color: var(--accent-color);
        box-shadow: 4px 4px 0 var(--accent-color);
      }

      /* 3. TYPOGRAPHY (Corrupted) */
      .ds-hero-title {
        font-family: 'Rubik Glitch', cursive;
        font-size: 5rem;
        color: #fff;
        line-height: 0.9;
        text-transform: uppercase;
        position: relative;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        display: inline-block;
      }
      .ds-hero-title:hover {
        animation: glitch-anim 0.2s infinite;
      }
      .ds-hero-text {
        font-family: 'Share Tech Mono', monospace;
        color: #ccc;
        border-left: 2px solid var(--accent-color);
        padding-left: 15px;
      }

      /* 4. BUTTONS (Unstable) */
      .glitch-btn-primary, .ds-btn-primary {
        background: #fff !important;
        color: #000 !important;
        font-family: 'Rubik Glitch', cursive !important;
        font-size: 1.5rem !important;
        border: 2px solid #fff !important;
        border-radius: 0 !important;
        text-transform: uppercase;
        position: relative;
        overflow: hidden;
      }
      .glitch-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
        color: #000 !important;
        box-shadow: 4px 4px 0 #fff;
        animation: glitch-anim 0.5s infinite;
      }

      .glitch-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #fff !important;
        border: 1px solid #fff !important;
        font-family: 'Share Tech Mono', monospace !important;
        text-transform: uppercase;
        border-radius: 0 !important;
      }
      .glitch-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(255,255,255,0.1) !important;
        border-color: var(--accent-color) !important;
        color: var(--accent-color) !important;
      }

      /* 5. NAVIGATION */
      .glitch-nav, .ds-navbar {
        background: #000;
        border-bottom: 2px solid #fff;
        margin: 0 !important;
        width: 100% !important;
        border-radius: 0 !important;
        padding: 15px 30px;
      }
      .ds-logo {
        font-family: 'Rubik Glitch', cursive;
        color: var(--accent-color);
        font-size: 2rem;
      }
      .ds-nav-links span {
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .ds-nav-links span:hover {
        background: #fff;
        color: #000;
        animation: glitch-anim 0.2s linear infinite;
      }

      /* 6. INPUTS */
      .glitch-input, .ds-input {
        background: #000 !important;
        border: 1px solid #555 !important;
        color: var(--accent-color) !important;
        font-family: 'Share Tech Mono', monospace;
        font-size: 1.1rem;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #fff !important;
        box-shadow: 4px 4px 0 var(--accent-color) !important;
      }
      .ds-input-decorator {
        background: #fff !important;
        width: 10px !important; height: 20px !important;
        border-radius: 0 !important;
        animation: blink 0.1s infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #000;
        border: 1px solid #fff;
        position: relative;
      }
      .ds-stats > div > div::after {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; height: 1px;
        background: rgba(255,255,255,0.2);
        animation: scan 2s linear infinite;
      }
      @keyframes scan { 0% { top: 0; } 100% { top: 100%; } }
      
      .ds-stats .text-3xl {
        font-family: 'Rubik Glitch', cursive;
        color: #fff;
      }
      .ds-stats span:first-child {
        color: var(--accent-color);
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #fff !important;
        background: #000 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px dashed #333 !important;
      }
      .ds-table-container > div:first-child {
        background: #fff;
        color: #000;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: var(--accent-color) !important;
        color: #000 !important;
        animation: glitch-anim 0.2s infinite;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #fff;
        color: #fff !important;
        font-family: 'Share Tech Mono', monospace;
      }

      /* 9. PRICING */
      .ds-card {
        background: #000 !important;
        border: 1px solid #fff !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid var(--accent-color) !important;
        box-shadow: 8px 8px 0 var(--accent-color) !important;
        transform: translate(-4px, -4px);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
        font-family: 'Rubik Glitch', cursive;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #000;
        font-weight: 900;
        top: 0; right: 0;
        padding: 5px;
        border: 1px solid #000;
      }

      /* 10. BADGE */
      .glitch-badge, .ds-badge {
        background: #fff !important;
        color: #000 !important;
        font-family: 'Rubik Glitch', cursive;
        border: 1px solid #000;
        transform: skewX(-10deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 4px solid #fff !important;
        margin-top: 60px;
      }
    `
  }
};
