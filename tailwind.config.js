const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    './templates/**/*.twig',
    './assets/javascript/**/*.js',
  ],
  theme: {
    extend: {
      margin: {
        '60px': '60px',
      },
    },
  },
  plugins: [],
}
