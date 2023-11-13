/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.vue",
      "./src/**/*.css"
  ],
  theme: {
    extend: {
      colors: {
        'taa-gray': {
          '50': '#FFFFFF',
          '100': '#F8F9FA',
          '200': '#E0E5E9',
          '300': '#C9D2D8',
          '400': '#B1BEC7',
          '500': '#99AAB6',
          '600': '#788F9F',
          '700': '#5D7382',
          '800': '#465661',
          '900': '#2E3940'
        },
        'neutral': {
          '900': '#1B1D21',
          '700': '#353B41',
          '400': '#7C8997',
          '200': '#C3CCD6',
          '100': '#F4F7FA',
          '50': '#C3CCD6'
        },
        'brand': {
          'black': '#043150',
          'dark-blue': '#085386',
          'blue': '#006EB8',
          'light-blue': "#3C95BC",
          'green': "#78BDC1",
          'light-green': "#D3F8F0"
        },
        'warning': {
          '900': '#FDB515'
        },
        'success': {
          '900': '#2DD267'
        },
        'info': {
          '900': '#3D9AE5',
          '800': '#C3EBFF',
          '700': '#EBF8FF'
        }
      }
    },
  },
  plugins: [],
}

