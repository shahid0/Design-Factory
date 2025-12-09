
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'luxury-min')!;

export const highLuxury: StyleCartridge = {
  id: 'luxury-min',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFCF9', // Pearl White
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#1A1A1A', // Soft Black
      '--text-secondary': '#8C8C8C', // Dove Grey
      '--accent-color': '#D4AF37', // Gold
      '--border-radius': '0px',
      '--font-display': '"Bodoni Moda", "Didot", serif',
    },
    elementClasses: {
      stage: 'lux-stage',
      navbar: 'lux-nav',
      container: 'lux-panel',
      buttonPrimary: 'lux-btn-primary',
      buttonSecondary: 'lux-btn-secondary',
      input: 'lux-input',
      badge: 'lux-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,700;1,400&family=Lato:wght@300;400&display=swap');

      /* --- HIGH LUXURY ENGINE --- */

      .lux-stage {
        background-color: #FFFCF9;
        color: #1A1A1A;
        font-family: 'Lato', sans-serif; /* Body font */
      }

      /* 2. CONTAINERS (Invisible or Fine Line) */
      .lux-panel, .ds-panel, .ds-card, .lux-nav {
        background: #FFFFFF;
        border: none;
        box-shadow: none; /* No shadows, flat luxury */
        border-radius: 0;
        padding: 40px;
      }
      
      /* Subtle gold line on hover */
      .ds-panel:hover, .ds-card:hover {
        box-shadow: inset 0 0 0 1px #D4AF37;
        transform: translateY(-5px);
        transition: transform 0.5s ease;
      }

      /* 3. TYPOGRAPHY (Serif) */
      .ds-hero-title {
        font-family: 'Bodoni Moda', serif;
        font-weight: 400;
        font-size: 5rem;
        letter-spacing: -0.02em;
        line-height: 1.1;
      }
      .ds-hero-title span {
        font-style: italic;
        color: #D4AF37;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 400;
      }
      .ds-hero-text {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        color: #666;
        letter-spacing: 0.05em;
        line-height: 2;
        font-size: 0.9rem;
        text-transform: uppercase;
        margin-top: 40px;
        border-top: 1px solid #E5E5E5;
        padding-top: 20px;
        max-width: 400px;
      }
      
      .ds-section-title {
         font-family: 'Bodoni Moda', serif;
         font-weight: 400;
         font-size: 2.5rem;
         letter-spacing: -0.5px;
      }

      /* 4. BUTTONS (Minimal) */
      .lux-btn-primary, .ds-btn-primary {
        background: #1A1A1A !important;
        color: #FFFFFF !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        font-weight: 400 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.75rem !important;
        padding: 16px 40px !important;
        border: 1px solid #1A1A1A !important;
        transition: all 0.3s ease !important;
      }
      .lux-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFFFFF !important;
        color: #1A1A1A !important;
      }

      .lux-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #1A1A1A !important;
        border: 1px solid #E5E5E5 !important;
        border-radius: 0 !important;
        font-family: 'Lato', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.75rem !important;
      }
      .lux-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: #1A1A1A !important;
      }

      /* 5. NAVIGATION */
      .lux-nav, .ds-navbar {
        background: transparent !important;
        margin: 40px !important;
        width: calc(100% - 80px) !important;
        border-bottom: 1px solid #E5E5E5;
        padding: 20px 0;
      }
      .ds-logo {
        font-family: 'Bodoni Moda', serif;
        font-size: 2rem;
        letter-spacing: -1px;
      }
      .ds-nav-links span {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 2px;
        color: #8C8C8C;
      }
      .ds-nav-links span:hover {
        color: #1A1A1A;
      }

      /* 6. INPUTS (Underline) */
      .lux-input, .ds-input {
        background: transparent !important;
        border: none !important;
        border-bottom: 1px solid #E5E5E5 !important;
        border-radius: 0 !important;
        font-family: 'Bodoni Moda', serif;
        font-size: 1.2rem !important;
        padding: 10px 0 !important;
        padding-left: 0 !important;
      }
      .ds-input:focus {
        border-bottom-color: #1A1A1A !important;
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
        background: transparent;
        padding: 40px 20px;
        border-right: 1px solid #E5E5E5;
      }
      .ds-stats > div > div:last-child { border: none; }
      .ds-stats .text-3xl {
        font-family: 'Bodoni Moda', serif;
        font-weight: 400;
        font-size: 3rem;
      }
      .ds-stats span:first-child {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7rem;
        color: #8C8C8C;
        margin-bottom: 10px;
        display: block;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 0 !important;
        border: none !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F5F5F5 !important;
        padding: 20px !important;
      }
      .ds-table-container > div:first-child {
        background: #FFFFFF;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: #8C8C8C;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FAFAFA !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #E5E5E5;
        color: #1A1A1A !important;
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.6rem;
        letter-spacing: 1px;
        padding: 4px 10px;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        padding: 60px 40px !important;
        background: #FFFFFF !important;
        border: 1px solid #F5F5F5 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #1A1A1A !important;
        box-shadow: 0 20px 40px rgba(0,0,0,0.05) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Bodoni Moda', serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: #1A1A1A;
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 2px;
        padding: 8px 20px;
        top: 0; left: 50%; transform: translateX(-50%);
        border-radius: 0 0 2px 2px;
      }

      /* 10. BADGE */
      .lux-badge, .ds-badge {
        background: #F5F5F5 !important;
        color: #1A1A1A !important;
        border-radius: 0;
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        font-size: 0.65rem;
        letter-spacing: 1px;
        padding: 6px 12px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #1A1A1A !important;
        color: #FFFFFF !important;
        margin-top: 100px;
        padding-top: 80px;
        padding-bottom: 80px;
      }
      .ds-footer * { color: #FFFFFF !important; opacity: 0.8; }
      .ds-footer .ds-logo { opacity: 1; }
    `
  }
};
