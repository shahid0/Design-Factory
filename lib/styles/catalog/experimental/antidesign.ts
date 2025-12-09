
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'antidesign')!;

export const antiDesign: StyleCartridge = {
  id: 'antidesign',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFF00', // Brutal Yellow
      '--bg-layer-2': '#0000FF', // Blue
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#FF00FF', // Magenta
      '--border-radius': '0px',
      '--font-display': '"Arial Black", "Impact", sans-serif',
    },
    elementClasses: {
      stage: 'anti-stage',
      navbar: 'anti-nav',
      container: 'anti-panel',
      buttonPrimary: 'anti-btn-primary',
      buttonSecondary: 'anti-btn-secondary',
      input: 'anti-input',
      badge: 'anti-badge'
    },
    injectCss: `
      /* --- ANTI-DESIGN ENGINE --- */

      .anti-stage {
        background-color: #FFFF00;
        color: #000;
        font-family: 'Courier New', monospace; /* Clash with font-display */
        overflow-x: hidden;
      }

      /* Chaos Grid */
      .ds-deco-layer::before {
        content: "DESIGN IS DEAD";
        position: fixed;
        font-size: 200px;
        color: rgba(0,0,0,0.05);
        transform: rotate(45deg);
        top: 50%; left: 50%;
        white-space: nowrap;
        pointer-events: none;
      }

      /* 2. PANELS (Ignoring grid) */
      .anti-panel, .ds-panel, .ds-card, .anti-nav {
        background: #FFFFFF;
        border: 5px solid #000;
        box-shadow: 15px 15px 0 #000;
        transform: rotate(-1deg);
        margin: 20px;
        padding: 20px;
        position: relative;
      }
      
      .ds-panel:nth-child(even) {
        transform: rotate(2deg);
        background: #0000FF;
        color: #FFF;
      }
      .ds-panel:nth-child(even) * {
         color: #FFF !important;
         border-color: #FFF !important;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.1) rotate(0deg);
        z-index: 100;
        box-shadow: 20px 20px 0 var(--accent-color);
      }

      /* 3. TYPOGRAPHY (Clashing) */
      .ds-hero-title {
        font-family: 'Arial Black', sans-serif;
        font-size: 6rem;
        line-height: 0.8;
        background: #000;
        color: #FFF;
        display: inline;
        padding: 10px;
        box-decoration-break: clone;
        -webkit-box-decoration-break: clone;
      }
      .ds-hero-title span {
        background: #FF00FF;
        color: #000;
        font-style: italic;
        padding: 0 20px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        background: #FFF;
        border: 2px solid #000;
        padding: 20px;
        font-family: 'Times New Roman', serif;
        font-size: 1.5rem;
        transform: rotate(1deg);
        margin-top: 40px;
        width: 120%; /* Break container */
        margin-left: -10%;
      }

      /* 4. BUTTONS (Default + Ugly) */
      .anti-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #00FF00 !important; /* Hacker green on black */
        font-family: 'Courier New', monospace !important;
        font-weight: 900 !important;
        font-size: 1.5rem !important;
        border: 5px solid #00FF00 !important;
        border-radius: 0 !important;
        padding: 15px 30px !important;
        box-shadow: 10px 10px 0 #00FF00 !important;
        transition: none !important;
      }
      .anti-btn-primary:hover, .ds-btn-primary:hover {
        background: #00FF00 !important;
        color: #000 !important;
        border-color: #000 !important;
        box-shadow: -10px -10px 0 #000 !important;
      }

      .anti-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #D3D3D3 !important; /* Windows 95 Grey */
        color: blue !important; /* Standard Link Blue */
        text-decoration: underline;
        border: 2px outset #FFF !important;
        border-radius: 0 !important;
        font-family: Arial, sans-serif !important;
      }
      .anti-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #C0C0C0 !important;
        border-style: inset !important;
      }

      /* 5. NAVIGATION */
      .anti-nav, .ds-navbar {
        background: #FF00FF;
        border: none;
        border-bottom: 5px solid #000;
        width: 100% !important;
        margin: 0 !important;
        padding: 20px;
        transform: none;
      }
      .ds-logo {
        font-family: 'Times New Roman', serif;
        font-size: 3rem;
        background: #FFF;
        padding: 5px;
        border: 1px solid #000;
      }
      .ds-nav-links span {
        background: #000;
        color: #FFF;
        padding: 10px;
        font-weight: bold;
        margin-right: 5px;
      }
      .ds-nav-links span:hover {
        background: #FFFF00;
        color: #000;
        transform: rotate(5deg);
      }

      /* 6. INPUTS */
      .anti-input, .ds-input {
        background: #000 !important;
        color: #FFF !important;
        border: 5px solid #0000FF !important;
        font-family: 'Arial', sans-serif;
        font-weight: 900;
        font-size: 1.5rem !important;
        padding: 10px !important;
        border-radius: 0 !important;
      }
      .ds-input:focus {
        background: #FFF !important;
        color: #000 !important;
        outline: 5px solid #FF0000;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: #FFF !important;
        border: 5px solid #000;
        transform: rotate(-2deg);
        width: 110%;
        margin-left: -5%;
      }
      .ds-stats > div > div {
        background: #FFFF00;
        border: 2px solid #000;
        margin: 5px;
        transform: rotate(calc(var(--i, 0) * 1deg));
      }
      /* Randomize rotations */
      .ds-stats > div > div:nth-child(1) { transform: rotate(2deg); }
      .ds-stats > div > div:nth-child(2) { transform: rotate(-3deg); }
      .ds-stats > div > div:nth-child(3) { transform: rotate(1deg); }
      .ds-stats > div > div:nth-child(4) { transform: rotate(-4deg); }

      .ds-stats .text-3xl {
        font-family: 'Impact', sans-serif;
        color: #000;
        font-size: 3rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 5px solid #000 !important;
        background: #FFF !important;
        transform: rotate(1deg);
      }
      .ds-table-container > div {
        border-bottom: 2px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-family: 'Arial Black', sans-serif;
        font-size: 1.2rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FF00FF !important;
        color: #FFF !important;
        transform: scaleX(1.05);
      }
      .ds-table-container span {
        background: #000 !important;
        color: #FFFF00 !important;
        border: none;
        border-radius: 0;
        font-weight: 900;
      }

      /* 9. PRICING */
      .ds-card {
        border: 5px solid #000 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #000 !important;
        color: #FFF !important;
        transform: scale(1.1) rotate(3deg);
        z-index: 50;
      }
      .ds-card:nth-child(2) * { color: #FFF !important; }
      .ds-card:nth-child(2) .absolute {
        background: #FF0000;
        color: #FFFF00 !important;
        font-size: 2rem;
        font-weight: 900;
        padding: 10px 20px;
        top: -30px; right: -20px;
        transform: rotate(10deg);
        border: 3px solid #000;
      }

      /* 10. BADGE */
      .anti-badge, .ds-badge {
        background: #0000FF !important;
        color: #FFF !important;
        border: none;
        border-radius: 0;
        padding: 5px 15px;
        font-family: 'Impact', sans-serif;
        font-size: 1.2rem;
        transform: skewX(-10deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FF0000 !important;
        color: #FFFF00 !important;
        margin-top: 100px;
        border-top: 10px solid #000 !important;
        padding: 50px;
      }
      .ds-footer * { color: #FFFF00 !important; }
      
      /* 12. TOGGLES (Broken Switch) */
      .mannequin-toggle-track {
        background: #000;
        border: 4px solid #FFFF00;
        border-radius: 0;
        height: 40px;
      }
      .mannequin-toggle-track.active {
        background: #0000FF;
        border-color: #FF00FF;
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 0;
        width: 30px; height: 30px;
        top: 1px; left: 1px;
        border: 2px solid #000;
        box-shadow: 4px 4px 0 #000;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         left: calc(100% - 31px);
         background: #FF0000;
      }
    `
  }
};
