
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'cyberpunk')!;

export const cyberpunk: StyleCartridge = {
  id: 'cyberpunk',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#050505', // Void Black
      '--bg-layer-2': '#0a0a0a', // Dark Metal
      '--text-primary': '#FCEE0A', // Cyber Yellow
      '--text-secondary': '#00F0FF', // Hologram Blue
      '--accent-color': '#FF003C', // Trauma Red
      '--border-radius': '0px', // Industrial
      '--font-display': '"JetBrains Mono", monospace',
    },
    elementClasses: {
      stage: 'bg-black relative overflow-hidden', 
      navbar: 'bg-[#050505]/95 border-b border-[#FCEE0A]/20',
      container: 'cyber-panel',
      buttonPrimary: 'cyber-btn-primary',
      buttonSecondary: 'cyber-btn-secondary',
      input: 'cyber-input',
      badge: 'cyber-badge'
    },
    injectCss: `
      /* --- CYBERPUNK V3: SYSTEM FAILURE --- */

      /* 1. GLOBAL CRT SCANLINE OVERLAY */
      .ds-page-root::after {
        content: " ";
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: 
          linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), 
          linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 999;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
      }

      /* 2. THE "SHATTERED" BUTTON */
      .cyber-btn-primary {
        --slice-0: inset(50% 50% 50% 50%);
        --slice-1: inset(80% -6px 0 0);
        --slice-2: inset(50% -6px 30% 0);
        --slice-3: inset(10% -6px 85% 0);
        --slice-4: inset(40% -6px 43% 0);
        --slice-5: inset(80% -6px 5% 0);
        
        position: relative;
        background: var(--text-primary);
        color: black;
        font-weight: 900;
        text-transform: uppercase;
        border: 0;
        letter-spacing: 2px;
        clip-path: polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
        box-shadow: 6px 0px 0px #00F0FF;
        transition: all 0.1s;
      }
      
      /* The Glitch Ghost */
      .cyber-btn-primary::after {
        content: 'INITIALIZE';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, transparent 3%, #00F0FF 3%, #00F0FF 5%, var(--accent-color) 5%);
        text-shadow: -3px -3px 0px #FCEE0A, 3px 3px 0px #00F0FF;
        clip-path: var(--slice-0);
        transform: translate(-20px, 10px);
      }

      .cyber-btn-primary:hover::after {
        animation: 1s glitch;
        animation-timing-function: steps(2, end);
      }
      
      .cyber-btn-primary:hover {
         transform: translate(-5px, -5px);
         box-shadow: 10px 10px 0px var(--accent-color);
         background: white;
      }

      @keyframes glitch {
        0% { clip-path: var(--slice-1); transform: translate(-20px, -10px); }
        10% { clip-path: var(--slice-3); transform: translate(10px, 10px); }
        20% { clip-path: var(--slice-1); transform: translate(-10px, 10px); }
        30% { clip-path: var(--slice-3); transform: translate(0px, 5px); }
        40% { clip-path: var(--slice-2); transform: translate(-5px, 0px); }
        50% { clip-path: var(--slice-3); transform: translate(5px, 0px); }
        60% { clip-path: var(--slice-4); transform: translate(5px, 10px); }
        70% { clip-path: var(--slice-2); transform: translate(-10px, 10px); }
        80% { clip-path: var(--slice-5); transform: translate(20px, -10px); }
        90% { clip-path: var(--slice-1); transform: translate(-10px, 0px); }
        100% { clip-path: var(--slice-1); transform: translate(0); }
      }

      /* 3. HERO TYPOGRAPHY VIOLENCE */
      .ds-hero-title {
        text-shadow: 3px 0px 0px rgba(255,0,60,0.8), -3px 0px 0px rgba(0,240,255,0.8);
        position: relative;
      }
      .ds-hero-title span {
        background: var(--text-primary);
        color: black;
        padding: 0 10px;
        box-decoration-break: clone;
      }

      /* 4. BREACH PROTOCOL TABLE */
      .ds-table-container {
        border: 1px solid var(--text-secondary);
        background: repeating-linear-gradient(
          0deg,
          rgba(0, 240, 255, 0.05),
          rgba(0, 240, 255, 0.05) 1px,
          transparent 1px,
          transparent 2px
        );
      }
      .ds-table-container > div:first-child {
        background: var(--text-secondary);
        color: black !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: var(--accent-color);
        color: black;
        cursor: crosshair;
      }
      .ds-table-container > div:not(:first-child):hover * {
        color: black !important;
      }

      /* 5. DECORATIVE WARNINGS */
      .cyber-panel {
        border: 1px solid #333;
        position: relative;
        background: #080808;
      }
      .cyber-panel::before {
        content: "WARNING";
        position: absolute;
        top: -1px;
        right: 10px;
        background: var(--accent-color);
        color: black;
        font-size: 8px;
        padding: 2px 6px;
        font-weight: 900;
        transform: translateY(-50%);
      }
      .cyber-panel::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        background: linear-gradient(135deg, transparent 50%, var(--text-secondary) 50%);
      }

      /* 6. INPUT TERMINAL */
      .cyber-input {
        background: #000;
        border: 1px solid #333;
        border-left: 4px solid var(--text-primary);
        font-family: monospace;
        color: var(--text-primary);
      }
      .cyber-input:focus {
        border-color: var(--text-secondary);
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
      }
      
      /* 7. NAVIGATION */
      .ds-navbar {
        border-bottom: 1px solid #333;
      }
      .ds-navbar .ds-logo {
        text-transform: uppercase;
        letter-spacing: -2px;
      }

      /* 8. BADGE */
      .cyber-badge {
        border: 1px solid var(--accent-color);
        background: transparent;
        color: var(--accent-color);
        animation: blink 2s infinite;
      }

      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }
    `
  }
};
