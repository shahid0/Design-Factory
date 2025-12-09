
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'desert')!;

export const desertModern: StyleCartridge = {
  id: 'desert',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDFBF7', // Sand White
      '--bg-layer-2': '#F4EFE6', // Light Beige
      '--text-primary': '#5C4033', // Dark Earth
      '--text-secondary': '#A69080', // Clay
      '--accent-color': '#D27D56', // Terracotta
      '--border-radius': '16px',
      '--font-display': '"Outfit", "Century Gothic", sans-serif',
    },
    elementClasses: {
      stage: 'desert-stage',
      navbar: 'desert-nav',
      container: 'desert-card',
      buttonPrimary: 'desert-btn-primary',
      buttonSecondary: 'desert-btn-secondary',
      input: 'desert-input',
      badge: 'desert-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700&display=swap');

      /* --- DESERT MODERN ENGINE --- */

      .desert-stage {
        background-color: #FDFBF7;
        color: #5C4033;
        font-family: 'Outfit', sans-serif;
      }

      /* Organic Sun */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 10%; right: 10%;
        width: 300px; height: 300px;
        background: #D27D56;
        border-radius: 50%;
        opacity: 0.1;
        filter: blur(40px);
        z-index: -1;
      }
      
      /* Sand Wave */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 0; left: 0; right: 0;
        height: 40%;
        background: linear-gradient(to top, #F4EFE6, transparent);
        z-index: -1;
        pointer-events: none;
      }

      /* 2. CONTAINERS (Adobe) */
      .desert-card, .ds-panel, .ds-card, .desert-nav {
        background: #FFFFFF;
        border: none;
        border-radius: 24px;
        box-shadow: 0 10px 40px -10px rgba(92, 64, 51, 0.1);
        padding: 30px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 50px -10px rgba(210, 125, 86, 0.2);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #5C4033;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 300;
        color: #8C7B70;
        line-height: 1.7;
      }

      /* 4. BUTTONS (Sun Baked) */
      .desert-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFF !important;
        border-radius: 12px !important;
        font-weight: 500 !important;
        padding: 12px 32px !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(210, 125, 86, 0.4) !important;
        transition: all 0.3s ease !important;
      }
      .desert-btn-primary:hover, .ds-btn-primary:hover {
        background: #B96642 !important;
        transform: translateY(-2px);
      }

      .desert-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F4EFE6 !important;
        color: #5C4033 !important;
        border-radius: 12px !important;
        border: none !important;
        font-weight: 500 !important;
      }
      .desert-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E8E0D5 !important;
      }

      /* 5. NAVIGATION */
      .desert-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(10px);
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -0.5px;
      }
      .ds-nav-links span {
        color: #8C7B70;
        font-weight: 500;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
      }

      /* 6. INPUTS */
      .desert-input, .ds-input {
        background: #FDFBF7 !important;
        border: 2px solid #F4EFE6 !important;
        border-radius: 12px !important;
        padding-left: 20px !important;
        color: #5C4033 !important;
        font-weight: 500;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        background: #FFF !important;
      }
      .ds-input-decorator {
        background: #A69080 !important;
        border-radius: 50%;
        width: 8px !important; height: 8px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        border-radius: 16px;
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        color: var(--accent-color);
      }
      .ds-stats span:first-child {
        font-weight: 500;
        text-transform: uppercase;
        font-size: 0.8rem;
        color: #A69080;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 16px !important;
        border: none !important;
        background: #FFFFFF !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F4EFE6 !important;
      }
      .ds-table-container > div:first-child {
        background: #F9F6F0;
        color: #8C7B70;
        font-weight: 500;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FDFBF7 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #F4EFE6 !important;
        color: #5C4033 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 500;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FDFBF7 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #FFFFFF !important;
        border: 2px solid var(--accent-color) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        border-radius: 0 0 12px 12px;
        font-weight: 500;
        padding: 6px 16px;
        top: 0; right: 20px;
      }

      /* 10. BADGE */
      .desert-badge, .ds-badge {
        background: #F4EFE6 !important;
        color: #5C4033 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 500;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #F4EFE6 !important;
        margin-top: 80px;
      }
    `
  }
};
