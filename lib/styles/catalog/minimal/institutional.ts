
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'institutional')!;

export const institutional: StyleCartridge = {
  id: 'institutional',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#EFEFEF', // Bureaucratic Grey
      '--bg-layer-2': '#FFFFFF', // Paper
      '--text-primary': '#000000',
      '--text-secondary': '#333333',
      '--accent-color': '#0000FF', // Standard Link Blue
      '--border-radius': '0px',
      '--font-display': '"Times New Roman", Times, serif',
    },
    elementClasses: {
      stage: 'inst-stage',
      navbar: 'inst-nav',
      container: 'inst-panel',
      buttonPrimary: 'inst-btn-primary',
      buttonSecondary: 'inst-btn-secondary',
      input: 'inst-input',
      badge: 'inst-badge'
    },
    injectCss: `
      /* --- INSTITUTIONAL ENGINE --- */

      .inst-stage {
        background-color: #EFEFEF;
        color: #000;
        font-family: "Times New Roman", Times, serif;
      }

      /* 2. CONTAINERS (Forms) */
      .inst-panel, .ds-panel, .ds-card, .inst-nav {
        background: #FFFFFF;
        border: 1px solid #000;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
        border-radius: 0;
        padding: 15px;
        margin-bottom: 20px;
      }
      
      /* Header Stripe */
      .inst-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background: #000;
        margin-bottom: 15px;
      }

      .ds-panel:hover, .ds-card:hover {
        background: #FFFFE0; /* Pale yellow highlighter */
      }

      /* 3. TYPOGRAPHY (Official) */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        text-decoration: underline;
        font-size: 3rem;
      }
      .ds-hero-title span {
        background: transparent;
        color: #000;
        -webkit-text-fill-color: initial;
        font-style: italic;
      }
      .ds-hero-text {
        font-family: Arial, sans-serif; /* Readable body */
        font-size: 1rem;
        line-height: 1.5;
        max-width: 800px;
        border: 1px solid #000;
        padding: 10px;
        background: #FFF;
      }

      /* 4. BUTTONS (Browser Default-ish) */
      .inst-btn-primary, .ds-btn-primary {
        background: #E0E0E0 !important;
        color: #000 !important;
        border: 1px solid #888 !important;
        border-radius: 2px !important;
        font-family: Arial, sans-serif !important;
        font-weight: 400 !important;
        padding: 2px 10px !important;
        font-size: 13px !important;
        box-shadow: inset 1px 1px 0 #FFF, 1px 1px 0 #000 !important;
      }
      .inst-btn-primary:active, .ds-btn-primary:active {
        box-shadow: inset 1px 1px 0 #000 !important;
        background: #CCC !important;
      }
      .inst-btn-primary:hover, .ds-btn-primary:hover {
        background: #DDD !important;
      }

      .inst-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #0000FF !important;
        text-decoration: underline;
        border: none !important;
        font-family: "Times New Roman", serif !important;
        font-size: 1rem !important;
      }
      .inst-btn-secondary:hover, .ds-btn-secondary:hover {
        color: #FF0000 !important;
      }

      /* 5. NAVIGATION */
      .inst-nav, .ds-navbar {
        background: #FFF;
        border-bottom: 2px solid #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 10px 20px;
        box-shadow: none !important;
      }
      .ds-logo {
        font-weight: 700;
        text-transform: uppercase;
        border: 1px solid #000;
        padding: 2px 5px;
      }
      .ds-nav-links span {
        font-family: Arial, sans-serif;
        font-size: 13px;
        text-decoration: underline;
        color: #0000FF;
        cursor: pointer;
      }

      /* 6. INPUTS (Fields) */
      .inst-input, .ds-input {
        background: #FFF !important;
        border: 1px solid #767676 !important; /* Browser default grey */
        border-radius: 2px !important;
        padding: 2px 5px !important;
        font-family: Arial, sans-serif;
        font-size: 13px;
        color: #000 !important;
        box-shadow: inset 1px 1px 2px #CCC !important;
      }
      .ds-input:focus {
        outline: 2px solid #000;
        outline-offset: -2px;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: #FFF !important;
        border: 1px solid #000;
      }
      .ds-stats > div > div {
        border-right: 1px solid #000;
        padding: 10px;
        background: transparent;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-family: "Courier New", monospace;
        font-weight: 700;
      }
      .ds-stats span:first-child {
        font-family: Arial, sans-serif;
        font-size: 10px;
        text-transform: uppercase;
      }

      /* 8. TABLE (Spreadsheet) */
      .ds-table-container {
        border: 1px solid #000 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #000 !important;
        border-right: 1px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #E0E0E0;
        font-weight: 700;
        font-family: Arial, sans-serif;
        font-size: 12px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #000080 !important;
        color: #FFF !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #FFF !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        color: #000 !important;
        border: none;
        font-weight: normal;
        padding: 0;
      }

      /* 9. PRICING CARDS (Forms) */
      .ds-card {
        border: 1px solid #000 !important;
        background: #FFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #F0F0F0 !important;
        border: 2px solid #000 !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        font-family: Arial, sans-serif;
        font-size: 10px;
        text-transform: uppercase;
        padding: 2px 5px;
        top: 0; right: 0;
        border-radius: 0;
      }

      /* 10. BADGE */
      .inst-badge, .ds-badge {
        border: 1px solid #000;
        background: #FFF !important;
        color: #000 !important;
        border-radius: 0;
        font-family: Arial, sans-serif;
        font-size: 10px;
        padding: 1px 4px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #EFEFEF !important;
        border-top: 1px solid #000 !important;
        margin-top: 40px;
      }
    `
  }
};
