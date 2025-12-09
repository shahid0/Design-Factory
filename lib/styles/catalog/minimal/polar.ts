
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'polar')!;

export const polar: StyleCartridge = {
  id: 'polar',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F0F8FF', // Alice Blue
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#0B1E3B', // Dark Ice
      '--text-secondary': '#607D8B', // Blue Grey
      '--accent-color': '#00BFFF', // Deep Sky Blue
      '--border-radius': '4px',
      '--font-display': '"Exo 2", "Arial", sans-serif',
    },
    elementClasses: {
      stage: 'polar-stage',
      navbar: 'polar-nav',
      container: 'polar-card',
      buttonPrimary: 'polar-btn-primary',
      buttonSecondary: 'polar-btn-secondary',
      input: 'polar-input',
      badge: 'polar-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;500;700&display=swap');

      /* --- POLAR ENGINE --- */

      .polar-stage {
        background-color: #F0F8FF;
        color: #0B1E3B;
        font-family: 'Exo 2', sans-serif;
        background-image: linear-gradient(135deg, #F0F8FF 0%, #E6F2FF 100%);
      }

      /* Frosted Texture */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
        opacity: 0.5;
        z-index: -1;
      }

      /* 2. CONTAINERS (Ice Blocks) */
      .polar-card, .ds-panel, .ds-card, .polar-nav {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 0 4px 6px rgba(11, 30, 59, 0.05);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
      }
      
      /* Ice Sheen */
      .polar-card::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent, white, transparent);
        opacity: 0.8;
      }

      .ds-panel:hover, .ds-card:hover {
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 8px 15px rgba(0, 191, 255, 0.1);
        border-color: #E0F7FA;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        color: #0B1E3B;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 20px rgba(0, 191, 255, 0.2);
      }
      .ds-hero-text {
        color: #607D8B;
        font-weight: 300;
        font-size: 1.1rem;
      }

      /* 4. BUTTONS (Ice Shards) */
      .polar-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #00BFFF 0%, #0099CC 100%) !important;
        color: #FFF !important;
        border-radius: 2px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        font-size: 0.9rem !important;
        padding: 10px 24px !important;
        border: none !important;
        box-shadow: 0 4px 6px rgba(0, 191, 255, 0.2) !important;
        transition: all 0.2s !important;
      }
      .polar-btn-primary:hover, .ds-btn-primary:hover {
        background: linear-gradient(135deg, #00CCFF 0%, #00BFFF 100%) !important;
        transform: translateY(-2px);
        box-shadow: 0 6px 10px rgba(0, 191, 255, 0.3) !important;
      }

      .polar-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 255, 255, 0.5) !important;
        color: #0B1E3B !important;
        border: 1px solid #B0E0E6 !important; /* Powder Blue */
        border-radius: 2px !important;
        font-weight: 500 !important;
      }
      .polar-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFFFFF !important;
        border-color: var(--accent-color) !important;
      }

      /* 5. NAVIGATION */
      .polar-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.8);
        border-bottom: 1px solid #E0F2F1;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 1px;
        color: #00BFFF;
      }
      .ds-nav-links span {
        font-weight: 500;
        color: #607D8B;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #0B1E3B;
      }

      /* 6. INPUTS */
      .polar-input, .ds-input {
        background: rgba(255, 255, 255, 0.6) !important;
        border: 1px solid #B0E0E6 !important;
        border-radius: 2px !important;
        color: #0B1E3B !important;
        padding-left: 15px !important;
        font-family: 'Exo 2', sans-serif;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 5px rgba(0, 191, 255, 0.2) !important;
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
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      }
      .ds-stats .text-3xl {
        color: #0099CC;
        font-weight: 300;
      }
      .ds-stats span:first-child {
        color: #607D8B;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.75rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 4px !important;
        border: 1px solid #E0F2F1 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F0F8FF !important;
      }
      .ds-table-container > div:first-child {
        background: #E6F2FF;
        color: #0B1E3B;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.8rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F0FAFF !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #E0F7FA !important;
        color: #0099CC !important;
        border-radius: 2px;
        padding: 2px 8px;
        font-size: 0.75rem;
        font-weight: 700;
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(255,255,255,0.6) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #FFFFFF !important;
        border: 1px solid var(--accent-color) !important;
        box-shadow: 0 8px 20px rgba(0, 191, 255, 0.15) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.8rem;
        padding: 4px 12px;
        top: 0; right: 0;
        border-bottom-left-radius: 4px;
      }

      /* 10. BADGE */
      .polar-badge, .ds-badge {
        background: #E0F7FA !important;
        color: #006064 !important;
        border-radius: 2px;
        padding: 4px 10px;
        font-size: 0.8rem;
        font-weight: 700;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #0B1E3B !important;
        color: #E0F2F1 !important;
        margin-top: 80px;
      }
      .ds-footer * { color: #E0F2F1 !important; opacity: 0.8; }
    `
  }
};
