
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'fluent')!;

export const fluent: StyleCartridge = {
  id: 'fluent',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F3F3F3', // Mica Alt
      '--bg-layer-2': '#FFFFFF', // Solid Surface
      '--text-primary': '#202020', // Primary Text
      '--text-secondary': '#5d5d5d', // Secondary Text
      '--accent-color': '#0078D4', // Windows Blue
      '--border-radius': '8px', // WinUI 3 Standard
      '--font-display': '"Segoe UI Variable", "Segoe UI", "Segoe", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#F3F3F3]',
      navbar: 'fluent-acrylic',
      container: 'fluent-card',
      buttonPrimary: 'fluent-btn-primary',
      buttonSecondary: 'fluent-btn-standard',
      input: 'fluent-input',
      badge: 'fluent-badge'
    },
    injectCss: `
      /* --- FLUENT DESIGN (WINUI 3) --- */

      /* 1. TYPOGRAPHY & BASE */
      .ds-page-root {
        font-family: var(--font-display);
        -webkit-font-smoothing: antialiased;
      }

      /* 2. MATERIALS: MICA & ACRYLIC */
      .fluent-acrylic, .ds-navbar {
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(30px) saturate(125%);
        -webkit-backdrop-filter: blur(30px) saturate(125%);
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }

      /* 3. HERO */
      .ds-hero {
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
      .ds-hero-title {
        font-weight: 600;
        letter-spacing: -0.5px;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
      }

      /* 4. BUTTONS (Standard & Accent) */
      
      /* Accent Button */
      .fluent-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: white !important;
        border-radius: 4px !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        padding: 6px 20px !important;
        border: 1px solid transparent !important;
        /* Slight elevation */
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        transition: all 0.1s ease;
      }
      .fluent-btn-primary:hover, .ds-btn-primary:hover {
        background: #006CC1 !important; /* Slightly Darker */
        transform: scale(1.0); /* Fluent doesn't scale much */
        box-shadow: 0 2px 4px rgba(0,0,0,0.15);
      }
      .fluent-btn-primary:active, .ds-btn-primary:active {
        background: #005A9E !important;
        color: rgba(255,255,255,0.8) !important;
        transform: scale(0.98);
      }

      /* Standard Button */
      .fluent-btn-standard, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: var(--text-primary) !important;
        border: 1px solid #D1D1D1 !important; /* Neutral Border */
        border-bottom: 1px solid #CCCCCC !important; /* Slightly thicker bottom */
        border-radius: 4px !important;
        font-weight: 400 !important;
        font-size: 14px !important;
        padding: 6px 20px !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }
      .fluent-btn-standard:hover, .ds-btn-secondary:hover {
        background: #F6F6F6 !important;
        border-color: #C1C1C1 !important;
      }
      .fluent-btn-standard:active, .ds-btn-secondary:active {
        background: #F0F0F0 !important;
        transform: scale(0.98);
        border-color: #D1D1D1 !important;
        box-shadow: none;
      }

      /* 5. CARDS (Layer on Mica) */
      .fluent-card, .ds-panel, .ds-card {
        background: #FFFFFF;
        border: 1px solid rgba(0,0,0,0.05);
        border-radius: 8px; /* Win11 Rounded */
        box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        transition: transform 0.2s, box-shadow 0.2s;
        overflow: hidden;
      }
      
      /* "Reveal Highlight" Simulation on Hover */
      /* We use a radial gradient on the border/background to simulate light */
      .fluent-card:hover, .ds-panel:hover {
         box-shadow: 0 8px 16px rgba(0,0,0,0.08);
         border-color: rgba(0,0,0,0.1);
         background-image: radial-gradient(circle at 50% 0%, rgba(0,0,0,0.02), transparent 70%);
      }
      
      /* Icons */
      .ds-panel svg {
         color: var(--accent-color);
         stroke-width: 1.5px;
      }

      /* 6. INPUTS (Text Box) */
      .fluent-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #D1D1D1 !important;
        border-bottom: 1px solid #8A8886 !important; /* Stronger bottom border */
        border-radius: 4px !important;
        height: 32px;
        font-size: 14px !important;
        color: var(--text-primary) !important;
        padding: 6px 12px 6px 36px !important;
        transition: all 0.1s;
      }
      .ds-input:hover {
        background: #FDFDFD !important;
        border-color: #C1C1C1 !important;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: var(--accent-color) !important;
        border-bottom-width: 2px !important; /* Accent underline */
        box-shadow: none !important;
      }
      .ds-input-decorator {
         color: var(--text-secondary) !important;
         background: transparent !important;
         width: auto !important; height: auto !important;
         left: 10px !important;
      }
      .ds-input-decorator::after {
         content: ""; /* Segoe MDL2 Search Icon */
         font-family: "Segoe MDL2 Assets", "Segoe UI Symbol";
         font-style: normal;
         font-size: 12px;
      }

      /* 7. NAVIGATION */
      .ds-navbar {
         border-radius: 0 !important; /* Top bar spans full width usually */
         margin: 0 !important;
         width: 100% !important;
         padding: 12px 24px;
         justify-content: space-between;
      }
      .ds-logo {
         font-weight: 600;
      }
      .ds-nav-links span {
         font-size: 14px;
         font-weight: 400;
         padding: 4px 12px;
         border-radius: 4px;
      }
      .ds-nav-links span:hover {
         background: rgba(0,0,0,0.05);
      }

      /* 8. TABLE (DataGrid) */
      .ds-table-container {
         background: #FFFFFF !important;
         border: 1px solid #E5E5E5 !important;
         border-radius: 8px !important;
         box-shadow: 0 2px 4px rgba(0,0,0,0.02) !important;
      }
      .ds-table-container > div {
         border-bottom: 1px solid #F0F0F0 !important;
      }
      .ds-table-container > div:first-child {
         background: #FAFAFA;
         font-weight: 600;
         color: var(--text-secondary);
         font-size: 12px;
      }
      /* Row Selection Style */
      .ds-table-container > div:not(:first-child):hover {
         background: #F6F6F6 !important;
      }
      /* Status */
      .ds-table-container span {
         background: #DFF6DD !important; /* Success Green Light */
         color: #107C10 !important; /* Success Green Dark */
         border: 1px solid transparent;
         border-radius: 100px;
         font-weight: 600;
         font-size: 12px;
      }

      /* 9. STATS */
      .ds-stats {
         background: transparent !important;
         border: none !important;
      }
      .ds-stats > div > div {
         background: #FFFFFF;
         border-radius: 8px;
         border: 1px solid rgba(0,0,0,0.05);
         padding: 20px;
         box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      }
      .ds-stats .text-3xl {
         font-weight: 600;
         color: var(--text-primary);
      }

      /* 10. PRICING CARDS */
      /* Popular Card Highlight */
      .ds-card:nth-child(2) {
         border: 2px solid var(--accent-color) !important;
         background: #F9F9F9 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
         color: var(--accent-color);
         font-weight: 700;
      }
      
      .ds-card button {
         border-radius: 4px !important;
      }

      /* 11. BADGE */
      .fluent-badge, .ds-badge {
         background: var(--accent-color) !important;
         color: white !important;
         border-radius: 4px !important;
         font-size: 12px !important;
         font-weight: 600 !important;
         padding: 2px 8px;
         box-shadow: none !important;
         letter-spacing: 0;
         text-transform: none !important;
      }

      /* 12. FOOTER */
      .ds-footer {
         background: #F9F9F9 !important;
         border-top: 1px solid #E5E5E5 !important;
      }
    `
  }
};
