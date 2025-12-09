
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'grunge')!;

export const grunge: StyleCartridge = {
  id: 'grunge',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#3E3B36', // Dirty Concrete
      '--bg-layer-2': '#2C2A26', // Darker Dirt
      '--text-primary': '#D9D9D6', // Faded White
      '--text-secondary': '#8C8C8C', // Grey
      '--accent-color': '#8B0000', // Dried Blood Red
      '--border-radius': '0px',
      '--font-display': '"Special Elite", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'grunge-stage',
      navbar: 'grunge-nav',
      container: 'grunge-panel',
      buttonPrimary: 'grunge-btn-primary',
      buttonSecondary: 'grunge-btn-secondary',
      input: 'grunge-input',
      badge: 'grunge-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Special+Elite&family=Permanent+Marker&display=swap');

      /* --- 90s GRUNGE ENGINE --- */

      .grunge-stage {
        background-color: #3E3B36;
        color: #D9D9D6;
        font-family: 'Special Elite', monospace;
        overflow-x: hidden;
      }

      /* Dirty Texture Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E");
        opacity: 0.5;
        mix-blend-mode: overlay;
        z-index: -1;
        pointer-events: none;
      }
      
      /* Scratches */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background: repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 11px);
        opacity: 0.3;
        z-index: -1;
      }

      /* 2. CONTAINERS (Torn Paper / Cardboard) */
      .grunge-panel, .ds-panel, .ds-card, .grunge-nav {
        background: #2C2A26;
        border: 2px solid #555;
        /* Uneven border approximation via box-shadow */
        box-shadow: 5px 5px 0 #111;
        position: relative;
        padding: 20px;
        transform: rotate(-0.5deg);
      }
      
      /* Tape Effect */
      .grunge-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -10px; left: 50%; transform: translateX(-50%) rotate(2deg);
        width: 60px; height: 20px;
        background: rgba(255,255,255,0.2);
        box-shadow: 0 1px 3px rgba(0,0,0,0.3);
      }

      .ds-panel:hover, .ds-card:hover {
        transform: rotate(0deg) scale(1.01);
        border-color: #888;
        background: #333;
      }

      /* 3. TYPOGRAPHY (Distressed) */
      .ds-hero-title {
        font-family: 'Permanent Marker', cursive;
        font-size: 5rem;
        color: #D9D9D6;
        text-shadow: 3px 3px 0 #000;
        transform: rotate(-2deg);
        line-height: 1;
      }
      .ds-hero-title span {
        color: var(--accent-color); /* Dark Red */
        background: transparent;
        -webkit-text-fill-color: initial;
        text-decoration: underline;
        text-decoration-style: wavy;
      }
      .ds-hero-text {
        font-size: 1.1rem;
        color: #AAA;
        background: rgba(0,0,0,0.5);
        padding: 15px;
        border: 1px dashed #666;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Stickers) */
      .grunge-btn-primary, .ds-btn-primary {
        background: #111 !important;
        color: #FFF !important;
        font-family: 'Permanent Marker', cursive !important;
        font-size: 1.5rem !important;
        border: 2px solid #FFF !important;
        padding: 10px 30px !important;
        transform: rotate(-1deg);
        box-shadow: 3px 3px 0 rgba(0,0,0,0.5) !important;
        border-radius: 2px !important;
      }
      .grunge-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
        color: #000 !important;
        border-color: #000 !important;
        transform: rotate(1deg) scale(1.05);
      }

      .grunge-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #AAA !important;
        border: 1px solid #555 !important;
        font-family: 'Special Elite', monospace !important;
        font-weight: bold !important;
      }
      .grunge-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: #FFF !important;
        color: #FFF !important;
        background: rgba(255,255,255,0.05) !important;
      }

      /* 5. NAVIGATION */
      .grunge-nav, .ds-navbar {
        background: #1A1A1A;
        border-bottom: 2px solid #444;
        margin: 0 !important;
        width: 100% !important;
        transform: rotate(0deg);
        padding: 15px 30px;
      }
      .ds-logo {
        font-family: 'Permanent Marker', cursive;
        color: #FFF;
        font-size: 2rem;
      }
      .ds-nav-links span {
        font-family: 'Special Elite', monospace;
        text-transform: uppercase;
        color: #888;
        border-bottom: 1px solid transparent;
      }
      .ds-nav-links span:hover {
        color: #FFF;
        border-bottom-color: var(--accent-color);
        transform: rotate(-2deg);
      }

      /* 6. INPUTS */
      .grunge-input, .ds-input {
        background: #222 !important;
        border: 2px solid #555 !important;
        color: #FFF !important;
        font-family: 'Special Elite', monospace;
        padding-left: 15px !important;
        border-radius: 0 !important;
      }
      .ds-input:focus {
        border-color: #FFF !important;
        background: #000 !important;
        outline: 1px dashed #FFF;
      }
      .ds-input-decorator {
        background: var(--accent-color) !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        filter: blur(1px);
        left: auto !important; right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 1px solid #555;
        border-bottom: 1px solid #555;
      }
      .ds-stats > div > div {
        background: #222;
        border: 1px dashed #555;
        margin: 10px;
        transform: rotate(1deg);
      }
      .ds-stats .text-3xl {
        font-family: 'Permanent Marker', cursive;
        color: #FFF;
      }
      .ds-stats span:first-child {
        color: #888;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 2px solid #444 !important;
        background: #111 !important;
      }
      .ds-table-container > div:first-child {
        background: #222;
        color: #FFF;
        font-family: 'Special Elite', monospace;
        text-transform: uppercase;
        border-bottom: 2px solid #444 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #333 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #000 !important;
        border: 1px solid #FFF;
        color: #FFF !important;
        border-radius: 0;
      }

      /* 9. PRICING */
      .ds-card {
        background: #222 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid var(--accent-color) !important;
        background: #2A2A2A !important;
        transform: rotate(1deg) scale(1.02);
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Permanent Marker', cursive;
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #FFF;
        font-family: 'Permanent Marker', cursive;
        transform: rotate(-5deg);
        top: -15px; right: -5px;
        padding: 5px 15px;
        border: 2px solid #FFF;
      }

      /* 10. BADGE */
      .grunge-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border: 1px solid #FFF;
        border-radius: 0;
        padding: 2px 8px;
        transform: rotate(-2deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #111 !important;
        border-top: 1px solid #444 !important;
        margin-top: 60px;
      }
    `
  }
};
