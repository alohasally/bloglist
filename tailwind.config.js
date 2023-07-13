/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      screen: {
        M: "360px",
        T: "768px",
        D: "1024px",
      },
    },
  },
  plugins: [],
};
