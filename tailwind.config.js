/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'base-blue': '#0052FF',
      'l2-gold': '#FFD700',
      'health-red': '#E11D48',
      'mana-blue': '#2563EB',
    },
      fontFamily: {
      game: ['"Press Start 2P"', 'cursive'], // Приклад піксельного шрифту
    },
      animation: {
      'item-glow': 'glow 2s ease-in-out infinite',
    },
    keyframes: {
      glow: {
        '0%, 100%': { opacity: 1, filter: 'brightness(100%)' },
        '50%': { opacity: 0.8, filter: 'brightness(150%)' },
      },
    },
    },
  },
  plugins: [],
}