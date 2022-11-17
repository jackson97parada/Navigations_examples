/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      DM: ["DM Sans", "sans-serif"],
      Poppin: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        blueDark: "#2F1893",
        blueBlack: "#1E0E62",
      },
      backgroundImage: {
        headphones: "url('../images/headphones.png')",
        headphones2: "url('../images/Headphone2.png')",
      },
    },
  },
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
  ],
  plugins: [
    // include Flowbite as a plugin in your Tailwind CSS project
    require("flowbite/plugin"),
  ],
};
