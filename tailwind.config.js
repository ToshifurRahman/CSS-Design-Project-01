/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./index.ts", "./**/*.{html,js,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#a4bc46",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
