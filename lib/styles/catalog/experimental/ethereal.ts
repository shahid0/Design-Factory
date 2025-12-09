
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'ethereal')!;

export const ethereal: StyleCartridge = {
  id: 'ethereal',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF', // Divine Light
      '--bg-layer-2': 'rgba(255,255,255,0.5)',
      '--text-primary': '#4A4A4A', // Soft Grey
      '--text-secondary': '#A0A0A0',
      '--accent-color': '#E0B0FF', // Mauve
      '--border-radius': '40px', // Softest
      '--font-display': '"Cormorant Garamond", serif',
    },
    elementClasses: {
      stage: 'ethereal-stage',
      navbar: 'ethereal-nav',
      container: 'ethereal-panel',
      buttonPrimary: 'ethereal-btn-primary',
      buttonSecondary: 'ethereal-btn-secondary',
      input: 'ethereal-input',
      badge: 'ethereal-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=Montserrat:wght@200;400&display=swap');

      .ethereal-stage {
        background: linear-gradient(135deg, #FFFFFF 0%, #F3E5F5 100%);
        color: #4A4A4A;
        font-family: 'Montserrat', sans-serif;
      }

      /* Lens Flares / Glows */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: -20%; right: -20%;
        width: 800px; height: 800px;
        background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(224, 176, 255, 0.2) 60%, transparent 80%);
        filter: blur(60px);
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        bottom: 10%; left: 10%;
        width: 400px; height: 400px;
        background: radial-gradient(circle, rgba(255, 250, 205, 0.4) 0%, transparent 70%);
        filter: blur(40px);
        z-index: -1;
      }

      /* Panels (Soft Glass) */
      .ethereal-panel, .ds-panel, .ds-card, .ethereal-nav {
        background: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(30px);
        border: 1px solid rgba(255, 255, 255, 0.8);
        border-radius: 40px;
        box-shadow: 0 20px 40px rgba(200, 200, 255, 0.15);
        padding: 40px;
        transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 30px 60px rgba(200, 200, 255, 0.25);
        background: rgba(255, 255, 255, 0.6);
      }

      /* Typography */
      .ds-hero-title {
        font-family: 'Cormorant Garamond', serif;
        font-weight: 300;
        font-style: italic;
        color: #333;
        font-size: 5rem;
        letter-spacing: -1px;
      }
      .ds-hero-title span {
        background: linear-gradient(to right, #E0B0FF, #FFB7B2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 600;
      }

      /* Buttons (Halo) */
      .ethereal-btn-primary, .ds-btn-primary {
        background: #FFFFFF !important;
        color: #4A4A4A !important;
        border-radius: 50px !important;
        font-family: 'Cormorant Garamond', serif !important;
        font-size: 1.2rem !important;
        padding: 12px 36px !important;
        border: 1px solid rgba(255,255,255,0.5) !important;
        box-shadow: 0 0 20px rgba(224, 176, 255, 0.4) !important;
        transition: all 0.4s ease !important;
      }
      .ethereal-btn-primary:hover, .ds-btn-primary:hover {
        box-shadow: 0 0 40px rgba(224, 176, 255, 0.6) !important;
        transform: scale(1.05);
      }

      .ethereal-btn-secondary, .ds-btn-secondary {
        background: rgba(255,255,255,0.2) !important;
        border: 1px solid rgba(255,255,255,0.6) !important;
        color: #666 !important;
        border-radius: 50px !important;
      }

      /* Inputs */
      .ethereal-input, .ds-input {
        background: rgba(255,255,255,0.5) !important;
        border: 1px solid rgba(255,255,255,0.8) !important;
        border-radius: 30px !important;
        padding-left: 24px !important;
        color: #555 !important;
        font-family: 'Montserrat', sans-serif;
      }
      .ds-input:focus {
        box-shadow: 0 0 20px rgba(224, 176, 255, 0.3) !important;
      }

      /* Stats */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.3);
        border: 1px solid #FFF;
        border-radius: 30px;
      }
      .ds-stats .text-3xl {
        font-family: 'Cormorant Garamond', serif;
        color: #E0B0FF;
      }

      /* Pricing */
      .ds-card:nth-child(2) {
        border: 1px solid #E0B0FF !important;
        background: rgba(255,255,255,0.7) !important;
        box-shadow: 0 20px 50px rgba(224, 176, 255, 0.3) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #E0B0FF;
      }
      .ds-card:nth-child(2) .absolute {
        background: #E0B0FF;
        color: #FFF;
        border-radius: 0 0 20px 20px;
        padding: 8px 24px;
        font-family: 'Cormorant Garamond', serif;
      }
      
      /* 10. TOGGLES (Glowing Orb) */
      .mannequin-toggle-track {
        background: rgba(255, 255, 255, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: inset 0 0 10px rgba(200, 200, 255, 0.1);
      }
      .mannequin-toggle-track.active {
        background: rgba(224, 176, 255, 0.3);
        box-shadow: 0 0 20px rgba(224, 176, 255, 0.4);
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
      }
      
      /* 11. TABS (Underline Glow) */
      .ds-nav-links span.active, .ds-nav-links span:hover {
         color: #E0B0FF;
         text-shadow: 0 0 10px rgba(224, 176, 255, 0.6);
      }

      /* Footer */
      .ds-footer {
        background: rgba(255,255,255,0.3) !important;
        margin-top: 100px;
      }
    `
  }
};
