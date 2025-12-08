
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
    // Fetch top 100 popular fonts to keep payload light
    const response = await fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}&sort=popularity&limit=100`
    );
    
    if (!response.ok) {
        console.warn(`Font API Error: ${response.status} ${response.statusText}. Using fallback list.`);
        return FALLBACK_FONTS;
    }

    const data = await response.json();
    
    // Check if items exists (sometimes API returns success but with error object inside if parameters are wrong)
    if (!data.items || !Array.isArray(data.items)) {
         console.warn('Font API returned malformed data. Using fallback list.');
         return FALLBACK_FONTS;
    }
    
    return data.items;
  } catch (error) {
    console.error("Failed to fetch fonts:", error);
    // Return fallback list so the UI doesn't break
    return FALLBACK_FONTS;
  }
};
