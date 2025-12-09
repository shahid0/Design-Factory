
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'zen')!;

export const wabiSabi: StyleCartridge = {
  id: 'zen',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#E6E2DD', // Raw Linen / Clay
      '--bg-layer-2': '#F0EFEA', // Lighter Stone
      '--text-primary': '#4A4843', // Soot / Charcoal
      '--text-secondary': '#7A756C', // Stone Grey
      '--accent-color': '#8C7B70', // Rust / Clay
      '--border-radius': '2px', // Imperfect (simulated)
      '--font-display': '"Spectral", "Lora", serif',
    },
    elementClasses: {
      stage: 'zen-stage',
      navbar: 'zen-nav',
      container: 'zen-panel',
      buttonPrimary: 'zen-btn-primary',
      buttonSecondary: 'zen-btn-secondary',
      input: 'zen-input',
      badge: 'zen-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,300;0,400;0,600;1,400&family=Lora:ital@0;1&display=swap');

      /* --- WABI-SABI (ZEN) ENGINE --- */

      .zen-stage {
        background-color: #E6E2DD;
        color: #4A4843;
        font-family: 'Spectral', serif;
      }

      /* Texture: Handmade Paper */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
        opacity: 0.6;
        mix-blend-mode: multiply;
        z-index: -1;
        pointer-events: none;
      }

      /* Organic Shape */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; right: 10%;
        width: 400px; height: 400px;
        background: #DEDAD4;
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        opacity: 0.5;
        z-index: -2;
      }

      /* 2. CONTAINERS (Imperfect) */
      .zen-panel, .ds-panel, .ds-card, .zen-nav {
        background: #F0EFEA;
        border: none;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.05);
        /* Subtle organic radius tweak via clip-path if we wanted, but border-radius + shadow is cleaner */
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px; 
        padding: 30px;
        margin: 20px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: #F5F4EF;
        box-shadow: 4px 4px 10px rgba(0,0,0,0.08);
        transform: translateY(-1px);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 300;
        font-style: italic;
        color: #2E2C29;
        letter-spacing: 0.05em;
      }
      .ds-hero-title span {
        color: #8C7B70;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 400;
        font-style: normal;
      }
      .ds-hero-text {
        font-family: 'Lora', serif;
        color: #5C5852;
        line-height: 1.8;
        font-size: 1.1rem;
      }

      /* 4. BUTTONS (Stones) */
      .zen-btn-primary, .ds-btn-primary {
        background: #4A4843 !important;
        color: #E6E2DD !important;
        border-radius: 50% 40% 60% 40% / 40% 60% 40% 50% !important; /* Stone shape */
        padding: 12px 36px !important;
        border: none !important;
        font-family: 'Spectral', serif !important;
        letter-spacing: 1px;
        transition: all 0.3s ease !important;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.1) !important;
      }
      .zen-btn-primary:hover, .ds-btn-primary:hover {
        background: #2E2C29 !important;
        transform: scale(1.02);
      }

      .zen-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #4A4843 !important;
        border: 1px solid #9C968E !important;
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
        font-family: 'Spectral', serif !important;
      }
      .zen-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: #4A4843 !important;
        background: rgba(255,255,255,0.2) !important;
      }

      /* 5. NAVIGATION */
      .zen-nav, .ds-navbar {
        background: #F0EFEA;
        border-bottom: 1px solid rgba(0,0,0,0.05);
        margin: 20px auto !important;
        width: calc(100% - 60px) !important;
        box-shadow: none !important;
      }
      .ds-logo {
        font-weight: 300;
        letter-spacing: 2px;
        color: #2E2C29;
      }
      .ds-nav-links span {
        font-family: 'Lora', serif;
        font-size: 0.9rem;
        color: #7A756C;
      }
      .ds-nav-links span:hover {
        color: #4A4843;
      }

      /* 6. INPUTS */
      .zen-input, .ds-input {
        background: transparent !important;
        border: none !important;
        border-bottom: 1px solid #9C968E !important;
        border-radius: 0 !important;
        padding-left: 10px !important;
        font-family: 'Lora', serif;
        color: #4A4843 !important;
        font-style: italic;
      }
      .ds-input:focus {
        border-bottom-color: #4A4843 !important;
        background: rgba(255,255,255,0.1) !important;
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
        background: transparent;
        border-left: 1px solid #CCC;
        padding: 20px 30px;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        color: #8C7B70;
      }
      .ds-stats span:first-child {
        font-family: 'Lora', serif;
        font-size: 0.85rem;
        color: #9C968E;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: #F0EFEA !important;
        border-radius: 10px !important; /* Soft corners */
        box-shadow: 2px 2px 10px rgba(0,0,0,0.03) !important;
        border: none !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E6E2DD !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.3);
        color: #7A756C;
        font-weight: 400;
        letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.5) !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #DEDAD4 !important;
        color: #5C5852 !important;
        border-radius: 10px;
        padding: 2px 10px;
        font-size: 0.8rem;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        background: #F0EFEA !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #F5F4EF !important;
        border: 1px solid #CCC !important;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.05) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #8C7B70;
      }
      .ds-card:nth-child(2) .absolute {
        background: #8C7B70;
        color: #F0EFEA;
        font-family: 'Spectral', serif;
        font-style: italic;
        padding: 4px 15px;
        top: 0; right: 20px;
        border-radius: 0 0 10px 10px;
      }

      /* 10. BADGE */
      .zen-badge, .ds-badge {
        background: #9C968E !important;
        color: #F0EFEA !important;
        border-radius: 10px;
        padding: 4px 12px;
        font-family: 'Lora', serif;
        font-style: italic;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #E0DCD7 !important;
        margin-top: 80px;
        padding-top: 60px;
      }
    `
  }
};
