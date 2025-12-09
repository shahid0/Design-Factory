
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'noise')!;

export const staticNoise: StyleCartridge = {
  id: 'noise',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#111111',
      '--bg-layer-2': '#1A1A1A',
      '--text-primary': '#E0E0E0',
      '--text-secondary': '#888888',
      '--accent-color': '#FFFFFF',
      '--border-radius': '0px',
      '--font-display': '"Courier Prime", monospace',
    },
    elementClasses: {
      stage: 'noise-stage',
      navbar: 'noise-nav',
      container: 'noise-panel',
      buttonPrimary: 'noise-btn-primary',
      buttonSecondary: 'noise-btn-secondary',
      input: 'noise-input',
      badge: 'noise-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

      /* --- STATIC NOISE ENGINE --- */

      .noise-stage {
        background-color: #111;
        color: #E0E0E0;
        font-family: 'Courier Prime', monospace;
        overflow-x: hidden;
      }

      /* Heavy Static Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E");
        animation: noise-shift 0.2s infinite;
        opacity: 0.15;
        z-index: 1000;
        pointer-events: none;
      }
      
      @keyframes noise-shift {
        0% { transform: translate(0, 0); }
        25% { transform: translate(-2px, 2px); }
        50% { transform: translate(2px, -2px); }
        75% { transform: translate(-2px, -2px); }
        100% { transform: translate(2px, 2px); }
      }

      /* 2. PANELS (Signal Loss) */
      .noise-panel, .ds-panel, .ds-card, .noise-nav {
        background: #000;
        border: 1px solid #333;
        box-shadow: 0 0 10px rgba(255,255,255,0.05);
        padding: 20px;
        position: relative;
        overflow: hidden;
      }
      
      /* Interference Lines */
      .noise-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        top: 0; left: 0; width: 100%; height: 2px;
        background: rgba(255,255,255,0.1);
        animation: scanline 3s linear infinite;
        pointer-events: none;
      }
      
      @keyframes scanline {
        0% { top: -10%; }
        100% { top: 110%; }
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: #FFF;
        text-shadow: 2px 0 0 rgba(255,0,0,0.5), -2px 0 0 rgba(0,255,255,0.5);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        letter-spacing: -1px;
        text-transform: uppercase;
        mix-blend-mode: exclusion;
        color: #FFF;
      }
      .ds-hero-title span {
        background: #FFF;
        color: #000;
        padding: 0 5px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1rem;
        color: #AAA;
        border-left: 2px solid #555;
        padding-left: 15px;
      }

      /* 4. BUTTONS (Glitchy) */
      .noise-btn-primary, .ds-btn-primary {
        background: #FFF !important;
        color: #000 !important;
        border: 1px solid #FFF !important;
        border-radius: 0 !important;
        font-family: 'Courier Prime', monospace !important;
        font-weight: 700 !important;
        padding: 10px 25px !important;
        transition: all 0.1s !important;
      }
      .noise-btn-primary:hover, .ds-btn-primary:hover {
        background: #000 !important;
        color: #FFF !important;
        box-shadow: 4px 4px 0 #555 !important;
      }

      .noise-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #AAA !important;
        border: 1px solid #333 !important;
        border-radius: 0 !important;
      }
      .noise-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(255,255,255,0.1) !important;
        color: #FFF !important;
        border-color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .noise-nav, .ds-navbar {
        background: #050505;
        border-bottom: 1px solid #333;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 30px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 2px;
      }
      .ds-nav-links span {
        color: #666;
      }
      .ds-nav-links span:hover {
        color: #FFF;
        text-decoration: line-through;
      }

      /* 6. INPUTS */
      .noise-input, .ds-input {
        background: #000 !important;
        border: 1px solid #333 !important;
        border-radius: 0 !important;
        color: #FFF !important;
        font-family: 'Courier Prime', monospace;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #FFF !important;
        box-shadow: 0 0 10px rgba(255,255,255,0.2) !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px dashed #333;
      }
      .ds-stats .text-3xl {
        color: #FFF;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #333 !important;
        background: #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #111;
        color: #FFF;
        border-bottom: 1px solid #333 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFF !important;
        color: #000 !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #333 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 2px 6px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #050505 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #FFF !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        padding: 5px;
      }
      
      /* 10. TOGGLES (Static) */
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

      /* 10. BADGE */
      .noise-badge, .ds-badge {
        background: #333 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 2px 8px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #333 !important;
        margin-top: 60px;
      }
    `
  }
};
