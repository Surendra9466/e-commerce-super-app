/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'poppins' : ['Poppins', 'sans-serif'],
    },
    colors: {
      primary: '#ffffff',
      secondary: '#AB7A5F',
      accent: '#EADED7'
    }
  },
  plugins: [],
}
