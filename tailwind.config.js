const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        "white": {
          DEFAULT: "#FFFFFF",
        },
        "bleached-silk": {
          light: "#FAFAFA",
          DEFAULT: "#F2F2F2",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

