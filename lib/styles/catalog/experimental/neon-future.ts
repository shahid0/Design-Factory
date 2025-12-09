
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'neon-future')!;

export const neonFuture: StyleCartridge = {
  id: 'neon-future',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0B0B15', // Dark Space
      '--bg-layer-2': '#151525', // Panel BG
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#8F9BB3',
      '--accent-color': '#00E5FF', // Neon Cyan
      '--border-radius': '4px',
      '--font-display': '"Rajdhani", "Orbitron", sans-serif',
    },
    elementClasses: {
      stage: 'neon-stage',
      navbar: 'neon-nav',
      container: 'neon-panel',
      buttonPrimary: 'neon-btn-primary',
      buttonSecondary: 'neon-btn-secondary',
      input: 'neon-input',
      badge: 'neon-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');

      /* --- NEON FUTURE ENGINE --- */

      .neon-stage {
        background-color: #0B0B15;
        color: #FFFFFF;
        font-family: 'Rajdhani', sans-serif;
      }

      /* Circuit Lines */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: 
          linear-gradient(90deg, rgba(0, 229, 255, 0.05) 1px, transparent 1px),
          linear-gradient(rgba(0, 229, 255, 0.05) 1px, transparent 1px);
        background-size: 50px 50px;
        z-index: -1;
      }
      
      /* Glow Spots */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 0; left: 50%;
        width: 100%; height: 500px;
        background: radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15), transparent 70%);
        transform: translateX(-50%);
        z-index: -1;
        pointer-events: none;
      }

      /* 2. PANELS (Glowing Borders) */
      .neon-panel, .ds-panel, .ds-card, .neon-nav {
        background: rgba(21, 21, 37, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(0, 229, 255, 0.2);
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.05);
        border-radius: 4px;
        position: relative;
        overflow: hidden;
        padding: 24px;
      }
      
      /* Active Corner Highlight */
      .neon-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 2px;
        background: linear-gradient(90deg, transparent, #00E5FF, transparent);
        opacity: 0.5;
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: #00E5FF;
        box-shadow: 0 0 25px rgba(0, 229, 255, 0.15);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #FFFFFF;
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
      }
      .ds-hero-title span {
        color: #00E5FF;
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #8F9BB3;
      }

      /* 4. BUTTONS (Laser) */
      .neon-btn-primary, .ds-btn-primary {
        background: rgba(0, 229, 255, 0.1) !important;
        color: #00E5FF !important;
        border: 1px solid #00E5FF !important;
        border-radius: 4px !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 12px 30px !important;
        box-shadow: 0 0 10px rgba(0, 229, 255, 0.2) !important;
        transition: all 0.2s !important;
      }
      .neon-btn-primary:hover, .ds-btn-primary:hover {
        background: #00E5FF !important;
        color: #000 !important;
        box-shadow: 0 0 20px #00E5FF !important;
      }

      .neon-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #FFFFFF !important;
        border: 1px solid #333 !important;
        border-radius: 4px !important;
        font-weight: 600 !important;
        text-transform: uppercase;
      }
      .neon-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: #FFF !important;
        box-shadow: 0 0 10px rgba(255,255,255,0.2) !important;
      }

      /* 5. NAVIGATION */
      .neon-nav, .ds-navbar {
        background: rgba(11, 11, 21, 0.9);
        border-bottom: 1px solid rgba(0, 229, 255, 0.2);
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 2px;
        text-shadow: 0 0 10px #00E5FF;
      }
      .ds-nav-links span {
        text-transform: uppercase;
        color: #8F9BB3;
        font-weight: 600;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #00E5FF;
        text-shadow: 0 0 8px #00E5FF;
      }

      /* 6. INPUTS */
      .neon-input, .ds-input {
        background: rgba(255, 255, 255, 0.05) !important;
        border: 1px solid #333 !important;
        border-radius: 4px !important;
        color: #FFF !important;
        padding-left: 40px !important;
        font-family: 'Rajdhani', sans-serif;
        font-size: 1.1rem;
      }
      .ds-input:focus {
        border-color: #00E5FF !important;
        box-shadow: 0 0 10px rgba(0, 229, 255, 0.3) !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        border: 1px solid #00E5FF;
        width: 8px !important; height: 8px !important;
        transform: rotate(45deg);
        left: 15px !important;
        box-shadow: 0 0 5px #00E5FF;
        border-radius: 0 !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(21, 21, 37, 0.5);
        border: 1px solid rgba(0, 229, 255, 0.1);
        border-radius: 4px;
      }
      .ds-stats .text-3xl {
        color: #00E5FF;
        text-shadow: 0 0 10px rgba(0, 229, 255, 0.5);
      }
      .ds-stats span:first-child {
        color: #8F9BB3;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid rgba(0, 229, 255, 0.2) !important;
        background: rgba(21, 21, 37, 0.5) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(0, 229, 255, 0.1);
        color: #00E5FF;
        font-weight: 700;
        text-transform: uppercase;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(0, 229, 255, 0.05) !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #00E5FF;
        color: #00E5FF !important;
        border-radius: 4px;
        padding: 2px 10px;
        box-shadow: 0 0 5px rgba(0, 229, 255, 0.2);
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(21, 21, 37, 0.8) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #00E5FF !important;
        box-shadow: 0 0 20px rgba(0, 229, 255, 0.1) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #00E5FF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #00E5FF;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        border-bottom-left-radius: 4px;
        padding: 5px 15px;
      }

      /* 10. BADGE */
      .neon-badge, .ds-badge {
        background: rgba(0, 229, 255, 0.1) !important;
        color: #00E5FF !important;
        border: 1px solid #00E5FF;
        border-radius: 4px;
        padding: 4px 10px;
        box-shadow: 0 0 5px rgba(0, 229, 255, 0.3);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #08080F !important;
        border-top: 1px solid rgba(255,255,255,0.1) !important;
        margin-top: 60px;
      }
    `
  }
};
