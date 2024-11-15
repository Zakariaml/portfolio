/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",  // scan all HTML and TypeScript files in src
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      }
    }
  },
  plugins: [],
}

