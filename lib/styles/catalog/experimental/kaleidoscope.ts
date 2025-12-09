
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'kaleidoscope')!;

export const kaleidoscope: StyleCartridge = {
  id: 'kaleidoscope',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#100010', // Dark Violet
      '--bg-layer-2': 'rgba(255, 255, 255, 0.1)',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#FFCCFF',
      '--accent-color': '#00FFFF', // Cyan
      '--border-radius': '50%', // Circular motifs
      '--font-display': '"Quicksand", sans-serif',
    },
    elementClasses: {
      stage: 'kal-stage',
      navbar: 'kal-nav',
      container: 'kal-panel',
      buttonPrimary: 'kal-btn-primary',
      buttonSecondary: 'kal-btn-secondary',
      input: 'kal-input',
      badge: 'kal-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap');

      /* --- KALEIDOSCOPE ENGINE --- */

      .kal-stage {
        background-color: #100010;
        color: #FFF;
        font-family: 'Quicksand', sans-serif;
        overflow-x: hidden;
      }

      /* Repeating Radial Patterns */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: -50%;
        background: 
          conic-gradient(from 0deg, #FF0055, #00FFFF, #FFFF00, #FF0055),
          repeating-radial-gradient(circle, transparent 0, transparent 20px, rgba(0,0,0,0.5) 20px, rgba(0,0,0,0.5) 40px);
        background-blend-mode: multiply;
        opacity: 0.2;
        animation: spin 60s linear infinite;
        z-index: -2;
      }
      
      /* Reflection overlay */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L50 50 L100 0' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3Cpath d='M0 100 L50 50 L100 100' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/svg%3E");
        z-index: -1;
        pointer-events: none;
      }

      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* 2. CONTAINERS (Glass Shards/Mirrors) */
      .kal-panel, .ds-panel, .ds-card, .kal-nav {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.2);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        position: relative;
        overflow: hidden;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
        border-color: rgba(255,255,255,0.5);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 300;
        font-size: 4rem;
        text-align: center;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #00FFFF, #FF00CC);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }
      .ds-hero-text {
        text-align: center;
        max-width: 600px;
        margin: 0 auto 30px auto;
        font-size: 1.2rem;
        opacity: 0.8;
      }

      /* 4. BUTTONS (Gemstones) */
      .kal-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), #00FFFF !important;
        color: #000 !important;
        border-radius: 50px !important;
        border: 1px solid rgba(255,255,255,0.5) !important;
        font-weight: 700 !important;
        padding: 12px 30px !important;
        box-shadow: 0 4px 15px rgba(0, 255, 255, 0.3) !important;
        transition: all 0.3s ease !important;
      }
      .kal-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.6) !important;
      }

      .kal-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255,255,255,0.1) !important;
        color: #FFF !important;
        border: 1px solid rgba(255,255,255,0.3) !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
      }
      .kal-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(255,255,255,0.2) !important;
        border-color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .kal-nav, .ds-navbar {
        background: rgba(0,0,0,0.5);
        margin: 20px auto !important;
        width: calc(100% - 60px) !important;
        border-radius: 50px;
        border: 1px solid rgba(255,255,255,0.1);
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 1px;
      }
      .ds-nav-links span {
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
      }
      .ds-nav-links span:hover {
        color: #00FFFF;
        text-shadow: 0 0 10px #00FFFF;
      }

      /* 6. INPUTS */
      .kal-input, .ds-input {
        background: rgba(255,255,255,0.1) !important;
        border: 1px solid rgba(255,255,255,0.2) !important;
        border-radius: 50px !important;
        color: #FFF !important;
        padding-left: 20px !important;
        text-align: center;
      }
      .ds-input:focus {
        border-color: #00FFFF !important;
        box-shadow: 0 0 15px rgba(0, 255, 255, 0.3) !important;
        background: rgba(255,255,255,0.2) !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.1);
        border-radius: 50%; /* Circles */
        width: 160px; height: 160px;
        display: flex; flex-direction: column; justify-content: center;
        margin: 0 auto;
        box-shadow: inset 0 0 20px rgba(255,255,255,0.05);
      }
      .ds-stats .text-3xl {
        color: #FF00CC;
        font-weight: 700;
        text-shadow: 0 0 10px rgba(255, 0, 204, 0.5);
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 20px !important;
        background: rgba(0,0,0,0.3) !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid rgba(255,255,255,0.05) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.1);
        font-weight: 700;
        color: #00FFFF;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: rgba(0, 255, 255, 0.2) !important;
        color: #00FFFF !important;
        border-radius: 50px;
        padding: 4px 12px;
        box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #FF00CC !important;
        box-shadow: 0 0 30px rgba(255, 0, 204, 0.2) !important;
        background: rgba(255, 0, 204, 0.1) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FF00CC;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF00CC;
        color: #FFF;
        border-radius: 50px;
        padding: 5px 15px;
        top: -15px; right: 20px;
        font-weight: 700;
      }

      /* 10. BADGE */
      .kal-badge, .ds-badge {
        background: rgba(255,255,255,0.1) !important;
        color: #FFF !important;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 50px;
        padding: 5px 15px;
        backdrop-filter: blur(5px);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: rgba(0,0,0,0.5) !important;
        margin-top: 80px;
        border-top: 1px solid rgba(255,255,255,0.1);
      }
    `
  }
};
