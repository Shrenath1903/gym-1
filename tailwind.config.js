/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {
      colors:{
        '70AB0E': {
          '800': '#70AB0E'
        }, // Remove extra comma here
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
});
