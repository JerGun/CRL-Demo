const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',

    './layouts/**/*.vue',

    './pages/**/*.vue',

    './plugins/**/*.{js,ts}',

    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...defaultTheme.colors,
        ...{
          'background': '#323232',
          'sub-background': '#424242',
          'option': '#525252',
          'box': '#727272',
          'sub-title': '#b2b2b2',
          'active': '#f21170',
          'sub-active': '#f9b208',
        },
      },
      screens: {
        sm: { min: '375px', max: '767px' },
        md: { min: '768px', max: '1279px' },
      },
      fontFamily: {
        sans: ['Prompt'],
        serif: ['Prompt'],
        mono: ['Prompt'],
        display: ['Prompt'],
        body: ['Prompt']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
