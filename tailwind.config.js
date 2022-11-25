/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      "light-background": "#2c2c37",
      "dark-background": "#1e1f2a",
      error: "#ff3f3f",
      dark: "#21212CFF",
      mid: "#3b3b48",
      light: "#8891A3",
      white: "#F2F3FB",
      accent: "#645FC7",
    },
  },
  plugins: [],
};
