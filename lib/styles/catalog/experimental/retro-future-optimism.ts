
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'retro-future-optimism')!;

export const retroFutureOptimism: StyleCartridge = {
  id: 'retro-future-optimism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#E0F7FA', // Space Age Blue
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#006064', // Deep Teal
      '--text-secondary': '#0097A7', // Bright Teal
      '--accent-color': '#FF5722', // Rocket Orange
      '--border-radius': '50px', // Elliptical
      '--font-display': '"Comfortaa", "Varela Round", sans-serif',
    },
    elementClasses: {
      stage: 'rfo-stage',
      navbar: 'rfo-nav',
      container: 'rfo-panel',
      buttonPrimary: 'rfo-btn-primary',
      buttonSecondary: 'rfo-btn-secondary',
      input: 'rfo-input',
      badge: 'rfo-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Varela+Round&display=swap');

      /* --- RETRO FUTURE OPTIMISM ENGINE --- */

      .rfo-stage {
        background-color: #E0F7FA;
        color: #006064;
        font-family: 'Varela Round', sans-serif;
        overflow-x: hidden;
      }

      /* Atomic Starbursts */
      .ds-deco-layer::before {
        content: "✦";
        position: fixed;
        top: 15%; right: 10%;
        font-size: 80px;
        color: #B2EBF2;
        animation: spin-slow 20s linear infinite;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: -20%; left: -10%;
        width: 600px; height: 600px;
        border: 2px solid #B2EBF2;
        border-radius: 50%;
        transform: rotate(45deg);
        z-index: -1;
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* 2. CONTAINERS (Capsules) */
      .rfo-panel, .ds-panel, .ds-card, .rfo-nav {
        background: #FFFFFF;
        border: 4px solid #FFF;
        box-shadow: 0 10px 20px rgba(0, 96, 100, 0.1);
        border-radius: 30px;
        position: relative;
        padding: 30px;
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 96, 100, 0.15);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Comfortaa', cursive;
        font-weight: 700;
        color: #006064;
        letter-spacing: -1px;
        font-size: 4rem;
      }
      .ds-hero-title span {
        color: #FF5722;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 700;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #0097A7;
        background: #E0F7FA;
        padding: 15px 30px;
        border-radius: 50px;
        display: inline-block;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Pills) */
      .rfo-btn-primary, .ds-btn-primary {
        background: #FF5722 !important;
        color: #FFF !important;
        border-radius: 50px !important;
        font-family: 'Comfortaa', cursive !important;
        font-weight: 700 !important;
        border: 4px solid #FFF !important;
        box-shadow: 0 5px 15px rgba(255, 87, 34, 0.4) !important;
        padding: 12px 40px !important;
        transition: transform 0.2s !important;
      }
      .rfo-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1);
        background: #FF7043 !important;
      }

      .rfo-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: #006064 !important;
        border: 2px solid #006064 !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        font-family: 'Comfortaa', cursive !important;
      }
      .rfo-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E0F7FA !important;
      }

      /* 5. NAVIGATION */
      .rfo-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 100px;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        padding: 10px 40px;
        box-shadow: 0 5px 20px rgba(0, 96, 100, 0.1);
      }
      .ds-logo {
        font-family: 'Comfortaa', cursive;
        font-weight: 700;
        color: #FF5722;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: #0097A7;
        font-family: 'Comfortaa', cursive;
      }
      .ds-nav-links span:hover {
        color: #006064;
      }

      /* 6. INPUTS */
      .rfo-input, .ds-input {
        background: #E0F7FA !important;
        border: none !important;
        border-radius: 50px !important;
        padding-left: 30px !important;
        color: #006064 !important;
        font-family: 'Varela Round', sans-serif;
      }
      .ds-input:focus {
        background: #B2EBF2 !important;
        box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);
      }
      .ds-input-decorator {
        background: #006064 !important;
        width: 12px !important; height: 12px !important;
        border-radius: 50%;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border-radius: 50px;
        padding: 30px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      }
      .ds-stats .text-3xl {
        font-family: 'Comfortaa', cursive;
        color: #FF5722;
        font-weight: 700;
      }
      .ds-stats span:first-child {
        color: #0097A7;
        font-weight: 700;
        text-transform: lowercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 30px !important;
        border: none !important;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div:first-child {
        background: #B2EBF2;
        color: #006064;
        font-family: 'Comfortaa', cursive;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #E0F7FA !important;
      }
      /* Status */
      .ds-table-container span {
        background: #FFCCBC !important; /* Light Orange */
        color: #D84315 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 700;
      }

      /* 9. PRICING */
      .ds-card {
        border-radius: 40px !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #FF5722 !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FF5722;
        font-family: 'Comfortaa', cursive;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF5722;
        color: #FFF;
        font-weight: 700;
        border-radius: 0 0 20px 20px;
        top: 0; right: 40px;
        padding: 10px 20px;
      }
      
      /* 10. TOGGLES (Atomic) */
      .mannequin-toggle-track {
        background: #B2EBF2;
        border-radius: 99px;
      }
      .mannequin-toggle-track.active {
        background: #FF5722;
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 50%;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }

      /* 10. BADGE */
      .rfo-badge, .ds-badge {
        background: #0097A7 !important;
        color: #FFF !important;
        border-radius: 50px;
        padding: 5px 15px;
        font-family: 'Comfortaa', cursive;
        font-weight: 700;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFF !important;
        margin-top: 80px;
        border-radius: 50px 50px 0 0;
      }
    `
  }
};
