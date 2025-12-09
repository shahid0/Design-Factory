
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'skeuomorphic-redux')!;

export const skeuomorphic: StyleCartridge = {
  id: 'skeuomorphic-redux',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F4F4F4', // Light Leather Base
      '--bg-layer-2': '#FFFFFF', // Clean Paper / Metal
      '--text-primary': '#222222', // Ink Text
      '--text-secondary': '#666666',
      '--accent-color': '#FF6B00', // Orange Accent (retained for contrast)
      '--border-radius': '8px',
      '--font-display': '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    elementClasses: {
      stage: 'skeuo-desk',
      navbar: 'skeuo-metal-bar',
      container: 'skeuo-paper',
      buttonPrimary: 'skeuo-btn-plastic',
      buttonSecondary: 'skeuo-btn-metal',
      input: 'skeuo-inset',
      badge: 'skeuo-tag'
    },
    injectCss: `
      /* --- SKEUOMORPHIC REDUX ENGINE (LIGHT EDITION) --- */

      /* 1. TEXTURES & BACKGROUNDS */
      .skeuo-desk {
        background-color: #e8e8e8;
        /* White Perforated Leather Texture */
        background-image: 
          radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.05) 0%, transparent 60%),
          url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        box-shadow: inset 0 0 60px rgba(0,0,0,0.05);
      }

      /* 2. BRUSHED ALUMINUM BAR (Navbar) */
      .skeuo-metal-bar, .ds-navbar {
        background: linear-gradient(180deg, #ffffff 0%, #f0f0f0 4%, #dcdcdc 96%, #cccccc 100%);
        border-top: 1px solid #fff;
        border-bottom: 1px solid #999;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 0 !important;
        width: 100% !important;
        border-radius: 0 !important;
        padding: 16px 32px;
      }
      
      /* Engraved Logo */
      .ds-logo {
        color: #444;
        text-shadow: 0 1px 0 rgba(255,255,255,0.8), 0 -1px 0 rgba(0,0,0,0.1);
        font-family: 'Impact', sans-serif;
        letter-spacing: 1px;
      }
      
      /* Inset Links */
      .ds-nav-links span {
        color: #666;
        text-shadow: 0 1px 0 #fff;
        font-weight: 600;
        transition: color 0.2s;
      }
      .ds-nav-links span:hover {
        color: #222;
        text-shadow: 0 1px 0 #fff;
      }

      /* 3. HERO TYPOGRAPHY */
      .ds-hero-title {
        color: #333;
        text-shadow: 0 1px 0 rgba(255,255,255,0.8);
        font-family: "Georgia", serif; /* Classic look */
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 0 1px 0 rgba(255,255,255,0.8);
      }
      .ds-hero-text {
         color: #555;
         text-shadow: 0 1px 0 rgba(255,255,255,0.5);
      }
      
      /* Section Titles on Desktop */
      .ds-section-title {
         color: #333 !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.6);
      }
      .ds-section-subtitle {
         color: #666 !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.4);
      }

      /* 4. PAPER/CARDSTOCK PANELS (Cards) */
      .skeuo-paper, .ds-panel, .ds-card {
        background: #ffffff; 
        border-radius: 4px;
        box-shadow: 
          0 1px 2px rgba(0,0,0,0.05),
          0 4px 8px rgba(0,0,0,0.05);
        border: 1px solid #e0e0e0;
        position: relative;
        overflow: hidden;
      }
      /* Paper Texture Overlay */
      .skeuo-paper::before, .ds-panel::before, .ds-card::before {
         content: "";
         position: absolute;
         inset: 0;
         background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.03'/%3E%3C/svg%3E");
         opacity: 0.5;
         pointer-events: none;
      }
      
      .ds-panel svg {
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
        color: #444;
      }
      
      /* 5. BUTTONS (Tactile) */
      
      /* Plastic/Glossy Button */
      .skeuo-btn-plastic, .ds-btn-primary {
        background: linear-gradient(to bottom, #FF8C42 0%, #FF6B00 50%, #E65100 51%, #FF6B00 100%) !important;
        border: 1px solid #bf360c !important;
        border-radius: 6px !important;
        color: white !important;
        text-shadow: 0 -1px 0 rgba(0,0,0,0.2);
        box-shadow: 
          inset 0 1px 0 rgba(255,255,255,0.4),
          0 2px 4px rgba(0,0,0,0.15),
          0 4px 8px rgba(0,0,0,0.1) !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        padding: 10px 24px !important;
        transition: all 0.1s !important;
      }
      .skeuo-btn-plastic:active, .ds-btn-primary:active {
        transform: translateY(2px);
        box-shadow: 
          inset 0 2px 5px rgba(0,0,0,0.2),
          0 1px 1px rgba(255,255,255,0.1) !important;
        background: linear-gradient(to bottom, #E65100 0%, #FF6B00 100%) !important;
      }

      /* Metal/Switch Button */
      .skeuo-btn-metal, .ds-btn-secondary, .ds-btn-ghost {
        background: linear-gradient(to bottom, #ffffff 0%, #f0f0f0 100%) !important;
        border: 1px solid #ccc !important;
        color: #444 !important;
        text-shadow: 0 1px 0 white;
        border-radius: 4px !important;
        box-shadow: 
          inset 0 1px 0 white,
          0 1px 2px rgba(0,0,0,0.05) !important;
        font-weight: 600 !important;
      }
      .skeuo-btn-metal:active, .ds-btn-secondary:active, .ds-btn-ghost:active {
         background: #e0e0e0 !important;
         box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
         transform: translateY(1px);
      }

      /* 6. INPUTS (Inset Paper) */
      .skeuo-inset, .ds-input {
        background: #fdfdfd !important;
        border: 1px solid #ccc !important;
        border-top: 1px solid #999 !important; /* Deeper shadow top */
        border-radius: 4px !important;
        color: #333 !important;
        font-family: 'Courier New', monospace;
        font-weight: 600;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.05) !important;
        padding-left: 40px !important;
      }
      .ds-input-decorator {
         background: #ccc !important;
         box-shadow: inset 0 1px 2px rgba(0,0,0,0.2);
         border-radius: 50%;
         width: 8px !important;
         height: 8px !important;
         top: 50%;
         transform: translateY(-50%);
      }

      /* 7. STATS (Dashboard) */
      .ds-stats {
         background: #f0f0f0 !important; /* Light Dashboard Strip */
         border-top: 1px solid #fff;
         border-bottom: 1px solid #ccc;
         box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);
      }
      .ds-stats > div > div {
         background: linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
         border: 1px solid #ddd;
         border-radius: 8px;
         box-shadow: 0 2px 4px rgba(0,0,0,0.05);
         padding: 16px;
      }
      .ds-stats .text-3xl {
         color: #333;
         font-family: 'Impact', sans-serif;
         text-shadow: 0 1px 0 white;
      }
      .ds-stats span:first-child {
         color: #777;
         text-transform: uppercase;
         font-size: 10px;
         font-weight: 700;
         letter-spacing: 1px;
         text-shadow: 0 1px 0 white;
      }
      
      /* 8. TABLE (Ledger) */
      .ds-table-container {
         background: #fff !important;
         border: 1px solid #ccc !important;
         box-shadow: 0 2px 5px rgba(0,0,0,0.05) !important;
         background-image: linear-gradient(#f0f0f0 1px, transparent 1px) !important;
         background-size: 100% 24px !important;
      }
      .ds-table-container > div:first-child {
         background: #e8e8e8;
         border-bottom: 1px solid #bbb !important;
         color: #444;
         font-weight: 700;
         text-transform: uppercase;
         text-shadow: 0 1px 0 rgba(255,255,255,0.8);
      }
      .ds-table-container > div:not(:first-child) {
         border-bottom: 1px solid #f0f0f0 !important;
         line-height: 23px; /* Align with grid lines */
      }
      .ds-table-container span {
         background: linear-gradient(to bottom, #fff 0%, #f0f0f0 100%) !important;
         border: 1px solid #ddd;
         color: #333 !important;
         font-weight: 700;
         box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      }

      /* 9. PRICING CARDS */
      /* Popular Card (Tan Leather Patch) */
      .ds-card:nth-child(2) {
         background: #e8dcc5 !important; /* Tan */
         border: 1px solid #c7b299 !important;
         background-image: url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='leather'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23leather)' opacity='0.1'/%3E%3C/svg%3E") !important;
      }
      /* Stitching Effect */
      .ds-card:nth-child(2)::after {
         content: '';
         position: absolute;
         top: 10px; left: 10px; right: 10px; bottom: 10px;
         border: 2px dashed #a1887f;
         border-radius: 6px;
         pointer-events: none;
      }
      .ds-card:nth-child(2) * {
         color: #4e342e !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.4);
      }
      .ds-card:nth-child(2) button {
         background: linear-gradient(to bottom, #ffca28 0%, #ffc107 100%) !important; /* Gold/Yellow Button */
         color: #3e2723 !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.4);
         border: 1px solid #d4a017 !important;
      }

      /* 10. BADGE (Tag) */
      .skeuo-tag, .ds-badge {
         background: #fff !important;
         color: #444 !important;
         border: 1px solid #ddd;
         border-radius: 4px !important;
         box-shadow: 0 1px 3px rgba(0,0,0,0.1);
         position: relative;
         margin-left: 10px;
      }
      /* Tag Hole */
      .skeuo-tag::before {
         content: '';
         position: absolute;
         left: -6px; top: 50%; transform: translateY(-50%);
         width: 6px; height: 6px;
         background: #444;
         border-radius: 50%;
         border: 1px solid #fff;
         box-shadow: 0 1px 2px rgba(0,0,0,0.2);
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #dcdcdc !important;
         border-top: 1px solid #bbb !important;
         box-shadow: inset 0 2px 5px rgba(0,0,0,0.05);
         color: #666 !important;
      }
      .ds-footer h4 {
         color: #333 !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.6);
      }
      .ds-footer .ds-logo {
         color: #444 !important;
         text-shadow: 0 1px 0 rgba(255,255,255,0.8);
      }
    `
  }
};
