
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'wireframe')!;

export const loFiWireframe: StyleCartridge = {
  id: 'wireframe',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#F8F8F8',
      '--text-primary': '#222222',
      '--text-secondary': '#666666',
      '--accent-color': '#0000EE', // Hyperlink Blue
      '--border-radius': '0px',
      '--font-display': '"Patrick Hand", "Comic Sans MS", cursive',
    },
    elementClasses: {
      stage: 'lofi-stage',
      navbar: 'lofi-nav',
      container: 'lofi-panel',
      buttonPrimary: 'lofi-btn-primary',
      buttonSecondary: 'lofi-btn-secondary',
      input: 'lofi-input',
      badge: 'lofi-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

      /* --- LO-FI WIREFRAME ENGINE --- */

      .lofi-stage {
        background-color: #FFF;
        color: #222;
        font-family: 'Patrick Hand', cursive;
        /* Graph Paper Grid */
        background-image: 
          linear-gradient(#E0E0E0 1px, transparent 1px),
          linear-gradient(90deg, #E0E0E0 1px, transparent 1px);
        background-size: 20px 20px;
      }

      /* 2. PANELS (Sketchy Borders) */
      .lofi-panel, .ds-panel, .ds-card, .lofi-nav {
        background: #FFF;
        border: 2px solid #222;
        border-radius: 2px;
        /* Hand-drawn effect via multi-shadow/border */
        box-shadow: 2px 2px 0 #222;
        position: relative;
        padding: 20px;
      }
      
      /* Placeholder X for Images/Icons */
      .ds-panel .w-12 {
        background: #F0F0F0;
        border: 1px solid #999;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
      }
      .ds-panel .w-12::before, .ds-panel .w-12::after {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        border-top: 1px solid #999;
        transform-origin: center;
      }
      .ds-panel .w-12::before { transform: rotate(45deg) scale(1.5); }
      .ds-panel .w-12::after { transform: rotate(-45deg) scale(1.5); }
      .ds-panel svg { display: none; } /* Hide real icons */

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-1px, -1px);
        box-shadow: 4px 4px 0 #0000EE;
        border-color: #0000EE;
      }

      /* 3. TYPOGRAPHY (Handwritten annotations) */
      .ds-hero-title {
        font-weight: 400;
        font-size: 3.5rem;
        color: #222;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        text-decoration: underline;
        text-decoration-style: wavy;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #555;
        border: 1px dashed #999;
        padding: 10px;
        background: #FFFFEA; /* Post-it note color */
        transform: rotate(-1deg);
        max-width: 500px;
        margin: 20px auto;
      }

      /* 4. BUTTONS (Rough) */
      .lofi-btn-primary, .ds-btn-primary {
        background: #FFF !important;
        color: #222 !important;
        border: 2px solid #222 !important;
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
        padding: 10px 30px !important;
        font-weight: 700 !important;
        font-size: 1.2rem !important;
        box-shadow: 2px 2px 0 #222 !important;
      }
      .lofi-btn-primary:hover, .ds-btn-primary:hover {
        background: #0000EE !important;
        color: #FFF !important;
        border-color: #0000EE !important;
      }

      .lofi-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #555 !important;
        border: 1px dashed #555 !important;
        border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px !important;
        font-size: 1.1rem !important;
      }
      .lofi-btn-secondary:hover, .ds-btn-secondary:hover {
        border-style: solid !important;
        color: #222 !important;
      }

      /* 5. NAVIGATION */
      .lofi-nav, .ds-navbar {
        background: #FFF;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border: 2px solid #222;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
        border-radius: 2px;
      }
      .ds-logo {
        font-weight: 700;
        font-size: 1.5rem;
      }
      .ds-nav-links span {
        text-decoration: underline;
        color: #0000EE;
        cursor: pointer;
      }
      
      /* 6. INPUTS (Fields) */
      .lofi-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #222 !important;
        border-radius: 0 !important;
        padding-left: 10px !important;
        font-size: 1.1rem;
        color: #222 !important;
        box-shadow: inset 2px 2px 0 rgba(0,0,0,0.05);
      }
      .ds-input:focus {
        background: #FFFFEA !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: 1px solid #222;
      }
      .ds-stats > div > div {
        background: #FFF;
        border-right: 1px solid #222;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #0000EE;
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #222;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: #FFF !important;
        border: 2px solid #222 !important;
        box-shadow: 4px 4px 0 #CCC !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #222 !important;
      }
      .ds-table-container > div:first-child {
        background: #EEE;
        font-weight: 700;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFFEA !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FFF !important;
        border: 1px solid #222;
        color: #222 !important;
        border-radius: 10px;
        padding: 2px 8px;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #222 !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #0000EE;
        color: #FFF;
        font-weight: 700;
        padding: 5px 10px;
        top: -15px; right: -10px;
        transform: rotate(5deg);
        border: 2px solid #222;
      }

      /* 10. BADGE */
      .lofi-badge, .ds-badge {
        background: #FFFFEA !important;
        color: #222 !important;
        border: 1px solid #222;
        border-radius: 0;
        padding: 2px 8px;
        font-size: 0.9rem;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #F0F0F0 !important;
        border-top: 2px solid #222 !important;
        margin-top: 60px;
      }
    `
  }
};
