
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'ios17')!;

export const ios17: StyleCartridge = {
  id: 'ios17',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#F2F2F7', // System Grouped Background
      '--bg-layer-2': '#FFFFFF', // Secondary System Grouped Background
      '--text-primary': '#000000', // Label
      '--text-secondary': '#8E8E93', // Secondary Label (System Gray)
      '--accent-color': '#007AFF', // System Blue
      '--border-radius': '14px', // Standard iOS curvature
      '--font-display': '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", sans-serif',
    },
    elementClasses: {
      stage: 'bg-[#F2F2F7]',
      navbar: 'ios-nav',
      container: 'ios-card',
      buttonPrimary: 'ios-btn-primary',
      buttonSecondary: 'ios-btn-secondary',
      input: 'ios-input',
      badge: 'ios-badge'
    },
    injectCss: `
      /* --- CUPERTINO (iOS 17) ENGINE --- */

      /* 1. TYPOGRAPHY & SMOOTHING */
      .ds-page-root {
        -webkit-font-smoothing: antialiased;
        letter-spacing: -0.01em;
      }

      /* 2. NAVIGATION (Blur Material) */
      .ios-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.75);
        backdrop-filter: blur(20px) saturate(180%);
        -webkit-backdrop-filter: blur(20px) saturate(180%);
        border-bottom: 0.5px solid rgba(0, 0, 0, 0.2); /* Hairline separator */
        position: sticky;
        top: 0;
        z-index: 100;
      }
      .ds-logo {
        font-weight: 600;
        letter-spacing: -0.02em;
        color: #000;
      }
      .ds-nav-links span {
        font-size: 17px;
        color: var(--accent-color);
        font-weight: 400;
        padding: 8px 12px;
        border-radius: 8px;
      }
      .ds-nav-links span:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      /* 3. HERO (Large Title) */
      .ds-hero {
        padding-top: 4rem;
        padding-bottom: 4rem;
      }
      .ds-hero-title {
        font-weight: 700;
        color: #000;
        letter-spacing: -0.03em; /* Tight like Large Titles */
      }
      .ds-hero-title span {
        color: var(--accent-color);
        background: transparent;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-size: 1.3rem;
        line-height: 1.4;
        color: #1c1c1e;
        font-weight: 400;
      }

      /* 4. BUTTONS (Touch States) */
      
      /* Primary (Filled) */
      .ios-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFFFFF !important;
        border-radius: 40px !important; /* Pill or rounded rect */
        font-weight: 600 !important;
        font-size: 17px !important;
        border: none !important;
        padding: 12px 24px !important;
        box-shadow: none !important;
        transition: opacity 0.2s, transform 0.1s !important;
      }
      .ios-btn-primary:active, .ds-btn-primary:active {
        opacity: 0.7; /* Standard iOS press state */
        transform: scale(0.96);
      }
      .ios-btn-primary:hover, .ds-btn-primary:hover {
         /* iOS has no hover, but we simulate a slight darkening */
         filter: brightness(0.95);
      }

      /* Secondary (Tinted / Gray) */
      .ios-btn-secondary, .ds-btn-secondary {
        background: rgba(118, 118, 128, 0.12) !important; /* System Fill */
        color: var(--accent-color) !important;
        border-radius: 40px !important;
        font-weight: 600 !important;
        font-size: 17px !important;
        border: none !important;
        box-shadow: none !important;
      }
      .ios-btn-secondary:active, .ds-btn-secondary:active {
        background: rgba(118, 118, 128, 0.24) !important;
      }

      /* Ghost */
      .ds-btn-ghost {
        color: var(--accent-color) !important;
        font-size: 17px;
        font-weight: 400;
        background: transparent !important;
        border: none !important;
      }
      .ds-btn-ghost:active {
        opacity: 0.5;
      }

      /* 5. CARDS (Inset Grouped) */
      .ios-card, .ds-panel, .ds-card {
        background: #FFFFFF;
        border-radius: 12px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05); /* Very subtle shadow */
        border: none;
      }
      /* Icons in cards */
      .ds-panel svg {
         color: var(--accent-color);
         /* iOS icon shape */
         background: transparent; 
      }
      /* Ensure the icon container mimics the colored rounded squares in Settings */
      .ds-panel .w-12 {
         background: var(--accent-color);
         color: white;
         border-radius: 10px;
         width: 36px;
         height: 36px;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-bottom: 16px;
      }
      .ds-panel .w-12 svg {
         color: white;
         width: 20px;
         height: 20px;
      }
      
      /* 6. INPUTS (Search Field Style) */
      .ios-input, .ds-input {
        background: #E3E3E8 !important; /* System Gray 5 or 6 */
        border-radius: 10px !important;
        border: none !important;
        height: 44px; /* Standard touch target height */
        padding-left: 40px !important;
        color: #000 !important;
        font-size: 17px;
      }
      .ds-input:focus {
         background: #d1d1d6 !important; /* Slightly darker on focus */
         box-shadow: none !important;
         border: none !important;
      }
      .ds-input-decorator {
         color: #8E8E93 !important; /* System Gray */
         background: transparent !important;
         left: 10px !important;
         width: auto !important;
         height: auto !important;
         right: auto !important;
      }
      /* Make decorator look like a search icon if possible, usually it's just a dot in this template */
      .ds-input-decorator::before {
         content: "🔍";
         font-size: 12px;
         opacity: 0.5;
      }

      /* 7. TABLE (Inset Grouped List) */
      .ds-table-container {
        background: #FFFFFF !important;
        border-radius: 12px !important;
        overflow: hidden;
        border: none !important;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05) !important;
      }
      .ds-table-container > div {
        border-bottom: 0.5px solid #C6C6C8 !important; /* Separator Color */
        padding: 12px 16px !important;
      }
      /* Remove border from last item */
      .ds-table-container > div:last-child {
        border-bottom: none !important;
      }
      
      /* Header */
      .ds-table-container > div:first-child {
        background: #F2F2F7; /* Grouped Header background */
        border-bottom: 0.5px solid #C6C6C8 !important;
        font-size: 13px;
        text-transform: uppercase;
        color: #8E8E93; /* Secondary Label */
        margin-bottom: 0;
        border-radius: 0;
      }
      
      /* Row Interaction */
      .ds-table-container > div:not(:first-child):active {
        background: #D1D1D6 !important; /* Selection color */
      }
      
      /* Status Badge */
      .ds-table-container span {
         background: transparent !important;
         color: #34C759 !important; /* System Green */
         font-weight: 500;
         padding: 0;
         box-shadow: none;
         border: none;
         display: flex;
         align-items: center;
         gap: 4px;
      }
      .ds-table-container span::before {
         content: "";
         display: inline-block;
         width: 8px;
         height: 8px;
         border-radius: 50%;
         background: #34C759;
      }

      /* 8. STATS */
      .ds-stats {
         background: transparent !important;
         border: none !important;
      }
      .ds-stats > div > div {
         background: white;
         border-radius: 12px;
         padding: 16px;
         box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      }
      .ds-stats .text-3xl {
         font-weight: 600;
         color: #000;
      }

      /* 9. PRICING CARDS */
      .ds-card {
         background: white !important;
         border-radius: 20px !important; /* Larger for modal-like cards */
         border: none !important;
         box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
      }
      /* Popular Card */
      .ds-card.selected, .ds-card:nth-child(2) {
         border: 2px solid var(--accent-color) !important;
         transform: none; /* iOS doesn't do much movement */
      }
      .ds-card:nth-child(2) .absolute {
         background: var(--accent-color);
         color: white;
         border-bottom-left-radius: 12px;
         font-weight: 600;
      }
      
      /* Pricing Buttons */
      .ds-card button {
         border-radius: 12px !important;
         height: 44px;
         font-weight: 600;
      }

      /* 10. BADGE */
      .ios-badge, .ds-badge {
         background: rgba(0, 122, 255, 0.15) !important;
         color: var(--accent-color) !important;
         border-radius: 6px !important; /* Smaller radius */
         font-size: 13px !important;
         font-weight: 600 !important;
         text-transform: none !important;
         padding: 4px 8px;
         letter-spacing: 0;
         box-shadow: none !important;
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #F2F2F7 !important;
         border-top: 0.5px solid #C6C6C8 !important;
      }

      /* 12. TOGGLES (Apple Switch) */
      .mannequin-toggle-track {
        background: #E9E9EA;
        border-radius: 99px;
        transition: background 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
      }
      .mannequin-toggle-track.active {
        background: #34C759; /* System Green for toggles */
        opacity: 1;
      }
      .mannequin-toggle-thumb {
        background: #FFFFFF;
        box-shadow: 0 3px 8px rgba(0,0,0,0.15), 0 3px 1px rgba(0,0,0,0.06);
        border-radius: 50%;
        top: 2px;
        left: 2px;
        width: calc(1.5rem - 4px);
        height: calc(1.5rem - 4px);
      }
      .mannequin-toggle-track.active .mannequin-toggle-thumb {
         left: calc(100% - 1.5rem + 2px);
      }
    `
  }
};
