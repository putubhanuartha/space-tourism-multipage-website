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
        "home-mobile": "url('/assets/mainbg/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/mainbg/background-home-tablet.jpg')",
        "home-desktop": "url('/assets/mainbg/background-home-desktop.jpg')",
        "destination-mobile":
          "url('/assets/destinationbg/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('/assets/destinationbg/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('/assets/destinationbg/background-destination-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
