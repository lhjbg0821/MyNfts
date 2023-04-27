/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FFD121",
      },
      fontFamily: {
        sans: ["DoHyeon", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
