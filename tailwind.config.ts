import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: '#6100C1',
        pink: '#E33FAB',
        gray: '#606060',
        dark: '#404040',
        light: '#787878'
      },
      keyframes: {
        scale: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' }
        }
      },
      animation: {
        scale: 'scale 0.3s ease-out'
      }
    }
  },
  plugins: []
};
export default config;
