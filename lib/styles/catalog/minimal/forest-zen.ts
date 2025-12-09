
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'forest-zen')!;

export const forestZen: StyleCartridge = {
  id: 'forest-zen',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F1F8F1', // Pale Mint/Mist
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#1B3A2B', // Deep Forest Green
      '--text-secondary': '#557C64', // Fern Green
      '--accent-color': '#2E8B57', // Sea Green
      '--border-radius': '16px',
      '--font-display': '"DM Sans", "Inter", sans-serif',
    },
    elementClasses: {
      stage: 'forest-stage',
      navbar: 'forest-nav',
      container: 'forest-panel',
      buttonPrimary: 'forest-btn-primary',
      buttonSecondary: 'forest-btn-secondary',
      input: 'forest-input',
      badge: 'forest-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');

      /* --- FOREST ZEN ENGINE --- */

      .forest-stage {
        background-color: #F1F8F1;
        color: #1B3A2B;
        font-family: 'DM Sans', sans-serif;
      }

      /* Leaf Pattern Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: radial-gradient(#A2C4B1 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.3;
        z-index: -1;
      }
      
      /* Organic Curve */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 0; left: 0; right: 0;
        height: 40vh;
        background: linear-gradient(to top, rgba(162, 196, 177, 0.2), transparent);
        z-index: -1;
        pointer-events: none;
      }

      /* 2. CONTAINERS (Clean & Calm) */
      .forest-panel, .ds-panel, .ds-card, .forest-nav {
        background: #FFFFFF;
        border-radius: 16px;
        border: 1px solid #E0EBE4;
        box-shadow: 0 4px 20px rgba(27, 58, 43, 0.04);
        padding: 30px;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 30px rgba(27, 58, 43, 0.08);
        border-color: #CDE2D6;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        letter-spacing: -0.03em;
        color: #1B3A2B;
      }
      .ds-hero-title span {
        color: #2E8B57;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 400;
        color: #557C64;
        line-height: 1.7;
      }

      /* 4. BUTTONS (Nature) */
      .forest-btn-primary, .ds-btn-primary {
        background: #1B3A2B !important;
        color: #FFFFFF !important;
        border-radius: 8px !important;
        font-weight: 500 !important;
        padding: 12px 28px !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(27, 58, 43, 0.2) !important;
        transition: all 0.3s ease !important;
      }
      .forest-btn-primary:hover, .ds-btn-primary:hover {
        background: #2E8B57 !important;
        transform: translateY(-1px);
        box-shadow: 0 6px 16px rgba(46, 139, 87, 0.3) !important;
      }

      .forest-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F1F8F1 !important;
        color: #1B3A2B !important;
        border-radius: 8px !important;
        font-weight: 500 !important;
        border: none !important;
      }
      .forest-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E0EBE4 !important;
      }

      /* 5. NAVIGATION */
      .forest-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(8px);
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border: 1px solid #E0EBE4;
        padding: 15px 30px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.02);
      }
      .ds-logo {
        font-weight: 700;
        color: #2E8B57;
        letter-spacing: -0.02em;
      }
      .ds-nav-links span {
        color: #557C64;
        font-weight: 500;
      }
      .ds-nav-links span:hover {
        color: #1B3A2B;
      }

      /* 6. INPUTS */
      .forest-input, .ds-input {
        background: #F8FAF9 !important;
        border: 1px solid #E0EBE4 !important;
        border-radius: 8px !important;
        padding-left: 20px !important;
        color: #1B3A2B !important;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #2E8B57 !important;
        box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1) !important;
      }
      .ds-input-decorator {
        background: #88BBA3 !important;
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
        border: 1px solid #E0EBE4;
        border-radius: 12px;
      }
      .ds-stats .text-3xl {
        font-weight: 500;
        color: #2E8B57;
      }
      .ds-stats span:first-child {
        font-weight: 500;
        color: #88BBA3;
        font-size: 0.8rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 12px !important;
        border: 1px solid #E0EBE4 !important;
        box-shadow: none !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F1F8F1 !important;
      }
      .ds-table-container > div:first-child {
        background: #F1F8F1;
        color: #557C64;
        font-weight: 600;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #F8FAF9 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #E0EBE4 !important;
        color: #1B3A2B !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 500;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFFFFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #2E8B57 !important;
        background: #F8FAF9 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #2E8B57;
      }
      .ds-card:nth-child(2) .absolute {
        background: #2E8B57;
        color: white;
        border-radius: 0 0 8px 8px;
        font-weight: 600;
        top: 0; right: 24px;
        padding: 4px 12px;
        font-size: 0.8rem;
      }

      /* 10. BADGE */
      .forest-badge, .ds-badge {
        background: #E0EBE4 !important;
        color: #1B3A2B !important;
        border-radius: 50px;
        padding: 4px 10px;
        font-weight: 500;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        margin-top: 60px;
        border-top: 1px solid #E0EBE4 !important;
      }
    `
  }
};
