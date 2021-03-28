const themeWrapper = require('@shaunoff-ui/components/config')

const testy = themeWrapper({
  purge: {
    content: [
      './pages/**/*.tsx',
      './pages/**/*.tsx',
      './containers/**/*.tsx',
      './components/**/*.tsx',
      './layouts/**/*.tsx',
    ],
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

console.log(testy)
module.exports = testy
