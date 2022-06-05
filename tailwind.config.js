const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', ...defaultTheme.fontFamily.sans],
        'fredoka': ['Fredoka One', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}