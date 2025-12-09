
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'cheerful-kids')!;

export const cheerfulKids: StyleCartridge = {
  id: 'cheerful-kids',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFF9C4', // Sunny Yellow
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#3E2723', // Dark Brown (softer than black)
      '--text-secondary': '#5D4037',
      '--accent-color': '#FF5722', // Bright Orange
      '--border-radius': '24px',
      '--font-display': '"Fredoka", "Varela Round", sans-serif',
    },
    elementClasses: {
      stage: 'kids-stage',
      navbar: 'kids-nav',
      container: 'kids-panel',
      buttonPrimary: 'kids-btn-primary',
      buttonSecondary: 'kids-btn-secondary',
      input: 'kids-input',
      badge: 'kids-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600;700&family=Varela+Round&display=swap');

      /* --- CHEERFUL KIDS ENGINE --- */

      .kids-stage {
        background-color: #FFF9C4;
        background-image: 
          radial-gradient(#FFEB3B 15%, transparent 16%),
          radial-gradient(#4FC3F7 15%, transparent 16%);
        background-size: 60px 60px;
        background-position: 0 0, 30px 30px;
        color: #3E2723;
        font-family: 'Varela Round', sans-serif;
      }

      /* Cloud decorations */
      .ds-deco-layer::before {
        content: "☁";
        position: fixed;
        top: 10%; right: 10%;
        font-size: 100px;
        color: rgba(255,255,255,0.8);
        text-shadow: 0 0 20px rgba(0,0,0,0.05);
        animation: float-cloud 20s infinite alternate linear;
      }
      .ds-deco-layer::after {
        content: "☁";
        position: fixed;
        bottom: 20%; left: 5%;
        font-size: 80px;
        color: rgba(255,255,255,0.8);
        text-shadow: 0 0 20px rgba(0,0,0,0.05);
        animation: float-cloud 15s infinite alternate-reverse linear;
      }
      @keyframes float-cloud {
        from { transform: translateX(0); }
        to { transform: translateX(50px); }
      }

      /* 2. CHUNKY PANELS */
      .kids-panel, .ds-panel, .ds-card, .kids-nav {
        background: #FFFFFF;
        border: 4px solid #3E2723;
        border-radius: 20px;
        box-shadow: 6px 6px 0px #3E2723;
        transition: transform 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.02) rotate(1deg);
        box-shadow: 8px 8px 0px #FF5722; /* Orange shadow on hover */
        border-color: #FF5722;
        z-index: 10;
      }

      /* 3. TYPOGRAPHY (Playful) */
      .ds-hero-title {
        font-family: 'Fredoka', sans-serif;
        font-weight: 700;
        color: #03A9F4; /* Light Blue */
        text-shadow: 
          3px 3px 0 #FFFFFF,
          5px 5px 0 #3E2723;
        letter-spacing: 1px;
        font-size: 4rem;
      }
      .ds-hero-title span {
        color: #FF5722; /* Orange */
        background: transparent;
        -webkit-text-fill-color: initial;
        display: inline-block;
        transform: rotate(-3deg);
      }
      .ds-hero-text {
        font-size: 1.3rem;
        background: #FFF;
        padding: 15px;
        border-radius: 15px;
        border: 3px dashed #8BC34A; /* Light Green */
        color: #5D4037;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Big & Clicky) */
      .kids-btn-primary, .ds-btn-primary {
        background: #FFC107 !important; /* Amber */
        color: #3E2723 !important;
        border: 4px solid #3E2723 !important;
        border-radius: 50px !important;
        font-family: 'Fredoka', sans-serif !important;
        font-weight: 700 !important;
        font-size: 1.4rem !important;
        box-shadow: 0 6px 0 #3E2723 !important;
        transition: all 0.1s !important;
        padding: 10px 30px !important;
      }
      .kids-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFEB3B !important;
        transform: translateY(-2px);
        box-shadow: 0 8px 0 #3E2723 !important;
      }
      .kids-btn-primary:active, .ds-btn-primary:active {
        transform: translateY(6px);
        box-shadow: 0 0 0 #3E2723 !important;
      }

      .kids-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: #03A9F4 !important;
        border: 3px solid #03A9F4 !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        font-family: 'Fredoka', sans-serif !important;
        box-shadow: 0 4px 0 #03A9F4 !important;
      }
      .kids-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E1F5FE !important;
      }
      .kids-btn-secondary:active, .ds-btn-secondary:active {
        transform: translateY(4px);
        box-shadow: none !important;
      }

      /* 5. NAVIGATION */
      .kids-nav, .ds-navbar {
        background: #8BC34A; /* Green */
        border: 4px solid #3E2723;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 6px 0 rgba(0,0,0,0.1);
        padding: 15px;
      }
      .ds-logo {
        font-family: 'Fredoka', sans-serif;
        color: #FFF;
        text-shadow: 3px 3px 0 #3E2723;
        font-size: 2rem;
      }
      .ds-nav-links span {
        background: #FFF;
        color: #3E2723;
        border-radius: 15px;
        padding: 8px 15px;
        font-weight: 700;
        border: 2px solid transparent;
        transition: transform 0.2s;
      }
      .ds-nav-links span:hover {
        transform: scale(1.1) rotate(-2deg);
        border-color: #FF5722;
        color: #FF5722;
      }

      /* 6. INPUTS */
      .kids-input, .ds-input {
        background: #FFF !important;
        border: 3px solid #BDBDBD !important;
        border-radius: 15px !important;
        font-family: 'Varela Round', sans-serif;
        font-size: 1.2rem !important;
        color: #3E2723 !important;
        padding: 15px !important;
        padding-left: 45px !important;
      }
      .ds-input:focus {
        border-color: #03A9F4 !important;
        box-shadow: 0 4px 0 #03A9F4 !important;
        transform: translateY(-2px);
      }
      .ds-input-decorator {
        background: #FF5722 !important;
        width: 18px !important; height: 18px !important;
        border-radius: 50%;
        left: 15px !important;
        border: 2px solid #fff;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        border: 3px solid #FFCA28;
        border-radius: 20px;
        padding: 20px;
        box-shadow: 4px 4px 0 #FFCA28;
        margin: 10px;
      }
      .ds-stats .text-3xl {
        font-family: 'Fredoka', sans-serif;
        color: #673AB7; /* Purple */
      }
      .ds-stats span:first-child {
        color: #FF5722;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #3E2723 !important;
        border-radius: 20px !important;
        overflow: hidden;
      }
      .ds-table-container > div:first-child {
        background: #03A9F4;
        color: #FFF;
        font-family: 'Fredoka', sans-serif;
        font-size: 1.1rem;
        border-bottom: 4px solid #3E2723 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #E1F5FE !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #8BC34A !important;
        color: #FFF !important;
        border: 2px solid #3E2723;
        border-radius: 20px;
        padding: 4px 10px;
        font-weight: 700;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
        border-color: #FF5722 !important;
        box-shadow: 8px 8px 0 #FF5722 !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FF5722;
        font-family: 'Fredoka', sans-serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF5722;
        color: #FFF;
        font-family: 'Fredoka', sans-serif;
        font-weight: 700;
        border-radius: 0 0 15px 15px;
        border: 2px solid #3E2723;
        border-top: none;
        padding: 5px 20px;
      }

      /* 10. BADGE */
      .kids-badge, .ds-badge {
        background: #E91E63 !important; /* Pink */
        color: #FFF !important;
        border: 2px solid #3E2723;
        border-radius: 20px !important;
        font-family: 'Fredoka', sans-serif;
        font-weight: 700;
        padding: 5px 15px;
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FF9800 !important; /* Orange Footer */
        border-top: 4px solid #3E2723 !important;
        margin-top: 60px;
        color: #3E2723 !important;
      }
      .ds-footer .ds-logo {
         color: #FFF;
      }
      .ds-footer h4 {
         font-family: 'Fredoka', sans-serif;
         color: #FFF !important;
         text-shadow: 2px 2px 0 #3E2723;
      }
    `
  }
};
