
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'neumorphism')!;

export const neumorphism: StyleCartridge = {
  id: 'neumorphism',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#e0e5ec',
      '--bg-layer-2': '#e0e5ec',
      '--text-primary': '#4d5b7c',
      '--text-secondary': '#a0a9c2',
      '--accent-color': '#6d5dfc',
      '--border-radius': '20px',
      '--font-display': '"Nunito", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#e0e5ec]',
      navbar: 'neu-nav',
      container: 'neu-flat',
      buttonPrimary: 'neu-btn-primary',
      buttonSecondary: 'neu-btn-secondary',
      input: 'neu-pressed',
      badge: 'neu-icon'
    },
    injectCss: `
      /* --- NEUMORPHISM: TOTAL CONVERSION --- */
      
      :root {
         --neu-light: #ffffff;
         --neu-dark: #a3b1c6;
         --neu-bg: #e0e5ec;
      }

      .ds-page-root {
        background-color: var(--neu-bg);
      }

      /* UTILITIES */
      .neu-flat {
        background: var(--neu-bg);
        box-shadow: 9px 9px 16px var(--neu-dark), -9px -9px 16px var(--neu-light);
        border-radius: 30px;
        border: 1px solid rgba(255,255,255,0.2);
      }
      
      .neu-pressed {
        background: var(--neu-bg);
        box-shadow: inset 6px 6px 10px 0 var(--neu-dark), inset -6px -6px 10px 0 var(--neu-light);
        border-radius: 12px;
        border: none;
      }

      /* 1. NAVBAR (Floating Island) */
      .ds-navbar {
        background: var(--neu-bg);
        margin: 24px auto;
        width: calc(100% - 60px);
        max-width: 1280px;
        border-radius: 30px;
        box-shadow: 9px 9px 16px var(--neu-dark), -9px -9px 16px var(--neu-light);
        border: none;
      }
      
      /* Nav Links are Embossed */
      .ds-nav-links span {
         padding: 10px 20px;
         border-radius: 20px;
         transition: all 0.3s ease;
         font-weight: 700;
         color: var(--text-secondary);
      }
      .ds-nav-links span:hover, .ds-nav-links span.active {
         background: var(--neu-bg);
         box-shadow: 5px 5px 10px var(--neu-dark), -5px -5px 10px var(--neu-light);
         color: var(--accent-color);
         transform: translateY(-2px);
      }

      /* 2. HERO */
      .ds-hero-title {
        color: var(--text-primary);
        text-shadow: 2px 2px 4px var(--neu-dark), -2px -2px 4px var(--neu-light);
      }
      /* Badges act like small chiclets */
      .ds-badge {
        box-shadow: 3px 3px 6px var(--neu-dark), -3px -3px 6px var(--neu-light);
        border-radius: 10px;
        color: var(--accent-color);
        background: var(--neu-bg);
        font-weight: 800;
        border: none;
      }

      /* 3. BUTTONS (Soft Physics) */
      
      /* Primary: Extruded */
      .neu-btn-primary, .ds-btn-primary {
         background: var(--neu-bg) !important;
         color: var(--accent-color) !important;
         border-radius: 50px !important;
         box-shadow: 9px 9px 16px var(--neu-dark), -9px -9px 16px var(--neu-light) !important;
         font-weight: 800 !important;
         transition: all 0.2s ease !important;
         border: none !important;
      }
      .neu-btn-primary:hover, .ds-btn-primary:hover {
         transform: translateY(-3px) !important;
         box-shadow: 12px 12px 20px var(--neu-dark), -12px -12px 20px var(--neu-light) !important;
         color: var(--accent-color) !important;
      }
      .neu-btn-primary:active, .ds-btn-primary:active {
         transform: translateY(0) !important;
         box-shadow: inset 4px 4px 8px 0 var(--neu-dark), inset -4px -4px 8px 0 var(--neu-light) !important;
      }

      /* Secondary / Ghost */
      .ds-btn-ghost, .ds-btn-secondary {
         background: var(--neu-bg) !important;
         border-radius: 50px !important;
         border: none !important;
         box-shadow: none !important;
         color: var(--text-secondary) !important;
         transition: all 0.3s ease;
      }
      .ds-btn-ghost:hover, .ds-btn-secondary:hover {
         box-shadow: 5px 5px 10px var(--neu-dark), -5px -5px 10px var(--neu-light) !important;
         color: var(--text-primary) !important;
         background: var(--neu-bg) !important;
      }

      /* 4. STATS (Bubbles) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
         background: var(--neu-bg);
         padding: 24px;
         border-radius: 30px;
         box-shadow: 7px 7px 14px var(--neu-dark), -7px -7px 14px var(--neu-light);
         align-items: center;
         text-align: center;
         transition: transform 0.3s ease;
      }
      .ds-stats > div > div:hover {
         transform: translateY(-5px);
      }

      /* 5. CARDS / PANELS */
      .ds-panel {
         background: var(--neu-bg);
         box-shadow: 9px 9px 16px var(--neu-dark), -9px -9px 16px var(--neu-light);
         border-radius: 30px;
         border: 1px solid rgba(255,255,255,0.2);
      }
      .ds-panel svg {
         filter: drop-shadow(3px 3px 6px var(--neu-dark));
      }

      /* 6. INPUTS (Concave) */
      .ds-input {
         background: var(--neu-bg) !important;
         box-shadow: inset 5px 5px 10px var(--neu-dark), inset -5px -5px 10px var(--neu-light) !important;
         border-radius: 16px !important;
         padding: 16px !important;
         color: var(--text-primary) !important;
         border: none !important;
      }
      .ds-input:focus {
         box-shadow: inset 2px 2px 4px var(--neu-dark), inset -2px -2px 4px var(--neu-light), 0 0 0 2px var(--accent-color) !important;
      }
      .ds-input-decorator {
         background: var(--accent-color) !important;
         box-shadow: 0 0 10px var(--accent-color), 3px 3px 6px var(--neu-dark);
      }

      /* 7. TABLE (Extruded Rows) */
      .ds-table-container {
         border: none !important;
         background: var(--neu-bg) !important;
         box-shadow: inset 6px 6px 12px var(--neu-dark), inset -6px -6px 12px var(--neu-light);
         border-radius: 24px !important;
         padding: 12px !important;
      }
      .ds-table-container > div {
         border-bottom: 1px solid rgba(163, 177, 198, 0.1) !important;
         transition: all 0.2s ease;
      }
      /* Header */
      .ds-table-container > div:first-child {
         border-bottom: 1px solid rgba(163, 177, 198, 0.3) !important;
         margin-bottom: 10px;
      }
      /* Rows Pop Out on Hover */
      .ds-table-container > div:not(:first-child):hover {
         background: var(--neu-bg) !important; 
         box-shadow: 6px 6px 12px var(--neu-dark), -6px -6px 12px var(--neu-light);
         border-radius: 16px;
         transform: scale(1.01);
         border-bottom: none !important;
         z-index: 10;
         color: var(--accent-color);
      }

      /* 8. PRICING CARDS */
      .ds-card {
         background: var(--neu-bg) !important;
         border: none !important;
         box-shadow: 9px 9px 16px var(--neu-dark), -9px -9px 16px var(--neu-light) !important;
         border-radius: 30px !important;
         padding: 32px !important;
      }
      /* "Popular" Card is Recessed (Pressed In) */
      .ds-card.selected, .ds-card:nth-child(2) {
         box-shadow: inset 9px 9px 16px var(--neu-dark), inset -9px -9px 16px var(--neu-light) !important;
         border: 1px solid transparent !important;
         transform: none;
      }
      .ds-card.selected .ds-card-title, .ds-card:nth-child(2) .ds-card-title {
         color: var(--accent-color);
      }
      
      /* Card Buttons */
      .ds-card button {
         border-radius: 50px !important;
         box-shadow: 6px 6px 12px var(--neu-dark), -6px -6px 12px var(--neu-light) !important;
         border: none !important;
         color: var(--text-primary) !important;
         background: var(--neu-bg) !important;
         font-weight: 800;
         text-transform: uppercase;
      }
      .ds-card button:hover {
         color: var(--accent-color) !important;
         box-shadow: inset 4px 4px 8px var(--neu-dark), inset -4px -4px 8px var(--neu-light) !important;
         transform: translateY(1px);
      }

      /* 9. FOOTER */
      .ds-footer {
         background: var(--neu-bg) !important;
         border-top: none !important;
         /* Reverse Shadow for Top Edge */
         box-shadow: 0 -10px 20px -10px var(--neu-dark);
         margin-top: 40px;
      }

      /* 10. TOGGLES (Soft Plastic Switch) */
      .mannequin-toggle-track {
        background: var(--neu-bg);
        box-shadow: inset 3px 3px 6px var(--neu-dark), inset -3px -3px 6px var(--neu-light);
        border-radius: 20px;
      }
      .mannequin-toggle-track.active {
        box-shadow: inset 3px 3px 6px var(--neu-dark), inset -3px -3px 6px var(--neu-light);
        background: var(--neu-bg); /* Keep bg same, thumb indicates state */
      }
      .mannequin-toggle-thumb {
        background: var(--accent-color);
        box-shadow: 3px 3px 6px var(--neu-dark), -3px -3px 6px var(--neu-light);
        border-radius: 50%;
        top: 3px; left: 3px;
        width: calc(1.5rem - 6px); height: calc(1.5rem - 6px);
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         left: calc(100% - 1.5rem + 3px);
         background: var(--accent-color);
         box-shadow: 0 0 10px var(--accent-color), 3px 3px 6px var(--neu-dark);
      }
    `
  }
};
