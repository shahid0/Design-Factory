
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'scandi')!;

export const scandinavian: StyleCartridge = {
  id: 'scandi',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F7F6F3', // Warm Grey / Off White
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#4A4A4A', // Soft Black
      '--text-secondary': '#9B9B9B',
      '--accent-color': '#7F9086', // Sage Green
      '--border-radius': '16px',
      '--font-display': '"Mulish", "Nunito", sans-serif',
    },
    elementClasses: {
      stage: 'scandi-stage',
      navbar: 'scandi-nav',
      container: 'scandi-card',
      buttonPrimary: 'scandi-btn-primary',
      buttonSecondary: 'scandi-btn-secondary',
      input: 'scandi-input',
      badge: 'scandi-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;700&display=swap');

      /* --- SCANDINAVIAN MINIMALISM --- */

      /* 1. HYGGE ATMOSPHERE */
      .scandi-stage {
        background-color: #F7F6F3;
        color: #4A4A4A;
        font-family: 'Mulish', sans-serif;
      }

      /* Organic Shape Blob */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: -10%; left: -10%;
        width: 600px; height: 600px;
        background: #E8E6E1;
        border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 10%; right: -5%;
        width: 400px; height: 400px;
        background: #E0E5DF; /* Sage tint */
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        z-index: -1;
      }

      /* 2. CARDS (Soft Shadow) */
      .scandi-card, .ds-panel, .ds-card, .scandi-nav {
        background: #FFFFFF;
        border-radius: 16px;
        border: none;
        box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0,0,0,0.06);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        color: #2D2D2D;
        letter-spacing: -0.5px;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 300;
        color: #777;
        line-height: 1.8;
      }

      /* 4. BUTTONS (Natural) */
      .scandi-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 12px !important;
        font-weight: 600 !important;
        padding: 12px 32px !important;
        border: none !important;
        box-shadow: 0 4px 10px rgba(127, 144, 134, 0.3) !important;
        transition: all 0.3s ease !important;
      }
      .scandi-btn-primary:hover, .ds-btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 15px rgba(127, 144, 134, 0.4) !important;
      }

      .scandi-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F0F0F0 !important;
        color: #4A4A4A !important;
        border-radius: 12px !important;
        border: none !important;
        font-weight: 600 !important;
      }
      .scandi-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E5E5E5 !important;
      }

      /* 5. NAVIGATION */
      .scandi-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border-radius: 20px;
        padding: 15px 30px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -0.5px;
        color: #2D2D2D;
      }
      .ds-nav-links span {
        color: #777;
        font-weight: 600;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
      }

      /* 6. INPUTS */
      .scandi-input, .ds-input {
        background: #FAFAFA !important;
        border: 1px solid #EEE !important;
        border-radius: 12px !important;
        padding-left: 20px !important;
        color: #4A4A4A !important;
        transition: all 0.2s;
      }
      .ds-input:focus {
        background: #FFF !important;
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 0 3px rgba(127, 144, 134, 0.1) !important;
      }
      .ds-input-decorator {
        background: #E0E5DF !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        border-radius: 16px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.02);
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        color: var(--accent-color);
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #9B9B9B;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 1px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 20px !important;
        box-shadow: 0 5px 20px rgba(0,0,0,0.03) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F7F6F3 !important;
      }
      .ds-table-container > div:first-child {
        background: #FAFAFA;
        color: #9B9B9B;
        font-weight: 600;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FDFBF8 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #E0E5DF !important;
        color: #5D6B63 !important;
        border-radius: 50px;
        font-weight: 600;
        padding: 4px 12px;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid var(--accent-color) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        border-radius: 0 0 12px 12px;
        font-weight: 600;
        top: 0; right: 20px;
        padding: 6px 16px;
      }

      /* 10. BADGE */
      .scandi-badge, .ds-badge {
        background: #E0E5DF !important;
        color: #5D6B63 !important;
        border-radius: 50px;
        font-weight: 600;
        padding: 6px 16px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        margin-top: 60px;
      }
    `
  }
};
