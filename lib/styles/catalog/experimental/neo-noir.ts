
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'neo-noir')!;

export const neoNoir: StyleCartridge = {
  id: 'neo-noir',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#080808', // Shadow
      '--bg-layer-2': '#121212', // Dark Grey
      '--text-primary': '#FFFFFF', // Light
      '--text-secondary': '#666666', // Fog
      '--accent-color': '#FFFFFF', // High Contrast
      '--border-radius': '0px',
      '--font-display': '"Playfair Display", serif',
    },
    elementClasses: {
      stage: 'noir-stage',
      navbar: 'noir-nav',
      container: 'noir-panel',
      buttonPrimary: 'noir-btn-primary',
      buttonSecondary: 'noir-btn-secondary',
      input: 'noir-input',
      badge: 'noir-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');

      .noir-stage {
        background-color: #080808;
        color: #FFF;
        font-family: 'Lato', sans-serif;
      }

      /* Venetian Blinds Shadow */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: repeating-linear-gradient(
          0deg,
          rgba(0,0,0,0.8),
          rgba(0,0,0,0.8) 10px,
          transparent 10px,
          transparent 20px
        );
        pointer-events: none;
        z-index: 100;
        opacity: 0.2;
      }
      
      /* Rain */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E");
        opacity: 0.3;
        z-index: -1;
      }

      /* Panels (High Contrast) */
      .noir-panel, .ds-panel, .ds-card, .noir-nav {
        background: #000;
        border: 1px solid #333;
        box-shadow: 0 20px 50px rgba(0,0,0,0.9);
        padding: 30px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: #FFF;
        box-shadow: 0 0 20px rgba(255,255,255,0.2);
      }

      /* Typography */
      .ds-hero-title {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        color: #FFF;
        text-shadow: 0 0 10px rgba(255,255,255,0.5);
      }
      .ds-hero-title span {
        color: #888;
        background: none;
        -webkit-text-fill-color: initial;
      }

      /* Buttons */
      .noir-btn-primary, .ds-btn-primary {
        background: #FFF !important;
        color: #000 !important;
        border-radius: 0 !important;
        font-family: 'Playfair Display', serif !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 15px 40px !important;
      }
      .noir-btn-primary:hover, .ds-btn-primary:hover {
        background: #CCC !important;
      }

      .noir-btn-secondary, .ds-btn-secondary {
        background: transparent !important;
        color: #FFF !important;
        border: 1px solid #FFF !important;
        border-radius: 0 !important;
        font-family: 'Playfair Display', serif !important;
        font-style: italic;
      }
      .noir-btn-secondary:hover {
        background: #FFF !important;
        color: #000 !important;
      }

      /* Inputs */
      .noir-input, .ds-input {
        background: #111 !important;
        border: 1px solid #444 !important;
        border-radius: 0 !important;
        color: #FFF !important;
        font-family: 'Lato', sans-serif;
      }
      .ds-input:focus {
        border-color: #FFF !important;
        background: #000 !important;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: transparent;
        border-left: 1px solid #333;
      }
      .ds-stats .text-3xl {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        color: #FFF;
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 2px solid #FFF !important;
        background: #080808 !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-family: 'Playfair Display', serif;
        top: 0; right: 0;
        padding: 5px 15px;
      }
      
      /* 10. TOGGLES (Light Switch) */
      .mannequin-toggle-track {
        background: #000;
        border: 1px solid #333;
        border-radius: 0;
      }
      .mannequin-toggle-track.active {
        background: #FFF;
        border-color: #FFF;
      }
      .mannequin-toggle-thumb {
        background: #333;
        border-radius: 0;
        box-shadow: none;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
        background: #000;
      }
      
      /* 11. TABS */
      .ds-nav-links span {
         font-family: 'Playfair Display', serif;
         font-style: italic;
      }
      .ds-nav-links span.active, .ds-nav-links span:hover {
         color: #FFF;
         border-bottom: 1px solid #FFF;
      }

      /* Footer */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #333;
        margin-top: 80px;
      }
    `
  }
};
