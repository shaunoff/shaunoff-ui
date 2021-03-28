const merge = require('deepmerge')
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const config = {
  purge: {
    content: ['node_modules/@shaunoff-ui/components/dist/index.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

/**
 * Merge Default and Tailwind CSS configurations
 */
const themeWrapper = (tailwindConfig) => {
  let purge
  if (Array.isArray(tailwindConfig.purge)) {
    purge = {
      content: tailwindConfig.purge,
    }
  } else {
    purge = tailwindConfig.purge
  }
  return merge({ ...tailwindConfig, purge }, config)
}

module.exports = themeWrapper
