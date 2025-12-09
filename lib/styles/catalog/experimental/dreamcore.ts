
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'dream')!;

export const dreamcore: StyleCartridge = {
  id: 'dream',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDF5E6', // Soft Warm White
      '--bg-layer-2': '#FFF0F5', // Lavender Blush
      '--text-primary': '#4A4A4A', // Soft Grey
      '--text-secondary': '#888888',
      '--accent-color': '#FFB7B2', // Pastel Pink
      '--border-radius': '20px',
      '--font-display': '"Comic Neue", "Nunito", cursive',
    },
    elementClasses: {
      stage: 'dream-stage',
      navbar: 'dream-nav',
      container: 'dream-panel',
      buttonPrimary: 'dream-btn-primary',
      buttonSecondary: 'dream-btn-secondary',
      input: 'dream-input',
      badge: 'dream-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Nunito:wght@300;600&display=swap');

      /* --- DREAMCORE ENGINE --- */

      .dream-stage {
        background: radial-gradient(circle at 50% 50%, #FDF5E6 0%, #E6E6FA 100%);
        color: #4A4A4A;
        font-family: 'Comic Neue', cursive;
        overflow-x: hidden;
      }

      /* Soft Blur Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        backdrop-filter: blur(5px) brightness(1.1);
        pointer-events: none;
        z-index: 100;
        opacity: 0.3;
      }
      
      /* Floating Eyes */
      .ds-deco-layer::after {
        content: "👁️";
        position: fixed;
        top: 20%; left: 10%;
        font-size: 100px;
        opacity: 0.1;
        animation: float 10s infinite ease-in-out;
        z-index: 0;
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }

      /* 2. CONTAINERS (Fuzzy) */
      .dream-panel, .ds-panel, .ds-card, .dream-nav {
        background: rgba(255, 255, 255, 0.6);
        box-shadow: 0 0 30px rgba(255, 183, 178, 0.3);
        border-radius: 30px;
        border: 2px solid rgba(255, 255, 255, 0.8);
        padding: 30px;
        position: relative;
        overflow: hidden;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.02);
        box-shadow: 0 0 50px rgba(255, 183, 178, 0.5);
        background: rgba(255, 255, 255, 0.8);
      }

      /* 3. TYPOGRAPHY (Unsettlingly Friendly) */
      .ds-hero-title {
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: 1px;
        color: #4A4A4A;
        text-shadow: 2px 2px 10px rgba(255, 183, 178, 0.8);
      }
      .ds-hero-title span {
        color: #FFB7B2;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Nunito', sans-serif;
        font-size: 1.2rem;
        background: rgba(255,255,255,0.5);
        padding: 20px;
        border-radius: 20px;
        color: #666;
      }

      /* 4. BUTTONS (Marshmallow) */
      .dream-btn-primary, .ds-btn-primary {
        background: #FFB7B2 !important;
        color: #FFF !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        padding: 15px 40px !important;
        border: 4px solid #FFF !important;
        box-shadow: 0 5px 15px rgba(255, 183, 178, 0.5) !important;
        transition: all 0.3s ease !important;
      }
      .dream-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1) rotate(2deg) !important;
        background: #FFDAC1 !important;
      }

      .dream-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #FFB7B2 !important;
        border: 2px solid #FFB7B2 !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
      }
      .dream-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFF0F5 !important;
      }

      /* 5. NAVIGATION */
      .dream-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.7);
        border: none;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-family: 'Nunito', sans-serif;
        font-weight: 900;
        color: #FFB7B2;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: #888;
      }
      .ds-nav-links span:hover {
        color: #FFB7B2;
        text-shadow: 0 0 10px #FFB7B2;
      }

      /* 6. INPUTS */
      .dream-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #FFB7B2 !important;
        border-radius: 20px !important;
        padding-left: 20px !important;
        color: #4A4A4A !important;
        font-family: 'Nunito', sans-serif;
      }
      .ds-input:focus {
        box-shadow: 0 0 15px rgba(255, 183, 178, 0.5) !important;
      }
      .ds-input-decorator {
        background: #FFB7B2 !important;
        border-radius: 50%;
        width: 15px !important; height: 15px !important;
        left: auto !important; right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.7);
        border-radius: 30px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.03);
      }
      .ds-stats .text-3xl {
        color: #FFB7B2;
        font-family: 'Comic Neue', cursive;
        font-weight: 700;
      }
      .ds-stats span:first-child {
        color: #888;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 30px !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
        border: none !important;
      }
      .ds-table-container > div:first-child {
        background: #FFF0F5;
        color: #FFB7B2;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFFF0 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #E6E6FA !important;
        color: #4A4A4A !important;
        border-radius: 20px;
        padding: 5px 15px;
        font-weight: 700;
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(255,255,255,0.8) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FFB7B2 !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFB7B2;
        color: #FFF;
        font-weight: 700;
        border-radius: 0 0 20px 20px;
        top: 0; right: 20px;
        padding: 5px 20px;
      }

      /* 10. BADGE */
      .dream-badge, .ds-badge {
        background: #FFDAC1 !important;
        color: #4A4A4A !important;
        border-radius: 20px;
        padding: 5px 15px;
        font-weight: 700;
      }
      
      /* 11. TOGGLES (Cloud) */
      .mannequin-toggle-track {
        background: #FFF;
        border-radius: 50px;
        box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
      }
      .mannequin-toggle-track.active {
        background: #E6E6FA;
      }
      .mannequin-toggle-thumb {
        background: #FFB7B2;
        border-radius: 50%;
        box-shadow: 0 5px 15px rgba(255, 183, 178, 0.6);
      }

      /* 12. FOOTER */
      .ds-footer {
        background: rgba(255,255,255,0.5) !important;
        margin-top: 80px;
      }
    `
  }
};
