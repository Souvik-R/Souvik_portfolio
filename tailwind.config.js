/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s infinite',
        slideInLeft: 'slideInLeft 0.5s ease-out',
        slideInRight: 'slideInRight 0.5s ease-out',
        slideInTop: 'slideInTop 0.5s ease-out',
        slideInBottom: 'slideInBottom 0.5s ease-out',
        slideInDiagonal: 'slideInDiagonal 0.5s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        slideInLeft: {
          'from': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInRight: {
          'from': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInTop: {
          'from': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInBottom: {
          'from': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          'to': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideInDiagonal: {
          'from': {
            transform: 'translate(-50%, -50%)',
            opacity: '0',
          },
          'to': {
            transform: 'translate(0, 0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
