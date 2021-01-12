/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');

const theme = {
  colors: {
    ...colors,
    primary: {
      ...colors.teal,
      DEFAULT: colors.teal[500],
    },
    grey: {
      ...colors.coolGray,
      DEFAULT: colors.coolGray[500],
    },
    secondary: {
      50: '#f3f1e0',
      100: '#e0dcb3',
      200: '#cbc67f',
      300: '#b6b14b',
      400: '#a7a422',
      500: '#999700',
      600: '#8d8800',
      700: '#7d7500',
      800: '#6b6000',
      900: '#4f3f00',
      DEFAULT: '#e0dcb3',
    },
    success: {
      ...colors.green,
      DEFAULT: colors.green[500],
    },
  },
  fontFamily: {
    sans: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Open Sans',
      'Helvetica Neue',
      'sans-serif',
    ],
  },
  extend: {
    spacing: {
      unset: 'unset',
      72: '18rem',
      84: '21rem',
      96: '24rem',
    },
    borderColor: {
      DEFAULT: '#eeeef0',
    },
  },
};

const variants = {
  borderWidth: ['responsive', 'first'],
  margin: ['responsive', 'last'],
};

const plugins = [];

const purge = ['./src/**/*.tsx'];

module.exports = {
  purge,
  theme,
  variants,
  plugins,
  darkMode: 'media',
};
