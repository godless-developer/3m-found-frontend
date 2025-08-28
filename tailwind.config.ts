/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightText: "#3a0ca3",
        darkText: "#e0aaff",
        lightBg: "#7CC8F5",
        darkBg: "#0C101C",
      },
    },
  },
  plugins: [require("tw-animate-css")],
};
