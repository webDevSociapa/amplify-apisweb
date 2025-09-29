/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    screens: {
      fold: "400px",
      xs: "450px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        "custom-yellow": "11px 20px 71px 10px #FFC660",
        "custom-darkGreen": "11px 20px 71px 10px #39412D",
        "custom-rama": "11px 20px 71px 10px #416E7C",
        "custom-pink": "11px 20px 71px 10px #E09384",
        'custom': '0px 4px 0px 0px #00000040',
        'custom-primary': '2px -3px 9px 7px #ae844a80',
      },
      backgroundImage: {
        "custom-radial-gradient":
          "radial-gradient(75.09% 126.62% at 88.36% 84.87%, rgba(186, 189, 189, 0.2) 0%, rgba(230, 230, 230, 0.2) 52.5%, rgba(255, 255, 255, 0.2) 100%)",
      },
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        literata: ["Literata", "serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar-hide"),
  ],
};
