const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        bl: '#12100CB2',
        mainZero: '#12100C',
        mainGray: '#12100CB2',
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/Hero/Rectangle.svg')",
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

