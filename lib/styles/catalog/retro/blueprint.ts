
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'blueprint')!;

export const blueprint: StyleCartridge = {
  id: 'blueprint',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#003B6F', // Blueprint Blue
      '--bg-layer-2': '#002A50', // Darker Blue
      '--text-primary': '#FFFFFF', // Chalk White
      '--text-secondary': '#A0C4E3', // Light Blue Grid
      '--accent-color': '#FFFFFF', // White highlights
      '--border-radius': '0px',
      '--font-display': '"Architects Daughter", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'bp-stage',
      navbar: 'bp-nav',
      container: 'bp-panel',
      buttonPrimary: 'bp-btn-primary',
      buttonSecondary: 'bp-btn-secondary',
      input: 'bp-input',
      badge: 'bp-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

      /* --- BLUEPRINT DRAFTING TABLE --- */

      /* 1. GRID PAPER */
      .bp-stage {
        background-color: #003B6F;
        color: white;
        font-family: 'Architects Daughter', cursive;
        /* Technical Grid */
        background-image: 
          linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px),
          linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
        background-position: -1px -1px;
      }

      /* 2. DRAFTING LINES (Panels) */
      .bp-panel, .ds-panel, .ds-card, .bp-nav {
        background: transparent;
        border: 2px solid white;
        box-shadow: none;
        border-radius: 0;
        position: relative;
        padding: 20px;
        margin: 10px;
      }
      
      /* Dimension Lines */
      .bp-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -10px; left: 0; width: 100%; height: 10px;
        border-left: 1px solid white;
        border-right: 1px solid white;
        background: linear-gradient(to bottom, transparent 4px, white 4px, white 5px, transparent 5px);
        opacity: 0.5;
      }
      .bp-panel::after, .ds-panel::after, .ds-card::after {
        content: "100mm";
        position: absolute;
        top: -25px; left: 50%; transform: translateX(-50%);
        font-size: 10px;
        opacity: 0.7;
      }

      .ds-panel:hover, .ds-card:hover {
        background: rgba(255,255,255,0.05);
        border: 2px dashed white;
      }

      /* 3. TYPOGRAPHY (Handwritten) */
      .ds-hero-title {
        font-family: 'Architects Daughter', cursive;
        font-weight: 400;
        font-size: 3.5rem;
        color: white;
        border-bottom: 2px solid white;
        display: inline-block;
        padding-bottom: 10px;
      }
      .ds-hero-title span {
        text-decoration: underline;
        text-decoration-style: wavy;
        background: transparent;
        -webkit-text-fill-color: initial;
        color: #FFD700; /* Gold highlight pen */
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #A0C4E3;
      }

      /* 4. BUTTONS (Sketchy) */
      .bp-btn-primary, .ds-btn-primary {
        background: transparent !important;
        color: white !important;
        border: 2px solid white !important;
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important; /* Hand drawn feel */
        font-family: 'Architects Daughter', cursive !important;
        font-weight: bold !important;
        text-transform: uppercase;
        box-shadow: 2px 2px 0 white !important;
        transition: all 0.2s !important;
      }
      .bp-btn-primary:hover, .ds-btn-primary:hover {
        background: white !important;
        color: #003B6F !important;
        transform: scale(1.05);
      }

      .bp-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #A0C4E3 !important;
        border: 1px dashed #A0C4E3 !important;
        border-radius: 0 !important;
      }
      .bp-btn-secondary:hover, .ds-btn-secondary:hover {
        border-style: solid !important;
        color: white !important;
      }

      /* 5. NAVIGATION (Title Block) */
      .bp-nav, .ds-navbar {
        border: 2px solid white;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        background: rgba(0,0,0,0.2);
        justify-content: flex-start;
      }
      .ds-logo {
        border-right: 2px solid white;
        padding-right: 20px;
        margin-right: 20px;
      }
      .ds-nav-links span {
        font-family: 'Architects Daughter', cursive;
        text-decoration: underline;
        text-decoration-thickness: 1px;
      }

      /* 6. INPUTS (Measured) */
      .bp-input, .ds-input {
        background: transparent !important;
        border: none !important;
        border-bottom: 2px solid white !important;
        border-radius: 0 !important;
        color: white !important;
        font-family: 'Architects Daughter', cursive !important;
        padding-left: 30px !important;
      }
      .ds-input:focus {
        border-bottom-style: dashed !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        color: white;
        content: 'X:';
        left: 0 !important;
        font-weight: bold;
        box-shadow: none !important;
      }
      
      /* 7. STATS (Data Table) */
      .ds-stats {
        background: transparent !important;
        border: 2px solid white;
        margin: 20px 0;
      }
      .ds-stats > div > div {
        border-right: 1px solid white;
        background: transparent;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-family: 'Courier New', monospace; /* Tech data */
        font-weight: bold;
      }
      .ds-stats span:first-child {
        font-family: 'Architects Daughter', cursive;
        color: #A0C4E3;
      }

      /* 8. TABLE (Specifications) */
      .ds-table-container {
        background: transparent !important;
        border: 2px solid white !important;
        box-shadow: 5px 5px 0 rgba(0,0,0,0.2) !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid white !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.1);
        font-weight: bold;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.05) !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid white;
        color: white !important;
        border-radius: 50%; /* Circle annotation */
        padding: 5px 10px;
      }

      /* 9. PRICING (Cost Estimate) */
      .ds-card {
        border: 2px solid white !important;
        background: transparent !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FFD700 !important; /* Gold Pencil */
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFD700;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFD700;
        color: #003B6F;
        font-weight: bold;
        top: 0; right: 0;
        border-bottom-left-radius: 10px;
        font-family: 'Architects Daughter', cursive;
      }

      /* 10. BADGE */
      .bp-badge, .ds-badge {
        background: transparent !important;
        color: white !important;
        border: 1px solid white;
        border-radius: 50%;
        width: 50px; height: 50px;
        display: flex; align-items: center; justify-content: center;
        transform: rotate(-10deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: rgba(0,0,0,0.2) !important;
        border-top: 2px solid white !important;
        margin-top: 60px;
      }
      .ds-footer h4 {
         text-decoration: underline;
      }
    `
  }
};
