
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'linear')!;

export const linear: StyleCartridge = {
  id: 'linear',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0B0C0E', // Darker background
      '--bg-layer-2': '#131418', // Panel background
      '--text-primary': '#EEEEF0',
      '--text-secondary': '#8A8F98',
      '--accent-color': '#5E6AD2', // Linear Purple
      '--border-radius': '6px', 
      '--font-display': '"Inter", -apple-system, sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#0B0C0E]',
      navbar: 'linear-nav',
      container: 'linear-panel',
      buttonPrimary: 'linear-btn-primary',
      buttonSecondary: 'linear-btn-ghost',
      input: 'linear-input',
      badge: 'linear-badge'
    },
    injectCss: `
      /* --- LINEAR PRESTIGE ENGINE --- */

      .ds-page-root {
        background-color: var(--bg-layer-1);
        background-image: radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120,119,198,0.15), transparent);
      }

      /* 1. MAGIC BORDERS (Masked Gradient) */
      .linear-panel, .ds-panel, .ds-card, .linear-nav {
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.0));
        border-radius: var(--border-radius);
        position: relative;
        /* The base border */
        border: 1px solid rgba(255,255,255,0.08);
        box-shadow: 0px 4px 8px rgba(0,0,0,0.2);
        transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
      }

      /* Top Highlight Border */
      .linear-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        inset: -1px;
        border-radius: inherit;
        padding: 1px;
        background: linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0));
        -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-2px);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01));
        box-shadow: 0px 8px 16px rgba(0,0,0,0.3);
      }

      /* 2. GLOWING BUTTONS */
      .linear-btn-primary, .ds-btn-primary {
        position: relative;
        background: #5E6AD2 !important;
        color: #fff !important;
        font-weight: 500 !important;
        font-size: 13px !important;
        height: 32px;
        padding: 0 16px !important;
        border-radius: 4px !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        /* Top inner glow */
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.3) !important;
        transition: all 0.2s !important;
        overflow: hidden;
      }
      .linear-btn-primary:hover, .ds-btn-primary:hover {
        background: #6e79d6 !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.3), 0 0 15px rgba(94, 106, 210, 0.6) !important;
      }
      /* Shine Sweep */
      .linear-btn-primary::after, .ds-btn-primary::after {
        content: "";
        position: absolute;
        top: 0; left: -100%; width: 50%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transform: skewX(-20deg);
        animation: shimmer 3s infinite;
      }
      @keyframes shimmer {
        0% { left: -100%; }
        20% { left: 200%; }
        100% { left: 200%; }
      }

      .linear-btn-ghost, .ds-btn-secondary {
        background: rgba(255,255,255,0.05) !important;
        color: #ccc !important;
        border: 1px solid transparent !important;
        font-size: 13px !important;
        height: 32px;
        border-radius: 4px !important;
        transition: all 0.2s;
      }
      .linear-btn-ghost:hover, .ds-btn-secondary:hover {
        background: rgba(255,255,255,0.1) !important;
        color: #fff !important;
      }

      /* 3. INPUTS (Deep Field) */
      .linear-input, .ds-input {
        background: #08080A !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        color: #fff !important;
        font-size: 13px !important;
        border-radius: 6px !important;
        padding-left: 36px !important;
        transition: border-color 0.2s, box-shadow 0.2s;
      }
      .ds-input:focus {
        border-color: #5E6AD2 !important;
        box-shadow: 0 0 0 4px rgba(94, 106, 210, 0.15) !important;
      }
      .ds-input-decorator {
        background: #5E6AD2 !important;
        border-radius: 2px !important;
        left: 10px !important;
        width: 6px !important; height: 6px !important;
        box-shadow: 0 0 8px #5E6AD2;
      }

      /* 4. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 500;
        letter-spacing: -0.02em;
        background: linear-gradient(to bottom, #fff, #8a8f98);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #5E6AD2, #A0A6F0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* 5. TABLE / LISTS */
      .ds-table-container {
        border: 1px solid rgba(255,255,255,0.08) !important;
        background: #131418 !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(255,255,255,0.02);
        color: #8A8F98;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255,255,255,0.04) !important;
      }
      
      /* Status Pill */
      .ds-table-container span {
        background: rgba(94, 106, 210, 0.15) !important;
        color: #949EF7 !important;
        border: 1px solid rgba(94, 106, 210, 0.2);
        font-size: 11px;
        padding: 2px 8px;
        border-radius: 4px;
      }

      /* 6. POPULAR CARD */
      .ds-card:nth-child(2) {
        background: radial-gradient(circle at 50% 0%, rgba(94, 106, 210, 0.1), transparent 60%), #131418 !important;
        border: 1px solid #5E6AD2 !important;
        box-shadow: 0 0 30px rgba(94, 106, 210, 0.15) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #fff;
      }
    `
  }
};
