/** @type {import('tailwindcss').Config} */

const theme = require('./styles/style.json');

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
    },
    extend: {
      boxShadow: {
        '2xs': 'var(--shadow-smallest)',
        xs: 'var(--shadow-extra-small)',
        sm: 'var(--shadow-small)',
        md: 'var(--shadow-medium)',
        lg: 'var(--shadow-large)',
        'taitopia-sm': 'var(--drop-shadow-sm)',
        'taitopia-lg': 'var(--drop-shadow-lg)',
        'taipower-2xl': 'var(--drop-shadow-2xl)',
      },
      ...theme,
    },
  },
  plugins: [
    require('tailwindcss-radix')(),
    require('prettier-plugin-tailwindcss'),
    plugin(function ({ addBase }) {
      addBase({});
    }),
  ],
};
