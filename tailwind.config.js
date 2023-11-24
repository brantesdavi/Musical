/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        '75': '75px',
        '250': '250px'
      },
      width:{
        '75': '75px',
        '250': '250px'
      }
    },
  },
  plugins: [],
}

