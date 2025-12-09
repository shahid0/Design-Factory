
import { DesignPreset } from '../../types';

export interface StylePreviewConfig {
  /**
   * Semantic tokens injected as CSS variables into the root of the mannequin.
   * Keys should start with '--'.
   */
  theme: {
    '--bg-layer-1': string;
    '--bg-layer-2': string;
    '--text-primary': string;
    '--text-secondary': string;
    '--accent-color': string;
    '--border-radius': string;
    '--font-display': string;
    [key: string]: string;
  };
  
  /**
   * Raw CSS to be injected into a scoped <style> block.
   * Use selectors starting with .ds- to target mannequin elements.
   * The system will automatically scope these to the component ID.
   */
  injectCss?: string;
  
  /**
   * Utility classes (e.g., Tailwind) to append to specific DOM elements
   * in the mannequin structure.
   */
  elementClasses?: {
    stage?: string;
    container?: string;
    header?: string;
    card?: string;
    buttonPrimary?: string;
    buttonSecondary?: string;
    input?: string;
    badge?: string;
    [key: string]: string | undefined;
  };
}

export interface StyleCartridge {
  id: string;
  meta: DesignPreset;
  previewConfig: StylePreviewConfig;
  standardSpec?: string; // Markdown content for the zero-gen "Standard Library" spec
}
