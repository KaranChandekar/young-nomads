/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    colors: {
      'dark-cyan': 'hsl(158, 36%, 37%)',
      cream: 'hsl(30, 38%, 92%)',
      'very-dark-blue': 'hsl(212, 21%, 14%)',
      'dark-grayish-blue': 'hhsl(228, 12%, 48%)',
      white: 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      fraunces: ['Fraunces', 'serif'],
      montserrat: ['Montserrat', 'sans - serif'],
    },
  },
  plugins: [],
};
