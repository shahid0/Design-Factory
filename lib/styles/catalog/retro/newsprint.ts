
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'newsprint')!;

export const newsprint: StyleCartridge = {
  id: 'newsprint',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F6F4EF', // Aging Newspaper
      '--bg-layer-2': '#FFFFFF', // Clean Paper
      '--text-primary': '#111111', // Ink Black
      '--text-secondary': '#555555', // Faded Ink
      '--accent-color': '#C8102E', // Editorial Red
      '--border-radius': '0px', // Strict Lines
      '--font-display': '"Playfair Display", "Times New Roman", serif',
    },
    elementClasses: {
      stage: 'news-stage',
      navbar: 'news-nav',
      container: 'news-panel',
      buttonPrimary: 'news-btn-primary',
      buttonSecondary: 'news-btn-secondary',
      input: 'news-input',
      badge: 'news-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Source+Serif+Pro:wght@400;600&display=swap');

      /* --- NEW YORK NEWSPRINT ENGINE --- */

      /* 1. PAPER & INK */
      .news-stage {
        background-color: #F6F4EF;
        color: #111;
        font-family: 'Source Serif Pro', serif;
      }

      /* Paper Grain Texture */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E");
        opacity: 0.4;
        z-index: -1;
        pointer-events: none;
      }
      
      /* Vertical Column Guides (Subtle) */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: linear-gradient(90deg, transparent 95%, rgba(0,0,0,0.03) 95%);
        background-size: 20% 100%;
        z-index: -2;
        pointer-events: none;
      }

      /* 2. MASTHEAD (Navigation) */
      .news-nav, .ds-navbar {
        background: transparent !important;
        border-bottom: 4px double #000;
        border-top: 1px solid #000;
        margin: 20px 40px !important;
        width: calc(100% - 80px) !important;
        padding: 20px 0;
        border-radius: 0 !important;
        flex-direction: column;
        gap: 20px;
        box-shadow: none !important;
      }
      
      /* The Logo is the Nameplate */
      .ds-logo {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: 3rem;
        letter-spacing: -1px;
        text-transform: uppercase;
        width: 100%;
        text-align: center;
        border-bottom: 1px solid #000;
        padding-bottom: 10px;
      }
      .ds-logo span {
        color: #000; /* No color in the nameplate usually, maybe red dot */
      }
      
      /* Nav Links are the "Weather/Date/Editions" bar */
      .ds-nav-links {
        width: 100%;
        justify-content: center;
        border-bottom: 1px solid #000;
        padding-bottom: 4px;
        gap: 30px;
      }
      .ds-nav-links span {
        font-family: 'Source Serif Pro', serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.8rem;
        letter-spacing: 1px;
        color: #111;
        border-radius: 0;
      }
      .ds-nav-links span:hover {
        background: transparent;
        text-decoration: underline;
        color: var(--accent-color);
      }
      
      /* Nav Button */
      .ds-navbar .ds-btn-secondary {
         display: none; /* Hide connect button for pure newspaper feel, or style it minimally */
      }

      /* 3. HEADLINES (Hero) */
      .ds-hero {
        text-align: center;
        padding-top: 40px;
        border-bottom: 1px solid #000;
        margin: 0 40px;
        width: auto;
      }
      .ds-hero-title {
        font-family: 'Playfair Display', serif;
        font-weight: 900;
        font-size: 5rem; /* Massive */
        line-height: 0.9;
        letter-spacing: -2px;
        color: #000;
        margin-bottom: 20px;
      }
      .ds-hero-title span {
        font-style: italic;
        background: transparent;
        -webkit-text-fill-color: initial;
        color: var(--accent-color);
        font-family: 'Playfair Display', serif;
      }
      .ds-hero-text {
        font-family: 'Source Serif Pro', serif;
        font-size: 1.25rem;
        font-style: italic;
        color: #444;
        max-width: 600px;
        margin: 0 auto 40px auto;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        padding: 10px 0;
      }

      /* 4. BUTTONS (Traditional) */
      .news-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #fff !important;
        border-radius: 0 !important;
        font-family: 'Source Serif Pro', serif;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 10px 30px !important;
        border: 1px solid #000 !important;
        transition: all 0.2s;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.2) !important;
      }
      .news-btn-primary:hover, .ds-btn-primary:hover {
        background: #fff !important;
        color: #000 !important;
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2) !important;
        transform: translateY(1px);
      }
      
      .news-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Source Serif Pro', serif;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      .news-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #f0f0f0 !important;
        text-decoration: underline;
      }

      /* 5. PANELS (Articles) */
      .news-panel, .ds-panel, .ds-card {
        background: #fff;
        border: 1px solid #ddd;
        border-radius: 0;
        padding: 24px;
        box-shadow: none;
        transition: box-shadow 0.2s;
      }
      
      /* First Letter Drop Cap Simulation (can't easily target text content via class, 
         so we style the header to look like a subhead) */
      .ds-panel h3 {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 1.8rem;
        margin-bottom: 10px;
        border-bottom: 1px solid #000;
        padding-bottom: 5px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
        border-color: #000;
      }
      
      /* Icons */
      .ds-panel .w-12 {
         background: transparent;
         border: 2px solid #000;
         border-radius: 50%;
         color: #000;
         width: 50px; height: 50px;
         display: flex; align-items: center; justify-content: center;
         margin-bottom: 15px;
      }
      .ds-panel svg {
         width: 24px; height: 24px;
      }

      /* 6. INPUTS (Form) */
      .news-input, .ds-input {
        background: #fff !important;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Source Serif Pro', serif;
        color: #000 !important;
        padding-left: 10px !important;
        font-size: 1rem;
      }
      .ds-input:focus {
        background: #FFFDF5 !important;
        box-shadow: 3px 3px 0 #000 !important;
      }
      .ds-input-decorator {
        display: none; /* Remove modern icon */
      }
      
      /* Label style override if possible, otherwise rely on input look */
      
      /* 7. STATS (Stock Ticker) */
      .ds-stats {
        background: #fff !important;
        border-top: 4px double #000;
        border-bottom: 1px solid #000;
        margin: 40px 0;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #000;
        padding: 20px;
        border-radius: 0;
      }
      .ds-stats > div > div:last-child {
        border-right: none;
      }
      .ds-stats .text-3xl {
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        color: #000;
      }
      .ds-stats span:first-child {
        font-family: 'Source Serif Pro', sans-serif;
        text-transform: uppercase;
        font-size: 0.7rem;
        letter-spacing: 1px;
        color: #666;
        border-bottom: 1px solid #ccc;
        display: block;
        margin-bottom: 5px;
      }

      /* 8. TABLE (Classifieds) */
      .ds-table-container {
        background: #fff !important;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
        box-shadow: none !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #ccc !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #fff;
        font-family: 'Source Serif Pro', serif;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 0.9rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F6F4EF !important;
      }
      
      /* Status Pill - Minimal Text */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #000;
        color: #000 !important;
        border-radius: 0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.7rem;
        padding: 2px 6px;
      }

      /* 9. PRICING CARDS (Advertisements) */
      .ds-card {
        border: 2px solid #000 !important;
        background: #fff !important;
      }
      /* "Popular" is the Feature Ad */
      .ds-card:nth-child(2) {
        background: #F6F4EF !important; /* Slight off-white */
        border: 4px solid #000 !important;
        transform: scale(1.02);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
        text-decoration: underline;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #fff;
        font-family: 'Source Serif Pro', serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.8rem;
        border-radius: 0;
        top: 0; right: 0;
        padding: 5px 10px;
      }
      
      .ds-card button {
        border-radius: 0 !important;
        text-transform: uppercase;
        font-weight: 700;
        font-family: 'Source Serif Pro', serif;
      }

      /* 10. BADGE */
      .news-badge, .ds-badge {
        background: #000 !important;
        color: #fff !important;
        border-radius: 0 !important;
        font-family: 'Source Serif Pro', serif;
        text-transform: uppercase;
        font-weight: 700;
        padding: 2px 8px;
        font-size: 0.8rem;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #F6F4EF !important;
        border-top: 4px double #000 !important;
        margin-top: 60px;
        color: #000 !important;
      }
      .ds-footer .ds-logo {
         font-size: 1.5rem;
         border-bottom: none;
         text-align: left;
      }
      .ds-footer h4 {
         text-transform: uppercase;
         border-bottom: 1px solid #000;
         padding-bottom: 5px;
         margin-bottom: 10px;
         font-weight: 700;
      }
    `
  }
};
