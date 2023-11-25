const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
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
  plugins: [require("@tailwindcss/forms"),
  require("flowbite/plugin")],
};

