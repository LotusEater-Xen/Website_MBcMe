/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';
export default {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
theme: {
    extend: {},
  },
    plugins: [require('daisyui'),
              flowbite,
    ],
    daisyui: {
      themes: [
      "light",
      "dark",
      "lofi",
      "wireframe", ],
    
    },
  }
  


