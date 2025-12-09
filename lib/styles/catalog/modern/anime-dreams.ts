
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'anime-dreams')!;

export const animeDreams: StyleCartridge = {
  id: 'anime-dreams',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFF5F9', // Very light pink
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#4A2C55', // Deep Grape
      '--text-secondary': '#9D7FAB', // Soft Lilac text
      '--accent-color': '#FF69B4', // Hot Pink
      '--border-radius': '24px',
      '--font-display': '"M PLUS Rounded 1c", "Nunito", "Quicksand", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#FFF5F9] overflow-hidden',
      navbar: 'anime-nav',
      container: 'anime-card',
      buttonPrimary: 'anime-btn-primary',
      buttonSecondary: 'anime-btn-secondary',
      input: 'anime-input',
      badge: 'anime-badge'
    },
    injectCss: `
      /* --- ANIME DREAMS ENGINE --- */

      /* 1. BACKGROUND & ATMOSPHERE */
      .ds-page-root {
        background: linear-gradient(135deg, #FFF5F9 0%, #E6E6FA 100%);
        color: var(--text-primary);
        font-family: var(--font-display);
      }

      /* Floating Clouds / Sparkles Background */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        top: 0; left: 0; width: 100%; height: 100%;
        background-image: 
          radial-gradient(#FFB6C1 2px, transparent 2px),
          radial-gradient(#ADD8E6 2px, transparent 2px);
        background-size: 50px 50px;
        background-position: 0 0, 25px 25px;
        opacity: 0.3;
        z-index: -2;
      }
      
      /* Big Soft Orbs */
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        top: -10%; right: -10%;
        width: 60vh; height: 60vh;
        background: radial-gradient(circle, rgba(255,105,180,0.2) 0%, transparent 70%);
        border-radius: 50%;
        filter: blur(40px);
        animation: float-dream 10s infinite alternate ease-in-out;
        z-index: -1;
      }

      @keyframes float-dream {
        0% { transform: translate(0, 0) scale(1); }
        100% { transform: translate(-30px, 30px) scale(1.1); }
      }

      /* 2. CARD STYLING (Pop & Soft) */
      .anime-card, .ds-panel, .ds-card, .anime-nav {
        background: rgba(255, 255, 255, 0.9);
        border: 2px solid white;
        border-radius: var(--border-radius);
        /* The signature "Pop" shadow: Colored and offset */
        box-shadow: 
          8px 8px 0px rgba(221, 160, 221, 0.4), /* Plum shadow */
          0 4px 12px rgba(0,0,0,0.05);
        transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      
      .anime-card:hover, .ds-panel:hover, .ds-card:hover {
        transform: translateY(-6px) rotate(-1deg);
        box-shadow: 
          12px 12px 0px rgba(255, 105, 180, 0.3), 
          0 10px 20px rgba(0,0,0,0.1);
        z-index: 10;
        border-color: #FFB6C1;
      }

      /* 3. TYPOGRAPHY (Kawaii) */
      .ds-hero-title {
        font-weight: 800;
        color: var(--text-primary);
        letter-spacing: -1px;
        /* White outline effect */
        text-shadow: 
          2px 2px 0px #FFFFFF, 
          4px 4px 0px rgba(221, 160, 221, 0.5);
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #FF69B4, #8A2BE2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        /* Re-apply shadow carefully so it doesn't break clip */
        text-shadow: none; 
        filter: drop-shadow(2px 2px 0px #fff);
      }

      /* 4. BUTTONS (Bubbly) */
      .anime-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #FF69B4 0%, #FF1493 100%) !important;
        color: white !important;
        border-radius: 50px !important; /* Full pill */
        font-weight: 800 !important;
        border: 3px solid white !important;
        box-shadow: 
          4px 4px 0px rgba(74, 44, 85, 0.2), 
          0 4px 10px rgba(255, 20, 147, 0.4) !important;
        padding: 12px 32px !important;
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
      }
      .anime-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05) rotate(2deg) !important;
        box-shadow: 
          6px 6px 0px rgba(74, 44, 85, 0.2), 
          0 8px 20px rgba(255, 20, 147, 0.5) !important;
      }
      .anime-btn-primary:active, .ds-btn-primary:active {
        transform: scale(0.95) !important;
        box-shadow: inset 0 2px 5px rgba(0,0,0,0.1) !important;
      }

      .anime-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: var(--accent-color) !important;
        border: 2px solid var(--accent-color) !important;
        border-radius: 50px !important;
        font-weight: 700 !important;
        box-shadow: 4px 4px 0px rgba(255, 105, 180, 0.1) !important;
      }
      .anime-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFF0F5 !important;
        transform: translateY(-2px);
        box-shadow: 4px 6px 0px rgba(255, 105, 180, 0.2) !important;
      }

      /* 5. NAVIGATION (Floating Cloud) */
      .anime-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.95);
        border: 3px solid #FFF;
        margin: 20px;
        width: calc(100% - 40px) !important;
        border-radius: 50px;
        box-shadow: 0 8px 20px rgba(221, 160, 221, 0.15);
      }
      .ds-logo {
        font-weight: 900;
        color: #FF1493;
        font-style: italic;
        text-shadow: 2px 2px 0px #FFF, 3px 3px 0px #DDD;
      }
      .ds-nav-links span {
        font-weight: 700;
        color: var(--text-secondary);
        transition: color 0.2s;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
        text-shadow: 0 0 10px #FFB6C1;
      }

      /* 6. INPUTS (Soft & Round) */
      .anime-input, .ds-input {
        background: #FFF !important;
        border: 2px solid #E6E6FA !important;
        border-radius: 20px !important;
        color: var(--text-primary) !important;
        padding-left: 44px !important;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,0.03) !important;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 0 4px rgba(255, 105, 180, 0.1) !important;
      }
      .ds-input-decorator {
        background: linear-gradient(135deg, #FF69B4, #8A2BE2) !important;
        width: 14px !important; height: 14px !important;
        border-radius: 50%;
        left: 16px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border-radius: 24px;
        box-shadow: 4px 4px 0px rgba(221, 160, 221, 0.2);
        padding: 20px;
        border: 1px solid #FFF0F5;
        text-align: center;
      }
      .ds-stats .text-3xl {
        font-weight: 800;
        color: #8A2BE2;
      }
      .ds-stats span:first-child {
        color: #FF69B4;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 11px;
      }

      /* 8. TABLE (Cute List) */
      .ds-table-container {
        background: #FFF !important;
        border-radius: 24px !important;
        border: 2px solid white !important;
        box-shadow: 8px 8px 0px rgba(221, 160, 221, 0.2) !important;
        overflow: hidden;
      }
      .ds-table-container > div:first-child {
        background: #FFF0F5;
        color: #FF1493;
        font-weight: 800;
        border-bottom: 2px solid #fff;
      }
      .ds-table-container > div:not(:first-child) {
        border-bottom: 1px dashed #E6E6FA !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FAFAFF !important;
      }
      .ds-table-container span {
        background: #E6E6FA !important;
        color: #8A2BE2 !important;
        border-radius: 20px;
        padding: 4px 12px;
        font-weight: 700;
        border: none;
      }

      /* 9. PRICING CARDS */
      .ds-card:hover {
        transform: scale(1.03) rotate(1deg);
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 3px solid #FF69B4 !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #FF69B4;
        color: white;
        font-weight: 800;
        border-radius: 0 0 12px 12px;
      }
      
      /* Icons inside cards */
      .ds-panel svg, .ds-card svg {
        color: #FF69B4;
        filter: drop-shadow(2px 2px 0px rgba(0,0,0,0.1));
      }

      /* 10. BADGE */
      .anime-badge, .ds-badge {
        background: #FF69B4 !important;
        color: white !important;
        border-radius: 12px !important;
        font-weight: 800;
        box-shadow: 2px 2px 0px rgba(0,0,0,0.1);
        padding: 4px 10px;
        letter-spacing: 0.5px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFF !important;
        border-top: 4px solid #FFF0F5 !important;
        margin-top: 60px;
      }
    `
  }
};
