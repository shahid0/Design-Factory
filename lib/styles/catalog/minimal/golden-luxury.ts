
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'golden-luxury')!;

export const goldenLuxury: StyleCartridge = {
  id: 'golden-luxury',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0D0D0D', // Rich Black
      '--bg-layer-2': '#141414',
      '--text-primary': '#F2D299', // Pale Gold
      '--text-secondary': '#A68A56', // Antique Gold
      '--accent-color': '#D4AF37', // Pure Gold
      '--border-radius': '0px',
      '--font-display': '"Cinzel", "Lato", serif',
    },
    elementClasses: {
      stage: 'gold-stage',
      navbar: 'gold-nav',
      container: 'gold-panel',
      buttonPrimary: 'gold-btn-primary',
      buttonSecondary: 'gold-btn-secondary',
      input: 'gold-input',
      badge: 'gold-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Lato:wght@300;400&display=swap');

      /* --- GOLDEN LUXURY ENGINE --- */

      .gold-stage {
        background-color: #0D0D0D;
        color: #F2D299;
        font-family: 'Lato', sans-serif;
      }

      /* Marble Texture Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.07'/%3E%3C/svg%3E");
        opacity: 0.5;
        z-index: -1;
      }
      
      /* Golden Gradient Border on sides */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 0; bottom: 0;
        left: 20px; width: 1px;
        background: linear-gradient(to bottom, transparent, #A68A56, transparent);
        opacity: 0.3;
        z-index: -1;
      }

      /* 2. CONTAINERS (Framed) */
      .gold-panel, .ds-panel, .ds-card, .gold-nav {
        background: #141414;
        border: 1px solid #333;
        border-radius: 0;
        padding: 40px;
        position: relative;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
      
      /* Inner Gold Border */
      .gold-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        inset: 6px;
        border: 1px solid #A68A56;
        opacity: 0.3;
        pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: #D4AF37;
        transform: translateY(-2px);
      }
      .ds-panel:hover::after, .ds-card:hover::after {
        opacity: 0.8;
      }

      /* 3. TYPOGRAPHY (Cinzel) */
      .ds-hero-title {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        letter-spacing: 2px;
        color: #F2D299;
        text-transform: uppercase;
        background: linear-gradient(to bottom, #FFF8E7, #D4AF37);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-title span {
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        letter-spacing: 0.5px;
        text-transform: none;
        color: #A68A56;
        background: transparent;
        -webkit-text-fill-color: initial;
        display: block;
        font-size: 0.4em;
        margin-top: 10px;
      }
      .ds-hero-text {
        font-weight: 300;
        color: #A68A56;
        line-height: 1.8;
        border-top: 1px solid #333;
        padding-top: 20px;
        margin-top: 30px;
      }

      /* 4. BUTTONS (Metallic) */
      .gold-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #D4AF37 0%, #AA8A39 100%) !important;
        color: #0D0D0D !important;
        border-radius: 0 !important;
        font-family: 'Cinzel', serif !important;
        font-weight: 700 !important;
        letter-spacing: 1px;
        padding: 14px 40px !important;
        border: 1px solid #F2D299 !important;
        transition: all 0.3s ease !important;
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.2) !important;
      }
      .gold-btn-primary:hover, .ds-btn-primary:hover {
        background: linear-gradient(135deg, #F2D299 0%, #D4AF37 100%) !important;
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.4) !important;
      }

      .gold-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #D4AF37 !important;
        border: 1px solid #D4AF37 !important;
        border-radius: 0 !important;
        font-family: 'Cinzel', serif !important;
        letter-spacing: 1px;
      }
      .gold-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(212, 175, 55, 0.1) !important;
        color: #F2D299 !important;
      }

      /* 5. NAVIGATION */
      .gold-nav, .ds-navbar {
        background: #0D0D0D;
        border-bottom: 1px solid #333;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
      }
      .ds-logo {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        letter-spacing: 2px;
        color: #D4AF37;
      }
      .ds-nav-links span {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.75rem;
        color: #A68A56;
      }
      .ds-nav-links span:hover {
        color: #F2D299;
      }

      /* 6. INPUTS */
      .gold-input, .ds-input {
        background: #0D0D0D !important;
        border: 1px solid #333 !important;
        border-radius: 0 !important;
        padding: 16px !important;
        padding-left: 20px !important;
        color: #F2D299 !important;
        font-family: 'Lato', sans-serif;
      }
      .ds-input:focus {
        border-color: #D4AF37 !important;
        box-shadow: inset 0 0 10px rgba(212, 175, 55, 0.1) !important;
      }
      .ds-input-decorator {
        background: #D4AF37 !important;
        width: 8px !important; height: 8px !important;
        transform: rotate(45deg);
        border-radius: 0 !important;
        right: 20px !important;
        left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 1px solid #333;
        border-bottom: 1px solid #333;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #333;
        padding: 30px;
      }
      .ds-stats .text-3xl {
        font-family: 'Cinzel', serif;
        color: #D4AF37;
        font-weight: 400;
      }
      .ds-stats span:first-child {
        font-family: 'Lato', sans-serif;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 0.7rem;
        color: #A68A56;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #333 !important;
        background: #141414 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #222 !important;
      }
      .ds-table-container > div:first-child {
        background: #0D0D0D;
        font-family: 'Cinzel', serif;
        color: #A68A56;
        letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #1A1A1A !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #A68A56;
        color: #A68A56 !important;
        border-radius: 0;
        font-family: 'Cinzel', serif;
        font-size: 0.7rem;
        padding: 4px 10px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #141414 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #D4AF37 !important;
        box-shadow: 0 0 30px rgba(212, 175, 55, 0.1) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #D4AF37;
      }
      .ds-card:nth-child(2) .absolute {
        background: #D4AF37;
        color: #0D0D0D;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        top: 0; right: 0;
        border-radius: 0;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .gold-badge, .ds-badge {
        background: #1A1A1A !important;
        color: #D4AF37 !important;
        border: 1px solid #D4AF37;
        border-radius: 0;
        font-family: 'Cinzel', serif;
        padding: 4px 12px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #0D0D0D !important;
        border-top: 1px solid #333 !important;
        margin-top: 80px;
      }
      .ds-footer * { opacity: 0.7; }
    `
  }
};
