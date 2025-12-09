
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
import { synthwave } from './catalog/retro/synthwave';
import { midCentury } from './catalog/retro/mid-century';
import { teletext } from './catalog/retro/teletext';
import { blueprint } from './catalog/retro/blueprint';
import { steampunkVintage } from './catalog/retro/steampunk-vintage';
import { ninetiesVaporwave } from './catalog/retro/nineties-vaporwave';
import { cheerfulKids } from './catalog/retro/cheerful-kids';
import { classicElegance } from './catalog/retro/classic-elegance';
import { arabesqueVibrance } from './catalog/retro/arabesque-vibrance';
import { monochrome } from './catalog/minimal/monochrome';
import { swiss } from './catalog/minimal/swiss';
import { scandinavian } from './catalog/minimal/scandinavian';
import { wabiSabi } from './catalog/minimal/wabi-sabi';
import { eInk } from './catalog/minimal/e-ink';
import { loFiWireframe } from './catalog/minimal/lo-fi-wireframe';
import { darkroom } from './catalog/minimal/darkroom';
import { laboratory } from './catalog/minimal/laboratory';
import { kineticTypography } from './catalog/minimal/kinetic-typography';
import { highLuxury } from './catalog/minimal/high-luxury';
import { institutional } from './catalog/minimal/institutional';
import { architectural } from './catalog/minimal/architectural';
import { desertModern } from './catalog/minimal/desert-modern';
import { polar } from './catalog/minimal/polar';
import { highEndPrint } from './catalog/minimal/high-end-print';
import { pastelPlains } from './catalog/minimal/pastel-plains';
import { arcticMist } from './catalog/minimal/arctic-mist';
import { goldenLuxury } from './catalog/minimal/golden-luxury';
import { rusticEarth } from './catalog/minimal/rustic-earth';
import { forestZen } from './catalog/minimal/forest-zen';
import { meditativeLight } from './catalog/minimal/meditative-light';
import { glitch } from './catalog/experimental/glitch';
import { antiDesign } from './catalog/experimental/antidesign';
import { maximalism } from './catalog/experimental/maximalism';
import { grunge } from './catalog/experimental/grunge';
import { bioDigital } from './catalog/experimental/bio-digital';
import { psychedelic } from './catalog/experimental/psychedelic';
import { collage } from './catalog/experimental/collage';
import { deconstruct } from './catalog/experimental/deconstructivism';
import { ascii } from './catalog/experimental/ascii';
import { dreamcore } from './catalog/experimental/dreamcore';
import { frutigerAero } from './catalog/experimental/frutiger-aero';
import { corporateMemphis } from './catalog/experimental/corporate-memphis';
import { abstractGeom } from './catalog/experimental/abstract-geom';
import { staticNoise } from './catalog/experimental/static-noise';
import { acidRave } from './catalog/experimental/acid-rave';
import { neonFuture } from './catalog/experimental/neon-future';
import { cyberpunkCity } from './catalog/experimental/cyberpunk-city';
import { geometricSplash } from './catalog/experimental/geometric-splash';
import { boldStreetArt } from './catalog/experimental/bold-street-art';
import { kaleidoscope } from './catalog/experimental/kaleidoscope';
import { digitalMatrix } from './catalog/experimental/digital-matrix';
import { galacticSpace } from './catalog/experimental/galactic-space';
import { psychedelicDreams } from './catalog/experimental/psychedelic-dreams';
import { retroFutureOptimism } from './catalog/experimental/retro-future-optimism';
import { electricVibrance } from './catalog/experimental/electric-vibrance';
import { punkChaos } from './catalog/experimental/punk-chaos';
import { liquidMetal } from './catalog/experimental/liquid-metal';
import { cyberSigil } from './catalog/experimental/cyber-sigil';
import { risograph } from './catalog/experimental/risograph';
import { acidGraphix } from './catalog/experimental/acid-graphix';
import { neoNoir } from './catalog/experimental/neo-noir';
import { ethereal } from './catalog/experimental/ethereal';

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
registry['synthwave'] = synthwave;
registry['mid-century'] = midCentury;
registry['teletext'] = teletext;
registry['blueprint'] = blueprint;
registry['steampunk-vintage'] = steampunkVintage;
registry['vaporwave-90s'] = ninetiesVaporwave;
registry['cheerful-kids'] = cheerfulKids;
registry['classic-elegance'] = classicElegance;
registry['arabesque-vibrance'] = arabesqueVibrance;
registry['monochrome'] = monochrome;
registry['swiss'] = swiss;
registry['scandi'] = scandinavian;
registry['zen'] = wabiSabi;
registry['ink'] = eInk;
registry['wireframe'] = loFiWireframe;
registry['darkroom'] = darkroom;
registry['lab'] = laboratory;
registry['typography'] = kineticTypography;
registry['luxury-min'] = highLuxury;
registry['institutional'] = institutional;
registry['architectural'] = architectural;
registry['desert'] = desertModern;
registry['polar'] = polar;
registry['print'] = highEndPrint;
registry['pastel-plains'] = pastelPlains;
registry['arctic-mist'] = arcticMist;
registry['golden-luxury'] = goldenLuxury;
registry['rustic-earth'] = rusticEarth;
registry['forest-zen'] = forestZen;
registry['meditative-light'] = meditativeLight;
registry['glitch'] = glitch;
registry['antidesign'] = antiDesign;
registry['maximalism'] = maximalism;
registry['grunge'] = grunge;
registry['organic'] = bioDigital;
registry['psychedelic'] = psychedelic;
registry['collage'] = collage;
registry['deconstruct'] = deconstruct;
registry['ascii'] = ascii;
registry['dream'] = dreamcore;
registry['frutiger'] = frutigerAero;
registry['corporate'] = corporateMemphis;
registry['abstract'] = abstractGeom;
registry['noise'] = staticNoise;
registry['rave'] = acidRave;
registry['neon-future'] = neonFuture;
registry['cyberpunk-city'] = cyberpunkCity;
registry['geometricsplash'] = geometricSplash;
registry['bold-street-art'] = boldStreetArt;
registry['kaleidoscope'] = kaleidoscope;
registry['digital-matrix'] = digitalMatrix;
registry['galactic-space'] = galacticSpace;
registry['psychedelic-dreams'] = psychedelicDreams;
registry['retro-future-optimism'] = retroFutureOptimism;
registry['electric-vibe'] = electricVibrance;
registry['punk-chaos'] = punkChaos;
registry['liquid-metal'] = liquidMetal;
registry['cyber-sigil'] = cyberSigil;
registry['risograph'] = risograph;
registry['acid-graphix'] = acidGraphix;
registry['neo-noir'] = neoNoir;
registry['ethereal'] = ethereal;

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
