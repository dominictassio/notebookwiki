module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: "0.5rem",
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
