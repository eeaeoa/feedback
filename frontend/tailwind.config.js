/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      blue: {
        50: '#EAF3FF',
        100: '#DBF0FF',
        200: '#B9E4FF',
        300: '#88D6FF',
        400: '#50BDFF',
        500: '#289DFF',
        600: '#1782FF',
        700: '#0A66EB',
        800: '#0F52BE',
        900: '#134895',
      },
      green: {
        50: '#EBFAF4',
        500: '#4AC99B',
      },
      red: {
        50: '#FFEFEF',
        100: '#FFDCDC',
        200: '#FFBFBF',
        300: '#FF9292',
        400: '#FF5454',
        500: '#FF1F1F',
        600: '#FF0000',
        700: '#DB0000',
        800: '#AB0000',
        900: '#940808',
      },
      grey: {
        50: '#FFFFFF',
        100: '#F5F5F5',
        150: '#EBEBEB',
        200: '#E0E0E0',
        250: '#D6D6D6',
        300: '#C2C2C2',
        400: '#ADADAD',
        500: '#999999',
        600: '#7B7B7B',
        700: '#5E5E5E',
        800: '#404040',
        850: '#313131',
        900: '#232323',
        950: '#141414',
      },
      background: {
        1: '#F9F9F9',
        2: '#C6E0FF',
      },
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '0.875rem', letterSpacing: '' }], // 12/14px
      sm: ['0.875rem', { lineHeight: '1.125rem', letterSpacing: '' }], // 14/18px
      base: ['1rem', { lineHeight: '1.25rem', letterSpacing: '0.16px' }], // 16/20px
      lg: ['1.3rem', { lineHeight: '1.5rem', letterSpacing: '0.208px' }], // 20/24px
      xl: ['1.5rem', { lineHeight: '1.75rem', letterSpacing: '0.24px' }], // 24/28px
      '2xl': ['2.5rem', { lineHeight: '2.5rem', letterSpacing: '' }], // 40/40px
    },
    fontWeight: {
      medium: '400',
      semibold: '500',
      bold: '600',
    },
    fontFamily: {
      manrope: "'Manrope', sans-serif",
    },
    boxShadow: {
      custom: '0 16px 40px 10px rgba(20, 20, 20, 0.1)',
    },
    borderRadius: {
      sm: '0.625rem', // 10px
      md: '1rem', // 16px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
    },
    extend: {},
  },
  plugins: [],
}
