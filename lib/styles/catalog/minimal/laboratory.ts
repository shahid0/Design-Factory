
import { StyleCartridge } from '../../types';
import { DESIGN_PRESETS } from '../../../design-presets';

const meta = DESIGN_PRESETS.find(p => p.id === 'lab')!;

export const laboratory: StyleCartridge = {
  id: 'lab',
  meta,
  previewConfig: {
    theme: {
      '--bg-layer-1': '#FFFFFF',
      '--bg-layer-2': '#F8FAFC',
      '--text-primary': '#0F172A', // Slate 900
      '--text-secondary': '#64748B', // Slate 500
      '--accent-color': '#0EA5E9', // Sky 500
      '--border-radius': '4px',
      '--font-display': '"Inter", "Roboto Mono", sans-serif',
    },
    elementClasses: {
      stage: 'lab-stage',
      navbar: 'lab-nav',
      container: 'lab-panel',
      buttonPrimary: 'lab-btn-primary',
      buttonSecondary: 'lab-btn-secondary',
      input: 'lab-input',
      badge: 'lab-badge'
    },
    injectCss: `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Roboto+Mono:wght@400;500&display=swap');

      /* --- LABORATORY ENGINE --- */

      .lab-stage {
        background-color: #FFFFFF;
        color: #0F172A;
        font-family: 'Inter', sans-serif;
        background-image: 
          linear-gradient(#E2E8F0 1px, transparent 1px),
          linear-gradient(90deg, #E2E8F0 1px, transparent 1px);
        background-size: 40px 40px;
      }

      /* 2. CONTAINERS (Clinical) */
      .lab-panel, .ds-panel, .ds-card, .lab-nav {
        background: #FFFFFF;
        border: 1px solid #CBD5E1; /* Slate 300 */
        border-radius: 4px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        position: relative;
      }
      
      /* Accent Top Border */
      .lab-panel::before, .ds-panel::before, .ds-card::before {
        content: "";
        position: absolute;
        top: 0; left: 0; right: 0; height: 2px;
        background: var(--accent-color);
        opacity: 0.5;
        border-radius: 4px 4px 0 0;
      }

      .ds-panel:hover, .ds-card:hover {
        border-color: var(--accent-color);
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10;
      }

      /* 3. TYPOGRAPHY (Data-Driven) */
      .ds-hero-title {
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        letter-spacing: -0.025em;
        color: #0F172A;
      }
      .ds-hero-title span {
        color: var(--accent-color);
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        background: #F0F9FF; /* Sky 50 */
        padding: 0 8px;
        border-radius: 4px;
        -webkit-text-fill-color: initial;
      }
      .ds-hero-text {
        font-family: 'Roboto Mono', monospace;
        font-size: 0.9rem;
        color: #64748B;
        background: #F8FAFC;
        padding: 16px;
        border: 1px dashed #CBD5E1;
        border-radius: 4px;
      }

      /* 4. BUTTONS (Sterile) */
      .lab-btn-primary, .ds-btn-primary {
        background: white !important;
        color: var(--accent-color) !important;
        border: 1px solid var(--accent-color) !important;
        border-radius: 4px !important;
        font-weight: 500 !important;
        font-family: 'Inter', sans-serif !important;
        font-size: 0.9rem !important;
        padding: 8px 16px !important;
        box-shadow: 0 1px 2px rgba(0,0,0,0.05) !important;
        transition: all 0.2s !important;
      }
      .lab-btn-primary:hover, .ds-btn-primary:hover {
        background: #F0F9FF !important;
        box-shadow: 0 0 0 2px #BAE6FD !important; /* Sky 200 ring */
      }

      .lab-btn-secondary, .ds-btn-secondary, .ds-btn-ghost {
        background: #F1F5F9 !important; /* Slate 100 */
        color: #475569 !important;
        border: 1px solid transparent !important;
        border-radius: 4px !important;
        font-size: 0.9rem !important;
      }
      .lab-btn-secondary:hover, .ds-btn-secondary:hover {
        background: #E2E8F0 !important;
      }

      /* 5. NAVIGATION */
      .lab-nav, .ds-navbar {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(8px);
        border-bottom: 1px solid #E2E8F0;
        margin: 0 !important;
        width: 100% !important;
        padding: 12px 24px;
        border-radius: 0 !important;
      }
      .ds-logo {
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        letter-spacing: -0.5px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .ds-logo::before {
        content: "";
        width: 8px; height: 8px;
        background: var(--accent-color);
        border-radius: 50%;
      }
      .ds-nav-links span {
        font-size: 0.85rem;
        font-weight: 500;
        color: #64748B;
        padding: 4px 12px;
        border-radius: 4px;
      }
      .ds-nav-links span:hover {
        background: #F1F5F9;
        color: #0F172A;
      }

      /* 6. INPUTS (Specimen) */
      .lab-input, .ds-input {
        background: #FFFFFF !important;
        border: 1px solid #CBD5E1 !important;
        border-radius: 4px !important;
        font-family: 'Roboto Mono', monospace !important;
        font-size: 0.9rem !important;
        color: #0F172A !important;
        padding-left: 12px !important;
      }
      .ds-input:focus {
        border-color: var(--accent-color) !important;
        box-shadow: 0 0 0 3px #BAE6FD !important;
      }
      .ds-input-decorator {
        display: none;
      }

      /* 7. STATS */
      .ds-stats {
        background: transparent !important;
        border: none !important;
      }
      .ds-stats > div > div {
        background: #FFFFFF;
        border: 1px solid #E2E8F0;
        padding: 16px;
        border-radius: 4px;
      }
      .ds-stats .text-3xl {
        font-family: 'Roboto Mono', monospace;
        font-weight: 500;
        color: #0F172A;
        letter-spacing: -1px;
      }
      .ds-stats span:first-child {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #64748B;
      }

      /* 8. TABLE (Data Sheet) */
      .ds-table-container {
        border: 1px solid #E2E8F0 !important;
        border-radius: 4px !important;
        box-shadow: none !important;
      }
      .ds-table-container > div {
        border-bottom: 1px solid #E2E8F0 !important;
      }
      .ds-table-container > div:first-child {
        background: #F8FAFC;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.8rem;
        color: #475569;
        font-weight: 500;
      }
      /* Hover */
      .ds-table-container > div:not(:first-child):hover {
        background: #F0F9FF !important;
      }
      /* Status Pill */
      .ds-table-container span {
        background: #FFFFFF !important;
        border: 1px solid #CBD5E1;
        color: #475569 !important;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.75rem;
        border-radius: 4px;
        padding: 2px 8px;
      }

      /* 9. PRICING CARDS */
      /* Popular */
      .ds-card:nth-child(2) {
        border: 1px solid var(--accent-color) !important;
        background: #F0F9FF !important;
      }
      .ds-card:nth-child(2) .ds-card-title {
        color: var(--accent-color);
        font-family: 'Roboto Mono', monospace;
      }
      .ds-card:nth-child(2) .absolute {
        background: var(--accent-color);
        color: white;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.75rem;
        padding: 4px 12px;
        top: 0; right: 0;
        border-bottom-left-radius: 4px;
      }

      /* 10. BADGE */
      .lab-badge, .ds-badge {
        background: #E2E8F0 !important;
        color: #475569 !important;
        border-radius: 4px;
        font-family: 'Roboto Mono', monospace;
        font-size: 0.75rem;
        padding: 4px 8px;
        border: 1px solid #CBD5E1;
      }

      /* 11. FOOTER */
      .ds-footer {
        background: #F8FAFC !important;
        border-top: 1px solid #E2E8F0 !important;
        margin-top: 60px;
      }
    `
  }
};
