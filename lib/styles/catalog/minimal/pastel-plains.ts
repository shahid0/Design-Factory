
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'pastel-plains')!;

export const pastelPlains: StyleCartridge = {
  id: 'pastel-plains',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFF9F9', // Soft Rose White
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#5D5D5D', // Soft Grey
      '--text-secondary': '#9E9E9E',
      '--accent-color': '#FFB7B2', // Pastel Coral/Pink
      '--border-radius': '24px',
      '--font-display': '"Quicksand", "Nunito", sans-serif',
    },
    elementClasses: {
      stage: 'pastel-stage',
      navbar: 'pastel-nav',
      container: 'pastel-card',
      buttonPrimary: 'pastel-btn-primary',
      buttonSecondary: 'pastel-btn-secondary',
      input: 'pastel-input',
      badge: 'pastel-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600;700&display=swap');

      /* --- PASTEL PLAINS ENGINE --- */

      .pastel-stage {
        background-color: #FFF9F9;
        color: #5D5D5D;
        font-family: 'Quicksand', sans-serif;
      }

      /* Soft Blotches */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: -10%; left: -10%;
        width: 60vh; height: 60vh;
        background: radial-gradient(circle, #E2F0CB 0%, transparent 70%); /* Pastel Green */
        opacity: 0.4;
        filter: blur(60px);
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: -10%; right: -10%;
        width: 60vh; height: 60vh;
        background: radial-gradient(circle, #FFDAC1 0%, transparent 70%); /* Pastel Peach */
        opacity: 0.4;
        filter: blur(60px);
        z-index: -1;
      }

      /* 2. CONTAINERS (Soft Cards) */
      .pastel-card, .ds-panel, .ds-card, .pastel-nav {
        background: #FFFFFF;
        border-radius: 24px;
        border: none;
        box-shadow: 0 10px 40px -10px rgba(255, 183, 178, 0.15); /* Tinted shadow */
        padding: 32px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 50px -10px rgba(255, 183, 178, 0.25);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        color: #5D5D5D;
        letter-spacing: -0.5px;
      }
      .ds-hero-title span {
        color: #FF9AA2; /* Pastel Red/Pink */
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 600;
        color: #9E9E9E;
        font-size: 1.1rem;
      }

      /* 4. BUTTONS (Marshmallow) */
      .pastel-btn-primary, .ds-btn-primary {
        background: #FFB7B2 !important;
        color: #FFFFFF !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        padding: 12px 32px !important;
        border: none !important;
        box-shadow: 0 4px 15px rgba(255, 183, 178, 0.4) !important;
        transition: all 0.3s ease !important;
      }
      .pastel-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF9AA2 !important;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(255, 154, 162, 0.5) !important;
      }

      .pastel-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #E2F0CB !important; /* Pastel Green */
        color: #6B8E23 !important; /* Olive text */
        border-radius: 50px !important;
        border: none !important;
        font-weight: 700 !important;
      }
      .pastel-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #D4E8B0 !important;
      }

      /* 5. NAVIGATION */
      .pastel-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        margin: 24px !important;
        width: calc(100% - 48px) !important;
        border-radius: 50px;
        padding: 16px 32px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.02);
      }
      .ds-logo {
        font-weight: 700;
        color: #FFB7B2;
      }
      .ds-nav-links span {
        color: #9E9E9E;
        font-weight: 600;
        transition: color 0.2s;
      }
      .ds-nav-links span:hover {
        color: #FFB7B2;
      }

      /* 6. INPUTS */
      .pastel-input, .ds-input {
        background: #FDFDFD !important;
        border: 2px solid #F0F0F0 !important;
        border-radius: 20px !important;
        padding-left: 20px !important;
        color: #5D5D5D !important;
        font-weight: 600;
        font-size: 1rem;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #FFB7B2 !important;
        box-shadow: 0 0 0 4px rgba(255, 183, 178, 0.1) !important;
      }
      .ds-input-decorator {
        background: #B5EAD7 !important; /* Pastel Mint */
        border-radius: 50%;
        width: 12px !important; height: 12px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        border-radius: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #C7CEEA; /* Pastel Purple */
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #FFB7B2;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 24px !important;
        border: 2px solid #F9F9F9 !important;
        box-shadow: none !important;
      }
      .ds-table-container > div {
        border-bottom: 2px solid #F9F9F9 !important;
      }
      .ds-table-container > div:first-child {
        background: #FFF5F5; /* Very light pink */
        color: #FFB7B2;
        font-weight: 700;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FDFFFA !important; /* Very light green */
      }
      /* Status Pill */
      .ds-table-container span {
        background: #E2F0CB !important;
        color: #5D5D5D !important;
        border-radius: 50px;
        font-weight: 700;
        padding: 4px 12px;
      }

      /* 9. PRICING */
      .ds-card {
        border: 2px solid #F9F9F9 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #FFB7B2 !important;
        transform: scale(1.03);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFB7B2;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFB7B2;
        color: white;
        border-radius: 0 0 16px 16px;
        font-weight: 700;
        top: 0; right: 30px;
        padding: 6px 16px;
      }

      /* 10. BADGE */
      .pastel-badge, .ds-badge {
        background: #C7CEEA !important;
        color: #FFFFFF !important;
        border-radius: 50px;
        font-weight: 700;
        padding: 4px 12px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        margin-top: 60px;
        border-top: 2px solid #F9F9F9 !important;
      }
    `
  }
};
