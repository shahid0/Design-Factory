
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'holographic')!;

export const holographic: StyleCartridge = {
  id: 'holographic',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#030308', // Deep Void
      '--bg-layer-2': 'rgba(255, 255, 255, 0.03)',
      '--text-primary': '#FFFFFF',
      '--text-secondary': 'rgba(255, 255, 255, 0.7)',
      '--accent-color': '#00F0FF', // Cyan
      '--border-radius': '16px',
      '--font-display': '"Space Grotesk", "Rajdhani", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#030308] overflow-hidden',
      navbar: 'holo-nav',
      container: 'holo-panel',
      buttonPrimary: 'holo-btn-primary',
      buttonSecondary: 'holo-btn-secondary',
      input: 'holo-input',
      badge: 'holo-badge'
    },
    injectCss: `
      /* --- HOLOGRAPHIC PRISM ENGINE --- */

      /* 1. ATMOSPHERE */
      .ds-page-root {
        background-color: var(--bg-layer-1);
        color: white;
      }
      
      /* Chromatic Background Mesh */
      .ds-deco-layer::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: 
          radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 0, 170, 0.15), transparent 40%),
          radial-gradient(circle at 20% 80%, rgba(255, 215, 0, 0.1), transparent 40%);
        filter: blur(60px);
        animation: holo-drift 20s infinite alternate linear;
        z-index: -1;
      }
      
      /* Overlay Noise for Texture */
      .ds-deco-layer::after {
        content: '';
        position: absolute;
        inset: 0;
        background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.4"/%3E%3C/svg%3E');
        opacity: 0.05;
        pointer-events: none;
        mix-blend-mode: overlay;
      }

      @keyframes holo-drift {
        0% { transform: rotate(0deg) scale(1); }
        100% { transform: rotate(10deg) scale(1.1); }
      }

      /* 2. HOLOGRAPHIC MATERIAL (Panels) */
      .holo-panel, .ds-panel, .ds-card, .holo-nav {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: var(--border-radius);
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      }
      
      /* Iridescent Sheen on Hover */
      .holo-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: -100%; width: 200%; height: 100%;
        background: linear-gradient(
          115deg, 
          transparent 40%, 
          rgba(0, 240, 255, 0.1) 45%, 
          rgba(255, 0, 170, 0.1) 50%, 
          rgba(255, 215, 0, 0.1) 55%, 
          transparent 60%
        );
        transform: skewX(-20deg);
        transition: left 0.5s;
        pointer-events: none;
        mix-blend-mode: overlay;
      }
      
      .holo-panel:hover::before, .ds-panel:hover::before, .ds-card:hover::before {
        left: 100%;
        transition: left 0.7s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 
          0 0 20px rgba(0, 240, 255, 0.1),
          0 0 40px rgba(255, 0, 170, 0.1);
        transform: translateY(-2px);
      }

      /* 3. TYPOGRAPHY (Prismatic) */
      .ds-hero-title {
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-shadow: 0 0 30px rgba(0, 240, 255, 0.3);
      }
      .ds-hero-title span {
        background: linear-gradient(90deg, #00F0FF, #FF00AA, #FFD700);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;
      }
      
      /* 4. BUTTONS (Foil Effect) */
      .holo-btn-primary, .ds-btn-primary {
        background: transparent !important;
        position: relative;
        color: white !important;
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none !important;
        border-radius: 4px !important;
        overflow: hidden;
        z-index: 1;
        transition: transform 0.2s !important;
      }
      /* Animated Gradient Background */
      .holo-btn-primary::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(135deg, #00F0FF, #FF00AA, #FFD700, #00F0FF);
        background-size: 300% 300%;
        animation: holo-gradient 4s ease infinite;
        opacity: 0.8;
      }
      .holo-btn-primary:hover::after {
        opacity: 1;
        filter: brightness(1.2);
      }
      
      @keyframes holo-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      .holo-btn-secondary, .ds-btn-ghost, .ds-btn-secondary {
        background: rgba(255,255,255,0.05) !important;
        color: rgba(255,255,255,0.8) !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        border-radius: 4px !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px !important;
      }
      .holo-btn-secondary:hover {
        background: rgba(255,255,255,0.1) !important;
        border-color: rgba(255,255,255,0.3) !important;
        color: white !important;
        box-shadow: 0 0 10px rgba(255,255,255,0.1);
      }

      /* 5. NAVIGATION */
      .holo-nav, .ds-navbar {
        border-bottom: 1px solid rgba(255,255,255,0.05);
        background: rgba(0,0,0,0.5);
      }
      .ds-logo {
        font-weight: 900;
        letter-spacing: 1px;
      }

      /* 6. INPUTS (Glass) */
      .holo-input, .ds-input {
        background: rgba(0,0,0,0.3) !important;
        border: 1px solid rgba(255,255,255,0.1) !important;
        color: white !important;
        border-radius: 8px !important;
        padding-left: 40px !important;
        transition: all 0.3s;
      }
      .ds-input:focus {
        border-image: linear-gradient(90deg, #00F0FF, #FF00AA) 1 !important;
        background: rgba(0,0,0,0.5) !important;
        box-shadow: 0 0 20px rgba(0, 240, 255, 0.1);
      }
      .ds-input-decorator {
        background: transparent !important;
        border: 1px solid #00F0FF;
        box-shadow: 0 0 5px #00F0FF;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid rgba(255,255,255,0.05);
      }
      .ds-stats > div > div:last-child {
        border-right: none;
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        background: linear-gradient(180deg, #fff, rgba(255,255,255,0.5));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: rgba(255,255,255,0.02) !important;
        border: 1px solid rgba(255,255,255,0.05) !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(0, 240, 255, 0.05);
        color: #00F0FF;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 10px;
        border-bottom: 1px solid rgba(0, 240, 255, 0.1) !important;
      }
      .ds-table-container > div:not(:first-child) {
        border-bottom: 1px solid rgba(255,255,255,0.02) !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: linear-gradient(90deg, rgba(0, 240, 255, 0.05), transparent) !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #00F0FF;
        color: #00F0FF !important;
        box-shadow: 0 0 5px rgba(0, 240, 255, 0.2);
      }

      /* 9. PRICING CARDS */
      .ds-card:hover {
        border: 1px solid transparent !important;
        background-image: linear-gradient(#050510, #050510), linear-gradient(135deg, #00F0FF, #FF00AA);
        background-origin: border-box;
        background-clip: content-box, border-box;
        box-shadow: 0 0 30px rgba(255, 0, 170, 0.15);
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 1px solid transparent !important;
        background-image: linear-gradient(#050510, #050510), linear-gradient(135deg, #00F0FF, #FF00AA);
        background-origin: border-box;
        background-clip: content-box, border-box;
      }
      .ds-card:nth-child(2) .absolute {
        background: linear-gradient(90deg, #00F0FF, #FF00AA);
        color: white;
        font-weight: 800;
        letter-spacing: 1px;
      }

      /* 10. BADGE */
      .holo-badge, .ds-badge {
        background: rgba(0,0,0,0.5) !important;
        border: 1px solid rgba(255,255,255,0.2);
        color: white !important;
        backdrop-filter: blur(10px);
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      /* 11. FOOTER */
      .ds-footer {
         background: black !important;
         border-top: 1px solid rgba(255,255,255,0.05) !important;
      }
    `
  }
};
