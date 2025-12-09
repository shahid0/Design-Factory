
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'darkroom')!;

export const darkroom: StyleCartridge = {
  id: 'darkroom',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000', // Pitch Black
      '--bg-layer-2': '#0A0A0A', // Almost Black
      '--text-primary': '#FF0000', // Safety Red
      '--text-secondary': '#800000', // Dim Red
      '--accent-color': '#FF0000', // Red
      '--border-radius': '4px',
      '--font-display': '"Inconsolata", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'dark-stage',
      navbar: 'dark-nav',
      container: 'dark-panel',
      buttonPrimary: 'dark-btn-primary',
      buttonSecondary: 'dark-btn-secondary',
      input: 'dark-input',
      badge: 'dark-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap');

      /* --- DARKROOM ENGINE --- */

      .dark-stage {
        background-color: #000000;
        color: #FF0000;
        font-family: 'Inconsolata', monospace;
      }

      /* Red Grain */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
        background-color: rgba(255, 0, 0, 0.02);
        z-index: -1;
        pointer-events: none;
      }

      /* 2. PANELS (Utility) */
      .dark-panel, .ds-panel, .ds-card, .dark-nav {
        background: #050505;
        border: 1px solid #330000;
        border-radius: 4px;
        box-shadow: none;
        padding: 20px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: #FF0000;
        background: #0A0000;
        box-shadow: 0 0 10px rgba(255, 0, 0, 0.2);
      }

      /* 3. TYPOGRAPHY (Monospace) */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        color: #FF0000;
        text-shadow: 0 0 5px rgba(255, 0, 0, 0.5);
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        background: transparent;
        color: #FFF;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        color: #AA0000;
        border-left: 2px solid #550000;
        padding-left: 15px;
      }

      /* 4. BUTTONS (Tactile Switch) */
      .dark-btn-primary, .ds-btn-primary {
        background: #330000 !important;
        color: #FF0000 !important;
        border: 1px solid #FF0000 !important;
        border-radius: 2px !important;
        font-family: 'Inconsolata', monospace !important;
        text-transform: uppercase;
        font-weight: 700 !important;
        padding: 10px 20px !important;
        transition: all 0.2s !important;
      }
      .dark-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF0000 !important;
        color: #000 !important;
        box-shadow: 0 0 15px #FF0000 !important;
      }

      .dark-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #800000 !important;
        border: 1px solid #550000 !important;
        border-radius: 2px !important;
        font-family: 'Inconsolata', monospace !important;
      }
      .dark-btn-secondary:hover, .ds-btn-secondary:hover {
        color: #FF0000 !important;
        border-color: #FF0000 !important;
      }

      /* 5. NAVIGATION */
      .dark-nav, .ds-navbar {
        border-bottom: 1px solid #330000;
        background: #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 30px;
        box-shadow: none !important;
      }
      .ds-logo {
        color: #FF0000;
        font-weight: 700;
        letter-spacing: 2px;
      }
      .ds-nav-links span {
        color: #550000;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        color: #FF0000;
      }

      /* 6. INPUTS */
      .dark-input, .ds-input {
        background: #000 !important;
        border: 1px solid #330000 !important;
        border-radius: 2px !important;
        color: #FF0000 !important;
        font-family: 'Inconsolata', monospace;
        padding-left: 10px !important;
      }
      .ds-input:focus {
        border-color: #FF0000 !important;
        box-shadow: 0 0 5px #FF0000 !important;
      }
      .ds-input-decorator {
        background: #FF0000 !important;
        border-radius: 0;
        width: 8px !important; height: 8px !important;
        right: 10px !important; left: auto !important;
        opacity: 0.5;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #330000;
        border-bottom: 1px solid #330000;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #330000;
      }
      .ds-stats .text-3xl {
        color: #FF0000;
        font-weight: 700;
      }
      .ds-stats span:first-child {
        color: #800000;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #330000 !important;
        background: #050505 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #220000 !important;
      }
      .ds-table-container > div:first-child {
        background: #110000;
        color: #FF0000;
        font-weight: 700;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #220000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #FF0000;
        color: #FF0000 !important;
        border-radius: 0;
      }

      /* 9. PRICING */
      .ds-card {
        background: #000 !important;
        border: 1px solid #330000 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #FF0000 !important;
        box-shadow: 0 0 20px rgba(255,0,0,0.1) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FF0000;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF0000;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        border-radius: 0 0 0 4px;
        padding: 2px 10px;
      }

      /* 10. BADGE */
      .dark-badge, .ds-badge {
        background: #330000 !important;
        color: #FF0000 !important;
        border: 1px solid #FF0000;
        border-radius: 2px;
        padding: 2px 6px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #050505 !important;
        border-top: 1px solid #330000 !important;
        margin-top: 60px;
      }
      .ds-footer * {
         color: #800000 !important;
      }
    `
  }
};
