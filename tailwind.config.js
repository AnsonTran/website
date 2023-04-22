/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: {
    relative: true,
    files: [
      "./src/index.html",
      "./src/app/**/*.{html,ts}",
      "./src/shared/**/*.{html,ts}",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}

