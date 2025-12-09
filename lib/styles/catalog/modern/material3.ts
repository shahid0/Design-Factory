
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'material3')!;

export const material3: StyleCartridge = {
  id: 'material3',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FEF7FF', // Surface
      '--bg-layer-2': '#F3EDF7', // Surface Container
      '--text-primary': '#1D1B20', // On Surface
      '--text-secondary': '#49454F', // On Surface Variant
      '--accent-color': '#6750A4', // Primary (Purple 40)
      '--border-radius': '20px',
      '--font-display': '"Roboto", "Segoe UI", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#FEF7FF]',
      navbar: 'm3-nav',
      container: 'm3-card-elevated',
      buttonPrimary: 'm3-btn-filled',
      buttonSecondary: 'm3-btn-tonal',
      input: 'm3-field',
      badge: 'm3-badge'
    },
    injectCss: `
      /* --- MATERIAL YOU (M3) ENGINE --- */

      /* 1. TYPOGRAPHY & SURFACE */
      .ds-page-root {
        background-color: var(--bg-layer-1);
        color: var(--text-primary);
        font-family: var(--font-display);
      }

      /* 2. NAVIGATION (Navigation Bar style) */
      .m3-nav, .ds-navbar {
        background: #F3EDF7; /* Surface Container */
        margin: 0;
        border-bottom: none;
        padding: 16px 32px;
      }
      .ds-logo {
        font-weight: 500;
        letter-spacing: -0.5px;
        color: var(--text-primary);
      }
      .ds-nav-links span {
        font-weight: 500;
        letter-spacing: 0.1px;
        padding: 10px 20px;
        border-radius: 50px;
        transition: background 0.2s;
      }
      .ds-nav-links span:hover {
        background: rgba(29, 27, 32, 0.08); /* OnSurface 8% */
        color: #1D1B20;
      }

      /* 3. HERO */
      .ds-hero {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
      .ds-hero-title {
        font-family: var(--font-display);
        font-weight: 400; /* Display Large is often lighter weight */
        line-height: 1.1;
        letter-spacing: -0.02em;
        color: #1D1B20;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
        font-weight: 500;
      }
      .ds-hero-text {
        font-size: 1.25rem;
        line-height: 1.6;
        color: var(--text-secondary);
      }

      /* 4. BUTTONS (Filled, Tonal, Outlined) */
      
      /* Filled Button (Primary) */
      .m3-btn-filled, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFFFFF !important;
        border-radius: 100px !important; /* Stadium */
        height: 48px;
        padding: 0 24px !important;
        font-weight: 500 !important;
        letter-spacing: 0.1px;
        text-transform: none !important; /* M3 uses sentence case usually */
        border: none !important;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15) !important;
        transition: box-shadow 0.2s, background 0.2s, transform 0.2s !important;
        position: relative;
        overflow: hidden;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .m3-btn-filled:hover, .ds-btn-primary:hover {
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15) !important;
        background: #6750A4 !important; /* Primary */
        filter: brightness(0.9);
      }
      
      /* Ripple Effect Fake */
      .m3-btn-filled::after {
        content: "";
        position: absolute;
        top: 50%; left: 50%;
        width: 100%; height: 100%;
        background: white;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
        border-radius: 50%;
        transition: transform 0.3s, opacity 0.3s;
      }
      .m3-btn-filled:active::after {
        transform: translate(-50%, -50%) scale(2);
        opacity: 0.12;
        transition: 0s;
      }

      /* Tonal Button (Secondary) */
      .m3-btn-tonal, .ds-btn-secondary {
        background: #E8DEF8 !important; /* Secondary Container */
        color: #1D192B !important; /* On Secondary Container */
        border-radius: 100px !important;
        border: none !important;
        font-weight: 500 !important;
        text-transform: none !important;
        transition: background 0.2s, box-shadow 0.2s !important;
        box-shadow: none !important;
      }
      .m3-btn-tonal:hover, .ds-btn-secondary:hover {
        background: #DDCBF5 !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1) !important;
      }

      /* Ghost / Text Button */
      .ds-btn-ghost {
        background: transparent !important;
        color: var(--accent-color) !important;
        border: none !important;
        border-radius: 100px !important;
        font-weight: 500 !important;
        text-transform: none !important;
      }
      .ds-btn-ghost:hover {
        background: rgba(103, 80, 164, 0.08) !important; /* Primary with opacity */
        color: var(--accent-color) !important;
      }

      /* 5. CARDS (Elevated & Outlined) */
      .m3-card-elevated, .ds-panel {
        background: #F7F2FA; /* Surface Container Low */
        border-radius: 16px;
        border: none;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15); /* Elevation 1 */
        transition: box-shadow 0.2s, background 0.2s;
      }
      .m3-card-elevated:hover, .ds-panel:hover {
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 4px 8px 3px rgba(0,0,0,0.15); /* Elevation 2 */
        background: #F3EDF7;
      }
      .ds-panel svg {
        color: var(--accent-color);
      }

      /* 6. INPUTS (Filled Text Field) */
      .m3-field, .ds-input {
        background: #E7E0EC !important; /* Surface Variant */
        border-radius: 4px 4px 0 0 !important;
        border-bottom: 2px solid #49454F !important;
        border-top: none !important;
        border-left: none !important;
        border-right: none !important;
        padding: 24px 16px 8px 16px !important;
        height: 56px;
        color: var(--text-primary) !important;
        font-size: 1rem;
        transition: border-color 0.2s, background 0.2s;
        box-shadow: none !important;
      }
      .m3-field:focus, .ds-input:focus {
        border-bottom-color: var(--accent-color) !important;
        background: #E1D9E7 !important;
      }
      .ds-input-decorator {
        background: var(--text-secondary) !important;
        width: 8px !important;
        height: 8px !important;
        right: 16px !important;
        border-radius: 50%;
        opacity: 0.5;
      }

      /* 7. BADGE (Assist Chip or Label) */
      .m3-badge, .ds-badge {
        background: #E8DEF8 !important; /* Secondary Container */
        color: #1D192B !important; /* On Secondary Container */
        border-radius: 8px !important;
        font-weight: 500 !important;
        letter-spacing: 0.1px;
        box-shadow: none !important;
        padding: 4px 12px;
      }

      /* 8. TABLE (Data Table) */
      .ds-table-container {
        background: #FEF7FF !important; /* Surface */
        border: 1px solid #CAC4D0 !important; /* Outline */
        border-radius: 8px !important;
        box-shadow: none !important;
      }
      .ds-table-container > div:first-child {
        border-bottom: 1px solid #CAC4D0 !important;
        background: #FEF7FF;
        font-weight: 500;
        color: #49454F;
      }
      .ds-table-container > div:not(:first-child) {
        border-bottom: 1px solid #E7E0EC !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: rgba(29, 27, 32, 0.08) !important;
        color: #1D1B20 !important;
      }

      /* Status Indicator */
      .ds-table-container span {
        background: #E8DEF8 !important;
        color: #1D192B !important;
        border-radius: 8px;
        font-weight: 500;
        box-shadow: none;
        border: none;
      }

      /* 9. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 1px solid #E7E0EC;
        border-bottom: 1px solid #E7E0EC;
      }
      .ds-stats > div > div {
        background: transparent;
        border: none;
        padding: 16px;
      }
      .ds-stats .text-3xl {
        color: var(--accent-color);
        font-weight: 400;
      }
      .ds-stats span:first-child {
        color: var(--text-secondary);
        font-weight: 500;
      }

      /* 10. PRICING CARDS */
      .ds-card {
        background: #FEF7FF !important;
        border: 1px solid #CAC4D0 !important;
        border-radius: 12px !important;
        box-shadow: none !important;
      }
      .ds-card:hover {
         /* Elevation 1 on hover */
         box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15) !important;
      }
      /* Popular Card */
      .ds-card:nth-child(2) {
        background: #F3EDF7 !important; /* Surface Container */
        border: none !important;
        box-shadow: 0px 1px 2px rgba(0,0,0,0.3), 0px 2px 6px 2px rgba(0,0,0,0.15) !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      
      .ds-card button {
        border-radius: 100px !important;
        text-transform: capitalize;
        font-weight: 500;
      }
      
      /* 11. FOOTER */
      .ds-footer {
        background: #F3EDF7 !important;
        border-top: none !important;
        margin-top: 48px;
      }
    `
  }
};
