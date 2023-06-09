/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  mode: "jit",
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'kt_purple': '#7542c8',
        'kt_green': '#7ee787',
        'kt_green_light': '#CDDC39',
        'kt_pink': '#d6398f',
        'kt_olive': '#009688',
        'kt_blue_light': '#00BCD4',
      }
    },
  },
  plugins: [],
}

