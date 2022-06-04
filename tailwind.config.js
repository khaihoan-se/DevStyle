const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing': ['Dancing Script', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}