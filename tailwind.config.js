const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: [
    './resources/views/**/*.php',
    './resources/assets/js/**/*.js',
    './resources/assets/js/**/*.vue',
    './resources/assets/sass/**/*.scss',
    './node_modules/@bytefury/spacewind/**/*.js',
    './node_modules/@bytefury/spacewind/**/*.vue',
    './node_modules/flatpickr/**/*.js',
    './node_modules/toastr/**/*.js',
    './public/js/pace/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F7F6FD',
          100: '#EEEEFB',
          200: '#9a99b5',
          300: '#4f4d7e',
          400: '#35336b',
          500: '#1c1a59',
          600: '#030046',
          700: '#686690',
          800: '#8180a3',
          900: '#b3b3c8',
        },
        black: '#040405',
      },
      spacing: {
        7: '1.75rem',
        9: '2.25rem',
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '24rem',
      },
      screens: {
        xxl: '1080px',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'visited'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'focus-within'],
    borderRadius: ['responsive', 'hover', 'first', 'last'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderStyle: ['responsive', 'hover', 'first', 'last'],
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
  },
  plugins: [
    require('@bytefury/spacewind/plugin'),

    plugin(({ config, addBase }) => {
      let craterDefaultTypography = {
        fontFamily: config('theme.fontFamily.base'),
      }
      addBase({
        '.h1': {
          ...craterDefaultTypography,
        },
        '.h2': {
          ...craterDefaultTypography,
        },
        '.h3': {
          ...craterDefaultTypography,
        },
        '.h4': {
          ...craterDefaultTypography,
        },
        '.h5': {
          ...craterDefaultTypography,
        },
        '.h6': {
          ...craterDefaultTypography,
        },
        '.page-title': {
          ...craterDefaultTypography,
        },
        '.section-title': {
          ...craterDefaultTypography,
        },
      })
    }),
  ],
}
