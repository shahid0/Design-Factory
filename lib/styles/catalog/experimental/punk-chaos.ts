
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'punk-chaos')!;

export const punkChaos: StyleCartridge = {
  id: 'punk-chaos',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF', // Torn Paper White
      '--bg-layer-2': '#000000', // Ink
      '--text-primary': '#000000',
      '--text-secondary': '#FF0000', // Blood Red
      '--accent-color': '#FF0099', // Hot Pink
      '--border-radius': '0px',
      '--font-display': '"Permanent Marker", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'punk-stage',
      navbar: 'punk-nav',
      container: 'punk-panel',
      buttonPrimary: 'punk-btn-primary',
      buttonSecondary: 'punk-btn-secondary',
      input: 'punk-input',
      badge: 'punk-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Special+Elite&display=swap');

      /* --- PUNK CHAOS ENGINE --- */

      .punk-stage {
        background-color: #FFF;
        color: #000;
        font-family: 'Special Elite', monospace;
        overflow-x: hidden;
        /* Newsprint texture */
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
      }

      /* 2. CONTAINERS (Ransom Note Cutouts) */
      .punk-panel, .ds-panel, .ds-card, .punk-nav {
        background: #FFF;
        border: 3px solid #000;
        box-shadow: 10px 10px 0 #000;
        padding: 20px;
        transform: rotate(-1deg);
        margin: 20px;
      }
      
      /* Tape */
      .punk-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -15px; left: 50%;
        width: 100px; height: 30px;
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid #CCC;
        transform: translateX(-50%) rotate(2deg);
        box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
      }

      .ds-panel:hover, .ds-card:hover {
        transform: rotate(1deg) scale(1.02);
        background: #FF0099;
        color: #FFF;
        border-color: #FFF;
      }
      .ds-panel:hover *, .ds-card:hover * {
         color: #FFF !important;
         border-color: #FFF !important;
      }

      /* 3. TYPOGRAPHY (Magazine Cutout) */
      .ds-hero-title {
        font-family: 'Permanent Marker', cursive;
        font-size: 5rem;
        line-height: 1;
        color: #000;
        text-transform: uppercase;
      }
      .ds-hero-title span {
        background: #000;
        color: #FFF;
        padding: 5px 15px;
        transform: rotate(-3deg);
        display: inline-block;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        background: #FFFF00;
        color: #000;
        padding: 10px;
        border: 2px solid #000;
        display: inline-block;
        transform: rotate(1deg);
        margin-top: 20px;
      }

      /* 4. BUTTONS (Safety Pin) */
      .punk-btn-primary, .ds-btn-primary {
        background: #FF0000 !important;
        color: #FFF !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Permanent Marker', cursive !important;
        font-size: 1.5rem !important;
        padding: 10px 30px !important;
        transform: rotate(-2deg);
        box-shadow: 5px 5px 0 #000 !important;
        transition: all 0.1s !important;
      }
      .punk-btn-primary:hover, .ds-btn-primary:hover {
        background: #000 !important;
        color: #FF0000 !important;
        transform: scale(1.1) rotate(2deg);
      }

      .punk-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #000 !important;
        border: 3px solid #000 !important;
        font-weight: 700 !important;
        transform: rotate(1deg);
      }
      .punk-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFFF00 !important;
      }

      /* 5. NAVIGATION */
      .punk-nav, .ds-navbar {
        background: #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        border-bottom: 5px solid #FF0099;
        transform: rotate(0deg);
      }
      .ds-logo {
        font-family: 'Permanent Marker', cursive;
        color: #FFF;
        font-size: 2.5rem;
        text-shadow: 3px 3px 0 #FF0000;
      }
      .ds-nav-links span {
        background: #FFF;
        color: #000;
        padding: 5px 10px;
        font-weight: 700;
        margin: 0 5px;
        transform: rotate(calc(var(--i, 1) * 3deg)); /* Random rotation needs JS or distinct classes, simulated */
      }
      .ds-nav-links span:hover {
        background: #FF0000;
        color: #FFF;
      }

      /* 6. INPUTS */
      .punk-input, .ds-input {
        background: #FFF !important;
        border: 3px solid #000 !important;
        border-radius: 0 !important;
        color: #000 !important;
        font-family: 'Special Elite', monospace;
        font-size: 1.2rem !important;
        padding-left: 20px !important;
        transform: rotate(1deg);
      }
      .ds-input:focus {
        background: #000 !important;
        color: #FFF !important;
        border-color: #FF0099 !important;
      }
      .ds-input-decorator {
        background: #FF0099 !important;
        border: 2px solid #000;
        border-radius: 50%;
        width: 15px !important; height: 15px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 3px solid #000;
        margin: 10px;
        box-shadow: 5px 5px 0 #000;
      }
      .ds-stats .text-3xl {
        font-family: 'Permanent Marker', cursive;
        color: #FF0000;
        font-size: 3rem;
      }
      .ds-stats span:first-child {
        background: #000;
        color: #FFF;
        padding: 2px 5px;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 3px solid #000 !important;
        background: #FFF !important;
        transform: rotate(-1deg);
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-family: 'Permanent Marker', cursive;
        font-size: 1.2rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFF00 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FF0099 !important;
        color: #FFF !important;
        border: 2px solid #000;
        border-radius: 0;
        font-weight: 700;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        background: #FF0000 !important;
        color: #FFF !important;
        transform: rotate(2deg) scale(1.05);
        z-index: 10;
        border: 4px solid #000 !important;
      }
      .ds-card:nth-child(2) * { color: #FFF !important; border-color: #FFF !important; }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Permanent Marker', cursive;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFFF00;
        color: #000 !important;
        border: 2px solid #000 !important;
        font-weight: 900;
        top: -15px; right: -15px;
        padding: 10px;
        transform: rotate(10deg);
      }

      /* 10. BADGE */
      .punk-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        font-family: 'Permanent Marker', cursive;
        padding: 5px 10px;
        border: none;
        border-radius: 0;
        transform: rotate(-3deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        margin-top: 100px;
        padding-top: 60px;
        border-top: 10px solid #FF0000 !important;
      }
      .ds-footer * { color: #FFF !important; }
    `
  }
};
