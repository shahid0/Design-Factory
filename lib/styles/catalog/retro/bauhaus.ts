
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'bauhaus')!;

export const bauhaus: StyleCartridge = {
  id: 'bauhaus',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F4F2EB', // Warm Off-White (Canvas)
      '--bg-layer-2': '#FFFFFF', // Pure White
      '--text-primary': '#050505', // Ink Black
      '--text-secondary': '#444444',
      '--accent-color': '#D93025', // Bauhaus Red
      '--border-radius': '0px', // Strict Geometry
      '--font-display': '"League Spartan", "Futura", "Helvetica Neue", sans-serif',
    },
    elementClasses: {
      stage: 'bauhaus-stage',
      navbar: 'bauhaus-nav',
      container: 'bauhaus-panel',
      buttonPrimary: 'bauhaus-btn-primary',
      buttonSecondary: 'bauhaus-btn-secondary',
      input: 'bauhaus-input',
      badge: 'bauhaus-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@300;400;700;900&display=swap');

      /* --- BAUHAUS CONSTRUCT --- */
      
      :root {
        --bauhaus-red: #D93025;
        --bauhaus-blue: #1A47B8;
        --bauhaus-yellow: #F2C037;
        --bauhaus-black: #050505;
        --bauhaus-white: #FFFFFF;
      }

      /* 1. GRID & GEOMETRY */
      .bauhaus-stage {
        background-color: var(--bg-layer-1);
        /* Asymmetric Background Composition */
        background-image: 
          linear-gradient(90deg, transparent 49%, var(--bauhaus-black) 49%, var(--bauhaus-black) 50%, transparent 50%),
          radial-gradient(circle at 10% 20%, var(--bauhaus-yellow) 0%, var(--bauhaus-yellow) 5%, transparent 5.1%);
        background-size: 100% 100%, 100% 100%;
        font-family: var(--font-display);
      }
      
      /* Diagonal Divider */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        top: 0; right: 0;
        width: 300px; height: 300px;
        background: var(--bauhaus-blue);
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }
      
      /* Circle Geometry */
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        bottom: 5%; left: 5%;
        width: 200px; height: 200px;
        border: 20px solid var(--bauhaus-black);
        border-radius: 50%;
        opacity: 0.1;
      }

      /* 2. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -2px;
        line-height: 0.9;
        font-size: 5rem;
      }
      .ds-hero-title span {
        background: var(--bauhaus-red);
        color: white;
        padding: 0 15px;
        box-decoration-break: clone;
        -webkit-text-fill-color: white;
      }
      .ds-hero-text {
        font-weight: 300;
        border-left: 10px solid var(--bauhaus-blue);
        padding-left: 20px;
        margin-top: 20px;
        font-size: 1.25rem;
      }
      
      /* Section Headers */
      .ds-section-title {
        font-weight: 900;
        text-transform: uppercase;
        position: relative;
        display: inline-block;
      }
      .ds-section-title::after {
        content: '';
        display: block;
        width: 50%;
        height: 8px;
        background: var(--bauhaus-yellow);
        margin-top: 5px;
      }

      /* 3. PANELS (Block & Line) */
      .bauhaus-panel, .ds-panel, .ds-card, .bauhaus-nav {
        background: var(--bauhaus-white);
        border: 4px solid var(--bauhaus-black);
        box-shadow: 12px 12px 0px var(--bauhaus-black);
        border-radius: 0;
        transition: transform 0.2s, box-shadow 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-4px, -4px);
        box-shadow: 16px 16px 0px var(--bauhaus-blue);
      }
      
      /* Decorative Corner Triangle on Panels */
      .ds-panel::before {
        content: '';
        position: absolute;
        top: 0; right: 0;
        width: 40px; height: 40px;
        background: var(--bauhaus-yellow);
        clip-path: polygon(100% 0, 0 0, 100% 100%);
      }

      /* 4. BUTTONS (Geometric Forms) */
      .bauhaus-btn-primary, .ds-btn-primary {
        background: var(--bauhaus-black) !important;
        color: white !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        border-radius: 0 !important;
        border: none !important;
        padding: 16px 32px !important;
        position: relative;
        transition: all 0.2s !important;
      }
      /* Hover State: Shift Color */
      .bauhaus-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--bauhaus-red) !important;
        box-shadow: 8px 8px 0px var(--bauhaus-black) !important;
        transform: translate(-4px, -4px);
      }
      /* Active State */
      .bauhaus-btn-primary:active, .ds-btn-primary:active {
        transform: translate(0, 0);
        box-shadow: none !important;
      }

      /* Secondary Button (Outline) */
      .bauhaus-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: white !important;
        color: var(--bauhaus-black) !important;
        border: 4px solid var(--bauhaus-black) !important;
        border-radius: 999px !important; /* Circle/Pill contrast to square primary */
        font-weight: 700 !important;
        text-transform: uppercase;
      }
      .bauhaus-btn-secondary:hover, .ds-btn-secondary:hover {
        background: var(--bauhaus-black) !important;
        color: white !important;
      }

      /* 5. NAVIGATION */
      .bauhaus-nav, .ds-navbar {
        border-bottom: 4px solid var(--bauhaus-black);
        margin: 0 !important;
        width: 100% !important;
        box-shadow: none !important;
        padding: 20px 40px;
      }
      .ds-logo {
        font-weight: 900;
        letter-spacing: -2px;
        font-size: 2rem;
      }
      .ds-logo span {
        color: var(--bauhaus-red);
      }
      .ds-nav-links {
        gap: 0;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        padding: 10px 20px;
        border-left: 2px solid var(--bauhaus-black);
      }
      .ds-nav-links span:last-child {
        border-right: 2px solid var(--bauhaus-black);
      }
      .ds-nav-links span:hover {
        background: var(--bauhaus-yellow);
        color: var(--bauhaus-black);
      }

      /* 6. INPUTS */
      .bauhaus-input, .ds-input {
        background: white !important;
        border: 4px solid var(--bauhaus-black) !important;
        border-radius: 0 !important;
        height: 60px;
        font-weight: 700;
        color: var(--bauhaus-black) !important;
        font-size: 1.1rem;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: var(--bauhaus-yellow) !important;
        outline: none;
      }
      .ds-input-decorator {
        background: var(--bauhaus-red) !important;
        border-radius: 0;
        width: 15px !important; height: 15px !important;
        right: 20px !important;
        left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 4px solid var(--bauhaus-black);
        border-bottom: 4px solid var(--bauhaus-black);
      }
      .ds-stats > div > div {
        background: white;
        border-right: 4px solid var(--bauhaus-black);
        padding: 30px;
        border-radius: 0;
        box-shadow: none;
      }
      .ds-stats > div > div:last-child {
        border-right: none;
      }
      .ds-stats .text-3xl {
        font-weight: 900;
        color: var(--bauhaus-blue);
        font-size: 3rem;
      }
      .ds-stats span:first-child {
        font-weight: 700;
        background: var(--bauhaus-black);
        color: white;
        padding: 2px 8px;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid var(--bauhaus-black) !important;
        border-radius: 0 !important;
        box-shadow: 12px 12px 0 var(--bauhaus-black) !important;
      }
      .ds-table-container > div {
        border-bottom: 2px solid var(--bauhaus-black) !important;
      }
      .ds-table-container > div:first-child {
        background: var(--bauhaus-black);
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(26, 71, 184, 0.1) !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: var(--bauhaus-red) !important;
        color: white !important;
        border-radius: 0;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        padding: 40px !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 4px solid var(--bauhaus-blue) !important;
        box-shadow: 16px 16px 0 var(--bauhaus-blue) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--bauhaus-blue);
        font-weight: 900;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--bauhaus-blue);
        color: white;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: 0;
        padding: 8px 16px;
        top: -4px; right: -4px;
      }
      
      .ds-card button {
        border-radius: 0 !important;
        text-transform: uppercase;
        font-weight: 900;
      }

      /* 10. BADGE */
      .bauhaus-badge, .ds-badge {
        background: var(--bauhaus-yellow) !important;
        color: var(--bauhaus-black) !important;
        border: 2px solid var(--bauhaus-black);
        border-radius: 50% !important; /* Circle badge */
        width: auto;
        padding: 5px 15px;
        text-transform: uppercase;
        font-weight: 700;
        box-shadow: 4px 4px 0 var(--bauhaus-black);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: var(--bauhaus-black) !important;
        margin-top: 80px;
        color: white !important;
      }
      .ds-footer h4 {
        color: var(--bauhaus-yellow) !important;
        text-transform: uppercase;
      }
      .ds-footer .ds-logo {
        color: white !important;
      }
    `
  }
};
