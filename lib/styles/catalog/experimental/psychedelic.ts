
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'psychedelic')!;

export const psychedelic: StyleCartridge = {
  id: 'psychedelic',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#2E004F', // Dark Violet
      '--bg-layer-2': '#4B0082', // Indigo
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#00FFFF', // Cyan
      '--accent-color': '#FF00FF', // Magenta
      '--border-radius': '30px',
      '--font-display': '"Fredoka One", "Quicksand", sans-serif',
    },
    elementClasses: {
      stage: 'psych-stage',
      navbar: 'psych-nav',
      container: 'psych-panel',
      buttonPrimary: 'psych-btn-primary',
      buttonSecondary: 'psych-btn-secondary',
      input: 'psych-input',
      badge: 'psych-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Quicksand:wght@400;700&display=swap');

      /* --- PSYCHEDELIC ENGINE --- */

      .psych-stage {
        background: linear-gradient(45deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #9400D3);
        background-size: 400% 400%;
        animation: psych-bg 20s ease infinite;
        color: #FFF;
        font-family: 'Quicksand', sans-serif;
        overflow-x: hidden;
      }

      @keyframes psych-bg {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* Liquid Warp Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.02' numOctaves='3' result='turbulence'/%3E%3CfeDisplacementMap in2='turbulence' in='SourceGraphic' scale='50' xChannelSelector='R' yChannelSelector='G'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' fill='transparent' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
        opacity: 0.2;
        pointer-events: none;
        z-index: 0;
      }

      /* 2. PANELS (Melting) */
      .psych-panel, .ds-panel, .ds-card, .psych-nav {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border-radius: 30px 10px 30px 10px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        transition: all 0.3s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.02) rotate(1deg);
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 20px #FF00FF;
        border-color: #00FFFF;
      }

      /* 3. TYPOGRAPHY (Wavy) */
      .ds-hero-title {
        font-family: 'Fredoka One', cursive;
        font-size: 5rem;
        color: #FFF;
        text-shadow: 3px 3px 0 #FF00FF, 6px 6px 0 #00FFFF;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        color: #FFFF00;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 700;
        font-size: 1.2rem;
        background: rgba(0,0,0,0.5);
        padding: 20px;
        border-radius: 20px;
        box-shadow: 5px 5px 0 #00FFFF;
      }

      /* 4. BUTTONS (Trippy) */
      .psych-btn-primary, .ds-btn-primary {
        background: #FF00FF !important;
        color: #FFF !important;
        font-family: 'Fredoka One', cursive !important;
        font-size: 1.5rem !important;
        border-radius: 50px !important;
        border: none !important;
        padding: 12px 30px !important;
        box-shadow: 0 5px 0 #9400D3 !important;
        transition: all 0.1s !important;
      }
      .psych-btn-primary:hover, .ds-btn-primary:hover {
        background: #00FFFF !important;
        color: #000 !important;
        box-shadow: 0 5px 0 #008080 !important;
        transform: translateY(-2px);
      }
      .psych-btn-primary:active, .ds-btn-primary:active {
        transform: translateY(2px);
        box-shadow: none !important;
      }

      .psych-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255,255,255,0.2) !important;
        color: #FFF !important;
        border: 2px solid #FFF !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
      }
      .psych-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFF !important;
        color: #2E004F !important;
      }

      /* 5. NAVIGATION */
      .psych-nav, .ds-navbar {
        background: rgba(0,0,0,0.5);
        border: 2px solid #FF00FF;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border-radius: 50px;
        padding: 10px 30px;
      }
      .ds-logo {
        font-family: 'Fredoka One', cursive;
        font-size: 2rem;
        color: #00FFFF;
        text-shadow: 2px 2px 0 #FF00FF;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: #FFF;
      }
      .ds-nav-links span:hover {
        color: #FFFF00;
        transform: scale(1.1);
      }

      /* 6. INPUTS */
      .psych-input, .ds-input {
        background: rgba(255,255,255,0.2) !important;
        border: 2px solid #00FFFF !important;
        border-radius: 30px !important;
        color: #FFF !important;
        padding-left: 20px !important;
        font-weight: 700;
      }
      .ds-input:focus {
        background: rgba(255,255,255,0.4) !important;
        border-color: #FF00FF !important;
        box-shadow: 0 0 15px #FF00FF;
      }
      .ds-input-decorator {
        background: linear-gradient(135deg, #00FFFF, #FF00FF) !important;
        border-radius: 50%;
        width: 15px !important; height: 15px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: rgba(0,0,0,0.3) !important;
        border: none !important;
        border-radius: 30px;
        padding: 20px;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.1);
        border-radius: 20px;
        padding: 20px;
        box-shadow: 5px 5px 0 rgba(0,0,0,0.2);
        border: 1px solid rgba(255,255,255,0.2);
      }
      .ds-stats .text-3xl {
        font-family: 'Fredoka One', cursive;
        color: #FFFF00;
        text-shadow: 2px 2px 0 #FF0000;
      }
      .ds-stats span:first-child {
        color: #00FFFF;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: rgba(0,0,0,0.5) !important;
        border: 2px solid #FFF !important;
        border-radius: 20px !important;
        overflow: hidden;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.1);
        color: #FF00FF;
        font-family: 'Fredoka One', cursive;
        border-bottom: 2px solid #FFF !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.2) !important;
      }
      /* Status */
      .ds-table-container span {
        background: #00FF00 !important;
        color: #000 !important;
        border-radius: 20px;
        font-weight: 700;
        padding: 4px 10px;
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(0,0,0,0.4) !important;
        border: 2px solid rgba(255,255,255,0.5) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FFFF00 !important;
        background: rgba(0,0,0,0.6) !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #00FFFF;
        font-family: 'Fredoka One', cursive;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFFF00;
        color: #000;
        font-weight: 900;
        border-radius: 0 0 20px 20px;
        top: 0; right: 30px;
        padding: 5px 20px;
      }

      /* 10. BADGE */
      .psych-badge, .ds-badge {
        background: #9400D3 !important;
        color: #FFF !important;
        border-radius: 20px;
        padding: 5px 15px;
        font-weight: 700;
        box-shadow: 0 0 10px #9400D3;
      }
      
      /* 11. TOGGLES (Melting) */
      .mannequin-toggle-track {
        background: rgba(255,255,255,0.2);
        border: 2px solid #FFF;
        border-radius: 30px;
      }
      .mannequin-toggle-track.active {
        background: #00FFFF;
        border-color: #FF00FF;
        animation: hue-cycle 2s infinite linear;
      }
      @keyframes hue-cycle {
         0% { filter: hue-rotate(0deg); }
         100% { filter: hue-rotate(360deg); }
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 50%;
        box-shadow: 0 0 10px #FFF;
      }

      /* 12. FOOTER */
      .ds-footer {
        background: rgba(0,0,0,0.8) !important;
        margin-top: 60px;
        border-top: 4px solid #FF00FF !important;
      }
    `
  }
};
