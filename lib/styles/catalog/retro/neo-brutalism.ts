
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'brutalism')!;

export const neoBrutalism: StyleCartridge = {
  id: 'brutalism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFF8E7', // Pale Cream
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#FF6B6B', // Soft Red
      '--border-radius': '0px',
      '--font-display': '"Courier Prime", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'bg-[#FFF8E7]',
      navbar: 'brut-nav',
      container: 'brut-box',
      buttonPrimary: 'brut-btn-main',
      buttonSecondary: 'brut-btn-sec',
      input: 'brut-input',
      badge: 'brut-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

      /* --- NEO-BRUTALISM ENGINE (RAW) --- */

      .ds-page-root {
        font-family: 'Courier Prime', monospace;
      }

      /* 1. CONTAINER (The Hard Box) */
      .brut-box, .ds-panel, .ds-card, .brut-nav {
        background: #FFFFFF;
        border: 3px solid #000000;
        border-radius: 0;
        /* Hard offset shadow */
        box-shadow: 6px 6px 0px #000000;
        transition: none; /* No smoothing */
      }

      /* Hover: Snap Move */
      .ds-panel:hover, .ds-card:hover {
        transform: translate(2px, 2px);
        box-shadow: 4px 4px 0px #000000;
        background: #B4F8C8; /* Mint Pop */
      }

      /* 2. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3.5rem;
        line-height: 1;
        background: #000;
        color: #fff;
        display: inline-block;
        padding: 8px 16px;
        box-shadow: 8px 8px 0 var(--accent-color);
      }
      .ds-hero-title span {
        background: var(--accent-color);
        color: #000;
        padding: 0 8px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 700;
        font-size: 1.1rem;
        background: white;
        border: 3px solid black;
        padding: 16px;
        margin-top: 24px;
        max-width: 600px;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.1);
      }

      /* 3. BUTTONS (Clicky) */
      .brut-btn-main, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #000 !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        box-shadow: 4px 4px 0px #000 !important;
        transition: none !important;
        padding: 12px 32px !important;
      }
      .brut-btn-main:hover, .ds-btn-primary:hover {
        transform: translate(2px, 2px) !important;
        box-shadow: 2px 2px 0px #000 !important;
        background: #fff !important;
      }
      .brut-btn-main:active, .ds-btn-primary:active {
        transform: translate(4px, 4px) !important;
        box-shadow: 0px 0px 0px #000 !important;
      }

      .brut-btn-sec, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #000 !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        box-shadow: 4px 4px 0px #000 !important;
      }
      .brut-btn-sec:hover, .ds-btn-secondary:hover {
        background: #E0E0E0 !important;
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0px #000 !important;
      }

      /* 4. NAVIGATION */
      .brut-nav, .ds-navbar {
        background: #FFF;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 8px 8px 0 #000;
        padding: 16px 32px;
      }
      .ds-logo {
        font-weight: 700;
        font-size: 1.5rem;
        background: #000;
        color: #FFF;
        padding: 4px 10px;
        transform: rotate(-1deg);
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        border: 2px solid transparent;
        padding: 4px 8px;
      }
      .ds-nav-links span:hover {
        background: #000;
        color: #FFF;
        border-color: #000;
      }

      /* 5. INPUTS */
      .brut-input, .ds-input {
        background: #FFF !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        color: #000 !important;
        font-weight: 700;
        padding: 16px !important;
        box-shadow: 4px 4px 0 #000 !important;
      }
      .ds-input:focus {
        background: #FDFD96 !important;
        outline: none;
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 #000 !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 6. STATS */
      .ds-stats {
        background: #FFF !important;
        border-top: 4px solid #000;
        border-bottom: 4px solid #000;
        margin: 40px 0;
      }
      .ds-stats > div > div {
        border-right: 3px solid #000;
        box-shadow: none;
        background: transparent;
      }
      .ds-stats > div > div:last-child {
        border-right: none;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        font-size: 2.5rem;
        background: #000;
        color: #FFF;
        display: inline-block;
        padding: 0 8px;
      }
      .ds-stats span:first-child {
        text-transform: uppercase;
        font-weight: 700;
        text-decoration: underline;
      }

      /* 7. TABLE */
      .ds-table-container {
        border: 3px solid #000 !important;
        box-shadow: 8px 8px 0 #000 !important;
        background: #FFF !important;
      }
      .ds-table-container > div {
        border-bottom: 3px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-weight: 700;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FF6B6B !important;
        color: #000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FFF !important;
        border: 2px solid #000;
        color: #000 !important;
        border-radius: 0;
        font-weight: 700;
        box-shadow: 2px 2px 0 #000;
      }

      /* 8. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        background: #A0E7E5 !important; /* Cyan */
        transform: scale(1.02);
        z-index: 10;
        box-shadow: 10px 10px 0 #000 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        text-decoration: underline;
        font-size: 2rem;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        font-weight: 700;
        border: 3px solid #000;
        top: -15px; right: -10px;
        transform: rotate(3deg);
        padding: 8px 16px;
      }

      /* 9. BADGE */
      .brut-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border: none;
        border-radius: 0;
        padding: 6px 12px;
        font-weight: 700;
        box-shadow: 3px 3px 0 rgba(0,0,0,0.2);
        transform: rotate(-2deg);
      }

      /* 10. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        margin-top: 80px;
        border-top: 8px solid var(--accent-color) !important;
      }
      .ds-footer * { color: #FFF !important; }
    `
  }
};
