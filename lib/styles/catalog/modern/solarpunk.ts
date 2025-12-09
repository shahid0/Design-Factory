
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'solar-punk')!;

export const solarpunk: StyleCartridge = {
  id: 'solar-punk',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDFCF8', // Sun-bleached Parchment
      '--bg-layer-2': '#F4F1E8', // Warm Stone
      '--text-primary': '#1A3C34', // Deep Forest Green
      '--text-secondary': '#5D756C', // Mossy Grey
      '--accent-color': '#D4AF37', // Art Deco Gold
      '--border-radius': '24px',
      '--font-display': '"Playfair Display", "Lora", serif',
    },
    elementClasses: {
      stage: 'bg-[#FDFCF8] overflow-hidden',
      navbar: 'solar-nav',
      container: 'solar-panel',
      buttonPrimary: 'solar-btn-primary',
      buttonSecondary: 'solar-btn-secondary',
      input: 'solar-input',
      badge: 'solar-badge'
    },
    injectCss: `
      /* --- SOLAR PUNK ARCHITECT --- */

      /* 1. ATMOSPHERE & BACKGROUND */
      .ds-page-root {
        background-color: var(--bg-layer-1);
        color: var(--text-primary);
        font-family: 'Lato', sans-serif; /* Body font */
      }

      /* Animated Sunburst / Nature Pattern */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        background: 
          radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 40%),
          repeating-conic-gradient(from 0deg, rgba(26, 60, 52, 0.02) 0deg 10deg, transparent 10deg 20deg);
        animation: sun-rotate 120s linear infinite;
        z-index: -1;
        pointer-events: none;
      }
      
      /* Floating Leaves/Particles */
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-image: radial-gradient(#228B22 1px, transparent 1px);
        background-size: 60px 60px;
        opacity: 0.1;
        mask-image: linear-gradient(to bottom, black, transparent);
      }

      @keyframes sun-rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      /* 2. TYPOGRAPHY (Art Nouveau) */
      .ds-hero-title {
        font-family: var(--font-display);
        font-weight: 700;
        font-style: italic;
        color: var(--text-primary);
        text-shadow: 2px 2px 0px rgba(212, 175, 55, 0.2);
        letter-spacing: -0.02em;
      }
      .ds-hero-title span {
        background: linear-gradient(135deg, #D4AF37 0%, #FFA500 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-style: normal;
        font-weight: 900;
      }

      /* 3. PANELS (Organic/Biomorphic Shapes) */
      .solar-panel, .ds-panel, .ds-card, .solar-nav {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(212, 175, 55, 0.3); /* Gold border */
        box-shadow: 
          0 10px 30px -10px rgba(26, 60, 52, 0.1),
          inset 0 0 20px rgba(255, 255, 255, 0.5);
        border-radius: 20px 40px 20px 40px; /* Asymmetric Organic */
        transition: all 0.4s ease;
      }
      
      /* Subtle Leaf Motif Overlay on Panels */
      .solar-panel::before, .ds-panel::before {
         content: "";
         position: absolute;
         top: 0; right: 0;
         width: 60px;
         height: 60px;
         background: 
           radial-gradient(circle at 100% 0%, rgba(46, 139, 87, 0.1) 0%, transparent 70%);
         border-radius: 0 40px 0 100%;
         pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 20px 40px -12px rgba(212, 175, 55, 0.25),
          inset 0 0 0 1px #D4AF37;
        background: rgba(255, 255, 255, 0.9);
      }

      /* 4. BUTTONS (Nature Tech) */
      .solar-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #1A3C34 0%, #2E8B57 100%) !important;
        color: #FDFCF8 !important;
        border-radius: 30px 4px 30px 4px !important; /* Leaf Shape */
        border: 1px solid #4F7942 !important;
        box-shadow: 0 4px 15px rgba(46, 139, 87, 0.3) !important;
        font-family: var(--font-display);
        font-weight: 700 !important;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        padding: 0 32px !important;
        transition: all 0.3s ease !important;
      }
      .solar-btn-primary:hover, .ds-btn-primary:hover {
        background: linear-gradient(135deg, #2E8B57 0%, #D4AF37 100%) !important;
        border-radius: 4px 30px 4px 30px !important; /* Flip shape */
        transform: scale(1.05);
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.4) !important;
      }

      .solar-btn-secondary, .ds-btn-ghost, .ds-btn-secondary {
        background: rgba(212, 175, 55, 0.1) !important;
        color: var(--text-primary) !important;
        border: 1px solid rgba(212, 175, 55, 0.4) !important;
        border-radius: 30px !important;
        font-family: var(--font-display);
        font-weight: 600 !important;
      }
      .solar-btn-secondary:hover, .ds-btn-ghost:hover {
        background: rgba(212, 175, 55, 0.2) !important;
        color: #B8860B !important;
      }

      /* 5. NAVIGATION (Amber Glass) */
      .solar-nav, .ds-navbar {
        background: rgba(253, 252, 248, 0.85);
        border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        margin: 20px;
        width: calc(100% - 40px);
        border-radius: 50px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.05);
      }
      .ds-logo {
        font-family: var(--font-display);
        font-weight: 800;
        color: #1A3C34;
      }
      .ds-logo span {
        color: #D4AF37;
      }

      /* 6. INPUTS (Clean & Organic) */
      .solar-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #D4C4A8 !important;
        border-radius: 12px 24px 12px 24px !important;
        color: var(--text-primary) !important;
        padding: 16px 24px !important;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);
      }
      .ds-input:focus {
        border-color: #2E8B57 !important;
        box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.1) !important;
        background: #FFFEFA !important;
      }
      .ds-input-decorator {
        background: #D4AF37 !important;
        border-radius: 50%;
        width: 10px !important;
        height: 10px !important;
        right: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        position: relative;
      }
      /* Vine Separators */
      .ds-stats > div > div:not(:last-child) {
        border-right: 1px dashed rgba(26, 60, 52, 0.2);
      }
      .ds-stats .text-3xl {
        font-family: var(--font-display);
        color: #B8860B; /* Dark Gold */
      }

      /* 8. TABLE (Botanical List) */
      .ds-table-container {
        background: #FFFFFF !important;
        border: 1px solid #E8E4D9 !important;
        border-radius: 20px !important;
        box-shadow: 0 8px 30px rgba(0,0,0,0.03) !important;
        overflow: hidden;
      }
      .ds-table-container > div:first-child {
        background: #F4F1E8;
        color: #5D756C;
        font-family: var(--font-display);
        font-weight: 700;
        letter-spacing: 0.05em;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(212, 175, 55, 0.05) !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: rgba(46, 139, 87, 0.1) !important;
        color: #2E8B57 !important;
        border: 1px solid rgba(46, 139, 87, 0.2);
        border-radius: 12px 4px 12px 4px;
      }

      /* 9. PRICING CARDS */
      .ds-card {
        background: #FFFFFF !important;
        border: 1px solid #EAE5D5 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #D4AF37 !important;
        background: linear-gradient(180deg, #FFFFFF 0%, #FFFEF0 100%) !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #D4AF37;
        color: #1A3C34;
        font-family: var(--font-display);
        border-bottom-left-radius: 12px;
      }

      /* 10. FOOTER */
      .ds-footer {
        background: #F4F1E8 !important;
        border-top: 1px solid #D4C4A8 !important;
        margin-top: 40px;
        position: relative;
      }
      .ds-footer::before {
         /* Grass/Plant Border top */
         content: "";
         position: absolute;
         top: -10px;
         left: 0; right: 0;
         height: 10px;
         background: repeating-linear-gradient(45deg, #F4F1E8, #F4F1E8 10px, #D4AF37 10px, #D4AF37 11px);
         opacity: 0.3;
      }

      /* 11. BADGE */
      .solar-badge, .ds-badge {
         background: #2E8B57 !important;
         color: #FDFCF8 !important;
         border-radius: 4px 12px 4px 12px !important;
         font-family: var(--font-display);
         letter-spacing: 0.05em;
         box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
    `
  }
};
