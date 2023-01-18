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
      backgroundImage: {
        "home-mobile":
          "url('./public/assets/mainbg/background-home-mobile.jpg')",
        "home-tablet":
          "url('./public/assets/mainbg/background-home-tablet.jpg')",
        "home-desktop":
          "url('./public/assets/mainbg/background-home-desktop.jpg')",
        "destination-mobile":
          "url('./public/assets/destinationbg/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./public/assets/destinationbg/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./public/assets/destinationbg/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
