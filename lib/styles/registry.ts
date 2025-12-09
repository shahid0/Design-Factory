
import { DESIGN_PRESETS } from '../design-presets';
import { StyleCartridge, StylePreviewConfig } from './types';

// Import Cartridges
import { cyberpunk } from './catalog/modern/cyberpunk';
import { neumorphism } from './catalog/modern/neumorphism';
import { glassmorphism } from './catalog/modern/glassmorphism';
import { claymorphism } from './catalog/modern/claymorphism';
import { material3 } from './catalog/modern/material3';
import { ios17 } from './catalog/modern/ios17';
import { bento } from './catalog/modern/bento';
import { linear } from './catalog/modern/linear';
import { solarpunk } from './catalog/modern/solarpunk';
import { holographic } from './catalog/modern/holographic';
import { spatial } from './catalog/modern/spatial';
import { aero } from './catalog/modern/aero';
import { fluent } from './catalog/modern/fluent';
import { skeuomorphic } from './catalog/modern/skeuomorphic';
import { scifiHud } from './catalog/modern/scifi-hud';
import { animeDreams } from './catalog/modern/anime-dreams';
import { industrialFuturism } from './catalog/modern/industrial-futurism';
import { siliconValleyMinimal } from './catalog/modern/silicon-valley-minimal';
import { eightBitPixel } from './catalog/retro/8bit-pixel';
import { vaporwave } from './catalog/retro/vaporwave';
import { bauhaus } from './catalog/retro/bauhaus';
import { neoBrutalism } from './catalog/retro/neo-brutalism';
import { newsprint } from './catalog/retro/newsprint';
import { y2k } from './catalog/retro/y2k';
import { win95 } from './catalog/retro/win95';
import { dosTerminal } from './catalog/retro/dos-terminal';
import { popArt } from './catalog/retro/pop-art';
import { artDeco } from './catalog/retro/art-deco';
import { victorian } from './catalog/retro/victorian';

// Default "Kaolin" Base Theme (The Fallback/Placeholder)
const DEFAULT_THEME: StylePreviewConfig = {
  theme: {
    '--bg-layer-1': '#F4F6F9', // kaolin-100
    '--bg-layer-2': '#FFFFFF',
    '--text-primary': '#334155', // kaolin-800
    '--text-secondary': '#94A0B2', // kaolin-500
    '--accent-color': '#4F7AF6', // resin-500
    '--border-radius': '16px',
    '--font-display': '"Inter", sans-serif',
  },
  elementClasses: {
    container: 'shadow-clay-panel',
    buttonPrimary: 'shadow-clay-btn-primary hover:-translate-y-0.5 transition-transform',
    buttonSecondary: 'hover:bg-kaolin-200 transition-colors',
    input: 'shadow-inner'
  }
};

const registry: Record<string, StyleCartridge> = {};

// Initialize Registry with Defaults
DESIGN_PRESETS.forEach(preset => {
  registry[preset.id] = {
    id: preset.id,
    meta: preset,
    previewConfig: DEFAULT_THEME 
  };
});

// Register Implemented Cartridges
registry['cyberpunk'] = cyberpunk;
registry['neumorphism'] = neumorphism;
registry['glassmorphism'] = glassmorphism;
registry['claymorphism'] = claymorphism;
registry['material3'] = material3;
registry['ios17'] = ios17;
registry['bento'] = bento;
registry['linear'] = linear;
registry['solar-punk'] = solarpunk;
registry['holographic'] = holographic;
registry['spatial'] = spatial;
registry['aero'] = aero;
registry['fluent'] = fluent;
registry['skeuomorphic-redux'] = skeuomorphic;
registry['hud'] = scifiHud;
registry['anime-dreams'] = animeDreams;
registry['industrial-futurism'] = industrialFuturism;
registry['silicon-valley-minimal'] = siliconValleyMinimal;
registry['8bit'] = eightBitPixel;
registry['vaporwave'] = vaporwave;
registry['bauhaus'] = bauhaus;
registry['brutalism'] = neoBrutalism;
registry['newsprint'] = newsprint;
registry['y2k'] = y2k;
registry['win95'] = win95;
registry['terminal'] = dosTerminal;
registry['popart'] = popArt;
registry['art-deco'] = artDeco;
registry['victorian'] = victorian;

/**
 * Retrieves a Style Cartridge by ID.
 * Falls back to the first available style if not found.
 */
export const getStyleCartridge = (id: string): StyleCartridge => {
  return registry[id] || registry[DESIGN_PRESETS[0].id];
};

/**
 * Returns all registered cartridges.
 */
export const getAllCartridges = (): StyleCartridge[] => {
  return Object.values(registry);
};
