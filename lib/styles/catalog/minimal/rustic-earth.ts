
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'rustic-earth')!;

export const rusticEarth: StyleCartridge = {
  id: 'rustic-earth',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#EBE5CE', // Parchment / Stone
      '--bg-layer-2': '#F2EFE4', // Lighter Stone
      '--text-primary': '#4B3621', // Dark Coffee
      '--text-secondary': '#8B7355', // Jute / Clay
      '--accent-color': '#A0522D', // Sienna
      '--border-radius': '4px', // Hand-hewn edges
      '--font-display': '"Crimson Text", "Garamond", serif',
    },
    elementClasses: {
      stage: 'rustic-stage',
      navbar: 'rustic-nav',
      container: 'rustic-panel',
      buttonPrimary: 'rustic-btn-primary',
      buttonSecondary: 'rustic-btn-secondary',
      input: 'rustic-input',
      badge: 'rustic-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&display=swap');

      /* --- RUSTIC EARTH ENGINE --- */

      .rustic-stage {
        background-color: #EBE5CE;
        color: #4B3621;
        font-family: 'Crimson Text', serif;
      }

      /* Texture: Craft Paper */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.25'/%3E%3C/svg%3E");
        opacity: 0.6;
        mix-blend-mode: multiply;
        z-index: -1;
        pointer-events: none;
      }

      /* 2. CONTAINERS (Cardstock) */
      .rustic-panel, .ds-panel, .ds-card, .rustic-nav {
        background: #F2EFE4;
        border: 1px solid #C0B298;
        box-shadow: 2px 2px 4px rgba(75, 54, 33, 0.1);
        border-radius: 4px; /* Slightly worn corner simulation */
        padding: 24px;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        background: #FFFDF5;
        box-shadow: 4px 4px 10px rgba(75, 54, 33, 0.15);
        border-color: #A0522D;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-weight: 700;
        color: #4B3621;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
      .ds-hero-title span {
        color: #A0522D;
        background: transparent;
        -webkit-text-fill-color: initial;
        font-style: italic;
        text-transform: none;
      }
      .ds-hero-text {
        font-size: 1.2rem;
        color: #5D4037;
        border-top: 1px solid #D7CCC8;
        padding-top: 20px;
        margin-top: 20px;
      }

      /* 4. BUTTONS (Leather/Wood) */
      .rustic-btn-primary, .ds-btn-primary {
        background: #A0522D !important;
        color: #F2EFE4 !important;
        border-radius: 4px !important;
        font-weight: 600 !important;
        padding: 10px 30px !important;
        border: none !important;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.1) !important;
        font-family: 'Crimson Text', serif !important;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .rustic-btn-primary:hover, .ds-btn-primary:hover {
        background: #8B4513 !important;
        transform: translateY(-1px);
      }

      .rustic-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #4B3621 !important;
        border: 1px solid #8B7355 !important;
        border-radius: 4px !important;
        font-family: 'Crimson Text', serif !important;
        font-weight: 600 !important;
      }
      .rustic-btn-secondary:hover, .ds-btn-secondary:hover {
        background: rgba(160, 82, 45, 0.1) !important;
        border-color: #A0522D !important;
      }

      /* 5. NAVIGATION */
      .rustic-nav, .ds-navbar {
        background: #EBE5CE;
        border-bottom: 2px solid #D7CCC8;
        margin: 0 !important;
        width: 100% !important;
        padding: 15px 40px;
        box-shadow: none !important;
      }
      .ds-logo {
        font-weight: 700;
        font-size: 1.5rem;
        color: #4B3621;
        letter-spacing: 1px;
      }
      .ds-nav-links span {
        color: #8B7355;
        font-weight: 600;
        font-style: italic;
        font-size: 1.1rem;
      }
      .ds-nav-links span:hover {
        color: #A0522D;
        text-decoration: underline;
      }

      /* 6. INPUTS */
      .rustic-input, .ds-input {
        background: #F9F7F2 !important;
        border: 1px solid #C0B298 !important;
        border-radius: 2px !important;
        padding-left: 15px !important;
        color: #4B3621 !important;
        font-family: 'Crimson Text', serif;
        font-size: 1.1rem;
      }
      .ds-input:focus {
        background: #FFFFFF !important;
        border-color: #A0522D !important;
        box-shadow: 0 2px 5px rgba(160, 82, 45, 0.1) !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
        border-top: 1px solid #C0B298;
        border-bottom: 1px solid #C0B298;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 1px solid #D7CCC8;
        padding: 20px;
      }
      .ds-stats .text-3xl {
        font-weight: 700;
        color: #A0522D;
      }
      .ds-stats span:first-child {
        color: #8B7355;
        font-style: italic;
        font-size: 1rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border-radius: 4px !important;
        border: 1px solid #C0B298 !important;
        background: #F2EFE4 !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #EBE5CE !important;
      }
      .ds-table-container > div:first-child {
        background: #E6E0C8;
        color: #4B3621;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 0.9rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFDF5 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #D7CCC8 !important;
        color: #4B3621 !important;
        border-radius: 4px;
        padding: 2px 8px;
        font-size: 0.9rem;
        font-style: italic;
      }

      /* 9. PRICING */
      .ds-card {
        background: #F2EFE4 !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        border: 2px solid #A0522D !important;
        background: #FFFDF5 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #A0522D;
      }
      .ds-card:nth-child(2) .absolute {
        background: #A0522D;
        color: #F2EFE4;
        font-weight: 700;
        top: 0; right: 20px;
        border-radius: 0 0 4px 4px;
        padding: 4px 12px;
        font-family: 'Crimson Text', serif;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      /* 10. BADGE */
      .rustic-badge, .ds-badge {
        background: #C0B298 !important;
        color: #4B3621 !important;
        border-radius: 4px;
        padding: 4px 10px;
        font-weight: 600;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #E6E0C8 !important;
        margin-top: 60px;
        border-top: 1px solid #C0B298 !important;
      }
    `
  }
};
