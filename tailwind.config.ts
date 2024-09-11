import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        sgsOrange: { // Define your custom color palette
          50: '#fff5f0',    // Very light orange
          100: '#fed7aa',   
          200: '#fbb678',   
          300: '#f99145',
          400: '#f57c2a',
          500: '#ff6302',   // Your primary SGS orange 
          600: '#d95702',   // Slightly darker
          700: '#a14502', 
          800: '#6d3301',
          900: '#3a1b01',   // Very dark orange 
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;