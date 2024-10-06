/** @type {import('tailwindcss').Config} */
module.exports = { 
  darkMode: ['class', '[data-mode="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}