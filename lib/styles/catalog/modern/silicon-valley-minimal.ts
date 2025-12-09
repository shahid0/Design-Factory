
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'silicon-valley-minimal')!;

export const siliconValleyMinimal: StyleCartridge = {
  id: 'silicon-valley-minimal',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#F9FAFB', // Gray 50
      '--text-primary': '#111827', // Gray 900
      '--text-secondary': '#6B7280', // Gray 500
      '--accent-color': '#2563EB', // Blue 600
      '--border-radius': '8px',
      '--font-display': '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    elementClasses: {
      stage: 'bg-white',
      navbar: 'sv-nav',
      container: 'sv-card',
      buttonPrimary: 'sv-btn-primary',
      buttonSecondary: 'sv-btn-secondary',
      input: 'sv-input',
      badge: 'sv-badge'
    },
    injectCss: `
      /* --- SILICON VALLEY MINIMAL ENGINE --- */
      
      /* 1. GLOBAL RESET & TYPOGRAPHY */
      .ds-page-root {
        background-color: #FFFFFF;
        color: var(--text-primary);
        font-family: var(--font-display);
        -webkit-font-smoothing: antialiased;
      }

      /* Subtle Dot Pattern Background */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: radial-gradient(#E5E7EB 1px, transparent 1px);
        background-size: 24px 24px;
        opacity: 0.6;
        z-index: -1;
      }

      /* 2. NAVIGATION (Sticky, Blur) */
      .sv-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid #F3F4F6;
        position: sticky;
        top: 0;
        z-index: 50;
        width: 100% !important;
        margin: 0 !important;
        border-radius: 0 !important;
        padding: 16px 32px;
      }
      .ds-logo {
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #111827;
      }
      /* Logo Dot */
      .ds-logo span {
        color: var(--accent-color);
      }
      
      .ds-nav-links span {
        font-weight: 500;
        color: #4B5563;
        transition: color 0.15s;
        font-size: 14px;
      }
      .ds-nav-links span:hover {
        color: var(--accent-color);
      }

      /* 3. HERO SECTION */
      .ds-hero {
        padding-top: 6rem;
        padding-bottom: 6rem;
      }
      .ds-hero-title {
        font-weight: 800;
        letter-spacing: -0.03em;
        line-height: 1.1;
        color: #111827;
      }
      /* Gradient Text for emphasis */
      .ds-hero-title span {
        background: linear-gradient(135deg, #2563EB 0%, #4F46E5 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .ds-hero-text {
        font-size: 1.125rem;
        color: #4B5563;
        line-height: 1.6;
      }

      /* 4. BUTTONS (SaaS Standard) */
      .sv-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFFFFF !important;
        border-radius: 6px !important;
        font-weight: 600 !important;
        font-size: 14px !important;
        padding: 10px 24px !important;
        border: 1px solid transparent !important;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        transition: all 0.15s ease-in-out !important;
      }
      .sv-btn-primary:hover, .ds-btn-primary:hover {
        background: #1D4ED8 !important; /* Blue 700 */
        transform: translateY(-1px);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      
      .sv-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFFFFF !important;
        color: #374151 !important;
        border: 1px solid #D1D5DB !important;
        border-radius: 6px !important;
        font-weight: 500 !important;
        font-size: 14px !important;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      }
      .sv-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #F9FAFB !important;
        border-color: #9CA3AF !important;
        color: #111827 !important;
      }

      /* 5. CARDS (Clean White) */
      .sv-card, .ds-panel, .ds-card {
        background: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        transition: all 0.2s ease;
      }
      .ds-panel:hover, .ds-card:hover {
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        border-color: #D1D5DB;
        transform: translateY(-2px);
      }
      
      /* Icons */
      .ds-panel svg {
         color: var(--accent-color);
         background: #EFF6FF; /* Blue 50 */
         padding: 0;
         border-radius: 8px;
         /* The mannequin wraps svg in a w-12 h-12 container usually */
      }
      /* Mannequin icon container tweak */
      .ds-panel .w-12 {
        background: #EFF6FF;
        color: #2563EB;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 48px; height: 48px;
      }
      .ds-panel .w-12 svg {
        background: transparent;
        width: 24px; height: 24px;
      }

      /* 6. INPUTS (Standard Field) */
      .sv-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #D1D5DB !important;
        border-radius: 6px !important;
        color: #111827 !important;
        font-size: 14px !important;
        padding-left: 38px !important;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
        transition: border-color 0.15s, box-shadow 0.15s;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2) !important; /* Ring */
        outline: none;
      }
      .ds-input-decorator {
        color: #9CA3AF !important;
        background: transparent !important;
        left: 12px !important;
        width: 16px !important;
        height: 16px !important;
      }
      /* Use a search icon glyph for decorator if possible, or just style the dot */
      .ds-input-decorator::before {
         /* content: ""; */ /* Mannequin uses a div */
      }

      /* 7. STATS */
      .ds-stats {
        background: #F9FAFB !important;
        border-top: 1px solid #E5E7EB;
        border-bottom: 1px solid #E5E7EB;
      }
      .ds-stats > div > div {
        background: transparent;
        border: none;
        padding: 24px;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        letter-spacing: -0.02em;
        color: #111827;
      }
      .ds-stats span:first-child {
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #6B7280;
      }

      /* 8. TABLE (Stripe) */
      .ds-table-container {
        background: #FFFFFF !important;
        border: 1px solid #E5E7EB !important;
        border-radius: 8px !important;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1) !important;
        overflow: hidden;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E5E7EB !important;
      }
      .ds-table-container > div:first-child {
        background: #F9FAFB;
        color: #374151;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #F3F4F6 !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #ECFDF5 !important; /* Green 50 */
        color: #059669 !important; /* Green 600 */
        border-radius: 9999px;
        font-size: 12px;
        font-weight: 500;
        padding: 2px 10px;
        border: 1px solid transparent;
      }

      /* 9. PRICING CARDS */
      /* Popular Card */
      .ds-card:nth-child(2) {
        border: 2px solid var(--accent-color) !important;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1) !important;
        position: relative;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        font-size: 12px;
        font-weight: 600;
        border-bottom-left-radius: 6px;
        padding: 4px 12px;
      }
      
      /* Pricing Buttons */
      .ds-card button {
        border-radius: 6px !important;
        font-weight: 600;
      }

      /* 10. BADGE */
      .sv-badge, .ds-badge {
        background: #DBEAFE !important; /* Blue 100 */
        color: #1E40AF !important; /* Blue 800 */
        border-radius: 9999px !important;
        font-weight: 600 !important;
        font-size: 12px !important;
        padding: 4px 12px;
        box-shadow: none !important;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #FFFFFF !important;
        border-top: 1px solid #E5E7EB !important;
        margin-top: 64px;
      }
      .ds-footer .ds-logo {
        color: #111827 !important;
      }
    `
  }
};
