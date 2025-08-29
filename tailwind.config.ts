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
      keyframes: {
        blobMotion: {
          "0%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
          "20%": { transform: "translate(6px, -4px) scale(1.05) rotate(1deg)" },
          "40%": {
            transform: "translate(-5px, 5px) scale(0.97) rotate(-1deg)",
          },
          "60%": {
            transform: "translate(4px, 2px) scale(1.02) rotate(1.5deg)",
          },
          "80%": {
            transform: "translate(-3px, -6px) scale(1.04) rotate(-1.2deg)",
          },
          "100%": { transform: "translate(0px, 0px) scale(1) rotate(0deg)" },
        },
      },
      animation: {
        blobMotion: "blobMotion 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tw-animate-css")],
};
