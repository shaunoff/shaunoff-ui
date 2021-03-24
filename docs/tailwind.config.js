const themeWrapper = require('@shaunoff-ui/components/config')

module.exports = themeWrapper({
  purge: {
    // enabled: true,
    content: ['./**/*.html', './**/*.ts', './**/*.tsx', '../docs/**/*.html', '../docs/**/*.ts', '../docs/**/*.tsx'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
})
