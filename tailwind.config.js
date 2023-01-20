/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#1363DF",
        dark: "#041C32",
        secondary: "#1C82AD",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
