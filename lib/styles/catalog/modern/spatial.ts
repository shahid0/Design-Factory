
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'spatial')!;

export const spatial: StyleCartridge = {
  id: 'spatial',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': 'transparent', // Spatial relies on the "Room" (background image)
      '--bg-layer-2': 'rgba(255, 255, 255, 0.1)',
      '--text-primary': '#FFFFFF',
      '--text-secondary': 'rgba(235, 235, 245, 0.6)', // SF Text Secondary
      '--accent-color': '#FFFFFF', // Spatial usually uses white/glass as primary, or specific brand colors
      '--border-radius': '32px', // Continuous curvature
      '--font-display': '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Inter", sans-serif',
    },
    elementClasses: {
      stage: 'spatial-stage',
      navbar: 'spatial-glass',
      container: 'spatial-glass',
      buttonPrimary: 'spatial-btn-primary',
      buttonSecondary: 'spatial-btn-secondary',
      input: 'spatial-input',
      badge: 'spatial-badge'
    },
    injectCss: `
      /* --- SPATIAL COMPUTING ENGINE --- */

      /* 1. THE ROOM (Passthrough Simulation) */
      .spatial-stage {
        background: #000;
        perspective: 1000px;
        /* Overflow handled by parent StyleMannequin via prop removal if needed, or global style */
      }
      
      /* Simulated Environment */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        inset: -10%;
        background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop');
        background-size: cover;
        background-position: center;
        filter: blur(20px) brightness(0.6);
        transform: scale(1.1);
        z-index: -2;
        position: fixed; /* Fix background during scroll */
      }
      
      /* Vignette for focus */
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        inset: 0;
        background: radial-gradient(circle at 50% 50%, transparent 40%, #000000 120%);
        pointer-events: none;
        z-index: -1;
        position: fixed; /* Fix vignette during scroll */
      }

      /* 2. GLASS MATERIAL (The "Platter") */
      .spatial-glass, .ds-panel, .ds-card, .spatial-nav {
        background: rgba(128, 128, 128, 0.15); /* Glass Base */
        backdrop-filter: blur(50px) saturate(110%);
        -webkit-backdrop-filter: blur(50px) saturate(110%);
        border-radius: var(--border-radius);
        
        /* Physical Edge / Rim Light */
        box-shadow: 
          inset 0 0 0 1px rgba(255, 255, 255, 0.2), /* Inner Rim */
          0 20px 40px rgba(0, 0, 0, 0.4); /* Deep Shadow */
          
        border: none;
        color: var(--text-primary);
        transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), background 0.3s;
      }

      /* Gaze/Hover State - The "Lift" */
      .spatial-glass:hover, .ds-panel:hover, .ds-card:hover {
        transform: translateZ(20px) scale(1.02);
        background: rgba(180, 180, 180, 0.25);
        box-shadow: 
          inset 0 0 0 1px rgba(255, 255, 255, 0.4),
          0 40px 80px rgba(0, 0, 0, 0.5);
        z-index: 50;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 600;
        color: white;
        text-shadow: 0 4px 12px rgba(0,0,0,0.5);
      }
      .ds-hero-title span {
        /* No gradient, just pure white or specific tint */
        color: white;
        text-shadow: 0 0 20px rgba(255,255,255,0.4);
      }

      /* 4. BUTTONS (Volumetric) */
      .spatial-btn-primary, .ds-btn-primary {
        background: rgba(255, 255, 255, 0.9) !important;
        color: black !important;
        border-radius: 100px !important;
        font-weight: 600 !important;
        padding: 14px 28px !important;
        border: none !important;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2) !important;
        transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1) !important;
      }
      .spatial-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.05) translateZ(10px) !important;
        box-shadow: 0 8px 20px rgba(0,0,0,0.3) !important;
      }
      .spatial-btn-primary:active, .ds-btn-primary:active {
        transform: scale(0.95) !important;
        background: rgba(255, 255, 255, 0.7) !important;
      }

      .spatial-btn-secondary, .ds-btn-secondary {
        background: rgba(255, 255, 255, 0.1) !important;
        backdrop-filter: blur(20px);
        color: white !important;
        border-radius: 100px !important;
        border: none !important;
        font-weight: 500 !important;
        /* Inner rim */
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2) !important;
      }
      .spatial-btn-secondary:hover {
        background: rgba(255, 255, 255, 0.2) !important;
        color: white !important;
      }

      /* 5. NAVIGATION (Floating Bar) */
      .spatial-nav, .ds-navbar {
        margin: 24px auto;
        width: auto !important;
        display: inline-flex;
        padding: 16px 32px;
        /* Centered in view usually */
        left: 50%;
        transform: translateX(-50%);
        position: relative; 
      }
      /* Override standard navbar layout to look like a bottom/top bar */
      .ds-navbar {
         justify-content: center;
         gap: 40px;
      }
      .ds-nav-links {
         gap: 32px;
      }
      .ds-nav-links span {
         opacity: 0.8;
         transition: opacity 0.2s, transform 0.2s;
         font-weight: 500;
      }
      .ds-nav-links span:hover {
         opacity: 1;
         transform: scale(1.1);
         text-shadow: 0 0 10px rgba(255,255,255,0.5);
      }

      /* 6. INPUTS (Glass Field) */
      .spatial-input, .ds-input {
        background: rgba(0, 0, 0, 0.2) !important;
        border-radius: 100px !important; /* Pill shape inputs common in spatial */
        border: none !important;
        color: white !important;
        padding-left: 48px !important;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1) !important;
        transition: background 0.2s;
      }
      .ds-input:focus {
        background: rgba(0, 0, 0, 0.4) !important;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.3) !important;
      }
      .ds-input-decorator {
        left: 16px !important;
        background: white !important;
        opacity: 0.8;
        box-shadow: 0 0 10px white;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.05);
        border-radius: 20px;
        padding: 20px;
        /* Rim */
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
        backdrop-filter: blur(20px);
      }
      .ds-stats .text-3xl {
        font-weight: 500;
        text-shadow: 0 2px 10px rgba(0,0,0,0.5);
      }

      /* 8. TABLE */
      .ds-table-container {
        background: rgba(128, 128, 128, 0.1) !important;
        backdrop-filter: blur(40px) !important;
        border: none !important;
        box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15) !important;
        overflow: hidden;
      }
      .ds-table-container > div {
        border-bottom: 1px solid rgba(255,255,255,0.1) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.05);
        color: rgba(255,255,255,0.6);
        font-weight: 600;
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 1px;
      }
      /* Row Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.1) !important;
      }
      
      /* 9. PRICING CARDS */
      .ds-card {
        background: rgba(255,255,255,0.05) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: rgba(255,255,255,0.1) !important;
        transform: translateZ(20px) scale(1.05);
        box-shadow: 0 30px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.3) !important;
      }
      .ds-card:nth-child(2):hover {
         transform: translateZ(40px) scale(1.08);
      }
      
      /* PRICING BUTTONS */
      .ds-card-btn {
         background: rgba(255,255,255,0.15) !important;
         color: #FFFFFF !important;
         border-radius: 100px !important;
         font-weight: 600 !important;
         border: 1px solid rgba(255,255,255,0.1) !important;
      }
      .ds-card-btn:hover {
         background: rgba(255,255,255,0.3) !important;
         box-shadow: 0 0 15px rgba(255,255,255,0.2);
      }
      
      /* Popular Plan Button (Middle) */
      .ds-card:nth-child(2) .ds-card-btn {
         background: #FFFFFF !important;
         color: #000000 !important;
         box-shadow: 0 2px 10px rgba(0,0,0,0.2);
         border: none !important;
      }
      .ds-card:nth-child(2) .ds-card-btn:hover {
         transform: scale(1.02);
         box-shadow: 0 5px 15px rgba(255,255,255,0.4);
      }

      /* 10. ICONS & BADGES */
      .spatial-badge, .ds-badge {
         background: rgba(255,255,255,0.2) !important;
         color: white !important;
         backdrop-filter: blur(10px);
         border-radius: 100px !important;
         padding: 6px 16px;
         font-weight: 600;
         border: 1px solid rgba(255,255,255,0.1);
      }
      
      .ds-panel svg {
         filter: drop-shadow(0 0 8px rgba(255,255,255,0.5));
      }

      /* 11. FOOTER */
      .ds-footer {
         background: transparent !important;
         border-top: none !important;
         /* A simple divider instead */
         background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent) !important;
         background-size: 100% 1px !important;
         background-repeat: no-repeat !important;
         background-position: top center !important;
      }
    `
  }
};
