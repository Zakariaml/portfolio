/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",  // scan all HTML and TypeScript files in src
  ],
  theme: {
    extend: {
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        'progress': 'progress 1.5s ease-in-out'
      }
    }
  },
  plugins: [],
}

