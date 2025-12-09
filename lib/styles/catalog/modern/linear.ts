
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'linear')!;

export const linear: StyleCartridge = {
  id: 'linear',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#08090A', // Linear Background
      '--bg-layer-2': '#141518', // Panel Background
      '--text-primary': '#F7F8F8', // High Contrast Text
      '--text-secondary': '#8A8F98', // Muted Text
      '--accent-color': '#5E6AD2', // Linear Purple/Blue
      '--border-radius': '6px', // Tight, precise corners
      '--font-display': '"Inter", -apple-system, sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#08090A]',
      navbar: 'linear-nav',
      container: 'linear-panel',
      buttonPrimary: 'linear-btn-primary',
      buttonSecondary: 'linear-btn-ghost',
      input: 'linear-input',
      badge: 'linear-badge'
    },
    injectCss: `
      /* --- LINEAR AESTHETIC ENGINE --- */

      /* 1. GLOBAL COSMOS */
      .ds-page-root {
        background-color: #08090A;
        /* Subtle Grid */
        background-image: 
          linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        background-size: 40px 40px;
      }

      /* Starfield & Glow */
      .ds-deco-layer::before {
        content: "";
        position: absolute;
        top: -20%;
        left: 20%;
        width: 60%;
        height: 60%;
        background: radial-gradient(circle, rgba(94, 106, 210, 0.15) 0%, transparent 60%);
        filter: blur(80px);
        z-index: -1;
        opacity: 0.6;
        animation: pulse-glow 10s infinite alternate;
      }

      @keyframes pulse-glow {
        0% { opacity: 0.4; transform: scale(0.9); }
        100% { opacity: 0.7; transform: scale(1.1); }
      }

      /* 2. MAGIC BORDER PANELS (The "Linear" Look) */
      .linear-panel, .ds-panel, .ds-card, .linear-nav {
        background: rgba(20, 21, 24, 0.6);
        backdrop-filter: blur(12px);
        border-radius: var(--border-radius);
        position: relative;
        /* The base border is barely visible */
        border: 1px solid rgba(255, 255, 255, 0.08);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
      }
      
      /* The "Shine" on top border */
      .linear-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: inherit;
        padding: 1px; /* border width */
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 600;
        letter-spacing: -0.02em;
        background: linear-gradient(180deg, #FFFFFF 0%, #B4B9C4 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-title span {
        background: linear-gradient(90deg, #5E6AD2, #949EF7);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-nav-links span {
        font-size: 13px;
        color: var(--text-secondary);
        transition: color 0.2s;
      }
      .ds-nav-links span:hover {
        color: var(--text-primary);
      }

      /* 4. BUTTONS (Specular Highlight) */
      .linear-btn-primary, .ds-btn-primary {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%), #5E6AD2 !important;
        color: white !important;
        border: 1px solid rgba(255,255,255,0.08) !important;
        border-radius: 4px !important; /* Slightly more rounded than square */
        font-size: 13px !important;
        font-weight: 500 !important;
        padding: 0 16px !important;
        height: 32px;
        box-shadow: 
          0px 1px 2px rgba(0, 0, 0, 0.4), 
          inset 0px 1px 0px rgba(255, 255, 255, 0.2) !important; /* Top Inner Highlight */
        transition: all 0.2s ease !important;
        text-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }
      .linear-btn-primary:hover, .ds-btn-primary:hover {
        filter: brightness(1.1);
        box-shadow: 
          0px 0px 12px rgba(94, 106, 210, 0.5),
          inset 0px 1px 0px rgba(255, 255, 255, 0.3) !important;
      }

      .linear-btn-ghost, .ds-btn-secondary {
        background: rgba(255,255,255,0.05) !important;
        color: var(--text-secondary) !important;
        border: 1px solid rgba(255,255,255,0.05) !important;
        border-radius: 4px !important;
        font-size: 13px !important;
        height: 32px;
        font-weight: 500 !important;
      }
      .linear-btn-ghost:hover, .ds-btn-secondary:hover {
        background: rgba(255,255,255,0.1) !important;
        color: var(--text-primary) !important;
        border-color: rgba(255,255,255,0.1) !important;
      }

      /* 5. INPUTS (Dark Field) */
      .linear-input, .ds-input {
        background: #0B0B0E !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 6px !important;
        color: var(--text-primary) !important;
        font-size: 14px !important;
        padding: 10px 12px 10px 36px !important; /* Icon space */
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .ds-input:focus {
        border-color: #5E6AD2 !important;
        box-shadow: 0 0 0 1px #5E6AD2 !important;
      }
      .ds-input-decorator {
        left: 10px !important;
        background: var(--text-secondary) !important;
        width: 8px !important;
        height: 8px !important;
        border-radius: 2px !important; /* Square-ish dot */
      }

      /* 6. STATS */
      .ds-stats {
        border-top: 1px solid rgba(255,255,255,0.08);
        border-bottom: 1px solid rgba(255,255,255,0.08);
        background: transparent !important;
      }
      .ds-stats > div > div {
         background: transparent;
         border-right: 1px solid rgba(255,255,255,0.08);
      }
      .ds-stats > div > div:last-child {
         border-right: none;
      }
      .ds-stats .text-3xl {
         color: var(--text-primary);
         font-weight: 500;
         font-family: 'Inter', monospace; /* Tech feel */
      }

      /* 7. DATA TABLE (List View) */
      .ds-table-container {
         background: #141518 !important;
         border: 1px solid rgba(255,255,255,0.08) !important;
         border-radius: 8px !important;
      }
      .ds-table-container > div {
         border-bottom: 1px solid rgba(255,255,255,0.05) !important;
         font-size: 13px;
      }
      .ds-table-container > div:first-child {
         background: rgba(255,255,255,0.03);
         color: var(--text-secondary);
         text-transform: uppercase;
         font-size: 11px;
         letter-spacing: 0.05em;
      }
      /* Hover Row */
      .ds-table-container > div:not(:first-child):hover {
         background: rgba(255,255,255,0.04) !important;
      }
      /* Status Badge */
      .ds-table-container span {
         background: rgba(94, 106, 210, 0.2) !important;
         color: #949EF7 !important;
         border: 1px solid rgba(94, 106, 210, 0.3);
         border-radius: 4px;
         padding: 2px 6px;
         font-size: 11px;
      }

      /* 8. PRICING CARDS */
      .ds-card {
        background: linear-gradient(180deg, #18191D 0%, #141518 100%) !important;
        border: 1px solid rgba(255,255,255,0.08) !important;
      }
      .ds-card:hover {
         transform: translateY(-4px);
         box-shadow: 0 12px 32px rgba(0,0,0,0.4);
         border-color: rgba(255,255,255,0.15) !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
         background: #18191D !important;
         box-shadow: 0 0 0 1px #5E6AD2 !important; /* Glowing Border */
      }
      .ds-card:nth-child(2) .ds-card-title {
         color: #949EF7;
      }

      /* 9. NAVIGATION */
      .linear-nav {
         border-bottom: 1px solid rgba(255,255,255,0.08);
      }

      /* 10. BADGE */
      .linear-badge, .ds-badge {
        background: rgba(255,255,255,0.1) !important;
        color: var(--text-primary) !important;
        border: 1px solid rgba(255,255,255,0.1);
        font-size: 11px !important;
        border-radius: 4px !important;
        padding: 4px 8px;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        font-family: monospace;
      }

      /* 11. FOOTER */
      .ds-footer {
        border-top: 1px solid rgba(255,255,255,0.08) !important;
        background: #08090A !important;
      }
    `
  }
};
