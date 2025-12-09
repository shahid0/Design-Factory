
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'aero')!;

export const aero: StyleCartridge = {
  id: 'aero',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': 'transparent', // Uses wallpaper
      '--bg-layer-2': 'rgba(255, 255, 255, 0.4)',
      '--text-primary': '#000000',
      '--text-secondary': '#333333',
      '--accent-color': '#1864ab', // Windows Link Blue
      '--border-radius': '6px',
      '--font-display': '"Segoe UI", "Calibri", sans-serif',
    },
    elementClasses: {
      stage: 'aero-desktop',
      navbar: 'aero-glass-panel',
      container: 'aero-glass-panel',
      buttonPrimary: 'aero-btn-gloss',
      buttonSecondary: 'aero-btn-standard',
      input: 'aero-field',
      badge: 'aero-badge'
    },
    injectCss: `
      /* --- WINDOWS AERO (VISTA/7) REIMAGINED --- */

      /* 1. THE DESKTOP (Aurora) */
      .aero-desktop {
        background: #000;
        position: relative;
        overflow-x: hidden;
      }
      
      /* Deep Background Layer */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 50% 120%, #204c68 0%, #080f14 60%, #000000 100%);
        z-index: -2;
      }
      
      /* The Moving Aurora */
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        top: -50%; left: -50%; width: 200%; height: 200%;
        background: conic-gradient(
          from 180deg at 50% 50%,
          rgba(0, 255, 213, 0) 0deg,
          rgba(0, 255, 179, 0.1) 60deg,
          rgba(0, 183, 255, 0.2) 120deg,
          rgba(6, 78, 255, 0.1) 180deg,
          rgba(0, 255, 213, 0) 240deg
        );
        filter: blur(80px);
        animation: aurora-swirl 30s linear infinite;
        z-index: -1;
        opacity: 0.7;
      }

      @keyframes aurora-swirl {
        0% { transform: rotate(0deg) scale(1); }
        50% { transform: rotate(180deg) scale(1.15); }
        100% { transform: rotate(360deg) scale(1); }
      }

      /* 2. AERO GLASS MATERIAL */
      .aero-glass-panel, .ds-panel, .ds-card, .ds-navbar {
        background: rgba(240, 248, 255, 0.35); /* Tinted Glass */
        backdrop-filter: blur(16px) saturate(110%);
        -webkit-backdrop-filter: blur(16px) saturate(110%);
        border-radius: 8px;
        
        /* The Glass Bezel */
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-top: 1px solid rgba(255, 255, 255, 0.7);
        
        box-shadow: 
          /* Inner Highlights */
          inset 0 1px 0 rgba(255,255,255,0.6),
          inset 1px 0 0 rgba(255,255,255,0.3),
          inset -1px 0 0 rgba(255,255,255,0.3),
          /* Outer Glow/Shadow */
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 15px 35px rgba(0, 0, 0, 0.4);
          
        position: relative;
        overflow: hidden;
      }
      
      /* The Signature "Sheen" (Top Half Reflection) */
      .aero-glass-panel::after, .ds-panel::after, .ds-card::after, .ds-navbar::after {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0;
        height: 45%;
        background: linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.1) 90%, rgba(255,255,255,0) 100%);
        pointer-events: none;
        border-radius: 7px 7px 0 0;
      }

      /* 3. TYPOGRAPHY OVERRIDES */
      .ds-hero-title {
        color: #FFFFFF;
        text-shadow: 0 0 10px rgba(255,255,255,0.7), 0 2px 4px rgba(0,0,0,0.8);
        font-family: "Segoe UI Light", "Segoe UI", sans-serif;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      .ds-hero-title span {
        color: #bdf;
        text-shadow: 0 0 20px #09f, 0 0 40px #09f;
        font-weight: 400;
      }
      .ds-hero-text {
        color: rgba(255, 255, 255, 0.95);
        text-shadow: 0 1px 4px rgba(0,0,0,0.9);
        font-weight: 400;
      }
      
      /* SECTION TITLES (Network Logs, Access Levels) - Must be White on Dark Desktop */
      .ds-section-title {
        color: #FFFFFF !important;
        text-shadow: 0 0 10px rgba(255,255,255,0.5), 0 2px 4px rgba(0,0,0,0.8);
        font-family: "Segoe UI", sans-serif;
        font-weight: 300;
      }
      .ds-section-subtitle {
         color: rgba(255,255,255,0.8) !important;
         text-shadow: 0 1px 2px rgba(0,0,0,0.8);
      }

      /* 4. BUTTONS (Gel / Gloss) */
      
      /* Primary: The "Default" Windows Button */
      .aero-btn-gloss, .ds-btn-primary {
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YzZjlmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2Q2ZTBZmZkIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSJiZTMzZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThkNGZmIiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==');
        background-size: 100% 100%;
        border: 1px solid #3c7fb1;
        border-radius: 3px;
        color: #1e395b !important;
        font-family: "Segoe UI", sans-serif;
        font-weight: 600 !important;
        text-shadow: 0 1px 0 rgba(255,255,255,0.7);
        padding: 6px 20px !important;
        box-shadow: inset 0 0 2px rgba(255,255,255,1), 0 1px 2px rgba(0,0,0,0.3);
        transition: all 0.2s;
        text-transform: none !important;
      }
      .aero-btn-gloss:hover, .ds-btn-primary:hover {
         filter: brightness(1.1) saturate(1.1);
         box-shadow: 0 0 5px #3c7fb1, inset 0 0 0 1px rgba(255,255,255,0.8);
         border-color: #3c7fb1;
      }
      .aero-btn-gloss:active, .ds-btn-primary:active {
         filter: brightness(0.9);
         box-shadow: inset 0 1px 3px rgba(0,0,0,0.3);
         transform: translateY(1px);
      }

      /* Secondary / Glass Button */
      .aero-btn-standard, .ds-btn-ghost, .ds-btn-secondary {
         background: rgba(255,255,255,0.2) !important;
         border: 1px solid rgba(255,255,255,0.4) !important;
         color: #fff !important;
         text-shadow: 0 1px 2px black;
         border-radius: 3px !important;
         box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
      }
      .aero-btn-standard:hover, .ds-btn-ghost:hover, .ds-btn-secondary:hover {
         background: rgba(255,255,255,0.3) !important;
         box-shadow: 0 0 10px rgba(255,255,255,0.3);
         color: #fff !important;
      }

      /* 5. NAVIGATION (Taskbar Style) */
      .ds-navbar {
        background: rgba(10, 20, 30, 0.6);
        border: 1px solid rgba(255,255,255,0.3);
        border-top: 1px solid rgba(255,255,255,0.5);
        border-radius: 8px;
        margin: 20px 30px;
        width: auto !important;
      }
      .ds-logo {
         font-family: "Segoe UI", sans-serif;
         font-weight: 400;
         color: #fff;
         text-shadow: 0 0 5px rgba(255,255,255,0.8);
         font-style: italic;
      }
      .ds-nav-links span {
         color: #e0e0e0;
         font-weight: 400;
         text-shadow: 0 1px 1px #000;
         padding: 6px 10px;
         border-radius: 3px;
      }
      .ds-nav-links span:hover {
         background: rgba(255,255,255,0.1);
         border: 1px solid rgba(255,255,255,0.3);
         box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
         color: #fff;
      }

      /* 6. INPUTS (Inset) */
      .aero-field, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #abadb3 !important;
        border-top-color: #dbdfe6 !important;
        border-radius: 2px !important;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.1) !important;
        color: #000 !important;
        padding-left: 40px !important;
      }
      .ds-input:focus {
        border-color: #3399ff !important;
        box-shadow: inset 0 1px 2px rgba(0,0,0,0.05), 0 0 0 2px rgba(51, 153, 255, 0.3) !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        left: 12px !important;
        width: 12px !important; height: 12px !important;
        border: 2px solid #555;
        border-radius: 50%;
        box-shadow: 2px 2px 0 0 transparent;
      }
      .ds-input-decorator::after {
         content: ''; position: absolute; bottom: -4px; right: -4px;
         width: 6px; height: 2px; background: #555;
         transform: rotate(45deg);
      }

      /* 7. STATS (Gadget Style) */
      .ds-stats {
         background: transparent !important;
         border: none !important;
      }
      .ds-stats > div > div {
         background: rgba(10, 15, 20, 0.4);
         border: 1px solid rgba(255,255,255,0.3);
         border-radius: 12px;
         box-shadow: 0 5px 15px rgba(0,0,0,0.3);
         padding: 20px;
         color: white;
         position: relative;
      }
      .ds-stats > div > div::before {
         content: ''; position: absolute; top:0; left:0; right:0; height: 40%;
         background: linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%);
         border-radius: 11px 11px 60% 60% / 11px 11px 10px 10px;
      }
      .ds-stats .text-3xl {
         color: #fff;
         text-shadow: 0 0 10px rgba(0, 255, 255, 0.8);
      }
      .ds-stats span:first-child {
         color: #ccc;
         text-transform: uppercase;
         font-size: 10px;
         letter-spacing: 1px;
      }

      /* 8. TABLE (Explorer List) */
      .ds-table-container {
         background: #fff !important;
         border: 1px solid #8e9bb3 !important;
         border-radius: 3px !important;
         padding: 0 !important;
      }
      .ds-table-container > div:first-child {
         background: linear-gradient(to bottom, #fff 0%, #f2f2f2 100%);
         border-bottom: 1px solid #d9d9d9 !important;
         color: #1e395b;
         font-weight: 400;
         padding-left: 10px;
      }
      .ds-table-container > div:not(:first-child) {
         border-bottom: 1px solid transparent !important;
      }
      .ds-table-container > div:not(:first-child):hover {
         background: linear-gradient(to bottom, #f3f9ff 0%, #e3f1ff 100%) !important;
         border-top: 1px solid #cce5f5 !important;
         border-bottom: 1px solid #cce5f5 !important;
         color: #000 !important;
      }
      
      /* 9. PRICING CARDS */
      .ds-card {
         background: rgba(255,255,255,0.9) !important;
         border: 1px solid #888 !important;
         box-shadow: 0 10px 30px rgba(0,0,0,0.3) !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
         border: 1px solid #3c7fb1 !important;
         background: #fff !important;
         box-shadow: 0 0 20px rgba(60, 127, 177, 0.5) !important;
      }
      
      /* Pricing Buttons - Ensure High Contrast */
      .ds-card-btn {
        background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YzZjlmZiIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjUwJSIgc3RvcC1jb2xvcj0iI2Q2ZTBZmZkIiBzdG9wLW9wYWNpdHk9IjEiLz4KICAgIDxzdG9wIG9mZnNldD0iNTAlIiBzdG9wLWNvbG9yPSJiZTMzZmYiIHN0b3Atb3BhY2l0eT0iMSIvPgogICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOThkNGZmIiBzdG9wLW9wYWNpdHk9IjEiLz4KICA8L2xpbmVhckdyYWRpZW50PgogIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InVybCgjZ3JhZC11Y2dnLWdlbmVyYXRlZCkiIC8+Cjwvc3ZnPg==') !important;
        border: 1px solid #3c7fb1 !important;
        border-radius: 3px !important;
        color: #1e395b !important;
        font-weight: 600 !important;
        text-transform: none !important;
        text-shadow: 0 1px 0 rgba(255,255,255,0.7);
        box-shadow: inset 0 0 2px rgba(255,255,255,1);
      }
      .ds-card-btn:hover {
         filter: brightness(1.1);
      }

      /* 10. BADGE */
      .aero-badge, .ds-badge {
         background: linear-gradient(to bottom, #60abf8 0%, #4096ee 50%, #2086e3 50%, #1579d4 100%) !important;
         border: 1px solid #0f5b9e;
         color: white !important;
         text-shadow: 0 -1px 0 rgba(0,0,0,0.4);
         border-radius: 3px !important;
         box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
         font-weight: 600;
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #000 !important;
         border-top: 1px solid #333 !important;
         color: #aaa !important;
      }
      .ds-footer .ds-logo {
         color: #fff !important;
      }
      .ds-footer h4 {
         color: #ddd !important;
      }
    `
  }
};
