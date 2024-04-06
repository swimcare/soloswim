module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // Add the app folder to the purge paths
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontSize: {
        tiny: "0.9375rem",
        zero: "0rem",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main: "#2528D5",
        grey: {
          light3: "#efede5",
          light4: "#f5f4ef",
          light5: "#DCDCDE",
          warm: "#707070",
          dark1: "#414342",
        },
        navy: {
          light1: "#143f5f",
        },
        slateblue: {
          dark1: "#203E5C",
        },
        gold: {
          dark1: "#EFBE4A",
        },
        soloswim: {
          pink: "#fecbdf",
          orange: "#FEC798",
          yellow: "#f6eeae",
          green: "#D5E1BB",
          purple: "#D3CEE6",
          blue: "#B8D7EC",
        },
        soloswim2: {
          pink: "#F172AC",
          orange: "#FDB812",
          yellow: "#FFF200",
          green: "#A6CE38",
          purple: "#B289BE",
          blue: "#00B9F2",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "Arial", "sans-serif"], // change to var(--font-montserrat) when using app router
        lexend: [
          "Lexend", // change to var(--font-lexend) when using app router
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      height: {
        "screen-navbar": "calc(100vh - 54px)",
        88: "22rem",
      },
      width: {
        125: "125%",
        140: "140%",
        200: "200%",
      },
      maxWidth: {
        "9/10": "90%",
        "8/10": "80%",
        95: "95%",
        s: "22rem",
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "3rem", //48px
        12: "3.5rem", //56px
        13: "4rem", //64px
        14: "4.5rem", //72px
        15: "5rem", //80px
      },
      borderWidth: {
        3: "3px",
        5: "5px",
      },
      translate: {
        0.5: "0.125rem", //2px
      },
      boxShadow: {
        custom1: "0 3px 20px rgba(0, 0, 0, 0.07)",
        custom2: "0 3px 15px rgba(0, 0, 0, 0.1)",
        custom3: "0 3px 30px #0000000D",
        custom4: "0 3px 20px #00000029",
      },
      skew: {
        25: "-25deg",
        20: "-20deg",
      },
    },
  },
  variants: {
    extend: { backgroundColor: ["checked"], borderColor: ["checked"] },
  },
  plugins: [
    // ...
    require("@tailwindcss/line-clamp"),
  ],
};
