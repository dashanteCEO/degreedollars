/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      fontFamily: {
        main: ['Montserrat']
      },
      colors: {
        blue: "#172554",
        white: "#FFFFFF",
        green: "#15803d",
        black: "#222222",
        primary: "#2ecc71",
      }
    },
    
  },
  plugins: [],
};
