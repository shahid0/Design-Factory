
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'fluid-simulation')!;

export const fluidSimulation: StyleCartridge = {
  id: 'fluid-simulation',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': 'rgba(255,255,255,0.5)',
      '--text-primary': '#333333',
      '--text-secondary': '#666666',
      '--accent-color': '#00C2FF', // Fluid Blue
      '--border-radius': '30px',
      '--font-display': '"Quicksand", sans-serif',
    },
    elementClasses: {
      stage: 'fluid-stage',
      navbar: 'fluid-nav',
      container: 'fluid-panel',
      buttonPrimary: 'fluid-btn-primary',
      buttonSecondary: 'fluid-btn-secondary',
      input: 'fluid-input',
      badge: 'fluid-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');

      .fluid-stage {
        background: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
        background-size: 200% 200%;
        animation: fluid-bg 10s ease infinite;
        color: #333;
        font-family: 'Quicksand', sans-serif;
        overflow-x: hidden;
      }

      @keyframes fluid-bg {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* Morphing Blobs */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 20%; left: 10%;
        width: 300px; height: 300px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        animation: morph 8s infinite alternate;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 10%; right: 10%;
        width: 400px; height: 400px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        animation: morph 12s infinite alternate-reverse;
        z-index: -1;
      }

      @keyframes morph {
        0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; transform: translate(0,0); }
        100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(20px, -20px); }
      }

      /* 2. CONTAINERS (Liquid Glass) */
      .fluid-panel, .ds-panel, .ds-card, .fluid-nav {
        background: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.5);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.1);
        border-radius: 20px;
        padding: 30px;
        margin: 20px;
        animation: float-panel 6s ease-in-out infinite;
      }
      
      @keyframes float-panel {
         0%, 100% { transform: translateY(0); }
         50% { transform: translateY(-5px); }
      }

      .ds-panel:hover, .ds-card:hover {
        background: rgba(255, 255, 255, 0.4);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        font-size: 4rem;
        color: #FFF;
        text-shadow: 0 4px 10px rgba(0,0,0,0.1);
      }
      .ds-hero-title span {
        color: #FFF;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 400;
      }

      /* 4. BUTTONS (Bubbles) */
      .fluid-btn-primary, .ds-btn-primary {
        background: #00C2FF !important;
        color: #FFF !important;
        border-radius: 50px !important;
        padding: 12px 35px !important;
        border: none !important;
        box-shadow: 0 5px 15px rgba(0, 194, 255, 0.4) !important;
        transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55) !important;
      }
      .fluid-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1);
      }

      .fluid-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 255, 255, 0.5) !important;
        color: #00C2FF !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        border: 2px solid #00C2FF !important;
      }
      .fluid-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFFFFF !important;
      }

      /* 5. NAVIGATION */
      .fluid-nav, .ds-navbar {
        margin: 20px auto !important;
        width: calc(100% - 60px) !important;
        border-radius: 50px;
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 1px;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: #555;
        transition: color 0.3s;
      }
      .ds-nav-links span:hover {
        color: #00C2FF;
        transform: scale(1.1);
      }

      /* 6. INPUTS */
      .fluid-input, .ds-input {
        background: rgba(255, 255, 255, 0.5) !important;
        border: 2px solid #FFF !important;
        border-radius: 50px !important;
        padding-left: 25px !important;
        color: #333 !important;
      }
      .ds-input:focus {
        border-color: #00C2FF !important;
        box-shadow: 0 0 15px rgba(0, 194, 255, 0.2) !important;
      }
      .ds-input-decorator {
        background: #00C2FF !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.3);
        border-radius: 30px;
        margin: 10px;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #00C2FF;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 20px !important;
        border: none !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(0, 194, 255, 0.1);
        font-weight: 700;
      }
      .ds-table-container span {
        background: #00C2FF !important;
        color: #FFF !important;
        border-radius: 50px;
        padding: 4px 12px;
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        transform: scale(1.05);
        border: 2px solid #00C2FF !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00C2FF;
        color: #FFF;
        font-weight: 700;
        border-radius: 0 0 15px 15px;
        padding: 5px 20px;
        top: 0; right: 30px;
      }

      /* 10. BADGE */
      .fluid-badge, .ds-badge {
        background: rgba(255,255,255,0.5) !important;
        color: #333 !important;
        border-radius: 50px;
        padding: 5px 15px;
        font-weight: 700;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: rgba(255,255,255,0.3) !important;
        margin-top: 80px;
      }
    `
  }
};
