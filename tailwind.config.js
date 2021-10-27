const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'dark-grey': '#1c1e21',
        'off-white': '#f5f6f7',
        'white-0.15': 'rgba(255, 255, 255, 0.15)',
      },
      backgroundImage: {
        writing: 'url("/src/assets/me.jpg")',
      },
      fontFamily: {
        sans: ['Quicksand', 'Work Sans', 'Verdana'],
      },
      animation: {
        widen: 'widen 250ms ease 1 0s normal forwards',
      },
      keyframes: {
        widen: {
          '0%': { width: 0 },
          '100%': { width: '2.5rem' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
