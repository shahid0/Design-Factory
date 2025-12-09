
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'teletext')!;

export const teletext: StyleCartridge = {
  id: 'teletext',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#000000',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#00FFFF', // Cyan
      '--accent-color': '#FFFF00', // Yellow
      '--border-radius': '0px',
      '--font-display': '"VT323", monospace', // Ideally a mosaic font, VT323 is closest standard
    },
    elementClasses: {
      stage: 'teletext-stage',
      navbar: 'teletext-header',
      container: 'teletext-block',
      buttonPrimary: 'teletext-btn-primary',
      buttonSecondary: 'teletext-btn-secondary',
      input: 'teletext-input',
      badge: 'teletext-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

      /* --- CEEFAX / TELETEXT ENGINE --- */

      /* 1. GRID SYSTEM & COLOR PALETTE */
      .teletext-stage {
        background-color: #000000;
        color: #FFFFFF;
        font-family: 'VT323', monospace;
        font-size: 20px;
        line-height: 1.2;
        /* No anti-aliasing for authenticity */
        -webkit-font-smoothing: none;
        image-rendering: pixelated;
      }

      /* Scanlines */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: linear-gradient(rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 50%);
        background-size: 100% 4px;
        pointer-events: none;
        z-index: 1000;
      }

      /* 2. HEADER (Page Number) */
      .teletext-header, .ds-navbar {
        background: #000000 !important;
        border-bottom: none;
        margin: 0 !important;
        width: 100% !important;
        padding: 10px 20px;
        display: flex;
        justify-content: space-between;
      }
      .ds-logo {
        color: #FFFF00; /* Yellow */
        font-size: 2rem;
        letter-spacing: 2px;
        background: #000000;
        padding: 0;
      }
      .ds-logo::before {
        content: 'P100';
        color: #FFFFFF;
        margin-right: 10px;
      }
      
      /* Fastext Links (Red Green Yellow Blue) */
      .ds-nav-links span:nth-child(1) { color: #FF0000; } /* Red */
      .ds-nav-links span:nth-child(2) { color: #00FF00; } /* Green */
      .ds-nav-links span:nth-child(3) { color: #FFFF00; } /* Yellow */
      .ds-nav-links span:nth-child(4) { color: #00FFFF; } /* Cyan */
      
      .ds-nav-links span {
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        background: #FFFFFF;
        color: #000000;
      }

      /* 3. BLOCKS (Panels) */
      .teletext-block, .ds-panel, .ds-card {
        background: #000000;
        border: none;
        border-radius: 0;
        box-shadow: none;
        margin-bottom: 20px;
        padding: 0;
      }
      
      /* Block Graphics Title Simulation */
      .ds-panel h3, .ds-card h3 {
        background: #0000FF; /* Blue background */
        color: #FFFF00; /* Yellow text */
        padding: 2px 10px;
        margin-bottom: 10px;
        display: block;
        font-size: 1.5rem;
      }

      /* 4. TYPOGRAPHY */
      .ds-hero-title {
        color: #00FF00; /* Green */
        font-size: 4rem;
        line-height: 1;
        margin-bottom: 20px;
        text-shadow: 2px 2px 0 #000; /* Hard shadow */
      }
      /* Double Height Text Simulation */
      .ds-hero-title {
        transform: scaleY(2); 
        margin-top: 40px;
        margin-bottom: 40px;
        transform-origin: top left;
      }
      
      .ds-hero-title span {
        color: #FFFF00;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      
      .ds-hero-text {
        color: #00FFFF; /* Cyan */
        font-size: 1.2rem;
        max-width: 600px;
      }

      /* 5. BUTTONS (Fastext Keys) */
      .teletext-btn-primary, .ds-btn-primary {
        background: #FF0000 !important; /* Red Key */
        color: #FFFFFF !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        text-transform: uppercase;
        border: none !important;
        border-radius: 0 !important;
        padding: 5px 20px !important;
        box-shadow: none !important;
      }
      .teletext-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFFFFF !important;
        color: #FF0000 !important;
      }

      .teletext-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #00FF00 !important; /* Green Key */
        color: #000000 !important;
        border: none !important;
        border-radius: 0 !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        text-transform: uppercase;
      }
      .teletext-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFFFFF !important;
        color: #000000 !important;
      }

      /* 6. INPUTS */
      .teletext-input, .ds-input {
        background: #000000 !important;
        color: #FFFFFF !important;
        border: none !important;
        border-bottom: 2px solid #FFFFFF !important;
        border-radius: 0 !important;
        font-family: 'VT323', monospace !important;
        font-size: 1.2rem !important;
        padding-left: 0 !important;
      }
      .ds-input:focus {
        background: #0000FF !important; /* Blue background on focus */
        color: #FFFF00 !important;
      }
      .ds-input-decorator {
        display: none;
      }
      /* Flashing Cursor Block */
      .ds-input::after {
         content: "█";
         animation: blink 1s infinite;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 2px dashed #FFFFFF;
        border-bottom: 2px dashed #FFFFFF;
        margin: 20px 0;
      }
      .ds-stats > div > div {
        background: #000000;
        border-right: 2px solid #0000FF;
        color: #FFFFFF;
      }
      .ds-stats .text-3xl {
        color: #00FF00;
        font-size: 2rem;
      }
      .ds-stats span:first-child {
        color: #00FFFF;
        font-size: 1rem;
      }

      /* 8. TABLE (Data Page) */
      .ds-table-container {
        background: #000000 !important;
        border: none !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div:first-child {
        background: #FFFFFF;
        color: #000000;
        font-weight: bold;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child) {
        border-bottom: 1px dashed #555 !important;
      }
      /* Reveal on hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #0000FF !important;
        color: #FFFF00 !important;
      }
      /* Force color change */
      .ds-table-container > div:not(:first-child):hover * {
         color: #FFFF00 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FF00FF !important; /* Magenta */
        color: #FFFFFF !important;
        border-radius: 0;
        padding: 0 5px;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        border: 2px solid #FFFFFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FFFF00 !important;
      }
      .ds-card:nth-child(2) h3 {
         background: #FFFF00;
         color: #000000;
      }
      .ds-card:nth-child(2) .absolute {
         background: #FF0000;
         color: #FFFFFF;
         top: 0; right: 0;
         padding: 5px;
         font-weight: bold;
         animation: blink 1s step-end infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* 10. BADGE */
      .teletext-badge, .ds-badge {
        background: #0000FF !important;
        color: #FFFF00 !important;
        border-radius: 0 !important;
        padding: 2px 5px;
        font-size: 1rem;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000000 !important;
        border-top: 2px solid #FFFFFF !important;
        margin-top: 40px;
      }
      .ds-footer .ds-logo {
         color: #00FF00;
      }
      .ds-footer .ds-logo::before {
         content: none;
      }
    `
  }
};
