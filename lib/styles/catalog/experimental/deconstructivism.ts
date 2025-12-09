
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'deconstruct')!;

export const deconstruct: StyleCartridge = {
  id: 'deconstruct',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#EAEAEA', // Light Grey
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000',
      '--text-secondary': '#555555',
      '--accent-color': '#000000', // Black accents
      '--border-radius': '0px',
      '--font-display': '"Arial Narrow", "Helvetica", sans-serif',
    },
    elementClasses: {
      stage: 'decon-stage',
      navbar: 'decon-nav',
      container: 'decon-panel',
      buttonPrimary: 'decon-btn-primary',
      buttonSecondary: 'decon-btn-secondary',
      input: 'decon-input',
      badge: 'decon-badge'
    },
    injectCss: `
      /* --- DECONSTRUCTIVISM ENGINE --- */

      .decon-stage {
        background-color: #EAEAEA;
        color: #000;
        font-family: 'Arial Narrow', sans-serif;
        overflow-x: hidden;
      }

      /* Broken Grid Lines */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 0; left: 20%; width: 1px; height: 100%;
        background: #000;
        transform: rotate(5deg);
        opacity: 0.1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 30%; left: 0; width: 100%; height: 1px;
        background: #000;
        transform: rotate(-2deg);
        opacity: 0.1;
      }

      /* 2. CONTAINERS (Shattered) */
      .decon-panel, .ds-panel, .ds-card, .decon-nav {
        background: #FFF;
        border: 1px solid #000;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
        padding: 30px;
        margin: 20px;
        position: relative;
        /* Slight skew */
        transform: skewX(-5deg);
      }
      
      /* Restore content skew */
      .decon-panel > *, .ds-panel > *, .ds-card > * {
        transform: skewX(5deg);
      }

      .ds-panel:hover, .ds-card:hover {
        background: #000;
        color: #FFF;
        transform: skewX(-5deg) translate(-5px, -5px);
        box-shadow: 15px 15px 0 #999;
      }
      .ds-panel:hover *, .ds-card:hover * {
         color: #FFF !important;
         border-color: #FFF !important;
      }

      /* 3. TYPOGRAPHY (Fragmented) */
      .ds-hero-title {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 5rem;
        line-height: 0.8;
        letter-spacing: -2px;
        transform: rotate(-2deg);
      }
      .ds-hero-title span {
        display: block;
        transform: translateX(40px);
        color: transparent;
        -webkit-text-stroke: 1px black;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        width: 60%;
        margin-left: 30%;
        border-left: 5px solid #000;
        padding-left: 20px;
        transform: skewX(10deg);
      }

      /* 4. BUTTONS (Sharp) */
      .decon-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0 !important;
        padding: 15px 40px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
        transition: all 0.2s !important;
      }
      .decon-btn-primary:hover, .ds-btn-primary:hover {
        background: #555 !important;
        transform: translateX(5px);
      }

      .decon-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
        transform: skewX(-10deg);
      }
      .decon-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .decon-nav, .ds-navbar {
        background: #FFF;
        border: 2px solid #000;
        width: 100% !important;
        margin: 0 !important;
        transform: skewY(-1deg);
        padding: 20px 40px;
        box-shadow: 0 5px 0 #000;
      }
      .ds-logo {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: -2px;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        border-right: 2px solid #000;
        padding: 0 15px;
      }
      .ds-nav-links span:last-child { border: none; }
      .ds-nav-links span:hover {
        background: #000;
        color: #FFF;
      }

      /* 6. INPUTS */
      .decon-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        padding: 20px !important;
        font-weight: 700;
        transform: skewX(-5deg);
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
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 1px solid #000;
        margin: 10px;
        /* Staggered */
        transform: translateY(calc(var(--i) * 10px)); 
      }
      .ds-stats > div > div:nth-child(1) { margin-top: 0; }
      .ds-stats > div > div:nth-child(2) { margin-top: 20px; }
      .ds-stats > div > div:nth-child(3) { margin-top: 0px; }
      .ds-stats > div > div:nth-child(4) { margin-top: 20px; }

      .ds-stats .text-3xl {
        font-weight: 900;
        font-size: 3rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 2px solid #000 !important;
        transform: rotate(1deg);
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-weight: 700;
        text-transform: uppercase;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #CCC !important;
      }
      /* Status */
      .ds-table-container span {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        transform: skewX(-10deg);
        padding: 2px 10px;
      }

      /* 9. PRICING */
      .ds-card {
        border: 2px solid #000 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #000 !important;
        color: #FFF !important;
        transform: scale(1.1) skewX(-2deg);
        z-index: 10;
      }
      .ds-card:nth-child(2) * { color: #FFF !important; }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFF !important;
        text-decoration: underline;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000 !important;
        font-weight: 900;
        transform: rotate(90deg);
        top: 20px; right: -20px;
        padding: 5px 20px;
      }
      
      .ds-card button {
         border-radius: 0 !important;
         text-transform: uppercase;
         font-weight: 900;
      }

      /* 10. BADGE */
      .decon-badge, .ds-badge {
        background: transparent !important;
        color: #000 !important;
        border: 1px solid #000;
        border-radius: 0;
        padding: 5px 10px;
        transform: rotate(-5deg);
        font-weight: 900;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #333 !important;
        color: #FFF !important;
        margin-top: 100px;
        clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
        padding-top: 80px;
      }
      .ds-footer * { color: #CCC !important; }
    `
  }
};
