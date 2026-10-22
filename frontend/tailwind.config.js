/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#FDF6EE",
        bloom: {
          50: "#FDF0F5",
          100: "#F9DCE7",
          200: "#F0B4CC",
          400: "#D9679A",
          500: "#C6467D",
          600: "#A6356A",
          900: "#5C2340",
        },
        sage: {
          50: "#F1F5EC",
          100: "#DCE7D0",
          300: "#A9C295",
          500: "#7A9471",
          700: "#546B4C",
        },
        gold: {
          100: "#FBEACB",
          300: "#EFC876",
          500: "#E3A857",
          700: "#B9822F",
        },
        plum: {
          900: "#2B2130",
          700: "#4A3B52",
          500: "#6E5C79",
        },
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Karla", "sans-serif"],
      },
      borderRadius: {
        petal: "63% 37% 54% 46% / 43% 47% 53% 57%",
        blob: "42% 58% 63% 37% / 47% 43% 57% 53%",
      },
    },
  },
  plugins: [],
};
