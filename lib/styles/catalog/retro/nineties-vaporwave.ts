
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'vaporwave-90s')!;

export const ninetiesVaporwave: StyleCartridge = {
  id: 'vaporwave-90s',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF', // Paper Cup White
      '--bg-layer-2': '#E0F7FA', // Light Teal
      '--text-primary': '#2D00F7', // Electric Blue
      '--text-secondary': '#F20089', // Hot Pink
      '--accent-color': '#00FFFF', // Cyan
      '--border-radius': '0px',
      '--font-display': '"Pacifico", "Comic Neue", cursive',
    },
    elementClasses: {
      stage: 'jazz-stage',
      navbar: 'jazz-nav',
      container: 'jazz-panel',
      buttonPrimary: 'jazz-btn-primary',
      buttonSecondary: 'jazz-btn-secondary',
      input: 'jazz-input',
      badge: 'jazz-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Comic+Neue:wght@400;700&display=swap');

      /* --- 90s JAZZ SOLO CUP AESTHETIC --- */

      .jazz-stage {
        background-color: #ffffff;
        color: var(--text-primary);
        font-family: 'Comic Neue', cursive;
        overflow-x: hidden;
        position: relative;
      }

      /* The Jazz Squiggle Pattern */
      .ds-deco-layer::before {
        content: '';
        position: fixed;
        inset: 0;
        background-image: 
          url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 50 Q 50 10 80 50 T 140 50 T 200 50' stroke='%2300FFFF' stroke-width='8' fill='none'/%3E%3Cpath d='M0 100 Q 30 140 60 100 T 120 100' stroke='%23F20089' stroke-width='8' fill='none'/%3E%3C/svg%3E");
        background-size: 300px 300px;
        opacity: 0.1;
        z-index: 0;
        pointer-events: none;
      }

      /* 2. PANELS (Memphis / Jazz) */
      .jazz-panel, .ds-panel, .ds-card, .jazz-nav {
        background: #FFFFFF;
        border: 4px solid #2D00F7;
        box-shadow: 8px 8px 0px #F20089;
        border-radius: 0;
        position: relative;
      }
      
      .ds-panel:hover, .ds-card:hover {
        transform: translate(-4px, -4px);
        box-shadow: 12px 12px 0px #00FFFF;
        z-index: 10;
        border-color: #2D00F7;
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-family: 'Pacifico', cursive;
        font-weight: 400;
        font-size: 4.5rem;
        color: #2D00F7;
        text-shadow: 3px 3px 0px #F20089;
        transform: rotate(-3deg);
        line-height: 1.1;
      }
      .ds-hero-title span {
        font-family: 'Comic Neue', cursive;
        font-weight: 700;
        color: #00FFFF;
        -webkit-text-stroke: 1px #2D00F7;
        background: transparent;
        -webkit-text-fill-color: initial;
        display: block;
        transform: rotate(2deg) translateX(20px);
      }
      .ds-hero-text {
        font-weight: 700;
        font-size: 1.25rem;
        color: #F20089;
        background: #E0F7FA;
        padding: 15px;
        border: 2px dashed #2D00F7;
        transform: rotate(1deg);
        margin-top: 20px;
      }

      /* 4. BUTTONS (Radical) */
      .jazz-btn-primary, .ds-btn-primary {
        background: #00FFFF !important;
        color: #2D00F7 !important;
        font-family: 'Comic Neue', cursive !important;
        font-weight: 900 !important;
        font-size: 1.5rem !important;
        border: 3px solid #2D00F7 !important;
        box-shadow: 5px 5px 0px #2D00F7 !important;
        border-radius: 50px 10px 50px 10px !important;
        text-transform: uppercase;
        padding: 10px 30px !important;
        transform: skewX(-10deg);
      }
      .jazz-btn-primary span {
         transform: skewX(10deg); /* Counter skew text */
      }
      .jazz-btn-primary:hover, .ds-btn-primary:hover {
        background: #F20089 !important;
        color: #FFF !important;
        box-shadow: 8px 8px 0px #2D00F7 !important;
      }

      .jazz-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: white !important;
        color: #F20089 !important;
        border: 3px solid #F20089 !important;
        font-weight: 700 !important;
        box-shadow: 4px 4px 0px rgba(0,0,0,0.1) !important;
        font-family: 'Comic Neue', cursive !important;
      }
      .jazz-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #F20089 !important;
        color: white !important;
      }

      /* 5. NAVIGATION */
      .jazz-nav, .ds-navbar {
        background: #fff;
        margin: 20px !important;
        width: calc(100% - 40px) !important;
        border: 3px solid #2D00F7;
        box-shadow: 6px 6px 0 #F20089;
      }
      .ds-logo {
        font-family: 'Pacifico', cursive;
        font-size: 2rem;
        color: #F20089;
        transform: rotate(-2deg);
      }
      .ds-nav-links span {
        font-weight: 700;
        text-transform: uppercase;
        color: #2D00F7;
      }
      .ds-nav-links span:hover {
        text-decoration: underline;
        text-decoration-style: wavy;
        text-decoration-color: #F20089;
      }

      /* 6. INPUTS */
      .jazz-input, .ds-input {
        background: #fff !important;
        border: 3px solid #2D00F7 !important;
        border-radius: 0 !important;
        color: #F20089 !important;
        font-family: 'Comic Neue', cursive !important;
        font-weight: 700;
        font-size: 1.2rem !important;
        padding-left: 40px !important;
      }
      .ds-input:focus {
        background: #E0F7FA !important;
        box-shadow: 4px 4px 0 #F20089 !important;
      }
      .ds-input-decorator {
        background: #00FFFF !important;
        width: 20px !important; height: 20px !important;
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%); /* Triangle */
        border-radius: 0 !important;
        left: 10px !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border-top: 3px dashed #2D00F7;
        border-bottom: 3px dashed #2D00F7;
      }
      .ds-stats > div > div {
        background: #fff;
        border: 2px solid #F20089;
        margin: 10px;
        box-shadow: 4px 4px 0 rgba(0,0,0,0.1);
      }
      .ds-stats .text-3xl {
        font-family: 'Pacifico', cursive;
        color: #2D00F7;
      }
      .ds-stats span:first-child {
        color: #F20089;
        font-weight: 900;
        text-transform: uppercase;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 3px solid #2D00F7 !important;
        box-shadow: 8px 8px 0 rgba(0,255,255,0.5) !important;
      }
      .ds-table-container > div:first-child {
        background: #00FFFF;
        color: #2D00F7;
        font-weight: 900;
        font-family: 'Comic Neue', cursive;
        border-bottom: 3px solid #2D00F7 !important;
      }
      .ds-table-container span {
        background: #F20089 !important;
        color: #fff !important;
        font-weight: 700;
        border-radius: 50% 20% 50% 20%;
        padding: 4px 10px;
      }

      /* 9. PRICING CARDS */
      .ds-card:hover {
         transform: rotate(1deg) scale(1.02);
      }
      /* Popular */
      .ds-card:nth-child(2) {
         border: 4px solid #F20089 !important;
         background: #FFF0F5 !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
         color: #F20089;
         font-family: 'Pacifico', cursive;
      }
      .ds-card:nth-child(2) .absolute {
         background: #2D00F7;
         color: #00FFFF;
         font-weight: 900;
         transform: rotate(-5deg);
         top: -15px; right: -5px;
         border: 2px solid white;
         box-shadow: 3px 3px 0 #F20089;
      }

      /* 10. BADGE */
      .jazz-badge, .ds-badge {
         background: #00FFFF !important;
         color: #2D00F7 !important;
         border: 2px solid #2D00F7;
         font-weight: 900;
         box-shadow: 2px 2px 0 #F20089;
         transform: skewX(-10deg);
      }

      /* 11. FOOTER */
      .ds-footer {
         background: #2D00F7 !important;
         color: #FFF !important;
         margin-top: 60px;
         border-top: 5px solid #00FFFF !important;
      }
      .ds-footer h4 { color: #00FFFF !important; font-family: 'Pacifico', cursive; }
      .ds-footer * { color: #fff !important; }
    `
  }
};
