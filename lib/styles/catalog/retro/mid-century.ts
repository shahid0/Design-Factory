
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'mid-century')!;

export const midCentury: StyleCartridge = {
  id: 'mid-century',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FDFBF0', // Cream / Off-White
      '--bg-layer-2': '#E8DCC5', // Beige/Tan
      '--text-primary': '#3A405A', // Charcoal Navy
      '--text-secondary': '#8D6E63', // Warm Brown
      '--accent-color': '#E76F51', // Terracotta / Coral
      '--border-radius': '12px',
      '--font-display': '"Josefin Sans", "Futura", sans-serif',
    },
    elementClasses: {
      stage: 'mcm-stage',
      navbar: 'mcm-nav',
      container: 'mcm-panel',
      buttonPrimary: 'mcm-btn-primary',
      buttonSecondary: 'mcm-btn-secondary',
      input: 'mcm-input',
      badge: 'mcm-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Abril+Fatface&display=swap');

      /* --- MID-CENTURY MODERN ENGINE --- */

      /* 1. ATOMIC RANCH BACKGROUND */
      .mcm-stage {
        background-color: #FDFBF0;
        color: var(--text-primary);
        font-family: 'Josefin Sans', sans-serif;
      }

      /* Boomerang / Atomic Pattern */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: 
          radial-gradient(circle at 20px 20px, #2A9D8F 2px, transparent 2.5px),
          radial-gradient(circle at 60px 60px, #E9C46A 4px, transparent 4.5px);
        background-size: 80px 80px;
        opacity: 0.2;
        z-index: -1;
      }
      
      /* Organic Shapes */
      .ds-deco-layer::after {
        content: '';
        position: fixed;
        top: 10%; right: -10%;
        width: 600px; height: 600px;
        background: #E9C46A; /* Mustard */
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        opacity: 0.1;
        z-index: -2;
      }

      /* 2. FURNITURE PANELS */
      .mcm-panel, .ds-panel, .ds-card, .mcm-nav {
        background: #FFFFFF;
        border-radius: 20px;
        /* Wood leg effect handled via shadow or simple border */
        border: none;
        box-shadow: 
          4px 4px 0 #E76F51, /* Hard Shadow Coral */
          8px 8px 0 rgba(0,0,0,0.1);
        padding: 24px;
        transition: transform 0.2s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-2px, -2px);
        box-shadow: 
          6px 6px 0 #2A9D8F, /* Switch to Teal on Hover */
          10px 10px 0 rgba(0,0,0,0.1);
      }

      /* 3. TYPOGRAPHY (Magazine) */
      .ds-hero-title {
        font-family: 'Abril Fatface', cursive;
        font-weight: 400;
        font-size: 4rem;
        color: #264653; /* Dark Teal */
        letter-spacing: 1px;
      }
      .ds-hero-title span {
        color: #E76F51; /* Coral */
        background: transparent;
        -webkit-text-fill-color: initial;
        font-style: italic;
      }
      .ds-hero-text {
        font-weight: 300;
        font-size: 1.2rem;
        color: #5D4037;
        line-height: 1.6;
      }
      
      .ds-section-title {
         font-family: 'Abril Fatface', cursive;
         color: #E9C46A !important;
         letter-spacing: 1px;
      }

      /* 4. BUTTONS (Soft & Bold) */
      .mcm-btn-primary, .ds-btn-primary {
        background: #2A9D8F !important; /* Teal */
        color: white !important;
        border-radius: 50px 50px 50px 0 !important; /* Leaf shape */
        font-weight: 700 !important;
        text-transform: uppercase;
        letter-spacing: 1px;
        border: none !important;
        padding: 12px 30px !important;
        box-shadow: 3px 3px 0 rgba(0,0,0,0.2) !important;
        transition: all 0.2s !important;
      }
      .mcm-btn-primary:hover, .ds-btn-primary:hover {
        border-radius: 50px 50px 0 50px !important;
        background: #E76F51 !important; /* Coral */
        transform: translateY(-2px);
      }

      .mcm-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F4A261 !important; /* Sandy */
        color: white !important;
        border-radius: 12px !important;
        border: none !important;
        font-weight: 600 !important;
      }
      .mcm-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E9C46A !important; /* Mustard */
      }

      /* 5. NAVIGATION */
      .mcm-nav, .ds-navbar {
        background: #264653;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        box-shadow: 6px 6px 0 rgba(0,0,0,0.1);
        border-radius: 50px;
        padding: 10px 40px;
      }
      .ds-logo {
        font-family: 'Abril Fatface', cursive;
        color: #E9C46A;
        font-size: 1.8rem;
      }
      .ds-nav-links span {
        color: #FDFBF0;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9rem;
      }
      .ds-nav-links span:hover {
        color: #E76F51;
      }

      /* 6. INPUTS */
      .mcm-input, .ds-input {
        background: #FDFBF0 !important;
        border: 2px solid #E8DCC5 !important;
        border-radius: 12px !important;
        color: #3A405A !important;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 600;
        padding-left: 20px !important;
      }
      .ds-input:focus {
        border-color: #2A9D8F !important;
        background: #FFF !important;
        box-shadow: 4px 4px 0 #E9C46A !important;
      }
      .ds-input-decorator {
        background: #E76F51 !important;
        border-radius: 50%;
        width: 12px !important; height: 12px !important;
        right: 15px !important; left: auto !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: #E8DCC5 !important;
        border-radius: 20px;
        margin: 20px;
        width: calc(100% - 40px);
        border: 4px solid #FFF;
      }
      .ds-stats > div > div {
        background: transparent;
        border-right: 2px dashed #FFF;
        box-shadow: none;
      }
      .ds-stats .text-3xl {
        font-family: 'Abril Fatface', cursive;
        color: #264653;
      }
      .ds-stats span:first-child {
        color: #8D6E63;
        font-weight: 700;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: none !important;
        border-radius: 20px !important;
        overflow: hidden;
      }
      .ds-table-container > div:first-child {
        background: #2A9D8F;
        color: white;
        font-family: 'Abril Fatface', cursive;
        letter-spacing: 1px;
        font-size: 1rem;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFF8E1 !important;
      }
      /* Status */
      .ds-table-container span {
        background: #F4A261 !important;
        color: white !important;
        border-radius: 20px;
        font-weight: 700;
        padding: 4px 12px;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
        background: #264653 !important;
        color: white !important;
        box-shadow: 8px 8px 0 #E9C46A !important;
        z-index: 10;
        transform: scale(1.05);
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: #E9C46A;
      }
      .ds-card:nth-child(2) li, .ds-card:nth-child(2) .text-4xl {
         color: white !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: #E76F51;
        color: white;
        font-family: 'Abril Fatface', cursive;
        letter-spacing: 1px;
        padding: 8px 20px;
        border-radius: 0 0 20px 20px;
        top: 0; right: 20px;
      }
      
      .ds-card button {
         font-family: 'Josefin Sans', sans-serif;
         font-weight: 700;
         text-transform: uppercase;
      }

      /* 10. BADGE */
      .mcm-badge, .ds-badge {
        background: #E9C46A !important;
        color: #264653 !important;
        font-weight: 700;
        border-radius: 8px 20px 8px 20px;
        padding: 4px 12px;
        box-shadow: 2px 2px 0 rgba(0,0,0,0.1);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #264653 !important;
        color: white !important;
        margin-top: 60px;
        border-top: 8px solid #E76F51 !important;
      }
      .ds-footer h4 { color: #E9C46A !important; font-family: 'Abril Fatface', cursive; }
      .ds-footer .ds-logo { color: #FDFBF0; }
      .ds-footer p, .ds-footer span { color: #A8DADC !important; }
    `
  }
};
