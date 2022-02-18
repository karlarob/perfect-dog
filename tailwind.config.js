module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster Two", "cursive"],
      },
    },
  },
  plugins: [],
};
