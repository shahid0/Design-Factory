
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'meditative-light')!;

export const meditativeLight: StyleCartridge = {
  id: 'meditative-light',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#F8F9FA',
      '--text-primary': '#495057', // Soft Charcoal
      '--text-secondary': '#ADB5BD', // Soft Grey
      '--accent-color': '#A5A6F6', // Soft Periwinkle
      '--border-radius': '30px', // Maximum Softness
      '--font-display': '"Nunito", "Quicksand", sans-serif',
    },
    elementClasses: {
      stage: 'med-stage',
      navbar: 'med-nav',
      container: 'med-panel',
      buttonPrimary: 'med-btn-primary',
      buttonSecondary: 'med-btn-secondary',
      input: 'med-input',
      badge: 'med-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');

      /* --- MEDITATIVE LIGHT ENGINE --- */

      .med-stage {
        background-color: #FFFFFF;
        color: #495057;
        font-family: 'Nunito', sans-serif;
      }

      /* Aurora Gradient */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: 
          radial-gradient(circle at 10% 10%, #F3E5F5 0%, transparent 40%), /* Lilac */
          radial-gradient(circle at 90% 90%, #E3F2FD 0%, transparent 40%); /* Light Blue */
        opacity: 0.6;
        z-index: -1;
      }

      /* 2. CONTAINERS (Clouds) */
      .med-panel, .ds-panel, .ds-card, .med-nav {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(20px);
        border: 1px solid #F1F3F5;
        border-radius: 30px;
        box-shadow: 
          0 10px 30px rgba(173, 181, 189, 0.1),
          inset 0 0 20px rgba(255, 255, 255, 0.8);
        padding: 40px;
        position: relative;
        transition: transform 0.5s ease;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(173, 181, 189, 0.15);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 300;
        letter-spacing: 0.02em;
        color: #343A40;
      }
      .ds-hero-title span {
        color: #A5A6F6;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 600;
      }
      .ds-hero-text {
        font-weight: 300;
        color: #868E96;
        line-height: 1.8;
        font-size: 1.1rem;
      }

      /* 4. BUTTONS (Glow) */
      .med-btn-primary, .ds-btn-primary {
        background: linear-gradient(135deg, #A5A6F6 0%, #B2B3FF 100%) !important;
        color: #FFFFFF !important;
        border-radius: 50px !important;
        font-weight: 600 !important;
        padding: 12px 36px !important;
        border: none !important;
        box-shadow: 0 4px 15px rgba(165, 166, 246, 0.3) !important;
        transition: all 0.3s ease !important;
      }
      .med-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.03);
        box-shadow: 0 8px 25px rgba(165, 166, 246, 0.4) !important;
      }

      .med-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: #A5A6F6 !important;
        border: 1px solid #EDE4F5 !important;
        border-radius: 50px !important;
        font-weight: 600 !important;
      }
      .med-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #F8F9FA !important;
      }

      /* 5. NAVIGATION */
      .med-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.6);
        margin: 30px auto !important;
        width: calc(100% - 60px) !important;
        border: 1px solid white;
        padding: 15px 40px;
      }
      .ds-logo {
        font-weight: 600;
        color: #868E96;
        letter-spacing: 0.05em;
      }
      .ds-nav-links span {
        color: #ADB5BD;
        font-weight: 400;
        font-size: 0.95rem;
      }
      .ds-nav-links span:hover {
        color: #A5A6F6;
      }

      /* 6. INPUTS */
      .med-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #F1F3F5 !important;
        border-radius: 50px !important;
        padding-left: 24px !important;
        color: #495057 !important;
        font-size: 1rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.02) !important;
      }
      .ds-input:focus {
        border-color: #A5A6F6 !important;
        box-shadow: 0 0 0 4px rgba(165, 166, 246, 0.1) !important;
      }
      .ds-input-decorator {
        background: #A5A6F6 !important;
        border-radius: 50%;
        width: 10px !important; height: 10px !important;
        left: auto !important; right: 24px !important;
        opacity: 0.5;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        border-radius: 30px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.02);
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        color: #A5A6F6;
      }
      .ds-stats span:first-child {
        color: #ADB5BD;
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 30px !important;
        border: none !important;
        box-shadow: 0 4px 20px rgba(0,0,0,0.02) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F8F9FA !important;
      }
      .ds-table-container > div:first-child {
        background: #F8F9FA;
        color: #868E96;
        font-weight: 600;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #FDFDFD !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #F3E5F5 !important;
        color: #868E96 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 600;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFFFFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid #A5A6F6 !important;
        background: #FFFFFF !important;
        box-shadow: 0 15px 40px rgba(165, 166, 246, 0.15) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #A5A6F6;
      }
      .ds-card:nth-child(2) .absolute {
        background: #A5A6F6;
        color: white;
        border-radius: 0 0 16px 16px;
        font-weight: 600;
        top: 0; right: 40px;
        padding: 6px 20px;
        font-size: 0.8rem;
      }

      /* 10. BADGE */
      .med-badge, .ds-badge {
        background: #F3E5F5 !important;
        color: #868E96 !important;
        border-radius: 50px;
        padding: 4px 12px;
        font-weight: 600;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        margin-top: 80px;
      }
    `
  }
};
