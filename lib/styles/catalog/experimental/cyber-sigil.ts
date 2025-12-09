
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'cyber-sigil')!;

export const cyberSigil: StyleCartridge = {
  id: 'cyber-sigil',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#080808',
      '--text-primary': '#FFFFFF',
      '--text-secondary': '#888888',
      '--accent-color': '#FFFFFF',
      '--border-radius': '0px',
      '--font-display': '"UnifrakturMaguntia", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'sigil-stage',
      navbar: 'sigil-nav',
      container: 'sigil-panel',
      buttonPrimary: 'sigil-btn-primary',
      buttonSecondary: 'sigil-btn-secondary',
      input: 'sigil-input',
      badge: 'sigil-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&family=Cinzel:wght@400;700&display=swap');

      .sigil-stage {
        background-color: #000;
        color: #fff;
        font-family: 'Cinzel', serif;
        overflow-x: hidden;
      }

      /* Sigil Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        width: 800px; height: 800px;
        background: radial-gradient(circle, transparent 40%, #000 70%),
                    repeating-conic-gradient(from 0deg, #111 0deg 10deg, transparent 10deg 20deg);
        opacity: 0.3;
        z-index: -1;
      }
      
      /* Sharp Lines */
      .sigil-panel, .ds-panel, .ds-card, .sigil-nav {
        background: #050505;
        border: 1px solid #333;
        position: relative;
        padding: 30px;
        clip-path: polygon(
          0 10px, 10px 0, 
          calc(100% - 10px) 0, 100% 10px, 
          100% calc(100% - 10px), calc(100% - 10px) 100%, 
          10px 100%, 0 calc(100% - 10px)
        );
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: #FFF;
        box-shadow: 0 0 20px rgba(255,255,255,0.1);
      }

      /* Typography */
      .ds-hero-title {
        font-family: 'UnifrakturMaguntia', cursive;
        font-size: 5rem;
        color: #fff;
        text-align: center;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        font-family: 'Cinzel', serif;
        font-size: 0.3em;
        display: block;
        letter-spacing: 10px;
        margin-top: 20px;
        color: #888;
      }

      /* Buttons (Sharp) */
      .sigil-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border: 1px solid #FFF !important;
        border-radius: 0 !important;
        font-family: 'UnifrakturMaguntia', cursive !important;
        font-size: 1.5rem !important;
        padding: 10px 40px !important;
        clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        transition: all 0.2s !important;
      }
      .sigil-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF !important;
        color: #000 !important;
        transform: scale(1.05);
      }

      .sigil-btn-secondary, .ds-btn-secondary {
        background: transparent !important;
        border: 1px solid #444 !important;
        color: #888 !important;
        font-family: 'Cinzel', serif !important;
        font-size: 0.9rem !important;
      }
      .sigil-btn-secondary:hover {
        border-color: #FFF !important;
        color: #FFF !important;
      }

      /* Inputs */
      .sigil-input, .ds-input {
        background: #080808 !important;
        border: 1px solid #333 !important;
        border-radius: 0 !important;
        color: #FFF !important;
        font-family: 'Cinzel', serif;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #FFF !important;
        box-shadow: 0 0 10px rgba(255,255,255,0.2) !important;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #020202;
        border: 1px solid #222;
        clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
        padding: 40px 20px;
        text-align: center;
      }
      .ds-stats .text-3xl {
        font-family: 'UnifrakturMaguntia', cursive;
        font-size: 3rem;
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 1px solid #FFF !important;
        background: #111 !important;
        transform: scale(1.05);
        z-index: 10;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-family: 'UnifrakturMaguntia', cursive;
        top: -10px;
        padding: 5px 20px;
        clip-path: polygon(10px 0, 100% 0, 100% 100%, 0 100%, 0 10px);
      }

      /* Footer */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #222;
        margin-top: 80px;
      }
      .ds-footer h4 {
        font-family: 'UnifrakturMaguntia', cursive;
        font-size: 1.5rem;
      }
    `
  }
};
