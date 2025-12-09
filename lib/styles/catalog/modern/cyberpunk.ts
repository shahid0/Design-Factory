
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
      stage: 'bg-black relative overflow-hidden selection:bg-[#FCEE0A] selection:text-black', 
      navbar: 'bg-[#050505]/95 border-b border-[#FCEE0A]/20',
      container: 'cyber-panel',
      buttonPrimary: 'cyber-btn-primary',
      buttonSecondary: 'cyber-btn-secondary',
      input: 'cyber-input',
      badge: 'cyber-badge'
    },
    injectCss: `
      /* --- CYBERPUNK V4: ARASAKA PROTOCOL --- */

      /* 1. CRT MONITOR DISTORTION */
      .ds-page-root {
        animation: crt-flicker 0.1s infinite;
      }
      
      @keyframes crt-flicker {
        0% { opacity: 0.99; }
        100% { opacity: 1; }
      }

      .ds-page-root::before {
        content: " ";
        display: block;
        position: fixed;
        top: 0; left: 0; bottom: 0; right: 0;
        background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
        z-index: 999;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
      }

      /* 2. GLITCH BUTTONS */
      .cyber-btn-primary {
        --clip: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        position: relative;
        background: var(--text-primary);
        color: #000;
        font-weight: 900;
        text-transform: uppercase;
        border: 0;
        letter-spacing: 2px;
        clip-path: polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
        transition: all 0.2s cubic-bezier(0.25, 1, 0.5, 1);
      }
      
      .cyber-btn-primary:hover {
        transform: translate(-2px, -2px);
        box-shadow: 4px 4px 0 var(--text-secondary);
        background: #fff;
        text-shadow: -1px -1px 0 rgba(0,240,255,0.5), 1px 1px 0 rgba(255,0,60,0.5);
      }

      .cyber-btn-primary::after {
        content: '';
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background: var(--accent-color);
        mix-blend-mode: hard-light;
        opacity: 0;
        z-index: 1;
      }
      .cyber-btn-primary:active::after {
        opacity: 0.5;
      }

      /* 3. HERO TYPOGRAPHY (DECODING EFFECT) */
      .ds-hero-title {
        text-shadow: 2px 0 0 rgba(255,0,60,0.8), -2px 0 0 rgba(0,240,255,0.8);
        animation: text-glitch 3s infinite alternate;
      }
      @keyframes text-glitch {
        0% { text-shadow: 2px 0 0 rgba(255,0,60,0.8), -2px 0 0 rgba(0,240,255,0.8); }
        98% { text-shadow: 2px 0 0 rgba(255,0,60,0.8), -2px 0 0 rgba(0,240,255,0.8); }
        99% { text-shadow: -2px 0 0 rgba(255,0,60,0.8), 2px 0 0 rgba(0,240,255,0.8); transform: skewX(10deg); }
        100% { text-shadow: 2px 0 0 rgba(255,0,60,0.8), -2px 0 0 rgba(0,240,255,0.8); transform: skewX(0deg); }
      }

      .ds-hero-title span {
        background: var(--text-primary);
        color: #000;
        padding: 0 10px;
      }

      /* 4. DATA PANELS */
      .cyber-panel {
        background: #080808;
        border: 1px solid #333;
        position: relative;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
      }
      /* Corner brackets */
      .cyber-panel::before {
        content: "";
        position: absolute;
        top: -1px; left: -1px; width: 20px; height: 20px;
        border-top: 2px solid var(--text-primary);
        border-left: 2px solid var(--text-primary);
      }
      .cyber-panel::after {
        content: "";
        position: absolute;
        bottom: -1px; right: -1px; width: 20px; height: 20px;
        border-bottom: 2px solid var(--text-primary);
        border-right: 2px solid var(--text-primary);
      }
      
      .cyber-panel:hover {
        border-color: var(--text-secondary);
        box-shadow: 0 0 15px rgba(0, 240, 255, 0.1);
      }

      /* 5. INPUT TERMINAL */
      .cyber-input {
        background: #050505;
        border: 1px solid #333;
        border-left: 4px solid var(--text-primary);
        font-family: var(--font-display);
        color: var(--text-primary);
        transition: all 0.3s;
      }
      .cyber-input:focus {
        background: #000;
        border-color: var(--text-secondary);
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        outline: none;
      }

      /* 6. STATS & TABLES */
      .ds-table-container {
        border: 1px solid #222;
        background: repeating-linear-gradient(0deg, #0a0a0a, #0a0a0a 2px, #0f0f0f 2px, #0f0f0f 4px);
      }
      .ds-table-container > div:first-child {
        background: var(--accent-color);
        color: #000;
        font-weight: 900;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: var(--text-secondary) !important;
        color: #000 !important;
        cursor: crosshair;
      }
      /* Force children to black on hover */
      .ds-table-container > div:not(:first-child):hover * {
        color: #000 !important;
      }

      /* 7. SCROLLBAR */
      ::-webkit-scrollbar {
        width: 8px;
        background: #000;
      }
      ::-webkit-scrollbar-thumb {
        background: #333;
        border: 1px solid #000;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--text-primary);
      }
    `
  }
};
