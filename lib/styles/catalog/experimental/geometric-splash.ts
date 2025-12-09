
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'geometricsplash')!;

export const geometricSplash: StyleCartridge = {
  id: 'geometricsplash',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#F0F0F0',
      '--text-primary': '#222222',
      '--text-secondary': '#555555',
      '--accent-color': '#FF0055', // Vibrant Pink
      '--border-radius': '0px',
      '--font-display': '"Montserrat", sans-serif',
    },
    elementClasses: {
      stage: 'splash-stage',
      navbar: 'splash-nav',
      container: 'splash-panel',
      buttonPrimary: 'splash-btn-primary',
      buttonSecondary: 'splash-btn-secondary',
      input: 'splash-input',
      badge: 'splash-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

      /* --- GEOMETRIC SPLASH ENGINE --- */

      .splash-stage {
        background-color: #FFF;
        color: #222;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
      }

      /* Giant Shapes */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: -20%; left: -10%;
        width: 50vw; height: 50vw;
        background: linear-gradient(45deg, #FF0055, #FFD700);
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
        opacity: 0.1;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: -20%; right: -10%;
        width: 60vw; height: 60vw;
        background: linear-gradient(135deg, #00BFFF, #8A2BE2);
        border-radius: 50%;
        opacity: 0.1;
        z-index: -1;
      }

      /* 2. CONTAINERS (Sharp & Offset) */
      .splash-panel, .ds-panel, .ds-card, .splash-nav {
        background: #FFFFFF;
        border: none;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.1);
        border-radius: 0;
        position: relative;
        padding: 30px;
        transition: transform 0.2s;
      }
      
      /* Decorative Corner */
      .splash-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 0; height: 0;
        border-style: solid;
        border-width: 30px 30px 0 0;
        border-color: var(--accent-color) transparent transparent transparent;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translate(-5px, -5px);
        box-shadow: 15px 15px 0 rgba(34, 34, 34, 0.2);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 900;
        text-transform: uppercase;
        font-size: 5rem;
        letter-spacing: -2px;
        line-height: 0.9;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #FF0055, #FFD700);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-text {
        font-weight: 400;
        font-size: 1.2rem;
        border-left: 5px solid #00BFFF;
        padding-left: 20px;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Sliced) */
      .splash-btn-primary, .ds-btn-primary {
        background: #222 !important;
        color: #FFF !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 15px 40px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        clip-path: polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%);
        transition: background 0.2s !important;
      }
      .splash-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
      }

      .splash-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F0F0F0 !important;
        color: #222 !important;
        border: 2px solid #222 !important;
        border-radius: 0 !important;
        font-weight: 700 !important;
      }
      .splash-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #222 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .splash-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 0 5px 20px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-weight: 900;
        font-size: 2rem;
        background: #222;
        color: #FFF;
        padding: 5px 15px;
        transform: skewX(-10deg);
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
        text-decoration: underline;
        text-decoration-thickness: 3px;
      }

      /* 6. INPUTS */
      .splash-input, .ds-input {
        background: #F8F8F8 !important;
        border: 2px solid #EEE !important;
        border-radius: 0 !important;
        padding-left: 20px !important;
        font-weight: 700;
        color: #222 !important;
      }
      .ds-input:focus {
        border-color: #00BFFF !important;
        background: #FFF !important;
      }
      .ds-input-decorator {
        background: #FFD700 !important;
        border-radius: 0 !important;
        width: 15px !important; height: 15px !important;
        transform: rotate(45deg);
        left: auto !important; right: 15px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 5px solid #222;
        border-bottom: 5px solid #222;
      }
      .ds-stats > div > div {
        background: #FFF;
        border-right: 1px solid #EEE;
        padding: 30px;
      }
      .ds-stats .text-3xl {
        font-weight: 900;
        color: var(--accent-color);
      }
      .ds-stats span:first-child {
        font-weight: 700;
        color: #222;
        background: #F0F0F0;
        padding: 2px 8px;
        display: inline-block;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: none !important;
        box-shadow: 10px 10px 0 rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div:first-child {
        background: #222;
        color: #FFF;
        font-weight: 900;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: linear-gradient(90deg, rgba(255, 0, 85, 0.1), transparent) !important;
      }
      /* Status */
      .ds-table-container span {
        background: #00BFFF !important;
        color: #FFF !important;
        border-radius: 0;
        font-weight: 700;
        padding: 4px 10px;
        transform: skewX(-10deg);
      }

      /* 9. PRICING */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px solid #222 !important;
        transform: scale(1.05);
        z-index: 5;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #222;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFD700;
        color: #222;
        font-weight: 900;
        padding: 10px 20px;
        top: -15px; right: -15px;
        box-shadow: 5px 5px 0 rgba(0,0,0,0.1);
      }

      /* 10. BADGE */
      .splash-badge, .ds-badge {
        background: #222 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 5px 15px;
        font-weight: 700;
        clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #222 !important;
        color: #FFF !important;
        margin-top: 100px;
        clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
        padding-top: 80px;
      }
      .ds-footer * { color: #FFF !important; }
    `
  }
};
