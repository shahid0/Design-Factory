
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'typography')!;

export const kineticTypography: StyleCartridge = {
  id: 'typography',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#000000',
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#000000',
      '--border-radius': '0px',
      '--font-display': '"Anton", "Oswald", sans-serif',
    },
    elementClasses: {
      stage: 'type-stage',
      navbar: 'type-nav',
      container: 'type-panel',
      buttonPrimary: 'type-btn-primary',
      buttonSecondary: 'type-btn-secondary',
      input: 'type-input',
      badge: 'type-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Anton&family=Oswald:wght@400;700&display=swap');

      /* --- KINETIC TYPOGRAPHY ENGINE --- */

      .type-stage {
        background-color: #FFFFFF;
        color: #000;
        font-family: 'Oswald', sans-serif;
        overflow-x: hidden;
      }

      /* Marquee Background */
      .ds-deco-layer::before {
        content: "TYPE IS IMAGE TYPE IS IMAGE TYPE IS IMAGE TYPE IS IMAGE ";
        position: fixed;
        top: 50%; left: 0;
        white-space: nowrap;
        font-family: 'Anton', sans-serif;
        font-size: 20vw;
        color: rgba(0,0,0,0.03);
        transform: translateY(-50%) rotate(-5deg);
        z-index: -1;
        pointer-events: none;
      }

      /* 2. CONTAINERS (Just Space) */
      .type-panel, .ds-panel, .ds-card, .type-nav {
        background: transparent;
        border: 4px solid #000;
        box-shadow: none;
        border-radius: 0;
        transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: #000;
        color: #FFF;
        transform: scale(1.02);
      }
      .ds-panel:hover *, .ds-card:hover * {
        color: #FFF !important;
        border-color: #FFF !important;
      }

      /* 3. TYPOGRAPHY (Huge) */
      .ds-hero-title {
        font-family: 'Anton', sans-serif;
        text-transform: uppercase;
        font-size: 8rem;
        line-height: 0.85;
        letter-spacing: -2px;
        word-break: break-all;
      }
      .ds-hero-title span {
        color: transparent;
        -webkit-text-stroke: 2px #000;
        background: none;
        -webkit-text-fill-color: initial; /* Reset */
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-text {
        font-weight: 700;
        font-size: 1.5rem;
        text-transform: uppercase;
        border-top: 4px solid #000;
        padding-top: 20px;
        margin-top: 40px;
        max-width: 100%;
      }

      /* 4. BUTTONS (Blocks) */
      .type-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        font-family: 'Anton', sans-serif !important;
        font-size: 2rem !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none !important;
        border-radius: 0 !important;
        padding: 20px 40px !important;
        transition: transform 0.2s !important;
      }
      .type-btn-primary:hover, .ds-btn-primary:hover {
        transform: scaleX(1.1);
      }

      .type-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 4px solid #000 !important;
        font-family: 'Anton', sans-serif !important;
        font-size: 2rem !important;
        text-transform: uppercase;
        border-radius: 0 !important;
      }
      .type-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .type-nav, .ds-navbar {
        border: none;
        border-bottom: 4px solid #000;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
      }
      .ds-logo {
        font-family: 'Anton', sans-serif;
        font-size: 3rem;
        letter-spacing: -1px;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.2rem;
        border-bottom: 4px solid transparent;
      }
      .ds-nav-links span:hover {
        border-bottom-color: #000;
      }

      /* 6. INPUTS */
      .type-input, .ds-input {
        background: #FFF !important;
        border: 4px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Anton', sans-serif;
        font-size: 2rem !important;
        color: #000 !important;
        padding: 20px !important;
        height: auto;
      }
      .ds-input:focus {
        background: #000 !important;
        color: #FFF !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: #000 !important;
        color: #FFF;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #000;
        border-right: 4px solid #FFF;
        padding: 40px 20px;
      }
      .ds-stats > div > div:last-child { border-right: none; }
      .ds-stats .text-3xl {
        font-family: 'Anton', sans-serif;
        font-size: 4rem;
        line-height: 1;
      }
      .ds-stats span:first-child {
        font-family: 'Oswald', sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 2px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #000 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 2px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-family: 'Anton', sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #000 !important;
        color: #FFF !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #FFF !important;
      }
      /* Status */
      .ds-table-container span {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        font-family: 'Anton', sans-serif;
        text-transform: uppercase;
        padding: 5px 10px;
      }

      /* 9. PRICING */
      .ds-card {
        padding: 40px !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #000 !important;
        color: #FFF !important;
      }
      .ds-card:nth-child(2) * {
         color: #FFF !important;
         border-color: #FFF !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Anton', sans-serif;
        font-size: 3rem;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000 !important;
        font-family: 'Anton', sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
        top: 0; right: 0;
        padding: 10px 20px;
        border-radius: 0;
      }
      
      .ds-card button {
         font-family: 'Anton', sans-serif;
         font-size: 1.5rem;
      }

      /* 10. BADGE */
      .type-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        font-family: 'Anton', sans-serif;
        text-transform: uppercase;
        padding: 5px 15px;
        font-size: 1rem;
        border-radius: 0;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        margin-top: 100px;
      }
      .ds-footer * { color: #FFF !important; }
      .ds-footer h4 {
         font-family: 'Anton', sans-serif;
         font-size: 2rem;
         text-transform: uppercase;
      }
    `
  }
};
