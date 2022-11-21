/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          "50": "#ff100109",
          "100": "#fffdf0",
          "200": "#fef8be",
          "300": "#fdf390",
          "400": "#fded5e",
          "500": "#fce72c",
          "600": "#e7d103",
          "700": "#ab9a02",
          "800": "#6f6402",
          "900": "#322d01",
        }
      }
    },
  },
  plugins: [],
}
