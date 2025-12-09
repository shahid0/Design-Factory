
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'arabesque-vibrance')!;

export const arabesqueVibrance: StyleCartridge = {
  id: 'arabesque-vibrance',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#004D40', // Deep Teal
      '--bg-layer-2': '#00695C', // Teal Surface
      '--text-primary': '#FFD700', // Gold
      '--text-secondary': '#E0F2F1', // Light Teal
      '--accent-color': '#D81B60', // Jewel Pink
      '--border-radius': '8px',
      '--font-display': '"Cinzel", "Amiri", serif',
    },
    elementClasses: {
      stage: 'arabesque-stage',
      navbar: 'arabesque-nav',
      container: 'arabesque-panel',
      buttonPrimary: 'arabesque-btn-primary',
      buttonSecondary: 'arabesque-btn-secondary',
      input: 'arabesque-input',
      badge: 'arabesque-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Amiri:wght@400;700&display=swap');

      /* --- ARABESQUE VIBRANCE ENGINE --- */

      .arabesque-stage {
        background-color: #004D40;
        color: #FFD700;
        font-family: 'Amiri', serif;
        overflow-x: hidden;
      }

      /* Geometric Tile Pattern */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-color: #004D40;
        background-image: 
          radial-gradient(circle at 100% 150%, #004D40 24%, #00695C 25%, #00695C 28%, #004D40 29%, #004D40 36%, #00695C 36%, #00695C 40%, transparent 40%, transparent),
          radial-gradient(circle at 0    150%, #004D40 24%, #00695C 25%, #00695C 28%, #004D40 29%, #004D40 36%, #00695C 36%, #00695C 40%, transparent 40%, transparent),
          radial-gradient(circle at 50%  100%, #00695C 10%, #004D40 11%, #004D40 23%, #00695C 24%, #00695C 30%, #004D40 31%, #004D40 43%, #00695C 44%, #00695C 50%, #004D40 51%, #004D40 63%, #00695C 64%, #00695C 71%, transparent 71%, transparent),
          radial-gradient(circle at 100% 50%, #00695C 5%, #004D40 6%, #004D40 15%, #00695C 16%, #00695C 20%, #004D40 21%, #004D40 30%, #00695C 31%, #00695C 35%, #004D40 36%, #004D40 45%, #00695C 46%, #00695C 49%, transparent 50%, transparent),
          radial-gradient(circle at 0    50%, #00695C 5%, #004D40 6%, #004D40 15%, #00695C 16%, #00695C 20%, #004D40 21%, #004D40 30%, #00695C 31%, #00695C 35%, #004D40 36%, #004D40 45%, #00695C 46%, #00695C 49%, transparent 50%, transparent);
        background-size: 50px 25px;
        opacity: 0.3;
        z-index: -1;
      }

      /* 2. ORNATE PANELS */
      .arabesque-panel, .ds-panel, .ds-card, .arabesque-nav {
        background: #00695C;
        border: 2px solid #FFD700;
        border-radius: 8px; /* Arch-like */
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        position: relative;
        padding: 25px;
        margin: 15px;
      }
      
      /* Inner Border */
      .arabesque-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        inset: 4px;
        border: 1px dashed #FFD700;
        border-radius: 4px;
        pointer-events: none;
      }

      .ds-panel:hover, .ds-card:hover {
        background: #00796B;
        transform: translateY(-2px);
        box-shadow: 0 10px 20px rgba(0,0,0,0.4);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Cinzel', serif;
        font-weight: 700;
        color: #FFD700;
        text-shadow: 2px 2px 0 #D81B60;
        font-size: 4rem;
        letter-spacing: 2px;
      }
      .ds-hero-title span {
        color: #D81B60;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-family: 'Amiri', serif;
        font-style: italic;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        line-height: 1.8;
        color: #E0F2F1;
        border-top: 1px solid #FFD700;
        border-bottom: 1px solid #FFD700;
        padding: 20px 0;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Jewel) */
      .arabesque-btn-primary, .ds-btn-primary {
        background: #D81B60 !important; /* Ruby */
        color: #FFD700 !important; /* Gold text */
        border: 2px solid #FFD700 !important;
        border-radius: 8px 24px 8px 24px !important;
        font-family: 'Cinzel', serif !important;
        font-weight: 700 !important;
        padding: 12px 30px !important;
        box-shadow: 0 0 15px rgba(216, 27, 96, 0.4) !important;
        transition: all 0.3s ease !important;
      }
      .arabesque-btn-primary:hover, .ds-btn-primary:hover {
        background: #C2185B !important;
        box-shadow: 0 0 25px rgba(255, 215, 0, 0.6) !important;
        transform: scale(1.05);
      }

      .arabesque-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #FFD700 !important;
        border: 1px solid #FFD700 !important;
        font-family: 'Cinzel', serif !important;
        font-weight: 600 !important;
        border-radius: 24px 8px 24px 8px !important;
      }
      .arabesque-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(255, 215, 0, 0.1) !important;
      }

      /* 5. NAVIGATION */
      .arabesque-nav, .ds-navbar {
        background: #004D40;
        border-bottom: 2px solid #FFD700;
        margin: 0 !important;
        width: 100% !important;
        border-radius: 0 !important;
        padding: 20px 40px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      }
      .ds-logo {
        font-family: 'Cinzel', serif;
        font-size: 1.8rem;
        color: #FFD700;
      }
      .ds-nav-links span {
        font-family: 'Cinzel', serif;
        color: #E0F2F1;
        letter-spacing: 1px;
      }
      .ds-nav-links span:hover {
        color: #D81B60;
        text-shadow: 0 0 5px #FFD700;
      }

      /* 6. INPUTS */
      .arabesque-input, .ds-input {
        background: #00796B !important;
        border: 1px solid #FFD700 !important;
        color: #FFD700 !important;
        font-family: 'Amiri', serif;
        font-size: 1.2rem !important;
        padding-left: 20px !important;
        border-radius: 4px !important;
      }
      .ds-input:focus {
        background: #004D40 !important;
        box-shadow: 0 0 10px #FFD700 !important;
      }
      .ds-input-decorator {
        background: #D81B60 !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        right: 15px !important;
        border: 1px solid #FFD700;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #00695C;
        border: 2px solid #D81B60;
        border-radius: 8px;
        padding: 20px;
        margin: 10px;
      }
      .ds-stats .text-3xl {
        font-family: 'Cinzel', serif;
        color: #FFD700;
      }
      .ds-stats span:first-child {
        color: #E0F2F1;
        font-family: 'Amiri', serif;
        font-size: 1rem;
        border-bottom: 1px solid #D81B60;
        display: inline-block;
        margin-bottom: 5px;
      }

      /* 8. TABLE */
      .ds-table-container {
        background: #004D40 !important;
        border: 2px solid #FFD700 !important;
        border-radius: 8px !important;
      }
      .ds-table-container > div:first-child {
        background: #00796B;
        color: #FFD700;
        font-family: 'Cinzel', serif;
        border-bottom: 2px solid #FFD700 !important;
        font-weight: 700;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #00695C !important;
      }
      /* Status */
      .ds-table-container span {
        background: #D81B60 !important;
        color: #FFD700 !important;
        border: 1px solid #FFD700;
        border-radius: 4px;
        font-family: 'Amiri', serif;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
        background: #004D40 !important;
        border: 2px solid #FFD700 !important;
        transform: scale(1.05);
        z-index: 10;
        box-shadow: 0 0 20px rgba(255, 215, 0, 0.3) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FFD700;
      }
      .ds-card:nth-child(2) .absolute {
        background: #D81B60;
        color: #FFD700;
        font-family: 'Cinzel', serif;
        font-weight: 700;
        padding: 5px 20px;
        border: 1px solid #FFD700;
        border-top: none;
        border-radius: 0 0 8px 8px;
        top: 0; right: 20px;
      }

      /* 10. BADGE */
      .arabesque-badge, .ds-badge {
        background: #00796B !important;
        color: #FFD700 !important;
        border: 1px solid #FFD700;
        font-family: 'Cinzel', serif;
        font-size: 0.7rem;
        padding: 4px 12px;
        border-radius: 4px;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #00695C !important;
        border-top: 4px solid #FFD700 !important;
        margin-top: 60px;
      }
      .ds-footer h4 { color: #D81B60 !important; font-family: 'Cinzel', serif; }
    `
  }
};
