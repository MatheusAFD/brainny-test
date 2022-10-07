/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        detail: "url(/detail.png)",
        smokeOne: "url(/smokeOne.png)",
        smokeTwo: "url(/smokeTwo.png)",
        smokeRight: "url(/smokeRight.png)",
        star: "url(/star.png)",
        "card-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.8)), #8A53FF;",
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
