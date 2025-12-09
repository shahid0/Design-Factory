
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'collage')!;

export const collage: StyleCartridge = {
  id: 'collage',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#E0D8C8', // Newsprint Beige
      '--bg-layer-2': '#FFFFFF', // Cutout White
      '--text-primary': '#111111',
      '--text-secondary': '#333333',
      '--accent-color': '#D92B2B', // Red marker
      '--border-radius': '0px',
      '--font-display': '"Permanent Marker", "Times New Roman", serif',
    },
    elementClasses: {
      stage: 'collage-stage',
      navbar: 'collage-nav',
      container: 'collage-panel',
      buttonPrimary: 'collage-btn-primary',
      buttonSecondary: 'collage-btn-secondary',
      input: 'collage-input',
      badge: 'collage-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Special+Elite&display=swap');

      /* --- MIXED MEDIA COLLAGE ENGINE --- */

      .collage-stage {
        background-color: #E0D8C8;
        color: #111;
        font-family: 'Times New Roman', serif;
        overflow-x: hidden;
      }

      /* Background Textures */
      .ds-deco-layer::before {
        content: "";
        position: fixed;
        inset: 0;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E");
        mix-blend-mode: multiply;
        z-index: -1;
      }

      /* 2. CONTAINERS (Cutouts) */
      .collage-panel, .ds-panel, .ds-card, .collage-nav {
        background: #FFFFFF;
        box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
        border: none;
        border-radius: 0;
        transform: rotate(-1deg);
        margin: 20px;
        padding: 25px;
        position: relative;
      }
      
      .ds-panel:nth-child(even) {
        transform: rotate(1.5deg);
        background: #F0F0F0;
      }

      .ds-panel:hover, .ds-card:hover {
        transform: scale(1.02) rotate(0deg);
        z-index: 10;
        box-shadow: 10px 10px 25px rgba(0,0,0,0.4);
      }

      /* 3. TYPOGRAPHY (Ransom Note) */
      .ds-hero-title {
        font-family: 'Permanent Marker', cursive;
        font-size: 4.5rem;
        color: #111;
        text-align: center;
        line-height: 1.1;
      }
      .ds-hero-title span {
        background: #111;
        color: #FFF;
        font-family: 'Special Elite', monospace;
        padding: 5px 15px;
        transform: rotate(2deg);
        display: inline-block;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Special Elite', monospace;
        background: #FFF;
        padding: 15px;
        box-shadow: 3px 3px 10px rgba(0,0,0,0.2);
        max-width: 600px;
        margin: 20px auto;
        transform: rotate(-1deg);
      }

      /* 4. BUTTONS (Stickers/Tape) */
      .collage-btn-primary, .ds-btn-primary {
        background: var(--accent-color) !important;
        color: #FFF !important;
        font-family: 'Permanent Marker', cursive !important;
        font-size: 1.5rem !important;
        border: none !important;
        border-radius: 0 !important;
        padding: 10px 30px !important;
        transform: rotate(-2deg);
        box-shadow: 4px 4px 0 rgba(0,0,0,0.5) !important;
        transition: all 0.2s !important;
      }
      .collage-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1) rotate(0deg);
        background: #000 !important;
      }

      .collage-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #FFF !important;
        color: #111 !important;
        border: 2px solid #111 !important;
        font-family: 'Special Elite', monospace !important;
        font-weight: bold !important;
        transform: rotate(1deg);
      }
      .collage-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #EEE !important;
        transform: scale(1.05) rotate(0deg);
      }

      /* 5. NAVIGATION (Scrapbook Header) */
      .collage-nav, .ds-navbar {
        background: #FFF;
        transform: rotate(0.5deg);
        width: 95% !important;
        margin: 20px auto !important;
        border-bottom: 3px solid #111;
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
      }
      .ds-logo {
        font-family: 'Permanent Marker', cursive;
        font-size: 2rem;
        background: #000;
        color: #FFF;
        padding: 5px 15px;
        transform: rotate(-3deg);
      }
      .ds-nav-links span {
        font-family: 'Special Elite', monospace;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 2px solid transparent;
      }
      .ds-nav-links span:hover {
        border-bottom-color: var(--accent-color);
        transform: rotate(2deg);
      }

      /* 6. INPUTS (Label Maker) */
      .collage-input, .ds-input {
        background: #EEE !important;
        border: 2px solid #555 !important;
        border-radius: 0 !important;
        font-family: 'Special Elite', monospace;
        font-size: 1.1rem !important;
        color: #111 !important;
        padding: 15px !important;
        box-shadow: inset 2px 2px 5px rgba(0,0,0,0.1);
      }
      .ds-input:focus {
        background: #FFF !important;
        border-color: #000 !important;
        transform: scale(1.01);
      }
      .ds-input-decorator {
        background: var(--accent-color) !important;
        border-radius: 50%;
        width: 15px !important; height: 15px !important;
        left: auto !important; right: 15px !important;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 1px solid #CCC;
        margin: 10px;
        box-shadow: 3px 3px 8px rgba(0,0,0,0.1);
        transform: rotate(calc(var(--i, 1) * 1deg));
      }
      /* Random tilt */
      .ds-stats > div > div:nth-child(odd) { transform: rotate(1deg); }
      .ds-stats > div > div:nth-child(even) { transform: rotate(-1deg); }

      .ds-stats .text-3xl {
        font-family: 'Permanent Marker', cursive;
        color: #111;
      }
      .ds-stats span:first-child {
        font-family: 'Special Elite', monospace;
        color: #555;
        border-bottom: 1px solid #AAA;
      }

      /* 8. TABLE (Ledger) */
      .ds-table-container {
        background: #FFF !important;
        border: 2px solid #111 !important;
        box-shadow: 8px 8px 0 rgba(0,0,0,0.2) !important;
        transform: rotate(-0.5deg);
      }
      .ds-table-container > div:first-child {
        background: #DDD;
        color: #000;
        font-family: 'Special Elite', monospace;
        font-weight: bold;
        border-bottom: 2px solid #111 !important;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #F9F9F9 !important;
      }
      /* Status */
      .ds-table-container span {
        background: var(--accent-color) !important;
        color: #FFF !important;
        font-family: 'Permanent Marker', cursive;
        border-radius: 0;
        transform: rotate(-2deg);
        padding: 2px 8px;
      }

      /* 9. PRICING */
      .ds-card {
        background: #FFF !important;
      }
      /* Popular */
      .ds-card:nth-child(2) {
        background: #333 !important;
        color: #FFF !important;
        transform: scale(1.05) rotate(1deg);
        z-index: 20;
      }
      .ds-card:nth-child(2) * { color: #FFF !important; }
      .ds-card:nth-child(2) .ds-card-title {
        font-family: 'Permanent Marker', cursive;
        color: #FFF !important;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: #FFF !important;
        font-family: 'Permanent Marker', cursive;
        padding: 5px 15px;
        top: -15px; right: -5px;
        transform: rotate(5deg);
        box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
      }
      
      .ds-card button {
         font-family: 'Special Elite', monospace;
         border-radius: 0 !important;
      }

      /* 10. BADGE */
      .collage-badge, .ds-badge {
        background: #111 !important;
        color: #FFF !important;
        font-family: 'Special Elite', monospace;
        padding: 3px 10px;
        transform: rotate(-3deg);
        box-shadow: 2px 2px 0 rgba(0,0,0,0.3);
      }
      
      /* 11. TOGGLES (Cutout) */
      .mannequin-toggle-track {
        background: #DDD;
        border: 2px solid #000;
        border-radius: 0;
        transform: rotate(1deg);
      }
      .mannequin-toggle-track.active {
        background: #D92B2B;
        transform: rotate(-1deg);
      }
      .mannequin-toggle-thumb {
        background: #FFF;
        border-radius: 0;
        border: 2px solid #000;
        box-shadow: 2px 2px 0 rgba(0,0,0,0.2);
      }

      /* 12. FOOTER */
      .ds-footer {
        background: #222 !important;
        color: #FFF !important;
        margin-top: 80px;
        transform: rotate(0.5deg);
        padding: 60px 40px;
      }
      .ds-footer * { color: #DDD !important; }
    `
  }
};
