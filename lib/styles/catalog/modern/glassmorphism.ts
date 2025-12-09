
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'glassmorphism')!;

export const glassmorphism: StyleCartridge = {
  id: 'glassmorphism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': 'rgba(255, 255, 255, 0.03)',
      '--bg-layer-2': 'rgba(255, 255, 255, 0.05)',
      '--text-primary': '#ffffff',
      '--text-secondary': 'rgba(255, 255, 255, 0.65)',
      '--accent-color': '#a5f3fc', // Cyan glare
      '--border-radius': '24px',
      '--font-display': '"Inter", -apple-system, sans-serif',
    },
    elementClasses: {
      stage: 'bg-black',
      navbar: 'crystal-panel',
      container: 'crystal-panel',
      buttonPrimary: 'crystal-btn-primary',
      buttonSecondary: 'crystal-btn-ghost',
      input: 'crystal-input',
      badge: 'crystal-badge'
    },
    injectCss: `
      /* --- VISION GLASS ENGINE --- */

      /* 1. DYNAMIC MESH BACKGROUND */
      .ds-page-root {
        background: #000;
        position: relative;
        z-index: 1;
      }
      
      .ds-deco-layer::before, .ds-deco-layer::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0; 
        left: 0;
        z-index: -2;
        background: 
          radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
          radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
          radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        background-size: 200% 200%;
        animation: aurora 15s ease infinite;
        opacity: 0.6;
      }
      
      /* Vivid Orbs */
      .ds-page-root::before {
        content: '';
        position: absolute;
        top: 20%;
        left: 30%;
        width: 600px;
        height: 600px;
        background: conic-gradient(from 0deg at 50% 50%, #ff0080, #7928ca, #ff0080);
        filter: blur(100px);
        border-radius: 50%;
        animation: spin-glow 10s linear infinite;
        z-index: -1;
        opacity: 0.4;
      }

      @keyframes aurora {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      @keyframes spin-glow {
        0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
        50% { transform: translate(-20%, -20%) rotate(180deg) scale(1.2); }
        100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
      }

      /* 2. CRYSTAL MATERIAL (The Core) */
      .crystal-panel, .ds-panel, .ds-card, .ds-navbar, .ds-footer {
        /* Base Material */
        background: rgba(20, 20, 20, 0.4);
        backdrop-filter: blur(24px) saturate(180%);
        -webkit-backdrop-filter: blur(24px) saturate(180%);
        
        /* The Prismatic Border */
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 1px solid rgba(255, 255, 255, 0.3);
        border-left: 1px solid rgba(255, 255, 255, 0.3);
        
        /* Inner Glow (Specular Highlight) */
        box-shadow: 
          inset 0 1px 0 0 rgba(255, 255, 255, 0.2), 
          0 20px 40px rgba(0,0,0,0.4);
          
        border-radius: var(--border-radius);
      }
      
      /* Noise Texture Overlay */
      .crystal-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        inset: 0;
        z-index: -1;
        opacity: 0.07;
        pointer-events: none;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        border-radius: inherit;
      }

      /* 3. HERO TEXT (Refractive) */
      .ds-hero-title {
        color: white;
        text-shadow: 0 0 20px rgba(255,255,255,0.3);
        letter-spacing: -2px;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #fff, #a5f3fc);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* 4. BUTTONS (Luminous) */
      .crystal-btn-primary, .ds-btn-primary {
         background: rgba(255, 255, 255, 0.1);
         border: 1px solid rgba(255, 255, 255, 0.4);
         box-shadow: 
           0 0 15px rgba(255, 255, 255, 0.1), 
           inset 0 0 10px rgba(255, 255, 255, 0.1);
         backdrop-filter: blur(10px);
         color: white;
         text-transform: uppercase;
         letter-spacing: 1px;
         font-weight: 600;
         transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      }
      .crystal-btn-primary:hover, .ds-btn-primary:hover {
         background: rgba(255, 255, 255, 0.2);
         box-shadow: 
           0 0 30px rgba(255, 255, 255, 0.3), 
           inset 0 0 20px rgba(255, 255, 255, 0.2);
         border-color: #fff;
         transform: scale(1.02);
      }

      .crystal-btn-ghost, .ds-btn-secondary {
         background: transparent;
         border: 1px solid rgba(255,255,255,0.15);
         color: rgba(255,255,255,0.6);
      }
      .crystal-btn-ghost:hover {
         border-color: white;
         color: white;
         background: rgba(255,255,255,0.05);
      }

      /* 5. INPUTS (Deep Glass) */
      .crystal-input, .ds-input {
         background: rgba(0, 0, 0, 0.3) !important;
         box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
         border: 1px solid rgba(255,255,255,0.1) !important;
         border-radius: 16px !important;
         color: white !important;
         padding-left: 50px !important; /* Space for decorator */
      }
      .ds-input:focus {
         border-color: rgba(255,255,255,0.5) !important;
         background: rgba(0,0,0,0.5) !important;
         box-shadow: inset 0 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(255,255,255,0.1) !important;
      }
      .ds-input-decorator {
         left: 16px !important;
         background: white !important;
         box-shadow: 0 0 10px white;
      }

      /* 6. STATS (Floating Islands) */
      .ds-stats {
         background: transparent !important;
         border-top: 1px solid rgba(255,255,255,0.1);
         border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      .ds-stats > div > div {
         background: rgba(255,255,255,0.03);
         border: 1px solid rgba(255,255,255,0.05);
         border-radius: 20px;
         padding: 20px;
         transition: transform 0.3s;
      }
      .ds-stats > div > div:hover {
         background: rgba(255,255,255,0.08);
         border-color: rgba(255,255,255,0.2);
         transform: translateY(-5px);
      }

      /* 7. DATA TABLE */
      .ds-table-container {
         background: rgba(0,0,0,0.2) !important;
      }
      .ds-table-container > div:first-child {
         border-bottom: 1px solid rgba(255,255,255,0.1) !important;
         background: rgba(255,255,255,0.02);
      }
      .ds-table-container > div:not(:first-child) {
         border-bottom: 1px solid rgba(255,255,255,0.05) !important;
      }
      .ds-table-container > div:not(:first-child):hover {
         background: rgba(255,255,255,0.1) !important;
         backdrop-filter: blur(10px);
      }
      /* Status Pill */
      .ds-table-container span {
         background: rgba(165, 243, 252, 0.1) !important;
         border: 1px solid rgba(165, 243, 252, 0.3);
         color: #a5f3fc !important;
         box-shadow: 0 0 10px rgba(165, 243, 252, 0.1);
      }

      /* 8. PRICING */
      .ds-card {
         transition: transform 0.3s ease, box-shadow 0.3s ease;
      }
      .ds-card:hover {
         transform: translateY(-10px) scale(1.02);
         box-shadow: 0 25px 50px rgba(0,0,0,0.5);
         border-color: rgba(255,255,255,0.3);
      }
      /* Popular Card */
      .ds-card.selected, .ds-card:nth-child(2) {
         background: rgba(255,255,255,0.08);
         border: 1px solid rgba(255,255,255,0.3);
         box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      }
      .ds-card.selected::after, .ds-card:nth-child(2)::after {
         content: '';
         position: absolute;
         top: 0; left: 0; right: 0; height: 1px;
         background: linear-gradient(90deg, transparent, white, transparent);
      }

      /* FIX: PRICING BUTTON CONTRAST */
      .ds-card button {
         /* Standard buttons */
         background: rgba(255,255,255,0.1) !important;
         color: rgba(255,255,255,0.8) !important;
         border: 1px solid rgba(255,255,255,0.1) !important;
         font-weight: 700;
         letter-spacing: 1px;
      }
      .ds-card button:hover {
         background: rgba(255,255,255,0.2) !important;
         color: white !important;
         border-color: rgba(255,255,255,0.4) !important;
      }
      
      /* Popular Button (Middle) */
      .ds-card.selected button, .ds-card:nth-child(2) button {
         background: var(--accent-color) !important;
         color: #000000 !important; /* Force black for contrast against Cyan */
         font-weight: 900;
         box-shadow: 0 0 15px rgba(165, 243, 252, 0.4);
         border: none !important;
      }
      .ds-card.selected button:hover, .ds-card:nth-child(2) button:hover {
         background: #fff !important;
         box-shadow: 0 0 25px rgba(255,255,255,0.6);
         color: #000 !important;
      }

      /* 9. BADGE & ICONS */
      .crystal-badge {
         background: rgba(255,255,255,0.1);
         border: 1px solid rgba(255,255,255,0.2);
         color: white;
      }
      
      /* 10. FOOTER */
      .ds-footer {
         border-top: 1px solid rgba(255,255,255,0.1);
         background: rgba(0,0,0,0.4);
      }

      /* 11. TOGGLES (Frosted Switch) */
      .mannequin-toggle-track {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.5);
      }
      .mannequin-toggle-track.active {
        background: rgba(165, 243, 252, 0.2);
        border-color: #a5f3fc;
        box-shadow: 0 0 15px rgba(165, 243, 252, 0.3);
      }
      .mannequin-toggle-thumb {
        background: #fff;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
      }
      
      /* 12. TABS */
      .ds-nav-links span {
         color: rgba(255,255,255,0.6);
         transition: all 0.3s;
         padding: 8px 16px;
         border-radius: 99px;
      }
      .ds-nav-links span:hover, .ds-nav-links span.active {
         color: white;
         background: rgba(255,255,255,0.1);
         box-shadow: 0 0 15px rgba(255,255,255,0.1);
         text-shadow: 0 0 10px white;
      }
    `
  }
};
