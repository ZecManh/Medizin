/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "768px" },

        xl: { max: "1280px" },
      },
      container: {
        padding: "5rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
