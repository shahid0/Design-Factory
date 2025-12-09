
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'victorian')!;

export const victorian: StyleCartridge = {
  id: 'victorian',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDF5E6', // Old Lace
      '--bg-layer-2': '#FFF8DC', // Cornsilk
      '--text-primary': '#3E2723', // Dark Wood
      '--text-secondary': '#5D4037', // Medium Wood
      '--accent-color': '#8B4513', // Saddle Brown
      '--border-radius': '2px',
      '--font-display': '"Rye", "Playfair Display", serif',
    },
    elementClasses: {
      stage: 'victorian-stage',
      navbar: 'victorian-nav',
      container: 'victorian-panel',
      buttonPrimary: 'victorian-btn-primary',
      buttonSecondary: 'victorian-btn-secondary',
      input: 'victorian-input',
      badge: 'victorian-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rye&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;700&display=swap');

      /* --- VICTORIAN ERA ENGINE --- */

      /* 1. PARCHMENT & ATMOSPHERE */
      .victorian-stage {
        background-color: #FDF5E6;
        color: var(--text-primary);
        font-family: 'Playfair Display', serif;
        overflow-x: hidden;
      }

      /* Aged Paper Texture */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E");
        mix-blend-mode: multiply;
        z-index: -1;
        pointer-events: none;
      }
      
      /* Vignette */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background: radial-gradient(circle, transparent 60%, rgba(62, 39, 35, 0.2) 100%);
        pointer-events: none;
        z-index: -1;
      }

      /* 2. FRAMES & FLOURISHES */
      .victorian-panel, .ds-panel, .ds-card, .victorian-nav {
        background: #FFF8DC;
        border: 4px double #5D4037;
        box-shadow: 0 4px 8px rgba(62, 39, 35, 0.2);
        position: relative;
        margin: 15px;
        padding: 20px;
        border-radius: 4px;
      }
      
      /* Corner Ornaments (CSS pseudo-elements) */
      .victorian-panel::before, .ds-panel::before, .ds-card::before, .victorian-nav::before {
        content: "❧";
        position: absolute;
        top: -10px; left: -10px;
        font-size: 24px;
        color: var(--accent-color);
        background: #FDF5E6;
        padding: 0 5px;
        line-height: 1;
      }
      .victorian-panel::after, .ds-panel::after, .ds-card::after, .victorian-nav::after {
        content: "❧";
        position: absolute;
        bottom: -10px; right: -10px;
        font-size: 24px;
        color: var(--accent-color);
        background: #FDF5E6;
        padding: 0 5px;
        line-height: 1;
        transform: rotate(180deg);
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(62, 39, 35, 0.3);
        border-color: var(--accent-color);
      }

      /* 3. TYPOGRAPHY (Woodcut) */
      .ds-hero-title {
        font-family: 'Rye', serif;
        font-weight: 400;
        font-size: 4.5rem;
        color: #3E2723;
        text-shadow: 2px 2px 0px #D7CCC8;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-top: 2px solid #3E2723;
        border-bottom: 2px solid #3E2723;
        padding: 20px 0;
        margin-bottom: 30px;
        position: relative;
      }
      /* Decorative lines above/below title */
      .ds-hero-title::before {
        content: "";
        position: absolute;
        top: 4px; left: 0; right: 0;
        height: 1px;
        background: #3E2723;
      }
      .ds-hero-title::after {
        content: "";
        position: absolute;
        bottom: 4px; left: 0; right: 0;
        height: 1px;
        background: #3E2723;
      }
      
      .ds-hero-title span {
        font-family: 'Cinzel', serif;
        color: #8B4513;
        font-weight: 700;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-size: 0.5em;
        display: block;
        letter-spacing: 5px;
        margin-top: 10px;
        text-shadow: none;
      }
      
      .ds-hero-text {
        font-family: 'Playfair Display', serif;
        font-style: italic;
        font-size: 1.3rem;
        color: #5D4037;
        text-align: center;
        max-width: 700px;
        margin: 0 auto;
        position: relative;
      }
      /* Drop Cap */
      .ds-hero-text::first-letter {
        font-family: 'Rye', serif;
        font-size: 3.5rem;
        float: left;
        line-height: 0.8;
        padding-right: 8px;
        color: var(--accent-color);
      }

      /* 4. BUTTONS (Engraved) */
      .victorian-btn-primary, .ds-btn-primary {
        background: transparent !important;
        color: #3E2723 !important;
        font-family: 'Cinzel', serif !important;
        font-weight: 700 !important;
        font-size: 1rem !important;
        letter-spacing: 1px;
        border: 2px solid #3E2723 !important;
        border-radius: 2px !important;
        padding: 10px 30px !important;
        box-shadow: inset 0 0 0 2px #FDF5E6, inset 0 0 0 4px #3E2723 !important;
        transition: all 0.3s ease !important;
        position: relative;
        text-transform: uppercase;
      }
      .victorian-btn-primary:hover, .ds-btn-primary:hover {
        background: #3E2723 !important;
        color: #FDF5E6 !important;
        box-shadow: none !important;
      }
      
      .victorian-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #5D4037 !important;
        font-family: 'Playfair Display', serif !important;
        font-style: italic;
        font-weight: 700 !important;
        font-size: 1.1rem !important;
        border: 1px solid transparent !important;
        border-bottom: 1px solid #5D4037 !important;
        border-radius: 0 !important;
      }
      .victorian-btn-secondary:hover, .ds-btn-secondary:hover {
        color: #3E2723 !important;
        border-bottom: 2px solid #3E2723 !important;
        background: rgba(139, 69, 19, 0.05) !important;
      }

      /* 5. NAVIGATION (Signage) */
      .victorian-nav, .ds-navbar {
        background: #FDF5E6;
        border-bottom: 4px double #3E2723;
        margin: 20px 40px !important;
        width: calc(100% - 80px) !important;
        padding: 15px 40px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }
      .ds-logo {
        font-family: 'Rye', serif;
        font-size: 2rem;
        color: #3E2723;
        text-decoration: none;
      }
      .ds-nav-links span {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        color: #5D4037;
        font-size: 0.9rem;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #8B4513;
        text-decoration: underline;
        text-decoration-style: double;
      }

      /* 6. INPUTS (Ledger) */
      .victorian-input, .ds-input {
        background: #FFF8DC !important;
        border: 1px solid #8B4513 !important;
        border-radius: 2px !important;
        color: #3E2723 !important;
        font-family: 'Playfair Display', serif !important;
        font-style: italic;
        font-size: 1.1rem !important;
        padding-left: 10px !important;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #3E2723 !important;
        outline: 1px solid #3E2723;
        outline-offset: 2px;
      }
      .ds-input-decorator {
        display: none; /* Minimalist inputs */
      }

      /* 7. STATS (Curio Cabinet) */
      .ds-stats {
        background: transparent !important;
        border-top: 2px solid #3E2723;
        border-bottom: 2px solid #3E2723;
        margin: 40px 0;
        padding: 20px 0;
        background-image: repeating-linear-gradient(90deg, transparent, transparent 49px, #3E2723 50px);
        background-size: 100% 100%;
      }
      .ds-stats > div > div {
        background: #FDF5E6;
        border: 1px solid #8B4513;
        padding: 15px;
        margin: 0 10px;
        box-shadow: 2px 2px 0 rgba(62, 39, 35, 0.2);
        position: relative;
      }
      /* Label */
      .ds-stats span:first-child {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        color: #8B4513;
        border-bottom: 1px solid #D7CCC8;
        display: block;
        margin-bottom: 5px;
        text-align: center;
      }
      /* Value */
      .ds-stats .text-3xl {
        font-family: 'Rye', serif;
        color: #3E2723;
        text-align: center;
        font-size: 2.5rem;
      }

      /* 8. TABLE (Manifest) */
      .ds-table-container {
        background: #FFF8DC !important;
        border: 2px solid #3E2723 !important;
        box-shadow: 4px 4px 0 rgba(62, 39, 35, 0.1) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #D7CCC8 !important;
      }
      /* Header */
      .ds-table-container > div:first-child {
        background: #EFEBE9;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        color: #3E2723;
        border-bottom: 2px solid #3E2723 !important;
        text-transform: uppercase;
      }
      /* Row Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FDF5E6 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #8B4513;
        color: #8B4513 !important;
        font-family: 'Cinzel', serif;
        font-size: 0.7rem;
        padding: 2px 8px;
        border-radius: 0;
      }

      /* 9. PRICING CARDS (Tarot/Menu) */
      .ds-card {
        background: #FFF8DC !important;
        border: 1px solid #8B4513 !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 4px double #3E2723 !important;
        background: #FDF5E6 !important;
        transform: scale(1.02);
        z-index: 5;
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Rye', serif;
        color: #3E2723;
      }
      /* Popular Ribbon */
      .ds-card:nth-child(2) .absolute {
        background: #8B4513;
        color: #FFF8DC;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        top: -10px; right: 20px;
        padding: 5px 15px;
        border-radius: 0 0 4px 4px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }
      
      .ds-card button {
         font-family: 'Cinzel', serif;
      }

      /* 10. BADGE */
      .victorian-badge, .ds-badge {
        background: #3E2723 !important;
        color: #FDF5E6 !important;
        font-family: 'Cinzel', serif;
        font-size: 0.8rem;
        padding: 4px 10px;
        border-radius: 2px;
        border: 1px solid #FDF5E6;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #3E2723 !important;
        color: #FDF5E6 !important;
        margin-top: 60px;
        border-top: 4px double #D7CCC8 !important;
      }
      .ds-footer h4, .ds-footer .ds-logo, .ds-footer span, .ds-footer p {
         color: #FDF5E6 !important;
      }
      .ds-footer h4 {
         font-family: 'Cinzel', serif;
         border-bottom: 1px solid #8B4513;
         padding-bottom: 5px;
         display: inline-block;
      }
    `
  }
};
