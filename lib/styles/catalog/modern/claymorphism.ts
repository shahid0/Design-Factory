
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'claymorphism')!;

export const claymorphism: StyleCartridge = {
  id: 'claymorphism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#ffffff',
      '--bg-layer-2': '#f0f4f8',
      '--text-primary': '#48566a',
      '--text-secondary': '#94a3b8',
      '--accent-color': '#6366f1', // Indigo
      '--border-radius': '32px',
      '--font-display': '"Varela Round", "Nunito", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#f0f4f8]',
      navbar: 'clay-nav',
      container: 'clay-card',
      buttonPrimary: 'clay-btn-primary',
      buttonSecondary: 'clay-btn-ghost',
      input: 'clay-input',
      badge: 'clay-badge'
    },
    injectCss: `
      /* --- CLAYMORPHISM ENGINE --- */

      /* 1. GLOBAL ATMOSPHERE */
      .ds-page-root {
        background-color: #f0f4f8;
        color: var(--text-primary);
      }
      
      /* Floating Bubbles Background */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        top: -10%;
        left: -10%;
        width: 50vw;
        height: 50vw;
        background: radial-gradient(circle at 50% 50%, #c7d2fe 0%, rgba(199, 210, 254, 0) 70%);
        opacity: 0.6;
        z-index: -1;
        animation: float-slow 20s infinite alternate ease-in-out;
      }
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        bottom: -10%;
        right: -10%;
        width: 60vw;
        height: 60vw;
        background: radial-gradient(circle at 50% 50%, #fecaca 0%, rgba(254, 202, 202, 0) 70%);
        opacity: 0.5;
        z-index: -1;
        animation: float-slow 25s infinite alternate-reverse ease-in-out;
      }

      @keyframes float-slow {
        0% { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
      }

      /* 2. THE CLAY MATERIAL (Cards & Panels) */
      .clay-card, .ds-panel, .ds-card, .clay-nav {
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(20px);
        border-radius: var(--border-radius);
        
        /* The Signature Clay Shadow: Two drop shadows + Inset highlight */
        box-shadow: 
          16px 16px 32px #d1d9e6, 
          -16px -16px 32px #ffffff,
          inset 2px 2px 4px rgba(255, 255, 255, 1),
          inset -2px -2px 4px rgba(0, 0, 0, 0.05);
          
        border: 2px solid rgba(255, 255, 255, 0.6);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      /* 3. HERO TYPOGRAPHY */
      .ds-hero-title {
        color: var(--text-primary);
        letter-spacing: -0.05em;
        text-shadow: 2px 2px 0px rgba(255,255,255,0.5);
      }
      .ds-hero-title span {
        background: linear-gradient(135deg, var(--accent-color), #ec4899);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 900;
      }

      /* 4. NAVIGATION */
      .clay-nav {
        background: rgba(255,255,255,0.9);
        margin: 20px 20px 0 20px;
        width: auto !important;
        border-radius: 40px;
        border: 4px solid white;
      }
      /* Nav Logo */
      .ds-logo {
        font-weight: 900;
        color: var(--accent-color);
        text-shadow: 1px 1px 0px rgba(255,255,255,1);
      }
      
      /* 5. BUTTONS (Inflated) */
      .clay-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 50px !important;
        font-weight: 800 !important;
        letter-spacing: 0.05em;
        border: 4px solid rgba(255,255,255,0.2) !important;
        
        /* Deep 3D Button */
        box-shadow: 
          8px 8px 16px rgba(99, 102, 241, 0.4),
          -8px -8px 16px rgba(255, 255, 255, 0.8),
          inset 4px 4px 8px rgba(255, 255, 255, 0.4),
          inset -4px -4px 8px rgba(0, 0, 0, 0.1) !important;
          
        transition: all 0.2s ease !important;
      }
      
      .clay-btn-primary:hover, .ds-btn-primary:hover {
        transform: translateY(-4px) scale(1.02) !important;
        box-shadow: 
          12px 12px 24px rgba(99, 102, 241, 0.3),
          -12px -12px 24px rgba(255, 255, 255, 0.9),
          inset 4px 4px 8px rgba(255, 255, 255, 0.4),
          inset -4px -4px 8px rgba(0, 0, 0, 0.1) !important;
      }
      
      .clay-btn-primary:active, .ds-btn-primary:active {
        transform: translateY(0) !important;
        /* Pressed state */
        box-shadow: 
          inset 6px 6px 12px rgba(0, 0, 0, 0.2),
          inset -6px -6px 12px rgba(255, 255, 255, 0.4) !important;
      }

      .clay-btn-ghost, .ds-btn-secondary {
        background: white !important;
        color: var(--text-primary) !important;
        border-radius: 50px !important;
        border: none !important;
        box-shadow: 
          6px 6px 12px #d1d9e6, 
          -6px -6px 12px #ffffff !important;
      }
      .clay-btn-ghost:hover, .ds-btn-secondary:hover {
        transform: translateY(-2px);
        color: var(--accent-color) !important;
      }

      /* 6. INPUTS (Pressed / Concave) */
      .clay-input, .ds-input {
        background: #f0f4f8 !important;
        border-radius: 20px !important;
        border: none !important;
        color: var(--text-primary) !important;
        padding: 16px 24px !important;
        font-weight: 600;
        
        /* Deep Inset Shadow */
        box-shadow: 
          inset 6px 6px 12px #d1d9e6, 
          inset -6px -6px 12px #ffffff !important;
        
        transition: all 0.2s;
      }
      .ds-input:focus {
        box-shadow: 
          inset 4px 4px 8px #d1d9e6, 
          inset -4px -4px 8px #ffffff,
          0 0 0 4px rgba(99, 102, 241, 0.2) !important;
      }
      /* Input Icon Decorator */
      .ds-input-decorator {
        right: 16px !important;
        background: var(--accent-color) !important;
        width: 12px !important;
        height: 12px !important;
        box-shadow: 2px 2px 4px rgba(0,0,0,0.2);
      }

      /* 7. STATS ROW */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #fff;
        border-radius: 24px;
        padding: 24px;
        text-align: center;
        /* Small Clay Shadow */
        box-shadow: 
          8px 8px 16px #d1d9e6, 
          -8px -8px 16px #ffffff;
      }
      .ds-stats span:first-child {
         font-weight: 800;
         color: var(--text-secondary);
         text-transform: uppercase;
         letter-spacing: 0.1em;
      }

      /* 8. DATA TABLE */
      .ds-table-container {
        background: white !important;
        border: none !important;
        border-radius: 32px !important;
        padding: 12px !important;
        box-shadow: 
          12px 12px 24px #d1d9e6, 
          -12px -12px 24px #ffffff !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #f0f4f8 !important;
      }
      .ds-table-container > div:first-child {
        background: #f8fafc;
        border-radius: 16px;
        margin-bottom: 8px;
        color: var(--text-secondary);
      }
      /* Hover Row Effect - Pop up */
      .ds-table-container > div:not(:first-child):hover {
        background: var(--accent-color) !important;
        color: white !important;
        transform: scale(1.02);
        border-radius: 16px;
        box-shadow: 0 10px 20px rgba(99, 102, 241, 0.3);
        z-index: 10;
      }
      /* Ensure text color changes on hover */
      .ds-table-container > div:not(:first-child):hover * {
         color: white !important;
      }
      /* Status Pill */
      .ds-table-container span {
         background: #e0e7ff !important;
         color: var(--accent-color) !important;
         border-radius: 50px;
         padding: 4px 12px;
         font-weight: 800;
      }

      /* 9. PRICING CARDS */
      .ds-pricing {
         padding-top: 40px;
      }
      .ds-card {
        background: white !important;
        border: 4px solid white !important;
      }
      .ds-card:hover {
        transform: translateY(-10px);
        box-shadow: 
          24px 24px 48px #d1d9e6, 
          -24px -24px 48px #ffffff;
      }
      
      /* Popular Card (Middle) */
      .ds-card:nth-child(2) {
        border-color: var(--accent-color) !important;
        transform: scale(1.05);
        z-index: 10;
      }
      .ds-card:nth-child(2):hover {
        transform: scale(1.05) translateY(-10px);
      }
      
      .ds-card button {
        border-radius: 16px !important;
        font-weight: 800;
        box-shadow: 
          6px 6px 12px #d1d9e6, 
          -6px -6px 12px #ffffff !important;
      }
      .ds-card button:hover {
         transform: translateY(-2px);
         box-shadow: 
           8px 8px 16px #d1d9e6, 
           -8px -8px 16px #ffffff !important;
      }

      /* 10. BADGE */
      .clay-badge, .ds-badge {
         background: #ec4899 !important;
         color: white !important;
         border-radius: 50px !important;
         box-shadow: 
           4px 4px 8px rgba(236, 72, 153, 0.3),
           inset 2px 2px 4px rgba(255,255,255,0.4);
      }

      /* 11. FOOTER */
      .ds-footer {
         margin-top: 60px;
         background: white !important;
         border-top: none !important;
         box-shadow: 0 -10px 40px rgba(0,0,0,0.03);
         border-radius: 40px 40px 0 0;
      }
    `
  }
};
