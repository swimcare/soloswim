module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#2628cd",
        grey: {
          light3: "#efede5",
        },
        navy: {
          light1: "#143f5f",
        },
        slateblue: {
          dark1: "#203e5c",
        },
        soloswim: {
          pink: "#FFCCDF",
          orange: "#FDC797",
          yellow: "#F7EDAE",
          green: "#D5E1BB",
          purple: "#D3CEE6",
          blue: "#B8D7EC",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"],
        lexend: [
          "Lexend",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
  ],
};
