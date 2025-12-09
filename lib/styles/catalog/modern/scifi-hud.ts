import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'hud')!;

export const scifiHud: StyleCartridge = {
  id: 'hud',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#050A10', // Deep Space
      '--bg-layer-2': 'rgba(0, 243, 255, 0.05)', // Holographic pane
      '--text-primary': '#00F3FF', // Cyan
      '--text-secondary': 'rgba(0, 243, 255, 0.6)',
      '--accent-color': '#00F3FF', // Cyan Accent
      '--border-radius': '0px', // Strict Angular
      '--font-display': '"Share Tech Mono", "JetBrains Mono", "Courier New", monospace',
    },
    elementClasses: {
      stage: 'bg-[#050A10] overflow-hidden',
      navbar: 'hud-nav',
      container: 'hud-panel',
      buttonPrimary: 'hud-btn-primary',
      buttonSecondary: 'hud-btn-secondary',
      input: 'hud-input',
      badge: 'hud-badge'
    },
    injectCss: `
      /* --- SYSTEM: TACTICAL HUD --- */

      /* 1. GRID & SCANLINES */
      .ds-page-root {
        background-color: #050A10;
        background-image: 
          linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px);
        background-size: 40px 40px;
        position: relative;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      /* Vignette */
      .ds-page-root::before {
        content: "";
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,0,0,0.8) 100%);
        pointer-events: none;
        z-index: 2;
      }

      /* Scanline Animation */
      .ds-deco-layer::after {
        content: " ";
        display: block;
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 999;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
      }
      
      /* Moving Bar Scan */
      .ds-deco-layer::before {
         content: "";
         position: fixed;
         top: 0; left: 0; right: 0; height: 5px;
         background: rgba(0, 243, 255, 0.3);
         box-shadow: 0 0 10px rgba(0, 243, 255, 0.5);
         animation: scan 8s linear infinite;
         z-index: 998;
         opacity: 0.3;
      }
      @keyframes scan {
        0% { top: -10%; }
        100% { top: 110%; }
      }

      /* 2. HUD PANELS (Bracketed) */
      .hud-panel, .ds-panel, .ds-card, .hud-nav {
        background: rgba(0, 20, 30, 0.6);
        border: 1px solid rgba(0, 243, 255, 0.3);
        box-shadow: 0 0 15px rgba(0, 243, 255, 0.05);
        position: relative;
        clip-path: polygon(
          0 0, 
          100% 0, 
          100% calc(100% - 15px), 
          calc(100% - 15px) 100%, 
          0 100%, 
          0 15px
        ); /* Chamfered corners */
      }
      
      /* Pseudo-element brackets via internal border hacks or just simple border overlays 
         Since clip-path cuts off external pseudos, we use box-shadow inset or rely on the border.
         Let's add specific corner markers inside via ::after using inset */
      
      .hud-panel::after, .ds-panel::after, .ds-card::after {
         content: "";
         position: absolute;
         inset: 2px;
         border: 1px solid transparent;
         /* Corner markers */
         background: 
            linear-gradient(to right, var(--accent-color) 2px, transparent 2px) 0 0,
            linear-gradient(to bottom, var(--accent-color) 2px, transparent 2px) 0 0,
            linear-gradient(to left, var(--accent-color) 2px, transparent 2px) 100% 100%,
            linear-gradient(to top, var(--accent-color) 2px, transparent 2px) 100% 100%;
         background-size: 10px 10px;
         background-repeat: no-repeat;
         pointer-events: none;
         opacity: 0.7;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: var(--font-display);
        color: var(--text-primary);
        text-shadow: 0 0 5px var(--text-primary);
      }
      .ds-hero-title span {
        background: transparent;
        color: white;
        text-shadow: 0 0 10px white;
      }
      .ds-hero-text {
         font-family: var(--font-display);
         color: var(--text-secondary);
         border-left: 2px solid var(--text-secondary);
         padding-left: 16px;
      }

      /* 4. BUTTONS (Tactical) */
      .hud-btn-primary, .ds-btn-primary {
        background: rgba(0, 243, 255, 0.1) !important;
        color: var(--accent-color) !important;
        border: 1px solid var(--accent-color) !important;
        border-radius: 0 !important;
        font-family: var(--font-display) !important;
        text-transform: uppercase;
        letter-spacing: 2px;
        position: relative;
        overflow: hidden;
        transition: all 0.2s;
        box-shadow: 0 0 10px rgba(0, 243, 255, 0.2);
        height: 48px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .hud-btn-primary:hover, .ds-btn-primary:hover {
        background: var(--accent-color) !important;
        color: #000 !important;
        box-shadow: 0 0 20px var(--accent-color);
      }
      /* Tech lines on button */
      .hud-btn-primary::before {
         content: "";
         position: absolute;
         top: 2px; bottom: 2px; left: -2px; width: 2px;
         background: white;
      }

      .hud-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        border: 1px solid rgba(0, 243, 255, 0.3) !important;
        color: rgba(0, 243, 255, 0.7) !important;
        border-radius: 0 !important;
        font-family: var(--font-display) !important;
        text-transform: uppercase;
      }
      .hud-btn-secondary:hover, .ds-btn-ghost:hover {
         border-color: var(--accent-color) !important;
         color: var(--accent-color) !important;
         background: rgba(0, 243, 255, 0.05) !important;
         box-shadow: 0 0 10px rgba(0, 243, 255, 0.1);
      }

      /* 5. INPUTS (Data Entry) */
      .hud-input, .ds-input {
        background: rgba(0, 0, 0, 0.5) !important;
        border: 1px solid var(--text-secondary) !important;
        border-radius: 0 !important;
        color: var(--text-primary) !important;
        font-family: var(--font-display) !important;
        padding-left: 40px !important;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 10px rgba(0, 243, 255, 0.2) !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        border: 1px solid var(--accent-color);
        width: 12px !important; height: 12px !important;
        border-radius: 0 !important;
        transform: rotate(45deg);
        left: 14px !important;
      }

      /* 6. NAVIGATION */
      .hud-nav, .ds-navbar {
         border-bottom: 2px solid var(--text-secondary);
         background: rgba(0, 10, 15, 0.9);
         margin: 0 !important;
         width: 100% !important;
         border-radius: 0 !important;
         clip-path: none !important; /* Navbar is full width */
      }
      .ds-logo {
         font-weight: 400;
         border: 1px solid var(--accent-color);
         padding: 4px 8px;
         font-size: 18px;
         letter-spacing: 2px;
      }
      .ds-nav-links span {
         color: var(--text-secondary);
         border-right: 1px solid rgba(0, 243, 255, 0.2);
         padding: 0 16px;
         font-size: 12px;
      }
      .ds-nav-links span:last-child { border-right: none; }
      .ds-nav-links span:hover {
         color: var(--text-primary);
         text-shadow: 0 0 5px var(--text-primary);
         background: rgba(0, 243, 255, 0.1);
      }

      /* 7. STATS */
      .ds-stats {
         background: transparent !important;
         border-top: 1px solid var(--text-secondary);
         border-bottom: 1px solid var(--text-secondary);
      }
      .ds-stats > div > div {
         border-right: 1px solid rgba(0, 243, 255, 0.2);
         padding: 16px;
         background: transparent;
         border-radius: 0;
         box-shadow: none;
      }
      .ds-stats .text-3xl {
         font-family: var(--font-display);
         color: white;
         text-shadow: 0 0 5px var(--accent-color);
      }

      /* 8. TABLE (Data Grid) */
      .ds-table-container {
         background: rgba(0, 0, 0, 0.6) !important;
         border: 1px solid var(--text-secondary) !important;
         border-radius: 0 !important;
      }
      .ds-table-container > div {
         border-bottom: 1px dashed rgba(0, 243, 255, 0.2) !important;
      }
      .ds-table-container > div:first-child {
         background: rgba(0, 243, 255, 0.1);
         color: var(--accent-color);
         border-bottom: 2px solid var(--accent-color) !important;
         font-size: 11px;
         letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
         background: rgba(0, 243, 255, 0.1) !important;
         color: white !important;
      }
      .ds-table-container span {
         background: transparent !important;
         border: 1px solid var(--accent-color);
         color: var(--accent-color) !important;
         border-radius: 0;
         text-shadow: 0 0 5px var(--accent-color);
         font-family: var(--font-display);
      }

      /* 9. PRICING CARDS */
      .ds-card {
         background: rgba(0, 20, 30, 0.8) !important;
         border: 1px solid rgba(0, 243, 255, 0.2) !important;
         border-radius: 0 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
         border: 2px solid var(--accent-color) !important;
         box-shadow: 0 0 20px rgba(0, 243, 255, 0.1) !important;
         background: rgba(0, 30, 40, 0.9) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
         color: var(--accent-color);
         text-shadow: 0 0 10px var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
         background: var(--accent-color);
         color: black;
         font-weight: 700;
         border-radius: 0;
         font-family: var(--font-display);
      }
      
      .ds-card button {
         border-radius: 0 !important;
         font-family: var(--font-display);
      }

      /* 10. BADGE */
      .hud-badge, .ds-badge {
         background: transparent !important;
         border: 1px solid var(--accent-color);
         color: var(--accent-color) !important;
         border-radius: 0 !important;
         font-family: var(--font-display);
         text-transform: uppercase;
         letter-spacing: 1px;
         box-shadow: 0 0 5px var(--accent-color);
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #020408 !important;
         border-top: 2px solid var(--text-secondary) !important;
      }
      .ds-footer .ds-logo {
         border: none; 
      }
    `
  }
};
