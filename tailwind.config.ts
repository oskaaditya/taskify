import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: { min: '475px' },
      '2xs': { min: '576px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      '2md': { min: '834px' },
      lg: { min: '992px' },
      '2lg': { min: '1024px' },
      xl: { min: '1280px' },
      '1.5xl': { min: '1440px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1760px' },
      '4xl': { min: '1890px' },
      '5xl': { min: '2048px' },
    },
    fontFamily: {},
    extend: {
      colors: {
        neutrals: {
          '50': '#FAFAFA',
          '100': '#F5F5F5',
          '200': '#E6E7E8',
          '300': '#C3C5C7',
          '400': '#9FA3A6',
          '500': '#5D6063',
          '600': '#1D1E20',
        },
        primary: {
          '50': '#F2FBFF',
          '100': '#E6F7FF',
          '200': '#BFE9FF',
          '300': '#99D6FF',
          '400': '#4DA9FF',
          '500': '#0171FF',
          '600': '#0060E6',
        },
        additional: {
          navy: '#0F2060',
        },
      },
      fontSize: {},
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
