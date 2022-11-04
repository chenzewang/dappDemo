/* eslint-disable global-require */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  daisyui: {
    themes: ["cupcake", "dark"],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
