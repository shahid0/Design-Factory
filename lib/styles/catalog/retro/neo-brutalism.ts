
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'brutalism')!;

export const neoBrutalism: StyleCartridge = {
  id: 'brutalism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFDF5', // Raw Cream
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000',
      '--text-secondary': '#111111',
      '--accent-color': '#FF5E5E', // Harsh Red
      '--border-radius': '0px',
      '--font-display': '"Courier New", Courier, monospace',
    },
    elementClasses: {
      stage: 'bg-[#FFFDF5]',
      navbar: 'brut-nav',
      container: 'brut-box',
      buttonPrimary: 'brut-btn-main',
      buttonSecondary: 'brut-btn-sec',
      input: 'brut-input',
      badge: 'brut-badge'
    },
    injectCss: `
      /* --- NEO-BRUTALISM ENGINE --- */

      /* 1. RESET & RAWNESS */
      .ds-page-root {
        background-color: var(--bg-layer-1);
        color: #000;
        font-family: 'Courier New', Courier, monospace;
      }

      /* Raw Grid Background */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: 
          linear-gradient(#000 2px, transparent 2px), 
          linear-gradient(90deg, #000 2px, transparent 2px);
        background-size: 40px 40px;
        opacity: 0.05;
        z-index: -1;
      }

      /* 2. CONTAINERS (The Box) */
      .brut-box, .ds-panel, .ds-card, .brut-nav {
        background: #FFFFFF;
        border: 3px solid #000000;
        border-radius: 0;
        box-shadow: 6px 6px 0px #000000;
        transition: all 0.1s ease-in-out;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 10px 10px 0px #000000;
        background: #FDFD96; /* Pastel Yellow highlight */
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: Helvetica, Arial, sans-serif;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -2px;
        line-height: 0.9;
        font-size: 4rem;
        background: #000;
        color: #fff;
        display: inline-block;
        padding: 10px;
        box-shadow: 8px 8px 0px var(--accent-color);
        margin-bottom: 20px;
      }
      .ds-hero-title span {
        background: var(--accent-color);
        color: #000;
        padding: 0 5px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
        background: white;
        border: 3px solid black;
        padding: 1rem;
        margin-top: 2rem;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
        max-width: 600px;
      }
      
      .ds-section-title {
        font-weight: 900;
        text-transform: uppercase;
        background: #000;
        color: #fff !important;
        padding: 5px 10px;
        display: inline-block;
        transform: rotate(-1deg);
      }

      /* 4. BUTTONS (Hard Click) */
      .brut-btn-main, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #000 !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 900 !important;
        text-transform: uppercase;
        box-shadow: 5px 5px 0px #000 !important;
        transition: all 0.1s !important;
        font-family: Arial, sans-serif !important;
        padding: 12px 30px !important;
      }
      .brut-btn-main:hover, .ds-btn-primary:hover {
        transform: translate(2px, 2px) !important;
        box-shadow: 3px 3px 0px #000 !important;
        filter: brightness(1.1);
        background: #fff !important;
      }
      .brut-btn-main:active, .ds-btn-primary:active {
        transform: translate(5px, 5px) !important;
        box-shadow: 0px 0px 0px #000 !important;
      }

      .brut-btn-sec, .ds-btn-secondary, .ds-btn-ghost {
        background: #fff !important;
        color: #000 !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        box-shadow: 5px 5px 0px #000 !important;
        text-transform: uppercase;
      }
      .brut-btn-sec:hover, .ds-btn-secondary:hover {
        background: #E0E0E0 !important;
        transform: translate(2px, 2px);
        box-shadow: 3px 3px 0px #000 !important;
      }

      /* 5. NAVIGATION */
      .brut-nav, .ds-navbar {
        background: #fff;
        border-bottom: 4px solid #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        box-shadow: none !important;
        border-radius: 0 !important;
      }
      .ds-logo {
        font-weight: 900;
        text-transform: uppercase;
        background: #000;
        color: #fff;
        padding: 8px 12px;
        font-family: Arial, sans-serif;
        transform: rotate(-2deg);
        border: 2px solid transparent;
      }
      .ds-logo:hover {
        background: #fff;
        color: #000;
        border-color: #000;
      }
      .ds-nav-links { gap: 0; }
      .ds-nav-links span {
        border: 2px solid #000;
        border-right: none;
        padding: 8px 20px;
        font-weight: 700;
        color: #000;
        background: #fff;
      }
      .ds-nav-links span:last-child { border-right: 2px solid #000; }
      .ds-nav-links span:hover {
        background: #000;
        color: #fff;
      }

      /* 6. INPUTS */
      .brut-input, .ds-input {
        background: #fff !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        color: #000 !important;
        font-weight: 700;
        font-family: 'Courier New', Courier, monospace;
        padding: 15px !important;
        padding-left: 40px !important;
        box-shadow: 4px 4px 0 #000 !important;
      }
      .ds-input:focus {
        background: #CBF3F0 !important; /* Mint */
        outline: none;
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 #000 !important;
      }
      .ds-input-decorator {
        background: #000 !important;
        width: 15px !important;
        height: 15px !important;
        border-radius: 0 !important;
        right: auto !important;
        left: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: #E0E0E0 !important;
        border-top: 4px solid #000;
        border-bottom: 4px solid #000;
      }
      .ds-stats > div > div {
        background: #fff;
        border: 3px solid #000;
        margin: 10px;
        box-shadow: 6px 6px 0 #000;
        border-radius: 0;
      }
      .ds-stats .text-3xl {
        font-weight: 900;
        color: #000;
        font-size: 2.5rem;
        font-family: Arial, sans-serif;
      }
      .ds-stats span:first-child {
        background: #000;
        color: #fff;
        padding: 2px 8px;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #000 !important;
        background: #fff !important;
        box-shadow: 10px 10px 0 #000 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 2px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #fff;
        font-family: Helvetica, sans-serif;
        text-transform: uppercase;
        font-weight: 900;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FF99C8 !important; /* Pink highlight */
        font-weight: bold;
      }
      .ds-table-container span {
        border: 2px solid #000;
        background: #fff !important;
        color: #000 !important;
        border-radius: 0;
        font-weight: 900;
        box-shadow: 2px 2px 0 #000;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        padding: 30px !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        background: #A9DEF9 !important; /* Blue pastel */
        transform: rotate(1deg) scale(1.02);
        z-index: 5;
        border: 4px solid #000 !important;
        box-shadow: 12px 12px 0 #000 !important;
      }
      .ds-card:nth-child(2):hover {
         transform: rotate(0deg) scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-size: 2rem;
        text-decoration: underline;
        font-weight: 900;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #fff;
        font-weight: 900;
        font-size: 1.2rem;
        padding: 5px 10px;
        top: -20px;
        right: -10px;
        transform: rotate(5deg);
        border: 2px solid #fff;
        border-radius: 0;
        text-transform: uppercase;
      }
      
      .ds-card button {
         border-radius: 0 !important;
         text-transform: uppercase;
         font-weight: 900;
         border: 3px solid #000 !important;
         box-shadow: 4px 4px 0 #000 !important;
      }
      .ds-card button:hover {
         transform: translate(2px, 2px);
         box-shadow: 2px 2px 0 #000 !important;
      }

      /* 10. BADGE */
      .brut-badge, .ds-badge {
        background: #000 !important;
        color: #fff !important;
        border: none;
        border-radius: 0 !important;
        padding: 6px 12px;
        font-weight: 900;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.3);
        transform: rotate(-3deg);
        font-family: Arial, sans-serif;
        text-transform: uppercase;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #fff !important;
        margin-top: 80px;
        border-top: 10px solid var(--accent-color) !important;
        padding: 60px 20px;
      }
      
      /* FIX: Force white text on black footer background */
      .ds-footer p {
        color: #fff !important;
        font-weight: 700;
      }
      .ds-footer .grid span,
      .ds-footer .mt-16 span {
         color: #fff !important;
         font-weight: 700;
      }
      /* Hover effects for footer links */
      .ds-footer .grid span:hover {
         background: #fff;
         color: #000 !important;
         box-shadow: 4px 4px 0 var(--accent-color);
         cursor: pointer;
      }
      
      .ds-footer .ds-logo {
        background: #fff;
        color: #000 !important;
        display: inline-block;
        border: 4px solid var(--accent-color);
        padding: 5px 10px;
      }
      .ds-footer h4 {
        color: var(--accent-color) !important;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 1.2rem;
        background: #000;
        display: inline-block;
        border: 2px solid var(--accent-color);
        padding: 2px 5px;
      }
    `
  }
};
