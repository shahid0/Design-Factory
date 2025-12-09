
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'electric-vibe')!;

export const electricVibrance: StyleCartridge = {
  id: 'electric-vibe',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#111111',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#E0E0E0',
      '--accent-color': '#FFFF00', // Electric Yellow
      '--border-radius': '0px',
      '--font-display': '"Teko", sans-serif',
    },
    elementClasses: {
      stage: 'electric-stage',
      navbar: 'electric-nav',
      container: 'electric-panel',
      buttonPrimary: 'electric-btn-primary',
      buttonSecondary: 'electric-btn-secondary',
      input: 'electric-input',
      badge: 'electric-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Teko:wght@300;500;700&display=swap');

      /* --- ELECTRIC VIBRANCE ENGINE --- */

      .electric-stage {
        background-color: #000;
        color: #FFF;
        font-family: 'Teko', sans-serif;
        font-size: 1.2rem;
        overflow-x: hidden;
      }

      /* Lightning / Energy Beams */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: 
          linear-gradient(135deg, transparent 40%, rgba(255, 255, 0, 0.2) 45%, rgba(255, 0, 255, 0.2) 55%, transparent 60%),
          linear-gradient(45deg, transparent 40%, rgba(0, 255, 255, 0.2) 45%, rgba(0, 255, 0, 0.2) 55%, transparent 60%);
        z-index: -1;
      }

      /* 2. CONTAINERS (High Voltage) */
      .electric-panel, .ds-panel, .ds-card, .electric-nav {
        background: #000;
        border: 2px solid transparent;
        border-image: linear-gradient(to right, #FF00FF, #FFFF00, #00FFFF) 1;
        box-shadow: 0 0 15px rgba(255, 255, 0, 0.1);
        padding: 30px;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.4);
        transform: scale(1.01);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 6rem;
        line-height: 0.8;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #FFFF00, #FF00FF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-text {
        font-weight: 300;
        font-size: 1.5rem;
        letter-spacing: 1px;
        color: #E0E0E0;
        text-transform: uppercase;
      }

      /* 4. BUTTONS (Charged) */
      .electric-btn-primary, .ds-btn-primary {
        background: #FFFF00 !important;
        color: #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        font-size: 1.5rem !important;
        text-transform: uppercase;
        padding: 10px 40px !important;
        box-shadow: 0 0 20px #FFFF00 !important;
        border: none !important;
        transition: all 0.1s !important;
      }
      .electric-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF00FF !important;
        color: #FFF !important;
        box-shadow: 0 0 40px #FF00FF !important;
      }

      .electric-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #00FFFF !important;
        border: 2px solid #00FFFF !important;
        border-radius: 0 !important;
        font-size: 1.2rem !important;
        text-transform: uppercase;
      }
      .electric-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #00FFFF !important;
        color: #000 !important;
        box-shadow: 0 0 20px #00FFFF;
      }

      /* 5. NAVIGATION */
      .electric-nav, .ds-navbar {
        background: #000;
        border-bottom: 2px solid #FF00FF;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 40px;
        border-image: none;
      }
      .ds-logo {
        font-weight: 700;
        font-size: 2.5rem;
        color: #FFFF00;
        text-shadow: 0 0 10px #FFFF00;
      }
      .ds-nav-links span {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #00FFFF;
        text-shadow: 0 0 10px #00FFFF;
      }

      /* 6. INPUTS */
      .electric-input, .ds-input {
        background: #111 !important;
        border: 2px solid #FF00FF !important;
        border-radius: 0 !important;
        color: #FFF !important;
        font-family: 'Teko', sans-serif;
        font-size: 1.5rem !important;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #00FFFF !important;
        box-shadow: 0 0 20px #00FFFF !important;
      }
      .ds-input-decorator {
        background: #FFFF00 !important;
        border-radius: 0 !important;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #000;
        border: 1px solid #333;
        box-shadow: 0 0 10px rgba(255,255,255,0.1);
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #00FFFF;
        text-shadow: 0 0 10px #00FFFF;
        font-size: 3rem !important;
      }
      .ds-stats span:first-child {
        color: #FF00FF;
        font-size: 1.2rem;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #FFFF00 !important;
        background: #000 !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255, 255, 0, 0.1);
        color: #FFFF00;
        font-weight: 700;
        font-size: 1.2rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(0, 255, 255, 0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FF00FF !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 4px 10px;
        font-size: 1rem;
        box-shadow: 0 0 10px #FF00FF;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #00FFFF !important;
        box-shadow: 0 0 30px #00FFFF !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #00FFFF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00FFFF;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        padding: 5px 20px;
        font-size: 1.2rem;
      }
      
      /* 10. TOGGLES (Arc) */
      .mannequin-toggle-track {
        background: #000;
        border: 2px solid #FF00FF;
        border-radius: 0;
        box-shadow: 0 0 10px #FF00FF;
      }
      .mannequin-toggle-track.active {
        background: #00FFFF;
        border-color: #00FFFF;
        box-shadow: 0 0 20px #00FFFF;
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 0;
        box-shadow: none;
      }

      /* 10. BADGE */
      .electric-badge, .ds-badge {
        background: transparent !important;
        color: #FFFF00 !important;
        border: 1px solid #FFFF00;
        border-radius: 0;
        padding: 5px 15px;
        font-size: 1rem;
        box-shadow: 0 0 10px #FFFF00;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 2px solid #FFF !important;
        margin-top: 80px;
      }
    `
  }
};
