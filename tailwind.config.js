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
      paper: "calc(8in + 1rem)",
    },
  },
  variants: {
    extend: {
      padding: ["focus"],
      width: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
