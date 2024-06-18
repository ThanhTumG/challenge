/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat'],
        'raleway': ['Raleway'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'poppins': ['Poppins'],
        'roboto': ['Roboto'],
        'mysteryquest': ['Mystery Quest'],
        'montserrat': ['Montserrat']
      }
    },
    screens: {
      'smartPhone': '430px',
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  plugins: [

  ]
});

