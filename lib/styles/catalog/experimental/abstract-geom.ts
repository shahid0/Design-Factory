
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'abstract')!;

export const abstractGeom: StyleCartridge = {
  id: 'abstract',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F0F0F0',
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#000000',
      '--text-secondary': '#555555',
      '--accent-color': '#FF3300',
      '--border-radius': '0px',
      '--font-display': '"Josefin Sans", "Futura", sans-serif',
    },
    elementClasses: {
      stage: 'geom-stage',
      navbar: 'geom-nav',
      container: 'geom-panel',
      buttonPrimary: 'geom-btn-primary',
      buttonSecondary: 'geom-btn-secondary',
      input: 'geom-input',
      badge: 'geom-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&display=swap');

      /* --- ABSTRACT GEOMETRY ENGINE --- */

      .geom-stage {
        background-color: #F0F0F0;
        color: #000;
        font-family: 'Josefin Sans', sans-serif;
      }

      /* Floating Shapes */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 20%; left: 10%;
        width: 100px; height: 100px;
        background: #000;
        transform: rotate(45deg);
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 10%; right: 10%;
        width: 150px; height: 150px;
        border: 20px solid #FF3300;
        border-radius: 50%;
        z-index: -1;
      }

      /* 2. CONTAINERS (Lines & Shapes) */
      .geom-panel, .ds-panel, .ds-card, .geom-nav {
        background: #FFFFFF;
        border: 2px solid #000;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
        border-radius: 0;
        padding: 30px;
        position: relative;
      }
      
      /* Connecting Line */
      .ds-panel::before {
        content: "";
        position: absolute;
        top: 50%; right: -20px;
        width: 20px; height: 2px;
        background: #000;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-5px, -5px);
        box-shadow: 15px 15px 0 #FF3300;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        font-size: 4rem;
        letter-spacing: -2px;
        line-height: 1;
      }
      .ds-hero-title span {
        color: #FF3300;
        background: transparent;
        -webkit-text-fill-color: initial;
        text-decoration: underline;
      }
      .ds-hero-text {
        font-weight: 300;
        font-size: 1.2rem;
        border-left: 5px solid #000;
        padding-left: 20px;
      }

      /* 4. BUTTONS (Geometric) */
      .geom-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0 !important;
        clip-path: polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%);
        padding: 15px 35px !important;
        font-weight: 700 !important;
        transition: all 0.2s !important;
      }
      .geom-btn-primary:hover, .ds-btn-primary:hover {
        background: #FF3300 !important;
        transform: translateX(5px);
      }

      .geom-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 2px solid #000 !important;
        border-radius: 50px !important; /* Circle contrast */
        font-weight: 700 !important;
      }
      .geom-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .geom-nav, .ds-navbar {
        background: #FFF;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border: 2px solid #000;
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -1px;
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        background: #FF3300;
        color: #FFF;
      }

      /* 6. INPUTS */
      .geom-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #000 !important;
        border-radius: 0 !important;
        padding-left: 20px !important;
        color: #000 !important;
      }
      .ds-input:focus {
        box-shadow: 5px 5px 0 #000 !important;
      }
      .ds-input-decorator {
        background: #FF3300 !important;
        width: 10px !important; height: 10px !important;
        border-radius: 0 !important;
        right: 15px !important; left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 2px solid #000;
        margin: 10px;
        border-radius: 50%; /* Circles */
        width: 150px; height: 150px;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        text-align: center;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #FF3300;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 2px solid #000 !important;
        background: #FFF !important;
        box-shadow: 10px 10px 0 #CCC !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255, 51, 0, 0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FF3300 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 4px 10px;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #000 !important;
        background: #FFF !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        top: 0; right: 0;
        padding: 10px;
        font-weight: 700;
        border-radius: 0;
      }
      
      /* 10. TOGGLES (Geometric) */
      .mannequin-toggle-track {
        background: #FFF;
        border: 2px solid #000;
        border-radius: 0;
      }
      .mannequin-toggle-track.active {
        background: #000;
      }
      .mannequin-toggle-thumb {
        background: #000;
        border-radius: 0;
        box-shadow: none;
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
        background: #FF3300;
      }

      /* 10. BADGE */
      .geom-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 5px 15px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        margin-top: 80px;
        color: #FFF !important;
      }
      .ds-footer * { color: #FFF !important; }
    `
  }
};
