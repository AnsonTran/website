/** @type {import('tailwindcss').Config} */
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
    extend: {},
  },
  plugins: [],
}

