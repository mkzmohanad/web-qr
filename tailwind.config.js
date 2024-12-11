/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        // mainColor : "#5B6F79" 
        mainColor : "#EAF8E7" ,
        textColor : "#27496D",
        aboutColor : "#1F3A93",
        cardColor : "#22766E"
      }
    },
  },
  plugins: [],
}

