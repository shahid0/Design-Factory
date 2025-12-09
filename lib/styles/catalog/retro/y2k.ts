
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'y2k')!;

export const y2k: StyleCartridge = {
  id: 'y2k',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F0F0F0', // Silver/White
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#0033CC', // Deep Techno Blue
      '--text-secondary': '#666699',
      '--accent-color': '#FF00CC', // Hot Pink
      '--border-radius': '20px', // Bubbly
      '--font-display': '"Orbitron", "Verdana", sans-serif',
    },
    elementClasses: {
      stage: 'y2k-stage',
      navbar: 'y2k-nav',
      container: 'y2k-blob',
      buttonPrimary: 'y2k-btn-primary',
      buttonSecondary: 'y2k-btn-secondary',
      input: 'y2k-input',
      badge: 'y2k-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

      /* --- Y2K AESTHETIC ENGINE --- */

      /* 1. ATMOSPHERE */
      .y2k-stage {
        background-color: #F0F0F0;
        background: radial-gradient(circle at 50% 50%, #FFFFFF 0%, #D0D0E0 100%);
        font-family: 'Verdana', sans-serif;
        overflow-x: hidden;
      }

      /* Chrome Blobs Background */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        top: -20%;
        right: -20%;
        width: 800px;
        height: 800px;
        background: radial-gradient(circle, #00FFFF 0%, rgba(0,255,255,0) 70%);
        opacity: 0.2;
        border-radius: 50%;
        filter: blur(60px);
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        bottom: -10%;
        left: -10%;
        width: 600px;
        height: 600px;
        background: radial-gradient(circle, #FF00CC 0%, rgba(255,0,204,0) 70%);
        opacity: 0.15;
        border-radius: 50%;
        filter: blur(50px);
        z-index: -1;
      }
      
      /* Matrix Rain overlay (Subtle) */
      .ds-page-root::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: linear-gradient(0deg, transparent 24%, rgba(0, 255, 0, .03) 25%, rgba(0, 255, 0, .03) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .03) 75%, rgba(0, 255, 0, .03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 0, .03) 25%, rgba(0, 255, 0, .03) 26%, transparent 27%, transparent 74%, rgba(0, 255, 0, .03) 75%, rgba(0, 255, 0, .03) 76%, transparent 77%, transparent);
        background-size: 30px 30px;
        pointer-events: none;
      }

      /* 2. CHROME NAVIGATION */
      .y2k-nav, .ds-navbar {
        background: linear-gradient(180deg, #FFFFFF 0%, #E0E0E0 50%, #C0C0C0 51%, #F0F0F0 100%);
        border: 2px solid #FFFFFF;
        border-radius: 30px;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 
          0 4px 10px rgba(0,0,0,0.2),
          inset 0 2px 5px rgba(255,255,255,1);
        padding: 10px 30px;
      }
      
      .ds-logo {
        font-family: 'Orbitron', sans-serif;
        font-weight: 900;
        font-size: 1.8rem;
        background: linear-gradient(to bottom, #0033CC, #00FFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        filter: drop-shadow(0px 2px 0px rgba(0,0,0,0.2));
        font-style: italic;
      }
      
      .ds-nav-links span {
        font-family: 'Orbitron', sans-serif;
        text-transform: lowercase;
        color: #666;
        font-weight: 700;
      }
      .ds-nav-links span:hover {
        color: #FF00CC;
        text-shadow: 0 0 5px #FF00CC;
      }

      /* 3. HERO (Liquid Metal) */
      .ds-hero-title {
        font-family: 'Orbitron', sans-serif;
        font-weight: 900;
        font-size: 4rem;
        letter-spacing: -1px;
        color: #D0D0D0;
        /* Chrome Text Effect */
        background: linear-gradient(to bottom, #E0E0E0 0%, #FFFFFF 50%, #A0A0A0 51%, #E0E0E0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px #808080;
        filter: drop-shadow(0 4px 0 rgba(0,0,0,0.2));
      }
      .ds-hero-title span {
        background: linear-gradient(to bottom, #FF00CC 0%, #FF99CC 50%, #CC0099 51%, #FF00CC 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0;
      }
      .ds-hero-text {
        color: #0033CC;
        font-size: 1.1rem;
        border-left: 3px solid #00FFFF;
        padding-left: 15px;
        background: rgba(255,255,255,0.5);
      }

      /* 4. BUTTONS (Glossy Pill) */
      .y2k-btn-primary, .ds-btn-primary {
        background: linear-gradient(180deg, #00FFFF 0%, #0099FF 50%, #0066CC 51%, #00FFFF 100%) !important;
        color: #FFFFFF !important;
        border: 2px solid #FFFFFF !important;
        border-radius: 50px !important;
        font-family: 'Orbitron', sans-serif !important;
        font-weight: 700 !important;
        text-transform: lowercase;
        letter-spacing: 1px;
        box-shadow: 
          0 4px 10px rgba(0, 153, 255, 0.4),
          inset 0 2px 5px rgba(255,255,255,0.8) !important;
        padding: 12px 30px !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        transition: transform 0.2s !important;
      }
      .y2k-btn-primary:hover, .ds-btn-primary:hover {
        filter: brightness(1.1);
        transform: scale(1.05);
      }
      .y2k-btn-primary:active, .ds-btn-primary:active {
        transform: scale(0.95);
        filter: brightness(0.9);
      }

      .y2k-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: linear-gradient(180deg, #FFFFFF 0%, #EEEEEE 100%) !important;
        color: #FF00CC !important;
        border: 1px solid #FF00CC !important;
        border-radius: 50px !important;
        font-family: 'Orbitron', sans-serif !important;
        font-weight: bold;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      .y2k-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FF00CC !important;
        color: white !important;
        border-color: white !important;
      }

      /* 5. PANELS (Blobby Containers) */
      .y2k-blob, .ds-panel, .ds-card {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(10px);
        border: 2px solid white;
        border-radius: 20px;
        /* Soft, icy shadow */
        box-shadow: 
          0 10px 20px rgba(0, 255, 255, 0.15),
          inset 0 0 20px rgba(255, 255, 255, 0.8);
        overflow: visible; /* Let glows spill */
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 15px 30px rgba(255, 0, 204, 0.2),
          inset 0 0 20px rgba(255, 255, 255, 1);
        border-color: #00FFFF;
      }

      /* Icons */
      .ds-panel .w-12 {
         background: linear-gradient(135deg, #E0E0E0, #FFFFFF);
         border: 1px solid white;
         box-shadow: 3px 3px 6px rgba(0,0,0,0.1);
         border-radius: 50%;
         width: 60px; height: 60px;
         display: flex; align-items: center; justify-content: center;
      }
      .ds-panel svg {
         color: #0033CC;
         filter: drop-shadow(0 2px 2px rgba(0,0,0,0.1));
      }

      /* 6. INPUTS (Orb-like) */
      .y2k-input, .ds-input {
        background: #FFFFFF !important;
        border: 2px solid #CCCCCC !important;
        border-radius: 50px !important;
        padding-left: 20px !important;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,0.05) !important;
        font-family: 'Verdana', sans-serif;
        color: #0033CC !important;
      }
      .ds-input:focus {
        border-color: #00FFFF !important;
        box-shadow: 0 0 10px #00FFFF !important;
        outline: none;
      }
      .ds-input-decorator {
        background: #FF00CC !important;
        right: 15px !important;
        left: auto !important;
        width: 15px !important; height: 15px !important;
        border-radius: 50%;
        box-shadow: 0 0 5px #FF00CC;
      }

      /* 7. STATS */
      .ds-stats {
        background: rgba(255,255,255,0.5) !important;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
      }
      .ds-stats > div > div {
        background: white;
        border-radius: 15px;
        margin: 10px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        border: 1px solid #F0F0F0;
      }
      .ds-stats .text-3xl {
        font-family: 'Orbitron', sans-serif;
        background: linear-gradient(to right, #0033CC, #00FFFF);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-stats span:first-child {
        color: #FF00CC;
        font-size: 0.8rem;
        font-weight: bold;
        text-transform: uppercase;
      }

      /* 8. TABLE (Data List) */
      .ds-table-container {
        background: white !important;
        border-radius: 20px !important;
        border: 2px solid white !important;
        box-shadow: 0 10px 25px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div:first-child {
        background: #E6E6FA; /* Lavender */
        color: #0033CC;
        font-family: 'Orbitron', sans-serif;
        font-weight: bold;
        border-bottom: 2px solid white !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #E0FFFF !important; /* Light Cyan */
      }
      /* Status Pill */
      .ds-table-container span {
        background: #CCFFCC !important; /* Matrix Green Light */
        color: #006600 !important;
        border: 1px solid #00FF00;
        border-radius: 50px;
        box-shadow: 0 0 5px #00FF00;
        font-family: 'Verdana', sans-serif;
        font-size: 0.8rem;
        font-weight: bold;
      }

      /* 9. PRICING CARDS */
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 2px solid #00FFFF !important;
        background: linear-gradient(135deg, #FFFFFF 0%, #F0FFFF 100%) !important;
        transform: scale(1.05);
        z-index: 5;
        box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #0033CC;
        font-family: 'Orbitron', sans-serif;
      }
      .ds-card:nth-child(2) .absolute {
        background: linear-gradient(90deg, #FF00CC, #9900FF);
        color: white;
        border-radius: 0 0 15px 15px;
        font-family: 'Orbitron', sans-serif;
        font-size: 0.9rem;
        padding: 5px 15px;
      }
      
      .ds-card button {
         border-radius: 50px !important;
         font-family: 'Orbitron', sans-serif;
      }

      /* 10. BADGE */
      .y2k-badge, .ds-badge {
        background: #000 !important;
        color: #00FF00 !important; /* Matrix Terminal Look */
        font-family: 'Courier New', monospace;
        border: 1px solid #00FF00;
        border-radius: 4px !important;
        font-weight: bold;
        box-shadow: 0 0 5px #00FF00;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #C0C0C0 !important;
        border-top: 2px solid white !important;
        margin-top: 60px;
      }
      .ds-footer .ds-logo {
        background: none;
        -webkit-text-fill-color: initial;
        color: #555;
        text-shadow: 1px 1px 0 white;
      }
    `
  }
};
