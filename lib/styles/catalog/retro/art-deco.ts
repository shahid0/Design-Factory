
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'art-deco')!;

export const artDeco: StyleCartridge = {
  id: 'art-deco',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#0F0F0F', // Onyx Black
      '--bg-layer-2': '#1A1A1A', // Charcoal
      '--text-primary': '#E5D3B3', // Champagne
      '--text-secondary': '#A69B8D', // Muted Gold
      '--accent-color': '#D4AF37', // Metallic Gold
      '--border-radius': '2px', // Sharp but slightly softened
      '--font-display': '"Limelight", "Poiret One", cursive',
    },
    elementClasses: {
      stage: 'deco-stage',
      navbar: 'deco-nav',
      container: 'deco-panel',
      buttonPrimary: 'deco-btn-primary',
      buttonSecondary: 'deco-btn-secondary',
      input: 'deco-input',
      badge: 'deco-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Limelight&family=Poiret+One&family=Josefin+Sans:wght@300;400;600&display=swap');

      /* --- ART DECO ENGINE --- */

      /* 1. THE GREAT GATSBY BACKGROUND */
      .deco-stage {
        background-color: #0F0F0F;
        color: var(--text-primary);
        font-family: 'Josefin Sans', sans-serif;
        overflow-x: hidden;
      }

      /* Fan Pattern Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-color: #0F0F0F;
        opacity: 0.1;
        background-image: 
          radial-gradient(circle at 100% 150%, #D4AF37 24%, #0F0F0F 25%, #0F0F0F 28%, #D4AF37 29%, #D4AF37 36%, #0F0F0F 36%, #0F0F0F 40%, transparent 40%, transparent),
          radial-gradient(circle at 0    150%, #D4AF37 24%, #0F0F0F 25%, #0F0F0F 28%, #D4AF37 29%, #D4AF37 36%, #0F0F0F 36%, #0F0F0F 40%, transparent 40%, transparent),
          radial-gradient(circle at 50%  100%, #D4AF37 10%, #0F0F0F 11%, #0F0F0F 23%, #D4AF37 24%, #D4AF37 30%, #0F0F0F 31%, #0F0F0F 43%, #D4AF37 44%, #D4AF37 50%, #0F0F0F 51%, #0F0F0F 63%, #D4AF37 64%, #D4AF37 71%, transparent 71%, transparent),
          radial-gradient(circle at 100% 50%, #D4AF37 5%, #0F0F0F 6%, #0F0F0F 15%, #D4AF37 16%, #D4AF37 20%, #0F0F0F 21%, #0F0F0F 30%, #D4AF37 31%, #D4AF37 35%, #0F0F0F 36%, #0F0F0F 45%, #D4AF37 46%, #D4AF37 49%, transparent 50%, transparent),
          radial-gradient(circle at 0    50%, #D4AF37 5%, #0F0F0F 6%, #0F0F0F 15%, #D4AF37 16%, #D4AF37 20%, #0F0F0F 21%, #0F0F0F 30%, #D4AF37 31%, #D4AF37 35%, #0F0F0F 36%, #0F0F0F 45%, #D4AF37 46%, #D4AF37 49%, transparent 50%, transparent);
        background-size: 100px 50px;
        z-index: -1;
        opacity: 0.08;
      }
      
      /* Gold Grain */
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
        z-index: -1;
        pointer-events: none;
      }

      /* 2. FRAMES (The Deco Border) */
      .deco-panel, .ds-panel, .ds-card, .deco-nav {
        background: linear-gradient(135deg, #1A1A1A 0%, #0F0F0F 100%);
        border: 1px solid #D4AF37;
        box-shadow: 
          0 0 0 4px #0F0F0F, 
          0 0 0 5px #D4AF37,
          0 10px 20px rgba(0,0,0,0.5);
        border-radius: 0;
        position: relative;
        margin: 10px; /* Space for double border */
        transition: transform 0.3s ease;
      }
      
      /* Corner Flourishes */
      .deco-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        inset: 4px;
        border: 1px solid rgba(212, 175, 55, 0.3);
        pointer-events: none;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 
          0 0 0 4px #0F0F0F, 
          0 0 0 6px #FCEEAC, /* Brighter Gold */
          0 15px 30px rgba(0,0,0,0.6);
      }

      /* 3. TYPOGRAPHY (Opulence) */
      .ds-hero-title {
        font-family: 'Limelight', cursive;
        font-weight: 400;
        font-size: 4.5rem;
        line-height: 1.1;
        color: #D4AF37;
        text-transform: uppercase;
        letter-spacing: 2px;
        background: linear-gradient(to bottom, #FCEEAC 0%, #D4AF37 50%, #996515 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: 0 4px 10px rgba(0,0,0,0.5);
      }
      .ds-hero-title span {
        font-family: 'Poiret One', cursive;
        font-weight: 900;
        color: #E5D3B3;
        background: none;
        -webkit-text-fill-color: initial;
        text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
      }
      .ds-hero-text {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        font-size: 1.2rem;
        letter-spacing: 1px;
        color: #A69B8D;
        border-top: 1px solid #D4AF37;
        border-bottom: 1px solid #D4AF37;
        padding: 20px 0;
        margin-top: 20px;
        max-width: 600px;
      }
      
      /* Section Titles */
      .ds-section-title {
        font-family: 'Limelight', cursive;
        color: #D4AF37 !important;
        letter-spacing: 2px;
        text-align: center;
        width: 100%;
        border-bottom: 2px solid #D4AF37;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }

      /* 4. BUTTONS (Geometric Lux) */
      .deco-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #D4AF37 !important;
        font-family: 'Poiret One', cursive !important;
        font-weight: 900 !important;
        text-transform: uppercase;
        letter-spacing: 3px;
        border: 1px solid #D4AF37 !important;
        padding: 12px 40px !important;
        position: relative;
        overflow: visible;
        transition: all 0.3s ease !important;
        box-shadow: inset 0 0 20px rgba(212, 175, 55, 0.1);
      }
      /* Sunburst ends for button */
      .deco-btn-primary::before, .deco-btn-primary::after,
      .ds-btn-primary::before, .ds-btn-primary::after {
        content: "◆";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #D4AF37;
        font-size: 10px;
      }
      .deco-btn-primary::before, .ds-btn-primary::before { left: 10px; }
      .deco-btn-primary::after, .ds-btn-primary::after { right: 10px; }

      .deco-btn-primary:hover, .ds-btn-primary:hover {
        background: #D4AF37 !important;
        color: #000 !important;
        box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
      }
      .deco-btn-primary:hover::before, .deco-btn-primary:hover::after,
      .ds-btn-primary:hover::before, .ds-btn-primary:hover::after {
        color: #000;
      }

      .deco-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #A69B8D !important;
        border: 1px solid #555 !important;
        font-family: 'Josefin Sans', sans-serif !important;
        text-transform: uppercase;
        letter-spacing: 2px;
      }
      .deco-btn-secondary:hover, .ds-btn-secondary:hover, .ds-btn-ghost:hover {
        border-color: #D4AF37 !important;
        color: #D4AF37 !important;
      }

      /* 5. NAVIGATION (Frieze) */
      .deco-nav, .ds-navbar {
        background: #0F0F0F;
        border-bottom: 3px double #D4AF37;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
        box-shadow: none !important; /* Reset deco panel shadow */
        border-left: none;
        border-right: none;
        border-top: none;
      }
      .ds-logo {
        font-family: 'Limelight', cursive;
        font-size: 2rem;
        background: linear-gradient(to right, #D4AF37, #FCEEAC, #D4AF37);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-nav-links span {
        font-family: 'Poiret One', cursive;
        font-weight: 900;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #A69B8D;
      }
      .ds-nav-links span:hover {
        color: #D4AF37;
        text-decoration: underline;
        text-underline-offset: 5px;
        text-decoration-thickness: 1px;
      }

      /* 6. INPUTS (Ticket Booth) */
      .deco-input, .ds-input {
        background: #000 !important;
        border: 1px solid #D4AF37 !important;
        border-radius: 0 !important;
        color: #D4AF37 !important;
        font-family: 'Josefin Sans', sans-serif !important;
        letter-spacing: 1px;
        padding-left: 40px !important;
        height: 50px;
      }
      .ds-input:focus {
        box-shadow: 0 0 15px rgba(212, 175, 55, 0.2) !important;
        background: #111 !important;
      }
      .ds-input-decorator {
        background: transparent !important;
        color: #D4AF37;
        border: 1px solid #D4AF37;
        transform: rotate(45deg);
        width: 10px !important; height: 10px !important;
        border-radius: 0 !important;
        left: 15px !important;
      }

      /* 7. STATS (Sunburst Metrics) */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 1px solid #D4AF37;
        border-bottom: 1px solid #D4AF37;
        position: relative;
      }
      .ds-stats::before {
         content: "";
         position: absolute;
         top: 2px; bottom: 2px; left: 0; right: 0;
         border-top: 1px solid #555;
         border-bottom: 1px solid #555;
         pointer-events: none;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #D4AF37;
        padding: 20px;
        box-shadow: none; /* remove deco panel default */
        border-left: none; border-top: none; border-bottom: none;
      }
      .ds-stats > div > div:last-child {
        border-right: none;
      }
      .ds-stats .text-3xl {
        font-family: 'Poiret One', cursive;
        color: #FCEEAC;
        font-weight: 900;
        text-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
      }
      .ds-stats span:first-child {
        color: #A69B8D;
        font-family: 'Josefin Sans', sans-serif;
        letter-spacing: 2px;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      /* 8. TABLE (The Guest List) */
      .ds-table-container {
        border: 1px solid #D4AF37 !important;
        background: #0A0A0A !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #333 !important;
      }
      .ds-table-container > div:first-child {
        background: linear-gradient(to right, #0F0F0F, #1A1A1A);
        border-bottom: 2px solid #D4AF37 !important;
        color: #D4AF37;
        font-family: 'Limelight', cursive;
        letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(212, 175, 55, 0.1) !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #D4AF37;
        color: #D4AF37 !important;
        font-family: 'Poiret One', cursive;
        font-weight: 900;
        padding: 4px 12px;
        border-radius: 0;
      }

      /* 9. PRICING CARDS (Menu) */
      .ds-card {
        padding: 40px !important;
        background: #0A0A0A !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #D4AF37 !important;
        box-shadow: 
          0 0 0 4px #0F0F0F, 
          0 0 0 6px #D4AF37,
          0 20px 40px rgba(0,0,0,0.8) !important;
        transform: scale(1.05);
        z-index: 10;
        background: #111 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #FCEEAC;
      }
      .ds-card:nth-child(2) .absolute {
        background: #D4AF37;
        color: #000;
        font-family: 'Limelight', cursive;
        text-transform: uppercase;
        padding: 5px 20px;
        top: -15px;
        right: 50%;
        transform: translateX(50%);
        border: 2px solid #000;
      }
      
      .ds-card button {
         border-radius: 0 !important;
      }

      /* 10. BADGE */
      .deco-badge, .ds-badge {
        background: transparent !important;
        color: #D4AF37 !important;
        border: 1px solid #D4AF37;
        font-family: 'Poiret One', cursive;
        font-weight: 900;
        letter-spacing: 1px;
        padding: 4px 12px;
        box-shadow: inset 0 0 10px rgba(212, 175, 55, 0.2);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #080808 !important;
        border-top: 1px solid #D4AF37 !important;
        margin-top: 80px;
        position: relative;
      }
      .ds-footer::before {
         /* Top decorative line */
         content: "";
         position: absolute;
         top: 4px; left: 0; right: 0;
         border-top: 1px solid #333;
      }
      .ds-footer h4 {
         font-family: 'Limelight', cursive;
         color: #D4AF37 !important;
      }
    `
  }
};
