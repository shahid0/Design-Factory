
export interface GoogleFont {
  family: string;
  category: string;
  variants: string[];
}

const API_KEY = 'AIzaSyBx7SARtNeODY7WlWZ4iLK3Ph02XzK6M0o';

// Comprehensive fallback list to ensure UI works even if API Key has referer/quota issues
const FALLBACK_FONTS: GoogleFont[] = [
  { family: 'Inter', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Roboto', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Open Sans', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Lato', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Montserrat', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Poppins', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Source Sans Pro', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Oswald', category: 'sans-serif', variants: ['400', '500'] },
  { family: 'Raleway', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Merriweather', category: 'serif', variants: ['400', '700'] },
  { family: 'Playfair Display', category: 'serif', variants: ['400', '700'] },
  { family: 'Nunito', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Rubik', category: 'sans-serif', variants: ['400', '500'] },
  { family: 'Ubuntu', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Space Mono', category: 'monospace', variants: ['400', '700'] },
  { family: 'JetBrains Mono', category: 'monospace', variants: ['400'] },
  { family: 'Lora', category: 'serif', variants: ['400', '700'] },
  { family: 'Work Sans', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Fira Sans', category: 'sans-serif', variants: ['400', '500'] },
  { family: 'Quicksand', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Barlow', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Mulish', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'IBM Plex Sans', category: 'sans-serif', variants: ['400', '500'] },
  { family: 'Inconsolata', category: 'monospace', variants: ['400', '700'] },
  { family: 'PT Sans', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Titillium Web', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Manrope', category: 'sans-serif', variants: ['400', '600'] },
  { family: 'Heebo', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Libre Baskerville', category: 'serif', variants: ['400', '700'] },
  { family: 'Bitter', category: 'serif', variants: ['400', '700'] },
  { family: 'DM Sans', category: 'sans-serif', variants: ['400', '700'] },
  { family: 'Archivo', category: 'sans-serif', variants: ['400', '600'] }
];

export const fetchGoogleFonts = async (): Promise<GoogleFont[]> => {
  try {
    // Note: The Webfonts API does not support 'limit'. We fetch all and slice client-side.
    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity`
    );
    
    if (!response.ok) {
        const errorBody = await response.text();
        console.warn(`Font API Error: ${response.status} ${response.statusText}`, errorBody);
        console.warn('Falling back to local font list.');
        return FALLBACK_FONTS;
    }

    const data = await response.json();
    
    if (!data.items || !Array.isArray(data.items)) {
         console.warn('Font API returned malformed data:', data);
         return FALLBACK_FONTS;
    }
    
    // Return top 200 popular fonts
    return data.items.slice(0, 200);
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    return FALLBACK_FONTS;
  }
};
