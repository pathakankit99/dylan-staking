module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./menu/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#bbb",
        black: "#111",
        general: "#a2a2a2",
        black_soft: "#333",
        black_col: "#2e333c",
        black_more: "#0f0f0f",
        color: "#FF343F",
        color_more: "#FC202C",
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.90",
      },
    },
  },
  plugins: [],
};
