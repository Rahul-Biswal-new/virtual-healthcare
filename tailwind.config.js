/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        dodgerblue: {
          "100": "#458ff6",
          "200": "#4089ed",
        },
        darkslategray: "#233348",
        slategray: "#7d7987",
        black: "#000",
        "f1534-hyfen": "#1f1534",
        gray: {
          "100": "rgba(255, 255, 255, 0.9)",
          "200": "rgba(255, 255, 255, 0.85)",
        },
        cornflowerblue: "#5b9bf3",
      },
      spacing: {},
      fontFamily: {
        muli: "Muli",
      },
      borderRadius: {
        "36xl": "55px",
        xl: "20px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "7xl": "26px",
      "5xl": "24px",
      lg: "18px",
      "2xl": "21px",
      base: "16px",
      "17xl": "36px",
      mid: "17px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
