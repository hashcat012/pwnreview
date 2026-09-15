/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          950: "#09090b",
          900: "#18181b",
          800: "#27272a"
        }
      }
    }
  },
  plugins: []
};