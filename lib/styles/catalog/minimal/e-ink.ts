
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'ink')!;

export const eInk: StyleCartridge = {
  id: 'ink',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F4F4F4', // E-Ink Paper
      '--bg-layer-2': '#FFFFFF', // Flash
      '--text-primary': '#111111', // Black Ink
      '--text-secondary': '#666666', // Grey Scale
      '--accent-color': '#000000',
      '--border-radius': '0px',
      '--font-display': '"Bitter", "Georgia", serif',
    },
    elementClasses: {
      stage: 'ink-stage',
      navbar: 'ink-nav',
      container: 'ink-panel',
      buttonPrimary: 'ink-btn-primary',
      buttonSecondary: 'ink-btn-secondary',
      input: 'ink-input',
      badge: 'ink-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;700&display=swap');

      /* --- E-INK ENGINE --- */

      .ink-stage {
        background-color: #F4F4F4;
        color: #111;
        font-family: 'Bitter', serif;
        /* Simulate slow refresh / grain */
      }

      /* Grain Texture */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
        z-index: -1;
        pointer-events: none;
      }

      /* 2. PANELS (Sharp, bordered) */
      .ink-panel, .ds-panel, .ds-card, .ink-nav {
        background: #FFFFFF;
        border: 2px solid #111;
        box-shadow: none;
        border-radius: 0;
        padding: 24px;
      }
      
      /* Hover State (Inverted - E-ink Flash) */
      .ds-panel:hover, .ds-card:hover {
        background: #111;
        color: #FFF;
        transition: background 0.1s step-end, color 0.1s step-end; /* Instant switch */
      }
      .ds-panel:hover *, .ds-card:hover * {
         color: #FFF !important;
         border-color: #FFF !important;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        letter-spacing: -0.5px;
        color: #000;
      }
      .ds-hero-title span {
        background: #000;
        color: #FFF;
        padding: 0 8px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-weight: 300;
        color: #333;
        line-height: 1.6;
      }

      /* 4. BUTTONS (Ghosting) */
      .ink-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        padding: 12px 30px !important;
        transition: none !important; /* E-ink is abrupt */
      }
      .ink-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF !important;
        color: #000 !important;
        /* Simulate flash */
        animation: eink-flash 0.3s steps(1);
      }
      
      @keyframes eink-flash {
         0% { background: #000; color: #FFF; }
         50% { background: #555; color: #CCC; }
         100% { background: #FFF; color: #000; }
      }

      .ink-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #000 !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
      }
      .ink-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .ink-nav, .ds-navbar {
        border-bottom: 2px solid #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 30px;
        border-top: none; border-left: none; border-right: none;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 1px;
      }
      .ds-nav-links span {
        font-weight: 700;
        border-bottom: 2px solid transparent;
      }
      .ds-nav-links span:hover {
        border-bottom-color: #000;
      }

      /* 6. INPUTS */
      .ink-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        color: #000 !important;
        font-family: 'Bitter', serif;
        font-size: 1rem;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: #E0E0E0 !important; /* Slight grey wash */
      }
      .ds-input-decorator {
        background: #000 !important;
        border-radius: 0;
        width: 10px !important; height: 10px !important;
        right: 15px !important;
        left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 2px solid #000;
        border-bottom: 2px solid #000;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px dashed #000;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #000;
      }
      .ds-stats span:first-child {
        font-weight: 400;
        color: #555;
        font-style: italic;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 2px solid #000 !important;
        background: #FFF !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #EEE;
        font-weight: 700;
        color: #000;
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
        background: transparent !important;
        border: 1px solid currentColor;
        color: inherit !important;
        border-radius: 0;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #000 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        text-decoration: underline;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        font-weight: 700;
        padding: 5px 15px;
        top: 0; right: 0;
        border-radius: 0;
      }

      /* 10. BADGE */
      .ink-badge, .ds-badge {
        background: #FFF !important;
        color: #000 !important;
        border: 1px solid #000;
        border-radius: 0;
        padding: 2px 8px;
        font-weight: 700;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #111 !important;
        color: #FFF !important;
        margin-top: 60px;
      }
      .ds-footer * {
         color: #FFF !important;
      }
    `
  }
};
