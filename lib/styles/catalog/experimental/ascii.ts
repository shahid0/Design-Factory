
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'ascii')!;

export const ascii: StyleCartridge = {
  id: 'ascii',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#111111',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#AAAAAA',
      '--accent-color': '#FFFFFF',
      '--border-radius': '0px',
      '--font-display': '"Courier Prime", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'ascii-stage',
      navbar: 'ascii-nav',
      container: 'ascii-panel',
      buttonPrimary: 'ascii-btn-primary',
      buttonSecondary: 'ascii-btn-secondary',
      input: 'ascii-input',
      badge: 'ascii-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&display=swap');

      /* --- ASCII ART ENGINE --- */

      .ascii-stage {
        background-color: #000000;
        color: #FFFFFF;
        font-family: 'Courier Prime', monospace;
      }

      /* Character Grid Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        opacity: 0.1;
        background-image: 
          linear-gradient(#333 1px, transparent 1px),
          linear-gradient(90deg, #333 1px, transparent 1px);
        background-size: 20px 20px;
        z-index: -1;
      }

      /* 2. CONTAINERS (Character Borders) */
      .ascii-panel, .ds-panel, .ds-card, .ascii-nav {
        background: #000000;
        border: 1px solid transparent;
        box-shadow: 
          0 0 0 1px white, /* Inner Line */
          4px 4px 0px rgba(255,255,255,0.5); /* Drop Shadow Block */
        position: relative;
        padding: 20px;
        margin: 20px;
      }
      
      /* Simulate ASCII Border corners */
      .ascii-panel::before, .ds-panel::before, .ds-card::before {
        content: "+---------------------+";
        position: absolute;
        top: -12px; left: 0; right: 0;
        text-align: center;
        background: #000;
        font-size: 14px;
        line-height: 1;
        width: fit-content;
        margin: 0 auto;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 
          0 0 0 1px white,
          6px 6px 0px white;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 3rem;
        letter-spacing: -2px;
        text-shadow: 2px 2px 0 #555;
      }
      /* ASCII Art Title Simulation */
      .ds-hero-title::before {
        content: "  _    _  ___  ____  _    ____  ";
        display: block;
        font-size: 14px;
        white-space: pre;
        color: #888;
        line-height: 10px;
        margin-bottom: 5px;
      }
      .ds-hero-title span {
        background: #FFFFFF;
        color: #000000;
        padding: 0 10px;
        -webkit-text-fill-color: initial;
      }
      
      .ds-hero-text {
        font-size: 1rem;
        border-left: 2px solid #FFF;
        padding-left: 15px;
        color: #CCC;
      }

      /* 4. BUTTONS (Text Box) */
      .ascii-btn-primary, .ds-btn-primary {
        background: #FFFFFF !important;
        color: #000000 !important;
        border: 2px solid #FFFFFF !important;
        border-radius: 0 !important;
        font-family: 'Courier Prime', monospace !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        box-shadow: 4px 4px 0 #555 !important;
        padding: 10px 20px !important;
        transition: all 0.1s !important;
      }
      .ascii-btn-primary:hover, .ds-btn-primary:hover {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 #555 !important;
      }
      /* Brackets */
      .ascii-btn-primary::before { content: "[ "; }
      .ascii-btn-primary::after { content: " ]"; }

      .ascii-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #000000 !important;
        color: #FFFFFF !important;
        border: 1px dashed #FFFFFF !important;
        border-radius: 0 !important;
        font-family: 'Courier Prime', monospace !important;
      }
      .ascii-btn-secondary:hover, .ds-btn-secondary:hover {
        border-style: solid !important;
        background: #111 !important;
      }

      /* 5. NAVIGATION */
      .ascii-nav, .ds-navbar {
        border-bottom: 1px dashed #FFFFFF;
        margin: 0 !important;
        width: 100% !important;
        background: #000;
        padding: 15px 30px;
      }
      .ds-logo {
        font-weight: 700;
      }
      .ds-logo::before { content: "/> "; }
      
      .ds-nav-links span {
        text-decoration: underline;
        text-decoration-style: dotted;
      }
      .ds-nav-links span:hover {
        background: #FFFFFF;
        color: #000000;
        text-decoration: none;
      }

      /* 6. INPUTS */
      .ascii-input, .ds-input {
        background: #000000 !important;
        border: 1px solid #FFFFFF !important;
        border-radius: 0 !important;
        color: #FFFFFF !important;
        font-family: 'Courier Prime', monospace;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        background: #111 !important;
        box-shadow: 4px 4px 0 #333 !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        content: ">";
        left: 5px !important;
        width: auto !important; height: auto !important;
        color: white;
        font-weight: bold;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: 1px dashed #FFFFFF;
        margin: 20px 0;
      }
      .ds-stats > div > div {
        background: #000;
        border-right: 1px dashed #FFFFFF;
        padding: 20px;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        text-decoration: underline;
      }
      .ds-stats span:first-child {
        color: #CCC;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #FFFFFF !important;
        background: #000 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px dashed #555 !important;
      }
      .ds-table-container > div:first-child {
        background: #222;
        color: #FFF;
        font-weight: 700;
        border-bottom: 1px solid #FFF !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFFFF !important;
        color: #000000 !important;
      }
      /* Force children color on hover */
      .ds-table-container > div:not(:first-child):hover * {
         color: #000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid currentColor;
        border-radius: 0;
        padding: 2px 5px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #000 !important;
        border: 1px solid #FFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px double #FFF !important;
        transform: scale(1.02);
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-weight: 700;
        border: 1px solid #000;
        top: 0; right: 0;
        padding: 5px;
      }

      /* 10. BADGE */
      .ascii-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border: 1px solid #FFF;
        border-radius: 0;
        padding: 2px 8px;
      }
      
      /* 11. TOGGLES (Text) */
      .mannequin-toggle-track {
        background: #000;
        border: 1px solid #FFF;
        border-radius: 0;
        width: 60px;
        position: relative;
      }
      .mannequin-toggle-track::before {
        content: "[OFF]";
        color: #FFF;
        font-size: 10px;
        position: absolute;
        right: 2px; top: 2px;
      }
      .mannequin-toggle-track.active {
        background: #000;
      }
      .mannequin-toggle-track.active::before {
        content: "[ON]";
        left: 2px;
        color: #FFF;
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 0;
        width: 15px;
        box-shadow: none;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
        left: calc(100% - 15px - 2px);
      }

      /* 12. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 1px dashed #FFF !important;
        margin-top: 60px;
      }
    `
  }
};
