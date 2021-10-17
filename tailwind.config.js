const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
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
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        body: {
          backgroundColor: '#1c1e21',
          backgroundImage: 'url("/src/assets/me.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backdropFilter: 'blur(5px)',
          fontSize: '1.2rem',
          color: '#f5f6f7',
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
        h1: {
          fontSize: theme('fontSize.3xl'),
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          fontWeight: 500,
          margin: '1.5rem 0',
          paddingBottom: '0.5rem',
        },
        p: { margin: '1.5rem 0' },
        a: { color: '#ffffff' },
      });
    }),
  ],
};
