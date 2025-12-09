
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'corporate')!;

export const corporateMemphis: StyleCartridge = {
  id: 'corporate',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#FFF0F5', // Light Pink
      '--text-primary': '#2D3436', // Slate
      '--text-secondary': '#636E72',
      '--accent-color': '#6C5CE7', // Tech Purple
      '--border-radius': '24px',
      '--font-display': '"Circular Std", "Poppins", sans-serif',
    },
    elementClasses: {
      stage: 'corp-stage',
      navbar: 'corp-nav',
      container: 'corp-panel',
      buttonPrimary: 'corp-btn-primary',
      buttonSecondary: 'corp-btn-secondary',
      input: 'corp-input',
      badge: 'corp-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap');

      /* --- CORPORATE MEMPHIS ENGINE --- */

      .corp-stage {
        background-color: #FFFFFF;
        color: #2D3436;
        font-family: 'Poppins', sans-serif;
      }

      /* Flat Vector Shapes */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 10%; right: -5%;
        width: 300px; height: 600px;
        background: #FDCB6E; /* Mustard */
        border-radius: 150px;
        transform: rotate(30deg);
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: -10%; left: -5%;
        width: 400px; height: 400px;
        background: #74B9FF; /* Blue */
        border-radius: 50%;
        z-index: -1;
      }

      /* 2. CONTAINERS (Flat & Friendly) */
      .corp-panel, .ds-panel, .ds-card, .corp-nav {
        background: #FFFFFF;
        border: none;
        border-radius: 24px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        padding: 30px;
        transition: transform 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 50px rgba(108, 92, 231, 0.2);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 800;
        letter-spacing: -1px;
        color: #2D3436;
        line-height: 1.1;
      }
      .ds-hero-title span {
        color: #6C5CE7;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 400;
        color: #636E72;
        font-size: 1.2rem;
      }

      /* 4. BUTTONS (Big & Bold) */
      .corp-btn-primary, .ds-btn-primary {
        background: #6C5CE7 !important;
        color: #FFFFFF !important;
        border-radius: 50px !important;
        font-weight: 800 !important;
        padding: 15px 40px !important;
        border: none !important;
        box-shadow: 0 4px 15px rgba(108, 92, 231, 0.4) !important;
        transition: transform 0.2s !important;
      }
      .corp-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05);
        background: #5649C0 !important;
      }

      .corp-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #DFE6E9 !important;
        color: #2D3436 !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        border: none !important;
      }
      .corp-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #B2BEC3 !important;
      }

      /* 5. NAVIGATION */
      .corp-nav, .ds-navbar {
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-weight: 800;
        letter-spacing: -1px;
        color: #6C5CE7;
      }
      .ds-nav-links span {
        font-weight: 600;
        color: #636E72;
      }
      .ds-nav-links span:hover {
        color: #6C5CE7;
      }

      /* 6. INPUTS */
      .corp-input, .ds-input {
        background: #F1F2F6 !important;
        border: 2px solid transparent !important;
        border-radius: 12px !important;
        color: #2D3436 !important;
        font-weight: 600;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #6C5CE7 !important;
        box-shadow: 0 0 0 4px rgba(108, 92, 231, 0.1) !important;
      }
      .ds-input-decorator {
        background: #00B894 !important; /* Green */
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
        border-radius: 20px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.05);
      }
      .ds-stats .text-3xl {
        font-weight: 800;
        color: #0984E3; /* Blue */
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #B2BEC3;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 24px !important;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05) !important;
        border: none !important;
      }
      .ds-table-container > div:first-child {
        background: #A29BFE; /* Light Purple */
        color: #FFFFFF;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F8F9FA !important;
      }
      /* Status */
      .ds-table-container span {
        background: #55EFC4 !important; /* Mint */
        color: #006266 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 700;
        border: none;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFFFFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #6C5CE7 !important;
        transform: scale(1.05);
        z-index: 10;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #6C5CE7;
      }
      .ds-card:nth-child(2) .absolute {
        background: #6C5CE7;
        color: #FFFFFF;
        font-weight: 700;
        border-radius: 0 0 15px 15px;
        top: 0; right: 20px;
        padding: 5px 20px;
      }

      /* 10. BADGE */
      .corp-badge, .ds-badge {
        background: #FF7675 !important; /* Salmon */
        color: #FFFFFF !important;
        border-radius: 50px;
        padding: 5px 15px;
        font-weight: 700;
        box-shadow: 0 4px 10px rgba(255, 118, 117, 0.4);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #2D3436 !important;
        margin-top: 80px;
        color: #FFFFFF !important;
      }
      .ds-footer * {
         color: #FFFFFF !important;
      }
    `
  }
};
