/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "barlow-condensed": [
          "Barlow Condensed",
          ...defaultTheme.fontFamily.sans,
        ],
        bellefair: ["Bellefair", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
