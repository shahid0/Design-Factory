
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'digital-matrix')!;

export const digitalMatrix: StyleCartridge = {
  id: 'digital-matrix',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#000000',
      '--bg-layer-2': '#0D0D0D',
      '--text-primary': '#00FF41', // Matrix Green
      '--text-secondary': '#008F11', // Darker Green
      '--accent-color': '#003B00', // Deep Green
      '--border-radius': '0px',
      '--font-display': '"Share Tech Mono", monospace',
    },
    elementClasses: {
      stage: 'matrix-stage',
      navbar: 'matrix-nav',
      container: 'matrix-panel',
      buttonPrimary: 'matrix-btn-primary',
      buttonSecondary: 'matrix-btn-secondary',
      input: 'matrix-input',
      badge: 'matrix-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

      /* --- DIGITAL MATRIX ENGINE --- */

      .matrix-stage {
        background-color: #000;
        color: #00FF41;
        font-family: 'Share Tech Mono', monospace;
        overflow-x: hidden;
      }

      /* Falling Code Simulation (Simplified CSS) */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: linear-gradient(0deg, transparent 20%, rgba(0, 255, 65, 0.1) 50%, transparent 100%);
        background-size: 100% 50px;
        animation: matrix-scan 2s linear infinite;
        z-index: -1;
        opacity: 0.3;
      }
      
      /* Vertical Rain Lines */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.05) 0px, rgba(0, 255, 65, 0.05) 1px, transparent 1px, transparent 20px);
        z-index: -2;
      }

      @keyframes matrix-scan {
        0% { background-position: 0 0; }
        100% { background-position: 0 50px; }
      }

      /* 2. CONTAINERS */
      .matrix-panel, .ds-panel, .ds-card, .matrix-nav {
        background: rgba(0, 10, 0, 0.8);
        border: 1px solid #00FF41;
        box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
        border-radius: 0;
        padding: 20px;
        position: relative;
      }
      
      /* Corner Brackets */
      .matrix-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -1px; left: -1px;
        width: 10px; height: 10px;
        border-top: 2px solid #FFF;
        border-left: 2px solid #FFF;
      }
      .matrix-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        bottom: -1px; right: -1px;
        width: 10px; height: 10px;
        border-bottom: 2px solid #FFF;
        border-right: 2px solid #FFF;
      }

      .ds-panel:hover, .ds-card:hover {
        background: rgba(0, 30, 0, 0.9);
        box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 400;
        text-transform: uppercase;
        font-size: 4rem;
        letter-spacing: 2px;
        text-shadow: 0 0 10px #00FF41;
      }
      .ds-hero-title span {
        color: #FFF;
        background: transparent;
        -webkit-text-fill-color: initial;
        animation: blink 2s infinite;
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
      
      .ds-hero-text {
        font-size: 1.1rem;
        color: #008F11;
        border-left: 2px solid #00FF41;
        padding-left: 15px;
      }

      /* 4. BUTTONS */
      .matrix-btn-primary, .ds-btn-primary {
        background: #00FF41 !important;
        color: #000 !important;
        border: none !important;
        border-radius: 0 !important;
        font-family: 'Share Tech Mono', monospace !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        padding: 10px 30px !important;
        box-shadow: 0 0 15px rgba(0, 255, 65, 0.5) !important;
        transition: all 0.2s !important;
      }
      .matrix-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF !important;
        box-shadow: 0 0 25px #00FF41 !important;
      }

      .matrix-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #00FF41 !important;
        border: 1px solid #00FF41 !important;
        border-radius: 0 !important;
        text-transform: uppercase;
      }
      .matrix-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(0, 255, 65, 0.1) !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .matrix-nav, .ds-navbar {
        border-bottom: 1px solid #00FF41;
        margin: 0 !important;
        width: 100% !important;
        background: #000;
        padding: 15px 30px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: 2px;
        text-shadow: 0 0 5px #00FF41;
      }
      .ds-nav-links span {
        color: #008F11;
        text-transform: uppercase;
      }
      .ds-nav-links span:hover {
        color: #00FF41;
        text-shadow: 0 0 5px #00FF41;
      }

      /* 6. INPUTS */
      .matrix-input, .ds-input {
        background: #000 !important;
        border: 1px solid #008F11 !important;
        border-radius: 0 !important;
        color: #00FF41 !important;
        font-family: 'Share Tech Mono', monospace;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #00FF41 !important;
        box-shadow: 0 0 10px #00FF41 !important;
      }
      .ds-input-decorator {
        background: #00FF41 !important;
        border-radius: 0 !important;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 15px !important;
        animation: blink 1s step-end infinite;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #00FF41;
        border-bottom: 1px solid #00FF41;
      }
      .ds-stats > div > div {
        background: #000;
        border-right: 1px dashed #008F11;
        color: #FFF;
      }
      .ds-stats .text-3xl {
        color: #00FF41;
        text-shadow: 0 0 5px #00FF41;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #00FF41 !important;
        background: rgba(0, 20, 0, 0.8) !important;
      }
      .ds-table-container > div:first-child {
        background: #003B00;
        color: #00FF41;
        font-weight: 700;
        border-bottom: 1px solid #00FF41 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #002000 !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        color: #00FF41 !important;
        border: 1px solid #00FF41;
        border-radius: 0;
        box-shadow: 0 0 5px #00FF41;
      }

      /* 9. PRICING */
      .ds-card {
        background: #000 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #FFF !important;
        box-shadow: 0 0 20px rgba(255,255,255,0.3) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFF;
        text-shadow: 0 0 10px #FFF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FFF;
        color: #000;
        font-weight: 700;
        top: 0; right: 0;
        padding: 5px;
      }
      
      /* 10. TOGGLES (Terminal) */
      .mannequin-toggle-track {
        background: #000;
        border: 1px solid #008F11;
        border-radius: 0;
      }
      .mannequin-toggle-track.active {
        background: #00FF41;
        box-shadow: 0 0 10px #00FF41;
        border-color: #00FF41;
      }
      .mannequin-toggle-thumb {
        background: #000;
        border: 1px solid #00FF41;
        border-radius: 0;
        box-shadow: none;
      }

      /* 10. BADGE */
      .matrix-badge, .ds-badge {
        background: #003B00 !important;
        color: #00FF41 !important;
        border: 1px solid #00FF41;
        border-radius: 0;
        padding: 2px 8px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        border-top: 1px solid #008F11 !important;
        margin-top: 60px;
      }
    `
  }
};
