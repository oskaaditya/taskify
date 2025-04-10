import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
      },
    },
    screens: {
      xs: { min: '475px' },
      '2xs': { min: '576px' },
      sm: { min: '640px' },
      md: { min: '768px' },
      '2md': { min: '834px' },
      lg: { min: '992px' },
      '2lg': { min: '1024px' },
      xl: { min: '1280px' },
      '2xl': { min: '1536px' },
      '3xl': { min: '1760px' },
      '4xl': { min: '1890px' },
      '5xl': { min: '2048px' },
    },
    fontFamily: {},
    extend: {
      fontSize: {
        xs: ['12px', '150%'],
        sm: ['14px', '150%'],
        base: ['16px', '150%'],
        lg: ['18px', '150%'],
        xl: ['20px', '150%'],
        h1: ['56px', '120%'],
        h2: ['48px', '120%'],
        h3: ['28px', '130%'],
        h4: ['24px', '130%'],
      },
      colors: {
        neutral: {
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
          purple: '#6D4EEC',
        },
      },
      backgroundImage: {
        'company-hero':
          "url('https://res.cloudinary.com/diuj6zd9p/image/upload/v1716795755/taskify/assets/images/company-hero-bg.jpg')",
      },
      screens: {
        phone: { max: '768px' },
        desktop: { min: '769px', max: '1440px' },
        largedesktop: { min: '1500px', max: '1920px' },
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/forms'), nextui(), require('tailwind-extended-shadows')],
};
export default config;
