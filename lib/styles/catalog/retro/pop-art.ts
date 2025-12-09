
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'popart')!;

export const popArt: StyleCartridge = {
  id: 'popart',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#FFF200', // Yellow
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#ED1C24', // Red
      '--border-radius': '0px',
      '--font-display': '"Bangers", "Comic Neue", cursive',
    },
    elementClasses: {
      stage: 'pop-stage',
      navbar: 'pop-nav',
      container: 'pop-panel',
      buttonPrimary: 'pop-btn-primary',
      buttonSecondary: 'pop-btn-secondary',
      input: 'pop-input',
      badge: 'pop-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:wght@400;700&display=swap');

      /* --- POP ART ENGINE --- */

      /* 1. HALFTONE UNIVERSE */
      .pop-stage {
        background-color: #FFFFFF;
        color: #000;
        font-family: 'Comic Neue', cursive;
        overflow-x: hidden;
      }

      /* Halftone Pattern */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: radial-gradient(#00AEEF 20%, transparent 20%), radial-gradient(#00AEEF 20%, transparent 20%);
        background-color: #ffffff;
        background-position: 0 0, 10px 10px;
        background-size: 20px 20px;
        opacity: 0.1;
        z-index: -1;
      }
      
      /* Comic panel lines */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        border: 20px solid #000;
        pointer-events: none;
        z-index: 1000;
      }

      /* 2. COMIC PANELS (Containers) */
      .pop-panel, .ds-panel, .ds-card, .pop-nav {
        background: #FFFFFF;
        border: 4px solid #000000;
        box-shadow: 8px 8px 0px #000000;
        border-radius: 0;
        position: relative;
        transition: transform 0.1s, box-shadow 0.1s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-4px, -4px);
        box-shadow: 12px 12px 0px #000;
        z-index: 10;
        background: #FFF200; /* Yellow highlight */
      }

      /* 3. TYPOGRAPHY (BAM!) */
      .ds-hero-title {
        font-family: 'Bangers', cursive;
        font-weight: 400;
        font-size: 6rem;
        letter-spacing: 2px;
        color: #ED1C24; /* Red */
        text-shadow: 
          4px 4px 0px #000,
          -2px -2px 0 #FFF;
        transform: rotate(-2deg);
        line-height: 1;
        -webkit-text-stroke: 2px black;
      }
      .ds-hero-title span {
        color: #00AEEF; /* Cyan */
        background: transparent;
        -webkit-text-fill-color: initial;
        -webkit-text-stroke: 2px black;
        text-shadow: 4px 4px 0px #000;
      }
      .ds-hero-text {
        background: #fff;
        border: 3px solid #000;
        padding: 20px;
        font-size: 1.25rem;
        font-weight: 700;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.2);
        max-width: 600px;
        margin-top: 20px;
        /* Speech Bubble Tail */
        position: relative;
      }
      .ds-hero-text::after {
         content: '';
         position: absolute;
         top: -20px;
         left: 40px;
         border-width: 0 20px 20px;
         border-style: solid;
         border-color: #000 transparent;
         display: block;
         width: 0;
      }
      .ds-hero-text::before {
         content: '';
         position: absolute;
         top: -14px;
         left: 43px;
         border-width: 0 17px 17px;
         border-style: solid;
         border-color: #fff transparent;
         display: block;
         width: 0;
         z-index: 1;
      }

      /* 4. BUTTONS (Action!) */
      .pop-btn-primary, .ds-btn-primary {
        background: #ED1C24 !important; /* Red */
        color: #FFF !important;
        font-family: 'Bangers', cursive !important;
        font-size: 1.8rem !important;
        letter-spacing: 1px;
        border: 4px solid #000 !important;
        border-radius: 0 !important;
        box-shadow: 6px 6px 0 #000 !important;
        padding: 8px 30px !important;
        transition: all 0.1s !important;
        text-transform: uppercase;
        text-shadow: 2px 2px 0 #000;
      }
      .pop-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF200 !important; /* Yellow */
        color: #000 !important;
        text-shadow: none;
        transform: translate(-2px, -2px);
        box-shadow: 10px 10px 0 #000 !important;
      }
      .pop-btn-primary:active, .ds-btn-primary:active {
        transform: translate(4px, 4px);
        box-shadow: 0px 0px 0 #000 !important;
      }

      .pop-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #000 !important;
        font-family: 'Bangers', cursive !important;
        font-size: 1.5rem !important;
        border: 4px solid #000 !important;
        border-radius: 50px !important; /* Oval speech bubble style */
        box-shadow: 4px 4px 0 #000 !important;
      }
      .pop-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #00AEEF !important;
        color: #FFF !important;
        text-shadow: 2px 2px 0 #000;
      }

      /* 5. NAVIGATION */
      .pop-nav, .ds-navbar {
        background: #FFF;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border: 4px solid #000;
        box-shadow: 8px 8px 0 #000;
        border-radius: 0 !important;
        padding: 10px 30px;
      }
      .ds-logo {
        font-family: 'Bangers', cursive;
        font-size: 2.5rem;
        transform: rotate(-2deg);
        color: #000;
        -webkit-text-stroke: 1px black;
        text-shadow: 3px 3px 0 #FFF200;
      }
      .ds-nav-links span {
        font-weight: 700;
        font-size: 1.2rem;
        border-right: 3px solid #000;
        padding-right: 20px;
        color: #000;
      }
      .ds-nav-links span:last-child {
        border-right: none;
      }
      .ds-nav-links span:hover {
        color: #ED1C24;
        text-decoration: underline;
        text-decoration-thickness: 3px;
      }

      /* 6. INPUTS */
      .pop-input, .ds-input {
        background: #FFF !important;
        border: 4px solid #000 !important;
        border-radius: 0 !important;
        font-family: 'Comic Neue', cursive !important;
        font-weight: 700;
        font-size: 1.2rem !important;
        color: #000 !important;
        padding-left: 20px !important;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.1) !important;
      }
      .ds-input:focus {
        background: #E0F7FA !important;
        box-shadow: 8px 8px 0 #000 !important;
        transform: translate(-2px, -2px);
      }
      .ds-input-decorator {
        background: #000 !important;
        width: 15px !important;
        height: 15px !important;
        border-radius: 50%;
        left: auto !important;
        right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 5px solid #000;
        border-bottom: 5px solid #000;
        background-color: #FFF200 !important; /* Yellow Strip */
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 3px solid #000;
        padding: 20px;
        color: #000;
      }
      .ds-stats .text-3xl {
        font-family: 'Bangers', cursive;
        font-size: 3rem;
        text-shadow: 2px 2px 0 #FFF;
      }
      .ds-stats span:first-child {
        background: #000;
        color: #FFF;
        padding: 2px 8px;
        font-weight: 700;
        transform: rotate(-2deg);
        display: inline-block;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #000 !important;
        background: #FFF !important;
        box-shadow: 10px 10px 0 #000 !important;
        border-radius: 0 !important;
      }
      .ds-table-container > div {
        border-bottom: 3px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-family: 'Bangers', cursive;
        font-size: 1.5rem;
        letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #EC008C !important; /* Magenta */
        color: #FFF !important;
        font-weight: bold;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #FFF !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #FFF200 !important;
        border: 3px solid #000;
        color: #000 !important;
        font-weight: 900;
        border-radius: 0;
        box-shadow: 3px 3px 0 #000;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        padding: 30px !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        background: #00AEEF !important; /* Cyan Background */
        transform: rotate(2deg) scale(1.02);
        z-index: 5;
        border: 5px solid #000 !important;
      }
      .ds-card:nth-child(2) * {
         color: #000 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Bangers', cursive;
        font-size: 2.5rem;
        color: #FFF !important;
        -webkit-text-stroke: 2px black;
        text-shadow: 4px 4px 0 #000;
      }
      /* Burst Shape for "Popular" */
      .ds-card:nth-child(2) .absolute {
        background: #ED1C24;
        color: #FFF !important;
        font-family: 'Bangers', cursive;
        font-size: 1.5rem;
        padding: 15px;
        clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
        top: -30px;
        right: -10px;
        border: none;
        box-shadow: none; /* clip-path hides box-shadow */
        filter: drop-shadow(4px 4px 0 #000);
      }
      
      .ds-card button {
         border-radius: 0 !important;
         font-family: 'Bangers', cursive;
         font-size: 1.5rem;
      }

      /* 10. BADGE (Burst) */
      .pop-badge, .ds-badge {
        background: #ED1C24 !important;
        color: #FFF !important;
        font-family: 'Bangers', cursive;
        font-size: 1.2rem;
        padding: 5px 15px;
        /* Starburst approximation */
        clip-path: polygon(
          50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 
          50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%
        );
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        /* Need a wrapper or filter for shadow on clip-path, but simple bg works */
        overflow: visible;
        filter: drop-shadow(3px 3px 0 #000);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        border-top: 10px solid #00AEEF !important;
        margin-top: 80px;
        background-image: radial-gradient(#333 15%, transparent 15%);
        background-size: 10px 10px;
      }
      .ds-footer p, .ds-footer span, .ds-footer h4 {
         color: #FFF !important;
         font-family: 'Comic Neue', cursive;
         font-weight: 700;
      }
      .ds-footer h4 {
         background: #ED1C24;
         color: #FFF !important;
         display: inline-block;
         padding: 2px 10px;
         border: 2px solid #FFF;
         transform: rotate(-2deg);
      }
    `
  }
};
