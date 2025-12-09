
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'steampunk-vintage')!;

export const steampunkVintage: StyleCartridge = {
  id: 'steampunk-vintage',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#2B2118', // Dark Leather
      '--bg-layer-2': '#4A3B2A', // Bronze/Wood
      '--text-primary': '#D4AF37', // Brass Gold
      '--text-secondary': '#B8860B', // Dark Gold
      '--accent-color': '#CD7F32', // Copper
      '--border-radius': '4px',
      '--font-display': '"Rye", "Courier Prime", serif',
    },
    elementClasses: {
      stage: 'steam-stage',
      navbar: 'steam-nav',
      container: 'steam-panel',
      buttonPrimary: 'steam-btn-primary',
      buttonSecondary: 'steam-btn-secondary',
      input: 'steam-input',
      badge: 'steam-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Rye&family=Courier+Prime:wght@400;700&display=swap');

      /* --- AETHER STEAM ENGINE --- */

      /* 1. INDUSTRIAL ATMOSPHERE */
      .steam-stage {
        background-color: #2B2118;
        color: #D4AF37;
        font-family: 'Courier Prime', monospace;
        overflow-x: hidden;
      }

      /* Gears Background */
      .ds-deco-layer::before {
        content: '⚙';
        position: fixed;
        top: -10%; left: -10%;
        font-size: 400px;
        color: rgba(0,0,0,0.2);
        animation: spin-slow 60s linear infinite;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: '⚙';
        position: fixed;
        bottom: -10%; right: -10%;
        font-size: 300px;
        color: rgba(0,0,0,0.2);
        animation: spin-slow 40s linear infinite reverse;
        z-index: -1;
      }
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* 2. BRASS & COPPER PANELS */
      .steam-panel, .ds-panel, .ds-card, .steam-nav {
        background: linear-gradient(135deg, #3E2723 0%, #2B2118 100%);
        border: 4px solid #8B4513;
        box-shadow: 
          inset 0 0 20px rgba(0,0,0,0.8),
          0 10px 20px rgba(0,0,0,0.5);
        border-radius: 4px;
        position: relative;
        padding: 20px;
        margin: 15px;
      }
      
      /* Rivets */
      .steam-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        inset: 4px;
        border: 2px dashed #CD7F32; /* Copper stitch */
        pointer-events: none;
      }
      
      /* Corner Screws */
      .steam-panel::after, .ds-panel::after, .ds-card::after {
        content: "⊕";
        position: absolute;
        top: 2px; right: 2px;
        color: #D4AF37;
        font-size: 12px;
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: #CD7F32;
        transform: translateY(-2px);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Rye', serif;
        font-size: 3.5rem;
        color: #D4AF37;
        text-shadow: 2px 2px 0px #000, 0 0 10px #CD7F32;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        color: #CD7F32; /* Copper */
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.1rem;
        color: #B8860B;
        border-top: 1px solid #CD7F32;
        border-bottom: 1px solid #CD7F32;
        padding: 10px 0;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Pressure Plate) */
      .steam-btn-primary, .ds-btn-primary {
        background: linear-gradient(to bottom, #D4AF37, #B8860B) !important;
        color: #2B2118 !important;
        border: 2px solid #5D4037 !important;
        border-radius: 50% / 10% !important; /* Slight cylindrical feel */
        box-shadow: 
          inset 0 2px 5px rgba(255,255,255,0.4),
          0 5px 0 #5D4037,
          0 10px 10px rgba(0,0,0,0.5) !important;
        font-family: 'Rye', serif !important;
        text-transform: uppercase;
        padding: 12px 30px !important;
        transition: all 0.1s !important;
        font-size: 1rem !important;
      }
      .steam-btn-primary:active, .ds-btn-primary:active {
        transform: translateY(4px);
        box-shadow: 
          inset 0 2px 5px rgba(0,0,0,0.4),
          0 1px 0 #5D4037 !important;
      }
      .steam-btn-primary:hover, .ds-btn-primary:hover {
        filter: brightness(1.1);
      }

      .steam-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #CD7F32 !important;
        border: 1px solid #CD7F32 !important;
        font-family: 'Courier Prime', monospace !important;
        font-weight: bold !important;
        text-transform: uppercase;
      }
      .steam-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(205, 127, 50, 0.1) !important;
        color: #D4AF37 !important;
        box-shadow: 0 0 10px #CD7F32;
      }

      /* 5. NAVIGATION (Pipes) */
      .steam-nav, .ds-navbar {
        background: #1A120B;
        border-bottom: 4px ridge #CD7F32;
        border-radius: 0 0 20px 20px;
        margin: 0 !important;
        width: 100% !important;
      }
      .ds-logo {
        font-family: 'Rye', serif;
        font-size: 2rem;
        color: #CD7F32;
      }
      .ds-nav-links span {
        color: #8B4513;
        font-weight: bold;
      }
      .ds-nav-links span:hover {
        color: #D4AF37;
        text-decoration: underline;
      }

      /* 6. INPUTS (Gauge) */
      .steam-input, .ds-input {
        background: #000 !important;
        border: 2px solid #CD7F32 !important;
        border-radius: 10px !important;
        color: #00FF00 !important; /* Radium Green text */
        font-family: 'Courier Prime', monospace;
        padding-left: 40px !important;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.8);
      }
      .ds-input:focus {
        border-color: #D4AF37 !important;
        box-shadow: 0 0 15px #CD7F32 !important;
      }
      .ds-input-decorator {
        background: #CD7F32 !important;
        border-radius: 50%;
        width: 12px !important; height: 12px !important;
        border: 1px solid #000;
        left: 12px !important;
      }

      /* 7. STATS (Meters) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #221812;
        border: 2px solid #5D4037;
        border-radius: 50%; /* Circular meters */
        width: 150px; height: 150px;
        display: flex; flex-direction: column; justify-content: center; align-items: center;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
        margin: 0 auto;
      }
      .ds-stats .text-3xl {
        color: #00FF00; /* Radium */
        text-shadow: 0 0 5px #00FF00;
      }
      
      /* 8. TABLE (Logbook) */
      .ds-table-container {
        background: #FDF5E6 !important; /* Paper inside */
        color: #000 !important;
        border: 8px solid #3E2723 !important;
        border-radius: 4px !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #8B4513 !important;
      }
      .ds-table-container > div:first-child {
        background: #D7CCC8;
        font-family: 'Rye', serif;
        color: #3E2723;
      }
      /* Status */
      .ds-table-container span {
        background: #3E2723 !important;
        color: #D4AF37 !important;
        border-radius: 2px;
        font-family: 'Courier Prime', monospace;
      }

      /* 9. PRICING */
      .ds-card {
        background: #2B2118 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 4px double #D4AF37 !important;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .absolute {
        background: #CD7F32;
        color: #2B2118;
        font-family: 'Rye', serif;
        border: 1px solid #000;
        top: -10px;
      }

      /* 10. BADGE */
      .steam-badge, .ds-badge {
        background: #8B4513 !important;
        color: #D4AF37 !important;
        border: 1px solid #CD7F32;
        border-radius: 4px;
        font-family: 'Rye', serif;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #1A120B !important;
        border-top: 4px double #CD7F32 !important;
        margin-top: 60px;
      }
    `
  }
};
