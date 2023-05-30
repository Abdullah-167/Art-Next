module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#404040",
        GrayLight: "#575757",
        Gray: "#767676",
        GrayDark: "#222",
        borderColor: "#E4E4E4",
        bgGray: "#f6f6f6",
        inputFocus: "#4d90fe",
      },
      fontFamily: {
        sans: ["Orpheus", "sans-serif"],
        body: ["Orpheus", "sans-serif"],
        display: ["sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
