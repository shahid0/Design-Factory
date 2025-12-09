
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'maximalism')!;

export const maximalism: StyleCartridge = {
  id: 'maximalism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FF4D00', // Intense Orange
      '--bg-layer-2': '#3D00B8', // Deep Purple
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#FFE600', // Yellow
      '--accent-color': '#00FF9D', // Mint Green
      '--border-radius': '0px',
      '--font-display': '"Archivo Black", "Arial", sans-serif',
    },
    elementClasses: {
      stage: 'max-stage',
      navbar: 'max-nav',
      container: 'max-panel',
      buttonPrimary: 'max-btn-primary',
      buttonSecondary: 'max-btn-secondary',
      input: 'max-input',
      badge: 'max-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

      /* --- MAXIMALISM ENGINE --- */

      .max-stage {
        background-color: #FF4D00;
        color: #FFF;
        font-family: 'Arial', sans-serif;
        overflow-x: hidden;
      }

      /* Pattern Overload */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: 
          repeating-linear-gradient(45deg, rgba(0,0,0,0.1) 0px, rgba(0,0,0,0.1) 20px, transparent 20px, transparent 40px),
          radial-gradient(#3D00B8 20%, transparent 20%);
        background-size: 100% 100%, 40px 40px;
        opacity: 0.3;
        z-index: -1;
      }
      
      /* Bold Shapes */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; right: -10%;
        width: 500px; height: 500px;
        background: #FFE600;
        clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        border: 10px solid #000;
        z-index: -2;
      }

      /* 2. CONTAINERS (Heavy) */
      .max-panel, .ds-panel, .ds-card, .max-nav {
        background: #3D00B8;
        border: 8px solid #000;
        box-shadow: 20px 20px 0 #00FF9D;
        padding: 30px;
        margin: 20px;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: #000;
        border-color: #FFF;
        box-shadow: 20px 20px 0 #FF4D00;
        transform: translate(-5px, -5px);
      }

      /* 3. TYPOGRAPHY (Loud) */
      .ds-hero-title {
        font-family: 'Archivo Black', sans-serif;
        font-size: 6rem;
        line-height: 0.85;
        text-transform: uppercase;
        color: #FFF;
        text-shadow: 5px 5px 0 #000, 10px 10px 0 #FF00FF;
        background: #000;
        display: inline;
        box-decoration-break: clone;
        padding: 10px;
      }
      .ds-hero-title span {
        color: #FFE600;
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 5px 5px 0 #000;
      }
      .ds-hero-text {
        font-weight: 900;
        background: #FFF;
        color: #000;
        font-size: 1.5rem;
        border: 5px solid #000;
        padding: 20px;
        box-shadow: 10px 10px 0 #000;
        margin-top: 30px;
      }

      /* 4. BUTTONS (Giant) */
      .max-btn-primary, .ds-btn-primary {
        background: #00FF9D !important;
        color: #000 !important;
        font-family: 'Archivo Black', sans-serif !important;
        font-size: 2rem !important;
        text-transform: uppercase;
        border: 5px solid #000 !important;
        border-radius: 0 !important;
        padding: 20px 50px !important;
        box-shadow: 10px 10px 0 #000 !important;
        transition: all 0.1s !important;
      }
      .max-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF00FF !important;
        color: #FFF !important;
        transform: translate(-5px, -5px);
        box-shadow: 15px 15px 0 #000 !important;
      }

      .max-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #000 !important;
        border: 5px solid #000 !important;
        font-family: 'Archivo Black', sans-serif !important;
        text-transform: uppercase;
        font-size: 1.2rem !important;
        border-radius: 0 !important;
      }
      .max-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFE600 !important;
      }

      /* 5. NAVIGATION */
      .max-nav, .ds-navbar {
        background: #000;
        border-bottom: 10px solid #FFF;
        margin: 0 !important;
        width: 100% !important;
        padding: 30px;
      }
      .ds-logo {
        color: #FFF;
        font-family: 'Archivo Black', sans-serif;
        font-size: 3rem;
        text-shadow: 3px 3px 0 #FF00FF;
      }
      .ds-nav-links span {
        background: #FF4D00;
        color: #FFF;
        font-weight: 900;
        padding: 10px 20px;
        border: 3px solid #000;
        font-size: 1.2rem;
        margin-right: 10px;
      }
      .ds-nav-links span:hover {
        background: #00FF9D;
        color: #000;
      }

      /* 6. INPUTS */
      .max-input, .ds-input {
        background: #FFF !important;
        border: 5px solid #000 !important;
        border-radius: 0 !important;
        padding: 20px !important;
        font-size: 1.5rem !important;
        font-weight: 900;
        color: #000 !important;
        box-shadow: 8px 8px 0 #3D00B8 !important;
      }
      .ds-input:focus {
        background: #FFE600 !important;
        outline: none;
      }
      .ds-input-decorator {
        background: #000 !important;
        width: 20px !important; height: 20px !important;
        border-radius: 0 !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: #FFF !important;
        border: 8px solid #000;
      }
      .ds-stats > div > div {
        background: #FF00FF;
        border: 3px solid #000;
        margin: 10px;
        box-shadow: 5px 5px 0 #000;
      }
      .ds-stats .text-3xl {
        font-family: 'Archivo Black', sans-serif;
        color: #FFF;
        text-shadow: 2px 2px 0 #000;
      }
      .ds-stats span:first-child {
        background: #000;
        color: #FFF;
        padding: 5px 10px;
        font-weight: 900;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: #3D00B8 !important;
        border: 8px solid #000 !important;
        box-shadow: 15px 15px 0 #FFF !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-family: 'Archivo Black', sans-serif;
        font-size: 1.2rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFE600 !important;
        color: #000 !important;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: #000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FF4D00 !important;
        border: 2px solid #000;
        color: #FFF !important;
        font-weight: 900;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #000 !important;
        color: #FFF !important;
        border: 8px solid #FFE600 !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) * { color: #FFF !important; }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFE600 !important;
        font-family: 'Archivo Black', sans-serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFE600;
        color: #000 !important;
        font-family: 'Archivo Black', sans-serif;
        font-size: 1.5rem;
        padding: 10px 30px;
        top: -30px; right: -20px;
        border: 5px solid #000;
        transform: rotate(5deg);
      }
      
      .ds-card button {
         border-radius: 0 !important;
         font-family: 'Archivo Black', sans-serif;
         text-transform: uppercase;
         border: 3px solid #000 !important;
      }

      /* 10. BADGE */
      .max-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border: 3px solid #FFF;
        padding: 5px 15px;
        font-weight: 900;
        box-shadow: 5px 5px 0 #000;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        border-top: 20px solid #00FF9D !important;
        margin-top: 100px;
        padding: 80px;
      }
      .ds-footer h4 {
         color: #00FF9D !important;
         font-family: 'Archivo Black', sans-serif;
         font-size: 2rem;
      }
    `
  }
};
