
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'frutiger')!;

export const frutigerAero: StyleCartridge = {
  id: 'frutiger',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#D6F2FF', // Sky Blue
      '--bg-layer-2': '#FFFFFF', // Gloss White
      '--text-primary': '#333333', // Charcoal
      '--text-secondary': '#666666',
      '--accent-color': '#76D300', // Grass Green
      '--border-radius': '12px',
      '--font-display': '"Frutiger", "Segoe UI", sans-serif',
    },
    elementClasses: {
      stage: 'aero-stage',
      navbar: 'aero-nav',
      container: 'aero-panel',
      buttonPrimary: 'aero-btn-primary',
      buttonSecondary: 'aero-btn-secondary',
      input: 'aero-input',
      badge: 'aero-badge'
    },
    injectCss: `
      /* --- FRUTIGER AERO ENGINE --- */

      .aero-stage {
        background: linear-gradient(to bottom, #D6F2FF 0%, #FFFFFF 100%);
        color: #333;
        font-family: "Segoe UI", sans-serif;
      }

      /* Glossy Waves Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        bottom: 0; left: 0; right: 0;
        height: 40%;
        background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="%2376D300" fill-opacity="0.2" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>');
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
      }
      
      /* Bubbles */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; right: 20%;
        width: 100px; height: 100px;
        background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.1));
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
        opacity: 0.6;
        z-index: -1;
      }

      /* 2. CONTAINERS (Glossy Plastic) */
      .aero-panel, .ds-panel, .ds-card, .aero-nav {
        background: linear-gradient(to bottom, #FFFFFF 0%, #F0F0F0 100%);
        border: 1px solid #CCCCCC;
        border-radius: 12px;
        box-shadow: 
          0 4px 6px rgba(0,0,0,0.1),
          inset 0 1px 0 #FFFFFF;
        position: relative;
        overflow: hidden;
        padding: 20px;
      }
      
      /* Gloss Shine */
      .aero-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 50%;
        background: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.1) 100%);
        border-radius: 12px 12px 0 0;
        pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0,0,0,0.15);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        color: #0078D7; /* Windows Blue */
        text-shadow: 0 1px 0 rgba(255,255,255,0.8);
      }
      .ds-hero-title span {
        color: #76D300; /* Green */
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.1rem;
        color: #555;
      }

      /* 4. BUTTONS (Gel/Glass) */
      .aero-btn-primary, .ds-btn-primary {
        background: linear-gradient(to bottom, #76D300 0%, #58A300 100%) !important;
        color: #FFF !important;
        border: 1px solid #4C8E00 !important;
        border-radius: 20px !important;
        font-weight: 700 !important;
        padding: 10px 30px !important;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.3);
        box-shadow: 
          inset 0 1px 0 rgba(255,255,255,0.5),
          0 2px 4px rgba(0,0,0,0.2) !important;
        transition: all 0.2s !important;
      }
      .aero-btn-primary:hover, .ds-btn-primary:hover {
        filter: brightness(1.1);
        transform: scale(1.02);
      }

      .aero-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: linear-gradient(to bottom, #FFFFFF 0%, #E0E0E0 100%) !important;
        color: #333 !important;
        border: 1px solid #CCC !important;
        border-radius: 20px !important;
        font-weight: 600 !important;
        box-shadow: 
          inset 0 1px 0 rgba(255,255,255,1),
          0 1px 3px rgba(0,0,0,0.1) !important;
      }
      .aero-btn-secondary:hover, .ds-btn-secondary:hover {
        background: linear-gradient(to bottom, #F0F0F0 0%, #D0D0D0 100%) !important;
      }

      /* 5. NAVIGATION */
      .aero-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border-bottom: 1px solid #AACCEE;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-weight: 700;
        color: #0078D7;
        font-style: italic;
      }
      .ds-nav-links span {
        color: #555;
        font-weight: 600;
      }
      .ds-nav-links span:hover {
        color: #0078D7;
      }

      /* 6. INPUTS */
      .aero-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #AACCEE !important;
        border-radius: 6px !important;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
        padding-left: 15px !important;
        color: #333 !important;
      }
      .ds-input:focus {
        border-color: #76D300 !important;
        box-shadow: 0 0 5px rgba(118, 211, 0, 0.5) !important;
      }
      .ds-input-decorator {
        background: linear-gradient(to bottom, #0078D7 0%, #005A9E 100%) !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 15px !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.6);
        border: 1px solid #AACCEE;
        border-radius: 12px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      .ds-stats .text-3xl {
        color: #0078D7;
        text-shadow: 0 1px 0 #FFF;
      }
      .ds-stats span:first-child {
        color: #76D300;
        font-weight: 700;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 12px !important;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E0E0E0 !important;
      }
      .ds-table-container > div:first-child {
        background: linear-gradient(to bottom, #F9F9F9 0%, #E9E9E9 100%);
        font-weight: 700;
        color: #333;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #E6F7FF !important;
      }
      /* Status */
      .ds-table-container span {
        background: linear-gradient(to bottom, #76D300 0%, #58A300 100%) !important;
        color: #FFF !important;
        border-radius: 10px;
        padding: 2px 10px;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
        font-weight: 700;
        border: none;
      }

      /* 9. PRICING */
      .ds-card {
        background: linear-gradient(to bottom, #FFFFFF 0%, #F5F5F5 100%) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #76D300 !important;
        box-shadow: 0 0 15px rgba(118, 211, 0, 0.3) !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: linear-gradient(to bottom, #76D300 0%, #58A300 100%);
        color: #FFF;
        font-weight: 700;
        border-radius: 0 0 8px 8px;
        top: 0; right: 20px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .aero-badge, .ds-badge {
        background: linear-gradient(to bottom, #0078D7 0%, #005A9E 100%) !important;
        color: #FFF !important;
        border-radius: 10px;
        padding: 4px 10px;
        font-weight: 700;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: linear-gradient(to bottom, #F0F0F0 0%, #E0E0E0 100%) !important;
        border-top: 1px solid #CCC !important;
        margin-top: 60px;
      }
    `
  }
};
