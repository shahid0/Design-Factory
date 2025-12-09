
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'galactic-space')!;

export const galacticSpace: StyleCartridge = {
  id: 'galactic-space',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0B0D17', // Deep Space
      '--bg-layer-2': 'rgba(255, 255, 255, 0.05)',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#A9A9C9',
      '--accent-color': '#7F00FF', // Nebula Purple
      '--border-radius': '12px',
      '--font-display': '"Orbitron", "Exo", sans-serif',
    },
    elementClasses: {
      stage: 'space-stage',
      navbar: 'space-nav',
      container: 'space-panel',
      buttonPrimary: 'space-btn-primary',
      buttonSecondary: 'space-btn-secondary',
      input: 'space-input',
      badge: 'space-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Exo:wght@300;500&display=swap');

      /* --- GALACTIC SPACE ENGINE --- */

      .space-stage {
        background-color: #0B0D17;
        color: #FFF;
        font-family: 'Exo', sans-serif;
        overflow-x: hidden;
      }

      /* Stars & Nebula */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: 
          radial-gradient(1px 1px at 10% 10%, #FFF, transparent),
          radial-gradient(1px 1px at 20% 40%, #FFF, transparent),
          radial-gradient(2px 2px at 50% 50%, #FFF, transparent),
          radial-gradient(1px 1px at 80% 30%, #FFF, transparent),
          radial-gradient(2px 2px at 90% 90%, #FFF, transparent);
        background-size: 500px 500px;
        opacity: 0.5;
        z-index: -2;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: -50%; left: -50%; width: 200%; height: 200%;
        background: radial-gradient(circle, rgba(127, 0, 255, 0.15), transparent 60%);
        z-index: -1;
        animation: nebula-pulse 10s infinite alternate;
      }
      
      @keyframes nebula-pulse {
        0% { transform: scale(1); opacity: 0.3; }
        100% { transform: scale(1.1); opacity: 0.5; }
      }

      /* 2. CONTAINERS (Holo-Glass) */
      .space-panel, .ds-panel, .ds-card, .space-nav {
        background: rgba(20, 20, 40, 0.6);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(127, 0, 255, 0.3);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
        border-radius: 12px;
        position: relative;
        overflow: hidden;
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: #7F00FF;
        box-shadow: 0 0 30px rgba(127, 0, 255, 0.3);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        background: linear-gradient(to right, #FFF, #A9A9C9);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-title span {
        color: #7F00FF;
        text-shadow: 0 0 20px #7F00FF;
        background: none;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.1rem;
        color: #A9A9C9;
        font-weight: 300;
      }

      /* 4. BUTTONS (Plasma) */
      .space-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #7F00FF 0%, #4B0082 100%) !important;
        color: #FFF !important;
        border-radius: 30px !important;
        font-family: 'Orbitron', sans-serif !important;
        font-weight: 700 !important;
        padding: 12px 32px !important;
        border: 1px solid rgba(255,255,255,0.2) !important;
        box-shadow: 0 0 15px rgba(127, 0, 255, 0.5) !important;
        transition: all 0.3s ease !important;
      }
      .space-btn-primary:hover, .ds-btn-primary:hover {
        box-shadow: 0 0 30px rgba(127, 0, 255, 0.8) !important;
        transform: translateY(-2px);
      }

      .space-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 255, 255, 0.1) !important;
        color: #FFF !important;
        border: 1px solid rgba(255,255,255,0.2) !important;
        border-radius: 30px !important;
        font-family: 'Orbitron', sans-serif !important;
        font-size: 0.9rem !important;
      }
      .space-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        border-color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .space-nav, .ds-navbar {
        background: rgba(11, 13, 23, 0.8);
        border-bottom: 1px solid rgba(127, 0, 255, 0.2);
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 30px;
      }
      .ds-logo {
        font-family: 'Orbitron', sans-serif;
        font-weight: 700;
        letter-spacing: 2px;
      }
      .ds-nav-links span {
        font-family: 'Exo', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #A9A9C9;
      }
      .ds-nav-links span:hover {
        color: #FFF;
        text-shadow: 0 0 10px #FFF;
      }

      /* 6. INPUTS */
      .space-input, .ds-input {
        background: rgba(0, 0, 0, 0.5) !important;
        border: 1px solid #7F00FF !important;
        border-radius: 8px !important;
        color: #FFF !important;
        padding-left: 20px !important;
        font-family: 'Exo', sans-serif;
      }
      .ds-input:focus {
        box-shadow: 0 0 15px #7F00FF !important;
      }
      .ds-input-decorator {
        background: #FFF !important;
        width: 8px !important; height: 8px !important;
        border-radius: 50%;
        box-shadow: 0 0 10px #FFF;
        left: auto !important; right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 12px;
      }
      .ds-stats .text-3xl {
        font-family: 'Orbitron', sans-serif;
        color: #7F00FF;
        text-shadow: 0 0 10px rgba(127, 0, 255, 0.5);
      }
      .ds-stats span:first-child {
        color: #A9A9C9;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid rgba(127, 0, 255, 0.3) !important;
        background: rgba(0, 0, 0, 0.4) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(127, 0, 255, 0.2);
        color: #FFF;
        font-family: 'Orbitron', sans-serif;
        border-bottom: 1px solid rgba(127, 0, 255, 0.3) !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255, 255, 255, 0.05) !important;
      }
      /* Status */
      .ds-table-container span {
        background: rgba(127, 0, 255, 0.2) !important;
        color: #D8BFFF !important;
        border: 1px solid #7F00FF;
        border-radius: 4px;
        padding: 4px 8px;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #7F00FF !important;
        box-shadow: 0 0 30px rgba(127, 0, 255, 0.2) !important;
        background: rgba(20, 20, 40, 0.9) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #7F00FF;
        font-family: 'Orbitron', sans-serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: #7F00FF;
        color: #FFF;
        font-weight: 700;
        top: 0; right: 0;
        border-radius: 0 0 0 12px;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .space-badge, .ds-badge {
        background: rgba(127, 0, 255, 0.2) !important;
        color: #FFF !important;
        border: 1px solid #7F00FF;
        border-radius: 4px;
        padding: 4px 10px;
        font-family: 'Orbitron', sans-serif;
        font-size: 0.7rem;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #05060A !important;
        border-top: 1px solid rgba(255,255,255,0.1) !important;
        margin-top: 80px;
      }
    `
  }
};
