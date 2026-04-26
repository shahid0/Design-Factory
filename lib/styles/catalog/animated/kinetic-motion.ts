
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'kinetic-motion')!;

export const kineticMotion: StyleCartridge = {
  id: 'kinetic-motion',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFF00', // Yellow
      '--bg-layer-2': '#000000', // Black
      '--text-primary': '#000000',
      '--text-secondary': '#000000',
      '--accent-color': '#0000FF', // Blue
      '--border-radius': '0px',
      '--font-display': '"Anton", "Impact", sans-serif',
    },
    elementClasses: {
      stage: 'kinetic-stage',
      navbar: 'kinetic-nav',
      container: 'kinetic-panel',
      buttonPrimary: 'kinetic-btn-primary',
      buttonSecondary: 'kinetic-btn-secondary',
      input: 'kinetic-input',
      badge: 'kinetic-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

      .kinetic-stage {
        background-color: #FFFF00;
        color: #000;
        font-family: 'Anton', sans-serif;
        overflow: hidden;
      }

      /* Marquee Background */
      .ds-deco-layer::before {
        content: "MOVE FAST MOVE FAST MOVE FAST MOVE FAST ";
        position: fixed;
        top: 20%; left: -20%;
        width: 200%;
        font-size: 15vw;
        line-height: 0.8;
        white-space: nowrap;
        opacity: 0.1;
        transform: rotate(-5deg);
        animation: marquee 10s linear infinite;
        z-index: -1;
      }
      .ds-deco-layer::after {
        content: "DONT STOP DONT STOP DONT STOP DONT STOP ";
        position: fixed;
        bottom: 20%; left: -20%;
        width: 200%;
        font-size: 15vw;
        line-height: 0.8;
        white-space: nowrap;
        opacity: 0.1;
        transform: rotate(5deg);
        animation: marquee-rev 12s linear infinite;
        z-index: -1;
      }

      @keyframes marquee {
        0% { transform: translateX(0) rotate(-5deg); }
        100% { transform: translateX(-20%) rotate(-5deg); }
      }
      @keyframes marquee-rev {
        0% { transform: translateX(-20%) rotate(5deg); }
        100% { transform: translateX(0) rotate(5deg); }
      }

      /* 2. CONTAINERS (Vibrating) */
      .kinetic-panel, .ds-panel, .ds-card, .kinetic-nav {
        background: #FFF;
        border: 4px solid #000;
        box-shadow: 10px 10px 0 #000;
        padding: 20px;
        margin: 20px;
        transition: transform 0.1s;
      }
      
      .ds-panel:hover, .ds-card:hover {
        animation: shake 0.5s infinite;
        background: #0000FF;
        color: #FFF;
      }
      .ds-panel:hover *, .ds-card:hover * {
         color: #FFF !important;
         border-color: #FFF !important;
      }

      @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }

      /* 3. TYPOGRAPHY */
      .ds-hero-title {
        font-size: 6rem;
        line-height: 0.9;
        text-transform: uppercase;
        animation: pulse-text 2s infinite;
      }
      @keyframes pulse-text {
         0% { letter-spacing: -2px; }
         50% { letter-spacing: 5px; }
         100% { letter-spacing: -2px; }
      }
      
      .ds-hero-title span {
        color: #0000FF;
        background: transparent;
        -webkit-text-fill-color: initial;
      }

      /* 4. BUTTONS */
      .kinetic-btn-primary, .ds-btn-primary {
        background: #000 !important;
        color: #FFF !important;
        border: none !important;
        padding: 15px 40px !important;
        font-size: 1.5rem !important;
        text-transform: uppercase;
        font-family: 'Anton', sans-serif !important;
        border-radius: 0 !important;
        transition: transform 0.1s !important;
      }
      .kinetic-btn-primary:hover, .ds-btn-primary:hover {
        transform: scale(1.1) rotate(2deg);
        background: #0000FF !important;
      }

      .kinetic-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: transparent !important;
        color: #000 !important;
        border: 4px solid #000 !important;
        font-size: 1.2rem !important;
        font-family: 'Anton', sans-serif !important;
        text-transform: uppercase;
        border-radius: 0 !important;
      }
      .kinetic-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #000 !important;
        color: #FFF !important;
      }

      /* 5. NAVIGATION */
      .kinetic-nav, .ds-navbar {
        border-bottom: 4px solid #000;
        background: #FFF;
        margin: 0 !important;
        width: 100% !important;
        padding: 20px 40px;
      }
      .ds-logo {
        font-size: 2rem;
        letter-spacing: 2px;
        animation: blink 1s step-end infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      .ds-nav-links span {
        text-transform: uppercase;
        font-size: 1.2rem;
        transition: all 0.2s;
      }
      .ds-nav-links span:hover {
        background: #000;
        color: #FFF;
        padding: 5px 10px;
      }

      /* 6. INPUTS */
      .kinetic-input, .ds-input {
        background: #FFF !important;
        border: 4px solid #000 !important;
        color: #000 !important;
        font-family: 'Anton', sans-serif;
        font-size: 1.5rem !important;
        padding: 10px !important;
        border-radius: 0 !important;
      }
      .ds-input:focus {
        background: #0000FF !important;
        color: #FFF !important;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFF;
        border: 4px solid #000;
        box-shadow: 5px 5px 0 #000;
      }
      .ds-stats .text-3xl {
        font-size: 3rem;
      }

      /* 8. TABLE */
      .ds-table-container {
        border: 4px solid #000 !important;
        background: #FFF !important;
      }
      .ds-table-container > div {
        border-bottom: 2px solid #000 !important;
      }
      .ds-table-container > div:first-child {
        background: #000;
        color: #FFF;
      }
      .ds-table-container > div:not(:first-child):hover {
        background: #FFFF00 !important;
      }
      
      /* 9. PRICING */
      .ds-card {
        animation: float 2s infinite ease-in-out;
      }
      @keyframes float {
         0%, 100% { transform: translateY(0); }
         50% { transform: translateY(-10px); }
      }
      .ds-card:nth-child(2) {
         background: #000 !important;
         color: #FFF !important;
         animation-delay: 0.5s;
      }
      .ds-card:nth-child(2) * { color: #FFF !important; border-color: #FFF !important; }
      .ds-card:nth-child(2) button {
         background: #FFFF00 !important;
         color: #000 !important;
      }

      /* 10. BADGE */
      .kinetic-badge, .ds-badge {
        background: #000 !important;
        color: #FFF !important;
        border-radius: 0;
        padding: 5px 15px;
        transform: rotate(-5deg);
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #000 !important;
        color: #FFF !important;
        margin-top: 80px;
        border-top: 10px solid #0000FF !important;
      }
      .ds-footer * { color: #FFF !important; }
    `
  }
};
