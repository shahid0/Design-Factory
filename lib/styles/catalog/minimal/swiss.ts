
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'swiss')!;

export const swiss: StyleCartridge = {
  id: 'swiss',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F5F5F5', // Light Grey Canvas
      '--bg-layer-2': '#FFFFFF', // White
      '--text-primary': '#111111', // Helvetica Black
      '--text-secondary': '#666666',
      '--accent-color': '#FF3B30', // Swiss Red
      '--border-radius': '0px',
      '--font-display': '"Inter", "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    elementClasses: {
      stage: 'swiss-stage',
      navbar: 'swiss-nav',
      container: 'swiss-panel',
      buttonPrimary: 'swiss-btn-primary',
      buttonSecondary: 'swiss-btn-secondary',
      input: 'swiss-input',
      badge: 'swiss-badge'
    },
    injectCss: `
      /* --- SWISS STYLE ENGINE (International Typographic Style) --- */

      /* 1. GRID & ORDER */
      .swiss-stage {
        background-color: #F5F5F5;
        color: #111;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      }

      /* Alignment Guides (Visual only) */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        left: 50px; top: 0; bottom: 0; width: 1px;
        background: rgba(0,0,0,0.1);
        z-index: 0;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        right: 50px; top: 0; bottom: 0; width: 1px;
        background: rgba(0,0,0,0.1);
        z-index: 0;
      }

      /* 2. PANELS (Clean white space) */
      .swiss-panel, .ds-panel, .ds-card, .swiss-nav {
        background: #FFFFFF;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 40px; /* Generous padding */
      }
      
      .ds-panel:hover, .ds-card:hover {
        /* No movement, perhaps a subtle red line */
        border-left: 4px solid var(--accent-color);
        padding-left: 36px; /* Adjust for border */
      }

      /* 3. TYPOGRAPHY (Hierarchy) */
      .ds-hero-title {
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: -2px;
        line-height: 0.9;
        text-align: left;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        display: block; /* Break line for impact */
      }
      .ds-hero-text {
        font-size: 1.5rem;
        line-height: 1.4;
        max-width: 700px;
        font-weight: 400;
        color: #333;
        margin-top: 30px;
      }
      
      .ds-hero {
         align-items: flex-start; /* Left align everything */
         text-align: left;
         padding-left: 50px; /* Align with guide */
      }

      /* 4. BUTTONS (Functional) */
      .swiss-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        padding: 15px 40px !important;
        font-size: 1rem !important;
        border: none !important;
        transition: opacity 0.2s !important;
      }
      .swiss-btn-primary:hover, .ds-btn-primary:hover {
        opacity: 0.8;
        transform: none !important;
        box-shadow: none !important;
      }

      .swiss-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #111 !important;
        border: 2px solid #111 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
      }
      .swiss-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #111 !important;
        color: white !important;
      }

      /* 5. NAVIGATION */
      .swiss-nav, .ds-navbar {
        background: #FFFFFF;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 50px; /* Align with guide */
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -1px;
        font-size: 1.5rem;
      }
      .ds-logo span {
         color: var(--accent-color);
      }
      .ds-nav-links span {
        font-weight: 700;
        font-size: 0.9rem;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
      }

      /* 6. INPUTS */
      .swiss-input, .ds-input {
        background: #F5F5F5 !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 20px !important;
        font-weight: 700;
        font-size: 1rem;
      }
      .ds-input:focus {
        background: #EEE !important;
        box-shadow: inset 4px 0 0 var(--accent-color) !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: #FFFFFF !important;
        border-top: 10px solid #F5F5F5;
        border-bottom: 10px solid #F5F5F5;
      }
      .ds-stats > div > div {
        background: transparent;
        border-left: 1px solid #EEE;
        padding: 40px;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        font-size: 3rem;
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #999;
        text-transform: lowercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 0 !important;
        border-top: 4px solid var(--accent-color) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #EEE !important;
      }
      .ds-table-container > div:first-child {
        background: #FFFFFF;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F9F9F9 !important;
      }
      /* Status */
      .ds-table-container span {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 0;
        font-weight: 700;
        padding: 2px 8px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #F5F5F5 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #FFFFFF !important;
        border: 4px solid var(--accent-color) !important;
        z-index: 10;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        border-radius: 0;
        font-weight: 700;
        top: 0; left: 0;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .swiss-badge, .ds-badge {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 0;
        font-weight: 700;
        padding: 5px 10px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #111 !important;
        color: white !important;
        margin-top: 100px;
        padding-left: 50px;
      }
      .ds-footer * { color: white !important; }
    `
  }
};
