module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      paper: "8in",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    ({ addComponents }) =>
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen paper": {
            maxWidth: "8in",
          },
        },
      }),
  ],
};
