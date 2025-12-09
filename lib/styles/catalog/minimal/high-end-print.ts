
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'print')!;

export const highEndPrint: StyleCartridge = {
  id: 'print',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDFDFD', // High Brightness Paper
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000', // CMYK Black
      '--text-secondary': '#404040', // Rich Grey
      '--accent-color': '#FF3366', // Spot Color Red
      '--border-radius': '0px',
      '--font-display': '"Playfair Display", "Georgia", serif',
    },
    elementClasses: {
      stage: 'print-stage',
      navbar: 'print-nav',
      container: 'print-panel',
      buttonPrimary: 'print-btn-primary',
      buttonSecondary: 'print-btn-secondary',
      input: 'print-input',
      badge: 'print-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lato:wght@300;400;700&display=swap');

      /* --- HIGH-END PRINT ENGINE --- */

      .print-stage {
        background-color: #FDFDFD;
        color: #000;
        font-family: 'Lato', sans-serif;
      }

      /* Crop Marks (Conceptual) */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 20px; left: 20px;
        width: 20px; height: 20px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
        z-index: 100;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 20px; right: 20px;
        width: 20px; height: 20px;
        border-bottom: 1px solid #000;
        border-right: 1px solid #000;
        z-index: 100;
      }

      /* 2. CONTAINERS (Columns) */
      .print-panel, .ds-panel, .ds-card, .print-nav {
        background: transparent;
        border: none;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        position: relative;
        margin-bottom: 40px;
      }
      
      /* Column Rule */
      .print-panel::after, .ds-panel::after {
        content: "";
        position: absolute;
        top: 0; bottom: 0; right: -20px;
        width: 1px;
        background: #E5E5E5;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: none;
        box-shadow: none;
      }

      /* 3. TYPOGRAPHY (Editorial) */
      .ds-hero-title {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: 6rem;
        line-height: 0.85;
        letter-spacing: -2px;
        color: #000;
      }
      .ds-hero-title span {
        font-style: italic;
        font-weight: 400;
        background: transparent;
        color: var(--accent-color);
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Lato', sans-serif;
        font-size: 1.1rem;
        line-height: 1.6;
        color: #404040;
        column-count: 2;
        column-gap: 40px;
        text-align: justify;
        margin-top: 40px;
        border-top: 4px solid #000;
        padding-top: 20px;
      }
      /* Drop Cap */
      .ds-hero-text::first-letter {
        font-family: 'Playfair Display', serif;
        font-size: 4rem;
        float: left;
        line-height: 0.7;
        margin-right: 10px;
        color: #000;
        font-weight: 700;
      }

      /* 4. BUTTONS (Flat) */
      .print-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 15px 40px !important;
        border: none !important;
        transition: all 0.3s ease !important;
      }
      .print-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
      }

      .print-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        text-transform: uppercase;
        font-size: 0.8rem !important;
      }
      .print-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #F0F0F0 !important;
        border-color: #000 !important;
      }

      /* 5. NAVIGATION (Minimal) */
      .print-nav, .ds-navbar {
        background: transparent !important;
        margin: 40px !important;
        width: 100% !important;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        padding: 20px 0;
      }
      .ds-logo {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 2rem;
        letter-spacing: -1px;
      }
      .ds-nav-links span {
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        text-decoration: underline;
      }

      /* 6. INPUTS */
      .print-input, .ds-input {
        background: #F5F5F5 !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 20px !important;
        font-family: 'Lato', sans-serif;
        font-size: 1rem !important;
        color: #000 !important;
      }
      .ds-input:focus {
        background: #EFEFEF !important;
        box-shadow: inset 3px 0 0 var(--accent-color) !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        margin: 60px 0;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #E5E5E5;
        padding: 20px;
        text-align: left;
      }
      .ds-stats .text-3xl {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 3.5rem;
        line-height: 1;
      }
      .ds-stats span:first-child {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        color: #888;
        display: block;
        margin-bottom: 10px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: none !important;
        border-top: 4px solid #000 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E5E5E5 !important;
      }
      .ds-table-container > div:first-child {
        background: transparent;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.75rem;
        color: #000;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FAFAFA !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #000;
        color: #000 !important;
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.65rem;
        padding: 4px 8px;
        font-weight: 700;
      }

      /* 9. PRICING */
      .ds-card {
        padding: 40px !important;
        border: 1px solid #E5E5E5 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #000 !important;
        background: #FAFAFA !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Playfair Display', serif;
        font-style: italic;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        padding: 5px 10px;
        top: 0; right: 0;
        border-radius: 0;
      }

      /* 10. BADGE */
      .print-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        font-weight: 700;
        padding: 4px 10px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #F8F8F8 !important;
        margin-top: 100px;
        border-top: 1px solid #000 !important;
      }
    `
  }
};
