
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'classic-elegance')!;

export const classicElegance: StyleCartridge = {
  id: 'classic-elegance',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F9F8F6', // Alabaster
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#1C1C1C', // Soft Black
      '--text-secondary': '#555555',
      '--accent-color': '#C5A059', // Muted Gold
      '--border-radius': '2px',
      '--font-display': '"Playfair Display", "Cormorant Garamond", serif',
    },
    elementClasses: {
      stage: 'elegance-stage',
      navbar: 'elegance-nav',
      container: 'elegance-panel',
      buttonPrimary: 'elegance-btn-primary',
      buttonSecondary: 'elegance-btn-secondary',
      input: 'elegance-input',
      badge: 'elegance-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');

      /* --- CLASSIC ELEGANCE ENGINE --- */

      .elegance-stage {
        background-color: #F9F8F6;
        color: #1C1C1C;
        font-family: 'Lato', sans-serif;
      }

      /* Damask / Flourish Watermark */
      .ds-deco-layer::before {
        content: "❧";
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        font-size: 400px;
        color: #C5A059;
        opacity: 0.05;
        font-family: serif;
        z-index: 0;
      }

      /* 2. REFINED PANELS */
      .elegance-panel, .ds-panel, .ds-card, .elegance-nav {
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03);
        border-radius: 2px;
        position: relative;
        padding: 30px;
      }
      
      /* Gold Top Border */
      .elegance-panel::before, .ds-panel::before, .ds-card::before {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 3px;
        background: var(--accent-color);
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 10px 30px rgba(0,0,0,0.06);
      }

      /* 3. TYPOGRAPHY (Serif) */
      .ds-hero-title {
        font-family: 'Playfair Display', serif;
        font-weight: 400;
        font-style: italic;
        font-size: 4.5rem;
        color: #1C1C1C;
        letter-spacing: -0.02em;
        line-height: 1.1;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        font-style: normal;
        font-weight: 700;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 1.1rem;
        line-height: 1.8;
        color: #555;
        border-top: 1px solid #EEE;
        padding-top: 20px;
        margin-top: 20px;
        max-width: 600px;
      }
      
      .ds-section-title {
         font-family: 'Playfair Display', serif;
         font-weight: 700;
         text-transform: uppercase;
         letter-spacing: 2px;
         font-size: 2rem;
         color: #1C1C1C;
         position: relative;
         display: inline-block;
         padding-bottom: 10px;
      }
      .ds-section-title::after {
         content: '';
         position: absolute;
         bottom: 0; left: 50%; transform: translateX(-50%);
         width: 40px; height: 1px;
         background: var(--accent-color);
      }

      /* 4. BUTTONS (Minimalist) */
      .elegance-btn-primary, .ds-btn-primary {
        background: #1C1C1C !important;
        color: #FFF !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.8rem !important;
        padding: 14px 32px !important;
        transition: all 0.3s ease !important;
        border: 1px solid #1C1C1C !important;
      }
      .elegance-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF !important;
        color: #1C1C1C !important;
      }

      .elegance-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #1C1C1C !important;
        border: 1px solid #CCC !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem !important;
      }
      .elegance-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: var(--accent-color) !important;
        color: var(--accent-color) !important;
      }

      /* 5. NAVIGATION (Centered) */
      .elegance-nav, .ds-navbar {
        background: #FFFFFF;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        border-bottom: 1px solid #F0F0F0;
        box-shadow: none !important;
      }
      .ds-logo {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 1.5rem;
      }
      .ds-nav-links span {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 2px;
        color: #777;
        transition: color 0.2s;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
      }

      /* 6. INPUTS (Underline) */
      .elegance-input, .ds-input {
        background: transparent !important;
        border: none !important;
        border-bottom: 1px solid #CCC !important;
        border-radius: 0 !important;
        padding: 10px 0 !important;
        padding-left: 30px !important;
        font-family: 'Playfair Display', serif;
        font-size: 1.1rem !important;
        color: #1C1C1C !important;
      }
      .ds-input:focus {
        border-bottom-color: var(--accent-color) !important;
        box-shadow: none !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        color: #999;
        left: 0 !important;
        width: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #F0F0F0;
        padding: 30px;
      }
      .ds-stats .text-3xl {
        font-family: 'Playfair Display', serif;
        color: var(--accent-color);
        font-weight: 400;
      }
      .ds-stats span:first-child {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7rem;
        color: #999;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: none !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.03) !important;
      }
      .ds-table-container > div:first-child {
        background: #F9F8F6;
        color: #1C1C1C;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.8rem;
        border-bottom: 1px solid #E0E0E0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F5F5F5 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFCF7 !important;
      }
      /* Status Pill -> Just text */
      .ds-table-container span {
        background: transparent !important;
        color: var(--accent-color) !important;
        border: 1px solid var(--accent-color);
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 4px 10px;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid var(--accent-color) !important;
        background: #FFFCF7 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
        font-family: 'Playfair Display', serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #FFF;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7rem;
        padding: 5px 15px;
        top: 0; right: 0;
        border-radius: 0;
      }

      /* 10. BADGE */
      .elegance-badge, .ds-badge {
        background: #1C1C1C !important;
        color: #FFF !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.7rem;
        padding: 4px 10px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #1C1C1C !important;
        color: #CCC !important;
        margin-top: 80px;
        padding-top: 60px;
      }
      .ds-footer .ds-logo {
         color: #FFF;
      }
      .ds-footer h4 {
         color: var(--accent-color) !important;
         font-family: 'Playfair Display', serif;
      }
    `
  }
};
