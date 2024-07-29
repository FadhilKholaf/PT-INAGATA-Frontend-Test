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
        },
        slide: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' }
        }
      },
      animation: {
        scale: 'scale 0.3s ease-out',
        autoSlide: 'slide 20s linear infinite'
      }
    }
  },
  plugins: []
};
export default config;
