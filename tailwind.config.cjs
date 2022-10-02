/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        star: "url(/star.png)",
      },
      colors: {
        principal: {
          900: "#330693",
        },
        secundary: {
          700: "#8A53FF",
        },
        gray: {
          900: "#20292E",
        },
      },
    },
  },
  plugins: [],
};
