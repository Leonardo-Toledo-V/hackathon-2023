/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        blue:"#01A3A4",
        lightblue:"#01A3A4"
      },
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    }
  },
  darkMode: "class",
  plugins: [nextui()]
}