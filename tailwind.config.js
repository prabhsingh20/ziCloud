/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#06286E",
        navbar: "#3A3740",
        white: "#FFFFFF",
        secondary: "#696671",
        faq: "#28262C",
        icons: "#F5F5F5",
        paragraph: "#202B37",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      // eslint-disable-next-line no-unused-vars
      backgroundImage: (theme) => ({
        "gradient-theme": "linear-gradient(to bottom,#06286E,#164EC0)",
        "gradient-border": "linear-gradient(#217EEC, #082299)",
        "gradient-bg":
          "linear-gradient(to bottom left,#051A91,#061C93,#2284F1,#1F80EB)",
      }),
    },
  },
  plugins: [],
};
