
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'psychedelic-dreams')!;

export const psychedelicDreams: StyleCartridge = {
  id: 'psychedelic-dreams',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#2D0036', // Deep Purple
      '--bg-layer-2': 'rgba(255, 255, 255, 0.1)',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#FFCCFF',
      '--accent-color': '#00FFCC', // Teal
      '--border-radius': '30px',
      '--font-display': '"Righteous", cursive',
    },
    elementClasses: {
      stage: 'dream-psy-stage',
      navbar: 'dream-psy-nav',
      container: 'dream-psy-panel',
      buttonPrimary: 'dream-psy-btn-primary',
      buttonSecondary: 'dream-psy-btn-secondary',
      input: 'dream-psy-input',
      badge: 'dream-psy-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Righteous&family=Quicksand:wght@400;700&display=swap');

      /* --- PSYCHEDELIC DREAMS ENGINE --- */

      .dream-psy-stage {
        background: linear-gradient(45deg, #2D0036, #0B0033, #330033);
        color: #FFF;
        font-family: 'Quicksand', sans-serif;
        overflow-x: hidden;
      }

      /* Liquid Swirl Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: -50%;
        background: 
          radial-gradient(circle at 50% 50%, rgba(255, 0, 204, 0.3), transparent 50%),
          radial-gradient(circle at 20% 80%, rgba(0, 255, 204, 0.3), transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 255, 0, 0.2), transparent 50%);
        filter: blur(60px);
        animation: fluid-spin 30s linear infinite;
        z-index: -1;
      }
      
      @keyframes fluid-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      /* 2. CONTAINERS (Glass Blob) */
      .dream-psy-panel, .ds-panel, .ds-card, .dream-psy-nav {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        border-radius: 30px;
        position: relative;
        overflow: hidden;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.4);
        transform: scale(1.02);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Righteous', cursive;
        font-size: 4.5rem;
        background: linear-gradient(to right, #00FFCC, #FF00CC);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0 0 10px rgba(255,0,204,0.3));
      }
      .ds-hero-title span {
        color: #FFF;
        background: none;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 10px #FFF;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #E0E0FF;
        opacity: 0.9;
      }

      /* 4. BUTTONS (Neon Pills) */
      .dream-psy-btn-primary, .ds-btn-primary {
        background: linear-gradient(90deg, #FF00CC, #3300FF) !important;
        color: #FFF !important;
        border-radius: 50px !important;
        border: none !important;
        font-family: 'Righteous', cursive !important;
        text-transform: uppercase;
        padding: 15px 40px !important;
        box-shadow: 0 5px 20px rgba(255, 0, 204, 0.4) !important;
        transition: transform 0.2s !important;
      }
      .dream-psy-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 10px 30px rgba(51, 0, 255, 0.5) !important;
      }

      .dream-psy-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 255, 255, 0.1) !important;
        color: #00FFCC !important;
        border: 2px solid #00FFCC !important;
        border-radius: 50px !important;
        font-family: 'Righteous', cursive !important;
      }
      .dream-psy-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #00FFCC !important;
        color: #000 !important;
      }

      /* 5. NAVIGATION */
      .dream-psy-nav, .ds-navbar {
        background: rgba(0,0,0,0.3);
        margin: 20px auto !important;
        width: calc(100% - 60px) !important;
        border-radius: 50px;
        padding: 15px 40px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
      }
      .ds-logo {
        font-family: 'Righteous', cursive;
        letter-spacing: 1px;
        color: #00FFCC;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: #FFCCFF;
      }
      .ds-nav-links span:hover {
        color: #FFF;
        text-shadow: 0 0 10px #FF00CC;
      }

      /* 6. INPUTS */
      .dream-psy-input, .ds-input {
        background: rgba(255,255,255,0.1) !important;
        border: 2px solid rgba(255,255,255,0.2) !important;
        border-radius: 50px !important;
        color: #FFF !important;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #FF00CC !important;
        box-shadow: 0 0 15px #FF00CC !important;
      }
      .ds-input-decorator {
        background: #00FFCC !important;
        border-radius: 50%;
        width: 12px !important; height: 12px !important;
        left: auto !important; right: 20px !important;
        box-shadow: 0 0 10px #00FFCC;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 30px;
      }
      .ds-stats .text-3xl {
        font-family: 'Righteous', cursive;
        background: linear-gradient(to bottom, #FFF, #00FFCC);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-stats span:first-child {
        color: #FFCCFF;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 20px !important;
        background: rgba(0,0,0,0.2) !important;
        border: none !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255, 0, 204, 0.2);
        color: #FFF;
        font-family: 'Righteous', cursive;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: #00FFCC !important;
        color: #000 !important;
        border-radius: 50px;
        padding: 4px 10px;
        font-weight: 700;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #FF00CC !important;
        box-shadow: 0 0 30px rgba(255, 0, 204, 0.3) !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FF00CC;
        font-family: 'Righteous', cursive;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF00CC;
        color: #FFF;
        font-weight: 700;
        border-radius: 0 0 20px 20px;
        top: 0; right: 20px;
        padding: 5px 15px;
      }
      
      /* 11. TOGGLES (Psychedelic) */
      .mannequin-toggle-track {
        background: rgba(255,255,255,0.1);
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50px;
      }
      .mannequin-toggle-track.active {
        background: linear-gradient(90deg, #FF00CC, #00FFCC);
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255,255,255,0.5);
      }

      /* 10. BADGE */
      .dream-psy-badge, .ds-badge {
        background: rgba(255, 255, 255, 0.1) !important;
        color: #FFF !important;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50px;
        padding: 5px 15px;
        font-weight: 700;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: rgba(0,0,0,0.4) !important;
        margin-top: 80px;
        border-top: 1px solid rgba(255,255,255,0.1);
      }
    `
  }
};
