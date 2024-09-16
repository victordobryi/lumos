import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#3177F2',
        secondary: '#FF5D17',
        black: '#2B2B2B',
        gray: '#646464',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        default: '0px 4px 16px rgba(0, 0, 0, 0.14)',
        section: '0px 2.1px 11.1px rgba(0, 0, 0, 0.25);',
      },
      lineHeight: {
        default: '18px',
      },
      borderWidth: {
        1: '1px',
      },
      zIndex: {
        100: '100',
      },
      margin: {
        center: '0 auto',
      },
    },
    screens: {
      md: { max: '640px' },
      sm: { max: '480px' },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
