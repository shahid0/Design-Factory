
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'win95')!;

export const win95: StyleCartridge = {
  id: 'win95',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#008080', // Classic Teal Desktop
      '--bg-layer-2': '#C0C0C0', // Windows Grey
      '--text-primary': '#000000',
      '--text-secondary': '#808080',
      '--accent-color': '#000080', // Active Title Bar Blue
      '--border-radius': '0px',
      '--font-display': '"MS Sans Serif", "Tahoma", sans-serif',
    },
    elementClasses: {
      stage: 'win95-desktop',
      navbar: 'win95-taskbar',
      container: 'win95-window',
      buttonPrimary: 'win95-btn',
      buttonSecondary: 'win95-btn',
      input: 'win95-input',
      badge: 'win95-badge'
    },
    injectCss: `
      /* --- WINDOWS 95 (CHICAGO) ENGINE --- */

      /* 1. DESKTOP ENVIRONMENT */
      .win95-desktop {
        background-color: #008080; /* The classic teal */
        font-family: 'MS Sans Serif', 'Tahoma', sans-serif;
        /* Disable font smoothing for crisp pixel look */
        -webkit-font-smoothing: none;
        -moz-osx-font-smoothing: grayscale;
        image-rendering: pixelated;
      }

      /* Dotted focus outline helper */
      *:focus {
        outline: 1px dotted #000000;
        outline-offset: -2px;
      }

      /* 2. THE WINDOW (Container) */
      .win95-window, .ds-panel, .ds-card {
        background: #C0C0C0;
        color: #000000;
        padding: 2px; /* Space for the bevel */
        box-shadow: 
          inset -1px -1px #0a0a0a, 
          inset 1px 1px #dfdfdf, 
          inset -2px -2px #808080, 
          inset 2px 2px #ffffff;
        position: relative;
        margin-bottom: 20px;
        transition: none; /* No animations in 95 */
      }

      /* Title Bar Emulation */
      .win95-window::before, .ds-panel::before, .ds-card::before {
        content: "Program Manager";
        display: flex;
        align-items: center;
        padding: 2px 4px;
        background: linear-gradient(90deg, #000080 0%, #1084d0 100%);
        color: white;
        font-weight: bold;
        font-size: 13px;
        letter-spacing: 0.5px;
        margin: 2px 2px 10px 2px;
        min-height: 18px;
      }
      
      /* Close Button (X) */
      .win95-window::after, .ds-panel::after, .ds-card::after {
        content: "×";
        position: absolute;
        top: 5px; right: 5px;
        width: 16px; height: 14px;
        background: #C0C0C0;
        color: black;
        box-shadow: 
          inset -1px -1px #0a0a0a, 
          inset 1px 1px #ffffff, 
          inset -2px -2px #808080, 
          inset 2px 2px #dfdfdf;
        font-size: 14px;
        line-height: 12px;
        text-align: center;
        font-weight: bold;
        cursor: default;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: none; /* Windows don't float on hover */
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: "Times New Roman", serif;
        font-style: italic;
        font-weight: 700;
        color: white;
        text-shadow: 2px 2px 0px #000;
        letter-spacing: -1px;
      }
      .ds-hero-title span {
        background: transparent;
        color: #C0C0C0;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'MS Sans Serif', 'Tahoma', sans-serif;
        color: white;
        text-shadow: 1px 1px 0px #000;
        font-size: 14px;
      }
      
      /* Section titles inside windows */
      .ds-section-title, .ds-card h3, .ds-stats .text-3xl {
        font-family: 'MS Sans Serif', 'Tahoma', sans-serif;
        color: #000 !important;
        text-shadow: none !important;
      }

      /* 4. BUTTONS (The Classic Bevel) */
      .win95-btn, .ds-btn-primary, .ds-btn-secondary, .ds-btn-ghost {
        background: #C0C0C0 !important;
        color: #000000 !important;
        border: none !important;
        border-radius: 0 !important;
        box-shadow: 
          inset -1px -1px #000000, 
          inset 1px 1px #ffffff, 
          inset -2px -2px #808080, 
          inset 2px 2px #dfdfdf !important;
        font-family: 'MS Sans Serif', 'Tahoma', sans-serif !important;
        font-size: 13px !important;
        padding: 4px 12px !important;
        min-width: 75px;
        text-transform: none !important;
        font-weight: 400 !important;
        active: none;
        transition: none !important;
        cursor: default;
      }
      
      /* Active / Pressed State */
      .win95-btn:active, .ds-btn-primary:active, .ds-btn-secondary:active {
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080 !important;
        transform: translate(1px, 1px);
        padding: 5px 11px 3px 13px !important; /* Visual shift */
      }
      
      /* Focus Dotted Line */
      .win95-btn:focus {
        outline: 1px dotted black;
        outline-offset: -4px;
      }

      /* 5. NAVIGATION (Taskbar) */
      .win95-taskbar, .ds-navbar {
        background: #C0C0C0;
        border-top: 2px solid #dfdfdf;
        box-shadow: inset 0 1px 0 white;
        position: fixed !important;
        bottom: 0 !important;
        top: auto !important;
        left: 0 !important;
        right: 0 !important;
        width: 100% !important;
        margin: 0 !important;
        padding: 4px;
        z-index: 9999;
        display: flex;
        align-items: center;
        border-radius: 0 !important;
      }
      
      /* Start Button */
      .ds-logo {
        background: #C0C0C0;
        box-shadow: 
          inset -1px -1px #000000, 
          inset 1px 1px #ffffff, 
          inset -2px -2px #808080, 
          inset 2px 2px #dfdfdf;
        padding: 2px 6px;
        font-weight: bold;
        font-size: 13px;
        font-style: normal;
        display: flex;
        align-items: center;
        gap: 4px;
        cursor: default;
      }
      .ds-logo::before {
        content: url('data:image/svg+xml;utf8,<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h14v14H0z" fill="none"/><path d="M1 1h5v5H1z" fill="%23e73e32"/><path d="M7 1h5v5H7z" fill="%232d9e45"/><path d="M1 7h5v5H1z" fill="%232b72ce"/><path d="M7 7h5v5H7z" fill="%23efce42"/></svg>');
        display: inline-block;
        vertical-align: middle;
      }
      .ds-logo span {
        color: #000;
        font-weight: bold;
      }
      
      /* Active App in Taskbar */
      .ds-nav-links {
        background: #C0C0C0;
        /* Sunken well */
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080;
        padding: 2px 10px;
        margin-left: 10px;
        font-weight: bold;
        font-size: 13px;
      }
      .ds-nav-links span {
        color: #000;
        font-weight: normal;
      }
      
      /* Clock Tray */
      .ds-navbar .ds-btn-secondary {
        margin-left: auto;
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #808080, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #0a0a0a !important; /* Sunken */
        padding: 2px 10px !important;
        background: #C0C0C0 !important;
        border: none !important;
      }

      /* 6. INPUTS (Sunken White) */
      .win95-input, .ds-input {
        background: #FFFFFF !important;
        border: none !important;
        /* Sunken 3D border */
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080 !important;
        border-radius: 0 !important;
        color: #000 !important;
        padding: 4px 6px !important;
        font-family: 'MS Sans Serif', 'Tahoma', sans-serif;
        font-size: 13px;
        height: 24px;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080 !important;
      }
      .ds-input-decorator {
        display: none; /* No fancy icons inside inputs in 95 */
      }

      /* 7. STATS (Group Box) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        padding: 10px;
      }
      /* Group Box Frame */
      .ds-stats > div > div {
        border: 2px solid transparent;
        box-shadow: 
          -1px -1px #808080, 
          1px 1px #ffffff, 
          -2px -2px #dfdfdf, 
          2px 2px #0a0a0a; /* Etched Groove */
        padding: 10px;
        margin: 5px;
        border-radius: 0;
        background: #C0C0C0;
      }
      .ds-stats .text-3xl {
        font-family: "Courier New", monospace;
        font-weight: bold;
        color: #000;
      }
      .ds-stats span:first-child {
        color: #000;
        font-size: 12px;
      }

      /* 8. TABLE (Data Grid) */
      .ds-table-container {
        background: #FFFFFF !important;
        border: none !important;
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080 !important;
        border-radius: 0 !important;
        padding: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px dotted #808080 !important;
      }
      .ds-table-container > div:first-child {
        background: #C0C0C0;
        border-bottom: 1px solid #808080 !important;
        /* Header Button Look */
        box-shadow: 
          inset -1px -1px #000000, 
          inset 1px 1px #ffffff, 
          inset -2px -2px #808080, 
          inset 2px 2px #dfdfdf;
        margin: 2px;
        font-weight: bold;
        padding-left: 6px;
      }
      /* Selected Row */
      .ds-table-container > div:not(:first-child):hover {
        background: #000080 !important;
        color: white !important;
      }
      /* Force white text on hover for all children */
      .ds-table-container > div:not(:first-child):hover * {
        color: white !important;
      }
      /* Status Pill - just text */
      .ds-table-container span {
        background: transparent !important;
        border: none;
        color: #000 !important;
        box-shadow: none;
        font-weight: normal;
        padding: 0;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        background: #C0C0C0 !important;
        border: none !important;
      }
      /* Override title bars for cards */
      .ds-card::before {
        content: "Card.exe";
      }
      
      /* Popular Card (Active Window) */
      .ds-card:nth-child(2) {
        z-index: 10;
        /* No shadow difference, just position */
      }
      .ds-card:nth-child(2)::before {
        /* Active Title Bar */
        background: linear-gradient(90deg, #000080 0%, #1084d0 100%);
      }
      
      /* Pricing Buttons */
      .ds-card button {
         width: 100%;
      }

      /* 10. BADGE */
      .win95-badge, .ds-badge {
        background: #C0C0C0 !important;
        color: #000 !important;
        box-shadow: 
          inset -1px -1px #ffffff, 
          inset 1px 1px #000000, 
          inset -2px -2px #dfdfdf, 
          inset 2px 2px #808080 !important; /* Sunken field for data */
        padding: 2px 6px;
        border-radius: 0 !important;
        font-size: 12px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #C0C0C0 !important;
        border-top: 2px groove white !important; /* Hack for groove look */
        box-shadow: 0 -2px 0 #808080; /* completing groove */
        margin-top: 40px;
        margin-bottom: 40px; /* Space for taskbar */
      }
    `
  }
};
