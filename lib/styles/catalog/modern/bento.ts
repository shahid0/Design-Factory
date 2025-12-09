
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'bento')!;

export const bento: StyleCartridge = {
  id: 'bento',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#f5f5f7', // System Gray 6 (Apple-ish)
      '--bg-layer-2': '#ffffff',
      '--text-primary': '#1d1d1f',
      '--text-secondary': '#86868b',
      '--accent-color': '#2997ff', // Tech Blue
      '--border-radius': '32px', // Super rounded
      '--font-display': '"SF Pro Display", "Inter", -apple-system, sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#f5f5f7]',
      navbar: 'bento-nav',
      container: 'bento-box',
      buttonPrimary: 'bento-btn-primary',
      buttonSecondary: 'bento-btn-secondary',
      input: 'bento-input',
      badge: 'bento-badge'
    },
    injectCss: `
      /* --- BENTO GRID ENGINE --- */

      /* 1. GRID SYSTEM & SPACING */
      .ds-page-root {
        /* Bento relies on gap separation rather than lines */
        --gap-size: 24px;
      }

      /* 2. THE BENTO BOX (Universal Container) */
      .bento-box, .ds-panel, .ds-card, .ds-stats > div > div {
        background: var(--bg-layer-2);
        border-radius: var(--border-radius);
        /* Subtle diffuse shadow, barely visible */
        box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        border: 1px solid rgba(0,0,0,0.02);
        transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
        overflow: hidden;
        position: relative;
      }

      /* Hover Lift */
      .bento-box:hover, .ds-panel:hover, .ds-card:hover, .ds-stats > div > div:hover {
        transform: scale(1.02);
        box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        z-index: 10;
      }
      
      /* Internal content padding adjustments for that "Cell" feel */
      .ds-panel {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      }

      /* 3. HERO (The "Featured" Cell) */
      .ds-hero {
        background: #ffffff;
        margin: 24px;
        width: calc(100% - 48px);
        max-width: 1400px;
        border-radius: 40px;
        padding: 60px !important;
        box-shadow: 0 4px 24px rgba(0,0,0,0.04);
        /* Center content for impact */
        align-items: center;
        text-align: center;
      }
      .ds-hero-title {
        font-weight: 600;
        letter-spacing: -0.03em;
        line-height: 1.05;
      }
      .ds-hero-text {
        font-weight: 400;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }
      /* Hide standard deco layer for cleaner look */
      .ds-deco-layer {
        display: none;
      }

      /* 4. NAVIGATION (Floating Pill) */
      .bento-nav, .ds-navbar {
        background: rgba(255,255,255,0.8);
        backdrop-filter: blur(20px);
        margin: 24px auto 0;
        width: calc(100% - 48px);
        max-width: 1000px;
        border-radius: 100px;
        padding: 12px 32px;
        border: 1px solid rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -0.5px;
      }

      /* 5. BUTTONS (Iconic) */
      .bento-btn-primary, .ds-btn-primary {
        background: #1d1d1f !important; /* Nearly Black */
        color: white !important;
        border-radius: 100px !important;
        font-weight: 500 !important;
        padding: 14px 28px !important;
        font-size: 15px !important;
        border: none !important;
        transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1) !important;
      }
      .bento-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05) !important;
        background: #000 !important;
      }
      .bento-btn-primary:active, .ds-btn-primary:active {
        transform: scale(0.95) !important;
      }

      .bento-btn-secondary, .ds-btn-secondary {
        background: #f5f5f7 !important;
        color: #1d1d1f !important;
        border-radius: 100px !important;
        border: none !important;
        font-weight: 500 !important;
      }
      .bento-btn-secondary:hover {
        background: #e5e5e7 !important;
      }

      /* 6. INPUTS (Soft Field) */
      .bento-input, .ds-input {
        background: #f5f5f7 !important;
        border-radius: 16px !important;
        border: none !important;
        padding: 20px !important;
        font-size: 17px !important;
        transition: background 0.2s;
      }
      .ds-input:focus {
        background: #e8e8ed !important;
        box-shadow: none !important;
        outline: 2px solid var(--accent-color);
        outline-offset: 2px;
      }
      .ds-input-decorator {
        background: var(--text-primary) !important;
      }

      /* 7. STATS (Grid Cells) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      /* Remove default grid gap from mannequin and enforce bento gap */
      .ds-stats .grid {
         gap: 24px;
      }
      .ds-stats > div > div {
         padding: 32px;
         text-align: left;
         background: white;
      }
      .ds-stats .text-3xl {
         font-weight: 600;
         letter-spacing: -1px;
      }
      
      /* 8. CARDS & ICONS */
      /* Make icons huge in the bento boxes */
      .ds-panel .w-12 {
         width: 64px;
         height: 64px;
         background: #f5f5f7;
         border-radius: 20px;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-bottom: 24px;
         border: none !important;
      }
      .ds-panel svg {
         width: 32px;
         height: 32px;
         color: #1d1d1f;
      }
      
      /* 9. TABLE (Clean List) */
      .ds-table-container {
         border: none !important;
         box-shadow: 0 4px 24px rgba(0,0,0,0.04) !important;
         border-radius: 32px !important;
         padding: 24px !important;
      }
      .ds-table-container > div {
         border-bottom: 1px solid #f5f5f7 !important;
         padding: 16px 8px !important;
      }
      .ds-table-container > div:first-child {
         border-bottom: 1px solid #1d1d1f !important;
         background: transparent;
         color: #1d1d1f;
         font-weight: 700;
      }
      
      /* 10. BADGE */
      .bento-badge, .ds-badge {
        background: transparent !important;
        border: 1px solid #1d1d1f;
        color: #1d1d1f !important;
        border-radius: 100px !important;
        padding: 6px 16px;
        font-weight: 600;
        box-shadow: none !important;
      }
      
      /* 11. FOOTER */
      .ds-footer {
         background: white !important;
         margin: 24px;
         width: calc(100% - 48px);
         max-width: 1400px;
         border-radius: 40px;
         border: none !important;
         box-shadow: 0 4px 24px rgba(0,0,0,0.04);
      }
    `
  }
};
