/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      'primary-slabs': '#DB4437',
      'primary-white': '#fff',
      'primary-black': '#000'
    }
  },
  plugins: [],
}