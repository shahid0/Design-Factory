
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'bento')!;

export const bento: StyleCartridge = {
  id: 'bento',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F5F5F7', // Apple Grey
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#1D1D1F', // SF Black
      '--text-secondary': '#86868B', // SF Grey
      '--accent-color': '#0071E3', // Apple Blue
      '--border-radius': '28px', // Continuous Curve
      '--font-display': '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#F5F5F7]',
      navbar: 'bento-glass',
      container: 'bento-card',
      buttonPrimary: 'bento-btn-primary',
      buttonSecondary: 'bento-btn-secondary',
      input: 'bento-input',
      badge: 'bento-badge'
    },
    injectCss: `
      /* --- BENTO GRID SYSTEM --- */

      .ds-page-root {
        font-family: var(--font-display);
        -webkit-font-smoothing: antialiased;
      }

      /* 1. CARDS (The Bento Box) */
      .bento-card, .ds-panel, .ds-card {
        background: #FFFFFF;
        border-radius: var(--border-radius);
        /* Diffuse, multi-layer shadow for depth */
        box-shadow: 
          0 4px 6px -1px rgba(0, 0, 0, 0.02),
          0 2px 4px -1px rgba(0, 0, 0, 0.02),
          0 20px 40px -10px rgba(0, 0, 0, 0.06);
        border: none;
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 0.4s;
        overflow: hidden;
        position: relative;
      }
      
      /* Subtle border ring for definition */
      .bento-card::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        border: 1px solid rgba(0,0,0,0.04);
        pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.02);
        box-shadow: 
          0 25px 50px -12px rgba(0, 0, 0, 0.12);
        z-index: 10;
      }

      /* 2. NAVIGATION (Floating Dock) */
      .bento-glass, .ds-navbar {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(20px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-radius: 99px; /* Pill */
        margin: 24px auto !important;
        width: auto !important;
        display: inline-flex;
        padding: 12px 32px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        /* Center it */
        position: relative;
        left: 50%;
        transform: translateX(-50%);
      }
      /* Override flex layout for centered nav */
      .ds-navbar {
         justify-content: center;
         gap: 40px;
      }
      
      /* Tabs */
      .ds-nav-links span {
         color: var(--text-secondary);
         transition: color 0.2s;
      }
      .ds-nav-links span:hover, .ds-nav-links span.active {
         color: var(--text-primary);
         background: rgba(0,0,0,0.05);
         padding: 6px 12px;
         border-radius: 99px;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 600;
        letter-spacing: -0.03em;
        color: #1D1D1F;
        line-height: 1.05;
      }
      .ds-hero-title span {
        background: linear-gradient(135deg, #2997FF 0%, #B620E0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
      }
      .ds-hero-text {
        font-weight: 400;
        color: #86868B;
        font-size: 1.3rem;
        line-height: 1.5;
        max-width: 600px;
        margin: 24px auto;
      }

      /* 4. BUTTONS */
      .bento-btn-primary, .ds-btn-primary {
        background: #0071E3 !important;
        color: #FFF !important;
        border-radius: 99px !important;
        padding: 12px 28px !important;
        font-size: 15px !important;
        font-weight: 500 !important;
        border: none !important;
        transition: transform 0.15s ease, background 0.2s !important;
      }
      .bento-btn-primary:hover, .ds-btn-primary:hover {
        background: #0077ED !important;
        transform: scale(1.02);
      }
      .bento-btn-primary:active, .ds-btn-primary:active {
        transform: scale(0.98);
        background: #006EDB !important;
      }

      .bento-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #E8E8ED !important; /* System Light Gray */
        color: #1D1D1F !important;
        border-radius: 99px !important;
        font-weight: 500 !important;
        border: none !important;
      }
      .bento-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #DDCDE !important;
      }

      /* 5. INPUTS (Soft) */
      .bento-input, .ds-input {
        background: #F5F5F7 !important;
        border: 1px solid transparent !important;
        border-radius: 12px !important;
        font-size: 17px !important;
        padding: 14px 16px !important;
        padding-left: 44px !important;
        color: #1D1D1F !important;
        transition: all 0.2s;
      }
      .ds-input:focus {
        background: #FFF !important;
        border-color: #0071E3 !important;
        box-shadow: 0 0 0 4px rgba(0, 113, 227, 0.15) !important;
      }
      .ds-input-decorator {
        left: 14px !important;
        color: #86868B;
        background: transparent !important;
      }
      /* Fake Magnifying Glass */
      .ds-input-decorator::before {
         content: "○";
         font-weight: 900;
         font-size: 14px;
      }

      /* 6. STATS (Grid Cells) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px; /* Distinct separation */
      }
      .ds-stats > div > div {
        background: #FFF;
        border-radius: 20px;
        padding: 24px;
        border: 1px solid rgba(0,0,0,0.02);
        box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        text-align: left;
      }
      .ds-stats .text-3xl {
        font-weight: 600;
        letter-spacing: -1px;
      }
      .ds-stats span:first-child {
        font-weight: 600;
        color: #86868B;
        font-size: 12px;
        text-transform: uppercase;
      }

      /* 7. TABLE (Clean List) */
      .ds-table-container {
        border-radius: 20px !important;
        border: none !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.04) !important;
        padding: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F5F5F5 !important;
        padding: 16px 24px !important;
      }
      .ds-table-container > div:first-child {
        background: #FAFAFC;
        font-weight: 600;
        font-size: 12px;
        color: #86868B;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F5F5F5 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: rgba(52, 199, 89, 0.15) !important; /* Green tint */
        color: #248A3D !important;
        font-weight: 600;
        font-size: 12px;
        border-radius: 100px;
        padding: 4px 10px;
      }

      /* 8. POPULAR CARD */
      .ds-card.selected, .ds-card:nth-child(2) {
        border: 2px solid #0071E3 !important;
        box-shadow: 0 20px 40px -10px rgba(0, 113, 227, 0.2) !important;
        transform: scale(1.02);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #0071E3;
      }
      .ds-card:nth-child(2) .absolute {
        background: #0071E3;
        color: #FFF;
        font-weight: 600;
        border-radius: 0 0 12px 12px;
        top: 0; right: 24px;
        padding: 6px 16px;
        font-size: 12px;
      }

      /* 9. BADGE */
      .bento-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 99px;
        font-weight: 600;
        font-size: 12px;
        padding: 6px 14px;
      }

      /* 10. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        margin-top: 60px;
        border-top: 1px solid #F5F5F7;
      }

      /* 11. TOGGLES */
      .mannequin-toggle-track {
        background: #E9E9EA;
        border-radius: 99px;
      }
      .mannequin-toggle-track.active {
        background: #34C759;
      }
      .mannequin-toggle-thumb {
        background: #FFFFFF;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        top: 2px; left: 2px;
        width: calc(1.5rem - 4px); height: calc(1.5rem - 4px);
        border-radius: 50%;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         left: calc(100% - 1.5rem + 2px);
      }
    `
  }
};
