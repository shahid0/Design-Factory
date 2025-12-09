
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'organic')!;

export const bioDigital: StyleCartridge = {
  id: 'organic',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0D1117', // Dark Bio-Matter
      '--bg-layer-2': '#161B22',
      '--text-primary': '#E6EDF3',
      '--text-secondary': '#8B949E',
      '--accent-color': '#2EA043', // Bio Green
      '--border-radius': '24px', // Smooth Cells
      '--font-display': '"Space Mono", "Nunito", sans-serif',
    },
    elementClasses: {
      stage: 'bio-stage',
      navbar: 'bio-nav',
      container: 'bio-panel',
      buttonPrimary: 'bio-btn-primary',
      buttonSecondary: 'bio-btn-secondary',
      input: 'bio-input',
      badge: 'bio-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Nunito:wght@400;700&display=swap');

      /* --- BIO-DIGITAL ENGINE --- */

      .bio-stage {
        background-color: #0D1117;
        color: #E6EDF3;
        font-family: 'Nunito', sans-serif;
      }

      /* Cell Pattern Background */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: radial-gradient(#2EA043 1px, transparent 1px);
        background-size: 30px 30px;
        opacity: 0.1;
        z-index: -1;
      }
      
      /* Glowing Organic Blobs */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 20%; left: 20%;
        width: 400px; height: 400px;
        background: radial-gradient(circle, rgba(46, 160, 67, 0.2) 0%, transparent 70%);
        filter: blur(50px);
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        animation: morph 10s infinite alternate;
        z-index: -2;
      }

      @keyframes morph {
        0% { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
        100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      }

      /* 2. CONTAINERS (Cells) */
      .bio-panel, .ds-panel, .ds-card, .bio-nav {
        background: rgba(22, 27, 34, 0.8);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(46, 160, 67, 0.3);
        border-radius: 24px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
      }
      
      .ds-panel:hover, .ds-card:hover {
        border-color: var(--accent-color);
        box-shadow: 0 0 20px rgba(46, 160, 67, 0.2);
        transform: scale(1.01);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        color: #E6EDF3;
        letter-spacing: -1px;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 15px rgba(46, 160, 67, 0.5);
      }
      .ds-hero-text {
        color: #8B949E;
        font-size: 1.1rem;
        border-left: 2px solid var(--accent-color);
        padding-left: 20px;
      }

      /* 4. BUTTONS (Pills) */
      .bio-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFF !important;
        border-radius: 50px !important;
        font-family: 'Space Mono', monospace !important;
        font-weight: 700 !important;
        border: none !important;
        padding: 12px 30px !important;
        box-shadow: 0 0 10px rgba(46, 160, 67, 0.3) !important;
        transition: all 0.3s ease !important;
      }
      .bio-btn-primary:hover, .ds-btn-primary:hover {
        background: #3FB950 !important;
        box-shadow: 0 0 20px rgba(46, 160, 67, 0.6) !important;
        transform: translateY(-2px);
      }

      .bio-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #E6EDF3 !important;
        border: 1px solid #30363D !important;
        border-radius: 50px !important;
        font-family: 'Space Mono', monospace !important;
      }
      .bio-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: var(--accent-color) !important;
        background: rgba(46, 160, 67, 0.1) !important;
      }

      /* 5. NAVIGATION */
      .bio-nav, .ds-navbar {
        background: rgba(13, 17, 23, 0.9);
        border-bottom: 1px solid rgba(46, 160, 67, 0.2);
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        border-radius: 0 !important;
      }
      .ds-logo {
        font-family: 'Space Mono', monospace;
        font-weight: 700;
        color: var(--accent-color);
      }
      .ds-nav-links span {
        color: #8B949E;
        font-family: 'Space Mono', monospace;
        font-size: 0.9rem;
      }
      .ds-nav-links span:hover {
        color: #E6EDF3;
        text-shadow: 0 0 5px rgba(46, 160, 67, 0.5);
      }

      /* 6. INPUTS */
      .bio-input, .ds-input {
        background: #0D1117 !important;
        border: 1px solid #30363D !important;
        border-radius: 12px !important;
        color: #E6EDF3 !important;
        padding-left: 20px !important;
        font-family: 'Space Mono', monospace;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 0 2px rgba(46, 160, 67, 0.2) !important;
      }
      .ds-input-decorator {
        background: var(--accent-color) !important;
        border-radius: 50%;
        width: 8px !important; height: 8px !important;
        left: auto !important; right: 20px !important;
        box-shadow: 0 0 5px var(--accent-color);
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #161B22;
        border: 1px solid #30363D;
        border-radius: 16px;
      }
      .ds-stats .text-3xl {
        font-family: 'Space Mono', monospace;
        color: var(--accent-color);
      }
      .ds-stats span:first-child {
        color: #8B949E;
        font-size: 0.8rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #30363D !important;
        background: #0D1117 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #21262D !important;
      }
      .ds-table-container > div:first-child {
        background: #161B22;
        color: #E6EDF3;
        font-family: 'Space Mono', monospace;
        font-size: 0.9rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(46, 160, 67, 0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: rgba(46, 160, 67, 0.15) !important;
        color: #3FB950 !important;
        border: 1px solid rgba(46, 160, 67, 0.4);
        border-radius: 50px;
        padding: 2px 10px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #161B22 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid var(--accent-color) !important;
        box-shadow: 0 0 20px rgba(46, 160, 67, 0.1) !important;
        animation: breathe 4s infinite alternate;
      }
      @keyframes breathe {
         0% { box-shadow: 0 0 20px rgba(46, 160, 67, 0.1); }
         100% { box-shadow: 0 0 30px rgba(46, 160, 67, 0.3); }
      }
      
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #FFF;
        border-radius: 0 0 12px 12px;
        font-family: 'Space Mono', monospace;
        font-size: 0.8rem;
        top: 0; right: 20px;
        padding: 4px 12px;
      }
      
      /* 10. TOGGLES (Organism) */
      .mannequin-toggle-track {
        background: #21262D;
        border: 1px solid #30363D;
        border-radius: 50px;
      }
      .mannequin-toggle-track.active {
        background: rgba(46, 160, 67, 0.3);
        border-color: #2EA043;
      }
      .mannequin-toggle-thumb {
        background: #E6EDF3;
        border-radius: 50%;
        box-shadow: 0 0 10px rgba(255,255,255,0.2);
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         background: #2EA043;
         box-shadow: 0 0 15px #2EA043;
      }

      /* 11. BADGE */
      .bio-badge, .ds-badge {
        background: rgba(46, 160, 67, 0.15) !important;
        color: #3FB950 !important;
        border: 1px solid rgba(46, 160, 67, 0.4);
        border-radius: 50px;
        padding: 4px 12px;
        font-family: 'Space Mono', monospace;
      }

      /* 12. FOOTER */
      .ds-footer {
        background: #161B22 !important;
        border-top: 1px solid #30363D !important;
        margin-top: 60px;
      }
    `
  }
};
