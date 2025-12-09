
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'rave')!;

export const acidRave: StyleCartridge = {
  id: 'rave',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#111111',
      '--text-primary': '#CCFF00', // Acid Green
      '--text-secondary': '#FF00FF', // Hot Pink
      '--accent-color': '#FFFF00', // Yellow
      '--border-radius': '0px',
      '--font-display': '"Rubik Mono One", "Arial Black", sans-serif',
    },
    elementClasses: {
      stage: 'rave-stage',
      navbar: 'rave-nav',
      container: 'rave-panel',
      buttonPrimary: 'rave-btn-primary',
      buttonSecondary: 'rave-btn-secondary',
      input: 'rave-input',
      badge: 'rave-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap');

      /* --- ACID RAVE ENGINE --- */

      .rave-stage {
        background-color: #000000;
        color: #CCFF00;
        font-family: 'Arial', sans-serif;
        overflow-x: hidden;
      }

      /* Smiley Background */
      .ds-deco-layer::before {
        content: "☺";
        position: fixed;
        inset: 0;
        font-size: 100px;
        color: rgba(255, 255, 0, 0.1);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        z-index: -1;
        opacity: 0.2;
        transform: rotate(15deg) scale(1.5);
      }

      /* Strobe Effect (Subtle) */
      .ds-page-root {
        animation: strobe 5s infinite;
      }
      @keyframes strobe {
        0%, 98%, 100% { filter: hue-rotate(0deg); }
        99% { filter: hue-rotate(90deg) invert(1); }
      }

      /* 2. PANELS (Melted) */
      .rave-panel, .ds-panel, .ds-card, .rave-nav {
        background: #000000;
        border: 4px solid #CCFF00;
        box-shadow: 8px 8px 0 #FF00FF;
        border-radius: 0;
        padding: 20px;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-4px, -4px);
        box-shadow: 12px 12px 0 #FFFF00;
        border-color: #FF00FF;
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Rubik Mono One', sans-serif;
        font-size: 4rem;
        line-height: 1;
        color: #FFFF00;
        text-shadow: 4px 4px 0 #FF00FF;
      }
      .ds-hero-title span {
        color: #00FFFF;
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 4px 4px 0 #000;
        -webkit-text-stroke: 2px #CCFF00;
      }
      .ds-hero-text {
        font-weight: 700;
        font-size: 1.2rem;
        background: #FF00FF;
        color: #000;
        padding: 10px;
        display: inline-block;
      }

      /* 4. BUTTONS (Hardcore) */
      .rave-btn-primary, .ds-btn-primary {
        background: #CCFF00 !important;
        color: #000 !important;
        font-family: 'Rubik Mono One', sans-serif !important;
        font-size: 1.2rem !important;
        border: 4px solid #000 !important;
        box-shadow: 4px 4px 0 #FFF !important;
        border-radius: 0 !important;
        text-transform: uppercase;
        padding: 15px 30px !important;
      }
      .rave-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF00FF !important;
        color: #FFF !important;
        box-shadow: 6px 6px 0 #CCFF00 !important;
      }

      .rave-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #000 !important;
        color: #FFF !important;
        border: 2px solid #FFF !important;
        font-weight: 700 !important;
        border-radius: 0 !important;
      }
      .rave-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFF !important;
        color: #000 !important;
      }

      /* 5. NAVIGATION */
      .rave-nav, .ds-navbar {
        background: #000;
        border-bottom: 4px solid #FFFF00;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 0 20px rgba(204, 255, 0, 0.2);
      }
      .ds-logo {
        font-family: 'Rubik Mono One', sans-serif;
        color: #FF00FF;
        text-shadow: 2px 2px 0 #CCFF00;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        color: #FFF;
      }
      .ds-nav-links span:hover {
        color: #CCFF00;
        background: #000;
        border: 2px solid #CCFF00;
      }

      /* 6. INPUTS */
      .rave-input, .ds-input {
        background: #000 !important;
        border: 4px solid #CCFF00 !important;
        color: #CCFF00 !important;
        font-weight: 700;
        padding-left: 20px !important;
        border-radius: 0 !important;
      }
      .ds-input:focus {
        background: #111 !important;
        box-shadow: 4px 4px 0 #FF00FF !important;
      }
      .ds-input-decorator {
        background: #FF00FF !important;
        border-radius: 0;
        width: 15px !important; height: 15px !important;
        right: 15px !important; left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #000;
        border: 2px solid #FFFF00;
        margin: 10px;
        box-shadow: 4px 4px 0 #00FFFF;
      }
      .ds-stats .text-3xl {
        font-family: 'Rubik Mono One', sans-serif;
        color: #00FFFF;
      }
      .ds-stats span:first-child {
        color: #FF00FF;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #CCFF00 !important;
        background: #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #CCFF00;
        color: #000;
        font-weight: 700;
        font-family: 'Rubik Mono One', sans-serif;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FF00FF !important;
        color: #000 !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #00FFFF !important;
        color: #000 !important;
        border: 2px solid #000;
        font-weight: 700;
        border-radius: 0;
      }

      /* 9. PRICING */
      .ds-card {
        background: #000 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FFFF00 !important;
        box-shadow: 8px 8px 0 #CCFF00 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFFF00;
        font-family: 'Rubik Mono One', sans-serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFFF00;
        color: #000;
        font-weight: 900;
        top: 0; right: 0;
        padding: 5px 10px;
      }

      /* 10. BADGE */
      .rave-badge, .ds-badge {
        background: #000 !important;
        color: #CCFF00 !important;
        border: 2px solid #CCFF00;
        font-weight: 700;
        border-radius: 0;
        padding: 4px 10px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 4px solid #FF00FF !important;
        margin-top: 60px;
      }
    `
  }
};
