
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'risograph')!;

export const risograph: StyleCartridge = {
  id: 'risograph',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDFBF6', // Off White Paper
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#1E1E96', // Riso Blue
      '--text-secondary': '#FF48B0', // Fluorescent Pink
      '--accent-color': '#FFE800', // Yellow
      '--border-radius': '2px',
      '--font-display': '"Space Grotesk", "Work Sans", sans-serif',
    },
    elementClasses: {
      stage: 'riso-stage',
      navbar: 'riso-nav',
      container: 'riso-panel',
      buttonPrimary: 'riso-btn-primary',
      buttonSecondary: 'riso-btn-secondary',
      input: 'riso-input',
      badge: 'riso-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap');

      .riso-stage {
        background-color: #FDFBF6;
        color: #1E1E96;
        font-family: 'Space Grotesk', sans-serif;
        /* Grain */
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E");
      }

      /* Misaligned Layers Effect */
      .riso-panel, .ds-panel, .ds-card, .riso-nav {
        background: #FFFFFF;
        border: 2px solid #1E1E96;
        box-shadow: 4px 4px 0 rgba(255, 72, 176, 0.5), 8px 8px 0 rgba(255, 232, 0, 0.5);
        mix-blend-mode: multiply;
        position: relative;
        padding: 24px;
        transition: transform 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 rgba(255, 72, 176, 0.8), 12px 12px 0 rgba(255, 232, 0, 0.8);
      }

      /* Typography */
      .ds-hero-title {
        font-weight: 700;
        color: #1E1E96;
        mix-blend-mode: multiply;
        text-shadow: 3px 3px 0 #FF48B0;
      }
      .ds-hero-title span {
        color: #FF48B0;
        text-shadow: 3px 3px 0 #FFE800;
        background: none;
      }
      .ds-hero-text {
        font-weight: 500;
        color: #1E1E96;
        background: rgba(255, 232, 0, 0.3);
        padding: 10px;
        display: inline-block;
      }

      /* Buttons (Overprint) */
      .riso-btn-primary, .ds-btn-primary {
        background: #1E1E96 !important;
        color: #FFE800 !important;
        border: none !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        padding: 12px 32px !important;
        box-shadow: 4px 4px 0 #FF48B0 !important;
        mix-blend-mode: multiply;
        transition: all 0.2s !important;
      }
      .riso-btn-primary:hover, .ds-btn-primary:hover {
        transform: translate(-2px, -2px);
        box-shadow: 6px 6px 0 #FF48B0 !important;
        background: #0000FF !important;
      }

      .riso-btn-secondary, .ds-btn-secondary {
        background: transparent !important;
        color: #1E1E96 !important;
        border: 2px solid #1E1E96 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
      }
      .riso-btn-secondary:hover {
        background: rgba(255, 72, 176, 0.2) !important;
      }

      /* Inputs */
      .riso-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #1E1E96 !important;
        color: #1E1E96 !important;
        border-radius: 0 !important;
        padding-left: 20px !important;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.1) !important;
      }
      .ds-input:focus {
        box-shadow: 4px 4px 0 #FF48B0 !important;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 2px solid #FF48B0;
        box-shadow: 4px 4px 0 #FFE800;
        mix-blend-mode: multiply;
      }
      .ds-stats .text-3xl {
        color: #1E1E96;
        font-weight: 700;
      }

      /* Table */
      .ds-table-container {
        border: 2px solid #1E1E96 !important;
        background: #FFF !important;
        box-shadow: 8px 8px 0 rgba(0,0,0,0.1) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255, 72, 176, 0.2);
        color: #1E1E96;
        font-weight: 700;
        border-bottom: 2px solid #1E1E96 !important;
      }
      .ds-table-container span {
        background: #FFE800 !important;
        color: #1E1E96 !important;
        border: 1px solid #1E1E96;
        border-radius: 0;
        font-weight: 700;
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 2px solid #FF48B0 !important;
        box-shadow: 8px 8px 0 #1E1E96 !important;
        z-index: 10;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF48B0;
        color: #FFF;
        font-weight: 700;
        top: -10px; right: -10px;
        padding: 5px 15px;
        border: 2px solid #1E1E96;
      }

      /* Footer */
      .ds-footer {
        background: #FFFFFF !important;
        border-top: 4px solid #1E1E96 !important;
        margin-top: 60px;
      }
    `
  }
};
