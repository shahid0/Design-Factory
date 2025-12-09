
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'architectural')!;

export const architectural: StyleCartridge = {
  id: 'architectural',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F5F5F5', // Blueprint Grey
      '--bg-layer-2': '#FFFFFF',
      '--text-primary': '#2B2B2B', // Graphite
      '--text-secondary': '#888888', // Pencil
      '--accent-color': '#000000', // Ink
      '--border-radius': '0px',
      '--font-display': '"Manrope", "DM Sans", sans-serif',
    },
    elementClasses: {
      stage: 'arch-stage',
      navbar: 'arch-nav',
      container: 'arch-panel',
      buttonPrimary: 'arch-btn-primary',
      buttonSecondary: 'arch-btn-secondary',
      input: 'arch-input',
      badge: 'arch-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;800&family=DM+Sans:wght@400;700&display=swap');

      /* --- ARCHITECTURAL ENGINE --- */

      .arch-stage {
        background-color: #F5F5F5;
        color: #2B2B2B;
        font-family: 'Manrope', sans-serif;
      }

      /* Layout Lines */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        left: 50%; top: 0; bottom: 0; width: 1px;
        background: rgba(0,0,0,0.1);
        border-left: 1px dashed rgba(0,0,0,0.1);
        margin-left: -1px;
        z-index: 0;
      }
      .ds-deco-layer::after {
        content: "";
        position: fixed;
        top: 33%; left: 0; right: 0; height: 1px;
        background: rgba(0,0,0,0.05);
        z-index: 0;
      }

      /* 2. CONTAINERS (Drafting) */
      .arch-panel, .ds-panel, .ds-card, .arch-nav {
        background: #FFFFFF;
        border: 1px solid #E0E0E0;
        box-shadow: none;
        border-radius: 0;
        padding: 32px;
        position: relative;
      }
      
      /* Corner Marks */
      .arch-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: -1px; left: -1px;
        width: 10px; height: 10px;
        border-top: 2px solid #000;
        border-left: 2px solid #000;
      }
      .arch-panel::after, .ds-panel::after, .ds-card::after {
        content: "";
        position: absolute;
        bottom: -1px; right: -1px;
        width: 10px; height: 10px;
        border-bottom: 2px solid #000;
        border-right: 2px solid #000;
      }

      .ds-panel:hover, .ds-card:hover {
        background: #FAFAFA;
        border-color: #000;
      }

      /* 3. TYPOGRAPHY (Technical) */
      .ds-hero-title {
        font-weight: 300;
        letter-spacing: -0.05em;
        font-size: 4rem;
        border-left: 1px solid #000;
        padding-left: 20px;
        line-height: 1;
      }
      .ds-hero-title span {
        font-weight: 800;
        background: transparent;
        -webkit-text-fill-color: initial;
        display: block;
      }
      .ds-hero-text {
        font-family: 'DM Sans', sans-serif;
        font-size: 0.9rem;
        color: #666;
        margin-top: 30px;
        max-width: 400px;
        position: relative;
      }
      /* Measurement Line */
      .ds-hero-text::before {
        content: "120px";
        position: absolute;
        left: -50px; top: 0; bottom: 0;
        border-left: 1px solid #CCC;
        display: flex;
        align-items: center;
        justify-content: center;
        writing-mode: vertical-rl;
        font-size: 10px;
        color: #999;
        transform: rotate(180deg);
      }

      /* 4. BUTTONS (Precision) */
      .arch-btn-primary, .ds-btn-primary {
        background: #2B2B2B !important;
        color: #FFF !important;
        border-radius: 0 !important;
        font-family: 'Manrope', sans-serif !important;
        font-weight: 600 !important;
        font-size: 0.8rem !important;
        padding: 12px 30px !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: 1px solid #2B2B2B !important;
        transition: all 0.2s !important;
      }
      .arch-btn-primary:hover, .ds-btn-primary:hover {
        background: #FFF !important;
        color: #000 !important;
      }

      .arch-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #2B2B2B !important;
        border: 1px solid #CCC !important;
        border-radius: 0 !important;
        font-size: 0.8rem !important;
        text-transform: uppercase;
      }
      .arch-btn-secondary:hover, .ds-btn-secondary:hover {
        border-color: #000 !important;
      }

      /* 5. NAVIGATION */
      .arch-nav, .ds-navbar {
        border-bottom: 1px solid #E0E0E0;
        margin: 0 !important;
        width: 100% !important;
        background: #FFF;
        padding: 20px 40px;
      }
      .ds-logo {
        font-weight: 800;
        letter-spacing: -1px;
        border: 2px solid #000;
        padding: 5px 10px;
      }
      .ds-nav-links span {
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        color: #888;
      }
      .ds-nav-links span:hover {
        color: #000;
        text-decoration: line-through;
      }

      /* 6. INPUTS */
      .arch-input, .ds-input {
        background: #F9F9F9 !important;
        border: 1px solid #E0E0E0 !important;
        border-radius: 0 !important;
        font-family: 'DM Sans', sans-serif;
        font-size: 0.9rem !important;
        padding-left: 40px !important;
      }
      .ds-input:focus {
        background: #FFF !important;
        border-color: #000 !important;
      }
      .ds-input-decorator {
        background: #000 !important;
        width: 4px !important; height: 4px !important;
        border-radius: 0 !important;
        left: 20px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
        padding: 40px 0;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #E0E0E0;
        padding: 0 40px;
        text-align: left;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-weight: 300;
        color: #000;
        font-size: 3.5rem;
        line-height: 1;
      }
      .ds-stats span:first-child {
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: #888;
        display: block;
        margin-bottom: 10px;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 1px solid #E0E0E0 !important;
        border-radius: 0 !important;
        background: #FFF !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E0E0E0 !important;
      }
      .ds-table-container > div:first-child {
        background: #F5F5F5;
        font-size: 0.7rem;
        text-transform: uppercase;
        font-weight: 800;
        letter-spacing: 1px;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FAFAFA !important;
      }
      /* Status */
      .ds-table-container span {
        background: transparent !important;
        border: 1px solid #000;
        color: #000 !important;
        border-radius: 0;
        font-size: 0.65rem;
        padding: 2px 6px;
        text-transform: uppercase;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFF !important;
        padding: 40px !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #000 !important;
        transform: translateY(-10px);
        box-shadow: 10px 10px 0 #E0E0E0 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        text-decoration: underline;
      }
      .ds-card:nth-child(2) .absolute {
        background: #000;
        color: #FFF;
        font-size: 0.7rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 5px 10px;
        top: 0; right: 0;
        border-radius: 0;
      }

      /* 10. BADGE */
      .arch-badge, .ds-badge {
        background: #E0E0E0 !important;
        color: #000 !important;
        border-radius: 0;
        font-size: 0.7rem;
        text-transform: uppercase;
        padding: 4px 8px;
        font-weight: 600;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #2B2B2B !important;
        color: #FFF !important;
        margin-top: 100px;
        padding: 60px 40px;
      }
      .ds-footer * { color: #FFF !important; opacity: 0.7; }
      .ds-footer .ds-logo { border-color: #FFF; opacity: 1; }
    `
  }
};
