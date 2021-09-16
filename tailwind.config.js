module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        image: "440px",
      },
      fontSize: {
        icon: ["2.5rem", "2.5rem"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
  darkMode: "class",
};
