
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'monochrome')!;

export const monochrome: StyleCartridge = {
  id: 'monochrome',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#000000', // Black Accent
      '--border-radius': '0px',
      '--font-display': '"Inter", "Helvetica Neue", sans-serif',
    },
    elementClasses: {
      stage: 'mono-stage',
      navbar: 'mono-nav',
      container: 'mono-panel',
      buttonPrimary: 'mono-btn-primary',
      buttonSecondary: 'mono-btn-secondary',
      input: 'mono-input',
      badge: 'mono-badge'
    },
    injectCss: `
      /* --- STRICT MONOCHROME ENGINE --- */

      /* 1. BINARY WORLD */
      .mono-stage {
        background-color: #FFFFFF;
        color: #000000;
        font-family: 'Inter', sans-serif;
      }

      /* No decorations, just structure */
      .ds-deco-layer { display: none; }

      /* 2. BORDERS & LINES */
      .mono-panel, .ds-panel, .ds-card, .mono-nav {
        background: #FFFFFF;
        border: 1px solid #000000;
        border-radius: 0;
        box-shadow: none;
        transition: all 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: #000000;
        color: #FFFFFF;
        transform: none;
      }
      /* Invert children on hover */
      .ds-panel:hover *, .ds-card:hover * {
        color: #FFFFFF !important;
        border-color: #FFFFFF !important;
      }
      .ds-panel:hover svg {
         color: #FFFFFF;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -2px;
        color: #000;
        font-size: 5rem;
      }
      .ds-hero-title span {
        background: #000;
        color: #FFF;
        padding: 0 10px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 500;
        color: #000;
      }

      /* 4. BUTTONS (Inverted) */
      .mono-btn-primary, .ds-btn-primary {
        background: #000000 !important;
        color: #FFFFFF !important;
        border: 2px solid #000000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        padding: 16px 40px !important;
        transition: all 0.2s !important;
      }
      .mono-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFFFFF !important;
        color: #000000 !important;
      }

      .mono-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: #000000 !important;
        border: 1px solid #000000 !important;
        border-radius: 0 !important;
        font-weight: 600 !important;
        text-transform: uppercase;
      }
      .mono-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000000 !important;
        color: #FFFFFF !important;
      }

      /* 5. NAVIGATION */
      .mono-nav, .ds-navbar {
        border-bottom: 2px solid #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 30px 50px;
        border-top: none; border-left: none; border-right: none;
      }
      .ds-logo {
        font-weight: 900;
        letter-spacing: -1px;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        text-decoration: line-through;
      }

      /* 6. INPUTS */
      .mono-input, .ds-input {
        background: #FFFFFF !important;
        border: 2px solid #000000 !important;
        border-radius: 0 !important;
        color: #000000 !important;
        font-weight: 600;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: #000000 !important;
        color: #FFFFFF !important;
        box-shadow: none !important;
      }
      .ds-input-decorator {
        background: #000 !important;
        border-radius: 0;
        right: 20px !important; left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #000;
      }
      .ds-stats .text-3xl {
        font-weight: 900;
        color: #000;
      }
      .ds-stats span:first-child {
        font-weight: 700;
        text-transform: uppercase;
        color: #000;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 2px solid #000 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-weight: 900;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #000 !important;
        color: #FFF !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #FFF !important;
      }
      /* Status */
      .ds-table-container span {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        font-weight: 700;
      }

      /* 9. PRICING */
      .ds-card {
        padding: 40px !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #000 !important;
        color: #FFF !important;
      }
      .ds-card:nth-child(2) * {
         color: #FFF !important;
         border-color: #FFF !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        text-decoration: underline;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000 !important;
        border-radius: 0;
        font-weight: 900;
        top: 0; right: 0;
        padding: 10px;
      }
      .ds-card:nth-child(2) button {
         background: #FFF !important;
         color: #000 !important;
      }
      .ds-card:nth-child(2) button:hover {
         background: #333 !important;
         color: #FFF !important;
      }

      /* 10. BADGE */
      .mono-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 5px 10px;
        font-weight: 900;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        margin-top: 80px;
      }
      .ds-footer * {
         color: #FFF !important;
      }
    `
  }
};
