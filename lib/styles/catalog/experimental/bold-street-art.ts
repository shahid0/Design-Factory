
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'bold-street-art')!;

export const boldStreetArt: StyleCartridge = {
  id: 'bold-street-art',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#111111', // Asphalt
      '--bg-layer-2': '#1E1E1E',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#CCCCCC',
      '--accent-color': '#FCEE09', // Spray Paint Yellow
      '--border-radius': '0px',
      '--font-display': '"Permanent Marker", "Rock Salt", cursive',
    },
    elementClasses: {
      stage: 'street-stage',
      navbar: 'street-nav',
      container: 'street-panel',
      buttonPrimary: 'street-btn-primary',
      buttonSecondary: 'street-btn-secondary',
      input: 'street-input',
      badge: 'street-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Rock+Salt&display=swap');

      /* --- BOLD STREET ART ENGINE --- */

      .street-stage {
        background-color: #111;
        color: #FFF;
        font-family: 'Permanent Marker', cursive;
        overflow-x: hidden;
      }

      /* Brick & Spray Texture */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
        opacity: 0.3;
        z-index: -1;
        pointer-events: none;
      }
      
      /* Paint Drips */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 0; left: 10%;
        width: 5px; height: 300px;
        background: #FCEE09;
        box-shadow: 20px 0 0 #FF0055, 40px 50px 0 #00FFFF;
        border-radius: 0 0 5px 5px;
        opacity: 0.8;
        z-index: -1;
      }

      /* 2. CONTAINERS (Stenciled) */
      .street-panel, .ds-panel, .ds-card, .street-nav {
        background: #1E1E1E;
        border: 3px solid #FFF;
        box-shadow: 8px 8px 0 rgba(255, 0, 85, 0.8); /* Pink Shadow */
        transform: rotate(-1deg);
        position: relative;
        padding: 25px;
        margin: 20px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: rotate(1deg) scale(1.02);
        box-shadow: 12px 12px 0 #FCEE09; /* Yellow Shadow */
        border-color: #FCEE09;
        z-index: 10;
      }

      /* 3. TYPOGRAPHY (Tag Style) */
      .ds-hero-title {
        font-family: 'Rock Salt', cursive;
        font-size: 4rem;
        color: #FCEE09;
        text-shadow: 4px 4px 0 #FF0055;
        line-height: 1.2;
        transform: rotate(-3deg);
      }
      .ds-hero-title span {
        color: #00FFFF;
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 4px 4px 0 #000;
      }
      .ds-hero-text {
        font-family: 'Permanent Marker', cursive;
        color: #CCC;
        background: rgba(0,0,0,0.5);
        padding: 15px;
        border: 2px dashed #FFF;
        transform: rotate(2deg);
        margin-top: 20px;
      }

      /* 4. BUTTONS (Stickers) */
      .street-btn-primary, .ds-btn-primary {
        background: #FF0055 !important;
        color: #FFF !important;
        border: 3px solid #FFF !important;
        border-radius: 0 !important;
        font-family: 'Permanent Marker', cursive !important;
        font-size: 1.5rem !important;
        padding: 10px 30px !important;
        transform: rotate(-2deg);
        box-shadow: 5px 5px 0 #000 !important;
        transition: all 0.1s !important;
      }
      .street-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1) rotate(0deg);
        background: #FCEE09 !important;
        color: #000 !important;
      }

      .street-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #00FFFF !important;
        border: 2px solid #00FFFF !important;
        font-family: 'Rock Salt', cursive !important;
        font-size: 1rem !important;
        border-radius: 0 !important;
      }
      .street-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #00FFFF !important;
        color: #000 !important;
      }

      /* 5. NAVIGATION */
      .street-nav, .ds-navbar {
        background: #000;
        border-bottom: 4px solid #FCEE09;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
      }
      .ds-logo {
        font-family: 'Rock Salt', cursive;
        font-size: 2rem;
        color: #FFF;
        text-shadow: 2px 2px 0 #FF0055;
      }
      .ds-nav-links span {
        color: #FFF;
        font-size: 1.2rem;
      }
      .ds-nav-links span:hover {
        color: #FCEE09;
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: #FF0055;
      }

      /* 6. INPUTS */
      .street-input, .ds-input {
        background: #222 !important;
        border: 3px solid #FFF !important;
        border-radius: 0 !important;
        color: #FCEE09 !important;
        font-family: 'Permanent Marker', cursive;
        font-size: 1.2rem !important;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #00FFFF !important;
        box-shadow: 5px 5px 0 #00FFFF !important;
      }
      .ds-input-decorator {
        background: #FF0055 !important;
        border-radius: 50%;
        width: 15px !important; height: 15px !important;
        left: auto !important; right: 20px !important;
        border: 2px solid #FFF;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 3px dashed #FFF;
        border-bottom: 3px dashed #FFF;
      }
      .ds-stats > div > div {
        background: #111;
        border: 2px solid #FCEE09;
        margin: 10px;
        transform: rotate(calc(var(--i, 1) * 1deg));
      }
      .ds-stats .text-3xl {
        color: #00FFFF;
        font-family: 'Rock Salt', cursive;
      }
      .ds-stats span:first-child {
        color: #FF0055;
        font-size: 1rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 3px solid #FFF !important;
        background: #1E1E1E !important;
        transform: rotate(1deg);
      }
      .ds-table-container > div:first-child {
        background: #FF0055;
        color: #FFF;
        font-weight: 700;
        border-bottom: 3px solid #FFF;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #333 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FCEE09 !important;
        color: #000 !important;
        border: 2px solid #000;
        border-radius: 0;
        font-weight: 700;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #00FFFF !important;
        transform: scale(1.05) rotate(-2deg);
        z-index: 10;
        background: #222 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #00FFFF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00FFFF;
        color: #000;
        font-weight: 900;
        transform: rotate(5deg);
        top: -10px; right: -5px;
        padding: 5px 15px;
        border: 2px solid #000;
      }

      /* 10. BADGE */
      .street-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border: 2px solid #FFF;
        border-radius: 0;
        padding: 5px 10px;
        box-shadow: 3px 3px 0 #FF0055;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 5px solid #FCEE09 !important;
        margin-top: 80px;
        padding-top: 60px;
      }
    `
  }
};
