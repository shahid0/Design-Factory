
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'arctic-mist')!;

export const arcticMist: StyleCartridge = {
  id: 'arctic-mist',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F0F4F8', // Ice Blue White
      '--bg-layer-2': 'rgba(255, 255, 255, 0.4)',
      '--text-primary': '#243B53', // Deep Slate Blue
      '--text-secondary': '#627D98', // Blue Grey
      '--accent-color': '#486581', // Steel Blue
      '--border-radius': '12px',
      '--font-display': '"Inter", sans-serif',
    },
    elementClasses: {
      stage: 'arctic-stage',
      navbar: 'arctic-nav',
      container: 'arctic-panel',
      buttonPrimary: 'arctic-btn-primary',
      buttonSecondary: 'arctic-btn-secondary',
      input: 'arctic-input',
      badge: 'arctic-badge'
    },
    injectCss: `
      /* --- ARCTIC MIST ENGINE --- */

      .arctic-stage {
        background: linear-gradient(180deg, #F0F4F8 0%, #D9E2EC 100%);
        color: #243B53;
        font-family: 'Inter', sans-serif;
      }

      /* Fog Overlay */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background: 
          linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px);
        background-size: 60px 60px;
        mask-image: radial-gradient(circle, black 40%, transparent 100%);
        pointer-events: none;
        z-index: 0;
      }

      /* 2. CONTAINERS (Frosted Glass) */
      .arctic-panel, .ds-panel, .ds-card, .arctic-nav {
        background: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(12px) saturate(150%);
        border: 1px solid rgba(255, 255, 255, 0.8);
        box-shadow: 
          0 4px 6px rgba(16, 42, 67, 0.05),
          0 10px 15px -3px rgba(16, 42, 67, 0.05);
        border-radius: 12px;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: translateY(-2px);
        box-shadow: 
          0 10px 20px rgba(16, 42, 67, 0.08),
          0 4px 6px rgba(16, 42, 67, 0.05);
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        letter-spacing: -0.025em;
        color: #102A43;
      }
      .ds-hero-title span {
        color: #334E68;
        background: transparent;
        -webkit-text-fill-color: initial;
        opacity: 0.8;
      }
      .ds-hero-text {
        color: #486581;
        font-weight: 400;
        line-height: 1.6;
      }

      /* 4. BUTTONS (Ice Blocks) */
      .arctic-btn-primary, .ds-btn-primary {
        background: #334E68 !important; /* Deep Blue */
        color: #F0F4F8 !important;
        border-radius: 8px !important;
        font-weight: 600 !important;
        padding: 10px 24px !important;
        border: none !important;
        box-shadow: 0 2px 4px rgba(16, 42, 67, 0.2) !important;
        transition: all 0.2s !important;
      }
      .arctic-btn-primary:hover, .ds-btn-primary:hover {
        background: #243B53 !important;
        transform: translateY(-1px);
      }

      .arctic-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: rgba(255, 255, 255, 0.5) !important;
        color: #334E68 !important;
        border: 1px solid #BCCCDC !important;
        border-radius: 8px !important;
        font-weight: 500 !important;
      }
      .arctic-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #FFFFFF !important;
        border-color: #829AB1 !important;
      }

      /* 5. NAVIGATION */
      .arctic-nav, .ds-navbar {
        margin: 0 !important;
        width: 100% !important;
        border-radius: 0 !important;
        border-bottom: 1px solid rgba(255,255,255,0.5);
        padding: 16px 32px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -0.025em;
        color: #102A43;
      }
      .ds-nav-links span {
        color: #627D98;
        font-weight: 500;
      }
      .ds-nav-links span:hover {
        color: #102A43;
        background: rgba(255,255,255,0.5);
        border-radius: 6px;
        padding: 4px 8px;
      }

      /* 6. INPUTS */
      .arctic-input, .ds-input {
        background: rgba(255, 255, 255, 0.7) !important;
        border: 1px solid #D9E2EC !important;
        border-radius: 8px !important;
        padding-left: 20px !important;
        color: #243B53 !important;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #829AB1 !important;
        box-shadow: 0 0 0 3px rgba(130, 154, 177, 0.2) !important;
      }
      .ds-input-decorator {
        background: #829AB1 !important;
        border-radius: 50%;
        width: 8px !important; height: 8px !important;
        left: auto !important; right: 20px !important;
        opacity: 0.5;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: rgba(255,255,255,0.5);
        border: 1px solid #F0F4F8;
        box-shadow: 0 2px 4px rgba(16,42,67,0.03);
      }
      .ds-stats .text-3xl {
        font-weight: 600;
        color: #334E68;
      }
      .ds-stats span:first-child {
        font-weight: 500;
        color: #829AB1;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 12px !important;
        box-shadow: 0 4px 6px rgba(16,42,67,0.05) !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #F0F4F8 !important;
      }
      .ds-table-container > div:first-child {
        background: rgba(240, 244, 248, 0.8);
        color: #486581;
        font-weight: 600;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(255, 255, 255, 0.9) !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #D9E2EC !important;
        color: #334E68 !important;
        border-radius: 4px;
        padding: 2px 8px;
        font-weight: 600;
        font-size: 0.75rem;
      }

      /* 9. PRICING */
      .ds-card {
        background: rgba(255, 255, 255, 0.5) !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: rgba(255, 255, 255, 0.8) !important;
        border: 1px solid #829AB1 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #102A43;
      }
      .ds-card:nth-child(2) .absolute {
        background: #334E68;
        color: white;
        border-radius: 0 0 8px 8px;
        font-weight: 600;
        top: 0; right: 24px;
        padding: 6px 16px;
      }

      /* 10. BADGE */
      .arctic-badge, .ds-badge {
        background: #D9E2EC !important;
        color: #334E68 !important;
        border-radius: 4px;
        padding: 4px 8px;
        font-weight: 600;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: rgba(255, 255, 255, 0.5) !important;
        margin-top: 60px;
        border-top: 1px solid rgba(255,255,255,0.8);
      }
    `
  }
};
