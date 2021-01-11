module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "0.5rem",
    },
    extend: {},
    screens: {
      sm: "640px",
      usm: { max: "639px" },
      paper: "calc(8in + 1rem)",
      upaper: { max: "calc(8in + 1rem - 1px)" },
    },
  },
  variants: {
    extend: {
      padding: ["focus"],
      width: ["focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    ({ addComponents }) =>
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen paper": {
            maxWidth: "calc(8in + 1rem)",
          },
        },
      }),
  ],
};
