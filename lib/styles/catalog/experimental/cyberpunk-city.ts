
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'cyberpunk-city')!;

export const cyberpunkCity: StyleCartridge = {
  id: 'cyberpunk-city',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0b0b13', // Night Sky
      '--bg-layer-2': '#181825', // Building Grey
      '--text-primary': '#e0e0e0',
      '--text-secondary': '#ff2a6d', // Neon Pink
      '--accent-color': '#05d9e8', // Neon Cyan
      '--border-radius': '4px',
      '--font-display': '"Rajdhani", sans-serif',
    },
    elementClasses: {
      stage: 'city-stage',
      navbar: 'city-nav',
      container: 'city-panel',
      buttonPrimary: 'city-btn-primary',
      buttonSecondary: 'city-btn-secondary',
      input: 'city-input',
      badge: 'city-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;700&display=swap');

      /* --- CYBERPUNK CITY ENGINE --- */

      .city-stage {
        background-color: #0b0b13;
        color: #e0e0e0;
        font-family: 'Rajdhani', sans-serif;
        overflow-x: hidden;
      }

      /* Cityscape Silhouette Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        bottom: 0; left: 0; right: 0; height: 30%;
        background-image: 
          linear-gradient(to top, rgba(5, 217, 232, 0.1), transparent),
          repeating-linear-gradient(90deg, #181825 0px, #181825 20px, transparent 20px, transparent 40px);
        z-index: -1;
        opacity: 0.5;
        mask-image: linear-gradient(to top, black, transparent);
      }
      
      /* Rain Effect */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
        opacity: 0.2;
        animation: rain 0.5s infinite steps(4);
        pointer-events: none;
      }
      @keyframes rain {
        0% { background-position: 0 0; }
        100% { background-position: 20px 200px; }
      }

      /* 2. PANELS (Neon Signs) */
      .city-panel, .ds-panel, .ds-card, .city-nav {
        background: rgba(20, 20, 30, 0.8);
        border: 2px solid #05d9e8;
        box-shadow: 0 0 15px rgba(5, 217, 232, 0.2), inset 0 0 20px rgba(5, 217, 232, 0.05);
        border-radius: 4px;
        position: relative;
        backdrop-filter: blur(5px);
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: #ff2a6d;
        box-shadow: 0 0 25px rgba(255, 42, 109, 0.4);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        color: #fff;
        text-shadow: 0 0 10px #05d9e8, 0 0 20px #05d9e8;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        color: #ff2a6d;
        text-shadow: 0 0 10px #ff2a6d;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        color: #d1f7ff;
        font-size: 1.2rem;
        border-left: 4px solid #ff2a6d;
        padding-left: 20px;
        background: rgba(0,0,0,0.5);
      }

      /* 4. BUTTONS (Glowing) */
      .city-btn-primary, .ds-btn-primary {
        background: transparent !important;
        color: #05d9e8 !important;
        border: 2px solid #05d9e8 !important;
        border-radius: 0 !important;
        text-transform: uppercase;
        font-weight: 700 !important;
        box-shadow: 0 0 10px #05d9e8, inset 0 0 10px #05d9e8 !important;
        padding: 12px 30px !important;
        transition: all 0.2s !important;
      }
      .city-btn-primary:hover, .ds-btn-primary:hover {
        background: #05d9e8 !important;
        color: #000 !important;
        box-shadow: 0 0 30px #05d9e8 !important;
      }

      .city-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 42, 109, 0.1) !important;
        color: #ff2a6d !important;
        border: 1px solid #ff2a6d !important;
        border-radius: 0 !important;
        text-transform: uppercase;
      }
      .city-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #ff2a6d !important;
        color: #fff !important;
        box-shadow: 0 0 20px #ff2a6d;
      }

      /* 5. NAVIGATION */
      .city-nav, .ds-navbar {
        background: #0b0b13;
        border-bottom: 2px solid #ff2a6d;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 40px;
        box-shadow: 0 5px 20px rgba(255, 42, 109, 0.2);
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 2px;
        color: #fff;
        text-shadow: 2px 2px 0 #ff2a6d;
      }
      .ds-nav-links span {
        color: #05d9e8;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #fff;
        text-shadow: 0 0 10px #05d9e8;
      }

      /* 6. INPUTS */
      .city-input, .ds-input {
        background: rgba(0,0,0,0.6) !important;
        border: 1px solid #05d9e8 !important;
        color: #fff !important;
        font-family: 'Rajdhani', sans-serif;
        padding-left: 20px !important;
        border-radius: 0 !important;
      }
      .ds-input:focus {
        box-shadow: 0 0 15px #05d9e8 !important;
      }
      .ds-input-decorator {
        background: #ff2a6d !important;
        width: 10px !important; height: 10px !important;
        border-radius: 50%;
        box-shadow: 0 0 10px #ff2a6d;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(0,0,0,0.5);
        border: 1px solid #ff2a6d;
        box-shadow: 0 0 10px rgba(255, 42, 109, 0.2);
      }
      .ds-stats .text-3xl {
        color: #05d9e8;
        text-shadow: 0 0 10px #05d9e8;
      }
      .ds-stats span:first-child {
        color: #ff2a6d;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: rgba(0,0,0,0.8) !important;
        border: 1px solid #05d9e8 !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(5, 217, 232, 0.2);
        color: #fff;
        border-bottom: 2px solid #05d9e8 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255, 42, 109, 0.2) !important;
      }
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #ff2a6d;
        color: #ff2a6d !important;
        border-radius: 0;
        box-shadow: 0 0 5px #ff2a6d;
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(20, 20, 30, 0.9) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #ff2a6d !important;
        box-shadow: 0 0 30px rgba(255, 42, 109, 0.3) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #ff2a6d;
        text-shadow: 0 0 10px #ff2a6d;
      }
      .ds-card:nth-child(2) .absolute {
        background: #ff2a6d;
        color: #fff;
        font-weight: 700;
        top: 0; right: 0;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .city-badge, .ds-badge {
        background: #05d9e8 !important;
        color: #000 !important;
        border-radius: 0;
        font-weight: 700;
        box-shadow: 0 0 10px #05d9e8;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #05d9e8 !important;
        margin-top: 60px;
      }
    `
  }
};
